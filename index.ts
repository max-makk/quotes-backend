import express from 'express';
const app = express();
app.use(express.json());

const PORT = 3000;

const quotes = [
  {
    id: 1,
    quote: "Busy remaking the world, man forgot to remake himself.",
    author: "Andrei Platonov",
    source: ""
  },
  {
    id: 2,
    quote: "He walked around all the useless things in the courtyard and touched them with his hands; for some reason, he wished that these would remember him, and love him. But he didn't believe they would. From childhood memories he knew how strange and sad it is after a long absence to see a familiar place again, for these unmoving objects have no memory and do not recognize the stirrings of a stranger's heart.",
    author: "Andrei Platonov",
    source: "The Fierce and Beautiful World"
  },
  {
    id: 3,
    quote: "GET and POST are the most important methods of HTTP protocol",
    author: "Everything in the existing world seemed strange to him; it was as if the world had been created for some brief, mocking game. But this game of make-believe had dragged on for a long time,for eternity, and nobody felt like laughing anymore.",
    source: "Soul"
  }
];

app.get('/', (_req, res) => {
  console.log('hi');
  res.send('<h1>Hello World!</h1>');
});

app.get('/quotes', (_req, res) => {
  res.json(quotes);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
