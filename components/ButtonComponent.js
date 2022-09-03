import {Components} from "./components.js";

export function ButtonComponent({text}) {
    return {
        type: Components.button,
        text
    }
}