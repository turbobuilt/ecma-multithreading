import { State, StateNode } from "../State";
import state_var from "./state_var";

export default function(state: State, char) {
    if (char === "r") {
        state.replace({
            state: state_var
        });
    } else {
        throw new Error(`Invalid character: ${char}`);
    }
}