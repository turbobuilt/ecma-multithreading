import { State, StateNode } from "../../State";
import state_expecting_var_assignment_value from "./state_expecting_var_assignment_value";

export default function(state: State, char) {
    if (char === "=") {
        state.replace({
            state: state_expecting_var_assignment_value
        });
        return;
    } else if (char === " ") {
        // Ignore whitespace
        return;
    } else {
        throw new Error(`Invalid character: ${char}`);
    }
}