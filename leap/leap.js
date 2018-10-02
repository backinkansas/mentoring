class LeapVerifier {
    constructor(year) {
        this.year = year
    }

    checksYear() {
        if (this.year % 4 !== 0) return false

        if (this.year % 100 !== 0) return true

        if (this.year % 100 === 0 && this.year % 400 === 0) return true

        return false
    }
}

module.exports = {
    isLeap(year) {
        const leap = new LeapVerifier(year)
        return leap.checksYear()
    }
}