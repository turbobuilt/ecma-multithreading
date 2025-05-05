import { State } from "../State";
import state_expecting_var_assignment_value from "./state_expecting_var_assignment_value";
import state_va from "./state_va";

export default function(state: State, char) {
    if (char === '"') {
        // state.completeLast();
        if (state.previous().state === state_expecting_var_assignment_value) {
            // state.previous().
            ast.push(new StringVariableLiteral({
                identifier: state.states.at(-3)!.value,
                type: "string",
                value: state.current().value
            }))
            state.states
        }
    } else if (char === "\\") {
        throw new Error(`String escacpe not yet implemented: ${char}`);
    } else {
        state.current().value += char;
    }
}