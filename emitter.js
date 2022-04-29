const EventEmitter = require('events')

class FizzBuzz extends EventEmitter {
    fizzBuzz(payload) {
        console.log(payload)
        this.emit("fizzBuzz", payload)
    }
}

module.exports = FizzBuzz