import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { select, event } from 'd3';
import styles from './congress.module.css';
import { useCongressData } from 'hooks/use-congress-data';

// Usage:
// ADD NEW DATA TO: content\congress\congress.json
// MAKE SURE EVERYTHING IS QUERIED IN: src\hooks\use-congress-data.js (no need to change this file if you are not adding any new variables to the json!)
// ADD OR EDIT STYLES ON THIS CSS SHEET: src\components\congress\congress.module.css
// REFERENCE A CLASS USING THIS SYNTAX: styles.example

// Credits:
// d3 manipulation of div elements rather than svg/rect elements from: https://pudding.cool/process/flexbox-layout/
// React (Hooks) with d3 from: https://github.com/muratkemaldar/using-react-hooks-with-d3

// Notes:
// If report cards will be links, then could do something like this: http://www.d3noob.org/2014/05/including-html-link-in-d3js-tool-tip.html

function Congress({ chamber, language }) {
  const figureRef = useRef();
  const allCongressData = useCongressData();
  let congressData = '';
  let committee = '';

  if (chamber == 'senate') {
    congressData = allCongressData.senateData;
    if (language == 'spanish') {
      committee = 'Comité de Obras Públicas y Medio Ambiente del Senado';
    } else {
      committee = 'Senate Environment and Public Works Committee';
    }
  } else if (chamber == 'house') {
    congressData = allCongressData.houseData;
    if (language == 'spanish') {
      committee = 'Comité de Energía y Comercio de la Cámara de Representantes';
    } else {
      committee = 'House Energy and Commerce Committee';
    }
  } else if (chamber == 'otherSenate') {
    congressData = allCongressData.otherSenate;
    if (language == 'spanish') {
      committee = 'Boletas de Calificaciones Adicionales del Senado';
    } else {
      committee = 'Additional Senate Reports';
    }
  } else if (chamber == 'otherHouse') {
    congressData = allCongressData.otherHouse;
    if (language == 'spanish') {
      committee = 'Boletas de Calificaciones Adicionales de la Cámara de Representantes';
    } else {
      committee = 'Additional House Reports';
    }
  }

  useEffect(() => {
    // Select the figure as declared in the layout section (at bottom)
    const fig = select(figureRef.current);

    fig
      .selectAll('div')
      .data(congressData) //Attach data
      .join('div') //Create divs
      .each(function(d) {
        // Apply stylings to each representative
        var thisRep = select(this);

        // Apply standard party colors
        if (d.affil == 'Republican') {
          thisRep.style('background-color', '#bc4749');
        } else if (d.affil == 'Democrat') {
          thisRep.style('background-color', '#3f6bc1');
        } else if (d.affil == 'Independent') {
          thisRep.style('background-color', '#9A77BB');
        } else {
          // All cases should be well covered but here's EDGI's green for futureproofing
          thisRep.style('background-color', '#1B7F71');
        }

        // Apply different opacity depending on whether the report was completed or not
        if (d.reportStatus == 'notCompleted') {
          thisRep.style('opacity', 0.6);
        } else if (d.reportStatus == 'completed') {
          thisRep.style('opacity', 1);
        }

        // Apply a different class if the rep is a chair (in thise case, to make it larger than the regular reps)
        if (d.rank == 'Chair') {
          thisRep.classed(styles.chair, true);
        } else if (d.rank == 'Ranking Member') {
          thisRep.classed(styles.ranking, true);
        } else {
          thisRep.classed(styles.rep, true);
        }

        // This is where you can add additional classes, specified in the files congress.module.css, e.g.:
        // thisRep.classed(styles.<class>, true)

        // Make the text in the box unselectable to improve usability
        thisRep.classed(styles.unselectable, true);

        // Set the text in the box to be the representative's state
        if (d.district) {
          thisRep.text(d.state + '\n' + d.district);
        } else {
          thisRep.text(d.state);
        }
      })
      .on('mouseover', function(d) {
        select(this).classed(styles.repOnHover, true);

        // This section sets up contents of tooltip

        // Include district if applicable
        let party = d.affil;
        let rank = d.rank;
        if (language == 'spanish') {
          party = '';
          d.affil == 'Democrat'
            ? (party = 'Demócrata')
            : d.affil == 'Republican'
            ? (party = 'Republicano')
            : d.affil == 'Independent'
            ? (party = 'Independiente')
            : (party = 'Desconocido');
          rank = '';
          d.rank == 'Chair'
            ? (rank = 'Presidente')
            : d.rank == 'Ranking Member'
            ? (rank = 'Miembro de Mayor Rango')
            : d.rank == 'Member'
            ? (rank = 'Miembro')
            : d.rank == 'Not a member of an\nEPA oversight committee'
            ? (rank = 'No es miembro de un comité\nde supervisión de la EPA')
            : (rank = 'Desconocido');
        }
        var infoText = '\n' + party + '';
        infoText +=
          language == 'spanish' ? '\nRepresentando ' : '\nRepresenting ';
        infoText += d.state;
        if (d.district) {
          // d.district undefined for senate because not called in graphQL query
          infoText = infoText + ' ' + d.district;
        }

        // Set the text of the tooltip
        tooltip
          .text(d.name)
          .append('tspan')
          .style('font-weight', 700)
          .text('\n' + rank)
          .append('tspan')
          .style('font-weight', 300)
          .text(infoText);

        // Position tooltips at mouse location
        var x = event.x,
          y = event.y;
        tooltip.style('top', y + 'px');
        tooltip.style('left', x + 2 + 'px');

        // Show the tooltip
        return tooltip.style('visibility', 'visible');
      })
      .on('mouseout', function() {
        select(this).classed(styles.repOnHover, false);
        // Hide the tooltip
        return tooltip.style('visibility', 'hidden');
      })
      .on('mousemove', function() {
        var x = event.x,
          y = event.y;
        tooltip.style('top', y + 'px');
        tooltip.style('left', x + 10 + 'px');
      })
      .on('click', function(d) {
        // Open a link on click
        // When the correct URL has been determined, replace the "url" property for each representative in congress.json
        if (d.reportStatus == 'completed') {
          let url = d.url;
          language == 'spanish' ? (url += '_es') : (url = d.url);
          window.open(url);
        }
      });

    var tooltip = fig
      .append('div')
      .style('visibility', 'hidden')
      .style('position', 'fixed')
      .classed(styles.tip, true)
      .classed(styles.unselectable, true);
  }, [congressData]);

  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.title}>{committee}</div>
        <figure ref={figureRef} className={styles.viz}></figure>
      </div>
    </React.Fragment>
  );
}

Congress.propTypes = {
  chamber: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};

export default Congress;
