var urllib = require('urllib');

urllib.request('http://cnodejs.org/', function (err, data, res) {
  if (err) {
    throw err; // you need to handle error
  }
  console.log(res.statusCode);
  res.headers['content-type'] = 'text/plain; charset=ANSI ';
  
  console.log(data.toString())
  
});