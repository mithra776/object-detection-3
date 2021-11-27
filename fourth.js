img = "";
staatuus = "";
objects = [];

function setup()
{
    canvas = createCanvas(640 , 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting objects"
} 

function modelLoaded()
{
    console.log("Model Loaded")
    staatuus = true;
    objectDetector.detect(img , gotResult);
}

function preload()
{
    img = loadImage('basket_soccer.jpg');
}

function draw()
{
    image(img , 0 , 0 , 640 , 420);
    
    if(staatuus != "")
    {
        for(i = 0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML = " Status : Objects detected";
            document.getElementById("number_of_objects").innerHTML = "Number of objects detected are " + objects.length +"." + "" + "CoCo did not identify correctly and only identified one.";

            fill("#0004fa");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%" , objects[i].x + 150    , objects[i].y +15 );
            noFill();
            stroke("#0004fa");
            rect(50 , 30 , 210 , 400);
            stroke("#f54248");
            
        }
    }
}

function gotResult(error , results)
{
   if(error)
   {
       console.error(error);
   }

   else
   {
     console.log(results);
     objects = results;
   }
}

function home()
{
    window.location = "index.html";
}