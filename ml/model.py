import sys
import numpy as np
from sklearn.linear_model import LinearRegression

if len(sys.argv) < 4:
    print("0")
    sys.exit()

temp = float(sys.argv[1])
humidity = float(sys.argv[2])
wind = float(sys.argv[3])

X = np.array([
    [25, 60, 5],
    [30, 70, 6],
    [35, 80, 7],
    [28, 65, 4],
    [32, 75, 6]
])

y = np.array([26, 31, 36, 29, 33])

model = LinearRegression()
model.fit(X, y)

prediction = model.predict([[temp, humidity, wind]])

print(prediction[0])