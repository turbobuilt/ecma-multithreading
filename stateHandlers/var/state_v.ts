import { State, StateNode } from "../../State";
import state_va from "./state_va";

export default function(state: State, char) {
    if (char === "a") {
        state.replace({
            state: state_va
        });
    } else {
        throw new Error(`Invalid character: ${char}`);
    }
}