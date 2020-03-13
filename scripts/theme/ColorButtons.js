
const eventHub = document.querySelector('#container')

eventHub.addEventListener('click', event => {
    const colorSelected = event.target.id
    if (colorSelected.startsWith('btnTheme--')) {

        const [prefix, chosenColor] = colorSelected.split("--")

        const theChosenColor = new CustomEvent("backgroundColorChange", {

            detail: {
                colorChange: chosenColor
            }
        })
        eventHub.dispatchEvent(theChosenColor)
    }
})





export const ColorButtons = () => {
    return `
        <article class="colors">
        <fieldset>
        <legend>Background Colors</legend>
        
                <button id="btnTheme--red">Red</button>
                <button id="btnTheme--purple">Purple</button>
                <button id="btnTheme--blue">Blue</button>
                <button id="btnTheme--green">Green</button>
                </fieldset>
        </article>
        `
}
