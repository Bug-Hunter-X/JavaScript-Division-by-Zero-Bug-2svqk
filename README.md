# JavaScript Division by Zero Bug

This repository demonstrates a common error in JavaScript: division by zero.  The `foo` function is designed to divide `a` by `b`, but it doesn't include sufficient error handling to prevent a division by zero when `b` is 0.

## Bug Description

The `foo` function lacks error handling for the case where the second argument (`b`) is 0. This will lead to an exception being thrown when the function is called with a zero value for the second parameter.  The code also demonstrates how the function works correctly when `a` is 0, demonstrating an asymmetric handling of zero that's also a bug.

## Solution

A robust solution involves checking for division by zero before performing the calculation. The solution file shows this improvement.  It also adds better handling for the edge case of a zero numerator.