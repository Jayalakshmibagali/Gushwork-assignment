# 🚀 assignment-projectname

## 📌 Description

This is a front-end assignment project built using:

* HTML
* Tailwind CSS v3
* JavaScript

The project uses Node.js and npm to build Tailwind CSS.

---

# 📁 Project Structure

```
assignment-projectname/
│
├── assets/              # Images and static files
└── src/
    ├── index.html       # Main HTML file
    ├── input.css        # Tailwind input file
    ├── output.css       # Generated CSS file
    └── script.js        # JavaScript functionality
```

---

# ⚙️ Requirements

Before running this project, install:

## 1️⃣ Node.js (Required)

Download from:
https://nodejs.org/

After installing, check:

```
node -v
npm -v
```

If versions appear, Node.js is installed correctly.

---

# 🎨 Tailwind CSS v3 Setup (First Time Only)

Follow these steps inside the project root folder (`assignment-projectname`).

---

## Step 1: Initialize npm

Open terminal inside `assignment-projectname` folder and run:

```
npm init -y
```

This creates `package.json`.

---

## Step 2: Install Tailwind CSS v3

```
npm install -D tailwindcss@3
```

This creates:

* node_modules/
* package-lock.json

---

## Step 3: Create Tailwind Config File (alredy i created and add some classes based on the assignment)

```
npx tailwindcss init
```

This creates:

```
tailwind.config.js
```

---

## Step 4: Configure Tailwind

Open `tailwind.config.js` and update:

```js
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

---

## Step 5: Add Tailwind Directives

Open:

```
src/input.css
```

Add:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

# 🚀 How To Run The Project

Every time you open the project, follow these steps:

---

## Step 1: Install Dependencies (If Needed)

If `node_modules` does not exist:

```
npm install
```

---

## Step 2: Build Tailwind CSS

Run:

```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

This will:

* Read from `input.css`
* Generate CSS into `output.css`
* Auto-update when changes are made

⚠️ Keep this command running while working.

---

## Step 3: Open Project

Open:

```
src/index.html
```

OR use VS Code Live Server.

---

# 🔗 Make Sure CSS Is Linked

Inside `src/index.html`:

```html
<link href="./output.css" rel="stylesheet">
```

---

# 🛠 Technologies Used

* HTML5
* Tailwind CSS v3
* JavaScript
* Node.js
* npm

---

# 📌 Important Notes

* Do NOT upload `node_modules` to GitHub.
* Create `.gitignore` file and add:

```
node_modules/
```

* Always run the Tailwind build command before opening the project.

---

# 👩‍💻 Author
Jayalakshmi
9482430794

---
