//! Declaration
const express = require('express');
const path = require('path');
const app = express();

//! Settings
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//! Middleware setup
/**
 * third-party middlware
 * - some npm file that must install
 * - call it by require()
 * - use the method/setting of middleware function inside app.use(middleware method(setting))
 * urlencoded takes html Form data and encoded them as js data types
 * extended: false then it can take string, arrays inside a object
 * extended: true can take any complex kind data
 */
app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static('public'));

// @TODO add auth middleware
// @TODO add registration page
app.use('/register', require('./routes/register'));

app.use('/', require('./routes/index'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening on port ${port}`));


