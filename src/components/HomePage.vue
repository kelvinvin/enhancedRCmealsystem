<template>
    <div class="container">
        <div class="row">
            <div class="col">
            </div>
            <div class="col-6">
                 <v-calendar is-expanded :attributes='attrs' />
            </div>
            <div class="col">
            </div>
        </div>   
    </div>
</template>

<script>


export default {
    name: 'HomePage',
    data() {
        return {
            attrs: [
                {
                key: 'today',
                highlight: true,
                popover: {
                    label: 'Malay Asian Indian Western'
                },
                dates: new Date(),
                },
            ],
        };
    },
  
}
</script>

<style>

</style>