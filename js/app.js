const getLoadQuotes = async()=>{
    const url =('https://api.adviceslip.com/advice')
    const res = await fetch(url)
    const data = await res.json()
    getDisplayQuotes(data)

}
const getDisplayQuotes=(advice)=>{
    console.log(advice)
    const quotesNumber = document.getElementById('number')
    quotesNumber.innerHTML = advice.slip.id;
    const blockQuotes = document.getElementById('quotes')
    blockQuotes.innerHTML=advice.slip.advice;
}
getLoadQuotes()