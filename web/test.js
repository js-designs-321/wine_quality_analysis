const { spawn } = require('child_process');

const pythonProcess = spawn('/opt/homebrew/bin/python3', ['./load_model.py']);

pythonProcess.stdout.on('data', (data) => {
  console.log(`Output from Python script: ${data}`);
});

pythonProcess.stderr.on('data', (data) => {
  console.error(`Error from Python script: ${data}`);
});

pythonProcess.on('error', (error) => {
  console.error(`Failed to start Python script: ${error}`);
});

pythonProcess.on('close', (code) => {
  console.log(`Python script exited with code ${code}`);
});

function predict(input) {
  return new Promise((resolve, reject) => {
    pythonProcess.stdin.write(`${input}\n`);
    pythonProcess.stdout.once('data', (data) => {
      resolve(parseFloat(data));
    });
    pythonProcess.stderr.once('data', (data) => {
      reject(new Error(`Error from Python script: ${data}`));
    });
  });
}

async function testPrediction() {
  const userInput = '-0.33399129,0.24258119,-0.96313679,0.02140418,0.83730066,-0.16962178,0.00884052,0.23074469,-0.44256111,0.0634928,-0.75508835';
  try {
    const prediction = await predict(userInput);
    console.log(`Prediction: ${prediction}`);
  } catch (error) {
    console.error(`Prediction failed: ${error.message}`);
  }
}

testPrediction();