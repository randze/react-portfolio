const express = require('express');
const path = require('path');
var cors = require('cors');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// // Serve up static assets
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('client/build'));
// }
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'build')));
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
}
// routes
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './client/build/'));
// });

// listener
app.listen(`🌎 ==> API server now on port ${PORT}!`);