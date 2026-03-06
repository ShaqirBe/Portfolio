const express = require('express');
const path = require('path');

const app = express();
const mainRoutes = require('./routes/mainRoutes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', mainRoutes);

app.use((req, res) => {
  res.status(404).render('404', {
    pageTitle: '404 - Page Not Found'
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
