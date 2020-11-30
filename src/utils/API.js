import axios from 'axios'

export default {
    saveNote: function(note) {
        return axios.post("/api/user/notes", note)
    },
    updateNote: function(id, update) {
        return axios.put("/api/user/notes/" + id, update)
    },
    deleteNote: function(id) {
        return axios.delete("/api/user/notes/" + id)
    },
    getAllNotes: function(favoritesPage) {
        if (favoritesPage) {
            return axios.get("/api/user/favoritenotes")
        }
        return axios.get("/api/user/notes")
    }
}

/*

POST / create user? - unused

POST /api/user/login

POST /api/user (signup)

GET /api/user (get user data)

POST /api/user/logout

*/