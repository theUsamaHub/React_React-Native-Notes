# Day 03 — Knowledge check

1. Why does `<p>topic</p>` display a different result from `<p>{topic}</p>`?
2. Why can `{practiceMinutes + reviewMinutes}` appear in JSX, while `{const total = 30;}` cannot?
3. What does changing a source filename from `.ts` to `.tsx` allow? Does it install React or make the file runnable by itself?
4. Why can a Fragment group two elements without replacing a layout container? What extra rule matters for native text?
5. If `const minutes: number = '20';` produces a type error, does removing the annotation guarantee safe numeric data from a server?

<details>
<summary>Suggested answers — attempt first</summary>

1. The first contains literal text; braces in the second evaluate the JavaScript variable and insert its value.
2. Addition is an expression that produces a value. A variable declaration is a statement, not an expression. Put the declaration before the return.
3. It allows JSX syntax in TypeScript source under a suitable compiler configuration. It installs nothing and still needs a configured application/toolchain.
4. A Fragment groups JSX without introducing a platform container, so it cannot supply a container's layout behavior. In native UI, visible strings/numbers must still belong inside Text.
5. No. The annotation catches a source-level mismatch but does not validate runtime data. Removing it would infer a string here, not turn the value into a number. External data requires runtime checks in a later lesson.

</details>
