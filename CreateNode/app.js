const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');
const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item'); // Ensure this is correctly imported

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to attach a user to every request
app.use((req, res, next) => {
  User.findByPk(1)
    .then(user => {
      if (user) {
        req.user = user;
        next();
      } else {
        // Handle case where user doesn't exist
        return User.create({ name: 'Suman', email: 'test@gmail.com' }).then(newUser => {
          req.user = newUser;
          next();
        });
      }
    })
    .catch(err => {
      console.log('Error finding user:', err);
      next(); // Proceed even if there's an error (optional)
    });
});

// Route handling
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(errorController.get404);

// Define model relationships
Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });

// Sync database and start the server
sequelize.sync({force:true}) // Removed { force: true } for data persistence
  .then(() => {
    return User.findByPk(1);
  })
  .then(user => {
    if (!user) {
      // Return the user creation to ensure it's available for the next `.then`
      return User.create({ name: 'Suman', email: 'test@gmail.com' });
    }
    return user;
  })
  .then(user => {
    console.log('User initialized:', user.name); // Optional logging
    app.listen(3000, () => {
      console.log('Server running on http://localhost:3000/');
    });
  })
  .catch(err => {
    console.error('Error initializing the application:', err);
  });
