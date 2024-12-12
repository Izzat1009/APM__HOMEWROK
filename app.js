const wrapperEl = document.querySelector(".wrapper")
const loadingEl = document.querySelector(".loading")
const BASE_URL = "https://dummyjson.com"

async function fetchData(endpoint){
    const response = await fetch(`${BASE_URL}${endpoint}`)
    response
        .json()
        .then((res)=> createCard(res))
        .catch((err) => console.log(err))
        .finally(()=> {
            loadingEl.style.display = "none"
        })
}

window.addEventListener("load", ()=>{
    fetchData("/products")
})

function createCard(data){
    data.products.forEach(product=> {
        const divEl = document.createElement("div")
        divEl.className = "card"
        divEl.innerHTML = `
            <img src=${product.thumbnail} alt="rasm">
            <h3>${product.title}</h3>
            <p>${product.price} USD</p>
            <button>Buy now</button>
        `
        wrapperEl.appendChild(divEl)    
    })
    
}
