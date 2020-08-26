import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { select } from 'd3';
import useResizeObserver from 'helpers/useResizeObserver';
import styles from './circle.module.css';
import { useCongressData } from 'hooks/use-congress-data';

function Circle() {
  //const svgRef = useRef();
  const congressData = useCongressData();

  // Select the svg as declared in the layout section (at bottom)
  // d3 manipulation of div elements rather than svg/rect elements from: https://pudding.cool/process/flexbox-layout/
  const fig = select('.viz');

  fig
    .attr("class", styles.viz );

  fig
    .selectAll(".rep")
    .data(congressData)
    .join('div')
    .each(function (d) {
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
    });
  
  return (
    <figure className="viz" >
    </figure>
  )
}

export default Circle;
