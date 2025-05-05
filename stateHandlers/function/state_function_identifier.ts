import { isWhitespace } from "../../helpers/isWhitespace";
import { State } from "../../State";

export default function(state: State, char) {
    if (char.match(/[a-zA-Z_\d]/)) {
        state.current().value += char;
    } else if (isWhitespace(char)) {
        state.replace({
            state: 
        });
        return;
    } else {
        throw new Error(`Invalid character: ${char}`);
    }
}