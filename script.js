const createElement = document.querySelector("#create-element-btn")
const elementInput = document.querySelector(".element-input")
const textInput = document.querySelector("#text-input")
const submitBtn = document.querySelector("#submit-btn")
const boxArea = document.querySelector(".box-area")


createElement.addEventListener("click", (e) => {
    e.preventDefault()

    elementInput.classList.toggle("hide")

    submitBtn.addEventListener("click", (e) => {
        e.preventDefault()

        const template = `<div class="new-element" style="${textInput.value}"></div>`

        const parser = new DOMParser();
        const htmlTemplate = parser.parseFromString(template, "text/html");
        const newElement = htmlTemplate.querySelector(".new-element");
    
        boxArea.appendChild(newElement)
    })
})