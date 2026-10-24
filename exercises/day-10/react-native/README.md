# Day 10 — Children and content slots (react-native)

**Objective:** Apply this day's concept on a native screen. Budget: 10–20 minutes.

## Requirements

Import ReactNode with import type. Define RevisionPanelProps with readonly title: string and readonly children: ReactNode. RevisionPanel renders its heading and props.children in a generic content container. The exported PracticePanels uses it twice with different titles: one usage contains a short paragraph/Text, the other contains a file-scope RevisionTip component. On native, RevisionTip returns Text and all visible strings must be inside Text. Do not type children as any, hard-code the caller content in the wrapper, or use cloning/Children utilities.

## Files to create or modify

Modify `PracticePanels.tsx` in this directory and create `reflection.md` beside it. The starter returns null and intentionally displays nothing. Copy the completed source to a separate configured learning host and follow the [host instructions](../../../examples/react-native/README.md), substituting `PracticePanels` for the filename, import and JSX usage. Preserve the host bootstrap and, on native, its existing safe-area/navigation setup. Keep reusable files outside Expo Router route directories. Keep completed source here for review.

## Expected behavior and testing

Expect two headings and two different supplied content blocks. Change only the second caller’s content and save/reload; the first stays the same. Add a second paragraph/Text to one usage and verify both appear in order. Run the host’s type checker if available. Reason why children={null} can satisfy ReactNode yet show no content; do not claim the type guarantees a non-empty panel.

Check console/error overlays and the host's existing type-check command where available. Restore any deliberately invalid experiments before submission. Source save/reload is development refresh, not implemented runtime interactivity. Native checks require Android/iOS; Expo web alone does not verify them.

## Reflection

Identify what the wrapper owns and what the caller owns. Explain why a custom wrapper must render props.children, why ReactNode allows more than one JSX element, and why ReactNode does not enforce native text placement.

## Completion criteria

One typed wrapper reused with different nested content, explicit children placement, suitable platform containers, no any/advanced child manipulation, and a reflection explaining both flexibility and limits.

No libraries or full exercise solutions are supplied. Record unavailable runtime/type checks as pending. Request review when ready; creation of these files does not mark the day completed.
