
import { useState } from 'react';
import Container from './components/Container/Container.js';
import Button from './components/Button/Button';
import Stopwatch from './components/Stopwatch/Stopwatch';


function App() {
  const [time, setTime] = useState({ h: 0, m: 0, s: 0, ms: 0 });
  const [interv, setInterv] = useState();

  const updateIntervalMs = 10;

  const start = () => {
    run();
    setInterv(setInterval(run, updateIntervalMs));
  };

  let updatedH = time.h;
  let  updatedM = time.m;
  let  updatedS = time.s;
  let  updatedMs = time.ms;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0
    }
    if (updatedMs === 999) {
      updatedS++;
      updatedMs = 0
    }
    updatedMs += updateIntervalMs;
    return setTime({ h: updatedH, m: updatedM, s: updatedS, ms: updatedMs });
  };

  const stop = () => {
    clearInterval(interv)
  }

  const reset = () => {
    clearInterval(interv)
    return setTime({ h: 0, m: 0, s: 0, ms: 0 })
  }

  return (
    <Container>

      <Stopwatch time={time} />
      <Button start={start} stop={stop} reset={reset} />


    </Container>
  );
};

export default App;