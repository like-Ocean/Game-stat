import axios from "axios";

export default class GameService{
    static async getAll(){
        try {
            const response = await axios.get('https://gamestatus.info/back/api/gameinfo/game/',{
                headers:{
                    'Content-Language': 'ru'
                }
            })
            return response.data.hot_games
        }
        catch (e) {
            console.log(e)
        }

    }
    static async getInfo(gameName){
        try {
            const response = await axios.get('https://gamestatus.info/back/api/gameinfo' + gameName,{
                headers:{
                    'Content-Language': 'ru'
                }
            })
            return response.data
        }
        catch (e) {
            console.log(e)
        }
    }
    static async searchGame(gameTitle){
        try {
            const response = await axios.post('https://gamestatus.info/back/api/gameinfo/game/search_title/', gameTitle)
            return response.data
        }
        catch (e) {
            console.log(e)
        }
    }
}