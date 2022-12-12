const images = ["0.jpg", "1.jpg", "2.jpg"];
// image 파일명들을 담아놓은 배열
const chosenImage = images[Math.floor(Math.random() * images.length)];
// images 목록 중 하나 선택

const bgImage = document.createElement("img");
// HTML에서가 아닌 JavaScript에서 "img" Element 생성

bgImage.src = `img/${chosenImage}`;
// img라는 폴더 내에 있는 chosenImage라는 파일명으로 bgImage의 src 속성값에 넣는다.

document.body.appendChild(bgImage);
// JavaScript Code로 HTML 내에 있는 <body> Tag내로 Element를 추가하는 구문이다.