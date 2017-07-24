var express = require('express')
var app = express()


require('./router/main')(app);
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server     =    app.listen(process.env.PORT || 3000,function(){
    console.log('Node server running  on port ',process.env.PORT || 3000);
});
