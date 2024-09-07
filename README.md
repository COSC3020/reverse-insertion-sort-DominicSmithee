# Reverse Insertion Sort

I took information from HTML cheat sheet to remember javascript syntax. I used Programiz as an online javascript compiler to play with normal insertion sort.
I used Geekforgeeks.org to remember big O notation and how to deduce average case time complexities based off of observing unit tests and watching comparisons. 
I also used freecodecamp.org to remember how to manipulate arrays in javascript, specifically how to find if an array is empty and how to manipulate array variables.
I built my code off the example used below, covered in class.

I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.

Consider the code for insertion sort we covered in class:

```javascript
function insertionSort(arr) {
  for(var i = 1; i < arr.length; i++) {
    var val = arr[i];
    var j;
    for(j = i; j > 0 && arr[j-1] > val; j--) {
      arr[j] = arr[j-1];
    }
    arr[j] = val;
  }
  return arr;
}
```

Change this function such that it works from the end of the array rather than
the beginning, `insertionSortReverse()` -- only the direction of
iterating over the elements is reversed, the array is still sorted the same way
(ascending). Add your code in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Average-Case Time Complexity of Insertion Sort

In the lectures, we covered that insertion sort has best-case time complexity of
$\Theta(n)$ and worst-case time complexity of $\Theta(n^2)$. What is the
average-case time complexity ($\Theta$)?

Hint: Think about what happens in each iteration of the loop, and how often the
loop is executed. Keep in mind that for asymptotic analysis we don't care about
constant factors.

Describe your reasoning and the conclusion you've come to. Your reasoning is
most important -- you can easily find the answer, but you need to demonstrate
that you've understood the concept. Add your answer to this markdown file.

ANSWER:
The best-case scenario for my reverse insertion sort would be an empty list. This would just have one return call, so the best-case time complexity would be the same as
a normal insertion sort, O(N) where N is how many units are in my sorted input array. The worst case would be a reverse sorted array, where every unit needs to be compared
to another unit N times, resulting in the same worst-case time complexity as a normal insertion sort: O(N^2). As stated before, for worst case, every N is compared N times.
This is also true for the average case: an 'averagely' sorted array will still have to compare each unit N times, as each unit may or may not be out of order, and the 
relativley simple algorithm should still have to compare units N times. It will compare, swap if needed (a constant factor), then compare again. This is unlike a sorted 
array, which only compares once. As such, average case should be O(N^2) just like it was for best case, just like it is in normal insertion sort. 
