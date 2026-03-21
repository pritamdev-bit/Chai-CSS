const chaicss = {
  // Padding
  "chai-p-1": { padding: "4px" },
  "chai-p-2": { padding: "8px" },
  "chai-p-3": { padding: "12px" },
  "chai-p-4": { padding: "16px" },
  "chai-pt-2": { paddingTop: "8px" },
  "chai-pb-2": { paddingBottom: "8px" },
  "chai-pl-2": { paddingLeft: "8px" },
  "chai-pr-2": { paddingRight: "8px" },

  // Margin
  "chai-m-1": { margin: "4px" },
  "chai-m-2": { margin: "8px" },
  "chai-m-3": { margin: "12px" },
  "chai-m-4": { margin: "16px" },
  "chai-mt-2": { marginTop: "8px" },
  "chai-mb-2": { marginBottom: "8px" },
  "chai-ml-2": { marginLeft: "8px" },
  "chai-mr-2": { marginRight: "8px" },

  // BACKGROUND COLORS
  "chai-bg-red": { backgroundColor: "red" },
  "chai-bg-blue": { backgroundColor: "blue" },
  "chai-bg-green": { backgroundColor: "green" },
  "chai-bg-black": { backgroundColor: "black" },
  "chai-bg-white": { backgroundColor: "white" },
  "chai-bg-gray": { backgroundColor: "#6b7280" },
  "chai-bg-orange": { backgroundColor: "orange" },

  // TEXT COLORS
  "chai-text-red": { color: "red" },
  "chai-text-blue": { color: "blue" },
  "chai-text-green": { color: "green" },
  "chai-text-black": { color: "black" },
  "chai-text-white": { color: "white" },
  "chai-text-gray": { color: "#6b7280" },
  "chai-text-orange": { color: "orange" },

  // Font Size
  "chai-text-xs": { fontSize: "12px" },
  "chai-text-sm": { fontSize: "14px" },
  "chai-text-md": { fontSize: "16px" },
  "chai-text-lg": { fontSize: "20px" },
  "chai-text-xl": { fontSize: "24px" },
  "chai-text-2xl": { fontSize: "32px" },

  // Alignment
  "chai-text-left": { textAlign: "left" },
  "chai-text-center": { textAlign: "center" },
  "chai-text-right": { textAlign: "right" },

  // FONT WEIGHT
  "chai-font-light": { fontWeight: "300" },
  "chai-font-normal": { fontWeight: "400" },
  "chai-font-bold": { fontWeight: "700" },

  // BORDERS
  "chai-border": { border: "1px solid #000" },
  "chai-border-2": { border: "2px solid #000" },
  "chai-border-red": { border: "1px solid red" },
  "chai-border-blue": { border: "1px solid blue" },
  "chai-border-green": { border: "1px solid green" },
  "chai-border-black": { border: "1px solid black" },
  "chai-border-white": { border: "1px solid white" },
  "chai-border-gray": { border: "1px solid #6b7280" },
  "chai-border-orange": { border: "1px solid orange" },

  // BORDER RADIUS
  "chai-rounded-sm": { borderRadius: "4px" },
  "chai-rounded": { borderRadius: "8px" },
  "chai-rounded-lg": { borderRadius: "12px" },
  "chai-rounded-full": { borderRadius: "9999px" },

  // DISPLAY
  "chai-block": { display: "block" },
  "chai-inline": { display: "inline" },
  "chai-inline-block": { display: "inline-block" },
  "chai-hidden": { display: "none" },

  // FLEXBOX
  "chai-flex": { display: "flex" },
  "chai-flex-row": { flexDirection: "row" },
  "chai-flex-col": { flexDirection: "column" },
  "chai-items-center": { alignItems: "center" },
  "chai-justify-center": { justifyContent: "center" },
  "chai-justify-between": { justifyContent: "space-between" },

  // WIDTH & HEIGHT
  "chai-w-full": { width: "100%" },
  "chai-h-full": { height: "100%" },
  "chai-w-screen": { width: "100vw" },
  "chai-h-screen": { height: "100vh" },

  // POSITION
  "chai-relative": { position: "relative" },
  "chai-absolute": { position: "absolute" },
  "chai-fixed": { position: "fixed" },
  "chai-top-0": { top: "0" },
  "chai-left-0": { left: "0" },
  "chai-right-0": { right: "0" },
  "chai-bottom-0": { bottom: "0" }
};

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

// Initial run
process();

// Watch for future changes
const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    mutation.addedNodes.forEach(node => {
      if (node.nodeType === 1) {
        process(node);
      }
    });
  }
});

// Start observing
observer.observe(document.body, {
  childList: true,
  subtree: true
});