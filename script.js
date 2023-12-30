$(document).ready(function () {
  const cityInput = "Nisko";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&lang=pl&appid=ad25664b7e0548749b2647efa8fc6a7e&units=metric`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const pogoda = document.getElementById("blok1");
      const pogoda2 = document.getElementById("blok2");

      var predkosc = Number(data.wind.speed);
      var wynik = Math.ceil(predkosc * 3.6);
      var obraz = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      

      var wiatr = Number(data.wind.speed) * 3.6;
      var wiatr2 = Math.round(wiatr * 10) / 10;
      var vis = Number(data.visibility) / 1000;

      pogoda.innerHTML += `
      
      <div class="row" id="p1">

      <div class="col-7">

        <div class="row">
          <div class="col-12  ">
      
            <p>${cityInput}</p>
          
              
            
          </div>
        </div>



        <!-- Drugi blok obok -->
        <div class="row" >
          <div class="col-12">
       
            
            
          <p>${data.main.temp} °C</p>
            
          </div>
        </div>
        
      </div>




      <!-- Blok po lewej stronie -->
        

      <div class="col-5 " >
        
      <p><img src="${obraz}"</img></p>
        
      </div>




    </div>
            
            `;



      pogoda2.innerHTML = `
            
            <div class="row" id="p2"> 
          <div class="col-6 "> <p class='tekst'>  <span class='feels'><img src='icons/thermometer2.png'></img>Odczuwalna</span> </br>
            ${data.main.feels_like}°C</p>
          </div> 
          <div class="col-6"> <span class='feels'><img src='icons/wiatr.png'></img>  Wiatr</span> </br>
            ${wiatr2} km/h
          </div> 

          <div class="row "> 
          <div class="col-6  "> 
            <p class='tekst'> <span class='feels'><img src='icons/press.png'></img> Cisnienie</span> </br>
            ${data.main.pressure} hPa</p>
          </div> 
          <div class="col-6"> 
            <p class='tekst'> <span class='feels'><img src='icons/hum.png'></img> Wilgotnosc</span> </br>${data.main.humidity} %</p>
          </div>


          <div class="row"> 
          <div class="col-6 "> <p class='tekst'>  <span class='feels'><img src='icons/vis.png'></img> Widocznosc</span> </br>
            ${vis}km</p>
          </div> 
          <div class="col-6"> <span class='feels'><img src='icons/cloud.png'></img> Zachmurzenie</span> </br>
            ${data.clouds.all}%
          </div> 

          <div class="row "> 
          <div class="col-6  "> 
            <p class='tekst'> <span class='feels'><img src='icons/max.png'></img> Maksymalna</span> </br>
            ${data.main.temp_max}°C </p>
          </div> 
          <div class="col-6"> 
            <p class='tekst'> <span class='feels'><img src='icons/min.png'></img> Minimalna</span> </br>${data.main.temp_min} °C</p>
          </div>
          

            `;
























    })
    .catch((error) => {
     
    });



    const apiUrl2 = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&appid=ad25664b7e0548749b2647efa8fc6a7e&units=metric&lang=pl`;
  const pogoda3 = document.getElementById("blok3");

  fetch(apiUrl2)
    .then((response2) => response2.json())
    .then((data2) => {
      const dailyForecasts = data2.list;
      for (const forecast of dailyForecasts) {
        if (forecast.dt_txt.includes("12:00:00")) {
          const weatherIconCode = forecast.weather[0].icon;

          const weatherIconUrl = `http://openweathermap.org/img/w/${weatherIconCode}.png`;

          

          const date = new Date(forecast.dt_txt);
          const day = date.getDate();
          const month = date.getMonth() + 1; 
          const year = date.getFullYear();

          const formattedDate = `${day}.${month}.${year}`;
          const opis = forecast.weather[0].description;

          pogoda3.innerHTML += `
              
              <div class='row' id="row3" > 
              
              <div class="col-3"> <p >  
                  ${formattedDate}</p>
                </div> 
                
      
                <div class="col-3"><p> <img src="${weatherIconUrl}"></img></p>
                </div> 
      
      
                <div class="col-3"><p id="opis"> ${opis}</p>
                </div> 
      
      
              
                <div class="col-3"><p> ${forecast.main.temp}°C</p>
                </div> 
              
              
              
                <hr>
              </div>
              

            
           
              
              
              `;


              


        }
      }

      pogoda3.innerHTML += `<button id="Pokazprognoze">Wiecej...</button>`;


      
      $("#Pokazprognoze").click(function () {
        
       
    
        
        if (cityInput !== "") {
          
          window.location.href = `prognoza.html?city=${cityInput}`;
        }
      });


      $(".hm2").hover(
        function () {
    
          $(this).css("cursor", "pointer");
        },
        function () {
          
          $(this).css("cursor", "default"); 
        }
      );




      $(".hm2").click(function () {
        
    
        
        if (cityInput !== "") {
          
          window.location.href = `prognoza.html?city=${cityInput}`;
        }
      });
      



    })
    .catch((error) => {
      console.log("blad");
    });



























  var input = document.getElementById("miasto");

  input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      const cityInput = document.getElementById("miasto").value;
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&lang=pl&appid=ad25664b7e0548749b2647efa8fc6a7e&units=metric`;
      const apiUrl2 = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&appid=ad25664b7e0548749b2647efa8fc6a7e&units=metric&lang=pl`;
      const pogoda3 = document.getElementById("blok3");


      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          const pogoda = document.getElementById("blok1");
          const pogoda2 = document.getElementById("blok2");

          var predkosc = Number(data.wind.speed);
          var wynik = Math.ceil(predkosc * 3.6);
          var obraz = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
          console.log(predkosc);

          var wiatr = Number(data.wind.speed) * 3.6;
          var wiatr2 = Math.round(wiatr * 10) / 10;
          var vis = Number(data.visibility) / 1000;

          pogoda.innerHTML = `
      
      <div class="row" id="p1">

      <div class="col-7">

        <div class="row">
          <div class="col-12  ">
      
            <p>${cityInput}</p>
          
              
            
          </div>
        </div>



        <!-- Drugi blok obok -->
        <div class="row" >
          <div class="col-12">
       
            
            
          <p>${data.main.temp} °C</p>
            
          </div>
        </div>
        
      </div>




      <!-- Blok po lewej stronie -->
        

      <div class="col-5 " >
        
      <p><img src="${obraz}"</img></p>
        
      </div>




    </div>
            
            `;



      pogoda2.innerHTML = `
            
            <div class="row" id="p2"> 
          <div class="col-6 "> <p class='tekst'>  <span class='feels'><img src='icons/thermometer2.png'></img> Odczuwalna</span> </br>
            ${data.main.feels_like}°</p>
          </div> 
          <div class="col-6"> <span class='feels'><img src='icons/wiatr.png'></img>  Wiatr</span> </br>
            ${wiatr2} km/h
          </div> 

          <div class="row "> 
          <div class="col-6  "> 
            <p class='tekst'> <span class='feels'><img src='icons/press.png'></img> Cisnienie</span> </br>
            ${data.main.pressure} hPa</p>
          </div> 
          <div class="col-6"> 
            <p class='tekst'> <span class='feels'><img src='icons/hum.png'></img> Wilgotnosc</span> </br>${data.main.humidity} %</p>
          </div>


          <div class="row"> 
          <div class="col-6 "> <p class='tekst'>  <span class='feels'><img src='icons/vis.png'></img> Widocznosc</span> </br>
            ${vis}km</p>
          </div> 
          <div class="col-6"> <span class='feels'><img src='icons/cloud.png'></img> Zachmurzenie</span> </br>
            ${data.clouds.all}%
          </div> 

          <div class="row "> 
          <div class="col-6  "> 
            <p class='tekst'> <span class='feels'><img src='icons/max.png'></img>Maksymalna</span> </br>
            ${data.main.temp_max} </p>
          </div> 
          <div class="col-6"> 
            <p class='tekst'> <span class='feels'><img src='icons/min.png'></img> Minimalna</span> </br>${data.main.temp_min} °C</p>
          </div>
          

            `;

          





        })
        .catch((error) => {
         alert("Wprowadzono zla nazwe miasta")

          
        });





     
  
        pogoda3.innerHTML = "";
  
        fetch(apiUrl2)
          .then((response2) => response2.json())
          .then((data2) => {
            const dailyForecasts = data2.list.filter((entry) =>
              entry.dt_txt.includes("12:00:00")
            );
            for (const forecast of dailyForecasts) {
              const weatherIconCode = forecast.weather[0].icon;
  
              const weatherIconUrl = `http://openweathermap.org/img/w/${weatherIconCode}.png`;
  
              
  
              const date = new Date(forecast.dt_txt);
              const day = date.getDate();
              const month = date.getMonth() + 1; 
              const year = date.getFullYear();
  
              const formattedDate = `${day}.${month}.${year}`;
              const opis = forecast.weather[0].description;
              
            pogoda3.innerHTML += `
                
            <div class='row' id="row3" "> 
            
            <div class="col-3"> <p >  
                ${formattedDate}</p>
              </div> 
              
    
              <div class="col-3"><p> <img src="${weatherIconUrl}"></img></p>
              </div> 
    
    
              <div class="col-3"><p id="opis"> ${opis}</p>
              </div> 
    
    
            
              <div class="col-3"><p> ${forecast.main.temp}°C</p>
              </div> 
            
            
            
            <hr>
            </div>
            
            
            `;
  
              
            }
            pogoda3.innerHTML += `<button id="Pokazprognoze" >Wiecej...</button>`;
  
  
        
        $("#Pokazprognoze").click(function () {
          
         
      
      
          if (cityInput !== "") {
       
            window.location.href = `prognoza.html?city=${cityInput}`;
          }
        });
        
  
        
        $(".hm2").hover(
          function () {
      
            $(this).css("cursor", "pointer");
          },
          function () {
            
            $(this).css("cursor", "default"); 
          }
        );
  
  
  
  
        $(".hm2").click(function () {
         
         
      
        
          if (cityInput !== "") {
           
            window.location.href = `prognoza.html?city=${cityInput}`;
          }
        });
  
  
  
  
          })
          .catch((error) => {
            
          });






















    }
  });



});














