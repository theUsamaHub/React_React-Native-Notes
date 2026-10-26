# Day 15 — Knowledge check

1. Starting from 0, why do two setCount(count + 1) calls differ from two previous => previous + 1 updates in one handler?
2. Why is copying an array and then mutating an existing item not enough?
3. Does useState merge a supplied partial object with the old object?
4. Why must an updater avoid alerts and external ID counters?
5. Why is the count-based ID scheme acceptable only for this bounded append/reset example?

<details>
<summary>Suggested answers — attempt first</summary>

1. The first submits replacement 1 twice from the same captured value; the second queues transformations that receive pending results, producing 2.
2. The new array can still reference the old item objects. Copy the changed item too, and each changed enclosing level.
3. No. It replaces the value. Return the complete intended object, copying preserved fields explicitly.
4. Updaters must be pure and may be re-evaluated during development checks. Effects or external increments would make repeated evaluation observable.
5. Appending derives unique IDs from pending count and resetting clears all old rows. Deletion, persistence or merging could break that assumption and need a stronger identity strategy.

</details>
