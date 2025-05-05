import { isWhitespace } from "../helpers/isWhitespace";
import { State, StateNode } from "../State";
import state_expecting_var_assignment_equals from "./state_expecting_var_assignment_equals";

export default function(state: State, char) {
    if (isWhitespace(char)) {
        state.states.push({
            state: state_expecting_var_assignment_equals
        });
        return;
    } else if (char.match(/[a-zA-Z_\d]/)) {
        state.states[state.states.length - 1].value += char;
    } else {
        throw new Error(`Invalid character: ${char}`);
    }
}