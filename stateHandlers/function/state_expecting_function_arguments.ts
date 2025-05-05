import { isWhitespace } from "../../helpers/isWhitespace";
import { State } from "../../State";
import state_function_arguments from "./state_function_arguments";

export default function(state: State, char) {
    if (isWhitespace(char)) {
        return;
    } else if (char === "(") {
        state.replace({
            state: state_function_arguments
        });
    } else {
        throw new Error(`Invalid character: ${char}`);
    }
}