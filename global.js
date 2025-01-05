function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
}

setInterval(changeBackgroundColor, 1000);


function getRandomFontSize() {
    return Math.floor(Math.random() * 20) + 10 + 'px';
}

function changeFontSize() {
    document.body.style.fontSize = getRandomFontSize();
}

setInterval(changeFontSize, 2000);