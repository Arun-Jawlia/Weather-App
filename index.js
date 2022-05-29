

const api_key = `dedbd71ba764908d82d89db068eddedd`


async function searchWeather() {
    let city = document.querySelector("#city").value

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

    let res = await fetch(url)
    let data = await res.json()
    // console.log(data.coord)
    dataAppend(data)

    



}


function dataAppend(data) {
    document.getElementById("leftSide").innerHTML = null
    let city = document.querySelector("#city").value
    console.log(data)

    var x = city.toUpperCase()
    let leftSide = document.querySelector('#leftSide')

    let sunsetImg = document.createElement("img")
    sunsetImg.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    sunsetImg.id="sunsetImg"
    
    let tempDiv = document.createElement('div')
    tempDiv.id = "tempDiv"

    let h2 = document.createElement('h2')
    h2.innerText = `CITY: ${x}`


    var temp = (data.main.temp - 273).toFixed(1)
    let h31 = document.createElement('h3')
    h31.innerText = `Temp: ${temp} °C`


    var minTemp = (data.main.temp_min - 273).toFixed(1)
    let h32 = document.createElement('h3')
    h32.innerText = `Min Temp: ${minTemp} °C`

    var maxTemp = (data.main.temp_max - 273).toFixed(1)
    let h33 = document.createElement('h3')
    h33.innerText = `Max Temp : ${maxTemp} °C `


    let h34 = document.createElement("h3")
    h34.innerText = `Clouds: ${data.clouds.all}`

    let h35 = document.createElement("h3")
    h35.innerText = `Wind speed: ${data.wind.speed} Km/hr `

    let h36 = document.createElement("h3")
    h36.innerText=`Weather: ${data.weather[0].main }`

    let h37 = document.createElement("h3")
    h37.innerText=`Sunset : ${data.sys.sunset}`


    let h38 = document.createElement("h3")
    h38.innerText=`Sunrise: ${data.sys.sunrise}`









    tempDiv.append(sunsetImg,h2, h31, h32, h33, h34, h35,h36,h37,h38)
    leftSide.append(tempDiv)
    let iframe = document.querySelector("#gmap_canvas")
    iframe.src = `https://maps.google.com/maps?q=${city}&t=&z=5&ie=UTF8&iwloc=&output=embed`
    
    document.getElementById("#rightSide").append(iframe)
}



// const hours = new Date().getHours()
// console.log(hours)
// const isDayTime = hours > 6 && hours < 20
