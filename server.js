const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// routes
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/index.html'));
});

// listener
app.listen(`🌎 ==> API server now on port ${PORT}!`);