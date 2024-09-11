# React X SHADCN
1. Create a new Vite project with React template:
```
npm create vite@latest my-shadcn-app -- --template react
cd my-shadcn-app
npm install
```

2. Install necessary dependencies:
```
npm install -D tailwindcss postcss autoprefixer @types/node
npm install clsx tailwind-merge
```

3. Initialize Tailwind CSS:
```
npx tailwindcss init -p
```

4. Update `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```

5. Add Tailwind directives to `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

6. Create or update `vite.config.js`:

```javascript
import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})

```

7. Create or update `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,

    /* Path alias */
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}

```

8. Install shadcn/ui:
```
npm install -D @shadcn/ui
```

9. Initialize shadcn/ui:
```
npx shadcn-ui@latest init
```

10. Create `src/lib/utils.ts` (or .js if not using TypeScript):

```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

```

11. Add components (e.g., button):
```
npx shadcn-ui@latest add button
```

12. Update `src/App.tsx` (or App.jsx if not using TypeScript):

```typescript
import React from 'react'
import { Button } from "@/components/ui/button"

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        Hello Vite + React + shadcn/ui!
      </h1>
      <Button variant="outline">Click me!</Button>
    </div>
  )
}

export default App

```

13. Start the development server:
```
npm run dev
```

These steps should set up a Vite React project with shadcn/ui successfully. Remember to adjust file extensions (.ts to .js, .tsx to .jsx) if you're not using TypeScript.