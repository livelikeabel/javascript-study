export const initStage = (row, col, data) => {
    return Array(row).fill(null).map(() => Array(col).fill(data));
}

export const sortStage = (ROW, COL, stage) => {
    range(ROW * COL, 1).shuffle().forEach((v, i) => {
        const row = Math.floor(i / ROW);
        const col = i % COL
        stage[row][col] = { number: v, checked: false }
    })
    return stage
}

function range(size, startAt = 0) {
    return [...Array(size).keys()].map(i => i + startAt)
}

Array.prototype.shuffle = function () {
    for (let i = this.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this[i], this[j]] = [this[j], this[i]];
    }
    return this;
}

export const checkNumber = (number, stage) => {
    stage.forEach(row => {
        row.forEach(block => {
            if(block.number === number) block.checked = true;
        })
    })
    return stage
}