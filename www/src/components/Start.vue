<template>
  <div class="start">
    <div class="container-fluid">
      <div class="startBody">
        <div id="start-view">
          <button type="button" class='btn btn-primary' @click="householdFormToggle" v-show="addHouseholdButton">Add a Household</button>
            <form class="form-inline create-household-form" @submit.prevent="createHousehold" v-show="newHousehold">
              <div class="form-group">
                <input type="text" class="form-control" v-model="name" name="name" placeholder="Household Name" />
                <button type="submit" class="btn btn-primary" id="create-household-button" @click="householdFormToggleBack">Create New Household</button>
        </div>
        </form>
      </div>
      <div id='myHouseholds'>
            <div class='container-fluid'>
              <div class='row'>
                <div class="col-sm-3" v-for="household in households">
                    <router-link :to="'/households/'+household._id">{{household.name}}</router-link> <button type="button" class='btn btn-xs btn-default' @click="removeHousehold(household)"><span class="glyphicon glyphicon-trash"></span></button></div>
              </div>
            </div>
          </div>
    </div>
  </div>
  </div>

</template>


<script>
  export default {
    name: 'start',
    data() {
      return {
      name: '',
      creatorId: this.$store.state.user._id,
      newHousehold: false,
      addHouseholdButton: true
    }
    },
    mounted() {
      this.$store.dispatch('getHouseholds')
    },
    computed: {
      households() {
        return this.$store.state.households
      },
      user(){
        return this.$store.state.user
      }
    },
    methods: {
      createHousehold(){
        this.$store.dispatch("createHousehold", {name: this.name, creatorId: this.creatorId})
      },
      householdFormToggle() {
        this.newHousehold = true;
        this.addHouseholdButton = false;
      },
      householdFormToggleBack() {
        this.newHousehold = false;
        this.addhouseholdButton = true;
      }
    },
    components: {}
  }
  

</script>


<style scoped>

</style>