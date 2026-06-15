const sentences = [
    "Multimedia Computing student with an interest in web development,software development, and interactive technologies.",
    "Aspiring Software Developer",
    "Web Development Enthusiast",
    "Java Programmer",
    "Problem Solver"
];

let sentenceIndex = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing");

function typeText() {

    if (charIndex < sentences[sentenceIndex].length) {

        typingElement.textContent += sentences[sentenceIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeText, 2);

    } else {

        setTimeout(eraseText, 3000);

    }
}

function eraseText() {

    if (typingElement.textContent.length > 0) {

        typingElement.textContent =
        typingElement.textContent.slice(0, -1);

        setTimeout(eraseText, 50);

    } else {

        sentenceIndex++;

        if (sentenceIndex >= sentences.length) {

            sentenceIndex = 0;

        }

        charIndex = 0;

        setTimeout(typeText, 500);
    }
}

typeText();