import React, { useEffect, useRef } from "react";
import { select } from 'd3';
import styles from './circle.module.css';
import { useCongressData } from 'hooks/use-congress-data';

function Circle() {
  const figureRef = useRef();
  const congressData = useCongressData();

  // Select the figure as declared in the layout section (at bottom)
  // d3 manipulation of div elements rather than svg/rect elements from: https://pudding.cool/process/flexbox-layout/

  useEffect(() => {
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
      });
  }, [congressData]);

  return (
    <figure ref={figureRef} className={styles.viz}>  
    </figure>
  )
}

export default Circle;
