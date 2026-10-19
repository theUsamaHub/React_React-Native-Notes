# Day 04 — Knowledge check

1. What distinguishes a component definition from placing `<StudyCard />` in an application's returned JSX?
2. Why should a component return a description instead of changing a shared counter whenever React calls it?
3. Does a function component require a hook or React.FC annotation? Explain your reasoning.
4. A card appears twice in a screen. Does that require copying its function definition? Can you assume React calls it exactly twice forever?
5. Which parts of today's component transfer to native, and which depend on the rendering platform?

<details>
<summary>Suggested answers — attempt first</summary>

1. A definition makes the function available; JSX usage includes a component instance in the UI description so React can render it. A definition alone displays nothing.
2. Rendering should calculate UI without changing pre-existing external data. A shared counter would make output depend on execution history and repeated rendering could change it unexpectedly.
3. No. A simple function returning JSX is a component when used by React. Hooks provide additional behavior when needed; TypeScript can infer this return type without React.FC.
4. No; reuse the same definition through JSX. React controls when it renders, and development checks or later updates may call functions again. Output must not depend on an assumed call count.
5. The function structure, local arithmetic, naming and pure rendering reasoning transfer. Browser tags change to native components with imports and different styling/semantics.

</details>
