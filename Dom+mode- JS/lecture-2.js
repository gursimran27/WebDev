// document.addEventListener('click',function(){
//     console.log('hello');
// });


function test(){
    a.style.background='blue';}

let a=document.querySelector('h1');

a.addEventListener('click',test);

a.removeEventListener('click',test);


let b=document.querySelectorAll('a');
let thirdLink=b[2];
thirdLink.addEventListener('click', function (event){
        event.preventDefault();
        console.log('hello');
});







// let myDiv=document.createElement('div');

// for(let i=1;i<=10;i++)
// {
//     let newELement=document.createElement('p');
//     newELement.textContent='para'+i;

//     newELement.addEventListener('click',function(){console.log('hello!');});

//     myDiv.appendChild(newELement);
// }
// document.body.appendChild(myDiv);







                                // optimizing it

// let myDiv=document.createElement('div');

// function addpara(){
//     console.log('hello!');
// }

// for(let i=1;i<=10;i++)
// {
//     let newELement=document.createElement('p');
//     newELement.textContent='para'+i;

//     newELement.addEventListener('click',addpara);

//     myDiv.appendChild(newELement);
// }

// document.body.appendChild(myDiv);






                            // more optimizing it

// let myDiv=document.createElement('div');

// function addpara(){
//     console.log('hello!');
// }

// myDiv.addEventListener('click',function(event){
//     if(event.target.nodeName==='P')
//      console.log('hello'+event.target.textContent)
// })

// for(let i=1;i<=10;i++)
// {
//     let newELement=document.createElement('p');
//     newELement.textContent='para'+i;

//     myDiv.appendChild(newELement);
// }

// document.body.appendChild(myDiv);








                            // to make event only over span

let art=document.querySelector('article');

art.addEventListener('click',function(event){
    if(event.target.nodeName==='SPAN'){
        console.log('hello'+ event.target.textContent);
    }
})