<template>
    <div class="autoComp">
        <ul>
            <li
                    class="autoComp__item"
                    v-for="item in searchList"
                    :key="item.id"
                    @click="$router.push(`/game/${item.slug}`)"
            >
                {{ item.title }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'autoComplete',
    props:{
        searchList: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.autoComp{
    position: absolute;
    z-index: 1000;
    right: 0;
    width: 220px;
    background: #505050;
}
.autoComp__item{
    list-style-type: none;
    cursor: pointer;
    padding: 10px;
    margin: 5px 0;
    color: #00dff4;
    text-overflow: ellipsis;
}
</style>