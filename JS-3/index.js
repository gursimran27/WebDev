console.log('hi');

let a='love';
let b=new String('babbar');

console.log(typeof(a));
console.log(typeof(b));

console.log(a[2]);
console.log(a.toLocaleUpperCase());

let message='this is first message';
let words=message.split(' ');
console.log(words);  





let date=new Date();
// or
let date2=new Date('january 27 2003 08:15');
// or
let date3=new Date(1998,5,20,7);
// month is 0 based indexing
console.log(date3);


date3.setFullYear(1001);
console.log(date3);

console.log(date3.getMonth());



                // *! array
let arr=[1,4,5,7];
console.log(arr);

            // **insertion
// end
arr.push(9);
console.log(arr);
// start
arr.unshift(8);
console.log(arr);
// anywhere
arr.splice(1,0,'a','b','c','d');
console.log(arr);



// **searching
console.log(arr.includes(50));
console.log(arr.indexOf(50));


// in referance array having objcts
// array of objects
let course=[
    {no:1,naam:'love'},
    {no:2,naam:'babbar'}
];

// here indexof() and include() method donot work

// predicate func return an object 
   let ans= course.find(function(course){
        return course.naam =='babbar';
     })

     console.log(ans);

    //  or
    let ans2=course.find(course=>course.naam==='love');
    console.log(ans2); 




            //*! remove
let arr2=[1,2,3,4];

arr2.pop();
console.log(arr2);

arr2.shift();
console.log(arr2);

arr2.splice(1,1);
console.log(arr2);

