type LessonCardProps = {
  readonly title: string;
  readonly minutes: number;
};

function LessonCard(props: LessonCardProps) {
  return (
    <section>
      <h2>{props.title}</h2>
      <p>Study time: {props.minutes} minutes</p>
    </section>
  );
}

export default function Day09LessonCards() {
  return (
    <div>
      <LessonCard title="Reading" minutes={15} />
      <LessonCard title="Practice" minutes={20} />
    </div>
  );
}
