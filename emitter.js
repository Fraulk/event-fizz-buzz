const EventEmitter = require('events')

class FizzBuzz extends EventEmitter {
    fizzBuzz(payload) {
        let res = payload || 0
        if (payload % 5 == 0) res = "Buzz"
        else if (payload % 5 == 0 && payload % 3 == 0) res = "FizzBuzz"
        else if (payload % 3 == 0) res = "Fizz"
        this.emit("fizzBuzz", res)
    }
}

module.exports = FizzBuzz