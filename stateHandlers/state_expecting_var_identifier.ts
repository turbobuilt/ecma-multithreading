import { State, StateNode } from "../State";
import state_var_identifier from "./state_var_identifier";

export default function(state: State, char) {
    if (char === " ") {
        return;
    } 
    // Check if the character is a valid identifier character
    else if (char.match(/[a-zA-Z_]/)) {
        state.replace({
            state: state_var_identifier,
            value: char
        });
    } else {
        throw new Error(`Invalid character: ${char}`);
    }
}