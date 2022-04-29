var canvas: HTMLCanvasElement;
var ctx: CanvasRenderingContext2D;

function gameLoop() {
    requestAnimationFrame(gameLoop);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 1280, 720);

    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.arc(400, 400, 100, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.restore();

    var shape: iShape;
    for (var i: number = 0; i < shape_array.length; i++) {
        shape = shape_array[i];
        shape.draw();
        shape.x = shape.x + 1;

    }

}

var shape_array: Array<iShape> = Array<iShape>();

interface iShape {
    draw(): void;
    x: number;
    y: number;
    color: string;
    lineWidth: number;
}

class cCircle implements iShape {
    public x: number = 0;
    public y: number = 0;
    public radius: number = 10;
    public lineWidth: number = 2;
    public color: string = "red";
    constructor(x: number, y: number, radius: number, lineWidth: number = 2, color: string = "red") {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.lineWidth = lineWidth;
    }
    public draw = (): void => {
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.lineWidth;
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.restore();
    }
}







window.onload = () => {
    canvas = <HTMLCanvasElement>document.getElementById('cnvs');
    ctx = canvas.getContext("2d");

    shape_array.push(new cCircle(500, 500, 50));
    shape_array.push(new cCircle(50, 100, 150, 5, "green"));
    shape_array.push(new cCircle(50, 100, 70, 1, "white"));

    gameLoop();
}