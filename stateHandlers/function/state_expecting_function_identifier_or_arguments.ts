import { isWhitespace } from "../../helpers/isWhitespace";
import { State } from "../../State";
import state_function_arguments from "./state_function_arguments";
import state_function_identifier from "./state_function_identifier";

export default function(state: State, char) {
    if (isWhitespace(char)) {
        return;
    } else if (char.match(/[a-zA-Z_]/)) {
        state.replace({
            state: state_function_identifier,
            value: char,
        });
    } else if (char === "(") {
        state.replace({
            state: state_function_arguments
        });
    } else {
        throw new Error(`Invalid character: ${char}`);
    }
}