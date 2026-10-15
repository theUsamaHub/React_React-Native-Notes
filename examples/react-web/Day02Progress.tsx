export default function Day02Progress() {
  const completedLessons = 1;
  const totalLessons = 4;
  const remainingLessons = totalLessons - completedLessons;

  return (
    <section>
      <h1>Learning progress</h1>
      <p>Completed: {completedLessons} of {totalLessons}</p>
      <p>Remaining: {remainingLessons}</p>
    </section>
  );
}
