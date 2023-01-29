const quotes = [
  {
    quote: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu",
  },
  {
    quote: "That which does not kill us makes us stronger.",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "Fortune favors the bold.",
    author: "Virgil",
  },
  {
    quote: "Life is what happens when you’re busy making other plans.",
    author: "John Lennon",
  },
  {
    quote: "When the going gets tough, the tough get going.",
    author: "Joe Kennedy",
  },
  {
    quote: "You must be the change you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "Tough times never last but tough people do.",
    author: "Robert H. Schuller",
  },
  {
    quote: "Whether you think you can or you think you can’t, you’re right.",
    author: "Henry Ford",
  },
  {
    quote:
      "'Tis better to have loved and lost than to have never loved at all.",
    author: "Alrded Lord Tennyson",
  },
  {
    quote: "You miss 100 percent of the shots you never take.",
    author: "Wayne Gretzky",
  },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
// math.random()   0-1 사이 float math.round() 반올림 math.ceil() 올림 math.floor() 내림
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
