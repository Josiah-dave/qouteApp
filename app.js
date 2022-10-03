
let id = document.getElementById('id')
let advice = document.getElementById('advice')
let btn = document.getElementById ('btn')

const url= `https://api.adviceslip.com/advice`

 fetch(url)
 .then(response => response.json())
   .then(data => {
      console.log(data.slip.advice)
      id.textContent = " #"+data.slip.id
      advice.textContent = data.slip.advice
   })



   function change() {
      fetch(url)
      .then(response => response.json())
        .then(data => {
           console.log(data.slip.advice)
           id.textContent = " #"+data.slip.id
           advice.textContent = data.slip.advice
        })
   }