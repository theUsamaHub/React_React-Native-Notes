# Run the web example

`Day01Card.tsx` is a complete screen-content component, not a standalone application. Use a separate, already-configured React + TypeScript learning host with a modern JSX transform. No packages are required beyond that host's existing React setup.

1. In that learning host, copy this file to `src/Day01Card.tsx`.
2. In its existing `src/App.tsx`, import and render it:

   ```tsx
   import Day01Card from './Day01Card';

   export default function App() {
     return <Day01Card />;
   }
   ```

3. Keep the host's existing bootstrap, HTML, and configuration. Read its `package.json` scripts and run its documented development command (often `npm run dev`).
4. Open the printed local URL. Expect a heading and a sentence. Browser default styles may add margins and a larger heading.
5. Edit the sentence and save. Confirm the browser shows the new text. Development refresh is tooling behavior, not an example of application state.

If you have no web host, the source can be read now; executable verification awaits a configured host. Do not add guessed dependency versions or initialize another Git repository inside this repository. Supply the host manifest/lockfile before compatibility checks or setup work.
