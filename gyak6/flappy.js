function random(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

class Bird {
    constructor(context, x, y, width, height, velocity, acceleration) {
        this.context = context;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.velocity = velocity;
        this.acceleration = acceleration;
        this.image = new Image();
        this.image.src = './assets/bird.png';
    }

    draw() {
        this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    update(dt) {
        this.velocity += this.acceleration * dt / 1000;
        this.y += this.velocity * dt / 1000;

        if (this.y >= canvas.height - this.height) {
            gameOver = true;
        }
    }
}

class Column {
    constructor() {
    }
}

document.addEventListener('keypress', (e) => {
    if (e.code === 'Space') {
        bird.velocity -= 100;
    }
})

const canvas = document.getElementById('flappyCanvas');
const context = canvas.getContext('2d');

let lastCycleTime = performance.now(); // (new Date()).now()

const bird = new Bird(context, 50, 175, 50, 50, 100, 50);

let gameOver = false;

function cycle(now = performance.now()) {
    const dt = now - lastCycleTime;
    lastCycleTime = now;

    update(dt);
    draw();

    if (gameOver) {
        context.font = '50px Arial';
        context.fillStyle = 'red';
        context.fillText('Game Over!', 200, 175);
        return;
    }

    requestAnimationFrame(cycle);
}

function draw() {
    context.fillStyle = 'lightblue';
    context.fillRect(0, 0, canvas.width, canvas.height);

    // context.beginPath();
    // context.moveTo(200, 200);
    // context.lineTo(100, 300);
    // context.lineTo(300, 300);
    // context.lineTo(200, 200);
    // context.closePath();
    // context.stroke();
    //
    // context.clearRect(100, 300, 100, 50);

    bird.draw();
}

function update(dt) {
    bird.update(dt);
}

cycle();
