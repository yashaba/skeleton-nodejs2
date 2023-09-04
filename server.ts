import express, { Response, Request } from 'express'
import basicRoutes from './routes/basicRoutes'
import * as bodyParser from 'body-parser';
const app = express();

app.use(bodyParser.json());
const port = 8080

app.get('/test', (req: Request, res: Response)=> {
    console.log('I am alive')
    res.send('Response is alive')
} );

app.use('/api', basicRoutes)

app.listen(port,()=>{
    console.log(`Server is listening on port: ${port}`)
})