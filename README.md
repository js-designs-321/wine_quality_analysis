# Wine Quality Analysis

This project analyzes a dataset of red wine properties to determine the relationship between these properties and the quality of wine. The data is then used to create machine learning models to classify wine as either 'good' or 'bad' quality.

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
- quality (score between 0 and 10)

## Methodology

1. Data cleaning and exploration
2. Data visualization to determine linear relationship between features and quality
3. Encoding the quality column as binary 'good' or 'bad'
4. Splitting data into training and testing sets
5. Scaling data using StandardScaler
6. Training machine learning models: RandomForestClassifier, SGDClassifier, and SVC
7. Evaluating models using classification report
8. Improving model performance using GridSearchCV to tune hyperparameters
9. Evaluating model performance using cross-validation

## Results

- RandomForestClassifier achieved an accuracy of 89%
- SGDClassifier achieved an accuracy of 85%
- SVC achieved an accuracy of 88%
- GridSearchCV was used to tune hyperparameters of SVC, resulting in an improved accuracy of 90%
- RandomForestClassifier achieved an accuracy of 91% using cross-validation

## Conclusion

From the analysis, it can be concluded that the wine properties with the most significant linear relationship with quality are volatile acidity, citric acid, chlorides, sulphates, and alcohol. RandomForestClassifier performed the best out of the three machine learning models tested, with an accuracy of 89%. GridSearchCV was able to improve the performance of the SVC model from 88% to 90%. The accuracy of RandomForestClassifier was further improved to 91% using cross-validation.
