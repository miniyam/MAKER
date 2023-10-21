
  // 모바일 상태에서 메뉴 슬라이드
  const triggerBtn = document.querySelector('.trigger')
  const moNav = document.querySelector('nav')
  const closeBtn = document.querySelector('.close')

  triggerBtn.addEventListener('click', function(e){
    e.preventDefault();
    moNav.classList.add('active');
  })

  closeBtn.addEventListener('click', function(){
    moNav.classList.remove('active');
  })

