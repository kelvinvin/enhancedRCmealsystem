<template>
    <div>
    <input type="checkbox" name="tncCheckBox" value="check" id="agree"> I have read and agree to the
    <v-dialog v-model="dialog" width="900px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
        text
        v-bind="attrs"
        v-on="on"
        >
          Terms and Conditions
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Terms and Conditions</span>
        </v-card-title>
        <v-card-text> Meal Plan Options
            Food Services offers four residential meal plans
            (Signature, Gold, Silver, and Bronze) and one commuter
            meal plan. The Bronze plan is available only to campus
            apartment and townhouse tenants. The commuter plan
            is available only to non-tenant students.
            Account Activation
            Meal Plan Agreement forms are available at the
            Housing Office or ID Center. To activate a meal plan
            account, complete and sign an Agreement form and
            turn it in at the ID Center. Allow at least three business
            days for a plan to be activated.
            Meal Plan Restrictions
            • All students living in residence halls are required
            to purchase a Signature, Gold, or Silver meal plan
            each fall and spring semester of an academic
            year.
            • Sophomores living in campus apartments or
            townhomes are required to purchase a
            residential meal plan.
            • Apartment and townhome residents who are
            considered juniors or seniors, and commuter
            students, are not required to purchase a meal
            plan.
            • Students who are required to purchase a meal
            plan must select one within the first 10 days of a
            semester. Those who don’t will be auto-enrolled
            in the lowest-priced meal plan they may
            purchase.
            • Students who purchase a residential meal plan
            must reside in on-campus student housing and
            maintain an on-campus residence for the full
            term of the meal contract.
            • Commuter students may purchase only a
            commuter meal plan.
            Meal Plan Taxation
            • Residential meal plan purchases are not subject
            to Illinois state sales tax.
            • Commuter meal plan purchases are subject to
            Illinois state sales tax.
            Charges and Payments
            • Each meal plan purchase for a semester is
            charged to the student’s university account at
            the beginning of that semester.
            • Failure to make scheduled payments to the
            university for meal plans may result in meal plan
            privileges being suspended, limited, or
            terminated.
            • You cannot add value to a meal plan.
            Plan Changes
            Students may change plans within the first ten days of
            a semester.
            Students who do not change their plans in the spring
            semester are billed for the same plans they chose in
            the fall semester.
            A residential meal plan purchaser may request to
            change to a different meal plan, subject to the
            following conditions:
            • The purchaser must meet eligibility requirements
            for the plan to which they want to change.
            • A resident may not change to a plan of lesser
            value in the same semester.
            • Meal plan funds may not be converted to
            Campus Cash.
            A residential student continuing in enrollment from the
            fall semester may request a change to a different
            residential meal plan for the spring semester.
            To request a plan change, complete a Change Request
            form, available at the ID Center. Allow at least three
            business days for a plan to be changed.
            Value Rollover
            Value remaining on any plan at the end of a fall
            semester is carried forward to the spring semester, as
            long as requirements are met, as follows:
            • Students must be registered for the spring
            semester before the late registration period
            ends, as determined by the Registrar.
            • Residential students must continue to reside in
            university housing for the spring semester.
            Meal Plan Terms and Conditions Updated 20190801
            • If a plan owner does not meet the applicable
            requirement(s), his or her meal plan account is
            cancelled, and any value remaining on that
            account is processed in accordance with the
            refund policies.
            Account Expiration
            Meal plans expire at 5 pm on commencement day of
            the spring semester, as specified in the UIS Catalog.
            Value remaining on a meal plan is forfeited when the
            plan expires.
            Cancellation and Refunds
            Cancellation and refunds of meal plans are subject to
            the following conditions:
            • Refunds are not given for meal plans cancelled
            after the end of the tenth week of a fall or spring
            semester.
            • Refunds are allowed only for students who meet
            one or more of the following criteria:
            - Have withdrawn from all classes at the
            university at Springfield
            - Provide documented medical evidence of
            circumstances that preclude the plan owner
            from using the meal plan
            • Students who cancel their meal plan for a
            semester are not permitted to renew that plan or
            purchase another plan for that semester.
            Refunds must be requested at the ID Center. Requests
            must be made in writing and include the reason for the
            request, as well as all appropriate supporting
            documentation.
            Refunds requested before the tenth week of a fall or
            spring semester are calculated as the value remaining
            on the meal plan minus any fees.
            • Refunds are credited to the student’s university
            account.
            Lost or Stolen ID Cards
            Students are responsible for reporting lost or stolen
            ID cards to the ID Center immediately.
            To report a lost or stolen ID card, phone the ID Center
            at 217-206-7718. After ID Center hours, contact
            university police at 217-206-6690.
            An ID card reported lost or stolen is permanently
            deactivated.
            Liability for Purchases
            Cardholders must pay for all transactions made with
            their ID cards, except for unauthorized use. If your card
            is lost or stolen, you must notify the ID Center. Your
            liability for unauthorized purchases is as follows:
            • If you notify the ID Center within two business
            days, you are liable for up to $50 of unauthorized
            transactions.
            • If you notify the ID Center within three to four
            business days, you are liable for up to $250 of
            unauthorized transactions.
            • If you notify the ID Center within five or more
            business days, you are liable for up to $500 of
            unauthorized transactions.
            The total amount of your liability is not to exceed $500.
          </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
        </div>
</template>

<script>
export default {
    name: 'RegisterTnC',
    data() {
        return {
            dialog: false,
        }
    }
}
</script>

<style scoped>
    .box {
        height: 500px;
        width: 600px;
        border: 1px solid black;
        margin: auto;
    }
</style>