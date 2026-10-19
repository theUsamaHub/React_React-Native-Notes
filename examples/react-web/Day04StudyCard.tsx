export default function Day04StudyCard() {
  const readingMinutes = 15;
  const practiceMinutes = 20;
  const totalMinutes = readingMinutes + practiceMinutes;

  return (
    <section>
      <h2>Today's study session</h2>
      <p>Read, then practise one concept.</p>
      <p>Planned time: {totalMinutes} minutes</p>
    </section>
  );
}
