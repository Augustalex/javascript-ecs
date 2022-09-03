import {Components} from "../components/components.js";

export function WindSystem({ecs}) {
    return {
        run
    };

    function run(delta) {
        const winds = ecs.components.get(Components.wind);
        for (const wind of winds) {
            const newX = (wind.x + .1 * delta);
            wind.x = newX > 1 ? newX - Math.floor(newX) : newX;
        }
    }
}