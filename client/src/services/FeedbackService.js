import Api from '@/services/Api'

export default {
    getFeedback() {
        return Api().get('Feedback')
    },
    submitFeedback(feedbackContent) {
        return Api().post('Feedback', feedbackContent)
    }
}