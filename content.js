chrome.storage.sync.get('fontEnabled', (data) => {
  if (data.fontEnabled === false) return;

  const style = document.createElement('style');
  style.textContent = `
    @font-face {
      font-family: "MyCustomFont";
      src: url("${chrome.runtime.getURL('fonts/自制苹方PROSC 常规.woff2')}") format("woff2");
      font-weight: normal;
      font-style: normal;
    }

    * {
      font-family: "MyCustomFont", sans-serif !important;
    }
  `;
  document.head.appendChild(style);
});
