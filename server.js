// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality

const express = require('express');
const app = express();


// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 3002;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.

require('./public/routes/apiRoutes.js')(app);
require('./public/routes/htmlRoutes.js')(app);

// LISTENER
// The below code effectively "starts" our server

app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`));