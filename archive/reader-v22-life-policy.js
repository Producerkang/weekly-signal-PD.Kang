(()=>{
 const context=document.querySelector('#life-scene .life-context');
 if(!context)return;
 const paragraphs=[...context.querySelectorAll('p')];
 const copy=[
  '위의 내용은 가상의 인물 김서연(23)을 통해 구성한 사례다. 인물과 가족, 병원, 통화 내용, 이동 시간 및 치료 결과는 모두 실제 사례가 아니다. 현재 지역 응급의료와 병원 간 전원 과정에서 환자와 보호자가 겪을 수 있는 공백을 압축해 재구성했다.',
  '정부가 발표한 5극3특 지역의료망은 이러한 공백을 줄이기 위해 진료권별 역할을 나누고, 중증·응급환자의 이송과 수용 연결체계를 강화하려는 구상이다. 다만, 병원과 인력을 권역별로 배치하는 것만으로는 충분하지 않다. 어느 기관이 수용 가능한 병원을 확인하고, 병원 간 정보를 전달하며, 전원 지연을 관리할지까지 정해져야 정책이 실제 치료로 이어질 수 있다. 정책의 성과는 병원 수나 권역 구분보다, 환자를 받을 병원이 얼마나 빨리 정해지고 그 과정의 책임이 얼마나 분명해졌는지에서 드러난다. 시행 뒤에도 수용 확정까지 걸리는 시간과 책임 구조가 달라지지 않는다면, 지역완결형 의료망은 지도 위의 구분에 머물 수밖에 없다.'
 ];
 copy.forEach((text,index)=>{if(paragraphs[index])paragraphs[index].textContent=text;});
 paragraphs.slice(copy.length).forEach(paragraph=>paragraph.remove());
 const footerKicker=document.querySelector('.footer .kicker');
 if(footerKicker)footerKicker.textContent='WEEKLY SIGNAL · ISSUE 01 · EDITORIAL MODEL V23';
 document.documentElement.dataset.contentEdition='issue-01-editorial-v23';
})();