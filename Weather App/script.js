const apiKey = `4c6f8414b048acd4cf8d20f854fd04f8`;
let city="kahmandu";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;



fetch(url)
    .then((response) => {
        if(!response.ok){
            throw new error(`${response.status}`)
        }
        return response.json();
    })
    .then((data)=>{
        console.log(data.name);
        console.log(data.main.temp);

    })
    .catch((error)=>{
        console.error(`Couldn't get temperature ${error.message}`)
    })