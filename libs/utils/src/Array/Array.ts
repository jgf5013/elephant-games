// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
const getRandomElements = <E>(arr: E[], n: number): E[] => {
    n = Math.min(n, arr.length);
    let len = arr.length;
    const result = new Array(n);
    const taken = new Array(len);

    while (n--) {
        const x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

export { getRandomElements };