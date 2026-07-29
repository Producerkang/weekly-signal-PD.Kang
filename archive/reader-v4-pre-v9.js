(()=>{
 const originalWrite=document.write.bind(document);
 document.write=(html)=>{
  if(typeof html==='string'&&html.includes('</head>')&&!html.includes('reader-v4-fixes-v9.css')){
   html=html.replace('</head>','<link rel="stylesheet" href="./reader-v4-fixes-v9.css?v=9"></head>');
  }
  return originalWrite(html);
 };
})();
