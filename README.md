
# React Native Swipe Up Down 
[![npm version](https://badge.fury.io/js/react-native-swipe-up-down.svg)](https://badge.fury.io/js/react-native-swipe-up-down) ![](https://img.shields.io/github/issues/agiletechvn/react-native-swipe-up-down.svg) ![](https://img.shields.io/github/forks/agiletechvn/react-native-swipe-up-down.svg) ![](https://img.shields.io/github/stars/agiletechvn/react-native-swipe-up-down.svg) ![](https://img.shields.io/github/license/agiletechvn/react-native-swipe-up-down.svg)

[![NPM](https://nodei.co/npm/react-native-swipe-up-down.png?downloads=true&stars=true)](https://nodei.co/npm/react-native-swipe-up-down/)
## This module support iOS & Android
## Demo
<img src="https://raw.githubusercontent.com/agiletechvn/react-native-swipe-up-down/master/demo.gif" data-canonical-src="./demo.gif" width="300" height="536" />

### When hidden component
<img src="https://raw.githubusercontent.com/agiletechvn/react-native-swipe-up-down/master/demo_hidden_component.gif" data-canonical-src="./demo.gif" width="300" height="536" />

## Getting started

`$ npm install react-native-swipe-up-down --save`

- OR

`$ yarn add react-native-swipe-up-down`

## Usage
```javascript
import SwipeUpDown from 'react-native-swipe-up-down';

// TODO: What to do with the module?
<SwipeUpDown		
	itemMini={<ItemMini />} // Pass props component when collapsed
	itemFull={<ItemFull />} // Pass props component when show full
	onShowMini={() => console.log('mini')}
	onShowFull={() => console.log('full')}
	onMoveDown={() => console.log('down')}
	onMoveUp={() => console.log('up')}
	disablePressToShow={false} // Press item mini to show full
	style={{ backgroundColor: 'green' }} // style for swipe
/>
```

## More Props

## Note 

If you want hidden component just don't pass props `itemMini`. It's will hidden. And then you can use `hasRef` to show it when you want.

### `hasRef` 
```jsx
 hasRef={ref => (this.swipeUpDownRef = ref)} 
 // This ref can help you show component when hidden component
 <Text onPress={() => this.swipeUpDownRef.showFull()}>Show</Text>
```

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
---

## License

This module is [MIT licensed](./LICENSE)

---
  
