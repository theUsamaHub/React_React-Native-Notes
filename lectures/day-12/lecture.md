# Day 12 — Lists and Keys

## Lecture Header

- **Day:** 12
- **Topic:** Mapping data to UI while preserving item identity
- **Learning phase:** Phase 2 — Components and Data
- **Difficulty:** Beginner
- **Prerequisites:** Days 01–11; typed objects, props, composition, reconciliation and conditional rendering. Arrays, map and callback syntax are introduced below.
- **Estimated study time:** 30–35 minutes reading; 25–40 minutes combined practice.
- **Learning objectives:** Transform an array into elements; type a small data model; choose stable keys; place keys at the mapped boundary; distinguish identity from order; handle an empty collection on both platforms.

Today covers short lists, not list virtualization, event-driven reordering or state updates. We edit source data to inspect output and reason about runtime identity separately.

## Section A — React.js Concept

### 1. WHAT — A list is data mapped to elements

An **array** is an ordered collection of values. `map` calls a function for each item and collects its returned values in a new array. In React, those returned values can be JSX elements. A **key** tells React which sibling item a description represents across updates. Keys are part of React's identity matching, not visible row labels. [React's list guide](https://react.dev/learn/rendering-lists).

### 2. WHY — Separate content from repeated structure

A revision queue has several rows with the same structure but different lesson names. Hand-writing every row duplicates markup and makes additions cumbersome. An array stores the variation; a map callback describes the row once.

Positions can change when an item is inserted or reordered. Stable data IDs let React associate the same logical item with its existing representation rather than confusing “first row” with “this specific lesson.”

### 3. WHEN — Similar rows from a collection

Use mapping for short collections of repeated UI, such as tags, revision tasks or a compact summary. Keep fixed unrelated components as explicit composition when that is clearer. Do not turn every pair of elements into an array just because map exists.

### 4. HOW — Identity is not position

Imagine two records with IDs A and B. After inserting X before them, the sequence becomes X, A, B. The IDs still identify A and B, even though their positions changed. Index keys 0 and 1 would instead describe positions now occupied by different records. Later, when rows have local state or inputs, that mismatch can attach old state to the wrong record.

Keys should be stable across renders and unique among the mapped siblings; they need not be globally unique. Use an ID stored with the data. Do not generate a new random value or timestamp during rendering. An index is only defensible when position really is the identity and the list will not reorder, insert or delete; persistent IDs are the practical default here. Matching also depends on compatible types and tree context, so a key is not a global guarantee that an item can never remount.

### 5. SYNTAX — Arrays and callbacks before JSX

```ts
const doubled = [1, 2, 3].map((value) => value * 2);
```

`[1, 2, 3]` is an array. `(value) => value * 2` is an arrow function: one input, with an expression implicitly returned. The result is `[2, 4, 6]`. Map does not itself mutate the source array, though a badly written callback could mutate objects inside it; keep this callback pure.

For multiline JSX, `(lesson) => (<li>...</li>)` still implicitly returns an expression. With a block body, `(lesson) => { ... }`, you must explicitly `return` the JSX. Forgetting that return produces missing rows.

`readonly Lesson[]` describes an array of Lesson records that cannot be pushed/reordered through this type. Each readonly field likewise rejects assignment through that type. These are static checks, not runtime freezing. Curly-braced object literals inside the array create actual records; braces in the type declare their required shape.

### 6. COMPLETE EXAMPLE — A revision queue

Source: [web Day12LessonList.tsx](../../examples/react-web/Day12LessonList.tsx).

```tsx
type Lesson = {
  readonly id: string;
  readonly title: string;
};

const lessons: readonly Lesson[] = [
  { id: 'lesson-props', title: 'Props' },
  { id: 'lesson-children', title: 'Children' },
  { id: 'lesson-conditions', title: 'Conditional rendering' },
];

export default function Day12LessonList() {
  if (lessons.length === 0) {
    return <p>No lessons queued.</p>;
  }

  return (
    <section>
      <h2>Revision queue</h2>
      <ul>
        {lessons.map((lesson) => (
          <li key={lesson.id}>{lesson.title}</li>
        ))}
      </ul>
    </section>
  );
}
```

Line by line: 1–4 define the record's two string fields; 5 is spacing; 6 opens the typed array; 7–9 provide distinct data IDs and titles; 10 closes it; 11 separates data from UI; 12 defines the component; 13 checks array length; 14 returns an empty-state paragraph; 15 closes the branch; 16 is spacing. Line 17 starts the nonempty return; 18 opens section; 19 supplies heading; 20 opens an unordered HTML list; 21 maps each record; 22 returns one li, assigning data identity as key and displaying title; 23 closes the JSX expression, callback and map call; 24–27 close list, section, return and component.

**Run:** Follow the [web host instructions](../../examples/react-web/README.md), substituting `Day12LessonList` for the filename/import/usage. Expect three list items in array order. Change a title while preserving its ID, then reorder the source records, then try an empty array. Save/reload between cases. Empty input shows only the empty-state message; restore the original data afterward.

These checks verify output, not state preservation across normal runtime updates. Hot refresh may remount components under its own rules. The stable-key explanation is based on the reconciliation model; we do not claim to prove it with source edits.

#### Where the key belongs

Put the key on the element directly returned by map. If you later map to `<LessonRow />`, put `key={lesson.id}` on that usage, not only on an li inside LessonRow. `key` is a special React attribute; the child does not receive it as an ordinary prop. If it needs the identifier, also pass something like `lessonId={lesson.id}` with an appropriate props type.

If one item needs several sibling elements, a keyed container can group them. The short Fragment syntax `<>...</>` cannot take a key; an explicitly imported Fragment can. Keep today's one-row-per-record approach simple.

### 7. REAL-WORLD USE

A course catalog or task queue commonly receives records with persistent IDs. UI rows can change order without changing which record each represents. Editing a title should not create a new identity, which is why mutable labels are usually poor keys.

### 8. COMMON MISTAKES

- Index keys confuse position and identity when records move.
- Random keys create new identities every render and defeat continuity.
- Duplicate IDs among siblings make matching ambiguous.
- Putting a key on a nested child instead of the mapped root leaves the mapped siblings without the intended identity.
- Omitting return in a block callback yields no row output.
- Assuming keys sort data is incorrect: array order determines displayed order.

### 9. BEST PRACTICES

Keep IDs with records and preserve them when labels change. Use a pure mapping function, semantic ul/li structure on web and an explicit empty state. Check both output and console warnings. TypeScript's string type does not verify key uniqueness; inspect the data as well.

## Section B — React Native Equivalent

### 1. WHAT — Same map and key model

React Native can display a short array of JSX children using the same mapping syntax and stable keys. The output uses View/Text instead of ul/li. React-level identity rules transfer directly.

### 2. WHY — Native containers are not HTML lists

A View grouping rows does not automatically gain HTML list semantics, bullets or scrolling. Text must contain each visible title. This example teaches data mapping with only three rows; it is not a production strategy for thousands of items.

### 3. WHEN — Short, bounded collections

Use this simple approach for a few native items. Large or scrolling datasets need different layout/performance tools such as FlatList, scheduled later in the roadmap. Do not install a list library or introduce virtualization for today's exercise.

### 4. HOW — Key the mapped native row

Each callback returns a View containing Text. Therefore the key belongs on that outer View. The title Text is nested output, not the direct mapped sibling. A child component replacing the View would need the key at its usage for the same reason.

### 5. EXPO IMPLEMENTATION

Copy the native example outside Router route directories. Render `Day12LessonList` in the existing learning screen's safe-area/layout container, following the [native host instructions](../../examples/react-native/README.md). No dependencies or navigation changes are required.

### 6. COMPLETE NATIVE EXAMPLE

Source: [native Day12LessonList.tsx](../../examples/react-native/Day12LessonList.tsx).

```tsx
import { Text, View } from 'react-native';

type Lesson = {
  readonly id: string;
  readonly title: string;
};

const lessons: readonly Lesson[] = [
  { id: 'lesson-props', title: 'Props' },
  { id: 'lesson-children', title: 'Children' },
  { id: 'lesson-conditions', title: 'Conditional rendering' },
];

export default function Day12LessonList() {
  if (lessons.length === 0) {
    return <Text>No lessons queued.</Text>;
  }

  return (
    <View>
      <Text accessibilityRole="header">Revision queue</Text>
      {lessons.map((lesson) => (
        <View key={lesson.id}>
          <Text>{lesson.title}</Text>
        </View>
      ))}
    </View>
  );
}
```

### 7. LINE-BY-LINE EXPLANATION

Line 1 imports native components; 2 is spacing; 3–6 declare the record type; 7 is spacing; 8–12 declare the same ordered records; 13 is spacing; 14 exports the component; 15 tests length; 16 returns an empty-state Text; 17 closes that branch; 18 is spacing. Line 19 starts the normal return; 20 opens View; 21 displays the heading-role title; 22 maps records; 23 opens each keyed row; 24 displays its title inside Text; 25 closes the row; 26 closes callback/map/expression; 27–29 close outer View, return and function.

### 8. MOBILE-SPECIFIC CONSIDERATIONS

Check the small list on Android/iOS with readable text sizes. Native rows do not gain browser bullet styling, automatic spacing or list accessibility semantics. Preserve safe-area handling and do not assume the outer View scrolls. Runtime changes to order require update mechanisms taught later; source refresh is only a development check.

### 9. COMMON MISTAKES AND BEST PRACTICES

Do not return a raw title string beneath View. Put the key on the mapped row, not its nested Text. Keep this exercise bounded to a few records and describe its scalability limits honestly. No configured React/Expo app or installed package versions are present in the learning repository, so runtime/type compatibility remains unverified.

## Section C — React vs React Native Comparison

| Aspect | React.js | React Native |
|---|---|---|
| Concept | Array-to-UI mapping with stable identity | Same mapping and key rules |
| Syntax | `<li key={lesson.id}>...</li>` | `<View key={lesson.id}><Text>...</Text></View>` |
| Implementation | ul and li supply browser list structure | View/Text form a small native group |
| Behavior | Array order determines row order | Same, without automatic HTML list semantics |
| Use case | Short revision queue | Short native revision queue |
| Empty state | Paragraph | Text |
| Scale | Large lists need suitable performance design | FlatList and scrolling are later topics |

Typed arrays, callbacks and identity reasoning transfer. Semantics, text containment, layout and large-list rendering require platform-specific choices.

## Section D — Practical Exercise

### Web: revision task list

- **Objective:** Map typed records to semantic list items with stable keys.
- **Requirements:** Three Task records with readonly id/title fields; a readonly array; map to keyed li elements inside ul; explicit empty-state paragraph.
- **Files:** Modify [web PracticeTaskList.tsx](../../exercises/day-12/react-web/PracticeTaskList.tsx); add `reflection.md` beside it.
- **Expected behavior:** One row per record in array order, or an empty message when there are no records.
- **Testing:** Rename one title without changing its ID; reorder, prepend a distinct record and test empty input; check key warnings and return behavior.
- **Completion criteria:** Stable unique data keys on mapped roots, correct row/empty outputs and a written explanation of index-key risks.

Follow the [web brief](../../exercises/day-12/react-web/README.md); no full solution is supplied.

### Native: matching task list

- **Objective:** Use identical records and keys with native elements.
- **Requirements:** Same records mapped to keyed Views containing Text; an empty-state Text; no FlatList or new libraries yet.
- **Files:** Modify [native PracticeTaskList.tsx](../../exercises/day-12/react-native/PracticeTaskList.tsx); add `reflection.md` beside it.
- **Expected behavior:** Matching titles/order with valid native containment.
- **Testing:** Run the same source-data cases on Android/iOS; inspect warnings and note that View does not automatically scroll.
- **Completion criteria:** Correct keys and native output, no mutation during render, and reflection on identity versus position.

Follow the [native brief](../../exercises/day-12/react-native/README.md); record unavailable checks as pending.

## Section E — Knowledge Check

Attempt the [five questions](questions.md) before opening their collapsible answers.

## Section F — Daily Summary

- **Key concepts:** Map transforms data into row descriptions; stable keys identify siblings across updates.
- **Platform differences:** Same identity rules with different list semantics, containers and scaling tools.
- **Important syntax:** `readonly Task[]`, arrow callbacks, `map`, `key={item.id}` and an empty-length check.
- **Pitfalls:** Index/random/duplicate keys, keys at the wrong depth and missing callback returns.
- **Practical skills:** Render a small typed list, handle empty input and reason about insertion/reordering without confusing it with source refresh.
- **Next lecture:** Day 13 — Event handling. It has not been generated.

Days 11–12 are prepared; no additional learning completion is assumed.
