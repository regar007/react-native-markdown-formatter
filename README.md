
# react-native-markdown-formatter

## Getting started

Install the node module:

`yarn add react-native-markdown-formatter`

or with npm:

`npm install --save react-native-markdown-formatter`

Then see Usage for futher details

## Example

```
cd MarkdownFormatter

npm install

react-native run-android/run-ios

```

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

User can send their custom regex also to aply on text
// user custom config to be added to default configs
var customMarkdownFormatterRegex = [{
		type: 'bullet', // this will replace the default bullet config with user specified config.
		styles: [],
		pattern: ['\\$(?= )(.*?)\\r'],
		patternType: 'custom',
		groups: 1,
}];

//TextBlock styles
let textBlockComputedStyle = [];
textBlockComputedStyle.push({
	fontSize: 24,
	margin: 10,
	alignItems: 'flex-start'
);

let exampleTexts = [
	"This is a _Italic_ text",
	"This is a **Bold** text",
	"This is a [Adaptive Cards](http://adaptivecards.io) hyperlink text",
	"This is a **bullet** list - Item **1**.1\r- Item _2.2_\r- Item 3\r ",
	"This is a _numbered_ list 1. _Green_\r2. Orange\r3. **Blue**\r",
	"This is a custom markdown for bullet list $ Item **1**.1\r$ Item _2.2_\r$ Item 3\r ",
	"This is a mixed **_bold/italic_** which also supports **_Type_One** _Type**Two**_ text",
	"This is a mixed lists \n**bullet** list - Item **1**.1\r- Item _2.2_\r- Item 3\r and _numbered_ list 1. _Green_\r2. Orange\r3. **Blue**\r",
];
```
```jsx
<RNMarkdownFormatter 
	defaultStyles={textBlockComputedStyle} 
	numberOfLines={0} // 1(no wrap text) or 0(wrap text)
	text={exampleText[5]} 
	regexArray={customMarkdownFormatterRegex}/>

```

### The above usage renders in following way:

![example](https://raw.githubusercontent.com/regar007/react-native-markdown-formatter/master/example1.gif)
