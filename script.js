console.dir(document);

const btn = document.getElementById("btn");


function random (number) {
  return Math.floor(Math.random() * (number + 1));
};

btn.addEventListener(`click` , (event) => {
  const rndCol = `rgb(${random(255)},${random(255)},${random(255)})`;
  document.body.style.backgroundColor = rndCol;
  
  

} );

// btn.addEventListener("mouseout" , (e) => {
//   alert("the mouse is out of the button")
// });


// An event listener is just a method with 2 parameters / argument;







// document.addEventListener(`click`, (e) => {
//   // console.log(`This element was clicked` + e.target);
//   // console.dir(e.target);
//   if(e.target.classList.contains('box')){
//     console.log(`it is a box`);
//     e.target.style.backgroundColor = 'green';
    
//     e.target.textContent = `clicked`
//   }
// })

const classList = document.getElementsByClassName("box");
for(let i = 0 ; i < classList.length; i++) {
  classList[i].addEventListener(`click`, (e) => {
    if(e.target.style.backgroundColor === 'green') {
      e.target.style.backgroundColor = 'red';
      e.target.textContent = ``
      
    }else {
      e.target.style.backgroundColor = 'green';
      e.target.textContent = `clicked`
    }
    
  });

};





