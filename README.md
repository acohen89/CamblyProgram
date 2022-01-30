Adam Cohen Cambly Programming Exercise 01/30/22
-----------------------------------------------------
CamblyProgram.js takes an input of a string and sorts 
it's sub strings in descending order by frequency, 
and ascending order alphabetically when multiple 
words occur with the same frequency.

To find the necessary location needed to insert the 
corresponding word and freq, the findLoc function 
is used. Adapted from this source: 
https://www.geeksforgeeks.org/what-is-the-efficient-way-to-insert-a-number-into-a-sorted-array-of-numbers-in-javascript/ ,  findLoc uses a binary search technique
to correctly find the location in O(log(n)) time. 