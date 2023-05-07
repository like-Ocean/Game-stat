<template>
    <div class="app" @click="search=null, searchList=[]">
        <nav-bar v-model="search" @input="searchGames"/>
        <auto-complete :search-list="searchList"/>
        <router-view></router-view>
    </div>
</template>

<script>
import NavBar from "@/components/navBar.vue";
import GameService from "@/api/gameService";
import AutoComplete from "@/components/autoComplete.vue";

export default {
    components: {AutoComplete, NavBar},
    data(){
        return{
            search: null,
            searchList: []
        }
    },
    methods:{
        async searchGames(){
            this.searchList = await GameService.searchGame({title:this.search})
        }
    }
}
</script>

<style>
body{
    background: #282828;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.app{
    color: #00dff4;
}
@media(max-width: 870px){
    .blockinfo{
        flex-direction: column;
    }
}
@media(max-width: 640px){
    .info{
        bottom: 2px;
    }
    .card{
        font-size: 10px !important;
    }
    .title{
        font-size: 16px !important;
    }
}

@media(max-width: 456px){
    .info{
        bottom: 2px;
    }
    .card{
        font-size: 8px !important;
    }
    .title{
        font-size: 10px !important;
    }
    .blockinfo{
        flex-direction: column;
    }
    .about__info {
        flex-direction: column;
    }
}

</style>