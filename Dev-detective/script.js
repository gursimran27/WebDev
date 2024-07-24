//Variables
const searchbar = document.querySelector(".searchBar-container");
const profilecontainer = document.querySelector(".profile-container");


const root = document.documentElement.style;
// document.documentElement will return <html> element


        // *! important
// function
const get = (param) => document.getElementById(`${param}`);


// API
const url = "https://api.github.com/users/";


const noresults = get("no-results");
const btnmode = get("btn-mode");
const modetext = get("mode-text");
const modeicon = get("mode-icon");
const btnsubmit = get("submit");
const input = get("input");
const avatar = get("avatar");
const userName = get("name");
const user = get("user");
const date = get("date");


const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


const bio = get("bio");
const repos = get("repos");
const followers = get("followers");
const following = get("following");
const user_location = get("location");
const page = get("page");
const twitter = get("twitter");
const company = get("company");



let darkMode;


//**  EVENT LISTNER 
// there are total 4 event listner in this project  

// 1
btnsubmit.addEventListener("click",function(){
    // check if user had enter some github profile
    if(input.value!==""){
        getUserData(url + input.value); // + mean append
    }
});


// 2
input.addEventListener(
    "keydown",
    function (e) {
      if (e.key == "Enter") {
        if (input.value !== "") {
          getUserData(url + input.value);
        }
      }
    },
    false
  );


// 3
// wher user try to enter in input 
input.addEventListener("input", ()=>{
    noresults.style.display="none";
});


// 4
btnmode.addEventListener("click",()=>{
    if(darkMode==false)
        darkModeProperties();
    else{
        lightModeProperties();
    }
});


    // **functions

// API CALL
async function getUserData(gitUrl){
    try{
        const response=await fetch(`${gitUrl}`);
        const data=await response.json();
    
        console.log(data);

        updateProfile(data);
    }

    catch(err){
        console.log(err);
    }
}



// RENDER
function updateProfile(data){
    // check if we retrive the data from api call
    if(data.message!=="Not Found"){
        // as we get profile so hide the no result content form input 
        noresults.style.display="none";

        function checkNull(para1,para2){
            if(para1==="" || para1===null){
                para2.style.opacity=0.5;
                para2.previousElementSibling.style.opacity = 0.5;

                return false;
            }
            else{
                return true;
            }
        }
        // paste the giturl on browser to see how data is reterived

        avatar.src=`${data.avatar_url}`;

        userName.innerText= data.name===null?data.login : data.name;

        //talking about anchor tag
        user.innerText=`@${data.login}`;
        user.href=`${data.html_url}`;
        
                    // date
        // see the data reteived from API on browser for more better understanding of the below code
        const datesegments=data.created_at.split("T").shift().split("-");
        
        date.innerText=`Joined ${datesegments[2]} ${months[datesegments[1] - 1]} ${datesegments[0]}`;  // -1 is because of 0 based indexing


        bio.innerText=data.bio==null?"This profile has no bio" : `${data.bio}`;

        repos.innerText=`${data.public_repos}`;

        followers.innerText = `${data.followers}`;
        
        following.innerText = `${data.following}`;


        user_location.innerText=checkNull(data.location,user_location) ? data.location : "Not Available";

        // the below is talking about anchor tag
        page.innerText = checkNull(data.blog, page) ? data.blog : "Not Available";
        page.href = checkNull(data.blog, page) ? data.blog : "#";

        // below is talking about anchor tag
        twitter.innerText = checkNull(data.twitter_username, twitter) ? data.twitter_username : "Not Available";
        twitter.href = checkNull(data.twitter_username, twitter) ? `https://twitter.com/${data.twitter_username}` : "#";

        company.innerText = checkNull(data.company, company) ? data.company : "Not Available";



 
        searchbar.classList.toggle("active");  

        profilecontainer.classList.toggle("active");

    }

    else{
        noresults.style.display="block";
    }
}




// SWITCH TO DARK MODE
function darkModeProperties(){
    root.setProperty("--lm-bg", "#141D2F");
    root.setProperty("--lm-bg-content", "#1E2A47");
    root.setProperty("--lm-text", "white");
    root.setProperty("--lm-text-alt", "white");
    root.setProperty("--lm-shadow-xl", "rgba(70,88,109,0.15)");
    root.setProperty("--lm-icon-bg", "brightness(1000%)");

    modetext.innerText="LIGHT";

    modeicon.src="./assets/images/sun-icon.svg";

    darkMode=true;
    console.log("darkmode changed to " + darkMode);

    localStorage.setItem("dark-mode",true);

    console.log("setting dark mode to true");
}



// SWITCH TO LIGHT MODE
function lightModeProperties(){
    root.setProperty("--lm-bg", "#F6F8FF");
    root.setProperty("--lm-bg-content", "#FEFEFE");
    root.setProperty("--lm-text", "#4B6A9B");
    root.setProperty("--lm-text-alt", "#2B3442");
    root.setProperty("--lm-shadow-xl", "rgba(70, 88, 109, 0.25)");
    root.setProperty("--lm-icon-bg", "brightness(100%)");
    
    modetext.innerText="DARK";
    
    modeicon.src = "./assets/images/moon-icon.svg";
    
    darkMode=false;

    console.log("darkmode changed to " + darkMode);

    localStorage.setItem("dark-mode", false);

    console.log("setting dark mode to false");
}





// INITILIZE UI
function init(){

    //initialise dark-mode variable to false;
   //darkMode = true -> dark mode enable karna h 
   //darMode = false -> light mode enable karna h 
    darkMode=false;

      //HW
   // const prefersDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

     const value=localStorage.getItem("dark-mode");

     if(value=== null){ 
        localStorage.setItem("dark-mode", darkMode);
         lightModeProperties();
    }

    else if(value== "true"){//in local storage data is  stored in form of strings
    console.log("truer k andar");

        darkModeProperties();
    }
    
    else if(value=="false"){
    console.log("false k andar");
        lightModeProperties();
    }

    //by default, pranaygupta ki info show krre h UI pr
    getUserData(url + "thepranaygupta");
}


init();