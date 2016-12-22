/*
We work at Netflix, and new data has just reached our developer team.

Most Netflix users have a limited amout of free time to watch shows / movies, but usually want
to watch exactly two episodes / movies during their break.

Build an algorithm, that given the users free time, and a list of lengths for their favorite shows,
returns True if two movies exist such that the sum of their lengths is exactly equal to the users free time.

Example:

Input: User Time: 200 minutes. Array of Show Lengths: [43,21,100,100, 26,12,56];

Output: True -> The user can select to watch both 100 minutes episodes consecutively.

Constraint: Do not use nested for loops.

Hint: Use the JS Set() object. 

*/