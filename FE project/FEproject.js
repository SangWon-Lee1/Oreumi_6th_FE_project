//Mobile 우측상단 메뉴탭
const listBtn = a => document.querySelector('.menu-box').style.display = a;

//scroll top button
//스크롤 탑버튼 마우스 오버시 이미지변경
document.addEventListener("DOMContentLoaded", function() {
    const topBtn = document.getElementById("scrollBtn");

    topBtn.addEventListener("mouseover", function() {
        this.querySelector("img").src = "img/scroll_top_btn_hover.png";
    });

    topBtn.addEventListener("mouseout", function() {
        this.querySelector("img").src = "img/scroll_top_btn.png";
    });
});


const scrollTopBtn = document.getElementById('scrollBtn');
const footer = document.getElementById('footer');

window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }

    const footerTop = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (footerTop < windowHeight) {
        scrollTopBtn.style.position = 'absolute';
        scrollTopBtn.style.bottom = `${windowHeight - footerTop + 5}px`;
    } else {
        scrollTopBtn.style.position = 'fixed';
        scrollTopBtn.style.bottom = '20px';
    }
});

// 스크롤 탑 버튼 클릭 시 페이지 상단으로 이동하는 함수
function pageTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

//이메일 유효성 검사
function validateEmail(email) {
    const x = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]+\.[a-zA-Z]{2,}$/i;
    return x.test(String(email).toLowerCase());
}

const emailForm = document.querySelector('#emailForm')
const modalOpen = document.querySelector('#email');
const modal = document.querySelector('.modal');
const submitBtn = document.querySelector('#confirmSubmit')

emailForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const noValue = modalOpen.value.trim(); // 입력값을 가져오고 공백 제거

    if (noValue === '') {
        window.alert('입력해주세요!');
    } else if (!validateEmail(noValue)) {
        window.alert('e-mail을 확인해주세요!');
    } else {
        modal.style.display = 'block';
    }
});

submitBtn.addEventListener('click', function (){
    modal.style.display = 'none';
    window.alert('구독완료!');
    emailForm.submit();
});