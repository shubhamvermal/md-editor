

# @sam/md-editor Documentation
Write Better, Faster, and Smarter with Our Markdown Editor!

Welcome to the official documentation for `@sam/md-editor`! Get ready to experience Markdown editing like never before. Our editor is here to make your life easier, more fun, and a bit spicy!

## Installation

**Step 1:** Open your terminal. You know the drill. 🖥️

**Step 2:** Run the following command to install `@sam/md-editor`:

```bash
npm install @sam/md-editor
```
That's it! You're all set to start using the most epic Markdown editor in the galaxy. 🌌

## Usage
So, you've installed `@sam/md-editor`. Now what? Let's dive into the awesomeness.

## Import the Editor
First, you need to import the editor into your React project:

```jsx
import React from 'react';
import {Editor} from '@sam/md-editor';
import './App.css';

const App = () => {
    return (
        <Editor >
            <Editor.Previewer />
            <Editor.Editor />
        </Editor>
    );
};

export default App;
```

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
Wrap your text with ** to make it bold. Because who doesn't like a little emphasis? 💪

```markDown
   **This is bold text**
```

## 3. Italic
Wrap your text with * to italicize it. Get those fancy words slanted! 🎨

```markdown
*This is italic text*
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

* Item 1
* Item 2
* Item 3
```
### Ordered List:

```markdown
1. Step 1
2. Step 2
3. Step 3
```

## 9. Tables
Tables are a bit tricky, but we've got you covered. Use  to create columns.

```markdown
 
 Header 1 | Header 2 
 Cell 1   | Cell 2   
 Cell 3   | Cell 4 
```
## 10. Keyboard Shortcuts
Speed up your workflow with these nifty shortcuts:

```Short cut
Bold: <kbd>Ctrl + B </kbd>
Italic: <kbd>Ctrl + I</kbd>
```
Just select your text and hit the shortcuts. Magic! 🎩✨
---