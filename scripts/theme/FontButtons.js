const eventHub = document.querySelector("#container")

eventHub.addEventListener("click", clickEvent => {
    debugger

    if (clickEvent.target.id.startsWith("btnFont--")) {
        debugger

        const [prefix, chosenSize] = clickEvent.target.id.split("--")
        const fontChosenEvent = new CustomEvent("fontChosen", {
            detail: {
                fontSize: chosenSize
            }
        })

        eventHub.dispatchEvent(fontChosenEvent)
    }
})



export const FontButtons = () => {
    return `
        <article class="fonts">
            <fieldset>
                <legend>Font Sizes</legend>

                <button id="btnFont--xsmall">Extra Small</button>
                <button id="btnFont--small">Small</button>
                <button id="btnFont--large">Large</button>
                <button id="btnFont--xlarge">Extra Large</button>
            </fieldset>
        </article>
    `
}
