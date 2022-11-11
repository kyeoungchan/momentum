const h1 = document.querySelectorAll(".hiHello h1");
// <h1> Tag들을 배열에 담기
const h2 = document.querySelector(".hiHello h2");
// <h1> Tag와 같은 class내에 있지만 <h2> Tag만 선별해서 h2에 담기

console.dir(h1);
// h1에 대한 상세 내용 조회하기

console.dir(h2);
// h1에 대한 상세 내용 조회하기

const H1 = {
    // h1에 들어있는 객체들을 다루기 위한 객체
    handleClick : function(h1, i) {
        h1[i].classList.toggle("active");
        // "active"라는 class가 존재하면 제거하고, 존재하지 않으면 추가한다.
    },
    handleMouseEnter : function(h1, i) {
        h1[i].innerText = "mouse on text! " + (i + 1);
        // mouse가 위로 올라가면 text 수정
    },
    handleMouseLeave : function(h1, i) {
        h1[i].innerText = "Grab Me! " + (i + 1);
        // mouse가 떠나면 text 수정
    }
};

const H2 = {
    // h2를 다루기 위한 객체
    handleClick : function() {
        h2.classList.toggle("active");
        // "active"라는 class가 존재하면 제거하고, 존재하지 않으면 추가한다.
    },
    handleMouseEnter : function() {
        h2.innerText = "mouse on text!";
        // mouse가 위로 올라가면 text 수정
    },
    handleMouseLeave : function() {
        h2.innerText = "Hi Hello!";
        // mouse가 떠나면 text 수정
    }
};

const AWindow = {
    // window 객체를 다룰 함수를 묶어줄 객체다.
    handleWindowResize : function() {
        document.body.style.backgroundColor = "tomato";
        // <body> Tag는 querySelector() 함수를 굳이 호출 안 해도 바로 찾아올 수 있다.
        // Web Page창의 크기를 변화시킬 때 이 함수가 호출된다.
    },
    handleWindowCopy : function() {
        alert("Copier!");
        // 무언가를 복사할 때 이 함수가 호출된다.
    },
    handleWindowOffline : function() {
        alert("SOS no WIFI");
        // WIFI 연결이 해제될 때 이 함수가 호출된다.
    },
    handleWindowOnline : function() {
        alert("WIFI Connected!");
        // WIFI가 연결될 때 이 함수가 호출된다.
    }
};


for (let i = 0; i < 3; i++) {
    h1[i].addEventListener("click", function(){H1.handleClick(h1, i)});
    h1[i].addEventListener("mouseenter", function(){H1.handleMouseEnter(h1, i)});
    h1[i].addEventListener("mouseleave", function(){H1.handleMouseLeave(h1, i)});
    // addEventListener()함수에 두 번째 인자로 함수와 인자를 전달해야하는 경우, 위처럼 익명 함수를 사용해야 한다.
    // 여러개의 객체들에 대한 eventListener는 반복문으로 편하게 구현이 가능하다.
}

h2.addEventListener("click", H2.handleClick);
h2.addEventListener("mouseenter", H2.handleMouseEnter);
h2.addEventListener("mouseleave", H2.handleMouseLeave);

window.addEventListener("resize", AWindow.handleWindowResize);
window.addEventListener("copy", AWindow.handleWindowCopy);
window.addEventListener("offline", AWindow.handleWindowOffline);
window.addEventListener("online", AWindow.handleWindowOnline);