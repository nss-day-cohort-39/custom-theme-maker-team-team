
const eventHub = document.querySelector("#container")

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

eventHub.addEventListener("click", event => {
    const clickedButton = event.target.id

    if (event.target.id.startsWith('btnFont--')) {
        const [prefix, fontSizeChosen] = clickedButton.split("--")

        const selectingFontSize = new CustomEvent("sizeChoice", {
            detail: {
                font: fontSizeChosen
            }
        })

        eventHub.dispatchEvent(selectingFontSize)
    }
})