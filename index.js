const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const newCatsAppended = [...cats, "Broom"];
    return newCatsAppended;
}

function prependCat(name) {
    const newCatsPrepended = ["Arnold", ...cats];
    return newCatsPrepended;
}

function removeLastCat() {
    const newCatsRemoveLast = [...cats.slice(0,cats.length - 1)];
    return newCatsRemoveLast;
}


function removeFirstCat() {
    const newCatsRemoveFirst = [...cats.slice(1, cats.length)];
    return newCatsRemoveFirst;
}
