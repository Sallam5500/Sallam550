

function test(){
    var userNames =["Sallam","Frank Zappa","Albert Einstein", "Mark Twain","Marcus Tullius Cicero", "Mahatma Gandhi",]
    var text = ["Be yourself; everyone else is already taken.",'So many books, so little time.',"Two things are infinite: the universe and human stupidity and I'm not sure about the universe",
    "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.","A room without books is like a body without a soul.",
    "Be the change that you wish to see in the world."
    ]
var num = Math.floor( Math.random() * userNames.length)

document.getElementById("text").textContent= text[num] ;
document.getElementById("userNames").textContent= userNames[num];

}


// console.log(userNames[num])
// console.log(text[num])

