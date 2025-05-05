import { State } from "../../State";
import state_funct from "./state_funct";

export default function(state: State, char) {
    if (char === 't') {
        state.replace({
            state: state_funct
        });
    } else {
        throw new Error(`Invalid character: ${char}`);
    }
}