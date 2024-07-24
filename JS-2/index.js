console.log('code help');

        // *!simple object createion
// instead of let we can also use var or const

// let rectangle={
//     length: 1,
//     breadth: 2,
//     // above are properties

//     //method or behaviour
//     draw: function(){
//         console.log('drawing rectange');
//     }  
// };

// to access the object
// console.log(rectangle.breadth);
// console.log(rectangle.length);
// rectangle.draw();





    // *!factory function for create the multiple objjects
// use here is camel case notation
function createRectangle(l,b){

    // instead of let we can also write directly return
    // or write return rectange={ };
    let rectangle={
    length: l,
    breadth: b,
  

    draw() {
        console.log('drawing rectange');
    }  
};
    return rectangle;
    // return a object
}


// because of dynamic typing our rectangleobj1 varible can store the object so rectangeobj1 becae an object
let rectangleObj1=createRectangle(9,5);
// above is func call
console.log(rectangleObj1.breadth);
console.log(rectangleObj1.length);
rectangleObj1.draw();


let rectangleObj2=createRectangle(1,10);
console.log(rectangleObj2.breadth);





            // *!constructor function
// use pascal notation
function Rectangle(l,b){
    // this keyword is used to points the current empty object
    this.length=l;
    this.breadth=b;

    this.draw=function(){
        console.log(this.breadth);
    }
}

// object creation using constructor
let a=new Rectangle(8,77);
a.draw();
console.log(a.length);



// *! dynamic nature ofobject
a.color='red';
// this will add a color property in object
console.log(a);
delete a.color;
console.log(a);


        // *! Function are also objects
console.log(Rectangle.name);





// pass by value 
let c=10;

function increaseC(c)
{
    c++;
}
console.log(c);
increaseC(c);
console.log(c);


// pass by referance as object is passed
let d={val:20};
function increaseD(d){
    d.val++;
}

console.log(d.val);
increaseD(d);
console.log(d.val);






// *! itterate over the objects
// simple object createed
let circle={
    ra:5,
    dia:10,
};

// **for-in loop
for(let key in circle){
    // keys are reflected through key variable
    // value are reflected through object-name[key]
    console.log(key,circle[key]);
}




// *!to check if there exist a property in an object
if('length' in circle)
{
    console.log('present');
}
else{
    console.log('absent');
}


if('dia' in circle)
{
    console.log('present');
}
else{
    console.log('absent');
}





// *! object clonning
let src={
    v1:10,
    v2:20,
    v3:200,
};
let dest={};


            // **iteration-method
// for(let key in src){
//     dest[key]=src[key];
// }
// console.log(dest);
// src.v1++;
// console.log(dest);




            // ** assign method
// let ans=Object.assign({},src);
// console.log(ans);
// src.v1++;
// console.log(ans);




            //**spread-method
let ans={};
console.log(ans);
 ans={...src};
console.log(ans);
src.v1++;
console.log(ans);

