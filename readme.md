This is an experimental repo to create a dead simple language parser for javascript now. We are writing it in javascript to prototype ideas for now.

The key thing is that we make states for everything.

So we never "peek" to the next char. Instead we patiently make a new state.

So if the first letters are

var x = "hello world";

we have a state_base, state_v, state_va, state_var_expecting_identifier, state_var_identifier.

So literally everything is a unique state.

Then for common functionality we use helpers to import the functions.# ecma-multithreading
