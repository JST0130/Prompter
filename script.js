document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('startButton');
    const inputText = document.getElementById('inputText');
    const speedInput = document.getElementById('speedInput');
    const prompterContainer = document.querySelector('.prompter-container');
    const prompterText = document.getElementById('prompter-text');

    // 속도 입력값 제한
    speedInput.addEventListener('change', function() {
        if (this.value < 1) this.value = 1;
        if (this.value > 100) this.value = 100;
    });

    startButton.addEventListener('click', function() {
        if (inputText.value.trim() === '') {
            alert('텍스트를 입력하세요');
            return;
        }

        // 속도 계산 (1-100을 50-1초로 변환)
        const speed = 51 - (speedInput.value / 2); // 1 -> 50초, 100 -> 1초

        // 프롬프터 설정
        prompterText.textContent = inputText.value;
        prompterContainer.style.display = 'block';
        prompterText.style.transform = 'translateY(100%)';

        // 애니메이션 시작
        requestAnimationFrame(() => {
            prompterText.style.transition = `transform ${speed}s linear`;
            prompterText.style.transform = 'translateY(-100%)';
        });

        // 애니메이션 종료 후 초기화
        prompterText.addEventListener('transitionend', function() {
            prompterContainer.style.display = 'none';
            prompterText.style.transition = 'none';
            prompterText.style.transform = 'translateY(100%)';
        }, { once: true });
    });
});
