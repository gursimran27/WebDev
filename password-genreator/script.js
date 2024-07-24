
const inputSlider=document.querySelector("[data-lengthSlider]");
const lengthDisplay=document.querySelector("[data-lengthNumber]");


const passwordDisplay=document.querySelector("[data-passwordDisplay]");
const copyBtn=document.querySelector("[data-copy]");
const copyMsg=document.querySelector("[data-copyMsg]");
const uppercaseCheck=document.querySelector("#uppercase");
const lowercaseCheck=document.querySelector("#lowercase"); 
const numberCheck=document.querySelector("#numbers");
const symbolCheck=document.querySelector("#symbols");
const indicator=document.querySelector("[data-indicator]");
const generateBtn=document.querySelector(".generateButton");

const allCheckBox=document.querySelectorAll("input[type=checkbox]"); //it will return a array like structure

let symbols='~!@#$%^&*()-_+={}[]|;"<>,:.?/\`';

// default
let password="";
let passwordLength=10;
let checkCount=0;

// set strength circle color to gray 
 setIndicator("#ccc");


// set password length and reflect it on UI
 function handleSlider(){
    inputSlider.value=passwordLength;
    lengthDisplay.textContent=passwordLength;

        // *! important
    const min=inputSlider.min;
    const max=inputSlider.max;
    inputSlider.style.backgroundSize=((passwordLength - min)*100/(max-min)) + '% 100%';  //represent width and height respectively so according to that it will get color
}

handleSlider();

function setIndicator(color){
    indicator.style.backgroundColor=color;
    // shadow homework
    indicator.style.boxShadow=`0px 0px 12px 1px ${color}`;
}


function getRandomInteger(min,max){
   return Math.floor (Math.random() * (max-min)) + min ;
//    now above function will give random number from min to max
//    math.floor will round of the value
}


function generateRandomNumber(){
    return getRandomInteger(0,9);
}

function generateLowerCase(){
  return String.fromCharCode(getRandomInteger(97,123));   //97->a and 123->z ASCII value
//   string.fromcharcode convert integer to char
}


function generateUpperCase(){
  return String.fromCharCode(getRandomInteger(65,91));   //65->A and 91->Z ASCII value
//   string.fromcharcode convert integer to char
}


function generateSymbols(){
    const randNum=getRandomInteger(0,symbols.length);
    return symbols.charAt(randNum);
}


function calStrength(){
    let hasUpper=false;
    let hasLower=false;
    let hasNum=false;
    let hasSym=false;

    if(uppercaseCheck.checked) 
        hasUpper=true;
    if(lowercaseCheck.checked)
        hasLower=true;
    if(numberCheck.checked)
        hasNum=true;
    if(symbolCheck.checked)
        hasSym=true;


    if(hasUpper && hasLower && (hasNum || hasSym) && passwordLength>=8)
        setIndicator('#0f0');

    else if((hasLower || hasUpper) && (hasNum || hasSym) && passwordLength>=6)

        setIndicator('#ff0');

    else
        setIndicator('#f00');
}



async function copyContent(){
    //    await is used so that code will not shift to next line untill this is completed
    // as it return a promise so it can fullfill or get reject(throw error)
    
    // error handling
    try{
        await navigator.clipboard.writeText(passwordDisplay.value);

        copyMsg.innerText='Copied';
    }
    catch(e){
        copyMsg.innerText='Failed';
    }

        // to make copy walla span vissible
    copyMsg.classList.add('active');
    // this will add active class in css

    setTimeout(function(){
        copyMsg.classList.remove('active');
    }, 2000);
}


function shuflePassword(array){
    //fisher yates method algorithm
    for(let i=array.length-1;i>0;i--){
        const j=Math.floor(Math.random() * (i+1));   //0 to i+1 range
        //swapping
        const temp=array[i];
        array[i]=array[j];
        array[j]=temp;
    }
    let str="";
    array.forEach((element) => {str+=element}); //convert arrat to string
    return str;
}





// insted of eventlistner we can also use onclick


// the below function will count number of checked checkbox every time when a change is allpied to a checkox
function handleCheckBoxChanges(){
    checkCount=0;
    allCheckBox.forEach((checkbox)=>{
        if(checkbox.checked)
            checkCount+=1;
    });

    //special case
    if(passwordLength<checkCount){
        passwordLength=checkCount;
        handleSlider();   //to reflect changes on UI
    }
}
allCheckBox.forEach((checkbox) => {  //foreach loop
     //checkbox is a just a parameter variable
    checkbox.addEventListener("change",handleCheckBoxChanges);
    //basically on each change on checkbox it will count number of chechbox checked
});






inputSlider.addEventListener('input',(event)=>{
    passwordLength=event.target.value;
    handleSlider(); //so to update the UI with new password length
});


copyBtn.addEventListener('click',()=>{
    if(passwordDisplay.value || password.length>0){  //here we are checking that if password is generated (non empty) then only we call copy function
        copyContent();
    }
});



generateBtn.addEventListener("click",()=>{
    //none of checkbox is selected
    if(checkCount<=0)  return;

    // special case
    if(passwordLength<checkCount){
        passwordLength=checkCount;
        handleSlider();   //to reflect changes on UI
    }

    console.log('starting the journy');
    //let's start the journy to find new password

    //remove old password
    password="";
    
    //lets put the stuff mentioned by the checkbox
    // if(uppercaseCheck.checked){
    //     password+=generateUpperCase();
    // }
    // if(lowercaseCheck.checked){
    //     password+=generateLowerCase();
    // }
    // if(numberCheck.checked){
    //     password+=generateRandomNumber();
    // }
    // if(symbolCheck.checked){
    //     password+=generateSymbols();
    // }
    
                    //better method


    let funcArr=[]; //it will store fnuctions name

    if(uppercaseCheck.checked)
        funcArr.push(generateUpperCase);

    if(lowercaseCheck.checked)
        funcArr.push(generateLowerCase);

    if(numberCheck.checked)
        funcArr.push(generateRandomNumber);

    if(symbolCheck.checked)
        funcArr.push(generateSymbols);


    //compulsory addition i.e those checkbox that are checked

    for(let i=0;i<funcArr.length;i++){
        password+=funcArr[i](); //func call
    }
    console.log('compulsory addition done');

    //remaning addition  i.e all remaning randomly
    for(let i=0;i<passwordLength-funcArr.length;i++){
        let randIndex=getRandomInteger(0,funcArr.length);
        password+=funcArr[randIndex]();
    }
    console.log('remaning addition done');


    //to shuffle the password
    password= shuflePassword(Array.from(password)); //passed password as an array because of fisher yates algorith
    console.log('shuffling done');


    //show in UI
    passwordDisplay.value=password;

    //calculating strength func call
    calStrength();
    console.log('UI addition done');

    // console.log(checkCount);

});