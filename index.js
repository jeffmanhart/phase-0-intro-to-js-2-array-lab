// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(string) {
    return cats.push(string);
}
function destructivelyPrependCat(string) {
    return cats.unshift(string);
}
function destructivelyRemoveLastCat(string) {
    return cats.pop(string);
}
function destructivelyRemoveFirstCat(string) {
    return cats.shift(string);
}
function appendCat(name) {
    const copyCats = [...cats, name]
    return copyCats;
}
function prependCat(name) {
    const copyCats = [name, ...cats]
    return copyCats;
}
function removeLastCat() {
    return cats.slice(0, -1);
}
function removeFirstCat() {
    return cats.slice(1);
}