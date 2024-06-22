function createSquare(id, animationName, degrees, color) {
    const square = document.createElement('div');
    square.className = 'square';
    square.id = id;
    square.style.animationName = animationName;
    square.style.borderColor = color;

    document.getElementById('frame').appendChild(square);

    const styleSheet = document.styleSheets[0];
    const keyframes = `
        @keyframes ${animationName} {
            50% {
                transform: rotate(${degrees}deg);
                height: 2.5rem;
                border-radius: 50%;
            }
        }
    `;
    
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
}

const numberOfSquares = 36;
const degreeIncrement = 360 / numberOfSquares;

for (let i = 0; i < numberOfSquares; i++) {
    const id = `s${i}`;
    const animationName = `a${i}`;
    const degrees = i * degreeIncrement;
    const color = `hsl(${i * (360 / numberOfSquares)}, 100%, 50%)`;
    createSquare(id, animationName, degrees, color);
}
