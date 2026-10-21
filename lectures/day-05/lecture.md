# Day 05 — Platform UI Building Blocks

## Lecture Header

- **Day:** 05
- **Topic:** Semantic HTML versus native View/Text and platform roles
- **Learning phase:** Phase 1 — Fundamentals
- **Difficulty:** Beginner
- **Prerequisites:** Days 01–04; JSX nesting and function components.
- **Estimated study time:** 25 minutes reading; 20–35 minutes practice across web and native.
- **Learning objectives:** Choose elements by purpose; distinguish a generic container from a semantic section; use native text correctly; explain why visual appearance and accessibility meaning are different; compare corresponding UI without pretending every element maps exactly.

This is the first of the three lessons requested together on 2026-10-21. Its one topic is choosing platform UI building blocks. Styling, interaction and full accessibility testing have their own later lessons.

## Section A — React.js Concept

### 1. WHAT — Host elements and semantics

React components ultimately describe platform building blocks. On the web, these include HTML elements such as `section`, `h2`, `p` and `div`. A **semantic element** communicates the purpose of content, not merely how it looks. A heading identifies a heading; a paragraph identifies paragraph content.

A **container** groups content. Some containers also have specific meaning: `section` represents a thematic section, normally identified by a heading. A `div` is a generic container with no special semantic meaning. [MDN's section reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/section).

### 2. WHY — Why meaning matters

Two elements can look similar after styling yet mean different things. A large paragraph is not automatically a heading. Meaningful structure helps readers, maintainers and assistive technologies understand the page. It also reduces the need to recreate behavior or meaning that HTML already supplies.

For a lesson summary, we want a section title, an explanation and a duration. Choosing those elements deliberately is a design decision even before CSS exists.

### 3. WHEN — Choose by purpose

Use a heading for a section title, paragraphs for prose, and a section for a thematic group. Use a generic container only when grouping is needed without a more specific semantic role. Do not add wrappers automatically: an unnecessary wrapper can be omitted.

Choose a heading level that fits the surrounding page. Today's embedded panel uses `h2`, assuming the page already has its main heading. Do not choose `h2` only because its default font size looks convenient. The visual style can be changed later without changing the content hierarchy.

### 4. HOW — What React adds and what HTML supplies

Your component returns a JSX description. React DOM creates or updates the corresponding browser elements. The browser applies its usual element behavior and default styling, and exposes relevant information to accessibility tools. React does not automatically make an arbitrary `div` into a heading because its text sounds like a title.

The component name itself also does not add an HTML element. A function named `LessonPanel` can return a section, but the DOM does not gain a `LessonPanel` tag solely because of that function name.

### 5. SYNTAX — Read the platform vocabulary

| JSX | Purpose in this example |
|---|---|
| `<section>...</section>` | The lesson panel's thematic group |
| `<h2>...</h2>` | A heading within the host page's hierarchy |
| `<p>...</p>` | A sentence or short paragraph |
| `<div>...</div>` | Generic grouping of supporting information |

These lowercase tags are provided by the browser platform, so they need no imports. They still follow JSX closing and nesting rules. A `p` is not an all-purpose wrapper for sections or other paragraphs.

### 6. COMPLETE EXAMPLE — A lesson panel

Source: [web Day05LessonPanel.tsx](../../examples/react-web/Day05LessonPanel.tsx).

```tsx
export default function Day05LessonPanel() {
  return (
    <section>
      <h2>Today's lesson</h2>
      <p>Choose elements for their meaning.</p>
      <div>
        <p>Estimated time: 25 minutes</p>
      </div>
    </section>
  );
}
```

Line by line:

1. Define and export the panel component.
2. Begin its returned description.
3. Open the thematic section.
4. Give that section a heading.
5. Display its explanatory paragraph.
6. Group supporting information in a generic container.
7. Display duration as a paragraph inside the group.
8. Close the generic container.
9. Close the section.
10. Finish the return expression.
11. End the function.

The inner div is included to illustrate a generic group; with only one paragraph it could be removed without losing meaning. A real application might group several related metadata items there.

**Run:** Follow the [web host instructions](../../examples/react-web/README.md), replacing `Day01Card` with `Day05LessonPanel` in the filename, import and usage. Render it under the existing page heading. Expect a title, explanation and time. Inspect the browser Elements panel to see actual `section`, `h2`, `p` and `div` elements. This is a complete component for a configured host, not a standalone app.

### 7. REAL-WORLD USE

A course dashboard can group an upcoming lesson and its duration in a clear section. The same reasoning applies to account summaries and product information. Meaningful HTML makes structure understandable even when visual styling is absent.

### 8. COMMON MISTAKES

- Using only divs removes useful built-in meaning.
- Selecting headings for size creates a misleading content hierarchy.
- Placing a section inside a paragraph violates HTML's content model and can make the browser rearrange the markup.
- Assuming every wrapper is needed makes the tree harder to inspect.
- Treating a static paragraph as a button does not supply keyboard or click behavior. Interactive controls are later topics.

### 9. BEST PRACTICES

Describe the content's purpose first, then select an element. Keep grouping intentional. Inspect the resulting DOM as well as the visible page. Prefer built-in semantics instead of adding redundant roles to suitable HTML elements.

## Section B — React Native Equivalent

### 1. WHAT — View and Text

`View` is a fundamental native container. `Text` displays text and supports text-specific behavior. They are imported React Native components, not browser tags. A View can group the lesson's title, explanation and metadata, while Text contains the displayed words. [View reference](https://reactnative.dev/docs/view), [Text reference](https://reactnative.dev/docs/text).

### 2. WHY — No exact HTML mapping

A View does not inherently mean `section`, `main` or `article`. A Text does not inherently mean `h2` or `p`. Native UI has different building blocks and accessibility APIs. We preserve the content's intent, then express it using supported native capabilities.

### 3. WHEN — Containers and text

Use View when native layout/grouping requires a container. Put displayed strings and numbers inside Text. Use an appropriate accessibility role when the element has a meaningful role that is not already conveyed, rather than assigning roles merely for appearance.

### 4. HOW — Meaning versus appearance

`accessibilityRole="header"` identifies a heading to accessibility services. This attribute-like input configures the native Text component. It does not make the text larger, bold, or equivalent to a numbered HTML `h2` hierarchy. TalkBack and VoiceOver can expose roles differently, so device testing matters. [React Native accessibility roles](https://reactnative.dev/docs/accessibility).

We leave the outer View's accessibility grouping at its default. Making the whole panel one accessible element can affect which descendants users can navigate individually; that is not required for this lesson.

### 5. EXPO IMPLEMENTATION

Copy the native file into a separate Expo learning host's components directory, outside Router route folders. Render it within the existing learning screen and safe-area container. Follow the [native host instructions](../../examples/react-native/README.md), substituting `Day05LessonPanel` for `Day01Card`. No additional package is needed.

No configured app manifest or installed library versions were present in this workspace when prepared on 2026-10-21. Type and device compatibility remain unverified until a host is available. Do not overwrite your existing Expo application.

### 6. COMPLETE NATIVE EXAMPLE

Source: [native Day05LessonPanel.tsx](../../examples/react-native/Day05LessonPanel.tsx).

```tsx
import { Text, View } from 'react-native';

export default function Day05LessonPanel() {
  return (
    <View>
      <Text accessibilityRole="header">Today's lesson</Text>
      <Text>Choose elements for their meaning.</Text>
      <View>
        <Text>Estimated time: 25 minutes</Text>
      </View>
    </View>
  );
}
```

### 7. LINE-BY-LINE EXPLANATION

1. Import the two native building blocks.
2. Separate imports from the definition.
3. Define and export the panel function.
4. Begin returning JSX.
5. Open the outer native container.
6. Display the title and identify it as a heading for accessibility.
7. Display the explanation as text.
8. Open a generic subgroup for metadata.
9. Display the duration inside Text.
10. Close the metadata View.
11. Close the outer View.
12. Finish the return.
13. End the function.

### 8. MOBILE-SPECIFIC CONSIDERATIONS

Expect native default typography, not browser heading margins. Check small-screen wrapping and larger text settings. Keep system bars away from content through the host's existing safe-area setup. If available, navigate the title using TalkBack on Android or VoiceOver on iOS and record how it is announced. Do not infer successful accessibility behavior from a visual screenshot or Expo web preview.

### 9. COMMON MISTAKES AND BEST PRACTICES

Bare words directly inside View can cause a native rendering error; wrap them in Text. Do not import HTML tags or assume a View has section semantics. A role communicates meaning rather than visual styling or interaction. Keep containers purposeful and confirm text order and roles on a real native target when possible.

## Section C — React vs React Native Comparison

| Aspect | React.js | React Native |
|---|---|---|
| Concept | Built-in HTML elements with differing semantics | Core native components with platform-specific roles |
| Syntax | `<h2>Title</h2>` | `<Text accessibilityRole="header">Title</Text>` |
| Implementation | React DOM creates browser elements | React Native presents native UI |
| Behavior | Heading semantics and browser default style | Heading role does not supply heading style or level |
| Use case | Thematic lesson section in a web page | Grouped lesson information on a native screen |
| Container | section for meaning; div for generic grouping | View for grouping; no automatic section equivalence |
| Text | p and heading elements | Text with appropriate attributes |

Content hierarchy and intentional grouping transfer. Exact semantics, layout defaults and accessibility behavior require platform-specific decisions.

## Section D — Practical Exercise

### Web: revision panel

- **Objective:** Choose semantic elements for a small panel.
- **Requirements:** A section titled `Revision plan`, two prose paragraphs, and one generic metadata group showing `Time: 20 minutes`. Explain the heading level you chose.
- **Files:** Modify [web PracticePanel.tsx](../../exercises/day-05/react-web/PracticePanel.tsx); create `reflection.md` beside it.
- **Expected behavior:** Heading and three text lines appear in the intended order.
- **Testing:** Mount in a separate host; inspect the DOM for proper nesting and check the console.
- **Completion criteria:** Suitable heading/paragraph/section elements, intentional generic grouping, and reflection on meaning versus appearance.

See the [web exercise brief](../../exercises/day-05/react-web/README.md). No solution is supplied.

### Native: matching revision panel

- **Objective:** Express the same intent using native building blocks.
- **Requirements:** Matching text in View/Text, a heading role on the title, and all visible values inside Text.
- **Files:** Modify [native PracticePanel.tsx](../../exercises/day-05/react-native/PracticePanel.tsx); create `reflection.md` beside it.
- **Expected behavior:** Matching content in native presentation; no assumption of identical typography.
- **Testing:** Use Android/iOS, inspect text order, and check the title's screen-reader role if available.
- **Completion criteria:** Correct native containment, suitable role and explanation of why View is not a semantic section replacement.

See the [native exercise brief](../../exercises/day-05/react-native/README.md). Record unavailable device or accessibility checks as pending.

## Section E — Knowledge Check

Attempt the [five questions](questions.md); answers are in a separate collapsible section.

## Section F — Daily Summary

- **Key concepts:** UI elements communicate purpose as well as displaying content.
- **Platform differences:** HTML has distinct semantic tags; native UI uses core components and appropriate roles.
- **Important syntax:** `section`, `h2`, `p`, `div`, `View`, `Text`, `accessibilityRole="header"`.
- **Pitfalls:** Bare native text, choosing headings for size, and assuming every web element has an exact native equivalent.
- **Practical skills:** Build and inspect equivalent small panels on both platforms.
- **Next lecture:** Day 06 — Modules and imports/exports. Open it after this day's practice.
