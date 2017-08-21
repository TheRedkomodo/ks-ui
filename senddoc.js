const request = require('request');
const fs = require('fs');
const conversion = require('phantom-html-to-pdf')({phantomPath: require("phantomjs-prebuilt").path});

const options = {
    url: 'https://1dd23b9d.ngrok.io/doc',
    body: {
        // 'doc' : undefined
        doc: undefined
    },
    json: true,
    method: 'POST'
}
fs.readFile('electronics.html', 'utf8', (err, data) => {
  if (err) {
    return console.log('error occured: ', err);
  }
  var opts = {
    html: data,
    paperSize: {
      format: 'Letter',
        width: '8.5in',
        height:'11.5in'
    },
  	// fitToPage: true,
    settings: {
		  javascriptEnabled : true,
		  resourceTimeout: 1000
	  }
  };
  conversion(opts, (err, pdf) => {
    if (err) {
      console.log(err);
    } else {
      console.log(pdf.numberOfPages);
      const writestream = fs.createWriteStream('freedaguyz.pdf')
      pdf.stream.pipe(writestream);
    }

  })
  // options.body.doc = JSON.stringify(data);
  // options.body.doc = data
  //   request.post (options,(err, httpResponse,body) => {
  //     // console.log('data: ', data);
  //     console.log('response: ', body);
  //   });
})

// request('https://1dd23b9d.ngrok.io/esig', (err, res, body) =>{
//     console.log('body:', body);
// })
