# Day 03 — JSX and TSX practice on web

**Objective:** Describe a session using literals, typed values, expressions and valid JSX. Budget: 10–15 minutes.

## Requirements and files

Modify `PracticeSession.tsx` in this directory. Define a string topic of your choice, `readingMinutes` of 12 and `practiceMinutes` of 18, with explicit `string`/`number` annotations. Return a section with `className="session-summary"`, a heading showing the topic, and three paragraphs showing reading time, practice time and their calculated total. Include a JSX comment. Use expressions for the numbers; do not hard-code the total into text. No styles, hooks or buttons are needed.

Create `reflection.md` beside the component. Explain literal text vs braces, an expression vs a declaration, and why the file uses `.tsx`. Also explain why `{topic}` inserted inside a paragraph would show the string `<b>Focus</b>` as text instead of turning it into bold markup.

## Run and test

Follow the [web host instructions](../../../examples/react-web/README.md), using `PracticeSession` as the filename, import and JSX name. Preserve the separate host's bootstrap; keep your finished source here. The starter returns `null`, which intentionally shows nothing.

| Inputs | Expected output |
|---|---|
| Reading 12, practice 18 | Reading 12, practice 18, total 30 |
| Reading 5, practice 10 | Reading 5, practice 10, total 15 |
| Change topic to another string | Heading displays that new string |

Save/reload between cases; check the browser console. Temporarily replace a numeric initializer with a quoted string while retaining `: number`; use the host's existing type checker/editor to inspect the error, then restore valid numeric code. A development preview may transpile TypeScript without type-checking, so preview success alone is insufficient. Run the host's type-check command if available.

**Completion criteria:** Valid nesting and closing tags; all outputs match; comment is invisible; reflection answers the questions. Restore the original numeric inputs. If no host is available, record runtime/type checks as pending. No complete exercise solution is provided.
