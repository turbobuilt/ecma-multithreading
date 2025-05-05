import { State } from "../../State";
import state_func from "./state_func";

export default function(state: State, char) {
    if (char === 'c') {
        state.replace({
            state: state_func
        });
    } else {
        throw new Error(`Invalid character: ${char}`);
    }
}