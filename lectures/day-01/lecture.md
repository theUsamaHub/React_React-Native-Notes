# Day 01 — Introduction to React.js and React Native

## Lecture Header

- **Day:** 01
- **Topic:** Describing user interfaces with React on web and native platforms
- **Learning phase:** Phase 1 — Fundamentals
- **Difficulty:** Beginner foundations
- **Prerequisites:** Basic JavaScript functions, strings, and return statements; basic HTML familiarity. No hooks or mobile architecture knowledge is assumed.
- **Estimated study time:** 25–35 minutes reading; 20–40 minutes practice across both platforms. Host setup, if needed, is separate.
- **Learning objectives:** Explain React's purpose; distinguish UI description from platform rendering; identify what React Native and Expo contribute; read a small TSX component; build the same static content using web and native building blocks.

Today's primary topic is the relationship between React and its rendering platforms. Syntax is explained only enough to read and adapt the examples. We will not add state, routing, APIs, or interactive features.

## Section A — React.js Concept

### 1. WHAT — What is React?

React is a library for building user interfaces from components. A **user interface (UI)** is the part of an application a person sees and interacts with. A **component** is a reusable piece of UI described in code, such as a learning card, search box, or profile header.

In this course, “React.js” means React used for the web. React supplies the component model; **React DOM** is the renderer that connects that model to browser elements. A **renderer** turns a UI description into the platform's displayed interface. React is not a database, backend server, or complete application framework by itself.

### 2. WHY — Why does it exist?

With traditional JavaScript, developers often locate individual browser elements and change them directly. For example, updating a dashboard may mean finding a total, replacing its text, adding a row, and showing an empty-message element when the last row disappears. This explicit sequence of commands is called an **imperative** approach.

As a screen grows, forgetting one update can leave different parts inconsistent. React popularized a component-based, **declarative** approach: describe what the UI should look like for the current data, then let React coordinate the corresponding UI updates. This addresses the difficulty of maintaining changing interfaces and reusing coherent pieces of them. It does not guarantee better performance or eliminate the need to design correct data flows.

Today's static card is deliberately small. It lets you identify a UI description before later lessons introduce changing data. React is not necessary to display two static lines; its organizational benefits become more useful as behavior and reuse grow.

### 3. WHEN — When should developers use it?

React is useful for interfaces made of reusable parts whose content changes: dashboards, shopping carts, account pages, or interactive learning tools. You can also use it for only part of a web page. A plain document with little interaction may need only HTML and CSS; choose tools based on the interface's needs.

### 4. HOW — How does it work conceptually?

Think of three responsibilities:

1. **Your component describes the result.** A JavaScript function returns a description of a section, heading, and sentence.
2. **React calculates UI output.** Rendering means React calls component functions to work out their descriptions. On later updates it can compare output with what was previously represented.
3. **React DOM applies the result to the browser.** The browser's **DOM**, or Document Object Model, is its in-memory representation of page elements. React DOM updates those elements during the commit stage; the browser draws the page.

Calling a component is not the same thing as redrawing the entire screen. A later calculation need not produce a DOM change. The detailed comparison process, often discussed alongside the “virtual DOM,” belongs to a later lesson. [Reference: React's rendering explanation](https://react.dev/learn/render-and-commit).

### 5. SYNTAX — Reading the component

The following complete component is saved as [Day01Card.tsx](../../examples/react-web/Day01Card.tsx). **TSX** means TypeScript source that can include **JSX**, a syntax for writing UI descriptions inside JavaScript/TypeScript. JSX resembles HTML here, but it is transformed by development tools; the browser does not execute raw TSX.

### 6. EXAMPLE — A learning card on the web

```tsx
export default function Day01Card() {
  return (
    <section>
      <h1>My learning journey</h1>
      <p>I am learning React one concept at a time.</p>
    </section>
  );
}
```

Line by line:

1. `export default` makes this file's main value available to another file. `function Day01Card()` declares a function with no inputs. Component names begin with a capital letter.
2. `return (` starts the UI description returned by the function. Parentheses group the multiline expression.
3. `<section>` starts a browser section element and groups this component's content under one parent.
4. `<h1>...</h1>` describes a top-level heading. The words between the tags are visible text.
5. `<p>...</p>` describes a paragraph.
6. `</section>` closes the parent element.
7. `);` finishes the returned expression.
8. `}` ends the function.

There are no type annotations because this function has no inputs and TypeScript can infer its returned value. That does not make the file invalid TypeScript. Modern JSX configurations do not need a `React` import just to write JSX. [Reference: defining React components](https://react.dev/learn/your-first-component).

Use the [web running instructions](../../examples/react-web/README.md) to render it inside a configured learning host. This file supplies complete component code; the host supplies the application bootstrap and build configuration. Expected output: a heading and one sentence. It is not a clickable card and does not store any data.

### 7. REAL-WORLD USE

A learning platform might show an introductory card on its dashboard. A component gives that piece of the screen a clear name and a place for its markup. Later, the same boundary can accept different learner data. Today the words are fixed so you can focus on where the UI description lives.

### 8. COMMON MISTAKES

- **Treating React as the whole application:** React does not supply your database or authentication service. Confusing these responsibilities makes project design harder.
- **Calling the component `day01Card`:** JSX treats lowercase names as platform tags. Use capitalized names for your own components.
- **Assuming JSX is an HTML string:** It is code transformed into a UI description, not a string you manually insert into the document.
- **Returning multiple adjacent parent elements:** JSX needs a grouping structure. Keep the single section for this exercise.
- **Expecting source changes to demonstrate state:** Saving code causes development tooling to refresh it. Runtime state is a later topic.

### 9. BEST PRACTICES

Give components meaningful names, keep this example static, and use semantic browser elements that communicate structure. Start with the smallest UI that demonstrates the idea. Describe the UI through React instead of also manually changing the same DOM elements; two competing owners can create inconsistent output.

## Section B — React Native Equivalent

### 1. WHAT — What is React Native?

React Native is a framework for building applications using React and native platform capabilities. For Android and iOS, its renderer presents native UI rather than ordinary HTML elements in a browser page. The React component idea stays familiar; the building blocks change.

**Expo** is a framework and tool ecosystem for React Native applications. It provides a development workflow and access to useful platform capabilities. Expo is not a replacement for React or React Native. We use its existing project setup to run a native screen.

### 2. WHY — Why is the implementation different?

Phones have platform UI systems, touch interaction, system keyboards, and device APIs. React Native exists to apply React's programming model to native applications and share suitable code across platforms. A browser heading has browser meaning and styling; it is not a native mobile UI primitive.

Sharing a programming model can reduce duplication, but it does not mean every screen and platform-specific behavior is identical. Some native integrations still require platform expertise.

### 3. WHEN — When should it be used?

Use React Native when building native mobile interfaces with React and when its platform capabilities fit the application. Expo provides a practical environment for learning and building those applications. Evaluate platform requirements when choosing tools; native development is more than putting a website on a smaller screen.

### 4. HOW — How does it work?

Your function still returns a UI description. Instead of browser tags, it uses core components such as `View` for a container and `Text` for text. React participates in calculating the component tree; React Native's renderer coordinates native UI updates for the platform. Android/iOS do not require a browser DOM for this screen. [Reference: React Native core components](https://reactnative.dev/docs/intro-react-native-components).

This is a conceptual explanation, not a claim that every component produces exactly one native view or that all versions use a particular communication bridge. Native renderer internals are beyond today's prerequisites.

### 5. EXPO IMPLEMENTATION — Where does the code go?

An Expo application supplies a configured native runtime and development tooling. Some projects use a root `App.tsx`; Expo Router projects instead have route files, often under `app` or `src/app`. Inspect the actual project before deciding which screen to edit. Keep a reusable card outside the route directory and render it in a learning screen's existing container. [Reference: Expo Router directories](https://docs.expo.dev/router/reference/src-directory/).

The inspected workspace contains no Expo project, so no installed versions could be checked and no existing app was changed. Use the [native running instructions](../../examples/react-native/README.md) in a separate learning host. They explain how to preserve its existing layout and start Expo. Execution remains pending until a host is available.

### 6. EXAMPLE — The same learning card on native

Saved as [Day01Card.tsx](../../examples/react-native/Day01Card.tsx):

```tsx
import { Text, View } from 'react-native';

export default function Day01Card() {
  return (
    <View>
      <Text>My learning journey</Text>
      <Text>I am learning React one concept at a time.</Text>
    </View>
  );
}
```

### 7. CODE WALKTHROUGH — Line by line

1. `import { Text, View } from 'react-native';` brings two named core components into this file. The braces select named exports; they are not UI markup.
2. The blank line separates imports from the component for readability.
3. `export default function Day01Card() {` declares and exports our component, just as on web.
4. `return (` starts its UI description.
5. `<View>` opens a native container for the card.
6. The first `<Text>` displays the title string.
7. The second `<Text>` displays the explanatory sentence.
8. `</View>` closes the container.
9. `);` finishes the return expression.
10. `}` closes the function.

Expected output is two text elements with the same content as the web card. Native `Text` does not automatically have the large bold appearance or heading semantics of an HTML `h1`. Styling and accessibility roles need deliberate attention in their later lessons.

### 8. MOBILE-SPECIFIC CONSIDERATIONS

Small screens, notches, system bars, larger text settings, and different device sizes influence whether content is readable. Render today's card within the learning host's existing safe-area layout. We do not add a layout library or arbitrary device-specific padding for this static demonstration.

Use an Android/iOS device or emulator to verify native output. Expo can also target the web; successful browser preview alone does not establish mobile behavior. For a production welcome screen, this card would also need deliberate visual hierarchy and accessibility testing.

### 9. COMMON MISTAKES AND BEST PRACTICES

- **Using `div`, `h1`, or `p` in a native screen:** These are web elements, not React Native core components. Use the platform's building blocks.
- **Placing a string directly inside `View`:** Visible strings belong inside `Text`; otherwise native rendering can fail.
- **Forgetting imports:** `Text` and `View` must be available in the file. Capitalization alone does not define them.
- **Assuming native styles are browser CSS:** The platforms have different styling APIs and behavior. Avoid copying CSS blindly.
- **Replacing an existing application's entry point:** Inspect the host and preserve navigation/providers. Render the card in a separate learning screen or copy.
- **Expecting pixel-identical results:** Compare meaning and content today. Shared logic and consistent behavior matter more than accidental default styling.

## Section C — React vs React Native Comparison

| Aspect | React.js | React Native |
|---|---|---|
| Concept | React components describe web UI | React components describe native UI |
| Syntax | `<section><p>Hello</p></section>` | `<View><Text>Hello</Text></View>` |
| Implementation | React with React DOM and a web build environment | React with React Native in an Expo host |
| Behavior | Browser DOM and browser layout/painting | Native Android/iOS UI and platform layout/display |
| Use case | Learning dashboard in a browser | Learning dashboard installed as a mobile app |
| Project entry | Existing web bootstrap mounts the application | Expo entry or Router screen/layout structure |
| Development preview | Local web URL in a browser | Compatible Expo client/development build on device or emulator |
| Shared knowledge | Functions, component boundaries, TSX, UI descriptions | The same concepts transfer; later props/state principles also transfer |
| Platform work | HTML semantics, CSS, browser capabilities | Native core components, native styling, device capabilities |

The shared idea is **describe the UI using components**. The platform-specific part is **which elements you describe and how they are displayed**. React Native's web support is another target; it does not turn Android/iOS UI into HTML.

## Section D — Practical Exercise

Build your own static learner introduction on both platforms. Spend 10–15 minutes on each implementation and 5–10 minutes comparing results. These tasks use the same concept as the examples with different required content; complete solutions are intentionally withheld.

### React.js exercise

- **Objective:** Describe your introduction using semantic web elements.
- **Requirements:** One section, a heading containing your name, and two paragraphs containing a learning goal and a reason to learn React.
- **Files:** Modify [web PracticeCard.tsx](../../exercises/day-01/react-web/PracticeCard.tsx); create `reflection.md` beside it.
- **Expected behavior:** The three pieces of text appear with browser default layout.
- **Testing:** Mount in a separate learning host, inspect the browser and console, edit the goal and verify refresh. Follow the [web exercise instructions](../../exercises/day-01/react-web/README.md).
- **Completion criteria:** Valid TSX, required text visible, and a reflection distinguishing description from browser rendering.

### React Native exercise

- **Objective:** Describe the identical introduction using native components.
- **Requirements:** One native container and three text elements with the same content; all strings inside text components.
- **Files:** Modify [native PracticeCard.tsx](../../exercises/day-01/react-native/PracticeCard.tsx); create `reflection.md` beside it.
- **Expected behavior:** Three readable text elements in the Expo learning screen; exact web styling is not expected.
- **Testing:** Mount within the learning host's existing safe-area layout; inspect on Android/iOS, edit the goal, and verify refresh without an error overlay. Follow the [native exercise instructions](../../exercises/day-01/react-native/README.md).
- **Completion criteria:** Correct native building blocks, matching content, and a reflection explaining why HTML tags do not belong in this native screen.

If a host is unavailable, attempt the source and reflections now and record runtime verification as pending. Do not treat a missing environment as a passing check. When ready, say “Check my exercise” and provide the host location or relevant files.

## Section E — Knowledge Check

Answer the [five conceptual questions](questions.md). Their suggested answers are in a separate collapsible section in that file; attempt the questions first. If your Markdown viewer does not collapse details, stop before the answer section.

## Section F — Daily Summary

- **Key concepts learned:** React organizes UI descriptions into components. A renderer connects those descriptions to a platform. Expo provides a React Native application environment and tooling.
- **Platform differences:** Web uses browser elements; native Android/iOS uses React Native components. Shared component principles do not imply interchangeable tags or styles.
- **Important syntax:** `export default function Name()`, `return (...)`, paired JSX tags, and native named imports.
- **Common pitfalls:** Assuming React supplies the backend, using HTML in native screens, placing bare text in a native container, and confusing development refresh with application state.
- **Practical skills gained:** Read and adapt a static TSX component; choose platform-appropriate elements; explain the same UI concept on web and native.
- **Next lecture:** Day 02 — Declarative UI vs imperative JavaScript. It will be created only when requested.

Day 01 remains uncompleted in the progress tracker until you confirm your study and exercises.
