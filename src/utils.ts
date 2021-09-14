//Randomizing the order in which the answers appear
export const shuffleArray = (array: any[]) =>
    [...array].sort(() => Math.random() -0.5)
