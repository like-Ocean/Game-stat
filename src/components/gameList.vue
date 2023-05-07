<template>
    <div class="row">
        <game-item
            v-for="game in games"
            :game="game"
            :key="game.id"
            @click="$router.push(`/game/${game.slug}`)"
        />
    </div>
</template>

<script>
import GameItem from "@/components/gameItem.vue"

export default {
    components: {GameItem},
    name: "gameList",
    props: {
        games: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.row{
    display: grid;
    grid-template-columns: repeat(auto-fill, 33.33%);
}
</style>