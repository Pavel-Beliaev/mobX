import {makeAutoObservable} from "mobx";

class Counter {
    count = 0
    timer = 60
    constructor() {
        makeAutoObservable(this)
    }

    increment() {
        this.count = this.count + 1
    }

    decrement() {
        this.count = this.count - 1
    }

    reset() {
        this.count = 0
    }
    get total() {
        return this.count + this.timer
    }
}

export default new Counter()