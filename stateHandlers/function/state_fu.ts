import { State } from "../../State";
import state_fun from "./state_fun";

export default function(state: State, char) {
    if (char === 'n') {
        state.replace({
            state: state_fun
        });
    } else {
        throw new Error(`Invalid character: ${char}`);
    }
}