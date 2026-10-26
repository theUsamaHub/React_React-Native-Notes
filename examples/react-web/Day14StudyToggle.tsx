import { useState } from 'react';

export default function Day14StudyToggle() {
  const [isStudying, setIsStudying] = useState(false);

  function handleStart() {
    setIsStudying(true);
  }

  function handlePause() {
    setIsStudying(false);
  }

  return (
    <section>
      <h2>Study session</h2>
      <p>{isStudying ? 'Studying now' : 'Paused'}</p>
      <button type="button" onClick={handleStart}>Start</button>
      <button type="button" onClick={handlePause}>Pause</button>
    </section>
  );
}
