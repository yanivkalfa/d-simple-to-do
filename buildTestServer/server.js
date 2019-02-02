import path from 'path';
import express from 'express';
import { port } from '../configs/buildTestServer.config';

const app = express();

app.use(express.static(path.join(__dirname, '../dist/')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, `../dist/index.html`));
});
app.listen(port, console.log(`listening on port: ${port}`));

module.exports = app;
