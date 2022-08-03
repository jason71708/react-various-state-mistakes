# React Various State Mistakes

This is about several common mistakes about React state.

![preview](./preview.jpg)

- [Clean Effect](#clean-effect)
- [Sequential Upload](#sequential-upload)
- [Multiple Set State](#multiple-set-state)

## Clean Effect

`React.useEffect` will excute every time when state in dependency was change.
In previous excution of `React.useEffect`, the states it used isn't same as the new states after update.
So in `React.useEffect`, it should return a function (clean effect), that do something to unsubscribe (like `eventListener`) or cancel (like `setTimeInterval`) to prevent use old state and excute callback function multiple time.
The clean effect fuction will be invoke before next `React.useEffect` excute.

## Sequential Upload

In React component, if state isn't a primitive type, state's reference will be different from previous update.

## Multiple Set State

If there are multiple `setState`s excute in a update and only give a value to `setState`, final state will be the last one.
Give `setState` a callback function can get the updated state by previous `setState`.
And then, useing updated state in callback function to do some calulate and return a new state.