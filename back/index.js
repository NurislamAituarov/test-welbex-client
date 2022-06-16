import express from 'express';
import router from './routes/router.js';
import cors from 'cors';

const PORT = process.env.PORT || 5000;
const app = express();
app.use(
  cors({
    origin: '*',
  }),
);
app.use(express.json());
app.use('/api', router);

app.listen(PORT, () => console.log('Server started on port  ' + PORT));
