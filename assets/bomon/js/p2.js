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
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var phoneInput = document.getElementById('phone');
    var commentInput = document.getElementById('register-question');
    var submitBtn = document.querySelector("button.submit");
    var formMessage = document.querySelector(".form-message");
    var formMessageText = document.querySelector(".message-text");
    
    function checkName(nameInput) {
        return /^[^0-9]+$/.test(nameInput.value) && nameInput.value.trim().includes(' ');
    }
    
    function checkEmail(emailInput) {
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(emailInput.value);
    }
    
    function checkPhone(phoneInput) {
        return /^\+*[0-9]+$/.test(phoneInput.value);
    }
    
    function checkCom(commentInput) {
        return commentInput.value.trim() !== '';
    }
    
    submitBtn.onclick = function () {
        var isNameValid = checkName(nameInput);
        var isEmailValid = checkEmail(emailInput);
        var isPhoneValid = checkPhone(phoneInput);
        var isCommentValid = checkCom(commentInput);
    
        if (isNameValid && isEmailValid && isPhoneValid && isCommentValid) {
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
