
//let url = 'https://cors-anywhere.herokuapp.com/https://www.iqair.com/air-pollution-data-api/'
//let url = 'https://cors-anywhere.herokuapp.com/https://api.gbif.org/v1'
let url = 'https://cors-anywhere.herokuapp.com/https://foodish-api.herokuapp.com/api/'
let url1 =  'https://cors-anywhere.herokuapp.com/https://foodish-api.herokuapp.com/api/images/'

//let url = 'https://swapi.dev/api/starships/';
//https://www.exchangerate-api.com/
//let url = 'https://cors-anywhere.herokuapp.com/https://v6.exchangerate-api.com/v6/064a6548cb3cd714499134cd/latest/USD'
//let url= "https://cors-anywhere.herokuapp.com/https://www.scorebat.com/video-api/v1/"
function setName(e) {
  let foodIn = "biryani";
  let foodList=["burger","pizza","biryani","dosa","idly"];
  if (e.target.className == "button1"){
    foodIn = foodList[0];
  }
  if (e.target.className == "button2"){
    foodIn = foodList[1];
  }
  if (e.target.className == "button3"){
    foodIn = foodList[2];
  }
  if (e.target.className == "button4"){
    foodIn = foodList[0];
  }
  if (e.target.className == "button5"){
    foodIn = foodList[4];
  }
  if (e.target.className == "button6"){
    foodIn = foodList[2];
  }


let urlCustom = url1.concat(foodIn);
fetch(urlCustom)
          .then(res => res.json())
          .then(json => {
             console.log(json)
            console.log(json.image)
            // console.log(json[0].embed)
             let imgClick = document.createElement('img');
             imgClick.src = json.image 
             imgClick.style["width"]='200px';
             imgClick.style["height"]='auto';
             
             e.target.before(imgClick)
            
           })
          .catch(err => console.log('oops something went wrong', err))

    }

let button1 = document.querySelector(".button1")
let button2 = document.querySelector(".button2")
let button3 = document.querySelector(".button3")
let button4 = document.querySelector(".button4")
let button5 = document.querySelector(".button5")
let button6 = document.querySelector(".button6")

button1.addEventListener('click', setName)
button2.addEventListener('click', setName)
button3.addEventListener('click', setName)
button4.addEventListener('click', setName)
button5.addEventListener('click', setName)
button6.addEventListener('click', setName)
