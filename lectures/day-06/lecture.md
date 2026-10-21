# Day 06 — Modules and Imports/Exports

## Lecture Header

- **Day:** 06
- **Topic:** Organizing a small screen across explicit file boundaries
- **Learning phase:** Phase 1 — Fundamentals
- **Difficulty:** Beginner
- **Prerequisites:** Days 01–05; function components, local constants and basic JSX.
- **Estimated study time:** 30 minutes reading; 25–40 minutes practice across both platforms.
- **Learning objectives:** Define a module; distinguish default and named exports; resolve relative paths; use `.ts` versus `.tsx`; diagnose import failures; preserve Expo's route structure while organizing reusable files.

The sole new topic is file boundaries. The screen stays static; no hooks, APIs or routing logic are introduced.

## Section A — React.js Concept

### 1. WHAT — A module is a file boundary

In this lesson, a **module** is a source file that uses imports or exports. Its internal declarations are not automatically available to every other file. An **export** exposes a value; an **import** brings an exported value into another module's scope.

This is JavaScript module syntax, not a React-only feature. Components are functions that can be exported like other values. A file can have at most one default export and multiple named exports. Default imports have no braces; named imports use braces and match exported names unless explicitly aliased. [React's import/export guide](https://react.dev/learn/importing-and-exporting-components).

### 2. WHY — Make relationships explicit

A growing screen can become hard to scan if every title, constant and UI section lives in one file. A useful split makes ownership clear: a title file describes its heading, a data file supplies lesson constants, and a screen file arranges the output.

Splitting files does not automatically improve architecture or performance. The goal is a clear boundary, not the largest possible file count. Today's small example is deliberately divided so you can trace imports.

### 3. WHEN — Choose a purposeful boundary

Separate a component when it has a useful name or will be reused. Put shared constants in a small data module when they belong together. Avoid a giant miscellaneous `utils` file or one file for every trivial value. Keep today's files next to each other so paths are easy to inspect.

### 4. HOW — The dependency graph

```text
Day06Lesson.tsx
  -> LessonTitle.tsx   (default component export)
  -> lessonInfo.ts     (two named constant exports)
```

The host's module tooling resolves each path and includes the referenced code. Importing a component makes its function available; using `<LessonTitle />` is what includes it in the UI description. Modules are not re-executed as a fresh copy for every component usage. Do not put device actions or network requests at file scope for this exercise.

`./` starts from the importing file's directory. `../` means its parent directory. A bare name such as `react-native` refers to a package, not a sibling source file. Exact filename case matters even if a Windows filesystem sometimes tolerates a mismatch.

### 5. SYNTAX — Match the contract

| Export | Matching import |
|---|---|
| `export default function LessonTitle() { ... }` | `import LessonTitle from './LessonTitle';` |
| `export const lessonTopic = 'Modules';` | `import { lessonTopic } from './lessonInfo';` |
| Same named export with a local alias | `import { lessonTopic as topic } from './lessonInfo';` |

An alias only changes the importing file's local name. A default import can also choose a local name, but matching the component's name is clearer here. Braces indicate a named import; they do not mean “this value is an object” or “this is a component.”

Use `.tsx` for files containing JSX and `.ts` for ordinary typed data/code. The examples omit file extensions in relative imports, as typical React/Expo bundler configurations support. Do not generalize that convention to every Node or TypeScript environment; keep your host's established module-resolution rules.

### 6. COMPLETE EXAMPLE — Three files, one screen

Copy all three files from [the web example folder](../../examples/react-web/day-06) into one folder in a separate learning host, preserving their names and relative placement.

**LessonTitle.tsx**

```tsx
export default function LessonTitle() {
  return <h2>Organizing a lesson</h2>;
}
```

Line 1 defines the default component export; line 2 returns the heading; line 3 closes the definition.

**lessonInfo.ts**

```ts
export const lessonTopic = 'Modules and imports';
export const estimatedMinutes = 25;
```

Each line declares and exports one named constant. There is no JSX, so `.ts` is sufficient. The module has no default export.

**Day06Lesson.tsx**

```tsx
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
```

Line by line: 1 imports the default title; 2 imports the two named data values; 3 separates imports; 4 defines the screen; 5 starts the return; 6 opens the section; 7 uses the imported component; 8 displays the imported topic; 9 displays the imported time; 10 closes the section; 11 finishes the return; 12 closes the function.

**Run:** Use the [web host instructions](../../examples/react-web/README.md), importing `Day06Lesson` from its actual copied folder, for example `./day-06/Day06Lesson` if it is under `src/day-06`. Render `<Day06Lesson />`. Expect a heading, topic and 25-minute estimate. Edit only `lessonInfo.ts` to use 30 minutes; save/reload and verify the screen. Restore 25. The existing host supplies the bootstrap; these are complete example source files, not a standalone app.

### 7. REAL-WORLD USE

A lesson page can import a title component and descriptive constants without duplicating them in every file. Later, larger features can organize related components and data similarly. Clear imports make it easier to see what a screen depends on.

### 8. COMMON MISTAKES

- `{ LessonTitle }` fails when the file exports only a default value.
- A default import from `lessonInfo.ts` fails because it contains only named exports.
- `./lessonInfo` is resolved from the importing file, not from the repository root.
- Copying only the screen leaves its sibling imports unresolved.
- Naming a JSX-containing file `.ts` can produce parsing errors.
- A circular dependency occurs when files depend back on each other; keep today's direction from screen to small modules.

### 9. BEST PRACTICES

Match exports before debugging rendering. Preserve filename case and keep paths simple. Do not add aliases or barrel files just for this lesson. Avoid copying an exported value into another file to silence an import error; fix the boundary instead. Keep module initialization free of unrelated actions.

## Section B — React Native Equivalent

### 1. WHAT — Same modules

Expo React Native uses the same default/named import syntax. The lesson constants remain ordinary TypeScript. UI modules use native components instead of HTML.

### 2. WHY — What differs?

The native title must import Text, and the native screen needs Text/View. Package imports point to React Native; relative imports still point to your files. The language mechanism does not change because the rendering target changes.

### 3. WHEN — Reusable native files

Use modules to keep a screen's reusable components separate from route entry files. An Expo Router route file has framework meaning; a component file should not accidentally create a new route. Do not reorganize an existing app solely to match a sample directory name.

### 4. HOW — Resolve from the importer

Both sibling dependencies are loaded through relative paths. The screen renders the imported title and values using native output. A successful module import proves only that the value can be resolved; it does not itself prove that the component is displayed or accessible.

### 5. EXPO IMPLEMENTATION

Copy the entire [native day-06 folder](../../examples/react-native/day-06) into a learning components directory outside `app` or `src/app`. In the existing learning route/screen, import its `Day06Lesson` using the actual relative path and render it inside the existing safe-area container. Follow the [native host instructions](../../examples/react-native/README.md). No dependency installation is required.

### 6. COMPLETE NATIVE EXAMPLE

**LessonTitle.tsx**

```tsx
import { Text } from 'react-native';

export default function LessonTitle() {
  return <Text accessibilityRole="header">Organizing a lesson</Text>;
}
```

**lessonInfo.ts**

```ts
export const lessonTopic = 'Modules and imports';
export const estimatedMinutes = 25;
```

**Day06Lesson.tsx**

```tsx
import { Text, View } from 'react-native';
import LessonTitle from './LessonTitle';
import { estimatedMinutes, lessonTopic } from './lessonInfo';

export default function Day06Lesson() {
  return (
    <View>
      <LessonTitle />
      <Text>{lessonTopic}</Text>
      <Text>Estimated time: {estimatedMinutes} minutes</Text>
    </View>
  );
}
```

### 7. LINE-BY-LINE EXPLANATION

In LessonTitle: line 1 imports native Text, line 2 separates imports, line 3 declares the default component, line 4 describes its heading role and title, and line 5 closes it. The two data lines export the same values as on web.

In Day06Lesson: lines 1–3 bring native components, the default title and named constants into scope; line 4 is spacing; line 5 defines the screen; line 6 starts its return; line 7 opens View; line 8 uses the title; lines 9–10 display imported data inside Text; lines 11–13 close the container, return and function.

### 8. MOBILE-SPECIFIC CONSIDERATIONS

Do not copy the web title file into the native folder: its default export name matches but its output is HTML. A correct import name does not guarantee a correct platform implementation. Test on Android/iOS and preserve safe-area handling. The two example data files intentionally duplicate tiny constants to keep each platform's example self-contained; shared package architecture is outside today's scope.

### 9. COMMON MISTAKES AND BEST PRACTICES

Putting helper files under a Router route directory can have unintended routing effects. Keep reusable files outside it. Distinguish package paths from relative paths, and check spelling before restarting tools. Keep all sibling files when copying this example. Runtime/type compatibility remains pending because no configured Expo host or installed versions were found in the workspace.

## Section C — React vs React Native Comparison

| Aspect | React.js | React Native |
|---|---|---|
| Concept | Explicit module boundaries | Same language mechanism |
| Syntax | Default and named imports | Identical import/export syntax |
| Implementation | HTML-returning title module | Native Text-returning title module |
| Behavior | Import resolves a value; JSX uses it | Same distinction |
| Use case | Organize a small lesson page | Organize a lesson screen outside route files |
| Data | Plain `.ts` constants | Identical plain `.ts` constants |
| Host rules | Existing web module configuration | Existing Expo module and route configuration |

Module reasoning transfers directly. Platform UI imports and framework-specific directory conventions need adaptation.

## Section D — Practical Exercise

### Web: a modular revision card

- **Objective:** Wire three small files with explicit exports.
- **Requirements:** Default-export a heading component; named-export a topic and 20-minute estimate; import all of them in a panel component.
- **Files:** Complete [web PracticeLesson.tsx](../../exercises/day-06/react-web/PracticeLesson.tsx), `PracticeTitle.tsx`, and `practiceInfo.ts` beside it; add `reflection.md`.
- **Expected behavior:** One heading, topic and 20-minute estimate appear from three files.
- **Testing:** Change only the data estimate to 35; observe the panel update after refresh; restore 20. Check type diagnostics for import mistakes.
- **Completion criteria:** Correct default/named imports, no duplicated data literals in the panel, and an explanation of relative paths.

See the [web brief](../../exercises/day-06/react-web/README.md). No full solution is supplied.

### Native: the same file boundaries

- **Objective:** Apply the module structure to native UI.
- **Requirements:** Matching data exports and default title, with View/Text output and heading role.
- **Files:** Complete [native PracticeLesson.tsx](../../exercises/day-06/react-native/PracticeLesson.tsx), `PracticeTitle.tsx`, and `practiceInfo.ts` beside it; add `reflection.md`.
- **Expected behavior:** Matching content on a native target.
- **Testing:** Copy all files outside route directories; repeat the 20-to-35 data change on Android/iOS; restore 20.
- **Completion criteria:** Working sibling imports, native elements and a reflection identifying package versus local imports.

See the [native brief](../../exercises/day-06/react-native/README.md). Record unavailable execution/type checks as pending.

## Section E — Knowledge Check

Answer the [five conceptual questions](questions.md) before opening the collapsible answers.

## Section F — Daily Summary

- **Key concepts:** Files expose values explicitly; imports depend on the export contract and path.
- **Platform differences:** Same module language, different UI implementations and host directory rules.
- **Important syntax:** `export default`, `export const`, `import Name`, `import { name }`, `./` and `../`.
- **Pitfalls:** Wrong braces, case mismatches, missing sibling files and JSX in `.ts` files.
- **Practical skills:** Trace a small dependency graph and organize three working source files.
- **Next lecture:** Day 07 — Component composition. Its focus is the UI tree rather than file boundaries.
