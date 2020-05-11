"use strict";

window.addEventListener('load', Initieer);

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
   
}
/**
 * fills the divs with lessen
 */
function ToonInhoudLessen() 
{
  
}


/**
 * makes a new div with object content
 * @param {*} objectLes 
 */
function CreateDivision(objectLes)
{
  
}

function VulInfo() 
{
  // INFO :
  // Wanneer de JSON-file van een server komt(of in txt formaat is) moeten we deze omzetten naar een JSON-Object 
  
  let JSONlessen;
  
  // Wijzigen van de inhoud
  
  // Dot notatie
  
  // Array notatie
  
  // Eventueel terug omzetten naar een string 
  
}

