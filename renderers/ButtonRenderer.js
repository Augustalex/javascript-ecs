import {Components} from "../components/components.js";

export function ButtonRenderer(context, buttonComponent) {
    context.fillStyle = 'orange';
    context.fillRect(10, 10, 100, 40);

    context.fillStyle = 'black';
    context.font = '14px sans-serif';
    context.fillText(buttonComponent.text, 20, 10 + 7 + 20);
}

ButtonRenderer.componentTypes = [Components.button];