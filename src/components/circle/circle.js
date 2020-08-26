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
  const fig = select('.viz');

  fig
    .attr("class", styles.viz );

  fig
    .selectAll(".rep")
    .data(congressData)
    .join('div')
    .attr("class", styles.rep )
    .each(function (d) {
      var thisCircle = select(this);
      if (d.affil == "gop") {
        thisCircle.style("background-color","red");
      } else {
        thisCircle.style("background-color","blue");
      }
    });
  
  return (
    <figure className="viz" >
    </figure>
  )
}

export default Circle;
