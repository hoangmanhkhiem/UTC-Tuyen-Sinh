window.onload = function(){
    //to top btn
    var toTopBtn = document.querySelector(".to-top");

    function scrollFunction() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        toTopBtn.classList.add("show");
        }
        else {
        toTopBtn.classList.remove("show");
        }
    }

    function topFunction() {
        document.body.scrollTo(0, 0); // For Safari
        document.documentElement.scrollTo(0, 0); // For Chrome, Firefox, IE and Opera
    }

    toTopBtn.onclick = function() {
        topFunction();
    }

    window.onscroll = function() {
        scrollFunction();
    }
    // major list on mobile
    const facultyItem = document.querySelectorAll('.faculty-item');

    if(document.body.clientWidth < 739 || document.documentElement.clientWidth < 739) {
        for(let f of facultyItem) {
            f.classList.add('vertical')
        }
    }
    // modal
    var modal = document.getElementById("modal");
    var closeModal = document.querySelector(".close-modal");

    for(let i of facultyItem) {
        i.onclick = function() {
            modal.style = "display: flex;"
        }
    }

    closeModal.onclick = function() {
        modal.style = "display: none;"
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
    // validation form

    var formInput = document.querySelectorAll(".form-input");
    var formValue = [];
    var submitBtn = document.querySelector("button.submit");
    var formMessageList = document.querySelector(".form-message-list");
    var formMessage = document.querySelector(".form-message");
    var formMessageText = document.querySelector(".message-text");
    
    for (var i of formInput) {
      i.oninput = function () {
        formValue = Array.from(formInput).map(function (input) {
          return input.value;
        });
      }
    }
    
    function checkForm(values) {
      var count = 0;
      for (var i = 0; i < values.length; i++) {
        if (i === 0 && /^[A-Za-z]+\s[A-Za-z]+$/.test(values[i])) {
          count++;
        } else if (i === 1 && /^[0-9]{10}$/.test(values[i])) {
          count++;
        } else if (i === 2 && /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(values[i])) {
          count++;
        } else if (values[i] !== "") {
          count++;
        }
      }
      return count;
    }
    
    submitBtn.onclick = function () {
      var count = checkForm(formValue);
      if (count === formValue.length) {
        formMessage.classList.add("success", "message-show");
        formMessageText.innerHTML = `<h3>Thành công</h3> Bạn đã đăng kí nhận tư vấn thành công.`;
        setTimeout(function () {
          formMessage.classList.remove("success", "message-show");
        }, 3000);
      } else {
        formMessage.classList.add("fail", "message-show");
        formMessageText.innerHTML = `<h3>Thất bại! </h3> Bạn vui lòng điền đầy đủ thông tin và đúng định dạng.`;
        setTimeout(function () {
          formMessage.classList.remove("fail", "message-show");
        }, 3000);
      }
    }

        
}
// navigation

const navItems = document.querySelectorAll(".nav-tool-item");
const facultyItems = document.querySelectorAll(".faculty-list");

        function changeProgram(n) {
            for(let j=0; j < navItems.length; j++) {
                navItems[j].classList.remove('current');
                facultyItems[j].style.display = 'none';
            }
            navItems[n-1].classList.add("current");      
            facultyItems[n-1].style.display = 'block';
        }
