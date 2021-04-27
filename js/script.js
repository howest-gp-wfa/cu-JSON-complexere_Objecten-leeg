"use strict";

window.addEventListener('load', Initieer);
//globals
var dataLessen;
var divJSONFeedback;
var divJSONAsString;
var divJSONUitgebreid;
var slcLocatie;


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
	dataLessen = JSON.parse(lessen);
	//console.log(dataLessen);
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
	//loop over campussen en voeg toe aan select lijst
	//for in om over object properties te gaan


}
/**
 * fills the divs with lessen
 */
function ToonInhoudLessen() 
{
 
	//check if array

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
    //create div with object props

	//use for in to loop over properties
	
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



