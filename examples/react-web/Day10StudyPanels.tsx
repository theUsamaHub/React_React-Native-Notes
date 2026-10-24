import type { ReactNode } from 'react';

type StudyPanelProps = {
  readonly title: string;
  readonly children: ReactNode;
};

function StudyPanel(props: StudyPanelProps) {
  return (
    <section>
      <h2>{props.title}</h2>
      <div>{props.children}</div>
    </section>
  );
}

function StudyTip() {
  return <p>Explain the idea in your own words.</p>;
}

export default function Day10StudyPanels() {
  return (
    <div>
      <StudyPanel title="Today's focus">
        <p>Build one small example.</p>
      </StudyPanel>
      <StudyPanel title="Revision tip">
        <StudyTip />
      </StudyPanel>
    </div>
  );
}
