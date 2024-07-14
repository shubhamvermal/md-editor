// const renderMarkdown = (text) => {
//   const lines = text.split('\n');
//   return lines.map((line, index) => {
//       if (line === "") {
//           return <br />
//       }
//       if (line.startsWith('# ')) {
//           return <h1 key={index}>{line.substring(2)}</h1>;
//       }
//       if (line.startsWith('## ')) {
//           return <h2 key={index}>{line.substring(3)}</h2>;
//       }
//       if (line.startsWith('### ')) {
//           return <h3 key={index}>{line.substring(4)}</h3>;
//       }
//       if (line.startsWith('#### ')) {
//           return <h4 key={index}>{line.substring(5)}</h4>;
//       }
//       if (line.startsWith('##### ')) {
//           return <h5 key={index}>{line.substring(6)}</h5>;
//       }
//       if (line.startsWith('###### ')) {
//           return <h6 key={index}>{line.substring(7)}</h6>;
//       }
//       if (line.startsWith('- ')) {
//           return <ul key={index}><li>{line.substring(2)}</li></ul>;
//       }
//       if (line.startsWith('* ')) {
//           return <ul key={index}><li>{line.substring(2)}</li></ul>;
//       }
//       if (/\*\*(.+)\*\*/.test(line)) {
//           const parts = line.split('**');
//           return <p key={index}>{parts.map((part, i) => i % 2 === 0 ? part : <strong key={i}>{part}</strong>)}</p>;
//       }
//       if (/\*(.+)\*/.test(line)) {
//           const parts = line.split('*');
//           return <p key={index}>{parts.map((part, i) => i % 2 === 0 ? part : <em key={i}>{part}</em>)}</p>;
//       }
//       if (/\[(.+)\]\((.+)\)/.test(line)) {
//           const parts = line.match(/\[(.+)\]\((.+)\)/);
//           return <p key={index}><a href={parts[2]}>{parts[1]}</a></p>;
//       }
//       return <p key={index}>{line}</p>;
//   });
// };