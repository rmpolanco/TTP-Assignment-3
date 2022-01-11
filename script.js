function prob1 (){
    //Selects the node with the 'container' id without using querySelector
    let selector = document.getElementById('container')
    //selector.style.color = 'red'
}
function prob2(){
    //Selects the node with the 'container' id using querySelector
    let selector = document.querySelector('#container')
    //selector.style.color = 'red'
}
function prob3(){
    //Selects all elements with the 'second' class
    let selector = document.getElementsByClassName('second')
    /*for(let element of selector)
    {
        element.style.color = 'red'
    }*/
}
function prob4(){ 
    //Selects the li element in the ol tag with the class of 'third'
    let selector = document.querySelector('ol').querySelector('.third')
    //selector.style.color = 'red'
}
function prob5(){
    //Changes the text of the section with the 'container' tag to 'Hello!'
    let selector = document.getElementById('container')
    selector.innerText = 'Hello!'
}
function prob6(){
    //Adds the 'main' class to the footer div
    let selector = document.querySelector('.footer')
    selector.classList.add('main')
}
function prob7(){
    //Deletes the 'main' class from the footer div
    prob6()
    let selector = document.querySelector('.footer')
    selector.classList.remove('main')
}
function prob8(){
    //Creates a new li element
    let newelement = document.createElement('li')
    return newelement
}
function prob9(){
    //Gives the new li element the text 'four'
    let newelement = prob8()
    newelement.innerText = "four"
    return newelement
}
function prob10(){
    //Appends the new li element to the ul node
    let newelement = prob9()
    document.querySelector('ul').appendChild(newelement)
}
function prob11(){
    //Loops through all of the li's in the ol node and sets their color to green
    let lis = document.querySelector('ol').querySelectorAll('li')
    for(let element of lis)
    {
        element.style.color = 'green'
    }
}
function prob12(){
    //Deletes the div with the footer class
    let tobedeleted = document.querySelector('.footer')
    tobedeleted.parentNode.removeChild(tobedeleted)
}
