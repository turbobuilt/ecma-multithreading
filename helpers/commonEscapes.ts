export function isCommonEscape(char: string): boolean {
    return (
        char === "n" ||
        char === "r" ||
        char === "t" ||
        char === "b" ||
        char === "f" ||
        char === "v" ||
        char === "a" ||
        char === "x"
    );
}