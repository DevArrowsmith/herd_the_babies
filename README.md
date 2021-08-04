# Herd the Babies

Write a function which takes a string as its argument. The string will consist of several 'baby' (lowercase) letters, that belong to a 'parent' (uppercase) letter.

The function should return a string that is sorted alphabetically, with the parent letter coming before its babies.

EXAMPLES: 

```javascript
herdTheBabies('aA') //should return 'Aa'
```


```javascript
herdTheBabies('aBA') //should return 'AaB'
```


```javascript
herdTheBabies('bbaBccAC') //should return 'AaBbbCcc'
```


"bbaBccAC"

[bbaBccAC]

If unicode above threshold (lowercse)
then subtract 11.5 from it ^__^'
before sort.

DUMB SOLUTION. But.. solution right?




Rules
Sort by case.

[A,C,B,a,c,b]





/*TODO:
    1. Set to run tests on save
    2. Sort out your herBabies import.
    */