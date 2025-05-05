import { State, StateNode } from "../State";
import state_expecting_var_identifier from "./state_expecting_var_identifier";

export default function(state: State, char) {
    if (char === " ") {
        state.replace({
            state: state_expecting_var_identifier
        });
    } else {
        throw new Error(`Invalid character: ${char}`);
    }
}