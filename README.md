# @svpkg/md-editor Documentation

Write Better, Faster, and Smarter with Our Markdown Editor!

Welcome to the official documentation for `@svpkg/md-editor`! Get ready to experience Markdown editing like never before. Our editor is here to make your life easier, more fun, and a bit spicy!

## Installation

**Step 1:** Open your terminal. You know the drill. 🖥️

**Step 2:** Run the following command to install `@svpkg/md-editor`:

```bash
npm install @svpkg/md-editor
```

That's it! You're all set to start using the most epic Markdown editor in the galaxy. 🌌

## Usage

So, you've installed `@svpkg/md-editor`. Now what? Let's dive into the awesomeness.

## Import the Editor

First, you need to import the editor into your React project:

```jsx
import React from "react";
import { MdEditor } from "@svpkg/md-editor";

const App = () => {
  return (
    <MdEditor>
      <MdEditor.Previewer />
      <MdEditor.Editor
        value={""}
        onChange={(str) => {
          // set str to state
        }}
      />
    </MdEditor>
  );
};

export default App;
```

## Import the Editor

First, you need to import the editor into your React project:

```jsx
import React from 'react';
import { MdPreviewer } from '@svpkg/md-editor';

const Previewer = () => {
    return (
        <MdPreviewer value={""} />
    );
};

export default Previewer;
```

## Prop Types

### Editor (MdEditor.Editor)

The `EditorType` defines the properties for the editor component.

- **style**: `Record<string, string | number>` (optional)

  - CSS styles to apply to the editor component.
  - Example: `{ backgroundColor: 'lightgray', fontSize: 14 }`

- **className**: `string` (optional)

  - CSS class name to apply to the editor component.
  - Example: `"my-editor"`

- **value**: `string` (optional)

  - The initial value of the editor content.
  - Example: `"## Hello, Markdown!"`

- **getMarkDown**: `(markDown: string) => void` (optional)

  - Callback function to get the current Markdown content from the editor.
  - Example:
    ```typescript
    const handleGetMarkdown = (markdown: string) => {
      console.log(markdown);
    };
    ```

- **onChange**: `(value: string) => void` (optional)
  - Callback function to handle changes in the editor content.
  - Example:
    ```typescript
    const handleChange = (value: string) => {
      console.log("Editor content changed:", value);
    };
    ```

### Previewer (MdPreviewer)

The `PreviewerTypes` defines the properties for the previewer component.

- **style**: `Record<string, string | number>` (optional)

  - CSS styles to apply to the previewer component.
  - Example: `{ padding: '10px', border: '1px solid #ddd' }`

- **html**: `string` (optional)

  - HTML content to display in the previewer. If provided, this will override the `value` prop.
  - Example: `"<h2>Hello, Markdown!</h2>"`

- **value**: `string` (optional)
  - The Markdown content to convert and display as HTML in the previewer.
  - Example: `"## Hello, Markdown!"`

## Basic Markdown Syntax

Here's a rundown of the Markdown syntax you can use with our editor, complete with examples:

## 1. Headers

Use `#` for headers. The more `#`, the smaller the header.

```markDown
# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6
```

## 2. Bold

Wrap your text with \*\* to make it bold. Because who doesn't like a little emphasis? 💪

```markDown
   **This is bold text**
```

## 3. Italic

Wrap your text with \* to italicize it. Get those fancy words slanted! 🎨

```markdown
_This is italic text_
```

## 4. Links

Create links with ease. Wrap the link text in [] and the URL in ().

```markdown
[Click me!](https://example.com)
```

## 5. Horizontal line

Create Horizontal so simple. Just add `---` in new line.

```markdown
---
```

## 6. Block Quote

Lets learn to add block quote. Wrapping text into (`).

```markdown
`Text`
```

## 7. Images

Want to show off your cat? No problem! Use the following syntax:

```markdown
![Cute Cat](https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=600)
```

## 8. Lists

Create lists with `*` or `-`. Perfect for jotting down your groceries or world domination plans. 📝

### Unordered List:

```markdown
- Item 1
- Item 2
- Item 3
```

### Ordered List:

```markdown
1. Step 1
2. Step 2
3. Step 3
```

## 9. Tables

Tables are a bit tricky, but we've got you covered. Use to create columns.

```markdown
Header 1 | Header 2
Cell 1 | Cell 2  
 Cell 3 | Cell 4
```

## 10. Keyboard Shortcuts

Speed up your workflow with these nifty shortcuts:

```Short cut
Bold: <kbd>Ctrl + B </kbd>
Italic: <kbd>Ctrl + I</kbd>
```

## Just select your text and hit the shortcuts. Magic! 🎩✨
