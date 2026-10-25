type Lesson = {
  readonly id: string;
  readonly title: string;
};

const lessons: readonly Lesson[] = [
  { id: 'lesson-props', title: 'Props' },
  { id: 'lesson-children', title: 'Children' },
  { id: 'lesson-conditions', title: 'Conditional rendering' },
];

export default function Day12LessonList() {
  if (lessons.length === 0) {
    return <p>No lessons queued.</p>;
  }

  return (
    <section>
      <h2>Revision queue</h2>
      <ul>
        {lessons.map((lesson) => (
          <li key={lesson.id}>{lesson.title}</li>
        ))}
      </ul>
    </section>
  );
}
