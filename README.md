
# React Native Swipe Up Down 
[![npm version](https://badge.fury.io/js/react-native-swipe-up-down.svg)](https://badge.fury.io/js/react-native-swipe-up-down) ![](https://img.shields.io/github/issues/agiletechvn/react-native-swipe-up-down.svg) ![](https://img.shields.io/github/forks/agiletechvn/react-native-swipe-up-down.svg) ![](https://img.shields.io/github/stars/agiletechvn/react-native-swipe-up-down.svg) ![](https://img.shields.io/github/license/agiletechvn/react-native-swipe-up-down.svg)

[![NPM](https://nodei.co/npm/react-native-swipe-up-down.png?downloads=true&stars=true)](https://nodei.co/npm/react-native-swipe-up-down/)
## Why using this lib?
- Support iOS & Android
- The best performance 60FPS for UI and JS when swipe up down
- Easy to use, easy to install - no more another package, only JS

## Demo

|Full/Mini|Hidden component|
|---|---|
|<img src="https://raw.githubusercontent.com/agiletechvn/react-native-swipe-up-down/master/demo.gif" data-canonical-src="./demo.gif" width="300" height="536" />|<img src="https://raw.githubusercontent.com/agiletechvn/react-native-swipe-up-down/master/demo_hidden_component.gif" data-canonical-src="./demo.gif" width="300" height="536" />|

## Install

`npm install react-native-swipe-up-down --save`

- OR

`yarn add react-native-swipe-up-down`

## Usage
```javascript
import SwipeUpDown from 'react-native-swipe-up-down';

// TODO: What to do with the module?
<SwipeUpDown
	itemMini={(show) => <ItemFull show={show} />}
	itemFull={(hide) => <ItemFull hide={hide} />}
	onShowMini={() => console.log('mini')}
	onShowFull={() => console.log('full')}
	animation="spring"
	disableSwipeIcon
	extraMarginTop={100}
	style={{ backgroundColor: '#000' }} // style for swipe
/>
```

## Note 

If you want hidden component just don't pass props `itemMini`. It's will hidden. And then you can use `hasRef` to show it when you want.
And try to using this method to show FullComponent

```jsx
 const swipeUpDownRef = useRef();
 // Show component
 swipeUpDownRef.current.showFull();
 // This ref can help you show component when hidden component
 <SwipeUpDown
	itemFull={<Test />}
	ref={swipeUpDownRef}
/>
```

## More Props

### `animation`

```jsx
animation="easeInEaseOut" 
```
Optional 

* 'linear' 
* 'spring' 
* 'easeInEaseOut' 
* 'none'

### `swipeHeight` 
```jsx
swipeHeight={100} // Default 60
```
### `extraMarginTop` 
```jsx
extraMarginTop={24} // Default iOS: 24 | Android: 0 - Using for padding status bar iOS or max height full component
```
### `disableSwipeIcon` 
```jsx
disableSwipeIcon={true}
```
---

## License

This module is [MIT licensed](./LICENSE)

---
  
