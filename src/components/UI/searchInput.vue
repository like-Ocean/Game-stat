<template>
  <input
          class="input"
          type="text"
          placeholder="Поиск..."
          :value="search"
          @input="updateInput"
  >
</template>

<script>
export default {
    name: "searchInput",
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
.input{
    width: 200px;
    background: #727272;
    color: #00dff4;
    border: none;
    padding: 3px;
}
.input::placeholder{
    color: #00dff4;
}
</style>