const cheerio = require('cheerio');
const fs = require('fs');
const html = fs.readFileSync(__dirname + '/step1.html', 'utf8');
const conversionScript = fs.readFileSync(__dirname + '/js/conversion.js', 'utf8');
const $ = cheerio.load(html);
const scriptNode =`<script>${conversionScript}</script>`;
const komodoScript = '<script id="old" src="js/komodosign.js"></script>';
const sigpad = '<script src="node_modules/signature_pad/dist/signature_pad.min.js"></script>'
const flScript = '<script src="js/featherlight/featherlight.min.js" type="text/javascript" charset="utf-8"></script>';
const customCSS = '<link rel="stylesheet" href="css/style.css">';
$('head').append(cusstomCSS);
$('body').append(komodoScript);
fs.writeFile('step1converted.html',$.html(), (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('script successfully injected into html');
});
