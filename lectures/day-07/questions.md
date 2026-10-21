# Day 07 — Knowledge check

1. In the example tree, which components are siblings? Which parent directly includes ReadingTask?
2. Does a child component need to be defined inside its parent function or in a separate file? Why?
3. Why does the browser not contain a StudyPlan HTML tag simply because `<StudyPlan />` appears in JSX?
4. If two parents use the same task component, how many definitions are needed? Does reuse alone guarantee faster rendering?
5. Which parts of the composed overview transfer directly to native, and which parts need adaptation?

<details>
<summary>Suggested answers — attempt first</summary>

1. OverviewTitle and StudyPlan are siblings; ReadingTask and PracticeTask are siblings. StudyPlan directly includes ReadingTask.
2. Neither is required. Define it at module scope and use it through JSX. Separate files are an organizational choice; UI nesting is not function-definition nesting.
3. React resolves the custom component to its returned description. In this example the DOM gets the returned div and paragraphs, not a custom tag named after the function.
4. One definition is sufficient, with separate JSX usages. Composition is not itself a performance guarantee; its benefit here is clearer responsibilities and reuse.
5. The custom component tree, function structure, naming and arrangement transfer. HTML output becomes native components with suitable text containment, roles and layout handling.

</details>
