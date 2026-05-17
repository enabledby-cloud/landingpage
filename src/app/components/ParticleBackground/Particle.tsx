
interface ParticleProps {
    x: number;
    y: number;
    directionX: number;
    directionY: number;
    size: number;
    color: string;
    ctx: CanvasRenderingContext2D;
    canvas: HTMLCanvasElement;
}

export class Particle {
    x: number;
    y: number;
    directionX: number;
    directionY: number;
    size: number;
    color: string;
    ctx: CanvasRenderingContext2D;
    canvas: HTMLCanvasElement;

    constructor({ x, y, directionX, directionY, size, color, ctx, canvas }: ParticleProps) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
        this.ctx = ctx;
        this.canvas = canvas;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }

    update() {
        if (this.x > this.canvas.width || this.x < 0) {
            this.directionX = -this.directionX;
        }
        if (this.y > this.canvas.height || this.y < 0) {
            this.directionY = -this.directionY;
        }
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
    }
}
