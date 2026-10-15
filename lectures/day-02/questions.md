# Day 02 — Knowledge check

Attempt these questions before opening the answers.

1. Two progress labels show related numbers. What responsibility does a direct DOM implementation have that a React component description does not?
2. Why calculate remaining lessons from total and completed instead of maintaining three separate numeric constants?
3. If a normal JavaScript variable changes, does React automatically watch it and refresh the screen? How are today's source-edit experiments different?
4. Which part of today's web example transfers unchanged to native, and why can the browser DOM commands not transfer with it?
5. Is an imperative operation always wrong in a React application? Explain the difference between describing this progress UI and requesting an action such as focusing a field.

<details>
<summary>Suggested answers — open after attempting</summary>

1. Direct DOM code must find and write to each output element when an update is needed. The component instead describes both outputs from its data; React and its renderer coordinate the UI work when rendering occurs. React does not decide when arbitrary external variables have changed.
2. The remainder is already determined by the other two values. Calculating it avoids a separately maintained value becoming inconsistent. Incorrect inputs can still produce incorrect results; this is not validation.
3. No. Ordinary variable assignment does not schedule a React render. Editing source and saving makes the development tools load changed code. Interactive updates will use React's update mechanisms in later lessons.
4. Numeric constants and subtraction are ordinary JavaScript and transfer. The output changes from browser tags to View/Text. Native Android/iOS screens have no browser document containing those paragraphs.
5. No. Imperative APIs can be appropriate for explicit platform actions. Today's progress display should be described from data rather than manually rewritten behind React's back. The APIs and timing for focus belong to later lessons.

</details>
