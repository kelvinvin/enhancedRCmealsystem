<template>
    <div class="container">   
        <div class="jumbotron">
            <!-- Select Semester drop down -->
            <p>Select Academic Year:</p>
            <b-form-select v-model="AcadYear" 
            :options="AcadYearOptions">
            </b-form-select>

            <!-- Data fetched from database -->
            <h1 class="display-4">Academic Year: {{AcadYear}}</h1>
            <p class="lead">Breakfast Cost/ meal: {{fetchedBreakfastCost}}</p>
            <p class="lead">Dinner Cost/ meal: {{fetchedDinnerCost}}</p>
            <p class="lead">Total weeks with recess week: (fetch here)</p>
            <p class="lead">Total weeks without recess week: (fetch here)</p>
            <hr class="my-4">

            <!-- Initialize -->
            <v-btn class="primary" id="initializeBtn" dark 
            @click.prevent="initialize=!initialize">INITIALIZE COST</v-btn> 
            <v-btn class="primary" id="initializeBtn" dark 
            @click.prevent="semester=!semester">INITIALIZE NEW SEMESTER</v-btn>
            <v-btn class="primary" id="initializeBtn" dark 
            @click.prevent="toggleWeeks=!toggleWeeks">INITIALIZE WEEKS IN SEMESTER</v-btn>

            <div class="updateCostForm" v-if="initialize">
                <div>
                    <v-text-field label="Enter breakfast cost to be updated" 
                    v-model="breakfastCost"
                    hide-details="auto"></v-text-field>
                    <v-btn class="ma-2" outlined color="indigo" @click.prevent="updateBreakfastCost">Update</v-btn>
                </div>
                <div>
                    <v-text-field label="Enter dinner cost to be updated" 
                    v-model="dinnerCost"
                    hide-details="auto"></v-text-field>
                    <v-btn class="ma-2" outlined color="indigo" @click.prevent="updateDinnerCost">Update</v-btn>
                </div>
            </div>
                <div id="semesterID" v-if="semester">
                    <AddSemester/> 
                </div>
                <div v-if="toggleWeeks">
                    <i>Please ensure that you have already selected the academic year above</i>
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
import CostService from '@/services/CostService'
import SemesterYear from '@/services/SemesterYear'
import AddSemester from './AddSemester'

export default {
    name: 'InitializeSem',
    components: {
        AddSemester
    },
    data() {
        return {
            breakfastCost: null,
            dinnerCost: null,
            initialize: false,
            semester: false,
            toggleWeeks: false,
            error: null,
            AcadYear: null,
            AcadYearOptions: [],
            fetchedBreakfastCost: null,
            fetchedDinnerCost: null,
        }
    },
    methods: {
        updateBreakfastCost() {
            CostService.updateBreakfastCost({
                breakfastOrDinner: '0',
                cost: this.breakfastCost
            })
            window.location.reload()
        },
        updateDinnerCost() {
            CostService.updateDinnerCost({
                breakfastOrDinner: '1',
                cost: this.dinnerCost
            })
            window.location.reload()
        },
    },
    async mounted() {
        this.AcadYearOptions = (await SemesterYear.getSemesters()).data
            .map(element => element.semesterYear);
        const cost = (await CostService.getCosts()).data
            .map(element => element.cost)
        this.fetchedBreakfastCost = cost[0]
        this.fetchedDinnerCost = cost[1]
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

    #initializeBtn {
        margin: 10px;
    }

    #semesterID {
        margin-top: 50px;
    }

</style>