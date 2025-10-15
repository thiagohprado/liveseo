    // app.js
    const express = require('express');
    const app = express();
    const PORT = process.env.PORT || 3001;

    app.use(express.json()); // For parsing JSON request bodies

    app.get('/', (req, res) => {
      res.send('Hello LiveSEO from Express API on K8S');
    });

    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
