type StudyStatusProps = {
  readonly isVisible: boolean;
  readonly remaining: number;
  readonly showTip: boolean;
};

function StudyStatus(props: StudyStatusProps) {
  if (!props.isVisible) {
    return null;
  }

  return (
    <section>
      <h2>Study status</h2>
      {props.remaining === 0 ? (
        <p>All lessons reviewed.</p>
      ) : (
        <p>Lessons remaining: {props.remaining}</p>
      )}
      {props.showTip && <p>Explain one idea in your own words.</p>}
    </section>
  );
}

export default function Day11StudyStatus() {
  return <StudyStatus isVisible={true} remaining={2} showTip={false} />;
}
