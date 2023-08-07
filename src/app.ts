import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import 'dotenv/config';


const app: Express = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());
app.get('/_health', (req: Request, res: Response) => {
  res.send('ok');
});
app.get('/', (req: Request, res: Response) => {
  res.send('express middle ware');
});


// const PORT = 8000;
// app.listen(process.env.PORT || PORT);

export default app;
