export const range = (a, b) => Array(b - a)
    .fill(null)
    .map((elem, i) => i + a)