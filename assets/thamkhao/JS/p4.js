
 // modal
    var majorItems = document.querySelectorAll(".hb-hien");
    var modal = document.getElementById("modal");
    var closeModal = document.querySelector(".close-modal");

    for(let i of majorItems) {
        i.onclick = function() {
            modal.style = "display: flex;"
        }
    }

    closeModal.onclick = function() {
        modal.style = "display: none;"
    }
    
window.onload = function() {
    // to top btn
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

    // menu on mobile
    const menuBtn = document.querySelector(".menu-icon");
    const menu = document.querySelector(".header__menu");
    if(document.body.clientWidth < 739 || document.documentElement.clientWidth < 739) {
        menuBtn.onclick = function() {
        menu.classList.toggle("menu-show");
        }
    }
    // search autocomplete

    var searchInput = document.querySelector(".search__input");
    var searchBtn = document.querySelector(".search__icon");
    var suggestList = document.querySelector(".suggestions")
    var suggestItem = document.querySelectorAll(".suggest-item");
    const keywords = ["Khoa Công nghệ thông tin", "Khoa Ngoại ngữ", "Khoa Xây dựng", "Ngành Công nghệ thông tin", "Ngành Hệ thống thông tin", "Ngành Khoa học máy tính", ];
    searchInput.onkeyup = function(){
        var h="";
        let input = searchInput.value.toLowerCase();
        for(let k of keywords) {
        if(k.toLowerCase().indexOf(input)>=0) {
            h+=` <li class="suggest-item">${k}</li>`
        }
        if(h=="" || input =="") {
            suggestList.style = "display: none;"
        }
        else {
            suggestList.innerHTML = h;
            suggestList.style = "display: block;"
            $(".suggestions").on("click","li", function() {
            searchInput.value = this.innerText;
            suggestList.style = "display: none;"
            
            searchBtn.onclick = function() {
                // suggestList.style = "display: none;"
                searchInput.value = "";
            }
            })
            searchInput.onblur = function() {
            setTimeout(function() {
                suggestList.style = "display: none;"
            }, 300)
            }
        }
        }
    }
}