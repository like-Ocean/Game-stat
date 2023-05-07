<template>
    <game-list :games="games" />
</template>

<script>
import GameItem from "@/components/gameItem.vue";
import GameList from "@/components/gameList.vue";
import NavBar from "@/components/navBar.vue";
import GameService from "@/api/gameService";

export default {
    components:{NavBar, GameList, GameItem},
    name: "main",
    data(){
        return{
            games:[]
        }
    },
    methods:{
        async fetchGames(){
            this.games = await GameService.getAll()
        },
    },
    mounted() {
        this.fetchGames()
    }
}
</script>

<style scoped>

</style>