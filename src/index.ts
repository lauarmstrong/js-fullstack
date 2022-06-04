import express from 'express';
// import csvtojson from 'csvtojson';
import routes from './routes/index';
import logger from './utilities/logger';

const app = express();
const port = 3001;

// app.get("/", (req, res) => {
//   res.send("Hello there.");
// });

app.use('/api', logger, routes);

app.listen(port, () => {
    console.log(`Server started at localhost: ${port}`);
});

export default app;
