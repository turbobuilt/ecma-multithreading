import { isWhitespace } from "../helpers/isWhitespace";
import { State, StateNode } from "../State";
import state_double_quote_string from "./state_double_quote_string";

export default function(state: State, char) {
    if (char === '"') {
        state.states.push({
            state: state_double_quote_string,
            value: ""
        });
        return;
    }
    // else if (char === "'") {
    //     state.states.push({
    //         state: state_single_quote_string
    //     });
    //     return;
    // } else if (char === "`") {
    //     state.states.push({
    //         state: state_backtick_string
    //     });
    //     return;
    // } 
    else if (isWhitespace(char)) {
        // Ignore whitespace
        return;
    }
    
    else {
        throw new Error(`Invalid character: ${char}`);
    }
}