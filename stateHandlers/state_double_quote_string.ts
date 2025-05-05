import { State } from "../State";
import state_expecting_var_assignment_value from "./var/state_expecting_var_assignment_value";

export default function(state: State, char) {
    if (char === '"') {
        // state.completeLast();
        if (state.previous().state === state_expecting_var_assignment_value) {
            // allocate the variable
            
            state.states
        }
    } else if (char === "\\") {
        throw new Error(`String escacpe not yet implemented: ${char}`);
    } else {
        state.current().value += char;
    }
}