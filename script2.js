$(document).ready(function () {
    
    









    const url = new URLSearchParams(window.location.search);

    const cityInput = url.get('city');


    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&lang=pl&appid=ad25664b7e0548749b2647efa8fc6a7e&units=metric`;
    



  
      const apiUrl2 = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&appid=ad25664b7e0548749b2647efa8fc6a7e&units=metric&lang=pl`;
    const pogoda3 = document.getElementById("blok3");
  
    fetch(apiUrl2)
      .then((response2) => response2.json())
      .then((data2) => {
        const dailyForecasts = data2.list;

        pogoda3.innerHTML= `<h3>Prognoza 5 dniowa dla ${cityInput} <h3> </br>`;
        for (const forecast of dailyForecasts) {
          if (forecast.dt_txt.includes("12:00:00")) {
            const weatherIconCode = forecast.weather[0].icon;
  
            const weatherIconUrl = `http://openweathermap.org/img/w/${weatherIconCode}.png`;
  
           
  
            const date = new Date(forecast.dt_txt);
            const day = date.getDate();
            const month = date.getMonth() + 1; 
            const year = date.getFullYear();
            var wiatr = Number(forecast.wind.speed) * 3.6;
      var wiatr2 = Math.round(wiatr * 10) / 10;
            
            const formattedDate = `${day}.${month}.${year}`;
            const opis = forecast.weather[0].description;
  
            pogoda3.innerHTML += `
                
                <div class='row' id="row3" > 
                
                <div class="col-3"> <p >  
                    ${formattedDate}</p>
                  </div> 
                  
        
                  <div class="col-3"><p> <img src="${weatherIconUrl}"></img></p>
                  </div> 
        
        
                  <div class="col-3"><p id="opis2"> ${opis}</p>
                  </div> 
        
        
                
                  <div class="col-3"><p> ${forecast.main.temp}°C</p>
                  </div> 
                
                
                
                 
                </div>

                <div class='row'>

                <div class="col-3"> <p class='more'> Wilgotnosc:  ${forecast.main.humidity}%</p>
                
                
              </div> 
              
    
              <div class="col-3">
              <p class='more'>Zachmurzenie  ${forecast.clouds.all}%</p>
              </div> 
    
    
              <div class="col-3"><p class='more'> Cisnienie:  ${forecast.main.pressure} hPa</p>
              </div> 
    
    
            
              <div class="col-3">
              <p class='more'> Wiatr:  ${wiatr2}km/h
                </p>
              </div> 

              <hr>



                </div>
                
  
              
             
                
                
                `;
  
  
                
  
  
          }
        }
  
        
  
  
        
       
  
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
            
            window.location.href = `prognoza.html?city=${encodeURIComponent(cityInput)}`;
          }
        });
        
  
  
  
      })
      .catch((error) => {
        console.error("Błąd podczas pobierania prognozy pogody:", error);
      });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  