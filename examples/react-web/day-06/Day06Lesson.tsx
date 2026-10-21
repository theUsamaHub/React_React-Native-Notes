import LessonTitle from './LessonTitle';
import { estimatedMinutes, lessonTopic } from './lessonInfo';

export default function Day06Lesson() {
  return (
    <section>
      <LessonTitle />
      <p>{lessonTopic}</p>
      <p>Estimated time: {estimatedMinutes} minutes</p>
    </section>
  );
}
