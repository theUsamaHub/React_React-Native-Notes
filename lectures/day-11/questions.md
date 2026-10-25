# Day 11 — Knowledge check

1. Why does a conditional expression not itself make the screen update when a variable changes?
2. How does returning null differ from assuming the component was never called?
3. What does `0 && <p>Tip</p>` evaluate to, and why is this particularly risky beneath a native View?
4. When is a ternary clearer than &&, and when is an early return clearer than both?
5. Why does hiding a privileged UI element not provide authorization?

<details>
<summary>Suggested answers — attempt first</summary>

1. A condition selects output when rendering occurs. Ordinary variable changes do not request a React render; later update mechanisms handle that.
2. The function was called to calculate its result, which contributes no host content. Null output does not by itself prove absence from the parent's component tree.
3. It evaluates to numeric zero. Web React can show zero; a raw number under View violates native Text containment. Use an explicit boolean comparison.
4. A ternary clearly chooses between two outputs. An early return is useful when the whole component has a distinct result, such as no output.
5. Presentation controls what is shown, not what a client is permitted to do. Real permissions require enforcement at the appropriate trusted boundary.

</details>
