(()=>{
 const main=document.querySelector('main');
 const contents=document.getElementById('contents');
 const life=document.getElementById('life-scene');
 const opening=document.getElementById('opening');
 if(!main||!contents||!life||!opening)return;
 main.style.setProperty('display','block','important');
 [contents,life,opening].forEach(section=>{
  section.style.setProperty('display','block','important');
  section.style.setProperty('width','100%','important');
  section.style.setProperty('grid-column','auto','important');
  section.style.setProperty('grid-row','auto','important');
 });
 contents.insertAdjacentElement('afterend',life);
 life.insertAdjacentElement('afterend',opening);
 const nav=document.querySelector('.nav');
 if(nav){
  const contentsLink=nav.querySelector('a[href="#contents"]');
  const lifeLink=nav.querySelector('a[href="#life-scene"]');
  const openingLink=nav.querySelector('a[href="#opening"]');
  if(contentsLink&&lifeLink)contentsLink.insertAdjacentElement('afterend',lifeLink);
  if(lifeLink&&openingLink)lifeLink.insertAdjacentElement('afterend',openingLink);
 }
 document.documentElement.dataset.frontMatterLayout='single-column-v21';
})();