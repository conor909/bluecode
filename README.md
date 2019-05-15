### Code Challenge for Bluecode

View the hosted app at [conor909.github.io/bluecode](https://conor909.github.io/bluecode/)

Main code is in `src/Pages/Home` & `src/Components`

The checksum code is in `src/utils/checksum.js` & `src/utils/checksum.test.js`

To run the app `npm start` or `yarn start`

To run the tests `npm test` or `yarn test`


### The challenge

# The task is to create a barcode editor for an imaginary format with following features
• Available as a standalone single page application with no server calls
• Should run on latest Chrome with no plugins installed
• Allows input of digits up to maximum of 19
• Calculates a checksum digit for given digits
• Displays the barcode with given digits and the checksum digit
• Scales fluidly to different sizes
• Allows changing of primary and secondary colour
• Adding and removing digits or changing colours should change the barcode displayed in real
time
• Contains appropriate automated tests
Note: The checksum algorithm should be implemented from scratch without use of a 3rd party
library that might already provide this functionality.

# Checksum calculation
1. Add up the digits in odd positions and multiply by 3
2. Add up the digits in even positions
3. Add up the results of 1 and 2
4. Divide by 10 and take the remainder.
5. If the remainder is 0 final result is 0 otherwise subtract it from 10 for final result

# Example
5 4 8 9 8 5 0 3 5 4
1. 5 + 8 + 8 + 0 + 5 = 26 * 3 = 78
2. 4 + 9 + 5 + 3 + 4 = 25
3. 78 + 25 = 103
4. 103 / 10 = 10.3 = 3
5. 10 - 3 = 7

# Barcode layout
The barcode should represent each digit as a single bar. The bars grow in height and width as the
numbers increase. Guidelines for the bars as follows

0. Thinnest and shortest
1. Same thickness as 0 but clearly taller
2. Same thickness as 0 but taller than 1
3. Same thickness as 0 and tallest in the set
4. Thicker than 0 but same height
5. Same thickness as 4 but taller than 4
6. Same thickness as 4 but taller than 5
7. Same thickness as 4 and tallest in the set
8. Thickest in the set and shortest
9. Same thickness as 8 but tallen than 8

The differences in width and height should be significant and clear
One potential solution for digits 0 to 9 could look like this

#Barcode style
You are free to design the interface for editing & the style of the barcode but it should have these
characteristics
• All the bars should use the primary colour prominently except for the checksum digit
• The checksum digit at the end should mainly use the secondary colour and be distinguishable
• It is not necessary to show the digits on the bars but you are free to do so
