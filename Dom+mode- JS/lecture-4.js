

// //promise

// let a=new Promise(function(resolve,reject){
//     setTimeout(function()
//     {
//         console.log('hello');
//     },5000);
//     // reject(new error("hmm"));
//     // resolve(true);
//     resolve(2); 
// });


// // a.then((value)=>{console.log(value);});

// let ans=a.then(()=>{
//     let b=new Promise(function(resolve,reject){
//         resolve('b resolved');
//     });
//     return b;  //this will return promise
// });

// ans.then((value)=>{console.log(value);});





// //make async function

// async function utility(){
//     let delhiMausam=new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log('hot');
//         },5000);
//     });


//     let goaMausam=new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log('cool');
//         },7000);
//     });

//     let dM=await delhiMausam;  //return promise
//     let gM=await goaMausam;

//     return [dM,gM];
// }

// console.log(utility());


// //fetch API
// //get call

// async function utility2()
// {
//     let content=fetch('https://jsonplaceholder.typicode.com/todos/1');
//     let output=(await content).json();
//     console.log(output);
// }

// utility2();





//post call

async function helper()
{
    let option={
        method: 'POST',
		body: JSON.stringify({
		  title: 'gursimran',
		  body: 'code help',
		  userId: '2124129'
		}),
		headers: {
		  "Content-type": "application/json; charset=UTF-8"
		}
    };

    let content=fetch('https://jsonplaceholder.typicode.com/posts',option);

    let response=(await content).json();
    return response;
}

async function utility3()
{
    let ans=helper();
    console.log(ans);
}

utility3();