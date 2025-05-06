// server.js
require('@babel/register')({
  extensions: ['.js', '.jsx'],
  ignore: [/node_modules/],
});

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { sendWelcomeEmail } = require('./mailer.js');
const { ViewEmail } = require('./Controllers/ViewEmail.js');
  
  const app = express();
  app.use(bodyParser.json());

  app.get('/', ViewEmail);
  
  app.post('/send-email', async (req, res) => {
    try {
      const { to, name } = req.body;
      await sendWelcomeEmail({ to, name, ...req.body });
      res.send('Email sent');
    } catch (err) {
      console.error(err);
      res.status(500).send('Failed to send email');
    }
  });
  
  app.listen(3000, () => console.log('Server running on http://localhost:3000'));
  