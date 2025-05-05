import { isWhitespace } from "../../helpers/isWhitespace";
import { State } from "../../State";
import state_function_arguments from "../function/state_function_arguments";
import state_expecting_var_assignment_equals from "./state_expecting_var_assignment_equals";
import state_expecting_var_identifier from "./state_expecting_var_identifier";

export default function(state: State, char) {
    if (isWhitespace(char)) {
        if (state.previous().state === state_expecting_var_identifier) {
            state.states.push({
                state: state_expecting_var_assignment_equals
            });
        } else if (state.previous().state === state_function_arguments) {
            state.states.push({
                state: state_function_arguments
            });
        }
        return;
    } else if (char.match(/[a-zA-Z_\d]/)) {
        state.states[state.states.length - 1].value += char;
    } else {
        throw new Error(`Invalid character: ${char}`);
    }
}