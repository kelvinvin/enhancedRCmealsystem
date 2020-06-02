import Api from '@/services/Api'

export default {
    addSemester(content) {
        return Api().post('admin', content)
    },
}