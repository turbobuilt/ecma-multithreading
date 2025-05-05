import { State, StateNode } from "../State";
import state_f from "./function/state_f";
import state_v from "./var/state_v";

export default function(state: State, char) {
    if (char === "v") {
        state.states.push({
            state: state_v
        });
    } else if (char === "f") {
        state.states.push({
            state: state_f
        });
    }
}