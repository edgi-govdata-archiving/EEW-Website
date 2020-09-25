import React, { useEffect, useRef } from "react";
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

function Congress({chamber}) {
  const figureRef = useRef();
  const allCongressData = useCongressData();
  let congressData = "";
  let committee = "";
  
  if(chamber=="senate"){
    congressData = allCongressData.senateData;
    committee = "Senate Environment and Public Works Committee";
  } else {
    congressData = allCongressData.houseData;
    committee = "House Energy and Commerce Committee";
  }

  useEffect(() => {
    // Select the figure as declared in the layout section (at bottom)
    const fig = select(figureRef.current);

    fig
      .selectAll('div')
      .data(congressData) //Attach data
      .join('div') //Create divs
      .each(function (d) {
        //Apply stylings to each representative
        var thisRep = select(this);

        //Apply standard party colors
        if (d.affil == "Republican") {
          thisRep.style("background-color","red");
        } else {
          thisRep.style("background-color","blue"); 
        }

        //Apply different opacity depending on whether the report was completed or not
        if (d.reportStatus == "notCompleted") {
          thisRep.style("opacity", 0.6);
        } else if (d.reportStatus == "completed") {
          thisRep.style("opacity", 1);
        }

        //Apply a different class if the rep is a chair (in thise case, to make it larger than the regular reps)
        if (d.rank == "Chair") {
          thisRep.classed(styles.chair, true);
        } else {
          thisRep.classed(styles.rep, true);
        }

        //This is where you can add additional classes, specified in the files congress.module.css, e.g.:
        //thisRep.classed(styles.<class>, true)

        //Make the text in the box unselectable to improve usability
        thisRep.classed(styles.unselectable, true);

        //Set the text in the box to be the representative's state
        thisRep.text(d.state)
      })
      .on('mouseover', function(d) {
        select(this).classed(styles.repOnHover,true);

        //Set the text of the tooltip
        var tooltipText = d.name + '\nCommittee ' + d.rank + '\n' + d.affil + '\nRepresenting ' + d.state
        if (d.district) {
          tooltip.text(tooltipText + ' ' + d.district)
        } else {
          tooltip.text(tooltipText);
        }
        
        //Position tooltips at mouse location
        var x = event.x,
            y = event.y;        
        tooltip.style('top', y + 'px');
        tooltip.style('left', x + 2 + 'px');
        
        //Show the tooltip
        return tooltip.style('visibility', 'visible');
      })
      .on('mouseout', function(d) {
        select(this).classed(styles.repOnHover,false);
        //Hide the tooltip
        return tooltip.style('visibility', 'hidden');
      })
      .on('mousemove', function(d) {
        var x = event.x,
            y = event.y;        
        tooltip.style('top', y + 'px');
        tooltip.style('left', x + 10 + 'px');
      })
      .on('click', function(d) {
        //Open a link on click
        //When the correct URL has been determined, replace the "url" property for each representative in congress.json
        if (d.reportStatus == "completed") {
          window.open(d.url);
        }
      });

      var tooltip = fig.append('div')
      .style('visibility', 'hidden')
      .style('position', 'fixed')
      .classed(styles.tip, true)
      .classed(styles.unselectable, true);

  }, [congressData]);

  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.title}>
          {committee}
        </div>
        <figure ref={figureRef} className={styles.viz} ></figure>
      </div>
    </React.Fragment>
  )
}

export default Congress;
