// SETUP
// -----------------------------------------------------------------------------
 
// packages
var os=require('os');
var cluster=require('cluster');
var express=require('express');
var path=require('path');
var compression=require('compression');

// CLUSTER
// -----------------------------------------------------------------------------

// system
if(cluster.isMaster)
	for(var i=0, n=os.cpus().length; i<n; i+=1)
		cluster.fork();
else
	application();

// APPLICATION
// -----------------------------------------------------------------------------

function application(){

  // app
  var app=express();

  // result gzip
  app.use(compression());

  // public
  app.use(express.static(path.join(__dirname, 'src/assets')));

	// spa
	app.use(express.static(path.join(__dirname, 'dist/buslines')));
	app.use("*",function(req,res){
		res.sendFile(path.join(__dirname, 'dist/buslines/index.html'));
	});

  // listen
  app.listen(80, function(){
    console.log('app:80');
  });

}

// -----------------------------------------------------------------------------
