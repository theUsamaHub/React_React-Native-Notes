# Day 05 — Knowledge check

1. Why is a large-looking paragraph not a substitute for a heading?
2. When would you choose a section rather than a div? Does every group need a new wrapper?
3. Why is View not an exact semantic replacement for section?
4. What does accessibilityRole="header" change, and what does it not guarantee?
5. Why can native text inside a custom component work under View, while a bare string directly under View is incorrect?

<details>
<summary>Suggested answers — attempt first</summary>

1. Appearance and meaning differ. Heading markup communicates structure; enlarging a paragraph changes appearance without that semantic meaning.
2. Use a section for a thematic group normally identified by a heading, and a div for generic grouping. Omit wrappers without a useful purpose.
3. View is a native container; it does not inherit HTML section semantics. Preserve intent through appropriate native structure and roles.
4. It communicates a heading role to accessibility services. It does not automatically style text, create a specific HTML heading level, or prove correct behavior on every device.
5. React follows the custom component's output. If it returns Text containing the string, text containment is satisfied. A bare string has no such Text boundary.

</details>
