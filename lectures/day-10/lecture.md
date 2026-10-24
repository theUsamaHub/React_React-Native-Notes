# Day 10 — Children and Content Slots

## Lecture Header

- **Day:** 10
- **Topic:** Reusable wrappers that accept caller-supplied content
- **Learning phase:** Phase 2 — Components and Data
- **Difficulty:** Beginner
- **Prerequisites:** Days 01–09; composition, typed props, JSX nesting, imports and native text containment.
- **Estimated study time:** 25–35 minutes reading; 25–40 minutes combined practice.
- **Learning objectives:** Explain the children prop; build a typed content slot; separate wrapper responsibility from caller content; understand ReactNode's flexibility and limits; adapt a wrapper safely to native UI.

The only new primary concept is a content slot through children. We do not add conditional rendering, lists, hooks or advanced child manipulation.

## Section A — React.js Concept

### 1. WHAT — Nested JSX becomes a prop

When a custom component has JSX between its opening and closing tags, React supplies that nested content through a prop conventionally called **children**. The receiving component can place `props.children` in its returned description. A **content slot** is a location where the caller supplies what should appear.

Unlike Day 07's fixed composition, the wrapper need not hard-code which task or message it contains. A named title prop provides the heading; children provides the variable content. [Passing JSX as children](https://react.dev/learn/passing-props-to-a-component).

### 2. WHY — Reuse the frame without fixing the message

A learning page may need one panel containing an example and another containing a revision tip. Both share a heading and content grouping, but their internal content differs. A wrapper can own that common structure while callers own the content placed inside it.

This avoids creating a different wrapper function for every paragraph. It also avoids a rapidly growing set of string-only inputs when callers need to provide actual UI structure.

### 3. WHEN — Flexible content belongs to the caller

Use children when a wrapper should accept varied UI: panels, content regions or simple layout containers. Use named data props when a component should own the exact presentation of a field, such as Day 09's numeric duration. Neither approach is universally better; choose based on which component should decide the markup.

### 4. HOW — Supplying content is not automatic placement

```text
Caller supplies title and nested JSX
               |
StudyPanel receives props.title and props.children
               |
Wrapper returns a heading and places props.children in its content region
```

If the wrapper never renders `props.children`, the supplied content is not displayed by that wrapper. Custom tags do not behave like automatic browser containers. The caller creates the nested description; the wrapper chooses where that description belongs in its output. Do not manually call child functions or mutate the child description.

### 5. SYNTAX — A type for renderable content

```tsx
import type { ReactNode } from 'react';

type StudyPanelProps = {
  readonly title: string;
  readonly children: ReactNode;
};
```

`import type` imports a TypeScript type, which is erased from runtime output. `ReactNode` represents values React can render, such as JSX elements, strings, numbers, collections of nodes and empty values. Booleans and null do not display visible text. A plain arbitrary object is not a renderable node. This broad type is appropriate for a general content slot. [React TypeScript types](https://react.dev/learn/typescript).

The field has no `?`, so our contract expects callers to supply children; however, ReactNode includes empty values. It does **not** guarantee a non-empty visible panel. Narrower types are possible when a design actually requires them, but `any` would discard useful checks.

`<StudyPanel title="Focus"><p>Read slowly.</p></StudyPanel>` supplies a paragraph as children. Paired tags are convenient when providing nested content. An explicit `children={...}` prop is also possible; avoid supplying both forms together.

### 6. COMPLETE EXAMPLE — Two panels, different content

Source: [web Day10StudyPanels.tsx](../../examples/react-web/Day10StudyPanels.tsx).

```tsx
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
```

Line by line: 1 imports the node type; 2 separates it from the contract; 3 opens the type; 4 requires a title; 5 describes the read-only content slot; 6 ends the type; 7 is spacing. Line 8 defines the wrapper; 9 starts return; 10 opens section; 11 renders the named title; 12 places the supplied children in a generic div; 13–15 close section, return and function. Line 16 is spacing. Lines 17–19 define StudyTip, return its paragraph and close it; 20 is spacing. Line 21 exports the parent; 22 starts return; 23 opens its container; 24 opens the first panel with a title; 25 supplies its paragraph; 26 closes it; 27 opens the second panel; 28 supplies the custom tip; 29 closes it; 30–32 close the container, return and parent.

**Run:** Follow the [web host instructions](../../examples/react-web/README.md), substituting `Day10StudyPanels` for the filename/import/usage. Expect two headings and two different sentences. Change only the paragraph in the first caller and save/reload; the second remains unchanged. Add a second paragraph within one panel and verify both appear in order.

The slot uses a div rather than a p because callers may supply multiple paragraphs or other block content. A generic wrapper does not make every possible HTML nesting valid; callers still need appropriate content. The type is a rendering contract, not a full HTML content-model validator.

### 7. REAL-WORLD USE

A dashboard's common section frame can contain a progress summary in one usage and a study tip in another. The wrapper handles consistent structure while the caller controls the content. Later styling can improve the shared frame without changing every caller's message.

### 8. COMMON MISTAKES

- Forgetting `{props.children}` creates an empty content region despite nested JSX at the call site.
- Treating children as always a string or always an array makes a flexible slot too brittle.
- Using `any` hides source errors instead of documenting accepted content.
- Hard-coding the tip inside the wrapper prevents caller-controlled variation.
- Assuming a required ReactNode means visible non-empty content confuses presence with displayability.
- Wrapping arbitrary content in p can produce invalid HTML nesting.

### 9. BEST PRACTICES

Give the wrapper a clear responsibility and place children deliberately. Prefer normal JSX composition over cloning or inspecting children when no such behavior is needed. Keep props read-only. Use named props for structured data and children for caller-owned content, with suitable platform containers.

## Section B — React Native Equivalent

### 1. WHAT — The same children prop

A native custom wrapper receives nested JSX through the same props.children mechanism. The type can remain ReactNode, while its output uses View/Text. The JSX relationship itself is platform-independent.

### 2. WHY — ReactNode is broader than valid native placement

ReactNode permits strings, but a bare string placed directly inside a native View is invalid. A slot rendered under View therefore expects callers to provide appropriately wrapped native UI, such as Text. Type-check success does not prove native text containment is correct.

### 3. WHEN — Native content regions

Use a View-based wrapper for varied native content such as text, groups or other native components. A Text-based wrapper is suitable for text-oriented content, not arbitrary View subtrees. Choose the slot's native container based on its intended content.

### 4. HOW — A caller/receiver contract

The wrapper owns the heading and content View. The caller provides a Text or a component that returns valid native content. The wrapper does not convert strings to Text automatically and should not guess how arbitrary data should be displayed. This limitation belongs in its documented usage contract.

### 5. EXPO IMPLEMENTATION

Use a separate Expo learning host and the [native host instructions](../../examples/react-native/README.md), substituting `Day10StudyPanels`. Keep the file outside route directories, render inside the existing safe-area/layout container, and preserve navigation/providers. No dependencies are added.

### 6. COMPLETE NATIVE EXAMPLE

Source: [native Day10StudyPanels.tsx](../../examples/react-native/Day10StudyPanels.tsx).

```tsx
import type { ReactNode } from 'react';
import { Text, View } from 'react-native';

type StudyPanelProps = {
  readonly title: string;
  readonly children: ReactNode;
};

function StudyPanel(props: StudyPanelProps) {
  return (
    <View>
      <Text accessibilityRole="header">{props.title}</Text>
      <View>{props.children}</View>
    </View>
  );
}

function StudyTip() {
  return <Text>Explain the idea in your own words.</Text>;
}

export default function Day10StudyPanels() {
  return (
    <View>
      <StudyPanel title="Today's focus">
        <Text>Build one small example.</Text>
      </StudyPanel>
      <StudyPanel title="Revision tip">
        <StudyTip />
      </StudyPanel>
    </View>
  );
}
```

### 7. LINE-BY-LINE EXPLANATION

Line 1 imports the type; 2 imports native runtime components; 3 is spacing; 4–7 define title and children inputs; 8 is spacing; 9 defines the wrapper; 10 begins return; 11 opens View; 12 displays the title with heading role; 13 places children inside a content View; 14–16 close container, return and definition. Line 17 separates functions. Lines 18–20 define StudyTip returning Text; 21 is spacing. Line 22 exports the parent; 23 begins return; 24 opens its View; 25–27 supply the first title and Text content; 28–30 supply the second title and StudyTip; 31–33 close View, return and parent.

### 8. MOBILE-SPECIFIC CONSIDERATIONS

Both caller paths end in Text for visible strings. Do not supply a bare message directly between StudyPanel tags merely because ReactNode accepts strings. Preserve safe-area handling, allow longer content to wrap and verify Android/iOS output. This small View slot does not add scrolling or polished spacing automatically.

### 9. COMMON MISTAKES AND BEST PRACTICES

Do not import the web version of StudyTip into this native example. A matching component name or type does not guarantee platform-valid output. Document that the slot expects valid native elements; keep arbitrary children under View rather than Text. No configured app host or installed React/Expo/TypeScript versions are present here, so runtime/type compatibility remains unverified.

## Section C — React vs React Native Comparison

| Aspect | React.js | React Native |
|---|---|---|
| Concept | Caller-supplied nested content | Same children prop mechanism |
| Syntax | `<StudyPanel><p>Text</p></StudyPanel>` | `<StudyPanel><Text>Text</Text></StudyPanel>` |
| Implementation | Wrapper places children inside div | Wrapper places children inside View |
| Behavior | ReactNode permits varied renderable content | Same type, additional native containment constraints |
| Use case | Common dashboard section with varied content | Common native content region |
| Semantics | Section/heading structure must remain valid | View/Text and roles require deliberate use |

Ownership, typed slots and composition transfer. Valid output elements, text placement and semantics need platform-aware design.

## Section D — Practical Exercise

### Web: two revision panels

- **Objective:** Build one wrapper with a typed content slot.
- **Requirements:** RevisionPanelProps with readonly title and ReactNode children; one RevisionPanel; two callers with different titles/content, one using a RevisionTip component.
- **Files:** Modify [web PracticePanels.tsx](../../exercises/day-10/react-web/PracticePanels.tsx); add `reflection.md` beside it.
- **Expected behavior:** Both supplied headings and different content blocks appear.
- **Testing:** Change only one caller; add a second paragraph to it; reason about `children={null}` without claiming it creates visible content.
- **Completion criteria:** Explicit slot placement, one wrapper definition, valid typing/nesting and ownership explanation.

Follow the [web brief](../../exercises/day-10/react-web/README.md). No full solution is supplied.

### Native: matching content slots

- **Objective:** Adapt the wrapper while preserving native containment.
- **Requirements:** Same typed inputs, View-based slot, title Text and caller-supplied Text or native RevisionTip.
- **Files:** Modify [native PracticePanels.tsx](../../exercises/day-10/react-native/PracticePanels.tsx); add `reflection.md` beside it.
- **Expected behavior:** Two different content regions with no bare-text error.
- **Testing:** Repeat caller edits on Android/iOS; inspect the type checker separately from runtime output.
- **Completion criteria:** Correct children placement, valid native content and an explanation of ReactNode's limits.

Follow the [native brief](../../exercises/day-10/react-native/README.md). Record missing host/device/type checks as pending.

## Section E — Knowledge Check

Attempt the [five questions](questions.md) before opening their collapsible answers.

## Section F — Daily Summary

- **Key concepts:** Children is a caller-owned content prop; the wrapper decides where to place it.
- **Platform differences:** Shared typing does not enforce browser content models or native text placement.
- **Important syntax:** `import type`, `ReactNode`, paired custom tags and `{props.children}`.
- **Pitfalls:** Ignoring children, assuming strings/arrays, using any and expecting non-empty output from a broad node type.
- **Practical skills:** Build a reusable frame containing different caller-provided UI on both platforms.
- **Next lecture:** Day 11 — Conditional rendering. It has not been generated.

Days 08–10 are prepared, not marked complete. Days 05–07 also await your completion confirmation.
