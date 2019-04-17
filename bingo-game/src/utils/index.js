export const initStage = (row, col, data) => {
    return Array(row).fill(null).map(() => Array(col).fill(data));
}