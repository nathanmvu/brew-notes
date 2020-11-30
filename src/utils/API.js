import axios from 'axios'

export default {
    saveNote: function(note) {
        return axios.post("/api/user/notes", note)
    },
    deleteNote: function(id) {
        return axios.delete("/api/user/notes/" + id)
    },
    getAllNotes: function() {
        return axios.get("/api/user/notes")
    }
}