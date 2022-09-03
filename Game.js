import {ButtonComponent} from "./components/ButtonComponent.js";
import {RendererComponent} from "./components/RendererComponent.js";
import {ButtonRenderer} from "./renderers/ButtonRenderer.js";
import {GrassRenderer} from "./renderers/GrassRenderer.js";
import {GrassComponent} from "./components/GrassComponent.js";
import {WindComponent} from "./components/WindComponent.js";

export function Game({ecs}) {
    return {
        createUI,
        createGrass
    };

    function createUI() {
        const entity = ecs.createEntity();
        ecs.addComponent(entity, ButtonComponent({text: 'Asp'}));
        ecs.addComponent(entity, RendererComponent(ButtonRenderer));
    }

    function createGrass() {
        const entity = ecs.createEntity();
        ecs.addComponent(entity, GrassComponent());
        ecs.addComponent(entity, WindComponent());
        ecs.addComponent(entity, RendererComponent(GrassRenderer));
    }
}