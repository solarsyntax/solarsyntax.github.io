const canvas = document.getElementById('bubbleCanvas');
const ctx = canvas.getContext('2d');
let bubbles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function createBubble() {
    return {
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * canvas.height,
        radius: Math.random() * 20 + 10,
        speed: Math.random() * 1 + 0.5,
        color: `hsla(${Math.random() * 360}, 70%, 80%, 0.3)`
    };
}

for (let i = 0; i < 50; i++) bubbles.push(createBubble());

function drawBubbles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let b of bubbles) {
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fillStyle = b.color;
        ctx.fill();
        b.y -= b.speed;
        if (b.y + b.radius < 0) Object.assign(b, createBubble());
    }
    requestAnimationFrame(drawBubbles);
}

drawBubbles();
