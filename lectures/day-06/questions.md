# Day 06 — Knowledge check

1. A file default-exports LessonTitle. Why is `import { LessonTitle } from './LessonTitle'` incorrect for that export?
2. Why does importing a component not automatically display it?
3. A file moves into a subfolder. Why might its `./lessonInfo` import stop working although lessonInfo.ts still exists?
4. What differs between `from 'react-native'` and `from './LessonTitle'`?
5. Can a module export several named constants and one default component? Which parts of today's example require `.tsx`?

<details>
<summary>Suggested answers — attempt first</summary>

1. Braces request a named export with that name; the module provides a default export. Use a default import or deliberately change the export contract.
2. Importing makes a value available in scope. The component must be included in a rendered JSX tree to display its UI.
3. Relative paths start from the importing file, so moving it changes what `./` refers to. Adjust the path or preserve the intended directory relationship.
4. The first is a package reference; the second is a relative source-file reference. The same import syntax can resolve different kinds of locations.
5. Yes, there can be multiple named exports and at most one default export. The title and screen contain JSX and use `.tsx`; the constants-only file can use `.ts`.

</details>
