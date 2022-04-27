
import { useState } from 'react';
import Container from './components/Container/Container.js';
import Button from './components/Button/Button';
import Stopwatch from './components/Stopwatch/Stopwatch';


function App() {
  const [time, setTime] = useState({ h: 0, m: 0, s: 0, ms: 0 });
  const [interv, setInterv] = useState();

  const start = () => {
    run();
    setInterv(setInterval(run, 10));
  };

  let updatedH = time.h, updatedM = time.m, updatedS = time.s, updatedMs = time.ms;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0
    }
    if (updatedMs === 60) {
      updatedS++;
      updatedMs = 0
    }
    updatedMs++;
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