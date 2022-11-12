const express = require('express');
const axios = require('axios')

const app = express();

app.use(express.json())
app.set('view engine', 'ejs');

const sleep = (delay) =>
  new Promise((resolve) => setTimeout(resolve, delay))

// gets the style information from the env variables
// {
//   styleClass: "background-color: #000000; color: #FFFFFF",
//   message: 'Hello',
// }
function getStyleFromEnv() {
  const backgroundColor = process.env.BG_COLOR || '#000000';
  const foregroundColor = process.env.FG_COLOR || '#FFFFFF';
  const message = process.env.MESSAGE || backgroundColor;

  return {
    styleClass: `background-color:${backgroundColor}; color:${foregroundColor}`,
    message,
  };
}

async function pingDrone() {
  while (true) {
    await axios.post('http://dron2:3000/ping-me', {
      message: 'Seimka od dron1',
    });
    await sleep(1000)
  }
}

app.get('/version', (req, res) => {
  const pkg = require('./package.json');
  const version = process.env.VERSION || pkg.version;
  res.json({ version });
});

app.get('/siemka', (req, res) => {
  res.json({ message: 'siemka' });
});

app.get('*', (req, res) => {
  const { styleClass, message } = getStyleFromEnv();
  res.render('index', { style: styleClass, message });
});

app.post('/ping-me', (req, res) => {
  console.log(`I've just got pinged!`)
  console.log(req.body)
  res.sendStatus(200);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Color App running on port ${port}`);
});

if (process.env.PING === 'true') {
  pingDrone()
}