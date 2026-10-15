# Learning roadmap

One primary topic per study day. Each day's document teaches web first, then native, then comparison and two small exercises. Days are study units, not calendar deadlines. Read in order: later days assume earlier concepts. This is an outline only; Days 01 and 02 have been generated.

## Phase 1 — Fundamentals

| Day | Primary topic | Scope / practical direction |
|---|---|---|
| 01 | Introduction to React.js and React Native | Purpose, conceptual architecture, shared UI description; static learning card |
| 02 | Declarative UI vs imperative JavaScript | Why describing a result changes how we build UI |
| 03 | JSX and TSX | Expressions, markup rules, TypeScript's role |
| 04 | Functional components | Component functions, naming, pure UI descriptions |
| 05 | Platform UI building blocks | Semantic HTML vs native View/Text and platform roles |
| 06 | Modules and imports/exports | File boundaries and organizing a small screen |
| 07 | Component composition | Build a screen from small components |
| 08 | Rendering and reconciliation | React element trees, “virtual DOM,” render vs commit, web/native render targets |

## Phase 2 — Components and Data

| Day | Primary topic | Scope / practical direction |
|---|---|---|
| 09 | Props | Typed inputs and one-way data flow |
| 10 | Children | Typed content slots and composition |
| 11 | Conditional rendering | UI alternatives and empty states |
| 12 | Lists and keys | Stable identity and data-to-UI mapping |
| 13 | Event handling | Web events vs mobile interaction callbacks |
| 14 | State with useState | Component memory, setters, introductory Rules of Hooks before first use |
| 15 | State updates | Previous-state updates and immutable objects/arrays |
| 16 | Component re-rendering | State snapshots, event timing, parent/child updates |
| 17 | Controlled inputs | State as input source of truth; input vs TextInput |
| 18 | Lifting state | Coordinate a small task list without duplicate state |

## Phase 3 — Styling and User Interfaces

| Day | Primary topic | Scope / practical direction |
|---|---|---|
| 19 | Platform styling | CSS on web vs StyleSheet objects on native |
| 20 | Flexbox | Shared layout vocabulary and different defaults |
| 21 | Responsive layouts | Web breakpoints vs native dimensions and safe areas |
| 22 | Images and assets | Imports, sizing, accessible descriptions |
| 23 | Scrolling | Web overflow vs ScrollView |
| 24 | Virtualized lists | FlatList and web list alternatives; stable keys |
| 25 | Pressable interactions | Button semantics and mobile press feedback |
| 26 | Text input behavior | TextInput, keyboard, focus, mobile ergonomics |
| 27 | Forms and validation | Small typed form with useful error messages |
| 28 | Reusable UI components | Consolidate the task tracker UI with clear boundaries |

## Phase 4 — React Hooks

| Day | Primary topic | Scope / practical direction |
|---|---|---|
| 29 | Rules of Hooks | Call order, component/custom-hook scope; revisit early rules |
| 30 | useEffect | Synchronizing with external systems |
| 31 | Effect lifecycle | Dependencies, cleanup, stale closures |
| 32 | Avoiding unnecessary effects | Derived values and event-driven work |
| 33 | useRef | Persistent mutable values and platform-specific UI references |
| 34 | useContext | Context API, shared values, provider scope |
| 35 | useReducer | Explicit transitions for related state |
| 36 | Custom hooks | Reuse behavior without sharing instance state |
| 37 | useMemo | Measure before caching a calculation |
| 38 | useCallback | Function identity and appropriate consumers |
| 39 | Choosing hooks | Compare choices and diagnose common hook mistakes |

## Phase 5 — Routing and Navigation

| Day | Primary topic | Scope / practical direction |
|---|---|---|
| 40 | Client-side routing | URLs, history, screens, deep-link concepts |
| 41 | Route configuration | React Router web setup vs Expo Router file-based setup |
| 42 | Dynamic routes | Typed route parameters and detail screens |
| 43 | Nested routes and layouts | Shared web layouts and Expo layouts |
| 44 | Navigation stacks | Browser history vs native stack/back behavior |
| 45 | Tab navigation | Web navigation vs Expo tabs |
| 46 | Query parameters | Search/filter state and passing serializable identifiers |
| 47 | Navigation access gates | Protected routes with simulated sessions; UI gating is not server authorization |

## Phase 6 — API Integration and State Management

| Day | Primary topic | Scope / practical direction |
|---|---|---|
| 48 | HTTP and REST | Resources, status codes, JSON, method semantics |
| 49 | Async JavaScript for requests | Promises, async/await, try/catch before network effects |
| 50 | Fetch GET requests | Read data with loading, empty, and error states |
| 51 | Request lifecycle | Cancellation, races, retries and unmounting |
| 52 | API mutations | POST, PUT, PATCH, DELETE and their distinct purposes |
| 53 | API service architecture | Typed boundaries and runtime response validation |
| 54 | Environment variables | Public client configuration vs server secrets |
| 55 | Node.js/Express integration | Local backend, device networking, CORS on web |
| 56 | Axios | Compare the client with Fetch; install only for this lesson |
| 57 | State ownership | Local state, Context API, client vs server state |
| 58 | Zustand | Small shared client store |
| 59 | TanStack Query | Declarative server-state reads |
| 60 | Data caching | Query keys, freshness and invalidation |
| 61 | Query mutations | Mutation feedback and cache updates |
| 62 | Pagination | Page/cursor requests and native list integration |
| 63 | Authentication and authorization | Identity, permissions, server-enforced checks |
| 64 | Secure session storage | Browser cookie tradeoffs vs Expo secure token storage |
| 65 | Refresh tokens | Expiration, rotation, failed refresh and logout |
| 66 | Authentication-aware navigation | Real session lifecycle with route gates |

## Phase 7 — Production Development

| Day | Primary topic | Scope / practical direction |
|---|---|---|
| 67 | Error boundaries | Render failures vs async/event errors; explain supported boundary options |
| 68 | Web debugging | React DevTools and reproducible issue diagnosis |
| 69 | Native debugging | Expo/native tools and device-specific issues |
| 70 | Testing fundamentals | Behavior, test scope and confidence |
| 71 | Component testing | User-facing behavior on web/native |
| 72 | API mocking | Deterministic success, loading, error and retry scenarios |
| 73 | TypeScript best practices | Narrowing, unions, safe boundaries and avoiding unsafe assertions |
| 74 | Accessibility | Semantic web UI, native labels, focus and screen readers |
| 75 | Security fundamentals | Untrusted data, secrets, dependency and session risks |
| 76 | Performance profiling | Measure web/native bottlenecks before optimizing |
| 77 | Performance optimization | Apply measured fixes; list/render/asset costs |
| 78 | Project architecture | Feature boundaries and small maintainable modules |
| 79 | Environment configuration | Development, preview, production and build-time configuration |
| 80 | Build processes | Bundling, web output, native binaries and development builds |
| 81 | Android builds | Expo EAS profiles, signing and internal distribution |
| 82 | iOS builds | Expo EAS, Apple signing, device/TestFlight prerequisites |
| 83 | Web deployment | Host configuration, routes and release verification |
| 84 | Mobile release workflow | Store submissions, compatible updates, rollout and recovery |

Dependencies and tool commands will be checked against the actual installed versions when each relevant day begins. Production exercises remain small extensions of the learning project, not a request to build an entire product at once.
