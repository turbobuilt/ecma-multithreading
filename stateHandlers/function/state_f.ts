import { State } from "../../State";
import state_fu from "./state_fu";

export default function(state: State, char) {
    if (char === 'u') {
        state.replace({
            state: state_fu
        });
    } else {
        throw new Error(`Invalid character: ${char}`);
    }
}