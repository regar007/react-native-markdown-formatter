/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import * as React from 'react';
import { Platform, StyleSheet, Text, View, Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
// import MarkdownFormatter from 'react-native-markdown-formatter';
import MarkdownFormatter from '../MarkdownFormatter/src/index'


const styles = StyleSheet.create({
	vertical: {
		transform: [{ rotate: '90deg'}]
	},
	heading:{
		fontSize: 20,
		textAlign: 'justify',
		margin: 20,
	},
	scene: {
		flex: 1,
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 20,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
	markdown: {
		fontSize: 24,
		margin: 10,
		alignItems: 'flex-start'
	},
	boldText: {
		fontWeight: 'bold',
	},

	italicText: {
		fontStyle: 'italic',
	},
	hyperlinkText: {
		color: 'blue',
		textDecorationLine: 'underline',
	},

});


// user custom config to be added to default configs
var customMarkdownFormatterRegex = [
	{
		type: 'bullet', // this will replace the default bullet config with user specified config.
		styles: [],
		pattern: ['\\$[\\s]+((.*?)[\\n|\\r](?=-[\\s]+)|(.*?)$)'],
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

MD_FORMATTER_CONFIG = [
	{
		type: 'numbered',
		styles: [],
		pattern: ["\\d.", '\\r|\\n'],
		patternType: 'start-end',
		groups: 1,
	},  
	{
		type: 'bullet',
		styles: [],
		pattern: ['-', '\\r|\\n'],
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

let exampleTexts = [
	"This is a _Italic_ text",
	"This is a **Bold** text",
	"This is a [Adaptive Cards](http://adaptivecards.io) hyperlink text",
	"This is a **bullet** list - Item **1**.1\r- Item _2.2_\r- Item 3\r ",
	"This is a _numbered_ list 1. _Green_\r2. Orange\r3. **Blue**\r",
	"This is a -custom markdown- for bullet list $ Item **1**.1\r$ Item -2.2-\r$ Item 3\r ",
	"This is a mixed **_bold/italic_** which also supports **_Type_One** _Type**Two**_ text",
	"This is a mixed lists \n**bullet** list - Item **1**.1\r- Item _2.2_\r- Item 3\r and _numbered_ list 1. _Green_\r2. Orange\r3. **Blue**\r",
	"Test String: This is a custom markdown for bullet list - Bullet\r - List\r- Item   Hello.      \r-        Last-Item",
];
const FirstRoute = () => (
	<View style={styles.container}>
		<MarkdownFormatter
			defaultStyles={[styles.markdown]}
			numberOfLines={0} // 1 or 0
			text={exampleTexts[0]}
			regexArray={[]} />
	</View>
);
const SecondRoute = () => (
	<View style={styles.container}>
		<MarkdownFormatter
			defaultStyles={[styles.markdown]}
			numberOfLines={0} // 1 or 0
			text={exampleTexts[1]}
			regexArray={[]} />
	</View>
);
const ThirdRoute = () => (
	<View style={styles.container}>
		<MarkdownFormatter
			defaultStyles={[styles.markdown]}
			numberOfLines={0} // 1 or 0
			text={exampleTexts[2]}
			regexArray={[]} />
	</View>
);
const FourthRoute = () => (
	<View style={styles.container}>
		<MarkdownFormatter
			defaultStyles={[styles.markdown]}
			numberOfLines={0} // 1 or 0
			text={exampleTexts[3]}
			regexArray={[]} />
	</View>
);
const FifthRoute = () => (
	<View style={styles.container}>
		<MarkdownFormatter
			defaultStyles={[styles.markdown]}
			numberOfLines={0} // 1 or 0
			text={exampleTexts[4]}
			regexArray={[]} />
	</View>
);
const SixthRoute = () => (
	<View style={styles.container}>
		<MarkdownFormatter
			defaultStyles={[styles.markdown]}
			text={exampleTexts[5]}
			regexArray={customMarkdownFormatterRegex} />
	</View>
);

const SeventhRoute = () => (
	<View style={styles.container}>
		<MarkdownFormatter
			defaultStyles={[styles.markdown]}
			numberOfLines={0} // 1 or 0
			text={exampleTexts[6]}
			regexArray={[]} />
	</View>
);
const EightRoute = () => (
	<View style={styles.container}>
		<MarkdownFormatter
			defaultStyles={[styles.markdown]}
			numberOfLines={0} // 1 or 0
			text={exampleTexts[7]}
			 />
	</View>
);

export default class App extends React.Component {
	state = {
		index: 0,
		routes: [
			{ key: 'first', title: 'Italic' },
			{ key: 'second', title: 'Bold' },
			{ key: 'third', title: 'Hyperlink' },
			{ key: 'fourth', title: 'Bullet' },
			{ key: 'fifth', title: 'Numbered' },
			{ key: 'sixth', title: 'Custom' },
			{ key: 'seventh', title: 'Mixed 1' },
			{ key: 'eight', title: 'Mixed 2' },
		],
	};
	render() {

		return (
			<View style={[styles.container]}>
			<Text style={styles.welcome}>Welcome to React Native Markdown Formatter!</Text>
			<TabView
				navigationState={this.state}
				renderScene={SceneMap({
					first: FirstRoute,
					second: SecondRoute,
					third: ThirdRoute,
					fourth: FourthRoute,
					fifth: FifthRoute,
					sixth: SixthRoute,
					seventh: SeventhRoute,
					eight: EightRoute,
				})}
				onIndexChange={index => this.setState({ index })}
				initialLayout={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
			/>
			</View>
		);
	}
}



const markdownStyles = {
	heading1: {
	  fontSize: 24,
	  color: 'purple',
	},
	link: {
	  color: 'pink',
	},
	mailTo: {
	  color: 'orange',
	},
	text: {
	  color: '#555555',
	},
  }

