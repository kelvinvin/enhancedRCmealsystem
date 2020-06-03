

<template>
    <div class="container">
        <div class="base-demo" style="width: 400px">
            <vue-table-dynamic :params="params"></vue-table-dynamic>
        </div>
    </div>
</template>

<script>
import FeedbackService from '@/services/FeedbackService'
import VueTableDynamic from 'vue-table-dynamic'

export default {
    name: "ViewFeedback",
 data() {
    return {
      params: {
        data: [
          ['Index', 'Data1', 'Data2', 'Data3'],
          [1, 'b3ba90', '7c95f7', '9a38aaaaaaaaaaa53'],
          [2, 'ec0b78', 'ba045d', 'ecf03c'],
          [3, '63788d', 'a8c325', 'aab418']
        ],
        header: 'row',
        border: true
      }
    }
  },

    async mounted() {
        this.params = (await FeedbackService.getFeedback()).data
    },  
    components: { VueTableDynamic }
}
</script>