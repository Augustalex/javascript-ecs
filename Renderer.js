import {Components} from "./components/components.js";

export function Renderer({canvas, ecs}) {

    return {
        run
    };

    function run() {
        const context = canvas.getContext('2d');

        context.fillStyle = '#efefef';
        context.fillRect(0, 0, 500, 500);

        for (const entity of ecs.entitiesByComponent.get(Components.renderer)) {
            const rendererComponent = ecs.componentsByEntity.get(entity).get(Components.renderer);

            const dependencies = ecs.getComponents(entity, rendererComponent.renderer.componentTypes);
            rendererComponent.renderer(context, ...dependencies);
        }
    }
}