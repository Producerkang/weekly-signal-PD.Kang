(()=>{
 const originalWrite=Document.prototype.write;
 Document.prototype.write=function(...parts){
  const patched=parts.map(html=>{
   if(typeof html!=='string')return html;
   let next=html;
   if(next.includes('</head>')&&!next.includes('reader-v4-fixes-v9.css')){
    next=next.replace('</head>','<link rel="stylesheet" href="./reader-v4-fixes-v9.css?v=12"></head>');
   }
   if(next.includes('</body>')&&!next.includes('reader-v4-archive-v12.js')){
    next=next.replace('</body>','<script src="./reader-v4-archive-v12.js?v=12"></script></body>');
   }
   return next;
  });
  return originalWrite.apply(this,patched);
 };
})();
