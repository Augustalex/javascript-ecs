export function createCanvas() {
    const canvas = document.createElement('canvas');

    canvas.style.width = '500px';
    canvas.style.height = '500px';
    canvas.width = 500;
    canvas.height = 500;

    document.body.appendChild(canvas);

    return canvas;
}