# About this project
: To Do List; It's a react project practicing jest, ts and styled-components
Using LocalStorage, save your todos and show on the list and delete.


### Settings
- react: v.17.0.1
- typescript: v.4.0.3
- @testing-library/react: v.11.1 : DOM testing library 
- styled: v.5.2.1
- prettier: v.2.2.1 : Code formatter for js, css, json, etc..
- husky: v.4.3.7 : before git commit execute "lint-staged" 
- lint: v.10.5.3 : runs prettier commands(formatting js,jsx,ts,tsx,json,css,scss,md files)

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

## File Structure
```
  - src
    - App.tsx
    - App.test.tsx
    
    - Contexts
      - ToDoList
        - index.tsx
        - index.test.tsx
    - Pages
      - AddPage
        - index.tsx
        - index.test.tsx
      - DetailPage
        - index.tsx
        - index.test.tsx
      - ListPage
        - index.tsx
        - index.test.tsx
      - NotFound
        - index.tsx
        - index.test.tsx
      - index.tsx
    - Components
      - Button ...
      - Input ...
      - PageHeader ...
      - ToDoItem ...
      - ToDoList ...
      - index.tsx

```

## Started this project to know how jest works and how to test units. Also to get used to write test code.
Next action : Practicing TDD
