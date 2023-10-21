
// 헤더 버튼
  const menuItems = document.querySelectorAll('nav ul > li > a')

  menuItems.forEach(function(item,idx){
    item.onclick = function(e){ //a의 가상태그로 인해 맨위로 올라가는것을 막아줌
      e.preventDefault();
      document.querySelector(`#s${idx+1}`).scrollIntoView({
        behavior:'smooth'
      });
    }
  })


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


  // ABOUT1 팝업
  const about = document.querySelector('.about')
  const aboutPop = document.querySelector('.aboutPop')
  const aboutPopClose = document.querySelector('.aboutPop_close')
  const dark = document.querySelector('.dark')


  // ABOUT 팝업 - 띄우기
  about.addEventListener('click',()=>{
    aboutPop.style.display = 'block';
    dark.style.display = 'block';
  })
  console.log(about);

  // ABOUT 팝업 - 닫기
    aboutPopClose.addEventListener('click', ()=>{
      aboutPop.style.display = 'none';
      dark.style.display = 'none'; 
    })

    dark.addEventListener('click', ()=>{
      aboutPop.style.display = 'none';
      dark.style.display = 'none'; 
    })



  // ABOUT2 팝업
  const about2 = document.querySelector('.about2')
  const aboutPop2 = document.querySelector('.aboutPop2')
  const aboutPopClose2 = document.querySelector('.aboutPop_close2')

  // ABOUT2 팝업 - 띄우기
  about2.addEventListener('click',()=>{
    aboutPop2.style.display = 'block';
    dark.style.display = 'block';
  })
  console.log(about);

  // ABOUT2 팝업 - 닫기
    aboutPopClose2.addEventListener('click', ()=>{
      aboutPop2.style.display = 'none';
      dark.style.display = 'none'; 
    })

    dark.addEventListener('click', ()=>{
      aboutPop2.style.display = 'none';
      dark.style.display = 'none'; 
    })
    


  // ABOUT3 팝업
  const about3 = document.querySelector('.about3')
  const aboutPop3 = document.querySelector('.aboutPop3')
  const aboutPopClose3 = document.querySelector('.aboutPop_close3')

  // ABOUT3 팝업 - 띄우기
  about3.addEventListener('click',()=>{
    aboutPop3.style.display = 'block';
    dark.style.display = 'block';
  })
  console.log(about);

  // ABOUT3 팝업 - 닫기
    aboutPopClose3.addEventListener('click', ()=>{
      aboutPop3.style.display = 'none';
      dark.style.display = 'none'; 
    })

    dark.addEventListener('click', ()=>{
      aboutPop3.style.display = 'none';
      dark.style.display = 'none'; 
    })




