<template>
    <div class="card">
        <div class="poster">
            <img
                :src="game.short_image"
                style="max-width: 100%"
                alt="Error"
            >
        </div>
        <div class="info">
            <div><p>{{ game.readable_status }}</p></div>
            <div class="title"><p>{{ game.title }}</p></div>
        </div>
    </div>
</template>

<script>

export default {
    name: "gameItem",
    props: {
        game: {
            type: Object
        }
    }
}
</script>

<style scoped>
.card{
    position: relative;
    max-width: 100%;
    margin: 30px 5px;
    color: #00dff4;
    cursor: pointer;
}

.info{
    position: absolute;
    bottom: 4px;
    left: 0;
    top: 0;
    width: 100%;
    opacity: 0;
    background: rgb(0, 32, 55, .4);
    backdrop-filter: blur(10px);
    padding: 10px;
    transition: opacity .3s;
}
.card:hover .info{
    opacity: 1;
}
.poster img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.title{
    font-size: 24px;
    font-weight: bold;
}
</style>