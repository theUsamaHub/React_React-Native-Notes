export default function Day03Session() {
  const topic: string = 'JSX and TSX';
  const practiceMinutes: number = 20;
  const reviewMinutes: number = 10;

  return (
    <section className="study-session">
      <h1>{topic}</h1>
      <p>Practice: {practiceMinutes} minutes</p>
      <p>Total: {practiceMinutes + reviewMinutes} minutes</p>
      {/* This comment is not displayed. */}
    </section>
  );
}
