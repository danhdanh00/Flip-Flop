const size = 4;

let currenID = null;


const getE = (e) => document.querySelector(e);
const getEList = (e) => document.querySelectorAll(e);

const getSquare = () => {
    let getNumber = [...Array.from(Array(size*2).keys()), ...Array.from(Array(size*2).keys())]
    console.log('getSquare ~ getNumber',getNumber);

    let randomId =[];
    let lengthgetNumber = getNumber.length;
    let text=0;

    while (lengthgetNumber--) {
        text = Math.floor(Math.random() * (lengthgetNumber + 1));
        console.log('getSquare ~ text',text);

        randomId.push(getNumber[text]);
        console.log('getSquare ~ radomId',randomId);

        getNumber.splice(text, 1);
        console.log('getSquare ~ getNumber',getNumber);
      }

    let listSquare='';
    for (let i = 0; i < randomId.length; i++) {
        listSquare += `<div class='square' idsquare='${randomId[text]}'></div>`;
    }
    getE('#play').innerHTML = listSquare;
    
    
}

getSquare();