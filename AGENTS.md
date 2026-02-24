## Code Styles

- Don't repeat yourself. Avoid copy-and-paste. Constantly move code and extract to constants/functions.

### React
- Avoid using `useEffect` for pure state transformations.
  - BAD ❌: `useEffect(() => { const result = somePureComputation(someState); setTransformedState(result); }, [someState]);`
  - Good ✔️: `const transformedResult = somePureComputation(someState);`

### Localization
- All translation strings must be placed inside the `src/i18n` directory.
- Translation locales should be sorted in alphabetical order.
- When defining translations, wrap a locale-keyed object with the `makeResource` method from `@/i18n/utils`. If you supply an object to the generic type parameter of `makeResource`, it must be a `type`, not an `interface`. WARNING: Supplying an `interface` will result in a TypeScript error.
- Use `I18n.locales` from `@/i18n/utils` to get a list of all locales.
- DO NOT inline "yue". Use `I18n.defaultLocale` from `@/i18n/utils`.

### Imports
- `React` is implicitly imported as type. Directly use types like `React.FC` and etc. Only import individual named exports as values.
  - BAD ❌: `import type React from "react";`
  - BAD ❌: `import type { FC } from "react";`
  - BAD ❌: `import React from "react";`
  - Good ✔️: `import { useState } from "react";`
- Type-only imports MUST be prefixed by `type`.
  - BAD ❌: `import { Locale } from "@/i18n/utils";`
  - Good ✔️: `import type { Locale } from "@/i18n/utils";`

### Comments
- Add comments sparsely. Comments should be added solely for explaining code.
  - GOOD ✔️: `// Do not split at fullwidth spaces, which are useful in lyrics`
  - GOOD ✔️: `// Find the topmost visible heading based on intersection ratio and position`
  - GOOD ✔️: `// Setup observer slightly delayed to ensure elements are in the DOM`
  - GOOD ✔️: `// Handle edge case: ...`
- DO NOT add meta-commentary, i.e. comments about the action you have just performed.
  - BAD ❌: `// Added ...`
  - BAD ❌: `// Modified ...`
  - BAD ❌: `// Adjusted ...`
  - BAD ❌: `// Changed ...`
  - BAD ❌: `// Removed ...`
  - BAD ❌: `// Copied from ...`
  - BAD ❌: `// Replaced ... with ...`
  - BAD ❌: `// Use ... instead of ...`
  - BAD ❌: `// Define ...`
- DO NOT add comments hinting next steps. Recommendations should stay in the conversation.
  - BAD ❌: `{/* Adjust styles as needed */}`
  - BAD ❌: `{/* Add other props if necessary */}`
- DO NOT add file names to the top of a file.
  - BAD ❌: `// src/utils.ts`
  - BAD ❌: `// src/index.astro`
- Avoid self-explanatory comments. Only add comments if the code is not obvious.
  - BAD ❌: `import React from "react"; // Import React`
  - BAD ❌: `return I18n.locales.filter((locale) => locale !== I18n.defaultLocale) // Exclude default locale`
  - BAD ❌: `observer.disconnect(); // Disconnect observer on cleanup`
- Within a large block of JSX, add labels sparsely.
  - GOOD ✔️: `{/* Header */}`
  - GOOD ✔️: `{/* Main Container */}`
- If variable names can explain code, avoid commenting.
  - BAD ❌: `const translationEn = headingTranslations.en; // Get English translations for slug generation`
  - GOOD ✔️: `const translationForSlugGeneration = headingTranslations.en;`
- When removing code, eliminate entirely. DO NOT comment out code.
