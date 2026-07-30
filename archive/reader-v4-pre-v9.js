(()=>{
 const originalWrite=Document.prototype.write;
 Document.prototype.write=function(...parts){
  const patched=parts.map(html=>{
   if(typeof html!=='string')return html;
   let next=html;
   if(next.includes('</head>')&&!next.includes('reader-v4-fixes-v9.css')){
    next=next.replace('</head>','<link rel="stylesheet" href="./reader-v4-fixes-v9.css?v=24"><link rel="stylesheet" href="./reader-v14-content.css?v=24"><link rel="stylesheet" href="./reader-v19-life.css?v=24"></head>');
   }
   if(next.includes('</body>')&&!next.includes('reader-v4-archive-v12.js')){
    next=next.replace('</body>','<script src="./reader-v4-archive-v12.js?v=24"></script><script src="./reader-v14-content.js?v=24"></script><script src="./reader-v14-method.js?v=24"></script><script src="./reader-v18-life.js?v=24"></script><script src="./reader-v20-front-order.js?v=24"></script><script src="./reader-v21-life-photo.js?v=24"></script></body>');
   }
   return next;
  });
  return originalWrite.apply(this,patched);
 };
})();