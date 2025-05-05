import { State } from "../../State";
import state_fu from "./state_fu";
import state_function from "./state_function";

export default function(state: State, char) {
    if (char === 'n') {
        state.replace({
            state: state_function
        });
    } else {
        throw new Error(`Invalid character: ${char}`);
    }
}