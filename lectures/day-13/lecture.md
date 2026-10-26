# Day 13 — Event Handling

## Lecture Header

- **Day:** 13
- **Topic:** Web events and mobile interaction callbacks
- **Learning phase:** Phase 2 — Components and Data
- **Difficulty:** Beginner
- **Prerequisites:** Days 01–12; functions, props and JSX. Callback syntax is explained before use.
- **Estimated study time:** 25–35 minutes reading; 20–40 minutes combined practice.
- **Learning objectives:** Pass handlers instead of calling them during render; defer a call with a chosen argument; compare onClick/onPress; test explicit user actions.

This first lesson in the requested batch introduces events only. Alerts provide visible feedback without adding state, timers or network requests.

## Section A — React.js Concept

### 1. WHAT

An event handler is a function invoked in response to an interaction. A callback is a function supplied to another system for later invocation. React event props connect callbacks to controls. A handler is not a component and does not need to return JSX.

### 2. WHY

A reminder should appear when the user activates its control, not whenever React calculates the screen. Separating the UI description from the action keeps rendering predictable while giving the user control over when work happens.

### 3. WHEN

Use handlers for actions caused by clicks, keyboard activation or other specific interactions. On web use a real button for an action; a clickable div requires additional keyboard and accessibility work that the button already provides.

### 4. HOW

During rendering, the JSX passes a function value. React connects it to the control. Activation invokes it later. A handler can perform an action such as opening a dialog; the component’s rendering body should remain pure.

`handleReminder` refers to a function; `handleReminder()` invokes it immediately. `() => handleTopic('Props')` creates a zero-argument wrapper that supplies the topic later. Passing handleTopic directly would give it the event argument rather than the intended string. [React event handling](https://react.dev/learn/responding-to-events).

Declaring handlers inside a component is normal: they can use that render’s values. This differs from nesting a component definition, which changes component identity. Handler naming is a convention, not React magic.

### 5. SYNTAX

- `onClick={handleReminder}` supplies a function.
- `onClick={handleReminder()}` executes it during rendering and passes its result, which is incorrect here.
- `onClick={() => handleTopic('Props')}` defers a call with a chosen argument.
- `topic: string` types the helper’s input.
- `type="button"` avoids unintended submission if this control is inside a form.

An event object is available when needed, but these handlers can ignore it. When later using one, choose the correct React event type. Web `currentTarget` is the element whose handler is running; it may differ from the originating target. Events can propagate to ancestors. Preventing a default browser action and stopping propagation are different operations; do not add either reflexively.

### 6. COMPLETE EXAMPLE

Source: [web Day13LessonActions.tsx](../../examples/react-web/Day13LessonActions.tsx).

```tsx
export default function Day13LessonActions() {
  function handleReminder() {
    window.alert('Study one concept for 20 minutes.');
  }

  function handleTopic(topic: string) {
    window.alert('Review: ' + topic);
  }

  return (
    <section>
      <h2>Lesson actions</h2>
      <button type="button" onClick={handleReminder}>Show reminder</button>
      <button type="button" onClick={() => handleTopic('Props')}>Review props</button>
    </section>
  );
}
```

Line 1 defines the component; 2–4 define a reminder handler and call window.alert inside it; 5 is spacing; 6–8 define the typed topic handler, with + joining strings; 9 is spacing. Line 10 starts return; 11 opens section; 12 describes heading; 13 passes the reminder to a non-submit button; 14 passes an argument wrapper to the second button; 15–17 close section, return and component.

**Run:** Follow the [web host instructions](../../examples/react-web/README.md), replacing Day01Card with Day13LessonActions in the filename/import/usage. Preserve the separate learning host’s bootstrap. This is a complete component, not a standalone app.

On load, no alert appears. Activate Show reminder and expect the 20-minute message. Dismiss it; activate Review props and expect Review: Props. Repeat using Tab then Enter/Space on web. Reload and confirm no automatic alert. If the browser suppresses dialogs, record that limitation rather than claiming verification.

### 7. REAL-WORLD USE

A lesson toolbar can offer a reminder without needing to remember a changing value on screen. An alert is deliberately obvious for learning; production interfaces often choose less disruptive feedback.

### 8. COMMON MISTAKES

- Invoking a handler in JSX causes actions during rendering.
- Putting alert at the top of the component can repeat dialogs unexpectedly.
- Passing a topic helper directly confuses a framework event with your own argument.
- Calling a handler does not itself store persistent UI data.
- A clickable container is not automatically keyboard-accessible.

### 9. BEST PRACTICES

Use clear action names and labels. Pass functions and keep each handler focused. Do not add unrelated network calls, state or render-time logging. Test that initial display is quiet as carefully as you test activation.

## Section B — React Native Equivalent

### 1. WHAT

Native controls also accept callbacks. Core Button exposes onPress and a title label; Alert supplies a native dialog API.

### 2. WHY

Android/iOS does not use HTML buttons or window.alert. The callback concept transfers, while control and feedback APIs change.

### 3. WHEN

Use core Button for this simple action. Custom press feedback and Pressable remain later topics; no styling library is needed.

### 4. HOW

React Native invokes onPress after activation. A function reference handles the reminder; an arrow wrapper supplies the topic string. Alert.alert takes a dialog title and message. Native event payloads are not browser mouse events. [Native Button reference](https://reactnative.dev/docs/button).

### 5. EXPO IMPLEMENTATION

Copy the native file outside Expo Router route directories and render Day13LessonActions inside a separate learning screen’s existing safe-area/layout container. Follow the [native host instructions](../../examples/react-native/README.md), substituting this component name. Preserve providers/navigation and your original app. No packages are added.

### 6. COMPLETE NATIVE EXAMPLE

Source: [native Day13LessonActions.tsx](../../examples/react-native/Day13LessonActions.tsx).

```tsx
import { Alert, Button, Text, View } from 'react-native';

export default function Day13LessonActions() {
  function handleReminder() {
    Alert.alert('Study reminder', 'Study one concept for 20 minutes.');
  }

  function handleTopic(topic: string) {
    Alert.alert('Revision', 'Review: ' + topic);
  }

  return (
    <View>
      <Text accessibilityRole="header">Lesson actions</Text>
      <Button title="Show reminder" onPress={handleReminder} />
      <Button title="Review props" onPress={() => handleTopic('Props')} />
    </View>
  );
}
```

### 7. LINE-BY-LINE EXPLANATION

Line 1 imports Alert/Button/Text/View; 2 is spacing; 3 defines the component. Lines 4–6 implement the reminder through Alert.alert; 7 is spacing; 8–10 implement the typed topic handler; 11 is spacing. Line 12 starts return; 13 opens View; 14 displays heading-role Text; 15 passes title and handler to Button; 16 passes the argument wrapper; 17–19 close View, return and component.

### 8. MOBILE-SPECIFIC CONSIDERATIONS

Test both actions on Android/iOS and dismiss each dialog before the next action. Platform appearance may differ. Button uses a title prop rather than nested label text. Preserve safe-area handling and test readable labels; browser keyboard tests do not replace native activation testing.

### 9. COMMON MISTAKES AND BEST PRACTICES

Use onPress rather than onClick and Alert rather than window. Do not invoke Alert during rendering. A function may be shared conceptually without sharing platform event types or dialog implementations.

No configured React/Expo application or installed package versions were found in this workspace on 2026-10-26. Runtime, host type compatibility and device verification remain pending. Expo web alone is not native verification.

## Section C — React vs React Native Comparison

| Aspect | React.js | React Native |
|---|---|---|
| Concept | Callback after activation | Callback after native press |
| Syntax | onClick={handler} | onPress={handler} |
| Implementation | HTML button and window.alert | Button and Alert.alert |
| Behavior | Browser click/keyboard interaction | Native control interaction |
| Use case | Web lesson actions | Mobile lesson actions |

Function references, callbacks and chosen arguments transfer. Event objects, controls and feedback APIs require adaptation.

## Section D — Practical Exercise

### React.js exercise

- **Objective:** Connect two explicit user actions without state.
- **Requirements:** Implement PracticeReminders with two non-submit buttons: Review JSX and Review keys. Use a helper with a string topic parameter and callbacks to show the chosen topic in a browser alert.
- **Files:** Modify [PracticeReminders.tsx](../../exercises/day-13/react-web/PracticeReminders.tsx); create reflection.md beside it.
- **Expected behavior:** No initial dialog; each activated control opens a message for only its selected topic.
- **Testing:** Activate JSX, dismiss, activate keys, dismiss, then activate JSX again. Reload and confirm silence. On web also use keyboard activation.
- **Completion criteria:** Correct user-triggered messages, useful labels, no render-time actions and a complete reflection.

Read the [full exercise brief](../../exercises/day-13/react-web/README.md). No complete solution is supplied.

### React Native exercise

- **Objective:** Connect two explicit user actions without state.
- **Requirements:** Implement the same actions using native Button title/onPress, Alert.alert and View/Text. Supply the two topic strings through callbacks.
- **Files:** Modify [PracticeReminders.tsx](../../exercises/day-13/react-native/PracticeReminders.tsx); create reflection.md beside it.
- **Expected behavior:** No initial dialog; each activated control opens a message for only its selected topic.
- **Testing:** Activate JSX, dismiss, activate keys, dismiss, then activate JSX again. Reload and confirm silence. On web also use keyboard activation.
- **Completion criteria:** Correct user-triggered messages, useful labels, no render-time actions and a complete reflection.

Read the [full exercise brief](../../exercises/day-13/react-native/README.md). No complete solution is supplied.

## Section E — Knowledge Check

Attempt the [five questions](questions.md) before opening the collapsible answers.

## Section F — Daily Summary

- **Key concepts:** Supply a function to run later for interaction.
- **Platform differences:** onClick/window.alert versus onPress/Alert.alert.
- **Important syntax:** Handler references and arrow callbacks.
- **Pitfalls:** Immediate invocation and wrong argument types.
- **Practical skills:** Wire and test two user actions.

**Next lecture:** Day 14 — State with useState.

Preparation does not mark any lesson completed. Prior statuses remain unchanged until you confirm completion.
