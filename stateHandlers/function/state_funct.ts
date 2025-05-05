import { State } from "../../State";
import state_fu from "./state_fu";
import state_functi from "./state_functi";

export default function(state: State, char) {
    if (char === 'i') {
        state.replace({
            state: state_functi
        });
    } else {
        throw new Error(`Invalid character: ${char}`);
    }
}