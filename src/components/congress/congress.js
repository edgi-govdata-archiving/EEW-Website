import React, { useEffect, useRef } from "react";
import { select, timeFormatLocale } from 'd3';
import styles from './congress.module.css';
import { useCongressData } from 'hooks/use-congress-data';

function Congress() {
  const figureRef = useRef();
  const congressData = useCongressData();

  // d3 manipulation of div elements rather than svg/rect elements from: https://pudding.cool/process/flexbox-layout/
  // React (Hooks) with d3 from: https://github.com/muratkemaldar/using-react-hooks-with-d3

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

        if (d.affil == "gop") {
          thisRep.style("background-color","red");
        } else {
          thisRep.style("background-color","blue"); 
        }

        if (d.rank == "chair") {
          thisRep.attr("class", styles.chair);
        } else {
          thisRep.attr("class", styles.rep);
        }

        thisRep.text(d.state)
      })
      .on('mouseover', function(d) {
        tooltip.text(d.name); 
        
        return tooltip.style('visibility', 'visible');
      })
      .on('mouseout', function(d) {
        return tooltip.style('visibility', 'hidden');
      });

      var tooltip = fig.append('div')
      .style('position', 'absolute')
      .style('z-index', '10')
      .style('visibility', 'hidden')
      .style('background', 'white');

  }, [congressData]);

  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.title}>Senate Environment and Public Works Committee</div>
        <figure ref={figureRef} className={styles.viz}>  
        </figure>
      </div>
    </React.Fragment>
  )
}

export default Congress;
