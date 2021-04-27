"use strict";

window.addEventListener('load', Initieer);
//globals
var dataLessen;
var divJSONFeedback;
var divJSONAsString;
var divJSONUitgebreid;
var slcLocatie;
var jsonOnline = 'https://mileto75.github.io/JsonExamples/lessen.json';


async function Initieer() 
{
  // DOM elementen ophalen
  divJSONFeedback = document.querySelector("#divJSONFeedback");
  divJSONUitgebreid = document.querySelector("#divJSONUitgebreid");
  slcLocatie = document.querySelector("#slcLocatie");
  divJSONAsString = document.querySelector("#divJSONAsString");

  // Eventlisteners toevoegen
  slcLocatie.addEventListener("change", ToonInhoudLessen);
  //JSON ophalen uit js file als text

  //json ophalen uit online bron
  
  

  // Startup Functies na inladen DOM
  VulInfo();
  VulSelect();
  ToonInhoudLessen();
  GetFromApi();
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
 * lesinhoud": "JavaScript",
   "module": "WFB",
   "dag": "maandag",
   "lokaal": "K1.012
 */
function CreateDivision(objectLes)
{
    
}

function VulInfo() 
{
  // INFO :
  // Wanneer de JSON-file van een server komt(of in txt formaat is) 
  //moeten we deze omzetten naar een JSON-Object 
  //vangt de JSON objecten op na parsen
  
  // Wijzigen van de inhoud
  
  // Dot notatie
  
  // Array notatie
  
  // Eventueel terug omzetten naar een string 
 
  
}

function ShowLessen(lessen)
{
  
}

function GetFromApi()
{
    
}

