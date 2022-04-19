TOTAL DELIVERY COST OF A PACKAGE

Calculate Delivery cost with offers

To Run the application

Make sure to have node 12 plus will do (I had - v14.16.1)

Install the dependencies (npm install) Run the unit test cases (npm test)
```
npm install
npm test
node index.js
```

It then waits for you to provide test data like:

```
100 3
PKG1 25 5 OFR001
PKG2 15 5 OFR002
PKG3 10 100 OFR003
```

Press ENTER after last command and then close (CTRL + C) to get the output.


Explanation of example

```
First Line of input
100 - Base Delivery Cost
3 - No of packages
```

```
Second and so on (line of input)
PKG1 - Package ID
25 - weight of package
5 - distance in kms
OFR001 - Offer Code
```