# Day 08 — Knowledge check

1. Can React call a component again without changing the DOM? Why?
2. How do a React element description and a browser DOM node differ?
3. With stable ancestors, what is the conceptual difference between changing a paragraph's text and changing its element type?
4. Why is source hot refresh not a reliable controlled experiment for reconciliation identity?
5. Why is calling native rendering a hidden browser DOM misleading?

<details>
<summary>Suggested answers — attempt first</summary>

1. Yes. Recalculation can produce equivalent output, so no DOM content mutation is needed.
2. The description represents intended UI; a DOM node is an actual browser-managed object. JSX does not itself hand your component a DOM node.
3. A compatible paragraph at the same position can be retained with changed text. A different host type replaces that host subtree. This is conceptual reasoning, not a precise operation-count guarantee.
4. Tooling may preserve, remount or reload code under its own rules. It does not isolate a normal runtime React update.
5. Native uses React descriptions with a native renderer and platform UI, not an ordinary browser document. Its internal layout representation is not HTML.

</details>
