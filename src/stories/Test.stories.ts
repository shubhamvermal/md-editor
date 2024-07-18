import Test from "./Test";
import { Meta } from "@storybook/react";

const meta: Meta<typeof Test> = {
  component: Test,
  title: "Editor",
};
export default meta;

export const Default = {
  args: {
    // value: "```jsx\nimport React from 'react';\nimport {Editor} from '@sam/md-editor';\nimport './App.css';\n\nconst App = () => {\n    return (\n        <Editor >\n            <Editor.Previewer />\n            <Editor.Editor />\n        </Editor>\n    );\n};\n```"
    value:
      "\n# @sam/md-editor Documentation\nWrite Better, Faster, and Smarter with Our Markdown Editor!\n\nWelcome to the official documentation for `@sam/md-editor`! Get ready to experience Markdown editing like never before. Our editor is here to make your life easier, more fun, and a bit spicy!\n\n## Installation\n\n**Step 1:** Open your terminal. You know the drill. 🖥️\n\n**Step 2:** Run the following command to install `@sam/md-editor`:\n\n```bash\nnpm install @sam/md-editor\n```\nThat's it! You're all set to start using the most epic Markdown editor in the galaxy. 🌌\n\n## Usage\nSo, you've installed `@sam/md-editor`. Now what? Let's dive into the awesomeness.\n\n## Import the Editor\nFirst, you need to import the editor into your React project:\n\n```jsx\nimport React from 'react';\nimport {Editor} from '@sam/md-editor';\nimport './App.css';\n\nconst App = () => {\n    return (\n        <Editor >\n            <Editor.Previewer />\n            <Editor.Editor />\n        </Editor>\n    );\n};\n\nexport default App;\n```\n\n## Basic Markdown Syntax\nHere's a rundown of the Markdown syntax you can use with our editor, complete with examples:\n\n## 1. Headers\nUse `#` for headers. The more `#`, the smaller the header.\n\n```markDown\n# Header 1\n## Header 2\n### Header 3\n#### Header 4\n##### Header 5\n###### Header 6\n```\n\n## 2. Bold\nWrap your text with ** to make it bold. Because who doesn't like a little emphasis? 💪\n\n```markDown\n   **This is bold text**\n```\n\n## 3. Italic\nWrap your text with * to italicize it. Get those fancy words slanted! 🎨\n\n```markdown\n*This is italic text*\n```\n## 4. Links\nCreate links with ease. Wrap the link text in [] and the URL in ().\n```markdown\n[Click me!](https://example.com)\n```\n\n## 5. Horizontal line\nCreate Horizontal so simple. Just add `---` in new line.\n```markdown\n---\n```\n\n## 6. Block Quote\nLets learn to add block quote. Wrapping text into backtick.\n```markdown\n`Text`\n```\n\n## 7. Images\nWant to show off your cat? No problem! Use the following syntax:\n```markdown\n![Cute Cat](https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=600)\n```\n## 8. Lists\nCreate lists with `*` or `-`. Perfect for jotting down your groceries or world domination plans. 📝\n\n### Unordered List:\n\n```markdown\n\n* Item 1\n* Item 2\n* Item 3\n```\n### Ordered List:\n\n```markdown\n1. Step 1\n2. Step 2\n3. Step 3\n```\n\n## 9. Tables\nTables are a bit tricky, but we've got you covered. Use  to create columns.\n\n```markdown\n \n Header 1 | Header 2 \n Cell 1   | Cell 2   \n Cell 3   | Cell 4 \n```\n## 10. Keyboard Shortcuts\nSpeed up your workflow with these nifty shortcuts:\n\n```Short cut\nBold: <kbd>Ctrl + B </kbd>\nItalic: <kbd>Ctrl + I</kbd>\n```\nJust select your text and hit the shortcuts. Magic! 🎩✨\n---",
  },
};