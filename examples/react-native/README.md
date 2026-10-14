# Run the Expo example

`Day01Card.tsx` is a complete screen-content component using only React Native core components. Use a separate Expo TypeScript learning host or a copy of your application outside the original repository. Preserve your existing application.

1. Inspect the host's `package.json` and files. Determine whether it uses Expo Router or a plain `App.tsx`; do not assume both exist.
2. Copy the example into a components directory **outside** any Router `app` or `src/app` directory. Route directories should contain routes, not arbitrary example files.
3. In an existing learning screen, import `Day01Card` using its actual relative path and render `<Day01Card />` inside the screen's existing safe-area/layout container. Keep the existing layout, providers and navigation intact. A plain learning `App.tsx` can render it in its existing container instead.
4. Run `npx expo start` from the host. Use a compatible Expo Go or the host's configured development build on a device/emulator. Follow the host's existing instructions when they differ.
5. Expect two text lines. Change the sentence, save, and confirm the device updates. Web preview alone does not verify native behavior.

The component deliberately adds no styling or safe-area dependencies. Its host should already keep content away from notches/status bars. If the text is obscured, inspect that host layout rather than adding arbitrary fixed padding. A physical iOS device can be used from Windows with an appropriate Expo client; a local iOS Simulator requires macOS.

No host or installed versions were present in the inspected workspace, so device execution and TypeScript checks have not been performed. Expo supports web targets too; that does not make its Android/iOS screens browser DOM pages.

References: [Expo development workflow](https://docs.expo.dev/get-started/start-developing/), [Expo Router source directories](https://docs.expo.dev/router/reference/src-directory/).
