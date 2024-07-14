// const string ="# hello world\n## hello **world**\n\n-/hello/- world\n\n```\n bash command\n```\n\n`code`\n\n_itelic_\n-/strike-threw/-";
// // "# hello world
// // ## hello *world*

// // -/ hello
// // /- world

// // ```
// //  bash command
// // ```

// // `code`


// // _itelic_
// // -/strike-threw/-"
// const syntaxes = [
//   // for headings
//   "# ",
//   "## ",
//   "### ",
//   "#### ",
//   "##### ",
//   "###### ",
//   // for bold
//   " **",
//   // for itelic
//   " __",
//   // for comment
//   "<!--",
//   "-->",
//   // for code
//   "```",
//   // for strike threw
//   " -/",
//   "/- ",
// ];
// function checkIfSyntax(text){}

// function tokenGenerator(item) {
//     const items = item.split(" ").reduce((prev, curr)=>{
//       prev.push(curr+" ")
//       return prev
//   }, []);;
//     return items.flatMap(x => ({
//         type: syntaxes.includes(x) ? "syntax" : "value",
//         value: x
//     }))
// }

// // generate an list of token items by new line
// function stringToLIst(str) {
//   return str.split("\n").flatMap(x=>x.split(" "));
// }

// // steps
// // 1. Tokens
// // 2. Parsed AST
// function parsedAST(token){
    
// }
// // 3. Transformed AST
// // 4. Generated Code

// const itemList = stringToLIst(string);
// console.log("itemList==>", itemList);

// const tokens = itemList.flatMap(item => tokenGenerator(item))
// console.log("tokens====>", tokens)



// in typescript



// // # hello 1
// // ## hello 2
// // ### hello 3
// // #### hello 4
// // ##### hello 5
// // ###### hello 6


// const string =
//   "# hello world\n## hello *world*\n\n-/ hello\n/- world\n\n```\n bash command\n```\n\n`code`\n\n\n_itelic_\n-/strike-threw/-";

// const syntaxes = [
//   // for headings
//   "# ",
//   "## ",
//   "### ",
//   "#### ",
//   "##### ",
//   "###### ",
//   // for bold
//   "**",
//   // for itelic
//   "__",
//   // for comment
//   "<!--",
//   "-->",
//   // for code
//   "```",
//   // for strike threw
//   "-/",
//   "/-",
// ];

// function tokenGenerator(item) {
//     const items = item.split(" ");
//     return items.map((x) => ({
//         type: "syntax",
//         value: x
//     }))
// }

// // generate an list of token items by new line
// function stringToLIst(str) {
//   return str.split("\n").reduce((prev, curr)=>{
//       prev.push(curr, "\n")
//       return prev
//   }, []);
// }

// // steps
// // 1. Tokens
// // 2. Parsed AST
// // 3. Transformed AST
// // 4. Generated Code

// const itemList = stringToLIst(string);
// // console.log("itemList==>", itemList);

// const tokens = itemList.map(item => tokenGenerator(item))
// console.log("tokens====>", tokens)




// // bold: /\*\*[A-Za-z]+\*\*/i





