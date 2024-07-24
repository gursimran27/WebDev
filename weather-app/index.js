const userTab=document.querySelector("[data-userWeather]");
const searchTab=document.querySelector("[data-searchWeather]");

const userContainer=document.querySelector(".weather-container");
const grantAccessContainer=document.querySelector(".grant-location-container");
const searchForm=document.querySelector("[data-searchForm]");
const loadingScreen=document.querySelector(".loading-container");
const userInfoContainer=document.querySelector(".user-info-container");



//initial variables
let currrentTab=userTab;  //default selected
const API_KEY='26905ec45fe850a28461f51c57247fb5';
//added bg-color to current-tab name
currrentTab.classList.add('current-tab'); 


//pending work
getFromSessionStorage(); 


function switchTab(clickedTab){
    if(currrentTab!=clickedTab){
        // remove bg-color 
        currrentTab.classList.remove("current-tab");
        currrentTab=clickedTab;
        // added bg-color to new clicked tab
        currrentTab.classList.add("current-tab");


            if(!searchForm.classList.contains("active")){   //if search form-continer donot contain active class mean input search is invissible then make it vissible
                // kya search form wala container is invissible, if yes then make it vissible
                userInfoContainer.classList.remove("active");
                grantAccessContainer.classList.remove("active");

                searchForm.classList.add("active"); 
            }
            else{
                //mai phele search wale tab pr tha,ab your weather tab vissible krna hai

                searchForm.classList.remove("active");
                userInfoContainer.classList.remove("active");

                // ab mai your weather tab me aagaya hu, toh weather bi display krna poadega, so let's check local storage first for coordinates , if we haved saved them there
                getFromSessionStorage(); 
                //for displaying weather on ur current location
            }
    }
}

    // when we clicked on a tab i.e either user or search tab
userTab.addEventListener('click',()=>{
    //pass clicked tab as inuput parameter
    switchTab(userTab);
});

searchTab.addEventListener('click',()=>{
    //pass clicked tab as inuput parameter
    switchTab(searchTab);
});




// check if coordinates are already present in session storage
function getFromSessionStorage()
{
    const localCoordinates=sessionStorage.getItem("user-coordinates");
    if(!localCoordinates){
        // agar local coordinates nahi mille
        // mean location access is not given so make granacceslocation window vissible

        grantAccessContainer.classList.add("active");
        // then user will click on button of this tab
    }
    else{
        // if local coordinates are there in local storage

        const coordinates=JSON.parse(localCoordinates); //convert json string to json object
        fetchUserWeatherInfo(coordinates);
    }
}


async function fetchUserWeatherInfo(coordinates){
    const {lat,lon}=coordinates;  //because the cordinates is also an object

    // now time to show loader
    // make grant conatainer invissible
    grantAccessContainer.classList.remove("active");
    // make loader vissible
    loadingScreen.classList.add("active");

    // API call
    try{
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);

        const data=await response.json();

        // now make loader invissible
        loadingScreen.classList.remove('active');
        userInfoContainer.classList.add("active");

        renderWeatherInfo(data);
    }
    catch(err){
        loadingScreen.classList.remove("active");
        // HW
    }
}




function renderWeatherInfo(weatherInfo){
    // firstly we have to fetch the elements


    const cityName=document.querySelector("[data-cityName]");
    const countryIcon=document.querySelector("[data-countryIcon]");
    const desc=document.querySelector("[data-weatherDesc]");
    const weatherIcon=document.querySelector("[data-weatherIcon]");
    const temp=document.querySelector("[data-temp]");
    const windSpeed=document.querySelector("[data-windSpeed]");
    const humidity=document.querySelector("[data-humidity]");
    const cloudiness=document.querySelector("[data-clouds]");


    // fetch values from weatherInfo object and putin UI elements

                     //** use of OPTION CHAINING OPERATOR
    // use json formatter website to see how the data is fetched and how to use them in optionsl chainnig operator


    cityName.innerText=weatherInfo?.name;

    // we use a CDN for country icon
    countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    // tolowecase() will convert to lowecase
    
    desc.innerText=weatherInfo?.weather?.[0]?.description;
    
    // we use a CDN for weather icon
    weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;

    temp.innerText=`${weatherInfo?.main?.temp}°C`;
    windSpeed.innerText = `${weatherInfo?.wind?.speed}m/s`;
    humidity.innerText = `${weatherInfo?.main?.humidity}%`;
    cloudiness.innerText = `${weatherInfo?.clouds?.all}%`;


}





// step 2     step 1 is down
function getLocation(){
    if(navigator.geolocation){  //check if geolocation feature is availaibe on user deivice
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
       //HW - show an alert for no gelolocation support available
    }
}

function showPosition(position){
    const userCoordinates={  //object created
        lat: position.coords.latitude,
        lon: position.coords.longitude
    };

    sessionStorage.setItem("user-coordinates",JSON.stringify(userCoordinates)); //stored in form of string

    fetchUserWeatherInfo(userCoordinates);
}



const grantAccessButton=document.querySelector("[data-grantAccess]");

// step1
grantAccessButton.addEventListener('click',()=>{
    getLocation();
});





                        // now if user click on search weather tab

const searchInput=document.querySelector("[data-searchInput]"); //search input 

searchForm.addEventListener("submit",(e)=>{  //clicked on search button
    e.preventDefault();

    let cityName=searchInput.value;

    if(cityName==="")   
        return;

    else{
        fetchSearchWeatherInfo(cityName);
    }
});



async function fetchSearchWeatherInfo(city){

    // make loader vissible
    loadingScreen.classList.add("active");
    userInfoContainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");


    try{
    const response=await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    
    const data=await response.json();

    loadingScreen.classList.remove("active");
    userInfoContainer.classList.add("active");

    renderWeatherInfo(data);
    }
    catch(err){
        loadingScreen.classList.remove("active");
        // HW
    }
}