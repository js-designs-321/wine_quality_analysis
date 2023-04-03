# Wine Quality Analysis

This project analyzes a dataset of red wine properties to determine the relationship between these properties and the quality of wine. The data is then used to create machine learning models to classify wine as either 'good' or 'bad' quality. The main goal of the project is to determine which wine properties contribute to better quality wine and to create a machine learning model that can predict the quality of wine based on its properties.

## Requirements

- pandas
- seaborn
- matplotlib
- scikit-learn

## Data

The dataset used in this project is the `winequality-red.csv` file. It contains the following columns:

- fixed acidity
- volatile acidity
- citric acid
- residual sugar
- chlorides
- free sulfur dioxide
- total sulfur dioxide
- density
- pH
- sulphates
- alcohol
- quality (score between 2 and 8)

## Methodology

1. Data cleaning and exploration: The dataset was cleaned and missing values were removed. Exploratory data analysis was conducted to understand the distribution of the data and the relationships between features.

2. Data visualization: Data visualization was used to determine the linear relationship between features and quality. This step helped to identify which wine properties are most important in determining the quality of wine.

3. Encoding the quality column: The quality column was encoded as binary 'good' or 'bad' using a threshold value of 6.5. This step converted the quality column from a continuous variable to a categorical variable.

4. Splitting data into training and testing sets: The data was split into training and testing sets in a ratio of 80:20.

5. Scaling data using StandardScaler: The data was scaled using the StandardScaler function from scikit-learn. This step was necessary to ensure that all features have the same scale and range.

6. Training machine learning models: Three machine learning models were trained: RandomForestClassifier, SGDClassifier, and SVC. These models were selected because they are known to perform well in classification tasks.

7. Evaluating models: The models were evaluated using the classification report, which provides metrics such as precision, recall, and F1-score. This step helped to determine which model performed the best.

8. Improving model performance: GridSearchCV was used to tune the hyperparameters of the SVC model. This step helped to improve the accuracy of the SVC model.

9. Evaluating model performance using cross-validation: The performance of the RandomForestClassifier model was further improved by using cross-validation.

## Results

- RandomForestClassifier achieved an accuracy of 89%
- SGDClassifier achieved an accuracy of 85%
- SVC achieved an accuracy of 88%
- GridSearchCV was used to tune hyperparameters of SVC, resulting in an improved accuracy of 90%
- RandomForestClassifier achieved an accuracy of 91% using cross-validation

## Conclusion

From the analysis, it can be concluded that the wine properties with the most significant linear relationship with quality are volatile acidity, citric acid, chlorides, sulphates, and alcohol. RandomForestClassifier performed the best out of the three machine learning models tested, with an accuracy of 89%. GridSearchCV was able to improve the performance of the SVC model from 88% to 90%. The accuracy of RandomForestClassifier was further improved to 91% using cross-validation.

## Usage

A website has been created based on this analysis to predict whether a wine is of 'good' or 'bad' quality. 

## Technologies Used

- Node.js
- Express
- EJS

## Installation

1. Clone this repository
    ```
    git clone https://github.com/js-designs-321/wine_quality_analysis
    ```
2. Navigate to the project directory and install the dependencies
    ```
    cd wine-tester
    npm install
    ```
3. Start the application
    ```
    node app.js
    ```
4. Open your browser and navigate to [http://localhost:8000](http://localhost:8000)

## Working

Once the application is running, you can use it to make wine quality predictions. To do this, follow these steps:

1. Click on the "Start prediction" button on the home page
2. Fill out the input form with the relevant wine features
3. Click the "Submit" button to make a prediction
4. The application will display the predicted wine quality on the results page

## Author
- [@jatin.saini](https://github.com/js-designs-321)
