# Day 04 — A pure break-card component on web

**Objective:** Define and render a named, predictable UI function. Budget: 10–15 minutes.

## Requirements and files

Modify `PracticeBreakCard.tsx`. Keep one default-exported, capitalized function at file scope. Inside it, define 4 stretching minutes and 6 walking minutes and calculate their total. Return a section with a heading `Study break`, a short reminder of your choice and `Total break: 10 minutes` derived from the local calculation.

Do not mutate a module-level variable, write to the DOM, log during rendering, add state/events, or define another component inside this function. No React.FC annotation is required.

Create `reflection.md` explaining definition vs JSX usage, why local arithmetic is safe here, and why a module-level visit counter incremented during rendering would be unreliable.

## Run and test

Mount `<PracticeBreakCard />` in a separate web host using the [host instructions](../../../examples/react-web/README.md) with the new name. Keep your completed source in this repository.

1. Confirm heading, reminder, and 10-minute total are visible.
2. Render the component twice inside the host's existing container. Expect two matching cards without copying the function definition. Do not add keys or list logic; write two JSX usages directly.
3. Save/reload repeatedly. The displayed total should remain 10; it must not increase because the component ran again.
4. Change local inputs to 3 and 5; expect both cards to show 8 after source refresh. Restore 4 and 6.
5. Check the console and the host's type-check command if available.

**Completion criteria:** One reusable definition, both renderings agree, no external mutation during rendering, and a correct reflection. These manual checks support understanding; they are not a proof of purity. If no host exists, report execution pending. No complete solution is supplied.
