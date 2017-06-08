<template>
  <div class="chores">
    <form action="submit">
      <div class="loop" v-for="chore in chores">
        <label class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input">
          <span class="custom-control-indicator"></span>
          <span class="custom-control-description">{{chore.name}}</span>
        </label>
      </div>
    </form>
  </div>
</template>


<script>
  export default {
    name: 'chores',
    data() {
      return {

      }

    },
    mounted() {
      this.$store.dispatch('getChores')
    },

    computed: {
      chores(){
        return this.$store.state.chores
      }
    },
    methods: {},
    components: {}
  }

</script>


<style scoped>

</style>