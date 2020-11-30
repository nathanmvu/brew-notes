const Notes = require('../models/Notes');

module.exports = function (app) {
  // save note
  app.post('/api/user/notes', function (req, res) {
    if (req.user) {
      const newNote = {
        ...req.body,
        userID: req.user._id,
      };
      console.log('newNote', newNote);
      Notes.create(newNote, function(err, data) {
        if (err) {
          res.send({ error: err });
        } else {
          res.send({ created: data });
        }
      });
    } else {
      res.send({ error: 'no user' });
    }
  });

  // update note
  app.put('/api/user/notes/:noteId', function (req, res) {
    if (req.user) {
      const updateNote = req.body;

      console.log('updateNote', updateNote);
      console.log('updateNoteId', req.params.noteId);
      Notes.updateOne(
        { _id: req.params.noteId, userID: req.user._id },
        updateNote,
        undefined,
        function(err, data) {
          if (err) {
            res.send({ error: err });
          } else {
            res.send({ updated: data });
          }
        }
      );
    } else {
      res.send({ error: 'no user' });
    }
  });

  // delete note
  app.delete('/api/user/notes/:noteId', function (req, res) {
    console.log('deleting noteId', req.params.noteId);
    if (req.user) {
      Notes.deleteOne({ _id: req.params.noteId, userID: req.user._id }, function(err) {
        if (err) {
          res.send({ error: err });
        } else {
          res.send({ deleted: req.params.noteId });
        }
      });
    } else {
      res.send({ error: 'no user' });
    }
  });

  app.get('/api/user/notes', function (req, res) {
    if (req.user) {
      Notes.find({ userID: req.user._id }, function(err, data) {
        if (err) {
          res.send({ error: err });
        } else {
          res.send({ notes: data || [] });
        }
      });
    } else {
      res.send({ error: 'no user' });
    }
  });

  // favorite notes
  app.get('/api/user/favoritenotes', function (req, res) {
    if (req.user) {
      Notes.find({ userID: req.user._id, favorite: true }, function(err, data) {
        if (err) {
          res.send({ error: err });
        } else {
          res.send({ notes: data || [] });
        }
      });
    } else {
      res.send({ error: 'no user' });
    }
  });
};