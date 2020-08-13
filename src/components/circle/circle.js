import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { select } from 'd3';
import useResizeObserver from 'helpers/useResizeObserver';
import styles from './circle.module.css';

function Circle(props) {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);

  useEffect(() => {
  // d3 stuff goes here
  const svg = select(svgRef.current);
  const { width, height } =
    dimensions || wrapperRef.current.getBoundingClientRect();

  svg
    .selectAll("circle")
    .data(props.data)
    .join("circle")
    .attr("class", styles.circle1 )
    .attr("cx", (value, index) => 10 + index * 40)
    .attr("cy", 10)
    .attr("r", 10);

  }, [props.data, dimensions])

  return (
    <div ref={wrapperRef} style={{ marginBottom: "2rem" }}>
      <svg ref={svgRef} />
    </div>
  )
}

Circle.propTypes = {
  data: PropTypes.node.isRequired,
};

export default Circle;
