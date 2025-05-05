import { isWhitespace } from "../../helpers/isWhitespace";
import { State, StateNode } from "../../State";
import state_var_identifier from "../var/state_var_identifier";

export class StateFunctionArguments extends StateNode {
    
}
export default function(state: State, char) {
    if (isWhitespace(char)) {
        return;
    } else if (char.match(/[a-zA-Z_]/)) {
        state.states.push({
            state: state_var_identifier,
            value: char
        });
    } else {
        throw new Error(`Invalid character: ${char}`);
    }
}