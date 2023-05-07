<template>
  <div class="blockinfo">
      <div class="img">
          <img :src="gameInfo.short_image" alt="error">
      </div>
      <div class="text">
          <p><strong>{{ gameInfo.title }}</strong></p>
          <p>{{ gameInfo.description }}</p>
      </div>
  </div>
    <div class="about">
        <div class="about__title">Трейлер:</div>
        <div class="mp4" v-if="gameInfo.teaser_link_steam">
            <video style="width: 100%" controls :src="gameInfo.teaser_link_steam"></video>
        </div>
        <div class="mp4" v-else>
            <video style="width: 100%" controls :src="gameInfo.teaser_link"></video>
        </div>
        <div class="about__title">Инфо:</div>
        <div class="about__info">
            <div class="about__info__item">
                <p>Metascore:</p> <span>{{ gameInfo.mata_score }}</span>
                <p>Userscore:</p> <span>{{ gameInfo.user_score }}</span>

            </div>
            <div class="about__info__item">
                <p>Дата взлома:</p> <span>{{ gameInfo.crack_date }}</span>
                <p>Взломана:</p> <span>{{ gameInfo.hacked_groups }}</span>
            </div>
            <div class="about__info__item">
                <p>Статус:</p> <span>{{ gameInfo.readable_status }}</span>
                <p>Защита:</p> <span>{{ gameInfo.protections }}</span>
            </div>
        </div>
        <div class="about__title">Системные требования:</div>
        <div>
            <div class="specs">
                <p>Процессор: <span>{{ gameInfo.specs_info.cpu_info }}</span></p>
                <p>RAM: <span>{{ gameInfo.specs_info.gpu_info }}</span></p>
                <p>OC: <span>{{ gameInfo.specs_info.os_info }}</span></p>
                <p>Видео: <span>{{ gameInfo.specs_info.gpu_info }}</span></p>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from "@/components/navBar.vue";
import GameService from "@/api/gameService";

export default {
    name: "selectedGame",
    components: {NavBar},
    data(){
        return{
            gameInfo:[],
        }
    },
    methods:{
        async fetchInfo(){
            const gameName = this.$route.path
            this.gameInfo =  await GameService.getInfo(gameName)
        }
    },
    watch:{
        '$route.path'() {
            this.fetchInfo()
        }
    },
    beforeMount() {
        this.fetchInfo()
    },
}
</script>

<style scoped>

.blockinfo{
    display: flex;
    margin-top: 20px;
    padding: 10px;
}
.text p{
    margin: 0 20px;
}

.text p:first-child{
    font-size: 24px;
}

.img img{
    width: 100%;
}
.about{
    padding: 10px;
    margin: 10px 0;
}
.about__title{
    font-size: 30px;
    margin: 20px 0;
    font-weight: 900;
}
.mp4{
    width: 500px;
}
.about__info{
    display: flex;
    justify-content: space-between;
}
.about__info__item{
    display: flex;
    margin: 10px 0;
    flex-direction: column;
}

.about__info__item p{
    margin: 5px;
    font-size: 20px;
}
.about__info__item span{
    font-size: 20px;
    margin: 5px;
    font-weight: 800;
}
.specs p{
    margin: 5px;
    font-size: 24px;
}
.specs span{
    font-size: 20px;
    margin-left: 15px;
}
@media(max-width: 456px){
    .text p{
        margin: 0;
    }
}
@media(max-width: 870px){
    .text p{
        margin: 0;
    }
}
</style>