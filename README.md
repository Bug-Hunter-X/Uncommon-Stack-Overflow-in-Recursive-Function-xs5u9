# Uncommon Stack Overflow Bug in Recursive JavaScript Function

This repository demonstrates a subtle bug in a recursive JavaScript function that can lead to a stack overflow error. The function `foo` is intended to calculate something, but it has a flaw in its base cases, causing infinite recursion under certain conditions.

## Bug Description

The `foo` function uses recursion to achieve its goal. However, the base cases (conditions that stop the recursion) are incomplete. If `a` and `b` do not reach 0 at the same time, the recursion will continue indefinitely, leading to a stack overflow.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js`.
3. Run the function with inputs where `a` and `b` don't reach 0 simultaneously.  For example, `foo(5,3)` will cause a stack overflow.

## Solution

The solution involves correctly defining the base cases to ensure the recursion terminates properly. See `bugSolution.js` for a corrected version of the code.