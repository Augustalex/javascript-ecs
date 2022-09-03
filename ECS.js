import {Components} from "./components/components.js";

export function ECS() {
    let nextId = 1;
    const entities = [];
    const entitiesByComponent = createComponentMap();
    const componentsByEntity = new Map();
    const components = createComponentMap();

    return {
        entities,
        componentsByEntity,
        entitiesByComponent,
        components,
        getComponents,
        createEntity,
        addComponent
    };

    function getComponents(entity, componentTypes) {
        return componentTypes.map(t => {
            return componentsByEntity.get(entity).get(t);
        });
    }

    function createEntity() {
        const entity = nextId++;
        entities.push(entity);

        componentsByEntity.set(entity, new Map());

        return entity;
    }

    function addComponent(entity, component) {
        entitiesByComponent.get(component.type).push(entity);
        componentsByEntity.get(entity).set(component.type, component);
        components.get(component.type).push(component);
    }
}

function createComponentMap() {
    const keys = Object.values(Components);
    const result = new Map();
    for (let key of keys) {
        result.set(key, []);
    }

    return result;
}