const images = ["0.jpg", "2.avif", "3.jpg", "4.jpg"];
// chosenImage에 랜덤한 이미지 노출
const chosenImage = images[Math.floor(Math.random() * images.length)];
// bgImage에 img태그 생성
const bgImage = document.createElement("img");
// 경로저장
bgImage.src = `img/${chosenImage}`;
// 바디에 appendChild이용해 사진 노출
document.body.appendChild(bgImage);
