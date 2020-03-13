import { useNews } from "./NewsProvider.js"
import { NewsItem } from "./NewsItem.js"

const eventHub = document.querySelector("#container")

export const NewsList = () => {
    const newsItems = useNews()
    return render(newsItems)
}

const render = newsCollection => {
    return `
        <article class="container__panel news">
            ${newsCollection.map(news => NewsItem(news)).join("")}
        </article>
    `
}

eventHub.addEventListener("sizeChoice", event => {
    const font = event.detail.font

    const contentTarget = document.querySelector(".news")

    contentTarget.classList = "container__panel news"
    contentTarget.classList.add(font)
})

eventHub.addEventListener("pixelSizeChosen", event => {
    const news = event.detail.pixelSize
    
    const contentTarget = document.querySelector('.news')
    contentTarget.classList = []
    contentTarget.classList.add(news, "container__panel", "news")
})