window.addEventListener("load", function () {
  // loading
  var loader = document.querySelector(".loading");
  setTimeout(function() {
    // document.documentElement.scrollTo(0, document.body.scrollHeight);
    setTimeout(function() {
      document.documentElement.scrollTo(0, 0);
    }, 500)
    setTimeout(function() {
      loader.style = "display: none;";
    }, 1000)
  }, 0);

  // slider
  const sliderMain = document.querySelector(".slider-main");
  const sliderItems = document.querySelectorAll(".slider-item");
  const prevBtn = document.querySelector(".slider-prev");
  const nextBtn = document.querySelector(".slider-next");
  const dot = document.querySelectorAll(".slider-dot");
  var slideIndex = 0;
  const slideItemWidth = sliderItems[0].offsetWidth;
  const slideLength = sliderItems.length;
  var posX = 0;
  
  nextBtn.addEventListener("click", function () {
    changeSlide(1);
  });
  
  prevBtn.addEventListener("click", function () {
    changeSlide(-1);
  });
  autoNextSlide();
  
  function changeSlide(direction) {
    if (direction === 1) {
      if (slideIndex === slideLength - 1) {
        posX = 0;
        slideIndex = 0;
        sliderMain.style = `transform: translateX(${posX}px)`;
        return;
      }
      slideIndex++;
      posX = posX - slideItemWidth;
      sliderMain.style = `transform: translateX(${posX}px)`;
    } else if (direction === -1) {
      if (slideIndex === 0) {
        slideIndex = slideLength - 1;
        posX = -slideItemWidth * (slideLength - 1);
        sliderMain.style = `transform: translateX(${posX}px)`;
        return;
      }
      slideIndex--;
      posX = posX + slideItemWidth;
      sliderMain.style = `transform: translateX(${posX}px)`;
    }
  }
  
  function autoNextSlide() {
    setInterval(function () {
      changeSlide(1);
    }, 5000);
  }
  
  // to top btn and chat btn
  var toTopBtn = document.querySelector(".to-top");
  var chatBtn = document.querySelector("button.chat-btn");

  function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      toTopBtn.classList.add("show");
      chatBtn.style = "bottom: 84px;"
    }
    else {
      toTopBtn.classList.remove("show");
      chatBtn.style = "bottom: 24px;"
    }
  }

  function topFunction() {
    document.body.scrollTo(0, 0); // For Safari
    document.documentElement.scrollTo(0, 0); // For Chrome, Firefox, IE and Opera
  }

  toTopBtn.onclick = function() {
    topFunction();
  }
  
  // header 
  var header = document.querySelector("header");
  var headerLogo = document.querySelector(".header__logo");
  function scrollFunction2() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      header.classList.add("fixed");
      headerLogo.style = "display: none;"
    }
    else {
      header.classList.remove("fixed");
      headerLogo.style = "display: block;"
    }
  }
  window.onscroll = function() {
    scrollFunction();
    scrollFunction2();
  }

  // validation form

  var formInput = document.querySelectorAll(".form-input"); 
  var formValue = [];
  var submitBtn = document.querySelector("button.submit");
  var formMessageList = document.querySelector(".form-message-list");
  var formMessage = document.querySelector(".form-message");
  var formMessageText = document.querySelector(".message-text");

  for(var i of formInput) {
    i.onchange = function() {
      for(var i=0; i<formInput.length; i++) {
        formValue[i] = formInput[i].value;
      }
    }
  }

  function checkForm(form) {
    var count= 0;
    for(var i=0; i<form.length; i++) {
      if(form[i] != "")
        count++;
    }
    return count;
  }
  submitBtn.onclick = function() {
    var count = checkForm(formValue);
    if(count>0 && count === formValue.length && count != undefined) {
      formMessage.classList.add("success","message-show")
      formMessageText.innerHTML = `<h3>Thành công</h3> Bạn đã đăng kí nhận tư vấn thành công.`;
      setTimeout(function() {
        formMessage.classList.remove("success", "message-show");
      }, 3000)
    }
    else {
      formMessage.classList.add("fail","message-show")
      formMessageText.innerHTML = `<h3>Thất bại! </h3> Bạn vui lòng điền đày đủ thông tin.`;
      setTimeout(function() {
        formMessage.classList.remove("fail", "message-show");
      }, 3000)
    }
  }

  // see more button 
  const notiList = document.querySelectorAll(".program__notifications");
  const notiItems = [];
  notiItems[0] = notiList[0].children;
  notiItems[1] = notiList[1].children;
  const seeMoreBtn = document.querySelectorAll("button.see-more");
  function getHeight(arr, n) {
    let h = 0;
    for(let i=0; i < n; i++) {
      if(i < arr.length) {
        h += arr[i].offsetHeight;
      }
    }
    return h;
  }

  let n = 3;
  for(let i=0; i< notiList.length; i++) {
    let notiListHeight = getHeight(notiItems[i], n);
    notiList[i].style = `height: ${notiListHeight}px; overflow: hidden;`;

    seeMoreBtn[i].onclick = function() {
      seeMoreBtn[i].innerHTML = "Xem thêm"
      n+=3;
      notiListHeight = getHeight(notiItems[i], n);
      notiList[i].style = `height: ${notiListHeight}px; overflow: hidden;`;
      if(n >= notiItems[i].length){
        seeMoreBtn[i].innerHTML = "Ẩn bớt"
        n=0;
      }
    }
  }
  // side section on mobile
  const sideInfor = document.querySelector(".side-infor");
  const swipeBtn = document.querySelector(".swipe-left-btn");
  const menuBtn = document.querySelector(".menu-icon");
  const menu = document.querySelector(".header__menu");
  if(document.body.clientWidth < 739 || document.documentElement.clientWidth < 739) {
    swipeBtn.onclick = function() {
      sideInfor.classList.toggle("fixed");

      swipeBtn.classList.toggle("swipe-left-btn");
      swipeBtn.classList.toggle("swipe-right-btn");
    }
    menuBtn.onclick = function() {
      menu.classList.toggle("menu-show");
    }
  }

  // wow
  wow = new WOW(
  {
    boxClass:     'wow',     
    animateClass: 'animate__animated', 
    offset:       0,          
    mobile:       true,       
    live:         true,      
  }
  )
  wow.init();
});


