const express = require('express');
const projects = require('../data/projects');
const profile = require('../data/profile');

const router = express.Router();

router.get('/', (req, res) => {
  const contactStatus = req.query.sent || '';

  res.render('index', {
    pageTitle: 'Shaqir Beqiri | Fullstack Developer',
    activePage: 'home',
    projects: projects.slice(0, 3),
    profile,
    contactStatus
  });
});

router.get('/projects', (req, res) => {
  res.render('projects', {
    pageTitle: 'Projects | Shaqir Beqiri',
    activePage: 'projects',
    projects,
    profile
  });
});

router.get('/about', (req, res) => {
  res.render('about', {
    pageTitle: 'About | Shaqir Beqiri',
    activePage: 'about',
    profile
  });
});

router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Basic server-side validation for required fields.
  if (!name || !email || !message) {
    return res.redirect('/?sent=error#contact');
  }

  res.redirect('/?sent=success#contact');
});

module.exports = router;
