// SETUP
// -----------------------------------------------------------------------------
 
// packages
let os=require('os');
let cluster=require('cluster');
let express=require('express');
let path=require('path');
let compression=require('compression');

// CLUSTER
// -----------------------------------------------------------------------------

// system
if(cluster.isMaster)
	for(let i=0, n=os.cpus().length; i<n; i+=1)
		cluster.fork();
else
	application();

// APPLICATION
// -----------------------------------------------------------------------------

function application(){

  // app
  let app=express();

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
