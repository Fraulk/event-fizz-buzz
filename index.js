const FizzBuzzClass = require('./emitter')
const FizzBuzz = new FizzBuzzClass()

FizzBuzz.on("fizzBuzz", (payload) => console.log(payload))

for (let i = 0; i <= 20; i++) {
    FizzBuzz.fizzBuzz(i)
}