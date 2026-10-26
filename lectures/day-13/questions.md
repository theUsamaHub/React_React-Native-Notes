# Day 13 — Knowledge check

1. Why is onClick={handler()} different from onClick={handler}?
2. Why use an arrow wrapper to supply a topic?
3. Why is a dialog appropriate in this handler but not in the render body?
4. Which parts of web event handling transfer to native?
5. Why use a real button with an explicit non-submit type?

<details>
<summary>Suggested answers — attempt first</summary>

1. Parentheses invoke now; the function reference is supplied for later execution.
2. It defers the call and supplies your string instead of the framework’s event argument.
3. The handler runs for an explicit action; rendering may repeat and should describe UI without unrelated effects.
4. Callback logic transfers, but control props, event objects and dialog APIs differ.
5. It supplies button activation semantics and avoids accidental enclosing-form submission.

</details>
