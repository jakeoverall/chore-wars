<template>
  <div class="chores">
    <form @submit.prevent="addChoresToHousehold(choresList)">
      <div class="loop" v-for="chore in chores">
        <label class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" :value="chore.name" v-model="checkedChores"/>
          <span class="custom-control-indicator"></span>
          <span class="custom-control-description">Chore: {{chore.name}} - </span>
        </label>
        <span>Value</span>
        <input type="number" :value= "chore.points" :placeholder="chore.points" v-model.number="checkedChores"/>
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
        },
        checkedChores: [],
        checkedChorePoints: []

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