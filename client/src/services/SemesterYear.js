import Api from '@/services/Api'

export default {
    addSemester(content) {
        return Api().post('admin/addSemester', content)
    },

    getSemesters() {
        return Api().get('admin/addSemester')
    },
}