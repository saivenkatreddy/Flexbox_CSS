'use strict'

function createNewElement(){

    const creatingPElement = document.createElement("p");

    creatingPElement.className = "sample";

    console.log(creatingPElement);

    const valueNeeded = document.getElementById('get it damn it').value;

    const createSomeContent = document.createTextNode("Yes");

    console.log(createSomeContent);

    creatingPElement.appendChild(createSomeContent);

    console.log(creatingPElement);

    const elementCaptured = document.getElementsByClassName('inside');

    console.log(elementCaptured);

    elementCaptured[0].appendChild(creatingPElement);

}