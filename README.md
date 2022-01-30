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

Expected output: 

the 13
that 7
and 6
is 6
of 5
to 5
we 4
a 3
children 3
could 3
give 3
have 3
never 3
opportunity 3
parents 3
their 3
they 3
be 2
chance 2
chances 2
foundation 2
had 2
in 2
or 2
our 2
reading 2
so 2
still 2
them 2
while 2
would 2
21st 1
about 1
all 1
america 1
arrived 1
as 1
at 1
basic 1
because 1
better 1
block 1
building 1
can 1
century 1
child 1
citizens 1
dawn 1
do 1
dreams 1
education 1
educators 1
ensure 1
every 1
first 1
from 1
fulfill 1
gates 1
generations 1
hard 1
holds 1
immigrants 1
instill 1
it 1
knowledge 1
librarians 1
literacy 1
love 1
making 1
moment 1
most 1
necessary 1
on 1
positive 1
possible 1
power 1
responsibility 1
rich 1
sacrificed 1
same 1
shores 1
skill 1
success 1
successful 1
than 1
these 1
this 1
together 1
truly 1
try 1
unlocks 1
whatever 1
where 1
worked 1
world 1
