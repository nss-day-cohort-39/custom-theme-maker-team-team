import { useFavorites } from "./FavoritesProvider.js"
import { FavoriteItem } from "./FavoriteItem.js"


const contentTarget = document.querySelector(".favorites")

/*
    COMPONENT FUNCTION
*/
export const FavoritesList = () => {
    const allFavorites = useFavorites()
    render(allFavorites)
}

/*
    RENDERING FUNCTION
*/
const render = favoritesArray => {
    const convertedFavorites = favoritesArray.map(favoritesObject => {
        const favoriteHTML = FavoriteItem(favoritesObject)
        return favoriteHTML
    })
    const combinedSections = convertedFavorites.join("")
    eventHub.innerHTML = combinedSections
}

/*
    Color the messages when one of the buttons in the ThemeButtons
    component is clicked.
*/
const eventHub = document.querySelector("#container")

eventHub.addEventListener("colorChosen", event => {
    const color = event.detail.color

    contentTarget.classList = []
    contentTarget.classList.add(color)
})