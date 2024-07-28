document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById("text");

    setTimeout(() => {
        textElement.classList.add("fade-out");

        textElement.addEventListener("transitionend", () => {
            const currentText = textElement.textContent;
            if (currentText.includes("지금")) {
                const newText = "지금 뒤에 꿀잼 접영이 있어요!";
                textElement.textContent = newText;
            }

            textElement.classList.remove("fade-out");
            textElement.classList.add("fade-in");
        }, { once: true });
    }, 3000); // 3초 (3000 밀리초) 후에 텍스트 변환
});
