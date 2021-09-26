const express = require('express')
const app = express()
const port = 3000

const magic8BallResponses = ["It is certain", "It is decidedly so", "Without a doubt", 
    "Yes definitely","You may rely on it", "As I see it yes", "Most likely", 
    "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later",
    "Better not tell you now", "Cannot predict now", "Concentrate and ask again",
    "Don't count on it", "My reply is no", "My sources say no","Outlook not so good", 
    "Very doubtful"]



// greetings
app.get('/greeting/:name', (req, res) => {
    // console.log(req.params, 'this is params')
    res.send(`Hello, ${req.params.name}`)
}) 

// tip calculator
app.get('/tip/:total/:tipPercentage', (req, res) => {
    let calculateTotal = `${req.params.total * (req.params.tipPercentage / 100)}`
    res.send(`${calculateTotal}`)
})

// Magic 8 ball
app.get('/magic/:question', (req, res) => {
    let randomIdx = Math.floor(Math.random() * magic8BallResponses.length)

    res.send(`
        <h1>Question: ${req.params.question}</h1>
        <h1>Answer: ${magic8BallResponses[randomIdx]}</h1>
    `)
})

// fibonacci
function isPerfectSquare(x) {
    let s = parseInt(Math.sqrt(x))
    return (s * s == x)
}

function isFibonacci(num) {
    return isPerfectSquare(5 * num * num + 4) || isPerfectSquare(5 * num * num - 4)
}

app.get('/fibonacci/:fibNum', (req, res) => {
    isFibonacci(req.params.fibNum) ?    
        res.send('<h2>Very good. It is Fibonacci</h2>')
        :
        res.send(`<h2>I can tell ${req.params.fibNum} is not a fibonacci number.</h2>`)
})



app.listen(port, () => {
    console.log('listening...')
})