# Day 09 — Knowledge check

1. How can two uses of one card definition display different titles?
2. Why does minutes="15" differ from minutes={15}?
3. Why does React pass one props object rather than the two positional arguments in `function Card(title, minutes)`?
4. Does readonly mean a parent can never supply a new value? Does it freeze objects at runtime?
5. If a component requires a numeric duration, can that type alone reject -10 minutes or validate a server response?

<details>
<summary>Suggested answers — attempt first</summary>

1. Each usage supplies its own props; the shared definition reads the values for that usage.
2. Quotes supply a string; braces evaluate the numeric expression. The contract expects a number.
3. JSX inputs are supplied as fields of one props object. The child reads or destructures that object; separate declared positional arguments are not the prop contract.
4. No to both. Readonly prevents assignment through that TypeScript type; later renders can receive new inputs. It is not a runtime freeze.
5. No. -10 is still a number, and external data needs runtime validation. Types alone do not enforce business rules or inspect network values at runtime.

</details>
