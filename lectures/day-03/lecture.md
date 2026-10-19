# Day 03 — JSX and TSX

## Lecture Header

- **Day:** 03
- **Topic:** Writing UI descriptions with JSX in TypeScript files
- **Learning phase:** Phase 1 — Fundamentals
- **Difficulty:** Beginner
- **Prerequisites:** Days 01–02; JavaScript variables, strings, numbers, arithmetic and functions. Review Day 02 if expressions still feel unfamiliar.
- **Estimated study time:** 25–35 minutes reading; 20–35 minutes practical work across both platforms.
- **Learning objectives:** Distinguish JSX from HTML and TSX from plain TypeScript; insert expressions correctly; follow grouping, closing and naming rules; identify source-level type errors; transfer syntax to native UI without transferring browser elements.

This is the first of the two catch-up lessons requested on 2026-10-19. Study it before Day 04. Each lecture still teaches one primary topic.

## Section A — React.js Concept

### 1. WHAT — JSX and TSX

**JSX** is syntax that lets JavaScript contain markup-like UI expressions. **TSX** is TypeScript source that can contain JSX, conventionally saved with a `.tsx` extension. TypeScript adds static checking: tools can inspect your source for incompatible values before execution.

JSX is not an HTML string, and React is not a compiler for arbitrary `.tsx` files. Your configured build tools transform the source into JavaScript that the application can execute. JSX can describe browser elements or components; it is not restricted to HTML. [TypeScript's JSX reference](https://www.typescriptlang.org/docs/handbook/jsx.html).

### 2. WHY — Why use it?

A study-session summary needs both its content structure and its calculated time. JSX lets you read the heading, paragraphs and inserted calculations together. TSX adds checks around the values used in that description. For example, declaring `practiceMinutes: number` makes assigning `'twenty'` a source-level error instead of an unnoticed choice of string data.

Neither feature decides what a valid study plan should be. A negative numeric duration is still a number; business validation is a separate responsibility.

### 3. WHEN — Which file should you use?

Use `.tsx` for TypeScript files containing JSX. Use `.ts` for TypeScript code without JSX, such as a standalone arithmetic utility. Changing an extension does not install packages or configure a host. The React/Expo project still needs its existing TypeScript and JSX settings.

Some development tools remove type annotations without running a full type check. Seeing a preview does not prove your types are correct. Use the host's type-check command or editor diagnostics as well.

### 4. HOW — From source to display

```text
TSX source: typed values + JSX description
       |
Configured tools check types and/or transform source
       |
JavaScript describes React elements
       |
React + platform renderer produce UI
```

Types do not become a runtime validator. JSX becomes JavaScript through the host's configured transform; the exact generated calls depend on that configuration. Modern setups normally do not require importing `React` solely to write JSX. Do not rewrite a project's compiler configuration just to match a tutorial.

### 5. SYNTAX — Rules you can apply today

Group adjacent JSX siblings in one parent or a **Fragment**, written `<>...</>`. A Fragment adds no platform container. Close tags explicitly: `<p>Text</p>` or, for an empty element, `<br />`. Nest tags correctly. Browser attributes often use React spellings such as `className`; `aria-*` and `data-*` keep their hyphens. Lowercase names identify host elements; capitalized names refer to components in scope. [JSX markup rules](https://react.dev/learn/writing-markup-with-jsx).

Braces switch from JSX content to a JavaScript **expression**, something that produces a value:

| Syntax | Meaning |
|---|---|
| `<p>topic</p>` | Literal word `topic` |
| `<p>{topic}</p>` | Value stored in `topic` |
| `<p>{20 + 10}</p>` | Result of addition: 30 |
| `<section className="session">` | Literal attribute string |
| `<section className={className}>` | Attribute value from a variable named `className` |
| `{/* Explain this markup */}` | Comment inside JSX; not visible text |

Do not put `const total = 30;` or an `if` statement directly in JSX braces: they are statements, not expressions. Calculate values before the return. Quoting `"{topic}"` as an attribute supplies literal characters rather than evaluating a variable. [Expressions in JSX](https://react.dev/learn/javascript-in-jsx-with-curly-braces).

Strings and numbers can be text content; a plain object such as `{ minutes: 20 }` cannot be displayed directly as a React child. Select a displayable field instead. Braces are not a request to execute a string as markup: a string containing `<b>Focus</b>` remains text when inserted normally.

### 6. EXAMPLE — A typed study-session summary

Complete component: [web Day03Session.tsx](../../examples/react-web/Day03Session.tsx).

```tsx
export default function Day03Session() {
  const topic: string = 'JSX and TSX';
  const practiceMinutes: number = 20;
  const reviewMinutes: number = 10;

  return (
    <section className="study-session">
      <h1>{topic}</h1>
      <p>Practice: {practiceMinutes} minutes</p>
      <p>Total: {practiceMinutes + reviewMinutes} minutes</p>
      {/* This comment is not displayed. */}
    </section>
  );
}
```

Line by line:

1. Declare and export the component function.
2. Define a string. The annotation after the colon states its type.
3. Define a numeric practice duration; the value has no quotes.
4. Define a numeric review duration.
5. Separate data from markup with a blank line.
6. Begin the returned JSX expression.
7. Open a section with a CSS class name. No stylesheet is included, so this class alone changes no appearance.
8. Insert the topic value into the heading.
9. Mix literal label text with a numeric expression.
10. Insert the addition result; do not manually maintain a second total.
11. Add a source comment that produces no displayed content.
12. Close the section.
13. Finish the return expression.
14. End the function.

The annotations are intentionally explicit for this lesson. TypeScript can also infer these simple types from their values.

**Run:** Follow the [web host instructions](../../examples/react-web/README.md), substituting `Day03Session` for the filename, import and JSX component name. This is a complete component for an existing configured host, not an independent application. Expect the topic, `Practice: 20 minutes` and `Total: 30 minutes`. Change practice to 25 and save/reload; the total should become 35. Restore 20 afterward.

### 7. REAL-WORLD USE

A course page might insert a lesson title and calculate reading time. JSX keeps that relationship close to its displayed structure. TypeScript can catch passing the wrong kind of source value, while runtime validation remains necessary for data arriving from elsewhere.

### 8. COMMON MISTAKES

- Leaving `<br>` unclosed or crossing closing tags causes JSX syntax errors; read the first reported error rather than fixing downstream messages blindly.
- Writing `topic` outside braces displays the variable's name, not its value.
- Writing adjacent top-level tags without a parent or Fragment fails to form the intended JSX expression.
- Putting a string into a number-annotated constant produces a type error; deleting the annotation does not convert the string.
- Assuming `className` creates CSS styling confuses a class label with a stylesheet rule.
- Assuming TypeScript validates API responses confuses static checking with runtime validation.

### 9. BEST PRACTICES

Use readable names and keep expressions short. Compute longer formulas above the return. Use a real semantic container when it has a purpose; a Fragment is useful for grouping without an extra container. Keep type-checking distinct from checking visual output. Never fix an unexplained type error by casually disabling checking.

## Section B — React Native Equivalent

### 1. WHAT — Same TSX, native components

React Native uses the same JSX expression syntax in TypeScript files. The native output description uses `View` and `Text` rather than browser tags. [React Native fundamentals](https://reactnative.dev/docs/intro-react).

### 2. WHY — Platform-specific attributes and elements

JSX syntax is shared, but its available elements and attributes depend on the target. A browser's `className` is not part of the ordinary React Native core styling workflow. We omit it here; no additional styling library is needed.

### 3. WHEN — Native screen content

Use TSX to describe mobile screens and reusable native UI. Numeric expressions and type annotations work just as in the web example; visual containers and text handling require native elements.

### 4. HOW — Expression evaluation still happens in JavaScript

The addition computes a number before React Native displays it through `Text`. A Fragment can group native elements but adds no native View and cannot provide layout or make bare text legal directly beneath a View. Grouping syntax and native text containment solve different problems.

### 5. EXPO IMPLEMENTATION

Copy the native example into a separate Expo learning host's component directory, outside Router route directories. Render `<Day03Session />` in its existing learning screen. Preserve safe-area/layout providers. Follow the [native host instructions](../../examples/react-native/README.md), replacing `Day01Card` with `Day03Session`.

No package manifest or installed React/Expo/TypeScript versions were found in the workspace during this lesson's preparation. No dependencies were installed. Type-check and device compatibility remain unverified until a configured host is available.

### 6. COMPLETE EXAMPLE

Source: [native Day03Session.tsx](../../examples/react-native/Day03Session.tsx).

```tsx
import { Text, View } from 'react-native';

export default function Day03Session() {
  const topic: string = 'JSX and TSX';
  const practiceMinutes: number = 20;
  const reviewMinutes: number = 10;

  return (
    <View>
      <Text>{topic}</Text>
      <Text>Practice: {practiceMinutes} minutes</Text>
      <Text>Total: {practiceMinutes + reviewMinutes} minutes</Text>
      {/* This comment is not displayed. */}
    </View>
  );
}
```

### 7. LINE-BY-LINE EXPLANATION

1. Import the two native core components; these braces select named exports.
2. Separate imports from code.
3. Declare and export the function.
4. Declare the typed topic string.
5. Declare practice minutes as a number.
6. Declare review minutes as a number.
7. Separate declarations from output.
8. Begin the returned JSX expression.
9. Open the native container.
10. Display the topic inside Text.
11. Insert the practice value alongside its label.
12. Insert the calculated total alongside its label.
13. Add a JSX comment, which is not displayed.
14. Close the View.
15. Finish the return expression.
16. Close the function.

### 8. MOBILE-SPECIFIC CONSIDERATIONS

All strings and numbers being displayed belong inside Text. Keep existing safe-area handling and allow text to wrap on small screens or at larger text sizes. The first Text has no automatic browser `h1` styling. Test on Android/iOS; Expo web alone does not verify native behavior.

### 9. COMMON MISTAKES AND BEST PRACTICES

Do not copy `section`, `p` or browser class names into the native example. Imports and capitalization matter: a capitalized name must be defined or imported. Use the same typed values and calculations across platforms, and adapt the output elements deliberately. A Fragment does not replace View's layout behavior.

## Section C — React vs React Native Comparison

| Aspect | React.js | React Native |
|---|---|---|
| Concept | JSX descriptions in TypeScript | Same syntax and type checking |
| Syntax | `<p>{topic}</p>` | `<Text>{topic}</Text>` |
| Implementation | TSX transform plus React DOM host | TSX transform in Expo plus native renderer |
| Behavior | Expressions supply displayed values | Same evaluation; text requires Text containment |
| Use case | Session summary on a course page | Session summary on a mobile screen |
| Grouping | Section or Fragment depending on purpose | View or Fragment depending on purpose |
| Attributes | Browser attributes such as className | Native component attributes; not arbitrary browser attributes |

Expression syntax, comments, grouping rules and type annotations transfer. Host elements, attribute support, semantics and styling require platform-specific choices.

## Section D — Practical Exercise

### React.js: your session summary

- **Objective:** Write valid TSX combining literals and expressions.
- **Requirements:** Typed topic, 12 reading minutes, 18 practice minutes, and a calculated total; heading, three paragraphs, className and a JSX comment.
- **Files:** Modify [web PracticeSession.tsx](../../exercises/day-03/react-web/PracticeSession.tsx); add `reflection.md` beside it.
- **Expected behavior:** Total 30, with the chosen heading and both durations visible; comment invisible.
- **Testing:** Try 5/10 and expect 15; change the topic; inspect a temporary type mismatch and restore valid code.
- **Completion criteria:** All outputs match, JSX/type checks pass where a host is available, and the reflection explains expressions and TSX.

See the [full web brief](../../exercises/day-03/react-web/README.md) for host and test details. No solution is supplied.

### React Native: the matching summary

- **Objective:** Use the same TSX data with native building blocks.
- **Requirements:** Same typed values; one View, four Text elements, a JSX comment and a calculated total.
- **Files:** Modify [native PracticeSession.tsx](../../exercises/day-03/react-native/PracticeSession.tsx); add `reflection.md` beside it.
- **Expected behavior:** Same content and totals as web, with native presentation.
- **Testing:** Test the same inputs on Android/iOS; check text containment and errors.
- **Completion criteria:** Correct expressions and native elements, matching results, and a reflection explaining the differences.

See the [full native brief](../../exercises/day-03/react-native/README.md). Report missing-host execution as pending, not passed.

## Section E — Knowledge Check

Attempt the [five conceptual questions](questions.md) before opening their collapsible answers.

## Section F — Daily Summary

- **Key concepts:** JSX is UI expression syntax; TSX combines it with TypeScript checking.
- **Platform differences:** Shared language rules, different host elements and supported attributes.
- **Important syntax:** `: string`, `: number`, `{expression}`, `<>...</>`, self-closing tags and JSX comments.
- **Pitfalls:** Literal variable names, invalid statements in braces, unclosed tags and confusing type checking with runtime validation.
- **Practical skills:** Describe a typed session summary and diagnose basic JSX errors.
- **Next lecture:** Day 04 — Functional components, prepared separately at your request. Finish this lesson before opening it.
