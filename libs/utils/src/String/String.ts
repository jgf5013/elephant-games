const toTitleCase = (str: string) => str.toLowerCase()
    .replace(/-/, ' ')
    .replace(/(?:^|[\s-/])\w/g, (match) => match.toUpperCase());

export { toTitleCase };