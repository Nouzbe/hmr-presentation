import _ from "lodash";
import React from "react";
import { Slide, List, Notes } from "spectacle";

import style from "../utils/style";

/**
 * Takes in a set of thoughts ({point: React.Component, note: React.Component})
 * Outputs a set of slides that together look like a List
 * Where bullets and notes are unveiled one after another.
 *
 * The same look can be achieve using Appear from spectacle.
 * The benefit of this impl is that the note appears at the same time as the point.
 */
export default ({ Title, Thoughts }) =>
  _.range(Thoughts.length).map(i => props => {
    // This bit of style ensures that enough room remains for the upcoming points
    // Underneath the title and the already rendered points.
    const layoutStyle = {
      position: "relative",
      top: `-${40 * (Thoughts.length - i)}px`
    };
    const UnveiledThoughts = Thoughts.slice(0, i + 1);
    return (
      <Slide {...props} bgColor="primary">
        {Title && (
          <div style={layoutStyle}>
            <Title />
          </div>
        )}
        <List
          style={{
            ...style.list,
            ...layoutStyle
          }}
        >
          {UnveiledThoughts.map(({ Point }, j) => (
            <Point key={`point-${j}`} />
          ))}
        </List>
        <Notes>
          {UnveiledThoughts.map(({ Note }, j) => (
            <Note key={`note-${j}`} />
          ))}
        </Notes>
      </Slide>
    );
  });
