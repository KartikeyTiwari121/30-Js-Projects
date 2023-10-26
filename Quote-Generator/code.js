const quote = document.getElementById("quote");
const author = document.getElementById("author");
const TweetIt = document.getElementById("tweet");

const api_url = "https://api.quotable.io/random";

//from here --
const body = document.querySelector("body");
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function RandomBgColor() {
    body.style.backgroundColor = getRandomColor();
}
// -- till here code will generate a random color and will inject the hex code in body's background style and we'll call this RandomBgColor() func in getquote() so that on every click it can update BgColor.

async function getquote(url){
    const response = await fetch(url);
    let data = await response.json();
    // console.log(data);
    quote.innerHTML = data.content;
    author.innerHTML = data.author;

    // Once the new quote is fetched and displayed, change the background color.
    RandomBgColor();
}

getquote(api_url);

//below function will used to open new window & tweet quote on twitter and as well as can be used for other platforms.
function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "---- by " + author.innerHTML, "Tweet Window", "width=600, height=300");
}

TweetIt.addEventListener("click", ()=>{
    tweet();
    // this is alternative of onclick (which directly applied on html elements).
})

