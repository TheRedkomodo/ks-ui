const pdf2html = require('pdftohtmljs');
const converter = new pdf2html('pdf/intro-to-javascript-electronics.pdf', 'electronics.html');

converter.convert().then(() => {
  console.log('success');
}).catch((err) => {
  console.error('Conversion error: ', err);
});

//---------beta for sunday afternoon-----------//
  // use case others need to sign document

  //upload signature

  //upload & convert document/pdf to html
    //create simple ui, for user to upload pdf2htmlEX
    //once file uploaded, send to server for html conversion using pdf2html
    // insert signing tool kit into html. Use absolute positioning/fixed postioning to keep tool kit fixed and above conveted pdf document

  //beta toolkit
    // fullwidth fixed rectangle
      // sign button
        //sign button places 'signature placeholder-item into current state/queue'
        // current should be an object
          // {active: boolean, placeholder-item: string, createElement: (type)=>{} }
          // .. on click (set current.placeholder-item = 'signature');
  //prepare document for signing
    //user prompted to select tool from tool kit
    // user selects signature-placeholder tool from tool kit
    // user begins placing placeholder across document
      // user clicks on point in document where placeholder should go
      // on click
        //

  //send document
  // add signature to document

//what is a signature placeholder?
  // a draggable element that gets placed on screen

//~ Prepare Document//

  // create ui bar for signature placeholder button
    // click on signature button to place signature place holder in queue
    // on mouse click, place 'signature placeholder' on location
      //capture mouse location
      //use absolute positioning and z index to set placeholder

//things that need to happen after click
  //replace 'click to sign' with image
  // close out of lightbox

// add media tool (video/picture)
// add limit.. upload up to 20 images (embedded into the document);
  // will require a media player


//dc launchpad (sharktank) // reduce expenses, technological advancment, bettering the city
//government paper elimination act
//cbe certification... dc small business development center (helps you procure development)
// sba.com (small business association)



//create overlay container for signature placement on each page.
  // overlay should match dimensions & positioning of its corresponding page, about 10px of margin on either side?


/// Thursday August 10
// Steps for smooth pdf to html conversion process
  // 1. upload pdf ...check
  // 2. send pdf to server ...check
  // 3. on serverside, use grunt, gulp, or other task manager to run the following tasks in the following order:
    // convert pdf to html using pdf2html terminal ... check
    // inject css/js assets using stepOneInject.js script via node terminal command

  // 4. Store newly created html in database / send user html
  // 5. User adds signature placeholders
  // 6. User sends newly updated html to server (update/post)
  // 7. On serverside, use grunt, gulp, or other task manager to run the following tasks in the following order:
    // use injectionScriptPart2 to add/remove necessary js/css assets
    // inject conversion script, to
      // remove signature placement function
      // create master html file to be updated as each user finishes his/her portion of document

  // . Server updates database with updated html file
  // . Once document is complete (all signatures accounted for), generate pdf?

  // Steps for when user on email list requests document to sign (visits link to document sent in email)

    // 1. hide/disable signature placeholders that do not belong to user making the request.
    // 2. display placeholders that do belong to user making request.
    // 3. turn user signature placeholders into clickable 'sign here' buttons/tabs

  // Steps after user signs
    // send new html data to server (update/post)
    // mark user as complete
    // update document & document status
    // update master user that user signed.

  // Steps for smooth html to pdf process
    // 1. user clicks download as pdf to initate conversion process
    // 2. request received serverside, use
