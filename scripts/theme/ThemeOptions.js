import { ColorButtons } from "./ColorButtons.js"
import { FontButtons } from "./FontButtons.js"
import { BorderButtons } from "./BorderButtons.js"

const eventHub = document.querySelector("#container")

eventHub.addEventListener("backgroundColorChange", theEvent=>{
    const colorSelected = theEvent.detail.colorChange

    eventHub.classList = []

    eventHub.classList.add(colorSelected)
})


export const ThemeOptions = () => {
    return `
        <article class="container__panel themeOptions">
            ${BorderButtons()}
            ${ColorButtons()}
            ${FontButtons()}
        </article>
    `
}