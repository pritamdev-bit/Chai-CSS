# Chai CSS (CDN Runtime Utility Engine)

Chai CSS is a lightweight runtime utility-first styling system. It scans the DOM for predefined `chai-*` class names and applies inline styles dynamically using JavaScript.

No build step. No CSS file parsing. Direct DOM styling.

---

## How It Works

1. Define utility classes inside a JavaScript object (`chaicss`)
2. Scan DOM for class names starting with `chai-`
3. Apply corresponding inline styles using `Object.assign`
4. Observe DOM changes using `MutationObserver` and apply styles to new elements

---

## Installation (CDN)

```html
<script src="https://cdn.jsdelivr.net/gh/pritamdev-bit/Chai-CSS@1.0.0/main.js"></script>
```
## Usage

### Apply utility classes directly in HTML:
```html
<div class="chai-p-2 chai-bg-red chai-text-white">
  Hello World
</div>
```
Chai CSS will automatically detect and apply styles.

## Core Engine

### Utility Map
All styles are defined in a central object:

```js
const chaicss = {
  "chai-p-2": { padding: "8px" },
  "chai-bg-red": { backgroundColor: "red" }
};
Processing Function
const process = (root = document) => {
  const elements = root.querySelectorAll('[class^="chai-"], [class*=" chai-"]');

  elements.forEach(el => {
    el.classList.forEach(cls => {
      if (cls.startsWith("chai-") && chaicss[cls]) {
        Object.assign(el.style, chaicss[cls]);
      }
    });
  });
};
```
Scans for all elements containing chai-*
Iterates over class list
Applies matching styles inline

## Dynamic DOM Support
```js
const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    mutation.addedNodes.forEach(node => {
      if (node.nodeType === 1) {
        process(node);
      }
    });
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});
```
Watches for newly added elements
Automatically applies styles to dynamic content

