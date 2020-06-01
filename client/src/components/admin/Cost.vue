<template>
    <div class="container">
        <div class="jumbotron">
            <h1 class="display-4">Insert semester year here</h1>
            <p class="lead">Breakfast Cost/ meal: (fetch cost here)</p>
            <p class="lead">Dinner Cost/ meal: (fetch cost here)</p>
            <hr class="my-4">
        </div>
        <div class="updateCostForm">
            <div>
                <v-text-field label="Enter breakfast cost to be updated" 
                :rules="rules"
                hide-details="auto"></v-text-field>
                <v-btn class="ma-2" outlined color="indigo" @click.prevent="updateBreakfast">Update</v-btn>
            </div>
            <div>
                <v-text-field label="Enter dinner cost to be updated" 
                :rules="rules"
                hide-details="auto"></v-text-field>
                <v-btn class="ma-2" outlined color="indigo" @click.prevent="updateDinner">Update</v-btn>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Cost',
    data() {
        return {
            breakfastCost: null,
            dinnerCost: null,
            rules: [
                value => typeof value == "number" || 'Please input a number',
            ],
        }
    }
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