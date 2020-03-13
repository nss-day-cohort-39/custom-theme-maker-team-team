import { ScoreList, FilteredScoreList } from "./sports/ScoreList.js"
import { NewsList } from "./news/NewsList.js"
import { FavoritesList } from "./favorites/FavoritesList.js"
import { ThemeOptions } from "./theme/ThemeOptions.js"

export const Dashboard = () => {
    return `
        ${ThemeOptions()}
        ${FilteredScoreList()}
        ${ScoreList()}
        ${NewsList()}
        ${FavoritesList()}
    `
}
