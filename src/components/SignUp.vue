<template>
    <div class="signup">
        <div v-if="submitted" class="alert alert-success">
            <strong>Success!</strong> Redirecting in 3 seconds..
        </div>
        <ValidationObserver ref="observer">
        <b-form slot-scope="{ validate }" @submit.prevent="validate().then(post)">
        <ValidationProvider rules="required" name="Name">
            <b-form-group slot-scope="{ valid, errors }" label="Name">
                <b-form-input
                type="text"
                v-model="account.name"
                :state="errors[0] ? false : (valid ? true : null)"
                placeholder="Enter name">
                </b-form-input>
                <b-form-invalid-feedback>
                {{ errors[0] }}
                </b-form-invalid-feedback>
            </b-form-group>
        </ValidationProvider>

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
            </b-form-group>
        </ValidationProvider>

        <ValidationProvider rules="required" name="Matric ID">
            <b-form-group 
            slot-scope="{ valid, errors }"
            label="NUS Matriculation ID">
                <b-form-input
                type="text"
                v-model="account.matric_id"
                :state="errors[0] ? false : (valid ? true : null)"
                placeholder="Enter NUS matriculation ID">
                </b-form-input>
                <b-form-invalid-feedback>
                {{ errors[0] }}
                </b-form-invalid-feedback>
            </b-form-group>
        </ValidationProvider>

<script>
export default {
    name: 'SignUp'

    };

</script>

<style>

</style>

