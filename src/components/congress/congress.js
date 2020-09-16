import React, { useEffect, useRef } from "react";
import { select, event } from 'd3';
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

        //Apply standard party colors
        if (d.affil == "gop") {
          thisRep.style("background-color","red");
        } else {
          thisRep.style("background-color","blue"); 
        }

        //Apply a different class if the rep is a chair (in thise case, make it larger than the others)
        if (d.rank == "chair") {
          thisRep.classed(styles.chair, true);
        } else {
          thisRep.classed(styles.rep, true);
        }

        thisRep.classed(styles.unselectable, true);

        thisRep.text(d.state)
      })
      .on('mouseover', function(d) {
        //Set the text of the tooltip
        tooltip.text(d.name + '\n' + d.rank + '\n' + d.affil); 
        
        //Position tooltips at mouse location
        var x = event.x,
            y = event.y;        
        tooltip.style('top', y + 'px');
        tooltip.style('left', x + 2 + 'px');
        
        //Show the tooltip
        return tooltip.style('visibility', 'visible');
      })
      .on('mouseout', function(d) {
        //Hide the tooltip
        return tooltip.style('visibility', 'hidden');
      })
      .on('mousemove', function(d) {
        var x = event.x,
            y = event.y;        
        tooltip.style('top', y + 'px');
        tooltip.style('left', x + 10 + 'px');
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
        <div className={styles.title}>Senate Environment and Public Works Committee</div>
        <figure ref={figureRef} className={styles.viz}>  
        </figure>
      </div>
    </React.Fragment>
  )
}

export default Congress;
