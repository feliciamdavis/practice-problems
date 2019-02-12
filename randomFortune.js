/**
 * print random fortune
 */
const fortunes = [
    'A lifetime of happiness lies ahead of you',
    'A pleasant surprise is waiting for you',
    'Believe it can be done',
    'Courtesy begins in the home',
    'Determination is what you need now',
    'Do not underestimate yourself. Human beings have unlimited potentials',
    'Do you know that the busiest person has the largest amount of time',
    'Don’t confuse recklessness with confidence',
    'Don’t let your limitations overshadow your talents',
    'Emulate what you respect in your friends',
    'Failure is the chance to do better next time',
    'Fearless courage is the foundation of victory',
    'First think of what you want to do; then do what you have to do',
    'I learn by going where I have to go',
    'If you continually give, you will continually have'
];
function fortune() {
    let randomFortune = fortunes[Math.floor(Math.random() * (fortunes.length))];
    return randomFortune;
}

console.log(fortune());