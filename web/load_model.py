import joblib
import sys

# Load the saved model from disk
model = joblib.load('/Users/jatin/Desktop/PPAI/wine_quality_analysis/model.joblib')
#print('Model loaded successfully')

# Define a function to receive user input and make predictions
def receive_input(input_string):
    input_list = [float(x) for x in input_string.split(',')]
    #print(f'Received input: {input_list}')
    prediction = model.predict([input_list])[0]
    #print(f'Prediction: {prediction}')
    sys.stdout.write(str(prediction))
    sys.stdout.flush()

# Loop to receive input from Node.js program
while True:
    # Read a message from the Node.js program
    message = sys.stdin.readline()
    # Pass the message to the receive_input function
    if not message:
        continue
    else:
        receive_input(message)
        break