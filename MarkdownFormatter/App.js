/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import * as React from 'react';
import { Platform, StyleSheet, Text, View, Dimensions, Picker } from 'react-native';
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
	contentBody:{
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#F5FCFF',
	},
	contentTitle: {
		fontSize: 30,
		flex: 1,		
		// justifyContent: 'flex-start',
		textAlign: 'center',
		color: 'grey'
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
	header1:{
		fontWeight: 'bold',
		fontSize: 30,
	},
	header2:{
		fontWeight: 'bold',
		fontSize: 40,
	},

});


// user custom config to be added to default configs
var customMarkdownFormatterRegex = [
	// {
	// 	type: 'bullet', // this will replace the default bullet config with user specified config.
	// 	styles: [],
	// 	pattern: ['\\$[\\s]+((.*?)[\\n|\\r](?=-[\\s]+)|(.*?)$)'],
	// 	patternType: 'custom',
	// 	groups: 1,
	// },
	{
		type: 'bullet', // this will replace the default bullet config with user specified config.
		styles: [],
		pattern: ['*', '\\r'],
		patternType: 'start-end',
		groups: 1,
	},
	{
		type: 'italic',
		styles: [],
		pattern: ['-'],
		patternType: 'symmetric',
		groups:1,
	},
	{
		type: 'customHeader1',
		styles: [styles.header1],
		pattern: ['**'],
		patternType: 'symmetric',
		groups: 1,
	},
	{
		type: 'customHeader2',
		styles: [styles.header2],
		pattern: ['##'],
		patternType: 'symmetric',
		groups: 1,
	},

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
	"This is a -custom markdown- for bullet list * Item **1**.1\r* Item -2.2-\r* Item 3\r ",
	"This is a mixed **_bold/italic_** which also supports **_Type_One** _Type**Two**_ text",
	"This is a mixed lists \n**bullet** list - Item **1**.1\r- Item _2.2_\r- Item 3\r and _numbered_ list 1. _Green_\r2. Orange\r3. **Blue**\r",
	"This is a \n**header1** \nand \n##header2## \ntext"
	// "Test String: This is a custom markdown for bullet list - Bullet\r - List\r- Item   Hello.      \r-        Last-Item",
];
const FirstRoute = () => (
	<View style={styles.container}>
		<Text style={styles.contentTitle}>Eg. Italic</Text>
		<MarkdownFormatter
			defaultStyles={[styles.markdown].concat([styles.container])}
			numberOfLines={0} // 1 or 0
			text={exampleTexts[0]}
			regexArray={[]} />
		{/* <Picker
			style={{height: 50, width: 100}}>
			<Picker.Item label="Java" value="java" />
			<Picker.Item label="JavaScript" value="js" />
		</Picker> */}
	</View>
);
const SecondRoute = () => (
	<View style={styles.container}>
		<Text style={styles.contentTitle}>Eg. Bold</Text>
		<MarkdownFormatter
			defaultStyles={[styles.markdown].concat([styles.container])}
			numberOfLines={0} // 1 or 0
			text={exampleTexts[1]}
			regexArray={[]} />
	</View>
);
const ThirdRoute = () => (
	<View style={styles.container}>
		<Text style={styles.contentTitle}>Eg. Hyperlink</Text>
		<MarkdownFormatter
			defaultStyles={[styles.markdown].concat([styles.container])}
			numberOfLines={0} // 1 or 0
			text={exampleTexts[2]}
			regexArray={[]} />
	</View>
);
const FourthRoute = () => (
	<View style={styles.container}>
		<Text style={styles.contentTitle}>Eg. Bullet</Text>
		<MarkdownFormatter
			defaultStyles={[styles.markdown].concat([styles.contentBody])}
			numberOfLines={0} // 1 or 0
			text={exampleTexts[3]}
			regexArray={[]} />
	</View>
);
const FifthRoute = () => (
	<View style={styles.container}>
		<Text style={styles.contentTitle}>Eg. Numbered</Text>
		<MarkdownFormatter
			defaultStyles={[styles.markdown].concat([styles.container])}
			numberOfLines={0} // 1 or 0
			text={exampleTexts[4]}
			regexArray={[]} />
	</View>
);
const SixthRoute = () => (
	<View style={styles.container}>
		<Text style={styles.contentTitle}>Eg. Custom</Text>
		<MarkdownFormatter
			defaultStyles={[styles.markdown].concat([styles.container])}
			text={exampleTexts[5]}
			regexArray={customMarkdownFormatterRegex} />
	</View>
);

const SeventhRoute = () => (
	<View style={styles.container}>
		<Text style={styles.contentTitle}>Eg. Mixed 1</Text>
		<MarkdownFormatter
			defaultStyles={[styles.markdown].concat([styles.container])}
			numberOfLines={0} // 1 or 0
			text={exampleTexts[6]}
			regexArray={[]} />
	</View>
);
const EightRoute = () => (

	<View style={styles.container}>
		<Text style={styles.contentTitle}>Eg. Mixed 2</Text>
		<MarkdownFormatter
			defaultStyles={[styles.markdown].concat([styles.container])}
			numberOfLines={0} // 1 or 0
			text={exampleTexts[7]}
			 />
	</View>
);

const NineRoute = () => (
	<View style={styles.container}>
		<Text style={styles.contentTitle}>Eg. Custom Header</Text>
		<MarkdownFormatter
			defaultStyles={[styles.markdown].concat([styles.contentBody])}
			numberOfLines={0} // 1 or 0
			text={exampleTexts[8]}
			regexArray={customMarkdownFormatterRegex}
			 />
	</View>		
	
);

export default class App extends React.Component {
	state = {
		index: 0,
		routes: [
			{ key: 'first', title: '1' },
			{ key: 'second', title: '2' },
			{ key: 'third', title: '3' },
			{ key: 'fourth', title: '4' },
			{ key: 'fifth', title: '5' },
			{ key: 'sixth', title: '6' },
			{ key: 'seventh', title: '7' },
			{ key: 'eight', title: '8' },
			{ key: 'nine', title: '9' },
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
					nine: NineRoute,
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

