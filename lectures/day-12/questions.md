# Day 12 — Knowledge check

1. What does map return, and why can a block callback with no return produce no visible rows?
2. If X is inserted before A and B, why are their data IDs better identities than their current indexes?
3. Why is a key on a Text inside a mapped View insufficient for identifying the outer mapped rows?
4. Can a child read props.key? What should you do if the child also needs the record ID?
5. Do stable keys sort records or guarantee global identity? What evidence does source reordering actually provide?

<details>
<summary>Suggested answers — attempt first</summary>

1. Map returns an array of callback results. A block without return yields undefined for each result, so there are no row descriptions to display.
2. A and B remain the same records when their positions change. Index-based identity can associate existing row state with a different record after insertion.
3. React needs keys at the mapped sibling boundary. The outer View is the returned sibling; a deeper Text key does not identify that View among its siblings.
4. No; key is special React metadata, not an ordinary prop. Pass the ID separately under a named prop and include it in the child's type.
5. No. Array order determines display order; keys are local to sibling reconciliation and compatible types/context also matter. Source reorder plus refresh verifies resulting order, not normal-runtime state preservation.

</details>
