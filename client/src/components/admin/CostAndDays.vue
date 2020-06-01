<template>
    <div class="container">
        <div class="jumbotron">
            <h1 class="display-4">Insert semester year here (to be fetched)</h1>
            <p class="lead">Breakfast Cost/ meal: (fetch cost here)</p>
            <p class="lead">Dinner Cost/ meal: (fetch cost here)</p>
            <p class="lead">Total weeks with recess week: (fetch here)</p>
            <p class="lead">Total weeks without recess week: (fetch here)</p>
            <hr class="my-4">
            <v-btn class="primary" dark @click.prevent="initialize">CLICK TO INITIALIZE OR UPDATE</v-btn>  <div class="updateCostForm" v-if="openInitialize">
            <div>
                <v-text-field label="Enter breakfast cost to be updated" 
                hide-details="auto"></v-text-field>
                <p>Current breakfast cost: (fetch here)</p>
                <v-btn class="ma-2" outlined color="indigo" @click.prevent="updateBreakfastCost">Update</v-btn>
            </div>
            <div>
                <v-text-field label="Enter dinner cost to be updated" 
                hide-details="auto"></v-text-field>
                <p>Current dinner cost: (fetch here)</p>
                <v-btn class="ma-2" outlined color="indigo" @click.prevent="updateDinnerCost">Update</v-btn>
            </div>
            <div>
                <v-text-field label="Enter total semester weeks including recess week" 
                hide-details="auto"></v-text-field>
                <v-btn class="ma-2" outlined color="indigo" @click.prevent="RecessTotalWeeks">Update</v-btn>
            </div>
            <div>
                <v-text-field label="Enter total semester weeks excluding recess week" 
                hide-details="auto"></v-text-field>
                <v-btn class="ma-2" outlined color="indigo" @click.prevent="NoRecessTotalWeeks">Update</v-btn>
            </div>
        </div>
        </div>
      
    </div>
</template>

<script>
export default {
    name: 'CostAndDays',
    data() {
        return {
            breakfastCost: null,
            dinnerCost: null,
            openInitialize: false,
            error: null
        }
    },
    methods: {
        initialize() {
            this.openInitialize = true;
        },
        updateBreakfastCost() {
        }
    },
    // Todo: Add methods for updateBreakfast and updateDinner 
}
</script>

<style scoped>
    .ma-2 {
        margin-top: 15px;
    }

    .updateCostForm {
        max-width: 70%;
    }

</style>