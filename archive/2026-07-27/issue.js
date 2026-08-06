(()=>{
      const progress=document.getElementById('progress');
      const navLinks=[...document.querySelectorAll('.nav a')];
      const sections=navLinks.map(link=>document.querySelector(link.getAttribute('href'))).filter(Boolean);
      const update=()=>{const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(max>0?scrollY/max*100:0)+'%';let active=null;for(const section of sections){if(section.getBoundingClientRect().top<=120)active=section.id}navLinks.forEach(link=>link.setAttribute('aria-current',link.getAttribute('href')==='#'+active?'true':'false'))};
      addEventListener('scroll',update,{passive:true});addEventListener('resize',update);update();
      document.querySelectorAll('img').forEach(img=>img.addEventListener('error',()=>{img.style.opacity='0';img.setAttribute('data-load-error','true')}));
    })();
