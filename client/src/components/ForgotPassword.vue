<template>
    <div class="forgotPassword">
        <div v-if="submitted" class="alert alert-success">
            <strong>Success!</strong> Redirecting in 3 seconds..
        </div>
        <ValidationObserver ref="observer"> <b-form slot-scope="{ validate }" @submit.prevent="validate().then(post)">
            <ValidationProvider rules="required|email" name="Email">
            <b-form-group 
            slot-scope="{ valid, errors }"
            label="Email">
                <b-form-input
                type="email"
                v-model="account.email"
                :state="errors[0] ? false : (valid ? true : null)"
                placeholder="Enter email">
                </b-form-input>
                <b-form-invalid-feedback>
                {{ errors[0] }}
                </b-form-invalid-feedback>
        </b-form-group></ValidationProvider>
        <b-button block type="submit" variant="primary">Submit</b-button>
        </b-form></ValidationObserver>
    </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate';

export default {
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data: () => ({
    account:{
        email: '',
    },
    submitted : false
  }),
    methods: {
        post: function() {
            this.submitted = true;
            const axios = require('axios');
            axios.post('https://cors-anywhere.herokuapp.com/jsonplaceholder.typicode.com/posts', {
                // placeholder api, to be replaced with actual server
                email: this.account.email
            }).then(
                setTimeout(() => {this.$router.push('HomePage'); }, 3000)
            )
        }
    }
}
</script>

<style>
</style>