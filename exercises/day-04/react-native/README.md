# Day 04 — A pure break-card component on native

**Objective:** Use the same component discipline on a native screen. Budget: 10–15 minutes.

## Requirements and files

Modify `PracticeBreakCard.tsx`. Add native core imports and keep one default-exported, capitalized function at file scope. Use local inputs of 4 stretching minutes and 6 walking minutes. Calculate the total; display `Study break`, your reminder, and `Total break: 10 minutes` in three Text elements within a View.

No shared counters, device calls during rendering, hooks, events or nested component definitions. Create `reflection.md` explaining what makes the function predictable and which parts are identical to the web implementation.

## Run and test

Mount `<PracticeBreakCard />` in a separate Expo host using the [native instructions](../../../examples/react-native/README.md). Keep the existing safe-area/layout container and put this component outside Router route directories.

1. Verify title, reminder and 10-minute total on Android/iOS.
2. Use the component twice inside the learning screen's container; expect two matching cards from one definition.
3. Save/reload repeatedly: totals should remain 10, not accumulate.
4. Change the inputs to 3 and 5 and save/reload: both totals should become 8. Restore 4 and 6.
5. Check the error overlay and run the host's type checker if available.

**Completion criteria:** One native component definition, correct text containment and totals, no render-time external mutation, and completed reflection. Report native verification pending if tested only in Expo web. No complete solution is supplied.
