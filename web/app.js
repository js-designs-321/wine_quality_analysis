const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const { spawn } = require('child_process');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/",async function(req,res){

    const pythonProcess = spawn('/opt/homebrew/bin/python3', ['./load_model.py']);
    pythonProcess.stdout.on('data', (data) => {
        console.log(`${data}`);
        // console.log(data.toJSON());
    });
    
    // const userInput = '-0.33399129,0.24258119,-0.96313679,0.02140418,0.83730066,-0.16962178,0.00884052,0.23074469,-0.44256111,0.0634928,-0.75508835'
    const userInput = '1.21575596,-0.03867236,1.9523043,-0.05555466,0.64485725,-0.8951552,-0.93924554,0.33053966,-1.40508642,0.0634928,1.21665571';
    pythonProcess.stdin.write(`${userInput}\n`);

    res.render("home");
    
})


let port = 8000;

app.listen(port, function() {
  console.log("Server started on port: ",port);
});