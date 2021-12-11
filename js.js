document.oncontextmenu = function(){return false;} //마우스 우클릭금지

// 날씨 api
const api = '4b45e3d69f4f446ddeb89a3517b17037'; //Replace with your API

const iconImg = document.getElementById('weather-icon');
const loc = document.querySelector('#location');
const tempC = document.querySelector('.c');
const pm_10 = document.querySelector('.pm10');
const c_probability = document.querySelector('.cprobability');

window.addEventListener('load', () => {
  let long;
  let lat;
  // Accesing Geolocation of User
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      // Storing Longitude and Latitude in variables
      long = position.coords.longitude;
      lat = position.coords.latitude;
      const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`;
      const fine_dust = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${long}&appid=${api}&units=metric`;

      // Using fetch to get data
      fetch(base)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const { temp, feels_like } = data.main;
          const place = data.name;
          const probability = data.clouds.all;
          const weathericon = data.weather[0].main;
          console.log(weathericon);
          
          if (weathericon === `Clear`) {
            const iconUrl = "./image/sun.png";
            iconImg.src = iconUrl;
            document.getElementById("Item").src = "./image/Bottle.png";
            document.getElementById("Item_link").href = "https://search.shopping.naver.com/search/all?query=%EB%AC%BC%EB%B3%91&cat_id=&frm=NVSHATC";
            localStorage.setItem('weather','Clear');
          }
          else if (weathericon === `Rain`) {
            const iconUrl = "./image/cloud_rain.png";
            document.getElementById("Item").src = "./image/Umbrella.png";
            document.getElementById("Item_link").href = "https://search.shopping.naver.com/search/all?query=%EC%9A%B0%EC%82%B0&cat_id=&frm=NVSHATC";
            iconImg.src = iconUrl;
            localStorage.setItem('weather','Rain');
          }
          else if (weathericon === `Clouds`) {
            const iconUrl = "./image/cloud.png";
            document.getElementById("Item").src = "./image/Umbrella.png";
            document.getElementById("Item_link").href = "https://search.shopping.naver.com/search/all?query=%EC%9A%B0%EC%82%B0&cat_id=&frm=NVSHATC";
            iconImg.src = iconUrl;
            localStorage.setItem('weather','Clouds');
            
          }
          else if (weathericon === `Drizzle`) {
            const iconUrl = "./image/rain.png";
            document.getElementById("Item").src = "./image/Umbrella.png";
            document.getElementById("Item_link").href = "https://search.shopping.naver.com/search/all?query=%EC%9A%B0%EC%82%B0&cat_id=&frm=NVSHATC";
            iconImg.src = iconUrl;
            localStorage.setItem('weather','Drizzle');
          }
          else if (weathericon === `Snow`) {
            const iconUrl = "./image/snow.png";
            document.getElementById("Item").src = "./image/Umbrella.png";
            document.getElementById("Item_link").href = "https://search.shopping.naver.com/search/all?query=%EC%9A%B0%EC%82%B0&cat_id=&frm=NVSHATC";
            iconImg.src = iconUrl;
            localStorage.setItem('weather','Snow');
          }
          else {
            const iconUrl = ""; // error
            iconImg.src = iconUrl;
            document.getElementById("Item").src = "./image/Bottle.png";
            document.getElementById("Item_link").href = "https://search.shopping.naver.com/search/all?query=%EB%AC%BC%EB%B3%91&cat_id=&frm=NVSHATC";
          }
        
          loc.textContent = `${place}`;
        //   desc.textContent = `구름: ${description}`;
          tempC.textContent = `현재 기온: ${temp.toFixed(2)} °C`;

          c_probability.textContent = `${probability}%`;
        });

        fetch(fine_dust)
        .then((response) => {
            return response.json();
          })
          .then((data) => {
            const temp = data.list[0].main.aqi;

            if (temp === 1) {
                pm_10.textContent = `좋음`;
            }
            else if (temp === 2) {
                pm_10.textContent = `보통`;
            }
            else if (temp === 3) {
                pm_10.textContent = `보통`;
            }
            else if (temp === 4) {
                pm_10.textContent = `나쁨`;
            }
            else if (temp === 5) {
                pm_10.textContent = `매우 나쁨`;
            }
            else {
              pm_10.textContent = `Not_Found`; //error
            }
          });
    });
  }
});


// 실시간 시간 표시
var Target = document.getElementById("clock");
var Target_apm = document.getElementById("apm");
function clock() {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var AmPm ="오전(AM)";
    if(hours > 12){   
        AmPm ="오후(PM)";
        hours %= 12;
    }
    Target.innerText = 
    `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    Target_apm.innerText = `${AmPm}`;
}
clock();
setInterval(clock, 1000);

// 검색 함수
const Searching = Search.prototype;

function Search(){
    this.keyword = document.querySelector('input[name = "search"]');
    this.engine = document.querySelector('.SelectSearch');
    this.button = document.querySelector('.img-button');
    this.form = document.querySelector('.search');

    this.Engine();
}
Searching.Engine = function(){ // 검색 엔진
    this.form.addEventListener('submit', e => {
    
        e.preventDefault();
        
        let engine = this.engine.value;  
        let keyword = this.keyword.value;

        if(engine === 'google'){
            window.open('https://www.google.co.kr/search?q=' + keyword); 
        }else if(engine === 'naver'){
            window.open('https://search.naver.com/search.naver?query=' + keyword);
        }
    });
}
new Search();

function psn_day() {
    var Target = document.getElementById("today");
    var time = new Date();

            var month = time.getMonth();
            var date = time.getDate();
            var day = time.getDay();
            var week = ['일', '월', '화', '수', '목', '금', '토'];

            Target.innerText = `${month + 1}월 ${date}일 ${week[day]}요일 `;
        
}
psn_day();

function Page_Main(){
  window.location.href = "Main.html";
}

function Page_Male() {
  window.location.href = "./male.html";
}

function Page_Female() {
  window.location.href = "./female.html";
}

function Page_Unisex() {
  window.location.href = "./uni.html";
}

function Page_Food() {
  window.location.href = "Food.html";
}

var num = 1;

function Weather_Image(idx) {
  console.log(num);
  if (num === 1) {
    document.getElementById("Item").src = "./image/Bottle.png";
    document.getElementById("Item_link").href = "https://search.shopping.naver.com/search/all?query=%EB%AC%BC%EB%B3%91&cat_id=&frm=NVSHATC";
  }
  else {
    document.getElementById("Item").src = "./image/Umbrella.png";
    document.getElementById("Item_link").href = "https://search.shopping.naver.com/search/all?query=%EC%9A%B0%EC%82%B0&cat_id=&frm=NVSHATC";
  }
  if(num > 5) {
    num = 1;
  }
  else {
    var imgTag = document.getElementById("weather-icon");
    imgTag.setAttribute("src","./image/weather/0"+num+".png");
    num++;
  }
}