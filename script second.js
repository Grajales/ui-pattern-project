

//let url = 'https://cors-anywhere.herokuapp.com/https://v6.exchangerate-api.com/v6/064a6548cb3cd714499134cd/latest/USD'
let url= "https://cors-anywhere.herokuapp.com/https://www.scorebat.com/video-api/v1/"
function setName(e) {
fetch(url, {
//   headers: {
//       'x-api-key': "064a6548cb3cd714499134cd" //excahnge rate API key 
//   }
})
          .then(res => res.json())
          .then(json => {
             console.log(json)
             console.log(json[1].title)})
        //      console.log(json[0].embed)
        //      let imgClick = document.createElement('div');
        //      imgClick.innerHTML = json[0].embed
        //      e.target.before(imgClick)
        //    })
        //   .catch(err => console.log('oops something went wrong', err))
     
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); 
            js.id = id;
            js.src = 'https://www.scorebat.com/embed/embed.js?v=arrv';
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'scorebat-jssdk'));
        //https://www.scorebat.com/embed/
    }



let button1 = document.querySelector("button")
button1.addEventListener('click', setName)