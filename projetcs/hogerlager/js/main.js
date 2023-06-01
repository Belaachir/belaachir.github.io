
const welkom = 'Welkom bij het spel';// Welkomstbericht aan de bezoeker
alert(welkom);
const regels ='regels van het spel'; // De regels van het spel
alert(`
"regels van het spel"
•Het spel is voor mensen vanaf 12 jaar;
•Je moet eerst een gebruikersnaam kiezen voordat je met het spel kunt beginnen;
•Je start met 5 punten;
•Als je 10 punten hebt dan heb je gewonnen en begint het spel opnieuw;
•Als je 0 punten hebt dan heb je nog een kans om je punten te verhogen;
•Als je alle punten verliest dan heb je verloren en kun je opnieuw beginnen.
`);
let user = prompt('Wat is jou naam?');//  Gebruikersnaam
alert("Welkom"+" "+ user);
if(user == ""){
    window.location.href = "index.html";
}
const age = 12;// minimaal Leeftijd van de gegbruiker
let userAge = prompt("Hoe oud ben je ?");
if(age <= userAge){
    alert("U bent"+" "+ userAge);
    alert('U ben welkom om het spel te starten');
}
else{
    alert("U bent"+" "+ userAge);
    alert('Je kunt het spel helaas niet spelen');
    window.location.href = "sorry.html"

}

let score = 5;
let number = (Math.floor (Math.random()*50));
document.getElementById("demo").innerHTML =  number;
console.log(number);
document.getElementById("user").innerHTML = "Gebruikersnaam:"+" "+ user;
function hoger() {
    let nummer = (Math.floor (Math.random()*50));
    document.getElementById("newNumber").innerHTML =  nummer;
    console.log(nummer);
    if (nummer > number) {   
        score = score + 1;     
        document.getElementById("text").innerHTML= "Goed";
        document.getElementById("text").style.color = "green";
        document.getElementById("score").innerHTML= score;
        console.log("Goed");
        end();
    } else{
        score = score-1;
        document.getElementById("text").innerHTML= "Fout";
        document.getElementById("text").style.color = "red";
        document.getElementById("score").innerHTML= score;
        console.log("Fout");
        end();
    }

}
    function lager() {
        let nummer = (Math.floor (Math.random()*50));
        document.getElementById("newNumber").innerHTML =  nummer;
        console.log(nummer);
        if (nummer < number) {
            score = score+1;
            document.getElementById("score").innerHTML= score;
            document.getElementById("text").innerHTML= "Goed";
            document.getElementById("text").style.color = "green";
            console.log("Goed");
            end();
        } else{
            score = score-1;
            document.getElementById("text").innerHTML= "Fout";
            document.getElementById("text").style.color = "red";
            document.getElementById("score").innerHTML= score;
            console.log("Fout");
            end();
        }

}        function end() {
    if(score == -1){
        // alert("Je hebt verloren");
        // confirm("Het spel gaat opnieuw beginnen")
        window.location.href = "verloren.html"
        // setTimeout(function(){location.reload()},100)
    }if(score == 10){
        // alert("Je hebt gewonnen");
        // confirm("Het spel gaat opnieuw beginnen")
        window.location.href = "winner.html"
        // setTimeout(function(){location.reload()},100)
    }
}
