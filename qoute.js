let quotes = [
    "In order to succeed, your desire for success should be greater than your fear of failure.",
    "An unexamined life is not worth living.",
    "We become what we think about.",
    "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.",
    "When one door of happiness closes, another opens, but often we look so long....",
    "Build your own dreams, or someone else will hire you to build theirs.",
    "Either write something worth reading or do something worth writing.",
];
let author = [
    "Bill Cosby",
    "Socrates",
    "Earl Nightingale",
    "Mark Twain",
    "Helen Keller",
    "Farrah Gray",
    "Benjamin Franklin",
];

function newQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById(`text`).innerHTML = quotes[randomNumber];
    document.getElementById(`author`).innerHTML = author[randomNumber];
}

let color = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857"
];

function changeColor() {
    let randomColor = Math.floor(Math.random() * color.length);
    document.body.style.backgroundColor = color[randomColor];
    document.getElementById("text").style.color = color[randomColor];
    document.getElementById("author").style.color = color[randomColor];
    document.getElementById("quote-box").style.color = color[randomColor];
    document.getElementById("tweet-quote").style.backgroundColor = color[randomColor];
    document.getElementById("new-quote").style.backgroundColor = color[randomColor];
}

/*
        <a onclick="changeColor()" href="#" id="theme" class="change-theme"><svg xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 285.919 285.919">
            <path
              d="M142.959 0C64.131 0 0 64.132 0 142.96s64.131 142.959 142.959 142.959 142.96-64.131 142.96-142.959S221.787 0 142.959 0zm0 260.919V25c65.043 0 117.96 52.917 117.96 117.96 0 65.043-52.917 117.959-117.96 117.959z">
            </path>
          </svg></a>
          */