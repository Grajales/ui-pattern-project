// let urlTest = "https://www.iqair.com/colombia"
// console.log(urlTest);
// let imgHov = document.createElement('div');
// imgHov.setAttribute('src',urlTest);
// document.querySelector(".cell").appendChild(imgHov)

//let url = 'https://cors-anywhere.herokuapp.com/https://www.iqair.com/air-pollution-data-api/'
let url = 'https://swapi.dev/api/starships/';
//let url ='https://cors-anywhere.herokuapp.com/http://api.airvisual.com/v2/states?country=China&key={{b7cbb739-84a6-45f5-9990-10207ec9d851}}'
//let url ='https://cors-anywhere.herokuapp.com/http://api.airvisual.com/v2/states?country=China'
function setName(e) {
fetch(url, {
//   headers: {
//       'x-api-key': "b7cbb739-84a6-45f5-9990-10207ec9d851" key for iqair
//   }
})
          .then(res => res.json())
          .then(json => {
             console.log(json)
             console.log(json.results[0].name)
             e.target
             let imgClick = document.createElement('div');
             imgClick.innerHTML = json.results[0].name
             e.target.before(imgClick)
           })
          .catch(err => console.log('oops something went wrong', err))
        }
let button1 = document.querySelector("button")
button1.addEventListener('click', setName)