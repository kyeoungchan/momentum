const quotes = [
    {
        quote : "자신이 지금까지 들었던 가장 달콤한 소리는 아직 자신의 머릿속에 있다.",
        author : "Richard Rogers"
    },
    {
        quote : "일하는 것과 공부하는 것을 즐겨라. 웃는 자가 일류다.",
        author : "우경찬"
    },
    {
        quote : "업무에 과몰입하지 않는 리더가 따르고 싶은 리더다.",
        author : "우경찬"
    },
    {
        quote : "말을 이쁘게 하는 것은 나의 목적 달성을 위해서, 즉 나를 위해서 하는 것이다.",
        author : "김수인"
    },
    {
        quote : "현대 사회에서 진정한 휴식이란 뇌를 쉬게 해주는 것이다.",
        author : "드로우앤드류"
    },
    {
        quote : "진리는 길이 없다. 진리는 살아있는 것이다. 그래서 변화한다.",
        author : "Bruce Lee"
    },
    {
        quote : "We succeed only as we identify in life, or in war, or in anything else, a single overriding objective, and make all other considerations bend to that one objective.",
        author : "Dwight D. Eisenhower"
    },
    {
        quote : "It is possible to fail in many ways...while to succeed is possible only in one way.",
        author : "Aristotle"
    },
    {
        quote : "A great secret of success is to go through life as a man who never gets used up.",
        author : "Albert Schweitzer"
    },
    {
        quote : "A book is a version of the world. If you do not like it, ignore it; or offer your own version in return.",
        author : "Salman Rushdie"
    },
    {
        quote : "Only a life lived for others is a life worthwhile.",
        author : "Albert Einstein"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
// 해당 html Tag에 접근할 때는 ":"를 활용해 first나 last-child로 접근하면 된다.

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;