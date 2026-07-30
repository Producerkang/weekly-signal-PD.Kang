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
 document.documentElement.dataset.frontMatterLayout='single-column-v20';
})();
