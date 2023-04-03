### Base project setup
```
npx create-next-app app
```
- [x] Typescript
- [x] ESLint
- [x] use src/ directory
```
cd app
```
### Installing Tailwind CSS
```
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```
```
npx tailindcsss init -p
```
```
module.exports = {
  content: [
    './src/components/**/*.{js,jsx,ts,tsx}', 
    './src/pages/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```
```
/* styles/tailwind.css */
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
```
```
/* pages/_app.js */
import '../styles/tailwind.css'
```
### Configuring PostCSS
```
/* postcss.config.js */
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```
