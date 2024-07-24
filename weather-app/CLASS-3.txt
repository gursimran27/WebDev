
const API_KEY='26905ec45fe850a28461f51c57247fb5';

  function renderWeatherInfo(data){
                   // to show on UI
        let newPara=document.createElement('p');
        newPara.textContent=`${data?.main?.temp.toFixed(2)} ℃`;

        document.body.appendChild(newPara);
}   


async function fetchWeatherDetails(){  //best practice
    try{
        let city='goa';
    
        const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    
        const data=await response.json();
        console.log("Weather data:-> " , data);

        renderWeatherInfo(data);  //best practice
    }

    catch(err){

    }
}


async function getCustomWeatherDetails(){

    try{
        let lat=17.6333;
    let lon=18.3333;

    const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);

    const data=await result.json();

    console.log(data);
    }
    
    catch(err){
        console.log("Error Found" , err);
    }
}


function switchTab(clickedTab) {

    apiErrorContainer.classList.remove("active");
  
    if (clickedTab !== currentTab) {
      currentTab.classList.remove("current-tab");
      currentTab = clickedTab;
      currentTab.classList.add("current-tab");
  
      if (!searchForm.classList.contains("active")) {
        userInfoContainer.classList.remove("active");
        grantAccessContainer.classList.remove("active");
        searchForm.classList.add("active");
      } 
      else {
        searchForm.classList.remove("active");
        userInfoContainer.classList.remove("active");
        //getFromSessionStorage();
      }
  
      // console.log("Current Tab", currentTab);
    }
}



                    //to get current location

  function getLocation(){
    if(navigator.geolocation){  //check if geolocation feature is availaibe on user deivice
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        console.log("no geolocation support");
    }
  }


  function showPosition(position){
    let lat=position.coords.latitude;
    let longi=position.coords.longitude;

    console.log(lat);
    console.log(longi);
  }
