const title = document.querySelectorAll(".hiHello h1");
// <h1> Tag들을 배열에 담기

console.dir(title);
// title에 대한 상세 내용 조회하기

const Title = {
    // title에 들어있는 객체들을 다루기 위한 객체
    handleClick : function(title, i) {
        if (title[i].style.color == 'blue')
            title[i].style.color = 'black';
        else
            title[i].style.color = 'blue';
        // 클릭을 함에 따라 글자 색 바꾸기
    },
    handleMouseEnter : function(title, i) {
        title[i].innerText = "mouse on text! " + (i + 1);
        // mouse가 위로 올라가면 text 수정
    },
    handleMouseLeave : function(title, i) {
        title[i].innerText = "Grab Me! " + (i + 1);
        // mouse가 떠나면 text 수정
    }
};

for (let i = 0; i < 3; i++) {
    title[i].addEventListener("click", function(){Title.handleClick(title, i)});
    title[i].addEventListener("mouseenter", function(){Title.handleMouseEnter(title, i)});
    title[i].addEventListener("mouseleave", function(){Title.handleMouseLeave(title, i)});
    // addEventListener()함수에 두 번째 인자로 함수와 인자를 전달해야하는 경우, 위처럼 익명 함수를 사용해야 한다.
    // 여러개의 객체들에 대한 eventListener는 반복문으로 편하게 구현이 가능하다.
}
