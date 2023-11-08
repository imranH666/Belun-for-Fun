const btn = document.querySelector(".btn")
const belun = document.querySelector(".belun")
const after = document.querySelector(".after")
const before = document.querySelector(".before")

let belunWidth = 100
let belunHight = 130

btn.addEventListener("click", () => {
    belunWidth = belunWidth + 10
    belunHight = belunHight + 10

    if(belunHight <= 500){
        belun.style.width = `${belunWidth}px`
        belun.style.height = `${belunHight}px`
    }else {
        belun.style.display = 'none'
    }
})

function chooseColors() {
    const colors = document.querySelector(".colors").value
    
    belun.style.backgroundColor = colors
    after.style.backgroundColor = colors
    before.style.backgroundColor = colors
}

