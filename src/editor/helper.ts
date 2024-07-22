export function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export const renderMarkdown = (text: string) => {
  // code editor
  // text = text.replace(/```(.*?)\n([\s\S]*?)```/gim, ' <div class="editor-container">$1<div class="editor" >$2</div></div>');
  // Replace code blocks with custom HTML structure
  text = text.replace(
    /```(.*?)\n([\s\S]*?)```/gim,
    function (match, lang, code) {
      return `<div class="editor-container">${lang}<div class="editor">${escapeHtml(code)}</div></div>`;
    }
  );

  // Replace headers
  text = text.replace(/^###### (.*$)/gim, "<h6>$1</h6>");
  text = text.replace(/^##### (.*$)/gim, "<h5>$1</h5>");
  text = text.replace(/^#### (.*$)/gim, "<h4>$1</h4>");
  text = text.replace(/^### (.*$)/gim, "<h3>$1</h3>");
  text = text.replace(/^## (.*$)/gim, "<h2>$1</h2>");
  text = text.replace(/^# (.*$)/gim, "<h1>$1</h1>");
  text = text.replace(/^---(.*$)/gim, "<hr/>");

  // Replace bold text
  text = text.replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>");

  // Replace italic text
  text = text.replace(/\*(.*?)\*/gim, "<em>$1</em>");

  // image
  text = text.replace(/!\[(.*?)\]\((.*?)\)/gim, '<img src="$2" alt="$1" />');
  // Replace links
  text = text.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2">$1</a>');

  // block quote
  text = text.replace(
    /`([^`]+)`/gim,
    '<span style="background: #f9d69a; borderRadius: 7px; padding: 0 5px; fontSize: 14px;" >$1</span>'
  );

  // Replace unordered list items
  text = text.replace(/^\* (.*$)/gim, "<ul><li>$1</li></ul>");
  text = text.replace(/^\- (.*$)/gim, "<ul><li>$1</li></ul>");

  // Replace line breaks with <br>
  text = text.replace(/\n$/gim, "<br>");

  text = text.replace(
    /((\r?\n){2}|^)(([^\r\n]*\|[^\r\n]*(\r?\n)?)+(?=(\r?\n){2}|$))/gm,
    (match) => {
      const [header, ...rows] = match.trim().split("\n");
      const headers = header
        .split("|")
        .map((h) => `<th>${h.trim()}</th>`)
        .join("");
      const bodyRows = rows
        .map((row) => {
          const cells = row
            .split("|")
            .map((cell) => `<td>${cell.trim()}</td>`)
            .join("");
          return `<tr>${cells}</tr>`;
        })
        .join("");
      return `<table><thead><tr>${headers}</tr></thead><tbody>${bodyRows}</tbody></table>`;
    }
  );

  return text;
};
