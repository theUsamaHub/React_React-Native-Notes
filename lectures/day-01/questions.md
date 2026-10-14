# Day 01 — Knowledge check

Answer in your own words before opening the answers. These questions test explanations, not exact vocabulary.

1. A dashboard must keep several displayed totals consistent with changing data. What kind of work can React help organize, and what business decisions must the developer still make?
2. Why can a React web component and a React Native component have similar function bodies but use different tags?
3. A teammate says, “React Native runs my HTML in a phone browser.” How would you correct the description for an Android/iOS screen?
4. Our card changes after editing its source and saving. Does that prove we implemented state or an interactive feature? Explain.
5. Can you copy an entire React web screen into an Expo app unchanged? Identify one transferable idea and two parts you would inspect or adapt.

<details>
<summary>Suggested answers — open after attempting</summary>

1. React helps organize UI into components and coordinate UI output with application data. The developer still chooses the data model, computes correct totals, and decides what the UI should mean. React does not fix incorrect business logic.
2. Both use React functions to describe UI. React DOM targets browser elements; React Native targets native UI on Android/iOS. Their host building blocks differ.
3. React Native uses React to describe screens that its native renderer presents through platform UI. HTML and a browser DOM are not the normal native target. Expo web is a separate target and a WebView is a separate facility.
4. No. The development tools refreshed changed source code. Application state is data managed while the app runs; this example intentionally implements no state or event behavior.
5. The component-based, declarative approach transfers. Web tags/styles and browser APIs need inspection or replacement; native navigation, safe areas, and touch behavior may require further adaptation. Shared concepts do not guarantee identical source files.

</details>
