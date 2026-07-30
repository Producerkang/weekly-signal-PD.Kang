(()=>{
 const originalWrite=Document.prototype.write;
 Document.prototype.write=function(...parts){
  const patched=parts.map(html=>{
   if(typeof html!=='string')return html;
   let next=html;
   if(next.includes('</head>')&&!next.includes('reader-v4-fixes-v9.css')){
    next=next.replace('</head>','<link rel="stylesheet" href="./reader-v4-fixes-v9.css?v=18"><link rel="stylesheet" href="./reader-v14-content.css?v=18"></head>');
   }
   if(next.includes('</body>')&&!next.includes('reader-v4-archive-v12.js')){
    next=next.replace('</body>','<script src="./reader-v4-archive-v12.js?v=18"></script><script src="./reader-v14-content.js?v=18"></script><script src="./reader-v14-method.js?v=18"></script><script src="./reader-v18-life.js?v=18"></script></body>');
   }
   return next;
  });
  return originalWrite.apply(this,patched);
 };
})();