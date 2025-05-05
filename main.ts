import { State } from "./State";

const state = new State();

const str = 'var a = "hello world"';

for (let i = 0; i < str.length; i++) {
    const char = str[i];
    try {
        state.states.at(-1)?.state(state, char);
        
    } catch (error) {
        console.error(`Error at index ${i}:`);
        console.error(str);
        console.error(' '.repeat(i) + '^'); // Add carat pointing to the error location
        console.error(error.message);
        break;
    }
}
console.log("State", state);