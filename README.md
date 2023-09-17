# carry

A simple function to carry arguments

## Example 
```typescript
const add = (a, b) => a + b;
const cAdd = carry(add);

console.log(cAdd(2)(3)); // Output: 5
```
