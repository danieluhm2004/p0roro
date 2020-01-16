import Express, { Application } from 'express';
import Morgan from 'morgan';
import Fs from 'fs';

const app: Application = Express();

app.use(Morgan('dev'));
app.set('view engine', 'pug'); // (1)
app.set('views', './src/views'); // (2)
app.locals.pretty = true;
app.disable('x-powered-by');
app.disable('etag');

const path = `${__dirname}/middlewares/`;
Fs.readdir(path, async (err, middlewares) => {
  if (err) return console.log('⚠️  - Cannot read middlewares.');
  for (const middleware of middlewares) {
    try {
      const importLib = await import(path + middleware);
      app.use(importLib.default);
    } catch (e) {}
  }

  app.get('/scripting', (req, res) => res.render('scripting', req));
  app.use('/assets', Express.static('public'));
  app.all('/assets/*', (req, res) => res.redirect('/assets/background.jpg'));
  app.all('*', (req, res) => res.render('index', req));
  app.listen(3000, () => {
    console.log('💡  - Server Has Been Enabled.');
    console.log('🚥  - Network: https://p0roro.ga');
  });
});
``;
