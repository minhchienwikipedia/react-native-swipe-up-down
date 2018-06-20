
# react-native-swipe-up-down [![npm version](https://badge.fury.io/js/react-native-swipe-up-down.svg)](https://badge.fury.io/js/react-native-swipe-up-down)

## Demo
![](https://im.ezgif.com/tmp/ezgif-1-dce6f748e0.gif | width=250)

## Getting started

`$ npm install react-native-swipe-up-down --save`
#OR
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
  