function OverviewTitle() {
  return <h2>Study overview</h2>;
}

function ReadingTask() {
  return <p>Read the lesson for 10 minutes.</p>;
}

function PracticeTask() {
  return <p>Practise the concept for 20 minutes.</p>;
}

function StudyPlan() {
  return (
    <div>
      <ReadingTask />
      <PracticeTask />
    </div>
  );
}

export default function Day07StudyOverview() {
  return (
    <section>
      <OverviewTitle />
      <StudyPlan />
    </section>
  );
}
