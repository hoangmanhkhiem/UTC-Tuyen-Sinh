// bấm img logo reload
const header_img = document.querySelector('.header-img');
const header_img_icon = header_img.querySelector('img');
header_img_icon.addEventListener('click', function() {
    location.reload();
});
/* bars va menu-dow */
const bt_bars = document.querySelector('.header-bars');
const icon_bars = bt_bars.querySelector('i');
const header_list_down = document.querySelector('.header-list-down');

let menuIsOpen = false; // Biến kiểm tra trạng thái của menu

const click_bt_bars = () => {
    if (menuIsOpen) {
        closeMenu();
    } else {
        openMenu();
    }
};

function openMenu() {
    icon_bars.className = 'fa-solid fa-xmark fa-2xl';
    header_list_down.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    menuIsOpen = true;

    window.addEventListener('resize', handleResize);
}

function closeMenu() {
    icon_bars.className = 'fa-solid fa-bars fa-2xl';
    header_list_down.style.display = 'none';
    document.body.style.overflow = 'auto';
    menuIsOpen = false;

    window.removeEventListener('resize', handleResize);
}

function handleResize() {
    if (window.innerWidth > 980 && menuIsOpen) {
        closeMenu();
    }
}

bt_bars.addEventListener('click', click_bt_bars);
// search

document.querySelector('.header-search__icon i').addEventListener('click', function () {
    const searchQuery = `utc ` + document.querySelector('.header-search__input').value ;
    if (searchQuery) {
        const searchURL =`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
        window.open(searchURL, '_blank'); // _blank dùng để tạo tab mới
    }
});
/* form */
const form = document.querySelector('.form');
const styleLabelInput = {
    top: '43px',
    color: '#999',
    transition: '0.25s ease',
    left: '21px',
    backgroundColor: '#ffff'
};
const styleLabelInputed = {
    top: '0%',
    color: '#00377a',
    transition: '0.25s ease',
    left: '21px',
    backgroundColor: '#e8f0fe'
};
const styleInput = {
    borderColor: 'black',
    color: 'black',
    backgroundColor: '#ffff',
};
const styleInputed = {
    borderColor: '#00377a',
    color: 'black',
    backgroundColor: '#e8f0fe',
};

const afterInputedData = (inputItem, labelItem) => {
    Object.assign(labelItem.style, styleLabelInputed);
    Object.assign(inputItem.style, styleInputed);
};
const beforeInputedData = (inputItem, labelItem) => {
    Object.assign(labelItem.style, styleLabelInput);
    Object.assign(inputItem.style, styleInput);
};

const varInput = ['name', 'mail', 'phone', 'form__messageInput'];

let idClickBefore = undefined;

const handleFocusInputForm = (id) => {
    const inputItem = form.querySelector(`#${id}`);
    const labelItem = form.querySelector(`#lb-${id}`);
    if (idClickBefore !== undefined) {
        const bfInputItem = form.querySelector(`#${idClickBefore}`);
        const bfLabelItem = form.querySelector(`#lb-${idClickBefore}`);
        if (bfInputItem.value.length === 0) {
            beforeInputedData(bfInputItem, bfLabelItem);
        }
    } 
    afterInputedData(inputItem, labelItem);
};
varInput.forEach(it => {
    const input = form.querySelector(`#${it}`);
    if (input) {
        input.addEventListener('focus', () => {
            handleFocusInputForm(it);
            idClickBefore = it;
        });
    }
});
    /* check form */
const notifications = document.querySelector('.list-notification');
const notification_success = notifications.querySelector('.success-notification');
const notification_error = notifications.querySelector('.error-notification');
form.addEventListener('submit', function (event) {
    event.preventDefault(); 

    const name = document.querySelector('#name').value;
    const mail = document.querySelector('#mail').value;
    const phone = document.querySelector('#phone').value;

    const checkName = /^[^0-9]+$/.test(name) && name.trim().includes(' ');
    const checkMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(mail);
    const checkPhone = /^\+*[0-9]+$/.test(phone);

    console.log('submis click');
    if (checkName && checkMail && checkPhone) {
        notification_success.classList.add('show_mess');
        setTimeout(()=>{
            notification_success.classList.remove('show_mess');
        }, 2000); 
    } else {
        notification_error.classList.add('show_mess');
        setTimeout(()=>{
            notification_error.classList.remove('show_mess');
        }, 2000); 
    }
});

// buttion Circle Up
const btn_circle_up = document.querySelector(".btn-top");
// ẩn hiện nút 
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btn_circle_up.style.display = "block";
    } else {
        btn_circle_up.style.display = "none";
    }
};
  
// tra ve vi tri dau trang
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
// lắng nghe sự kiện click
btn_circle_up.addEventListener("click", scrollToTop);
  

// Cuộn đến form
function cuonDenViTriForm() {
    form.scrollIntoView({ behavior: "smooth" });
  }