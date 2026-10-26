export default function Day13LessonActions() {
  function handleReminder() {
    window.alert('Study one concept for 20 minutes.');
  }

  function handleTopic(topic: string) {
    window.alert('Review: ' + topic);
  }

  return (
    <section>
      <h2>Lesson actions</h2>
      <button type="button" onClick={handleReminder}>Show reminder</button>
      <button type="button" onClick={() => handleTopic('Props')}>Review props</button>
    </section>
  );
}
