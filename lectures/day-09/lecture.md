# Day 09 — Props

## Lecture Header

- **Day:** 09
- **Topic:** Typed inputs and one-way data flow
- **Learning phase:** Phase 2 — Components and Data
- **Difficulty:** Beginner
- **Prerequisites:** Days 01–08; components, JSX expressions, TypeScript primitive types, composition and rendering. Object properties and type aliases are introduced below.
- **Estimated study time:** 25–35 minutes reading; 20–35 minutes combined practice.
- **Learning objectives:** Pass values into reusable components; read a typed props object; distinguish numbers from strings in JSX attributes; explain ownership and immutable inputs; reuse one definition with different data.

Today's primary topic is props. We do not introduce state, events or editable forms. Changing a literal and saving remains a source-code experiment.

## Section A — React.js Concept

### 1. WHAT — Component inputs

**Props** are values supplied to a component by its parent. A component receives them as one object. Dot notation such as `props.title` reads a property from that object. A custom component's input names are chosen by its author; platform components have their own supported inputs.

Props let one component definition describe different content for different usages. A title string and numeric duration can vary while the card structure stays the same. [React's props guide](https://react.dev/learn/passing-props-to-a-component).

### 2. WHY — Avoid repeated implementations

Without inputs, two learning cards might require two functions that differ only in their words and minutes. Maintaining identical structure twice creates opportunities for drift. A single card with explicit inputs makes the variation clear and gives the structure one owner.

Do not turn every possible detail into an input before it is needed. Today's contract contains only the title and duration required by the two cards.

### 3. WHEN — Reusable structure, different data

Use props when a parent knows the data that a child should display. A dashboard can choose a lesson title while the card decides how to present it. Props are not the child's independent editable storage. A later lesson will distinguish that storage, called state.

### 4. HOW — Data travels down

```text
Parent chooses title="Reading", minutes=15
                 |
React supplies the child's props object
                 |
Child reads props.title and props.minutes
                 |
Child returns a description using those values
```

The child treats its input as read-only. A parent can supply different values on a later render; read-only does not mean permanently fixed for the lifetime of an app. Mutating props is not a supported way to update the parent. Nor does changing an ordinary variable automatically schedule rendering; Day 08's distinction still applies.

### 5. SYNTAX — A small TypeScript contract

```ts
type LessonCardProps = {
  readonly title: string;
  readonly minutes: number;
};
```

`type` gives a name to a shape used by the type checker. The braces describe required fields, not a runtime object construction. `title: string` and `minutes: number` define their types. `readonly` asks TypeScript to reject assignment to these fields through this type. It is not a runtime freeze, deep immutability guarantee or validation of positive durations. [Typing component inputs](https://react.dev/learn/typescript).

`function LessonCard(props: LessonCardProps)` accepts one object parameter and annotates its expected shape. We use `props.title` rather than destructuring to keep the first example explicit.

At the call site, `title="Reading"` supplies a string, while `minutes={15}` supplies a numeric expression. `minutes="15"` is a string and does not match this contract. Missing a required prop is also a type error in a configured TypeScript host. Types can catch source mistakes; they cannot validate arbitrary runtime input automatically.

### 6. COMPLETE EXAMPLE — One card, two inputs

Source: [web Day09LessonCards.tsx](../../examples/react-web/Day09LessonCards.tsx).

```tsx
type LessonCardProps = {
  readonly title: string;
  readonly minutes: number;
};

function LessonCard(props: LessonCardProps) {
  return (
    <section>
      <h2>{props.title}</h2>
      <p>Study time: {props.minutes} minutes</p>
    </section>
  );
}

export default function Day09LessonCards() {
  return (
    <div>
      <LessonCard title="Reading" minutes={15} />
      <LessonCard title="Practice" minutes={20} />
    </div>
  );
}
```

Line by line: 1 opens the type alias; 2 requires a read-only string title; 3 requires a read-only numeric duration; 4 ends the type; 5 separates it from code; 6 defines the typed card; 7 starts the return; 8 opens its section; 9 reads the supplied title; 10 reads the supplied duration; 11 closes section; 12 finishes return; 13 closes the card. Line 14 is spacing. Line 15 defines the exported parent; 16 starts its return; 17 opens the container; 18 supplies Reading/15; 19 supplies Practice/20; 20 closes the container; 21 finishes return; 22 closes the parent.

**Run:** Follow the [web host instructions](../../examples/react-web/README.md), substituting `Day09LessonCards` for the filename/import/usage. Expect Reading with 15 minutes and Practice with 20. Change only the second usage to 25 and save/reload. The first still shows 15; the second shows 25. Restore 20 afterward. The existing host supplies bootstrap and type checking.

The parent holds the literal values; the card owns their display structure. The two card usages do not need two definitions. Required props keep the first lesson's contract simple; optional inputs and defaults can be introduced when an actual need arises.

### 7. REAL-WORLD USE

A course catalog can use a common lesson card for different titles and durations. A reusable component exposes a small documented input contract rather than forcing callers to copy its markup. The same pattern later supports typed API data after runtime validation.

### 8. COMMON MISTAKES

- Hard-coding a title inside the child ignores the caller's input.
- Defining separate title/minutes positional parameters misunderstands React's single props-object argument.
- Quoting a number passes a string, not a numeric value.
- Assigning `props.minutes = 30` attempts to change an input instead of describing UI from it.
- Assuming readonly validates data overlooks negative numbers and external unvalidated values.
- Duplicating the card function for each title defeats the reason for props.

### 9. BEST PRACTICES

Choose meaningful input names and small types. Read props without modifying them. Keep business validation separate from primitive type checks. In a properly configured host, use editor diagnostics and the type-check command; successful visual preview alone does not prove correct types.

## Section B — React Native Equivalent

### 1. WHAT — The same input mechanism

Native custom components receive the same props object. The title/minutes contract is unchanged; the card returns native building blocks. Existing attributes such as `accessibilityRole` are also props supplied to library components.

### 2. WHY — Adapt output, not the data contract

The numbers and strings are ordinary JavaScript values. Android/iOS needs View/Text instead of section/h2/p, so display implementation changes while the parent's input values can stay the same.

### 3. WHEN — Data-driven mobile UI

Use props for a native card, row or summary whose data comes from a parent screen. Props do not require an Expo-specific state library or a navigation parameter. Passing values to a component and passing data between navigation routes are different topics.

### 4. HOW — Native display reads typed values

React supplies the object; the component reads its fields; Text displays the resulting strings and numbers. TypeScript checks the same source-level contract. The native renderer does not turn a string into a number because a prop name sounds numeric.

### 5. EXPO IMPLEMENTATION

Copy the native source outside Expo Router route directories. Render `Day09LessonCards` inside a separate learning screen's existing safe-area/layout container using the [native host instructions](../../examples/react-native/README.md). Preserve providers and navigation. No additional libraries are necessary.

### 6. COMPLETE NATIVE EXAMPLE

Source: [native Day09LessonCards.tsx](../../examples/react-native/Day09LessonCards.tsx).

```tsx
import { Text, View } from 'react-native';

type LessonCardProps = {
  readonly title: string;
  readonly minutes: number;
};

function LessonCard(props: LessonCardProps) {
  return (
    <View>
      <Text accessibilityRole="header">{props.title}</Text>
      <Text>Study time: {props.minutes} minutes</Text>
    </View>
  );
}

export default function Day09LessonCards() {
  return (
    <View>
      <LessonCard title="Reading" minutes={15} />
      <LessonCard title="Practice" minutes={20} />
    </View>
  );
}
```

### 7. LINE-BY-LINE EXPLANATION

Line 1 imports native building blocks; 2 is spacing; 3–6 define the same two-field contract; 7 is spacing; 8 defines the typed card; 9 begins return; 10 opens View; 11 inserts the title in heading-role Text; 12 inserts the duration in Text; 13 closes View; 14 ends return; 15 closes the card. Line 16 separates definitions. Line 17 exports the parent; 18 begins return; 19 opens its View; 20 and 21 supply the distinct card values; 22–24 close View, return and function.

### 8. MOBILE-SPECIFIC CONSIDERATIONS

All displayed fields stay inside Text. Longer titles can wrap; a title prop does not guarantee short content. Test both cards on Android/iOS and retain safe-area handling. Header roles do not supply visual heading styles. Expo web preview alone is not native verification.

### 9. COMMON MISTAKES AND BEST PRACTICES

Do not copy the web tags into native output or place numeric props directly under View. The input type does not remove native containment rules. Keep the shared contract small and inspect both type diagnostics and device output. Installed React/Expo/TypeScript versions and runtime compatibility remain unverified because this workspace contains no configured application host.

## Section C — React vs React Native Comparison

| Aspect | React.js | React Native |
|---|---|---|
| Concept | Parent supplies typed child inputs | Same props-object mechanism |
| Syntax | `<LessonCard title="Reading" minutes={15} />` | Identical custom-component usage |
| Implementation | Child reads fields into h2/p | Child reads fields into Text |
| Behavior | Inputs are treated as read-only | Same one-way data flow |
| Use case | Course catalog card | Native lesson card |
| Validation | Type checking is not runtime validation | Same limitation |

The contract, ownership and numeric/string rules transfer. Platform output and accessibility/layout details need adaptation.

## Section D — Practical Exercise

### Web: two goal cards

- **Objective:** Reuse one definition with different typed inputs.
- **Requirements:** A GoalCardProps type with readonly title/minutes; one GoalCard; parent usages Recall/10 and Coding/25.
- **Files:** Modify [web PracticeGoals.tsx](../../exercises/day-09/react-web/PracticeGoals.tsx); create `reflection.md` beside it.
- **Expected behavior:** Two different titles and durations from one child definition.
- **Testing:** Change only the second duration to 30; inspect temporary missing-title and string-duration type errors, then restore valid code.
- **Completion criteria:** One-way input flow, correct values and types, and no mutation or duplicate card functions.

Follow the [web brief](../../exercises/day-09/react-web/README.md); no full solution is supplied.

### Native: matching typed cards

- **Objective:** Apply the same contract on mobile.
- **Requirements:** Same type and parent values, using View/Text with title roles.
- **Files:** Modify [native PracticeGoals.tsx](../../exercises/day-09/react-native/PracticeGoals.tsx); create `reflection.md` beside it.
- **Expected behavior:** Matching content on native, not necessarily matching typography.
- **Testing:** Run the same value cases on Android/iOS and inspect type diagnostics separately.
- **Completion criteria:** Typed reusable component, correct native containment and a reflection on parent/child ownership.

Follow the [native brief](../../exercises/day-09/react-native/README.md). Record missing runtime/type checks as pending.

## Section E — Knowledge Check

Attempt the [five questions](questions.md) before opening their collapsible answers.

## Section F — Daily Summary

- **Key concepts:** Props provide component inputs; a parent chooses values and a child reads them.
- **Platform differences:** Same typed contract, different host elements.
- **Important syntax:** `type`, `readonly`, `props: LessonCardProps`, `props.title`, numeric JSX braces.
- **Pitfalls:** Mutating inputs, string/number confusion, missing required fields and treating types as runtime validation.
- **Practical skills:** Reuse a component with multiple data sets and diagnose its input errors.
- **Next lecture:** Day 10 — Children and content slots.
