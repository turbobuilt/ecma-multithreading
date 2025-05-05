import { State } from "../../State";
import state_fu from "./state_fu";
import state_functio from "./state_functio";

export default function(state: State, char) {
    if (char === 'o') {
        state.replace({
            state: state_functio
        });
    } else {
        throw new Error(`Invalid character: ${char}`);
    }
}