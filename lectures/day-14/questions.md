# Day 14 — Knowledge check

1. Why does changing an ordinary local variable not provide React state?
2. What are the two values returned by useState?
3. Why must useState stay outside conditions and handlers?
4. Does setIsStudying(true) immediately rewrite the currently running handler’s isStudying binding?
5. Do two instances share this boolean, and will it necessarily survive a reload?

<details>
<summary>Suggested answers — attempt first</summary>

1. Local values are recreated on calls and ordinary assignment does not request React rendering. State connects retained memory and updates.
2. The current render’s value and a function for requesting the next value.
3. React’s Hook association relies on a consistent top-level call structure; handlers and conditions do not provide that.
4. No. It requests an update for a subsequent render; the current render’s binding remains its snapshot.
5. No. Each instance has its own state; it is not durable storage and a new mount/reload normally initializes it again.

</details>
