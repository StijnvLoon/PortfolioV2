export enum Language {
    NL,
    EN
}

export const languageArray: () => string[] = () => {
    return Object.keys(Language)
        .filter(value => isNaN(Number(value)) === false)
        .map(key => Language[key])
}