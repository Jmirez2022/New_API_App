let One;
let Two;

window.onload = function () {
    arrOne();
    arrTwo();
}

const arrOne = () => {
    const random = Math.floor(Math.random() * 905) 
    fetch(`https://pokeapi.co/api/v2/pokemon/${random1}`)
     .then((res) => res.json())
     .then((array) => {
        One = array
     })
     .catch((err) => {
       document.querySelector(".BoxOne").innerHTML = 
       `<h4>Not found!</h4>`;
     });
};

const arrTwo = () => {
    const random2 = Math.floor(Math.random() * 905) 
     
    fetch(`https://pokeapi.co/api/v2/pokemon/${random2}`)
     .then((res) => res.json())
     .then((array) => {
       Two = array
     })
     .catch((err) => {
       document.querySelector(".BoxTwo").innerHTML = 
       `<h4>Pokemon not found!</h4>`;
     });
     
 };

 const getOne = () => {
    document.querySelector(".BoxOne").innerHTML = `
       <div>
         <img
           src="${One.sprites.other["official-artwork"].front_default}"
           alt="${capFirstLetter(One.name)}" />
       </div>
       <div class="infoOne">
         <h3>${capFirstLetter(One.name)}</h3>
         <p> Id: ${One.id}</p>
         <p>Weight: ${One.weight}</p>
         <p>Base Experience: ${One.base_experience}</p>          
         <p>stat: ${One.stats[1].base_stat}</p>          
       </div>`;
 };


 const getTwo = () => {
    document.querySelector(".BoxTwo").innerHTML = `
       <div>
         <img
           src="${Two.sprites.other["official-artwork"].front_default}"
           alt="${capFirstLetter(Two.name)}" />
       </div>
       <div class="infoOne">
         <h3>${capFirstLetter(Two.name)}</h3> 
         <p> Id: ${Two.id}</p>
         <p>Weight: ${Two.weight}</p>
         <p>Base Experience: ${Two.base_experience}</p>          
         <p>stat: ${Two.stats[1].base_stat}</p>          
       </div>`;
 }


 function capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
 };
 


 const battle = () => {
    const poke1Info = One.stats[1].base_stat;
    const poke2Info = Two.stats[1].base_stat;
    if (poke1Info > poke2Info) {
       document.querySelector(".result").innerHTML = 
       `<p> ${capFirstLetter(One.name)} <br> is a winner! </p>` 
    } else if (poke2Info > poke1Info) {
       document.querySelector(".result").innerHTML = 
       `<p> ${capFirstLetter(Two.name)} <br> is a winner! </p>`
    } else if (poke1Info === poke2Info) {
       document.querySelector(".result").innerHTML = 
       `<p> It\`s a tie! </p>`
    }
 };



 const reset = () => {
    document.querySelector(".BoxTwo").innerHTML = '';
    document.querySelector(".BoxOne").innerHTML = '';
    document.querySelector(".result").innerHTML = '';
    document.querySelector(".result").innerHTML = '';
    document.querySelector(".result").innerHTML = '';
    arrOne() = '';
    arrTwo() = '';
    
 }
