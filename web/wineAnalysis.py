import joblib
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
from sklearn.ensemble import RandomForestClassifier
from sklearn.svm import SVC
from sklearn.linear_model import SGDClassifier
from sklearn.metrics import confusion_matrix, classification_report
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.model_selection import train_test_split, GridSearchCV, cross_val_score

url = 'https://raw.githubusercontent.com/js-designs-321/wine_quality_analysis/main/winequality-red.csv'
wine = pd.read_csv(url)

bins = (2, 6.5, 8)
group_names = ['bad', 'good']
wine['quality'] = pd.cut(wine['quality'], bins = bins, labels = group_names)

label_quality = LabelEncoder()

wine['quality'] = label_quality.fit_transform(wine['quality'])

#Bad becomes 0 and good becomes 1

X = wine.drop('quality', axis = 1)
y = wine['quality']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.2, random_state = 42)

sc = StandardScaler()

X_train = sc.fit_transform(X_train)
X_test = sc.fit_transform(X_test)

model = SVC(C = 1.2, gamma =  0.9, kernel= 'rbf')
model.fit(X_train, y_train)

joblib.dump(model, 'model.joblib')