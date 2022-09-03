
export function InputSystem(actionMap) {
    const keysDown = new Set();
    const keysPressed = [];

    window.addEventListener('keydown', e => {
        keysDown.add(e.key);
        keysPressed.push(e.key);
    });
    window.addEventListener('keyup', e => {
       keysDown.delete(e.key);
    });

    return {
        listen
    };

    function listen() {
        const loop = () => {
            for (const key of keysPressed) {
                actionMap.get(key)?.pressed();
            }
            keysPressed.length = 0;

            requestAnimationFrame(loop);
        }
        requestAnimationFrame(loop);
    }
}