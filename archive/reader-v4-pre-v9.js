(()=>{
 const originalWrite=Document.prototype.write;
 Document.prototype.write=function(...parts){
  const patched=parts.map(html=>{
   if(typeof html==='string'&&html.includes('</head>')&&!html.includes('reader-v4-fixes-v9.css')){
    return html.replace('</head>','<link rel="stylesheet" href="./reader-v4-fixes-v9.css?v=11"></head>');
   }
   return html;
  });
  return originalWrite.apply(this,patched);
 };
})();
