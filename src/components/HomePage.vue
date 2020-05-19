<template>
    <div class="container">
        <div class="row">
            <div class="col">
            </div>
            <div class="col-6">
                 <v-calendar is-expanded :attributes='attrs' 
                 @dayclick="test"/>
            </div>
            <div class="col">
                <router-link to="/MealSelection">Register Meal Plan</router-link>
            </div>
        </div>
        <table-menu class="table" v-if="dayClicked"></table-menu>   
    </div>
</template>

<script>
import TableMenu from './TableMenu.vue'

export default {
    name: 'HomePage',
    data() {
        return {
            attrs: [
                {
                key: 'today',
                highlight: true,
                popover: {
                    label: "Today's date"
                },
                dates: new Date(),
                },
            ],
            dayClicked: false,
        };
    },
    methods: {
        test(event) {
            this.dayClicked = !this.dayClicked;
            console.log(event.label);
        }
    },
    components: {
        TableMenu
    }
}
</script>

<style>
    .table {
        margin-top: 50px;
    }
</style>