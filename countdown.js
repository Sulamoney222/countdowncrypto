const months=[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]
const token = document.querySelector(".token")
const datas = document.querySelectorAll(".container h4")


const date = new Date(2025,11,11,5,21,40)
console.log(date);

const year = date.getFullYear()
const day = date.getDay()
const hours = date.getHours()
const minutes = date.getMinutes()
const seconds = date.getSeconds()
let month = date.getMonth()
month=months[month]
token.textContent =`Token ends on ${month} ${day}, ${year}.`

// calculating in milliseconds ms
function renderTime(){
    const today = new Date().getTime()
    const gap = date - today
    
    //how it works
    const oneSeconds = 1000
    const oneMinutes = oneSeconds *60
    const oneHour = oneMinutes *60
    const oneDay = oneHour *24
    
    let days = Math.floor(gap/oneDay)
    let hours = Math.floor((gap%oneDay)/oneHour)
    let minutes = Math.floor((gap%oneHour)/oneMinutes)
    let seconds = Math.floor((gap%oneMinutes)/oneSeconds)

    //set value arrays
    const values= [days, hours, minutes, seconds]
    function format(data){
        if (data< 10) {
            return data = `0${data}`
        }
        return data
    }
    datas.forEach((data,index)=>{
        data.innerHTML = format(values[index])

    })
   
    //when token ends
    if(gap < 0){
        clearInterval(countdown)
        token.textContent = `Token is unavailable!`
        token.classList.add('token-color')
       datas.forEach((data)=>{
        data.innerHTML = `00`

    })
    }
    
    
}

 let countdown = setInterval(renderTime,1000)
 renderTime()