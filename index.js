const FizzBuzzClass = require('./emitter')
const FizzBuzz = new FizzBuzzClass()

FizzBuzz.on("fizzBuzz", (payload) => console.log(payload))

FizzBuzz.fizzBuzz(42)