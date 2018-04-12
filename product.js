class Pro {
    constructor (count, cost) {
        this.count = count
        this.cost = cost
        this.pro = this.cal()

    }

    cal () {
        const countM = this.count * 0.9
        return countM * this.cost
    }

    print () {
        let res = '원'
        console.log('pro = ', this.pro, res)
    }
}

const pro = new Pro(20,80)
pro.print()