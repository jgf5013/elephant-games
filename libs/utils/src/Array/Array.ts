// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
const getRandomElements = <E>(arr: E[], n: number): E[] => {
    let len = arr.length;
    const result = new Array(n);
    const taken = new Array(len);
    if (n > len) {
        throw new RangeError("getRandom: more elements taken than available");
    }
    while (n--) {
        const x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    console.log('getRandomElements - result=', result);
    return result;
}

export { getRandomElements };