import { useFavorites } from "./FavoritesProvider.js"
import { FavoriteItem } from "./FavoriteItem.js"



const eventHub = document.querySelector("#container")


export const FavoritesList = () => {
    const favoriteItems = useFavorites()
    return render(favoriteItems)
}

const render = favoriteCollection => {
    return `
        <article class="container__panel favorites">
            ${favoriteCollection.map(favorite => FavoriteItem(favorite)).join("")}
        </article>
    `
}

eventHub.addEventListener("sizeChoice", event => {
    const font = event.detail.font

    const contentTarget = document.querySelector(".favorites")

    contentTarget.classList = "container__panel favorites"
    contentTarget.classList.add(font)
})

eventHub.addEventListener("pixelSizeChosen", event => {
    const favorite = event.detail.pixelSize
    
    const contentTarget = document.querySelector('.favorites')
    
    contentTarget.classList = []

    contentTarget.classList.add(favorite, "container__panel", "favorites")
})