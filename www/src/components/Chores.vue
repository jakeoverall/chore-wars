<template>
  <div class="chores">
    <form @submit.prevent="addChoresToHousehold(choresList)">
      <div class="loop" v-for="chore in chores">
        <label class="custom-control custom-checkbox" :for="chore.name">
          <input type="checkbox" v-model="choresList" class="custom-control-input" :value="chore.name" checked>
          <span class="custom-control-indicator"></span>
          <span class="custom-control-description">{{chore.name}}</span>
        </label>
        <label class="custom-control" :for="chore.points">
          <input type="number" v-model="choresList" class="custom-control-input" :value="chore.points">
          <span class="custom-control-indicator"></span>
          <span class="custom-control-description">{{chore.points}}</span>
        </label>
      </div>
      <button type="submit" class="btn btn-success">Submit Chore List</button>
    </form>
  </div>
</template>


<script>
  export default {
    name: 'chores',
    data() {
      return {
        choresList: {
         name: "",
         points: ""
        }

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
    methods: {
      addChoresToHousehold(chores){
        this.$store.dispatch('addChoresToHousehold', chores)

      }
    },
    components: {}
  }

</script>


<style scoped>

</style>