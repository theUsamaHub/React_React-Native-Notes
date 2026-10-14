# React + React Native Learning

A practical, one-topic-per-day journey from React fundamentals to production web and Expo mobile development. Each lesson explains what a concept is, why it exists, when to use it, and how it works before comparing implementations and assigning practice.

## Start here

1. Read the [roadmap](ROADMAP.md).
2. Study [Day 01: Introduction to React.js and React Native](lectures/day-01/lecture.md).
3. Attempt the two exercises linked from the lecture, then answer the [knowledge check](lectures/day-01/questions.md).
4. Report completion or request an exercise review. [Progress](PROGRESS.md) is updated only when you confirm your work.

Allow about 25 minutes for reading and 20–40 minutes for practice. Longer reference sections can be revisited later.

## Repository layout

```text
lectures/day-01/          Lecture and conceptual questions
examples/react-web/      Complete illustrative web components
examples/react-native/   Complete illustrative native components
exercises/day-01/         Unsolved starter files and acceptance criteria
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

Default branch: `main`. Intended remote: `<GITHUB_REMOTE_URL>` (documentation placeholder only). The initial materials are committed locally. No remote is configured and nothing is pushed until you provide a real URL.

When supplied, inspect local changes, remotes, and remote history before configuring `origin` and pushing. Preserve any existing branch/history; never force-push. Use focused commit messages and keep generated artifacts and secrets out of Git.
