let slides = document.querySelectorAll("#slides > img");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let current = 0;

showSlides(current);

prev.addEventListener("click", prevSlide);
next.addEventListener("click", nextSlide);

// n번째 슬라이드 이미지를 표시하는 함수
function showSlides(n){
    // 모든 이미지를 표시하지 않음
    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    // 매개변수 n번째 이미지만 표시
    slides[n].style.display = "block";
}

// 이전 슬라이드 이미지를 표시하는 함수
function prevSlide() {
    if(current > 0){
        // current 값이 0보다 크다면 이전 위치로
        current -= 1;
    }
    else{
        // 그렇지 않다면 마지막 위치로 이동
        current = slides.length - 1;
    }
    showSlides(current);
}

// 다음 슬라이드 이미지를 표시하는 함수
function nextSlide(){
    if(current < slides.length - 1){
        // current 값이 이미지 개수보다 작다면 다음 위치로
        current += 1;
    }
    else{
        // 그렇지 않다면 처음 위치로 이동
        current = 0;
    }
    showSlides(current);
}