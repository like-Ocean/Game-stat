<template>
      <div class="nav">
          <ul>
              <li @click="$router.push('/')">Главная</li>
          </ul>
          <div class="searcher">
              <search-input :value="search" @input="updateInput"/>
          </div>
      </div>

</template>

<script>
import SearchInput from "@/components/UI/searchInput.vue";

export default {
    name: "navBar",
    components: {SearchInput},
    props:{
        search: String
    },
    methods:{
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style scoped>
.nav {
    background-color: #3a3939;
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav ul li {
    font-family: "Open Sans", sans-serif;
    font-size: 1rem;
    color: #00dff4;
    display: inline-block;
    padding: 20px;
    position: relative;
}

.nav ul li:hover {
    cursor: pointer;
    background-color: #252424;
}
.searcher{
    margin: 0 10px;
}
</style>