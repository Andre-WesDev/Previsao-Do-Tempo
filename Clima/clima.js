function procurar(){
    var local = document.getElementById("text-value").value;

    if(local == ""){
        alert('Por favor, Informe o local!');
        return;
    }

    let url = `https://weather.contrateumdev.com.br/api/weather/city/?city=${local}`;

    fetch(url).then(function(response){
        response.json().then(apresentardados);
    })
  
}

function apresentardados(dados){

    console.log(dados);
    let icon = document.querySelector(".icon");
    let nomeCity = document.querySelector(".nomeCity");
    let tempCity = document.querySelector(".tempCity");
    let Tempmax = document.querySelector(".Tempmax");
    let Tempmin = document.querySelector(".Tempmin");
    let vento = document.querySelector(".vento");
    let chuva = document.querySelector(".chuva");


    if(dados.cod == "404"){

        alert(`[ERRO] - Cidade não Localizada! Informe o local corretamente!`);

    }else{

      nomeCity.innerHTML = `${dados.name}`;
      tempCity.innerHTML = `${dados.main.temp}°C`;
      Tempmax.innerHTML = `${dados.main.temp_max}°C`;
      Tempmin.innerHTML = `${dados.main.temp_min}°C`;
      vento.innerHTML = `${dados.wind.speed}km/h`;
      chuva.innerHTML = `${dados.weather[0].description}`;
      icon.innerHTML = `${dados.weather[0].icon}`;
     
    }
}

