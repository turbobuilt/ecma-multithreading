import { State, StateNode } from "../State";
import state_v from "./state_v";

export default function(state: State, char) {
    if (char === "v") {
        state.states.push({
            state: state_v
        });
    }
}