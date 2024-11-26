const express = require('express');
const path = require('path');
const welcomeRoutes = require('./routes/welcome');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contactus');
const errorRoutes = require('./routes/error');

const app = express();
const port = 3000;

// Middleware for form data parsing
app.use(express.urlencoded({ extended: false }));

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', welcomeRoutes);
app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);
app.use('/contact', contactRoutes);  // Correctly mounts the contact routes
app.use('/error', errorRoutes);

// Catch-all route for 404 errors
app.use((req, res) => {
  res.status(404).send('Page Not Found');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
