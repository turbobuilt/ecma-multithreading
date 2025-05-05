import { isWhitespace } from "../../helpers/isWhitespace";
import { State } from "../../State";
import state_expecting_function_identifier_or_parameters from "./state_expecting_function_identifier_or_arguments";
import state_fu from "./state_fu";

export default function(state: State, char) {
    if (isWhitespace(char)) {
        state.replace({
            state: state_expecting_function_identifier_or_parameters
        });
    } else {
        throw new Error(`Invalid character: ${char}`);
    }
}