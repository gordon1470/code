var express = require('express');
var app = express();

app.get('/:number', function (req, res) {
	if(req.params.number <= 10000000){
    var sieve = [], i, j, primes = [];
    for (i = 2; i <= req.params.number; ++i) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (j = i << 1; j <= req.params.number; j += i) {
                sieve[j] = true;
            }
        }
    }
	primes.forEach(function (obj){
	  res.write(obj.toString()+"\n");
  });}else res.send("Number too high!");
  res.end();
});
app.get('/', function (req, res) {
	res.send("OK!");
  res.end();
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});