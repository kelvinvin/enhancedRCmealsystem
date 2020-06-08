<template>
    <div class="container">
      <v-data-table
      :headers="headers"
      :items="payments"
      :items-per-page="10"
      :sort-by="['payment_id']"
      :sort-desc="[false]"
      class="elevation-1"
      ></v-data-table>
      <br>
    </div>
</template>

<script>
import PaymentService from '@/services/PaymentService'

export default {
    name: "ViewPayments",
    async mounted() {
        this.payments = (await PaymentService.getPayment()).data
    },
    data () {
      return {
        headers: [
          {
            text: 'ID',
            align: 'start',
            sortable: false,
            value: 'payment_id',
          },
          { text: 'Paid on', value: 'createdAt' },
          { text: 'Amount', value: 'amount' },
          { text: 'Paid?', value: 'paymentMade' },
          { text: 'MatricID', value: 'User.matric_id'}
        ],
        payments: [
        ],
      }
    }
}
</script>