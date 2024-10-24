const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Define the path to the user.json file
const filePath = path.join(__dirname, 'user-server', 'user.json');

// Get the users data
app.get('/User', (req, res) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading data' });
    }
    const users = JSON.parse(data);
    res.status(200).json(users);
  });
});

// Post route to add new data to the user.json file
app.post('/User', (req, res) => {
  const newUser = req.body;

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading data' });
    }

    let users = JSON.parse(data);
    users.push(newUser);

    // Write the updated data back to user.json
    fs.writeFile(filePath, JSON.stringify(users, null, 2), 'utf8', (err) => {
      if (err) {
        return res.status(500).json({ message: 'Error saving data' });
      }
      res.status(201).json({ message: 'User data saved successfully' });
    });
  });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
