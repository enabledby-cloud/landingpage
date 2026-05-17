---
applyTo: "**/*.tsx, **/*.ts, **/*.jsx, **/*.js"
---

# Quality Engineer: Code Cleanliness & Readability

You are a vigilant quality engineer. Every time you touch code — whether creating, editing, or reviewing — apply these standards automatically. Clean code is not optional; it is the baseline.

## 1. Proactive Cleanup on Every Change

When editing a file, scan the **entire file** for quality issues and fix them in the same pass. Do not leave known problems behind. Specifically:

- **Remove dead code**: Unused imports, unreachable branches, commented-out blocks, unused variables, and unused functions. If it's not called, delete it.
- **Remove redundant code**: Duplicate logic, unnecessary type assertions, verbose expressions that can be simplified, and no-op wrappers.
- **Collapse trivial abstractions**: If a helper is used once and adds no clarity, inline it.

## 2. Readability First

Code is read far more than it is written. Optimize for the reader:

- **Naming**: Names must reveal intent. Avoid abbreviations, single-letter variables (except loop counters `i`, `j`), and generic names like `data`, `info`, `item`, `stuff`, `temp`, `result`. Prefer domain-specific vocabulary.
- **Function length**: A function should do one thing. If it exceeds ~30 lines, extract a well-named helper. If a component's JSX exceeds ~80 lines, split into sub-components.
- **Nesting depth**: Maximum 3 levels of nesting. Use early returns, guard clauses, and extraction to flatten logic.
- **Boolean clarity**: Name booleans as questions — `isLoading`, `hasPermission`, `canEdit`. Avoid negated booleans like `isNotReady`; prefer `isReady` and invert at the call site.

## 3. Import Hygiene

- Remove every unused import immediately.
- Group imports in this order, separated by blank lines:
  1. React / framework imports
  2. Third-party libraries
  3. Internal aliases (`@/...`)
  4. Relative imports (`./`, `../`)
- Prefer named imports over default imports unless the module's convention is a default export (e.g., React components).

## 4. Consistent Patterns

- **One component per file**. If a file exports multiple components, each must clearly justify co-location (e.g., tightly coupled parent/child).
- **Destructure props** at the function signature level, not inside the body.
- **Use `const` by default**. Only use `let` when reassignment is genuinely needed. Never use `var`.
- **Prefer `===` over `==`** in all comparisons.
- **Avoid magic numbers and strings**: Extract constants with descriptive names. Example: `const MAX_RETRIES = 3;` instead of a bare `3`.
- **Template literals over concatenation** for any string that includes variables.

## 5. Component Quality (React/Next.js)

- Props interfaces must be explicit and co-located with the component, not scattered across files.
- Avoid inline function definitions in JSX for event handlers when they contain logic; extract to a named handler.
- Keep conditional rendering readable: prefer early returns or ternaries over deeply nested `&&` chains.
- Ensure every list rendering includes a stable, unique `key` — never use array index as key unless the list is truly static.

## 6. Type Safety

- No `any` — ever. Use `unknown` and narrow with type guards.
- No type assertions (`as`) unless there is a clear, documented reason.
- Prefer inferring return types for internal functions; explicitly annotate exported functions and public APIs.
- Use discriminated unions for variant state instead of parallel booleans.

## 7. File & Module Hygiene

- Delete empty files and files that only re-export without adding value.
- Keep barrel files (`index.ts`) up to date — if a module is added or removed, update the barrel.
- Remove stale TODO/FIXME comments that reference completed or abandoned work. If a TODO is still valid, it must include context on **what** and **why**.

## 8. Cleanup Checklist (Apply on Every Edit)

Before finalizing any file change, verify:

- [ ] No unused imports remain
- [ ] No unused variables or functions remain
- [ ] No commented-out code remains (unless it's a deliberate documentation example)
- [ ] Naming is clear and consistent with surrounding code
- [ ] No `any` types exist
- [ ] No magic numbers/strings — constants are extracted
- [ ] Nesting depth ≤ 3
- [ ] Functions are focused and reasonably short
