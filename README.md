# wine_quality_analysis

Introduction:
The Wine Quality Analysis project aims to analyze the chemical composition of different wines and predict their quality using machine learning. The project involves data analysis and visualization to gain insights into the chemical properties of the wines, and then building a machine learning model to predict the quality of wine based on these properties.

Data Preprocessing:
The wine quality dataset was obtained from a GitHub repository and loaded using the Pandas library. The dataset contained 1599 rows and 12 columns. The quality column was transformed into a binary column, where quality ratings from 2 to 6 were considered as "bad" and ratings from 7 to 8 were considered as "good".

Data Analysis and Visualization:
Data visualization was done using the Seaborn and Matplotlib libraries. The visualization results showed that the fixed acidity and residual sugar did not give any specification to classify the quality of wine. However, the volatile acidity and chloride levels decreased as the quality of wine increased. Citric acid, sulphates, and alcohol levels increased with the quality of wine.

Model Building:
The machine learning models used for the project were Random Forest, Stochastic Gradient, and Support Vector Classifier. The Random Forest model gave an accuracy of 89%, Stochastic Gradient gave an accuracy of 85%, and Support Vector Classifier gave an accuracy of 88%. Grid Search CV was used to optimize the parameters of Support Vector Classifier, and the accuracy improved from 88% to 90%. Cross-validation was also used to improve the accuracy of the Random Forest model from 89% to 91%.

Conclusion:
The Wine Quality Analysis project provided insights into the chemical properties of wine and helped build machine learning models to predict the quality of wine based on these properties. The project achieved an accuracy of 91% using the Random Forest model and demonstrated the importance of data analysis and visualization in machine learning projects.
