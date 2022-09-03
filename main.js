import {Game} from "./Game.js";
import {createCanvas} from "./canvas.js";
import {Renderer} from "./Renderer.js";
import {ECS} from "./ECS.js";
import {InputSystem} from "./InputSystem.js";
import {WindSystem} from "./system/WindSystem.js";

export default function () {
    const ecs = ECS();
    const canvas = createCanvas();
    const game = Game({ecs});

    // game.createUI();
    game.createGrass();

    const inputSystem = InputSystem();
    const renderer = Renderer({canvas, ecs});
    const windSystem = WindSystem({ecs});

    requestAnimationFrame(loop);

    let last = Date.now();

    function loop() {
        const now = Date.now();
        const delta = (now - last) / 1000;
        windSystem.run(delta);
        renderer.run();

        last = now;

        requestAnimationFrame(loop);
    }

    // inputSystem.listen();
    // renderer.start();

    function ActionMap() {
        const map = new Map();
    }
}