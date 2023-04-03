const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const { spawn } = require('child_process');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/",function(req,res){
    return res.render("home");
})

app.get('/predict',function(req,res){
    return res.render("predict"); 
})

app.post('/result', function(req, res) {
    const pythonProcess = spawn('/opt/homebrew/bin/python3', ['./load_model.py']);
    let output = null;
    let dataBuffer = '';
  
    // Listen for data from the Python process
    pythonProcess.stdout.on('data', (data) => {
      dataBuffer += `${data}`; // Append data to the buffer
      console.log(`Received data from Python process: ${data}`);
    });
  
    // Listen for the end of the Python process
    pythonProcess.stdin.on('close', (code) => {
      if (code == 0) { // The Python process exited successfully
        output = parseFloat(dataBuffer); // Parse the output from the buffer
        console.log(`Output from Python process: ${output}`);
        console.log("dataBuffer : "+dataBuffer+", ouput : "+output);
      } else {
        console.log(`Python process exited with code ${code}`);
      }
      pythonProcess.kill();
      res.render("result", { output }); // Render the response with the output value
    });

    pythonProcess.stderr.on('data', (data) => {
        console.error(`Error from Python process: ${data}`);
    });

    // Send the user input to the Python process
    // const userInput = '-0.33399129,0.24258119,-0.96313679,0.02140418,0.83730066,-0.16962178,0.00884052,0.23074469,-0.44256111,0.0634928,-0.75508835'; 
    // const userInput = '1.21575596,-0.03867236,1.9523043,-0.05555466,0.64485725,-0.8951552,-0.93924554,0.33053966,-1.40508642,0.0634928,1.21665571';
    const userInput = req.body.fixedAcidity + "," + req.body.volatileAcidity + "," + req.body.citricAcid + "," + req.body.residualSugar + "," + req.body.chlorides + "," + req.body.freeSulphurDioxide + "," + req.body.totalSulphurDioxide + "," + req.body.density + "," + req.body.pH + "," + req.body.sulphates + "," + req.body.alcohol; 
    console.log(userInput);
    pythonProcess.stdin.write(`${userInput}\n`);
  });
  

let port = 8000;

app.listen(port, function() {
  console.log("Server started on port: ",port);
});