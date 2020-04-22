export function createCounter(options = {}) {
    let count = options.initVal || 0;
    const min = options.min;
    const max = options.max;

    return {
        val() {
            return count;
        },
        inc() {
            count++;
        },
        dec() {
            if (!this.isMin()) {
                count--;
            }
        },
        isMax() {
            return false;
        },
        isMin() {
            return min && (this.count === this.min);
        }
    }
}
