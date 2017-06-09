<template>
  <div class="chores">
    <form @submit.prevent="addChoresToHousehold(choresList)">
      <div class="loop" v-for="chore in chores">
        <label class="custom-control custom-checkbox">
          <input type="checkbox" v-model="choresList" class="custom-control-input" checked value="jack">
          <span class="custom-control-indicator"></span>
          <span class="custom-control-description">{{chore.name}}: {{chore.points}}</span>
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