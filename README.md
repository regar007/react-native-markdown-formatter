
# react-native-markdown-formatter

[![npm downloads](https://img.shields.io/npm/dm/react-native-markdown-formatter.svg?maxAge=2592000)](https://www.npmjs.com/package/react-native-markdown-formatter)   [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)    [![npm version](https://img.shields.io/npm/v/react-native-markdown-formatter.svg)](https://www.npmjs.com/package/react-native-markdown-formatter)

A **Customizable Markdown Library** for rendering Markdown in React Native with native components, working with both iOS & Android.

Custom markdown rules for your application is possible now without any regex learning. Just follow the simple guidelines shown bellow.   

**[Demo](#demo)**

## Getting started

Install the node module:

`$ yarn add react-native-markdown-formatter`

or with npm:

`$ npm install --save react-native-markdown-formatter`

Then see **[Library Usage](#library-Usage)** for futher details

## Runnning the example code

`$ cd MarkdownFormatter`

`$ npm install`

`$ react-native run-android/run-ios`

Tip:
> If there is build issue with above command then try running it from Studio/XCode.

## Markdown Patterns Usage

### Default Configuration:

* '\_italic_' will result in '_italic_'.
* '\*\*bold**' will result in '**bold**'.
* '\[Title](link)' will result in [Title](link).
* '- bullet 1\r - bullet2\r - bulltet 3' will result in following way
   ```
    . bullet 1 
    . bullet2
    . bullet 3
    ```
* 1\. numbered 1\r 2. numbered2\n 3. numbered 3' will result in following way
    ```
    1. numbered 1 
    2. numbered2
    3. numbered 3
    ```

### Custom Configurations:
To replace or to be added with default config.
   
*       {
            type: 'italic',
    		styles: [],
    		pattern: ['-'],
    		patternType: 'symmetric',
    		groups:1,
        }
	
    The above pattern will render '\-italic-' in '_italic_'.

*       {
    		type: 'bullet',
    		styles: [],
    		pattern: ['\\$[\\s]+((.*?)[\\n|\\r](?=\\$[\\s]+)|(.*?)$)'],
    		patternType: 'custom',
    		groups: 1,
    	},

    The above pattern will convert 'bullet list $ Item 1.1\r$ Item -2.2-\r$ Item 3\r' in following way: 
    
    ```
    bullet list
    . Item 1.1
    . Item -2.2-
    . Item 3
    ```
    
*   One can create custom markdown based on project need and render it within text.

*   One can also send the whole regex itself with pattern type _custom_ to have complete control on markdown to apply regex on text and render it
     
## Library Usage

```javascript
import RNMarkdownFormatter from 'react-native-markdown-formatter';
```

User can send their custom regex and styles also to apply on text.
```js
// user custom config to be added to default configs
var customMarkdownFormatterRegex = [
	{
		type: 'bullet', // this will replace the default bullet config with user specified config.
		styles: [],
		pattern: ['\\$[\\s+](.*?)[\\n|\\r]'],
		patternType: 'custom',
		groups: 1,
	},
	{
		type: 'italic',
		styles: [],
		pattern: ['-'],
		patternType: 'symmetric',
		groups:1,
	}
];

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

In your `Component`'s `render()` method you can then render markdown via JSX e.g.

```jsx
<View>
	<RNMarkdownFormatter 
		defaultStyles={textBlockComputedStyle} 
		numberOfLines={0} // 1(no wrap text) or 0(wrap text)
		text={exampleText[5]} 
		regexArray={customMarkdownFormatterRegex}/>
</View>

```

```js
// formatter default pattern configs which user does not have to pass to markdown
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
```

### Demo:

![example](https://raw.githubusercontent.com/regar007/react-native-markdown-formatter/master/example1.gif)
