"use strict";

window.addEventListener('load', Initieer);
//globals
var dataLessen;
var divJSONFeedback;
var divJSONAsString;
var divJSONUitgebreid;
var slcLocatie;


function Initieer() {
  // DOM elementen ophalen
  divJSONFeedback = document.querySelector("#divJSONFeedback");
  divJSONUitgebreid = document.querySelector("#divJSONUitgebreid");
  slcLocatie = document.querySelector("#slcLocatie");
  divJSONAsString = document.querySelector("#divJSONAsString");

  // Eventlisteners toevoegen
  slcLocatie.addEventListener("change", ToonInhoudLessen);
  //JSON ophalen
  dataLessen = JSON.parse(lessen);
  // Startup Functies na inladen DOM
  VulInfo();
  VulSelect();
  ToonInhoudLessen();
}


// Functies
/**
 * function om de lijst met vakken
 * te vullen
 */
function VulSelect()
{
   //for in lus
   for(let lokaal in dataLessen)//for key in array[]
   {
      slcLocatie.options.add(new Option(lokaal,lokaal));
   }
   //foreach simuleren
  /*  Object.keys(dataLessen).forEach(lokaal => 
    {
      slcLocatie.options.add(new Option(lokaal,lokaal));
    }); */

}
/**
 * fills the divs with lessen
 */
function ToonInhoudLessen() 
{
    divJSONUitgebreid.innerHTML = "";
    //haal het geselecteerde lokaal op
    let selectie = slcLocatie.options[slcLocatie.selectedIndex].value;
    //haal de lessen op
    let lessen = dataLessen[selectie];
    //controleren of lessen een array is
    if(Array.isArray(lessen))
    {
        //hier hebben we lus nodig
        lessen.forEach(les => 
          {
              divJSONUitgebreid.append(CreateDivision(les));
          });
    }
    else
    {
        //hier niet
        divJSONUitgebreid.append(CreateDivision(lessen));
    }
}


/**
 * makes a new div with object content
 * @param {*} objectLes 
 * lesinhoud": "JavaScript",
   "module": "WFB",
   "dag": "maandag",
   "lokaal": "K1.012
 */
function CreateDivision(objectLes)
{
    let newDiv = document.createElement('div');
    newDiv.classList.add('les');
    for(let key in objectLes)
    {
      newDiv.innerHTML += `${key}:${objectLes[key]}<br/>`;
    }
    return newDiv;
}

function VulInfo() 
{
  // INFO :
  // Wanneer de JSON-file van een server komt(of in txt formaat is) moeten we deze omzetten naar een JSON-Object 
<<<<<<< HEAD
  //vangt de JSON objecten op na parsen
  let JSONlessen = JSON.parse(lessen);
=======
  
  let JSONlessen;
>>>>>>> d0ba386f548defd7ee2857dc7cc582fe26f8c2ac
  
  // Wijzigen van de inhoud
  JSONlessen.lesinhoud = "WFA";
  JSONlessen.lesgever = "MDM";
  // Dot notatie
  divJSONFeedback.innerHTML = `${JSONlessen.lesinhoud}`;
  // Array notatie
  divJSONFeedback.innerHTML = `${JSONlessen['lesinhoud']}`;
  // Eventueel terug omzetten naar een string 
  let JSONstr = JSON.stringify(JSONlessen);
  console.log(JSONstr);
}

