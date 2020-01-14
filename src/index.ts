import Express, { Application } from 'express';
import Morgan from 'morgan';
import Fs from 'fs';

const app: Application = Express();

app.use(Morgan('dev'));
app.set('view engine', 'pug'); // (1)
app.set('views', './src/views'); // (2)
app.locals.pretty = true;

const path = `${__dirname}/middlewares/`;
Fs.readdir(path, async (err, middlewares) => {
  for (const middleware of middlewares) {
    const importLib = await import(path + middleware);
    app.use(importLib.default);
  }

  app.use('/', Express.static('public'));
  app.all('*', (req, res) => res.status(404).render('errors/404'));
  app.listen(3000, () => {
    console.log('🎬 Server Has Been Enabled.');
    console.log('📌 https://p0roro.ga');
  });
});
