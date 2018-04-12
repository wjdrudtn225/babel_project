class Car{
    constructor (color, opt){
        this.color = color
        this.opt = opt
        this.cost = this.cal()

    }

    cal(){
        var colorCost = 0
        var optCost = 0

        if(this.color === 'red')
            colorCost = 50
        else if(this.color === 'blue')
            colorCost = 100
        else if (this.color === 'black' )
            colorCost = 150
        else colorCost = 0

        if(this.opt === 1)
            optCost = 200
        else if (this.opt === 0)
            optCost = 0

        return 2000 + optCost + colorCost
    }

    print() {
        let res = '원'
        console.log('차 가격 = ', this.cost, res)
    }
}
const car = new Car('blue', 1)
car.print()