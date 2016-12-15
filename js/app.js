(function() {
  'use strict';

  // Link protocol Pattern
  let LinksRegExp = new RegExp('(https?|ftp)', 'ig');
  let linkText = "http://me.com";
  let linkPatternTest = LinksRegExp.test(linkText);
  console.log("Link protocol Pattern: " + linkPatternTest);


  // Email Pattern
  let EmailRegExp = /[a-z0-9_.-]+@[a-z0-9_-]+\.[a-z]{2,4}(\.[a-z]{2,3})?/gi;
  let testContent = `
    nawara@gmail.com
    me@me.co.uk
    info@nawara.me
  `;
  let emailPatternTest = EmailRegExp.test(testContent);
  console.log("Email Pattern: " +emailPatternTest);


  // Full URL
  let UrlRegExp = /^(https?|ftp)[a-z0-9_.-]+\.[a-z0-9_.-]\.[a-z]{2,5}(\.[a-z]{2,3})?([a-z0-9/.=?_&-]+)?$/gim;
  let UrlText = `
    http://www.nawara.me
    https://nawara.me
    ftp://www.nawara.me/files
    http://api.nawara.me
  `;
  let UrlPatternTest = UrlRegExp.test(UrlText);
  console.log("Full URL Pattern: " + UrlPatternTest);



  // Use exec
  var text = /(hello \S+)/ig;
  var result = text.exec('This is a hello world!');
  console.log(result);

}());
