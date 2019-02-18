
# react-native-markdown-formatter

## Getting started

Install the node module:

`yarn add react-native-markdown-formatter`

or with npm:

`npm install --save react-native-markdown-formatter`

Then see Usage for futher details

## Usage

```javascript
import RNMarkdownFormatter from 'react-native-markdown-formatter';
```

In your `Component`'s `render()` method you can then render markdown via JSX e.g.

```js
// formatter default pattern configs
MD_FORMATTER_CONFIG = [
	{
		type: 'numbered',
		styles: [],
		pattern: ["\\d.", '\\r'],
		patternType: 'start-end',
		groups: 1,
	},  
	{
		type: 'bullet',
		styles: [],
		pattern: ['-', '\\r'],
		patternType: 'start-end',
		groups: 1,
	},  
	{
		type: 'bold',
		styles: [styles.boldText],
		pattern: ['**'],
		patternType: 'symmetric',
		groups: 1,
	},
	{
		type: 'italic',
		styles: [styles.italicText],
		pattern: ['_'],
		patternType: 'symmetric',
		groups: 1,
	},
	{
		type: 'hyperlink',
		styles: [styles.hyperlinkText],
		pattern: ['[]()'],
		patternType: 'asymmetric',
		groups: 2,
	},
];

// user custom config to be added to default configs
var markdownFormatterRegex = [{
		type: 'bullet', // this will replace the default bullet config with user specified config.
		styles: [styles.bulletText],
		pattern: ['\-(?= )(.*?)\\r'],
		patternType: 'custom',
		groups: 1,
}];

//TextBlock styles
let textBlockComputedStyle = [];
textBlockComputedStyle.push({
	fontSize: 14,
	color: "red",
});

let text = "This is _italic_ and **Bold_italic_** text, This is **_Italic within Bold_** text (bold italic text), This is more than one hyperlink text => [Adaptive Cards](http://adaptivecards.io),  [**Adaptive** Cards 2](http://adaptivecards.io), This is a bullet list - Item **1** 1\r- _Item_ 2 2\r- Item 3\r This is a numbered list 1. _Green_\r2. Orange\r3. Blue\r One more list 1. One-1\r2. Two: 2\r3. **Three** 3.0\r ";

```
```jsx
<RNMarkdownFormatter 
	defaultStyles={textBlockComputedStyle} 
	numberOfLines={numberOfLines} // 1 or 0
	text={text} 
	regexArray={markdownFormatterRegex}/>

```
  

The above usage renders in following way:

![example](https://raw.githubusercontent.com/regar007/react-native-markdown-formatter/master/example.png)
