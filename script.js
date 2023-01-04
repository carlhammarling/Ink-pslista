const form = document.querySelector('.card form');
const addBtn = document.querySelector('.card button');
const output = document.querySelector('#output');
const input = document.querySelector('.card input');




//den här funktionen skapar en ny Item i listan.
const createItem = (inputValue) => {


     //bygg ihop ett nytt element, skapa själva elementen var för sig. först en div med class item
     const item = document.createElement('div');
     item.classList.add('item');

    // en p med inputvalue som text
     const p = document.createElement('p');
     p.innerText = inputValue;

     const button = document.createElement('button');
     button.innerText = 'delete';


    //  //Så här skapar man en enkel ta bortfunktion direkt
    //  button.addEventListener('click', () => {
    //     button.parentElement.remove();
    //  })
 

     //lägg till child
     item.appendChild(p)
     item.appendChild(button)

     

    return item;

}



//eventlistener på knappen
addBtn.addEventListener('click', e => {
    e.preventDefault();

    const inputValue = input.value;

    //Förhindra att lägga till tomma rader
    if(inputValue.trim() === '' ) {
        return;
    }

    const item = createItem(inputValue);


   document.querySelector('#output').appendChild(item);


    


    //för att nollställa inputen inför nästa
    // input.value = ""; eller
    form.reset();
})


output.addEventListener('click', (e) => {

    //om innertecten på kanppen e delete
    if(e.target.innerText === 'delete') {
        e.target.parentElement.remove();
    }

    if(e.target.nodeName === 'P') {
        e.target.style.textDecoration = 'line-through';
    }
    if(e.target.nodeName === 'div') {
        e.target.querySelector('p').classList.toggle('line')
    }

    
})




















// //För att kunna spara i local storage behövs en array

// const cart = [
//     {
//         id: crypto.randomUUID(),
//         name: 'Mjölk',
//         complete: false,
//     }
// ];


// const loadCart = () => {
//     cart.forEach(item => {
//         document.querySelector('#output')
//     })
// }


        // //pusha in i array

        // const newItem = {
        //     id:crypto.randomUUID(),
        //     name: inputValue,
        //     complete: false,
        //  };

        //  cart.push(newItem);
         
