# Day 10 — Knowledge check

1. Why can nested JSX fail to appear inside a custom wrapper even when the caller supplied it correctly?
2. When would a named title prop be preferable to supplying that title through children?
3. Why use ReactNode rather than string or any for this general content slot?
4. Does a required children: ReactNode field guarantee visible content? Explain a counterexample.
5. Why can a children value be accepted by TypeScript yet cause a native text-containment error?

<details>
<summary>Suggested answers — attempt first</summary>

1. The wrapper may never render props.children. Custom component nesting supplies a prop; the receiving component must place it in its output.
2. A named title is useful when the wrapper should own the heading element and placement while the caller supplies only its string value.
3. ReactNode describes renderable values, including elements and multiple nodes. String is too narrow; any throws away useful type checking.
4. No. ReactNode includes null, so children={null} can satisfy the type while displaying nothing in the slot.
5. ReactNode includes bare strings/numbers. A native View slot cannot directly display them without Text. The broad React type does not validate every platform's placement rules.

</details>
