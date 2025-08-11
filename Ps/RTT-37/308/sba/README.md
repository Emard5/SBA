## JS Fundamental SBA

This script processes course, assignment, and learner submission data to calculate each learner’s assignment scores and overall average as a percentage out of 100.
It also:

A 10% penalty if a submission is past due date.
And if an assignment isn't due it skips it.
This code validates incoming data to catch common issues early.
If dates are ivalid it prints an error code.
The process outputs an array of learner object with {id,assignments id, avg}