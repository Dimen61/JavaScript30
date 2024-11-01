# Summary

## JS
- Canvas
    ```js
    const canvas = document.querySelector('canvas#draw');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.beginPath();
    ctx.moveTo(currentX, currentY);
    ctx.lineTo(event.clientX, event.clientY);
    ctx.stroke();
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = brushSize;
    ctx.strokeStyle = `hsl(${hueValue}, 100%, 50%)`;
    ```