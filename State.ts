import state_base from "./stateHandlers/state_base";

export class State {
    states: StateNode[] = [{ state: state_base, processed: [] }];

    current() {
        return this.states[this.states.length - 1];
    }

    previous(): StateNode {
        return this.states[this.states.length - 2];
    }

    replace(newState: StateNode) {
        this.states[this.states.length - 1] = newState;
    }

    completeLast() {
        this.previous().processed.push(this.states.pop() as StateNode);
    }
}

export class StateNode {
    state: Function;
    processed?: StateNode[] = [];
    value?: any;

    constructor(values: Omit<StateNode, "processed">) {
        this.state = values.state;
        this.value = values.value;
    }
}