import { store } from '../index';
import Measure from '../components/chart/Measure';

export const renderLines = (measuresPerLine = 4,part) => {
  let lines = [];
  let { song } = store.getState().chart;

  const numOfLines = Math.ceil(song.length / measuresPerLine);

  for (let i = 0; i < numOfLines; i++) {
    lines.push(
      song
        .slice(i * measuresPerLine, i * measuresPerLine + measuresPerLine)
        .map((chords, index) => {
          //logic to make measures resize on lines w/ less than four measures can go here.  Pass how many measures are in line to Measure props, and then resize (100/howMany)+"%" inside Measure component
          return (
            <Measure
              key={index}
              howManyMeasuresAreInThisLine={4}
              measureNumber={i * measuresPerLine + index}
            />
          );
        })
    );
  }

  return lines;
};
