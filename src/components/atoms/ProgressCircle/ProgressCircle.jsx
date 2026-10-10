//react
import { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

//sass
import styles from './_ProgressCircle.module.scss';
import 'react-circular-progressbar/dist/styles.css';


function ProgressProvider({ valueStart, valueEnd, children }) {
  const [value, setValue] = useState(valueStart);

  useEffect(() => {
    setValue(valueEnd);
  }, [valueEnd]);

  return children(value);
}

export default function ProgressCircle({ array }) {

  const averageVoteColor = () => {
    if (array.length === 0) return;
    const averageVoteNumeric = +array.vote_average?.toPrecision(2) * 10;
    if (averageVoteNumeric < 40) return '#DB2360';
    if (averageVoteNumeric < 70) return '#0a0a03';
    return '#21D07A';
  };

  return (
    <ProgressProvider
      valueStart={0}
      valueEnd={array.vote_average?.toPrecision(2) * 10}
    >
      {(value) => (
        <CircularProgressbar
          className={`${styles.progress_circle}  text_preset_5  text_preset_5--bigger`}
          value={value}
          text={`${value}%`}
          styles={buildStyles({
            pathTransitionDuration: 1.5,
            strokeLinecap: 'round',
            textSize: '32px',
            textColor: '#fff',
            pathColor: averageVoteColor(),
          })}
        />
      )}
    </ProgressProvider>
  )
}