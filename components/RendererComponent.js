import {Components} from "./components.js";

export function RendererComponent(renderer) {
    return {
        type: Components.renderer,
        renderer
    }
}