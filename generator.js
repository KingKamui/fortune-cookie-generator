/*Fortunes:
1-   Doflamingo will make you shoot yourself.
2-   Candy will make you disappear and will make you a slave without anyone knowing you completly.
3-   Law cuts off your heads using his ability to feed the Sea Emperors.
4-   Carrot will bite you to death.
5-   Ceasar's laugh will annoy you to death.
6-   Buggy's nose is so stupid, you die by laugther.
7-   You laughed at Pica's laugh, which made you all but blood on the wall.
8-   Akainu found you and executed you right at the spot.
9-   You don't eat and you threw away Sanji's food, he barbecued you to feed you.
10-  You pissed off Big Mama. She then steals your soul.
11-  
12-  
13-  
14-  
15-  
16-  
17-  
18-  
19-  
20-  
*/
//Add picture of the characters?

var num;
var pastFortunes = [];
var newFortune = "You will " + generateFortuneCookie(num);

//Function to call a fortune.
function generateFortuneCookie(num) {
    
    //RNG to keep the fortunes random. It selects between 1 and 10 and also rounds the number.
    num = Math.floor((Math.random() * 10) + 1);

    //If... else... statement to return the fortune.
    if (num === 1) {
        return "Doflamingo will make you shoot yourself.";

    } else if (num === 2){
        return "Candy will make you disappear and will make you a slave without anyone knowing you completly.";

    } else if (num === 3){
        return "Law cuts off your heads using his ability to feed the Sea Emperors.";

    } else if (num === 4){
        return "Carrot will bite you to death.";

    } else if (num === 5){
        return "Ceasar's laugh will annoy you to death.";

    } else if (num === 6){
        return "Buggy's nose is so stupid, you die by laugther.";

    } else if (num === 7){
        return "You laughed at Pica's laugh, which made you all but blood on the wall.";

    } else if (num === 8){
        return "Akainu found you and executed you right at the spot.";

    } else if (num === 9){
        return "You don't eat and you threw away Sanji's food, he barbecued you to feed you.";

    } else if (num === 10){
        return "You pissed off Big Mama. She then steals your soul.";

    }
}

function previousFortunes(){
}

console.log(pastFortunes);
console.log(newFortune);