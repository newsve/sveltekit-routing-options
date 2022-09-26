A repo showing various new REST routing options

Names from me for the sake of having short names in the table, if you know better ones, let me know:

- **"Basic"**: fetch in `+page.svelte`, endpoint code/db calls in `+server.ts`
- **"Comfy"**: no fetch, endpoint code/db calls in `+page.server.ts`
- **"Flexy"**: fetch in `+page.ts`, endpoint code/db calls in `+server.ts`

|                                                                | Basic | Comfy | Flexy |
| -------------------------------------------------------------- | ----- | ----- | ----- |
| SSR                                                            |       | ✅    | ✅    |
| Types are preserved between FE and BE w/o manual redeclaration |       | ✅    |       |
| Endpoint can also be used alone as pure JSON one (DRY)         | ✅    |       | ✅    |
| Minimal/not boileeplate-y                                      |       | ✅    |       |
| One serialization run only\*                                   | ✅    | 🟨    |       |
