// we use id to select the count
const countVal=document.querySelector('#counter');
// here countval is element i.e it is whole div i.e <div class="font-bold" id="counter"> 0 </div>


const increment= () =>{
    // get the value from UI
    let value=parseInt(countVal.innerText);
    // insteed of innertext we can also use textContent
    // it will give string so to convert it to integer we use parseInt functtion


    // update the value
    value=value + 1;

    // set the value onto UI
    countVal.innerText=value;
}


const decrement= () =>{
  // get the value from UI
  let value=parseInt(countVal.innerText);
  // it will give string so to convert it to integer we use parseInt functtion


  // update the value
  value=value - 1;

  // set the value onto UI
  countVal.innerText=value;
}