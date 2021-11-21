
const getRandomElements = <E>(array: E[], n: number) => {
    // https://stackoverflow.com/questions/19269545/how-to-get-a-number-of-random-elements-from-an-array

    // Shuffle array
    const shuffled = array.sort(() => 0.5 - Math.random());

    // Get sub-array of first n elements after shuffled
    return shuffled.slice(0, n);
}

export { getRandomElements };