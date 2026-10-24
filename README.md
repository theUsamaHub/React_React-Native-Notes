# React + React Native Learning

A practical, one-topic-per-day journey from React fundamentals to production web and Expo mobile development. Each lesson explains what a concept is, why it exists, when to use it, and how it works before comparing implementations and assigning practice.

## Start here

1. Read the [roadmap](ROADMAP.md).
2. Days 01–04 are learner-confirmed complete. Continue in sequence with [Day 05: Platform UI building blocks](lectures/day-05/lecture.md), [Day 06: Modules and imports/exports](lectures/day-06/lecture.md), then [Day 07: Component composition](lectures/day-07/lecture.md). This three-day batch was explicitly requested; each lesson retains its own topic and exercises.
3. Attempt the two exercises and knowledge check linked from each lecture.
4. Report completion or request an exercise review. [Progress](PROGRESS.md) is updated only when you confirm your work.

Allow about 25 minutes for reading and 20–40 minutes for practice. Longer reference sections can be revisited later.

## Latest requested lessons

Days 01–04 are confirmed complete. Days 05–07 remain available for study/revision; their completion has not been confirmed. Study these new lessons in order, following the roadmap prerequisites.

- [Day 08 — Rendering and reconciliation](lectures/day-08/lecture.md) — includes linked web/native exercises and questions.

- [Day 09 — Props](lectures/day-09/lecture.md) — includes linked web/native exercises and questions.

- [Day 10 — Children](lectures/day-10/lecture.md) — includes linked web/native exercises and questions.

## Repository layout

```text
lectures/day-01/          Completed introductory lesson
lectures/day-02/          Declarative UI lecture and questions
lectures/day-03/          JSX and TSX lecture and questions
lectures/day-04/          Functional components lecture and questions
lectures/day-05/          Platform UI building blocks
lectures/day-06/          Modules and imports/exports
lectures/day-07/          Component composition
examples/react-web/      Complete illustrative web components
examples/react-native/   Complete illustrative native components
exercises/day-01/         Original starter files and acceptance criteria
exercises/day-02/         Current unsolved exercises
exercises/day-03/         JSX and TSX practice
exercises/day-04/         Functional component practice
exercises/day-05/         Platform element practice
exercises/day-06/         Module practice
exercises/day-07/         Composition practice
ROADMAP.md               Full topic sequence; not future lectures
PROGRESS.md              Learner-confirmed progress
```

## Environment and running examples

The workspace was empty when inspected on 2026-10-14. No Expo application, package manifest, or installed React/Expo/TypeScript versions were available. This independent repository contains learning materials and TSX components, not newly scaffolded applications. No dependencies were installed. Runtime and type-check compatibility with your existing project is unverified until that project's package manifest and lockfile are available.

See the [web example instructions](examples/react-web/README.md) and [native example instructions](examples/react-native/README.md). Use separate learning hosts or copies of your applications outside their Git repositories; do not overwrite your existing Expo project. A `.tsx` file needs a configured React/TypeScript build environment; it cannot be opened directly as a web page or run directly with Node.

## Daily workflow

- **Start Day 2**: read roadmap and progress, then generate only that day's materials.
- **Revise Day 1**: review the existing lesson without advancing.
- **Check my exercise**: inspect the submitted implementation, explain issues, and suggest focused improvements.
- **I completed Day 1**: record the confirmed lecture and exercise results. Partial completion remains In Progress.

Use functional components, TypeScript, and Expo. Explain prerequisites before using them. Keep exercises small, preserve unsolved starters until attempted, and never create future lectures automatically. Later lessons extend a small learning dashboard/task tracker in manageable increments; a roadmap entry does not authorize implementing it.

## Git and GitHub

Default branch: `main`. Remote: [React_React-Native-Notes](https://github.com/theUsamaHub/React_React-Native-Notes). The initial Day 01 materials were pushed on 2026-10-14. Later local commits are not automatically evidence of a successful push.

Before pushing, inspect local changes, remotes, and remote history. Preserve any existing branch/history; never force-push. Use focused commit messages and keep generated artifacts and secrets out of Git.
