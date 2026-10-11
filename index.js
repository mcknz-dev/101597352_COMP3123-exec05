const express = require('express');
const app = express();
const path = require('path');
const userRouter = require('./routes/users');

// Middleware to parse JSON request bodies
app.use(express.json());

// Serve the home.html page
app.get('/home', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'home.html'), (err) => {
    if (err) {
      next(err);
    }
  });
});

// Add User Router
app.use('/api/v1/user', userRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).send('Server Error');
});



// Start the web server
const port = process.env.PORT || 8081;

app.listen(port, () => {
  console.log('Web Server is listening at port ' + port);
});