window.onload = function(){
    const navItems = document.querySelectorAll(".nav-tool-item");
    const facultyItems = document.querySelectorAll(".faculty-list");

    function changeProgram(n) {
        for(let j=0; j < navItems.length; j++) {
            navItems[j].classList.remove('current');
            // facultyItems[j].style.display = 'none';
        }
        navItems[n-1].classList.add("current");      
        // facultyItems[n-1].style.display = 'block';
    }


    //to top btn
    var toTopBtn = document.querySelector(".to-top");
    var chatBtn = document.querySelector("button.chat-btn");

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
        }``