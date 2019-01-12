export const mock = {
  allComponents: [
    {
      children: [],
      closeTag: false,
      componentImport: '-',
      componentProps: [
        {
          description: 'backgroundColor',
          name: 'backgroundColor',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'An ID which is used to associate this InputAccessoryView to specified TextInput(s).',
          name: 'nativeID',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'style',
          name: 'style',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        }
      ],
      description: 'A component which enables customization of the keyboard input accessory view on iOS. The input accessory view is displayed above the keyboard whenever a TextInput has focus. This component can be used to create custom toolbars.\n\nTo use this component wrap your custom toolbar with the InputAccessoryView component, and set a nativeID. Then, pass that nativeID as the inputAccessoryViewID of whatever TextInput you desire. A simple example:\n\nimport React, { Component } from \'react\';\nimport { View, ScrollView, AppRegistry, TextInput, InputAccessoryView, Button } from \'react-native\';\n\nexport default class UselessTextInput extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {text: \'Placeholder Text\'};\n  }\n\n  render() {\n    const inputAccessoryViewID = "uniqueID";\n    return (\n      <View>\n        <ScrollView keyboardDismissMode="interactive">\n          <TextInput\n            style={{\n              padding: 10,\n              paddingTop: 50,\n            }}\n            inputAccessoryViewID={inputAccessoryViewID}\n            onChangeText={text => this.setState({text})}\n            value={this.state.text}\n          />\n        </ScrollView>\n        <InputAccessoryView nativeID={inputAccessoryViewID}>\n          <Button\n            onPress={() => this.setState({text: \'Placeholder Text\'})}\n            title="Reset Text"\n          />\n        </InputAccessoryView>\n      </View>\n    );\n  }\n}\n\n// skip this line if using Create React Native App\nAppRegistry.registerComponent(\'AwesomeProject\', () => UselessTextInput);\n\nThis component can also be used to create sticky text inputs (text inputs which are anchored to the top of the keyboard). To do this, wrap a TextInput with the InputAccessoryView component, and don\'t set a nativeID. For an example, look at InputAccessoryViewExample.js.',
      id: '0UxXr3VZ3Veb2IucQ868',
      isDefault: true,
      provider: 'ReactNative',
      techno: 'React Native',
      title: 'InputAccessoryView'
    },
    {
      children: [],
      closeTag: false,
      componentImport: '-',
      componentProps: [
        {
          description: 'The actual data to render, akin to the data prop in FlatList.\n\nType: array of Sections',
          name: 'sections',
          propType: 'PropTypes.array',
          propTypeIsrequired: false
        },
        {
          description: 'How many items to render in the initial batch. This should be enough to fill the screen but not much more. Note these items will never be unmounted as part of the windowed rendering in order to improve perceived performance of scroll-to-top actions.',
          name: 'initialNumToRender',
          propType: 'PropTypes.number',
          propTypeIsrequired: false
        },
        {
          description: 'Used to extract a unique key for a given item at the specified index. Key is used for caching and as the react key to track item re-ordering. The default extractor checks item.key, then falls back to using the index, like react does. Note that this sets keys for each item, but each overall section still needs its own key.\n\nType: (item: Item, index: number) => string',
          name: 'keyExtractor',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Default renderer for every item in every section. Can be over-ridden on a per-section basis. Should return a React element.\n\nThe render function will be passed an object with the following keys:\n\n\'item\' (object) - the item object as specified in this section\'s data key\n\'index\' (number) - Item\'s index within the section.\n\'section\' (object) - The full section object as specified in sections.\n\'separators\' (object) - An object with the following keys:\n\'highlight\' (function) - () => void\n\'unhighlight\' (function) - () => void\n\'updateProps\' (function) - (select, newProps) => void\n\'select\' (enum) - possible values are \'leading\', \'trailing\'\n\'newProps\' (object)\n',
          name: 'renderItem',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Called once when the scroll position gets within onEndReachedThreshold of the rendered content.\n\nType: [(info: {distanceFromEnd: number}) => void]',
          name: 'onEndReached',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'A marker property for telling the list to re-render (since it implements PureComponent). If any of your renderItem, Header, Footer, etc. functions depend on anything outside of the data prop, stick it here and treat it immutably.',
          name: 'extraData',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Rendered in between each item, but not at the top or bottom. By default, highlighted, section, and [leading/trailing][Item/Separator] props are provided. renderItem provides separators.highlight/unhighlight which will update the highlighted prop, but you can also add custom props with separators.updateProps.\n\nType: [component, function, element]',
          name: 'ItemSeparatorComponent',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Reverses the direction of scroll. Uses scale transforms of -1.',
          name: 'inverted',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'Rendered at the very end of the list. Can be a React Component Class, a render function, or a rendered element.\n\nType: [component, function, element]',
          name: 'ListFooterComponent',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'legacyImplementation',
          name: 'legacyImplementation',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'Rendered when the list is empty. Can be a React Component Class, a render function, or a rendered element.\n\nType: [component, function, element]',
          name: 'ListEmptyComponent',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'How far from the end (in units of visible length of the list) the bottom edge of the list must be from the end of the content to trigger the onEndReached callback. Thus a value of 0.5 will trigger onEndReached when the end of the content is within half the visible length of the list.',
          name: 'onEndReachedThreshold',
          propType: 'PropTypes.number',
          propTypeIsrequired: false
        },
        {
          description: 'If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly.\n\nType: [() => void]',
          name: 'onRefresh',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Called when the viewability of rows changes, as defined by the viewabilityConfig prop.\n\nThe function will be passed an object with the following keys:\n\n\'viewableItems\' (array of ViewTokens)\n\'changed\' (array of ViewTokens)\nThe ViewToken type is exported by ViewabilityHelper.js:',
          name: 'onViewableItemsChanged',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Set this true while waiting for new data from a refresh.',
          name: 'refreshing',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'Note: may have bugs (missing content) in some circumstances - use at your own risk.\n\nThis may improve scroll performance for large lists.',
          name: 'removeClippedSubviews',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'Rendered at the very beginning of the list. Can be a React Component Class, a render function, or a rendered element.\n\nType: component, function, element',
          name: 'ListHeaderComponent',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Rendered at the bottom of each section.\n\nType: [(info: {section: SectionT}) => ?React.Element]',
          name: 'renderSectionFooter',
          propType: 'PropTypes.element',
          propTypeIsrequired: false
        },
        {
          description: 'Rendered at the top of each section. These stick to the top of the ScrollView by default on iOS. See stickySectionHeadersEnabled.\n\nType: [(info: {section: SectionT}) => ?React.Element]',
          name: 'renderSectionHeader',
          propType: 'PropTypes.element',
          propTypeIsrequired: false
        },
        {
          description: 'Rendered at the top and bottom of each section (note this is different from ItemSeparatorComponent which is only rendered between items). These are intended to separate sections from the headers above and below and typically have the same highlight response as ItemSeparatorComponent. Also receives highlighted, [leading/trailing][Item/Separator], and any custom props from separators.updateProps.',
          name: 'SectionSeparatorComponent',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Makes section headers stick to the top of the screen until the next one pushes it off. Only enabled by default on iOS because that is the platform standard there.',
          name: 'stickySectionHeadersEnabled',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        }
      ],
      description: 'A performant interface for rendering sectioned lists, supporting the most handy features:\n\nFully cross-platform.\nConfigurable viewability callbacks.\nList header support.\nList footer support.\nItem separator support.\nSection header support.\nSection separator support.\nHeterogeneous data and item rendering support.\nPull to Refresh.\nScroll loading.\nIf you don\'t need section support and want a simpler interface, use <FlatList>.\n\nSimple Examples:\n\n// Example 1 (Homogeneous Rendering)\n<SectionList\n  renderItem={({item, index, section}) => <Text key={index}>{item}</Text>}\n  renderSectionHeader={({section: {title}}) => (\n    <Text style={{fontWeight: \'bold\'}}>{title}</Text>\n  )}\n  sections={[\n    {title: \'Title1\', data: [\'item1\', \'item2\']},\n    {title: \'Title2\', data: [\'item3\', \'item4\']},\n    {title: \'Title3\', data: [\'item5\', \'item6\']},\n  ]}\n  keyExtractor={(item, index) => item + index}\n/>\n// Example 2 (Heterogeneous Rendering / No Section Headers)\nconst overrideRenderItem = ({ item, index, section: { title, data } }) => <Text key={index}>Override{item}</Text>\n\n<SectionList\n  renderItem={({ item, index, section }) => <Text key={index}>{item}</Text>}\n  sections={[\n    { title: \'Title1\', data: [\'item1\', \'item2\'], renderItem: overrideRenderItem },\n    { title: \'Title2\', data: [\'item3\', \'item4\'] },\n    { title: \'Title3\', data: [\'item5\', \'item6\'] },\n  ]}\n/>\n\nThis is a convenience wrapper around <VirtualizedList>, and thus inherits its props (as well as those of <ScrollView> that aren\'t explicitly listed here, along with the following caveats:\n\nInternal state is not preserved when content scrolls out of the render window. Make sure all your data is captured in the item data or external stores like Flux, Redux, or Relay.\nThis is a PureComponent which means that it will not re-render if props remain shallow- equal. Make sure that everything your renderItem function depends on is passed as a prop (e.g. extraData) that is not === after updates, otherwise your UI may not update on changes. This includes the data prop and parent component state.\nIn order to constrain memory and enable smooth scrolling, content is rendered asynchronously offscreen. This means it\'s possible to scroll faster than the fill rate and momentarily see blank content. This is a tradeoff that can be adjusted to suit the needs of each application, and we are working on improving it behind the scenes.\nBy default, the list looks for a key prop on each item and uses that for the React key. Alternatively, you can provide a custom keyExtractor prop.',
      id: '0edsmGABQyCcxvjxEeFe',
      isDefault: true,
      provider: 'ReactNative',
      techno: 'React Native',
      title: 'SectionList'
    },
    {
      children: [],
      closeTag: false,
      componentImport: '-',
      componentProps: [
        {
          description: 'The progress value (between 0 and 1).',
          name: 'progress',
          propType: 'PropTypes.number',
          propTypeIsrequired: false
        },
        {
          description: 'A stretchable image to display as the progress bar.\n\nType: Image.propTypes.source',
          name: 'progressImage',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'The tint color of the progress bar itself.',
          name: 'progressTintColor',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'The progress bar style.\n\nType: enum(\'default\', \'bar\')',
          name: 'progressViewStyle',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'A stretchable image to display behind the progress bar.\n\nType: Image.propTypes.source',
          name: 'trackImage',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'The tint color of the progress bar track.',
          name: 'trackTintColor',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        }
      ],
      description: 'Use ProgressViewIOS to render a UIProgressView on iOS.',
      id: '1mSuGdq4MPT7XZAyQ22P',
      isDefault: true,
      provider: 'ReactNative',
      techno: 'React Native',
      title: 'ProgressViewIOS'
    },
    {
      children: [],
      componentImport: 'react-bootstrap/lib/ListGroupItem',
      componentProps: [
        {
          description: 'active',
          name: 'active',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'disabled',
          name: 'disabled',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'header',
          name: 'header',
          propType: 'PropTypes.node',
          propTypeIsrequired: true
        },
        {
          description: 'listItem',
          name: 'listItem',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'onClick',
          name: 'onClick',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'href',
          name: 'href',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        },
        {
          description: 'type',
          name: 'type',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        },
        {
          description: 'Component visual or contextual style variants.',
          name: 'bsStyle',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: true
        },
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'list-group-item\'',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        }
      ],
      description: 'ListGroupItem',
      id: '1yVUJyS4Bii1zh44buOF',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'ListGroupItem'
    },
    {
      children: [],
      closeTag: false,
      componentImport: '-',
      componentProps: [
        {
          description: 'maskElement',
          name: 'maskElement',
          propType: 'PropTypes.element',
          propTypeIsrequired: true
        }
      ],
      description: 'Renders the child view with a mask specified in the maskElement prop.\n\nExample\nimport React from \'react\';\nimport { MaskedViewIOS, Text, View } from \'react-native\';\n\nclass MyMaskedView extends React.Component {\n  render() {\n    return (\n      // Determines shape of the mask\n      <MaskedViewIOS\n        style={{ flex: 1, flexDirection: \'row\', height: \'100%\' }}\n        maskElement={\n          <View style={{\n            // Transparent background because mask is based off alpha channel.\n            backgroundColor: \'transparent\',\n            flex: 1,\n            justifyContent: \'center\',\n            alignItems: \'center\',\n          }}>\n            <Text style={{\n              fontSize: 60,\n              color: \'black\',\n              fontWeight: \'bold\',\n            }}>\n              Basic Mask\n            </Text>\n          </View>\n        }\n      >\n        { /* Shows behind the mask, you can put anything here, such as an image */ }\n        <View style={{ flex: 1, height: \'100%\', backgroundColor: \'#324376\' }} />\n        <View style={{ flex: 1, height: \'100%\', backgroundColor: \'#F5DD90\' }} />\n        <View style={{ flex: 1, height: \'100%\', backgroundColor: \'#F76C5E\' }} />\n      </MaskedViewIOS>\n    );\n  }\n}\nThe following image demonstrates that you can put almost anything behind the mask. The three examples shown are masked <View>, <Text>, and <Image>.\n\nThe alpha channel of the view rendered by the maskElement prop determines how much of the view\'s content and background shows through. Fully or partially opaque pixels allow the underlying content to show through but fully transparent pixels block that content.',
      id: '2cyb6tJMxyeKvRhIqHqf',
      isDefault: true,
      provider: 'ReactNative',
      techno: 'React Native',
      title: 'MaskedViewIOS'
    },
    {
      children: [],
      closeTag: false,
      componentImport: '-',
      componentProps: [
        {
          description: 'It specifies whether the children are visible or not. If you see a blank content, you probably forgot to add a selected one.',
          name: 'selected',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'Little red bubble that sits at the top right of the icon.\n\nstring, number',
          name: 'badge',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'A custom icon for the tab. It is ignored when a system icon is defined.\n\nImage.propTypes.source',
          name: 'icon',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Callback when this tab is being selected, you should change the state of your component to set selected={true}.',
          name: 'onPress',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'If set to true it renders the image as original, it defaults to being displayed as a template',
          name: 'renderAsOriginal',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'Background color for the badge. Available since iOS 10.',
          name: 'badgeColor',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'A custom icon when the tab is selected. It is ignored when a system icon is defined. If left empty, the icon will be tinted in blue.\n\nImage.propTypes.source',
          name: 'selectedIcon',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'React style object.',
          name: 'style',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Items comes with a few predefined system icons. Note that if you are using them, the title and selectedIcon will be overridden with the system ones.\n\nenum(\'bookmarks\', \'contacts\', \'downloads\', \'favorites\', \'featured\', \'history\', \'more\', \'most-recent\', \'most-viewed\', \'recents\', \'search\', \'top-rated\')',
          name: 'systemIcon',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'Text that appears under the icon. It is ignored when a system icon is defined.',
          name: 'title',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: '(Apple TV only)* When set to true, this view will be focusable and navigable using the Apple TV remote.',
          name: 'isTVSelectable',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        }
      ],
      description: 'TabBarIOS.Item',
      id: '2poVTlL3U0SPlT8WgC0B',
      isDefault: true,
      provider: 'ReactNative',
      techno: 'React Native',
      title: 'TabBarIOS.Item'
    },
    {
      children: [],
      closeTag: false,
      componentImport: '-',
      componentProps: [
        {
          description: 'renderItem({ item: Object, index: number, separators: { highlight: Function, unhighlight: Function, updateProps: Function(select: string, newProps: Object) } }) => ?React.Element\n\nTakes an item from data and renders it into the list.\n\nProvides additional metadata like index if you need it, as well as a more generic separators.updateProps function which let you set whatever props you want to change the rendering of either the leading separator or trailing separator in case the more common highlight and unhighlight (which set the highlighted: boolean prop) are insufficient for your use case.',
          name: 'renderItem',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'For simplicity, data is just a plain array. If you want to use something else, like an immutable list, use the underlying VirtualizedList directly.',
          name: 'data',
          propType: 'PropTypes.array',
          propTypeIsrequired: true
        },
        {
          description: 'Rendered in between each item, but not at the top or bottom. By default, highlighted and leadingItem props are provided. renderItem provides separators.highlight/unhighlight which will update the highlighted prop, but you can also add custom props with separators.updateProps.',
          name: 'ItemSeparatorComponent',
          propType: 'PropTypes.instanceOf()',
          propTypeIsrequired: false
        },
        {
          description: 'Rendered when the list is empty. Can be a React Component Class, a render function, or a rendered element.',
          name: 'ListEmptyComponent',
          propType: 'PropTypes.instanceOf()',
          propTypeIsrequired: false
        },
        {
          description: 'Rendered at the bottom of all the items. Can be a React Component Class, a render function, or a rendered element.\n\n',
          name: 'ListFooterComponent',
          propType: 'PropTypes.instanceOf()',
          propTypeIsrequired: false
        },
        {
          description: 'Rendered at the top of all the items. Can be a React Component Class, a render function, or a rendered element.',
          name: 'ListHeaderComponent',
          propType: 'PropTypes.instanceOf()',
          propTypeIsrequired: false
        },
        {
          description: 'Optional custom style for multi-item rows generated when numColumns > 1.',
          name: 'columnWrapperStyle',
          propType: 'PropTypes.object',
          propTypeIsrequired: false
        },
        {
          description: 'A marker property for telling the list to re-render (since it implements PureComponent). If any of your renderItem, Header, Footer, etc. functions depend on anything outside of the data prop, stick it here and treat it immutably.',
          name: 'extraData',
          propType: 'PropTypes.object',
          propTypeIsrequired: false
        },
        {
          description: '(data, index) => {length: number, offset: number, index: number}\ngetItemLayout is an optional optimization that let us skip the measurement of dynamic content if you know the height of items ahead of time. getItemLayout is both efficient and easy to use if you have fixed height items, for example:\n\n  getItemLayout={(data, index) => (\n    {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}\n  )}\nAdding getItemLayout can be a great performance boost for lists of several hundred items. Remember to include separator length (height or width) in your offset calculation if you specify ItemSeparatorComponent.',
          name: 'getItemLayout',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'If true, renders items next to each other horizontally instead of stacked vertically.',
          name: 'horizontal',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'How many items to render in the initial batch. This should be enough to fill the screen but not much more. Note these items will never be unmounted as part of the windowed rendering in order to improve perceived performance of scroll-to-top actions.',
          name: 'initialNumToRender',
          propType: 'PropTypes.number',
          propTypeIsrequired: false
        },
        {
          description: 'Instead of starting at the top with the first item, start at initialScrollIndex. This disables the "scroll to top" optimization that keeps the first initialNumToRender items always rendered and immediately renders the items starting at this initial index. Requires getItemLayout to be implemented.',
          name: 'initialScrollIndex',
          propType: 'PropTypes.number',
          propTypeIsrequired: false
        },
        {
          description: 'Reverses the direction of scroll. Uses scale transforms of -1.',
          name: 'inverted',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: '(item: object, index: number) => string;\nUsed to extract a unique key for a given item at the specified index. Key is used for caching and as the react key to track item re-ordering. The default extractor checks item.key, then falls back to using the index, like React does.',
          name: 'keyExtractor',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Multiple columns can only be rendered with horizontal={false} and will zig-zag like a flexWrap layout. Items should all be the same height - masonry layouts are not supported.',
          name: 'numColumns',
          propType: 'PropTypes.number',
          propTypeIsrequired: false
        },
        {
          description: '(info: {distanceFromEnd: number}) => void\nCalled once when the scroll position gets within onEndReachedThreshold of the rendered content.',
          name: 'onEndReached',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'How far from the end (in units of visible length of the list) the bottom edge of the list must be from the end of the content to trigger the onEndReached callback. Thus a value of 0.5 will trigger onEndReached when the end of the content is within half the visible length of the list.',
          name: 'onEndReachedThreshold',
          propType: 'PropTypes.number',
          propTypeIsrequired: false
        },
        {
          description: '() => void\nIf provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly.',
          name: 'onRefresh',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: '(info: {\n    viewableItems: array,\n    changed: array,\n  }) => void\nCalled when the viewability of rows changes, as defined by the viewabilityConfig prop.',
          name: 'onViewableItemsChanged',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Set this when offset is needed for the loading indicator to show correctly.',
          name: 'progressViewOffset',
          propType: 'PropTypes.number',
          propTypeIsrequired: false
        },
        {
          description: 'May not have full feature parity and is meant for debugging and performance comparison.',
          name: 'legacyImplementation',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'Set this true while waiting for new data from a refresh.',
          name: 'refreshing',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'This may improve scroll performance for large lists.\n\nNote: May have bugs (missing content) in some circumstances - use at your own risk.',
          name: 'removeClippedSubviews',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'See ViewabilityHelper.js for flow type and further documentation.\n\nAt least one of the viewAreaCoveragePercentThreshold or itemVisiblePercentThreshold is required. This needs to be done in the constructor to avoid following error (ref):\n\n  Error: Changing viewabilityConfig on the fly is not supported`\nconstructor (props) {\n  super(props)\n\n  this.viewabilityConfig = {\n      waitForInteraction: true,\n      viewAreaCoveragePercentThreshold: 95\n  }\n}\n<FlatList\n    viewabilityConfig={this.viewabilityConfig}\n  ...\nminimumViewTime\nMinimum amount of time (in milliseconds) that an item must be physically viewable before the viewability callback will be fired. A high number means that scrolling through content without stopping will not mark the content as viewable.\n\nviewAreaCoveragePercentThreshold\nPercent of viewport that must be covered for a partially occluded item to count as "viewable", 0-100. Fully visible items are always considered viewable. A value of 0 means that a single pixel in the viewport makes the item viewable, and a value of 100 means that an item must be either entirely visible or cover the entire viewport to count as viewable.\n\nitemVisiblePercentThreshold\nSimilar to viewAreaPercentThreshold, but considers the percent of the item that is visible, rather than the fraction of the viewable area it covers.\n\nwaitForInteraction\nNothing is considered viewable until the user scrolls or recordInteraction is called after render.',
          name: 'viewabilityConfig',
          propType: 'PropTypes.object',
          propTypeIsrequired: false
        },
        {
          description: 'List of ViewabilityConfig/onViewableItemsChanged pairs. A specific onViewableItemsChanged will be called when its corresponding ViewabilityConfig\'s conditions are met. See ViewabilityHelper.js for flow type and further documentation.',
          name: 'viewabilityConfigCallbackPairs',
          propType: 'PropTypes.array',
          propTypeIsrequired: false
        }
      ],
      description: 'A performant interface for rendering simple, flat lists, supporting the most handy features:\n\nFully cross-platform.\nOptional horizontal mode.\nConfigurable viewability callbacks.\nHeader support.\nFooter support.\nSeparator support.\nPull to Refresh.\nScroll loading.\nScrollToIndex support.\nIf you need section support, use <SectionList>.\n\nMinimal Example:\n\n<FlatList\n  data={[{key: \'a\'}, {key: \'b\'}]}\n  renderItem={({item}) => <Text>{item.key}</Text>}\n/>\nMore complex, multi-select example demonstrating PureComponent usage for perf optimization and avoiding bugs.\n\nBy binding the onPressItem handler, the props will remain === and PureComponent will prevent wasteful re-renders unless the actual id, selected, or title props change, even if the components rendered in MyListItem did not have such optimizations.\nBy passing extraData={this.state} to FlatList we make sure FlatList itself will re-render when the state.selected changes. Without setting this prop, FlatList would not know it needs to re-render any items because it is also a PureComponent and the prop comparison will not show any changes.\nkeyExtractor tells the list to use the ids for the react keys instead of the default key property.\nclass MyListItem extends React.PureComponent {\n  _onPress = () => {\n    this.props.onPressItem(this.props.id);\n  };\n\n  render() {\n    const textColor = this.props.selected ? "red" : "black";\n    return (\n      <TouchableOpacity onPress={this._onPress}>\n        <View>\n          <Text style={{ color: textColor }}>\n            {this.props.title}\n          </Text>\n        </View>\n      </TouchableOpacity>\n    );\n  }\n}\n\nclass MultiSelectList extends React.PureComponent {\n  state = {selected: (new Map(): Map<string, boolean>)};\n\n  _keyExtractor = (item, index) => item.id;\n\n  _onPressItem = (id: string) => {\n    // updater functions are preferred for transactional updates\n    this.setState((state) => {\n      // copy the map rather than modifying state.\n      const selected = new Map(state.selected);\n      selected.set(id, !selected.get(id)); // toggle\n      return {selected};\n    });\n  };\n\n  _renderItem = ({item}) => (\n    <MyListItem\n      id={item.id}\n      onPressItem={this._onPressItem}\n      selected={!!this.state.selected.get(item.id)}\n      title={item.title}\n    />\n  );\n\n  render() {\n    return (\n      <FlatList\n        data={this.props.data}\n        extraData={this.state}\n        keyExtractor={this._keyExtractor}\n        renderItem={this._renderItem}\n      />\n    );\n  }\n}\nThis is a convenience wrapper around <VirtualizedList>, and thus inherits its props (as well as those of <ScrollView>) that aren\'t explicitly listed here, along with the following caveats:\n\nInternal state is not preserved when content scrolls out of the render window. Make sure all your data is captured in the item data or external stores like Flux, Redux, or Relay.\nThis is a PureComponent which means that it will not re-render if props remain shallow- equal. Make sure that everything your renderItem function depends on is passed as a prop (e.g. extraData) that is not === after updates, otherwise your UI may not update on changes. This includes the data prop and parent component state.\nIn order to constrain memory and enable smooth scrolling, content is rendered asynchronously offscreen. This means it\'s possible to scroll faster than the fill rate and momentarily see blank content. This is a tradeoff that can be adjusted to suit the needs of each application, and we are working on improving it behind the scenes.\nBy default, the list looks for a key prop on each item and uses that for the React key. Alternatively, you can provide a custom keyExtractor prop.\nAlso inherits ScrollView Props, unless it is nested in another FlatList of same orientation.',
      id: '3DaBXIAYkHu0K2vmN6UG',
      isDefault: true,
      provider: 'ReactNative',
      techno: 'React Native',
      title: 'FlatList'
    },
    {
      children: [],
      closeTag: false,
      componentImport: '-',
      componentProps: [
        {
          description: 'Handler to be called when the user taps the button',
          name: 'onPress',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'Text to display inside the button',
          name: 'title',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        },
        {
          description: 'Text to display for blindness accessibility features',
          name: 'accessibilityLabel',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'If true, disable all interactions for this component.',
          name: 'disabled',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'Used to locate this view in end-to-end tests.',
          name: 'testID',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: '(Apple TV only) TV preferred focus (see documentation for the View component).',
          name: 'hasTVPreferredFocus',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        }
      ],
      description: 'A basic button component that should render nicely on any platform. Supports a minimal level of customization.\nIf this button doesn\'t look right for your app, you can build your own button using TouchableOpacity or TouchableNativeFeedback. For inspiration, look at the source code for this button component. Or, take a look at the wide variety of button components built by the community.\n\nExample usage:\n\nimport { Button } from \'react-native\';\n...\n\n<Button\n  onPress={onPressLearnMore}\n  title="Learn More"\n  color="#841584"\n  accessibilityLabel="Learn more about this purple button"\n/>',
      id: '42IlYcOkmgSD3mybsCNc',
      isDefault: true,
      provider: 'ReactNative',
      techno: 'React Native',
      title: 'Button'
    },
    {
      children: [],
      componentImport: 'react-bootstrap/lib/Navbar',
      componentProps: [
        {
          description: 'Create a fixed navbar along the top of the screen, that scrolls with the page\n\ndefault: false',
          name: 'fixedTop',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'Create a fixed navbar along the bottom of the screen, that scrolls with the page\n\ndefault: false',
          name: 'fixedBottom',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'Create a full-width navbar that scrolls away with the page\n\ndefault: false',
          name: 'staticTop',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'An alternative dark visual style for the Navbar\n\ndefault: false',
          name: 'inverse',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'Allow the Navbar to fluidly adjust to the page or container width, instead of at the predefined screen breakpoints\n\ndefault: false',
          name: 'fluid',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'Set a custom element for this component.\n\ndefault: \'nav\'',
          name: 'componentClass',
          propType: 'PropTypes.element',
          propTypeIsrequired: true
        },
        {
          description: 'A callback fired when the <Navbar> body collapses or expands. Fired when a <Navbar.Toggle> is clicked and called with the new expanded boolean value.',
          name: 'onToggle',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'A callback fired when a descendant of a child <Nav> is selected. Should be used to execute complex closing or other miscellaneous actions desired after selecting a descendant of <Nav>. Does nothing if no <Nav> or <Nav> descendants exist. The callback is called with an eventKey, which is a prop from the selected <Nav> descendant, and an event.\n\nfunction (\n Any eventKey,\n SyntheticEvent event?\n)\nFor basic closing behavior after all <Nav> descendant onSelect events in mobile viewports, try using collapseOnSelect.\n\nNote: If you are manually closing the navbar using this OnSelect prop, ensure that you are setting expanded to false and not toggling between true and false.',
          name: 'onSelect',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'Sets expanded to false after the onSelect event of a descendant of a child <Nav>. Does nothing if no <Nav> or <Nav> descendants exist.\n\nThe onSelect callback should be used instead for more complex operations that need to be executed after the select event of <Nav> descendants.\n\ndefault: false',
          name: 'collapseOnSelect',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'Explicitly set the visiblity of the navbar body\n\ndefault: false',
          name: 'expanded',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'Component visual or contextual style variants.\n\ndefault: false',
          name: 'bsStyle',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: true
        }
      ],
      description: '#Navbars Navbar\nNavbars are responsive meta components that serve as navigation headers for your application or site.\n\nThey also support all the different Bootstrap classes as properties. Just camelCase the css class and remove navbar from it.\n\nFor example navbar-fixed-top becomes the property fixedTop. The different properties are fixedTop, fixedBottom, staticTop, inverse, and fluid.\n\nYou can also align elements to the right by specifying the pullRight prop on the Nav, and other sub-components.\n\n#Navbar Basic Example\n\n<Navbar>\n  <Navbar.Header>\n    <Navbar.Brand>\n      <a href="#home">React-Bootstrap</a>\n    </Navbar.Brand>\n  </Navbar.Header>\n  <Nav>\n    <NavItem eventKey={1} href="#">\n      Link\n    </NavItem>\n    <NavItem eventKey={2} href="#">\n      Link\n    </NavItem>\n    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">\n      <MenuItem eventKey={3.1}>Action</MenuItem>\n      <MenuItem eventKey={3.2}>Another action</MenuItem>\n      <MenuItem eventKey={3.3}>Something else here</MenuItem>\n      <MenuItem divider />\n      <MenuItem eventKey={3.4}>Separated link</MenuItem>\n    </NavDropdown>\n  </Nav>\n</Navbar>;\n\nAdditional Import Options\nThe Navbar Header, Toggle, Brand, and Collapse components are available as static properties on the <Navbar/> component but you can also import them directly from the /lib directory like: require("react-bootstrap/lib/NavbarHeader").\n\n#Responsive Navbars\nTo have a mobile friendly Navbar, Add a Navbar.Toggle to your Header and wrap your Navs in a Navbar.Collapse component. The Navbar will automatically wire the toggle and collapse together!\n\nSet the defaultExpanded prop to make the Navbar start expanded. Set collapseOnSelect to make the Navbar collapse automatically when the user selects an item. You can also finely control the collapsing behavior by using the expanded and onToggle props.\n\n<Navbar inverse collapseOnSelect>\n  <Navbar.Header>\n    <Navbar.Brand>\n      <a href="#brand">React-Bootstrap</a>\n    </Navbar.Brand>\n    <Navbar.Toggle />\n  </Navbar.Header>\n  <Navbar.Collapse>\n    <Nav>\n      <NavItem eventKey={1} href="#">\n        Link\n      </NavItem>\n      <NavItem eventKey={2} href="#">\n        Link\n      </NavItem>\n      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">\n        <MenuItem eventKey={3.1}>Action</MenuItem>\n        <MenuItem eventKey={3.2}>Another action</MenuItem>\n        <MenuItem eventKey={3.3}>Something else here</MenuItem>\n        <MenuItem divider />\n        <MenuItem eventKey={3.3}>Separated link</MenuItem>\n      </NavDropdown>\n    </Nav>\n    <Nav pullRight>\n      <NavItem eventKey={1} href="#">\n        Link Right\n      </NavItem>\n      <NavItem eventKey={2} href="#">\n        Link Right\n      </NavItem>\n    </Nav>\n  </Navbar.Collapse>\n</Navbar>;\n\n#Forms\nUse the Navbar.Form convenience component to apply proper margins and alignment to form components.\n\n<Navbar>\n  <Navbar.Header>\n    <Navbar.Brand>\n      <a href="#home">Brand</a>\n    </Navbar.Brand>\n    <Navbar.Toggle />\n  </Navbar.Header>\n  <Navbar.Collapse>\n    <Navbar.Form pullLeft>\n      <FormGroup>\n        <FormControl type="text" placeholder="Search" />\n      </FormGroup>{\' \'}\n      <Button type="submit">Submit</Button>\n    </Navbar.Form>\n  </Navbar.Collapse>\n</Navbar>;\n\n#Text and Non-nav links\nLoose text and links can be wraped in the convenience components: Navbar.Link and Navbar.Text\n\n<Navbar>\n  <Navbar.Header>\n    <Navbar.Brand>\n      <a href="#home">Brand</a>\n    </Navbar.Brand>\n    <Navbar.Toggle />\n  </Navbar.Header>\n  <Navbar.Collapse>\n    <Navbar.Text>\n      Signed in as: <Navbar.Link href="#">Mark Otto</Navbar.Link>\n    </Navbar.Text>\n    <Navbar.Text pullRight>Have a great day!</Navbar.Text>\n  </Navbar.Collapse>\n</Navbar>;\n\n',
      id: '4BC4wpcUo5PAPYvLYi0x',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'Navbar'
    },
    {
      children: [],
      closeTag: false,
      componentImport: '-',
      componentProps: [
        {
          description: 'Loads static HTML or a URI (with optional headers) in the WebView. Note that static HTML will require setting originWhitelist to ["*"].\n\nThe object passed to source can have either of the following shapes:\n\nLoad uri\n\nuri (string) - The URI to load in the WebView. Can be a local or remote file.\nmethod (string) - The HTTP Method to use. Defaults to GET if not specified. On Android, the only supported methods are GET and POST.\nheaders (object) - Additional HTTP headers to send with the request. On Android, this can only be used with GET requests.\nbody (string) - The HTTP body to send with the request. This must be a valid UTF-8 string, and will be sent exactly as specified, with no additional encoding (e.g. URL-escaping or base64) applied. On Android, this can only be used with POST requests.\nStatic HTML\n\nhtml (string) - A static HTML page to display in the WebView.\nbaseUrl (string) - The base URL to be used for any relative links in the HTML.',
          name: 'source',
          propType: 'PropTypes.object',
          propTypeIsrequired: false
        },
        {
          description: 'Controls whether to adjust the content inset for web views that are placed behind a navigation bar, tab bar, or toolbar. The default value is true.',
          name: 'automaticallyAdjustContentInsets',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'Function that accepts a string that will be passed to the WebView and executed immediately as JavaScript.',
          name: 'injectJavaScript',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Set this to provide JavaScript that will be injected into the web page when the view loads.',
          name: 'injectedJavaScript',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Boolean that determines whether HTML5 audio and video requires the user to tap them before they start playing. The default value is true.',
          name: 'mediaPlaybackRequiresUserAction',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'Override the native component used to render the WebView. Enables a custom native WebView which uses the same JavaScript as the original WebView.\n\nThe nativeConfig prop expects an object with the following keys:\n\ncomponent (any)\nprops (object)\nviewManager (object)',
          name: 'nativeConfig',
          propType: 'PropTypes.object',
          propTypeIsrequired: false
        },
        {
          description: 'Function that is invoked when the WebView load fails.',
          name: 'onError',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Function that is invoked when the WebView has finished loading.',
          name: 'onLoad',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Function that is invoked when the WebView load succeeds or fails.',
          name: 'onLoadEnd',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Function that is invoked when the WebView starts loading.',
          name: 'onLoadStart',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'A function that is invoked when the webview calls window.postMessage. Setting this property will inject a postMessage global into your webview, but will still call pre-existing values of postMessage.\n\nwindow.postMessage accepts one argument, data, which will be available on the event object, event.nativeEvent.data. data must be a string.',
          name: 'onMessage',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Function that is invoked when the WebView loading starts or ends.',
          name: 'onNavigationStateChange',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'List of origin strings to allow being navigated to. The strings allow wildcards and get matched against just the origin (not the full URL). If the user taps to navigate to a new page but the new page is not in this whitelist, the URL will be handled by the OS. The default whitelisted origins are "http://" and "https://".',
          name: 'originWhitelist',
          propType: 'PropTypes.array',
          propTypeIsrequired: false
        },
        {
          description: 'Function that returns a view to show if there\'s an error.',
          name: 'renderError',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Function that returns a loading indicator. The startInLoadingState prop must be set to true in order to use this prop.',
          name: 'renderLoading',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Boolean that controls whether the web content is scaled to fit the view and enables the user to change the scale. The default value is true.\n\nOn iOS, when useWebKit=true, this prop will not work.',
          name: 'scalesPageToFit',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'Function that allows custom handling of any web view requests. Return true from the function to continue loading the request and false to stop loading.',
          name: 'onShouldStartLoadWithRequest',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Boolean value that forces the WebView to show the loading view on the first load. This prop must be set to true in order for the renderLoading prop to work.',
          name: 'startInLoadingState',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'A floating-point number that determines how quickly the scroll view decelerates after the user lifts their finger. You may also use the string shortcuts "normal" and "fast" which match the underlying iOS settings for UIScrollViewDecelerationRateNormal and UIScrollViewDecelerationRateFast respectively:\n\nnormal: 0.998\nfast: 0.99 (the default for iOS web view)',
          name: 'decelerationRate',
          propType: 'PropTypes.number',
          propTypeIsrequired: false
        },
        {
          description: 'Boolean value to control whether DOM Storage is enabled. Used only in Android.',
          name: 'domStorageEnabled',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'Boolean value to enable JavaScript in the WebView. Used on Android only as JavaScript is enabled by default on iOS. The default value is true.',
          name: 'javaScriptEnabled',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'Specifies the mixed content mode. i.e WebView will allow a secure origin to load content from any other origin.\n\nPossible values for mixedContentMode are:\n\nnever (default) - WebView will not allow a secure origin to load content from an insecure origin.\nalways - WebView will allow a secure origin to load content from any other origin, even if that origin is insecure.\ncompatibility - WebView will attempt to be compatible with the approach of a modern web browser with regard to mixed content.',
          name: 'mixedContentMode',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Boolean value to enable third party cookies in the WebView. Used on Android Lollipop and above only as third party cookies are enabled by default on Android Kitkat and below and on iOS. The default value is true.',
          name: 'thirdPartyCookiesEnabled',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'Sets the user-agent for the WebView.',
          name: 'userAgent',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Boolean that determines whether HTML5 videos play inline or use the native full-screen controller. The default value is false.\n\nNOTE\n\nIn order for video to play inline, not only does this property need to be set to true, but the video element in the HTML document must also include the webkit-playsinline attribute.',
          name: 'allowsInlineMediaPlayback',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'Boolean value that determines whether the web view bounces when it reaches the edge of the content. The default value is true.',
          name: 'bounces',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'The amount by which the web view content is inset from the edges of the scroll view. Defaults to {top: 0, left: 0, bottom: 0, right: 0}.\n\nobject: {top: number, left: number, bottom: number, right: number}',
          name: 'contentInset',
          propType: 'PropTypes.object',
          propTypeIsrequired: false
        },
        {
          description: 'Determines the types of data converted to clickable URLs in the web view\'s content. By default only phone numbers are detected.\n\nYou can provide one type or an array of many types.\n\nPossible values for dataDetectorTypes are:\n\nphoneNumber\nlink\naddress\ncalendarEvent\nnone\nall\nWith the new WebKit implementation, we have three new values:\n\ntrackingNumber\nflightNumber\nlookupSuggestion\n',
          name: 'dataDetectorTypes',
          propType: 'PropTypes.array',
          propTypeIsrequired: false
        },
        {
          description: 'Boolean value that determines whether scrolling is enabled in the WebView. The default value is true.',
          name: 'scrollEnabled',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'Set whether Geolocation is enabled in the WebView. The default value is false. Used only in Android.',
          name: 'geolocationEnabled',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'Boolean that sets whether JavaScript running in the context of a file scheme URL should be allowed to access content from any origin. Including accessing content from other file scheme URLs. The default value is false.',
          name: 'allowUniversalAccessFromFileURLs',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'If true, use WKWebView instead of UIWebView.',
          name: 'useWebKit',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        }
      ],
      description: 'Warning Please use the react-native-community/react-native-webview fork of this component instead. To reduce the surface area of React Native, <WebView/> is going to be removed from the React Native core. For more information, please read The Slimmening proposal.\n\nWebView renders web content in a native view.\n\nimport React, { Component } from \'react\';\nimport { WebView } from \'react-native\';\n\nclass MyWeb extends Component {\n  render() {\n    return (\n      <WebView\n        source={{uri: \'https://github.com/facebook/react-native\'}}\n        style={{marginTop: 20}}\n      />\n    );\n  }\n}\nMinimal example with inline HTML:\n\nimport React, { Component } from \'react\';\nimport { WebView } from \'react-native\';\n\nclass MyInlineWeb extends Component {\n  render() {\n    return (\n      <WebView\n        originWhitelist={[\'*\']}\n        source={{ html: \'<h1>Hello world</h1>\' }}\n      />\n    );\n  }\n}\nYou can use this component to navigate back and forth in the web view\'s history and configure various properties for the web content.\n\nOn iOS, the useWebKit prop can be used to opt into a WKWebView-backed implementation.\n\nSecurity Warning: Currently, onMessage and postMessage do not allow specifying an origin. This can lead to cross-site scripting attacks if an unexpected document is loaded within a WebView instance. Please refer to the MDN documentation for Window.postMessage() for more details on the security implications of this.',
      id: '4SQJmZm1rgUgxVhFK3My',
      isDefault: true,
      provider: 'ReactNative',
      techno: 'React Native',
      title: 'WebView'
    },
    {
      children: [],
      closeTag: false,
      componentImport: '-',
      componentProps: [
        {
          description: 'NavigatorIOS uses route objects to identify child views, their props, and navigation bar configuration. Navigation operations such as push operations expect routes to look like this the initialRoute.',
          name: 'initialRoute',
          propType: 'PropTypes.object',
          propTypeIsrequired: true
        },
        {
          description: 'The style of the navigation bar. Supported values are \'default\', \'black\'. Use \'black\' instead of setting barTintColor to black. This produces a navigation bar with the native iOS style with higher translucency.\n\nType: enum(\'default\', \'black\')',
          name: 'barStyle',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'The default background color of the navigation bar.',
          name: 'barTintColor',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Boolean value that indicates whether the interactive pop gesture is enabled. This is useful for enabling/disabling the back swipe navigation gesture.\n\nIf this prop is not provided, the default behavior is for the back swipe gesture to be enabled when the navigation bar is shown and disabled when the navigation bar is hidden. Once you\'ve provided the interactivePopGestureEnabled prop, you can never restore the default behavior.',
          name: 'interactivePopGestureEnabled',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'The default wrapper style for components in the navigator. A common use case is to set the backgroundColor for every scene.',
          name: 'itemWrapperStyle',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Boolean value that indicates whether the navigation bar is hidden by default.',
          name: 'navigationBarHidden',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'Boolean value that indicates whether to hide the 1px hairline shadow by default.',
          name: 'shadowHidden',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'The default color used for the buttons in the navigation bar.',
          name: 'tintColor',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'The default text color of the navigation bar title.',
          name: 'titleTextColor',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Boolean value that indicates whether the navigation bar is translucent by default. When true any screens loaded within the navigator will sit below the status bar and underneath the navigation bar. To have screens render below the navigation bar set to false.',
          name: 'translucent',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        }
      ],
      description: 'NavigatorIOS is a wrapper around UINavigationController, enabling you to implement a navigation stack. It works exactly the same as it would on a native app using UINavigationController, providing the same animations and behavior from UIKit.\n\nAs the name implies, it is only available on iOS. Take a look at React Navigation for a cross-platform solution in JavaScript, or check out either of these components for native solutions: native-navigation, react-native-navigation.\n\nTo set up the navigator, provide the initialRoute prop with a route object. A route object is used to describe each scene that your app navigates to. initialRoute represents the first route in your navigator.\n\nimport PropTypes from \'prop-types\';\nimport React, { Component } from \'react\';\nimport { NavigatorIOS, Text, TouchableHighlight, View } from \'react-native\';\n\nexport default class NavigatorIOSApp extends Component {\n  render() {\n    return (\n      <NavigatorIOS\n        initialRoute={{\n          component: MyScene,\n          title: \'My Initial Scene\',\n        }}\n        style={{flex: 1}}\n      />\n    );\n  }\n}\n\nclass MyScene extends Component {\n  static propTypes = {\n    title: PropTypes.string.isRequired,\n    navigator: PropTypes.object.isRequired,\n  }\n\n  _onForward = () => {\n    this.props.navigator.push({\n      title: \'Scene\',\n    });\n  }\n\n  render() {\n    return (\n      <View>\n        <Text>Current Scene: { this.props.title }</Text>\n        <TouchableHighlight onPress={this._onForward}>\n          <Text>Tap me to load the next scene</Text>\n        </TouchableHighlight>\n      </View>\n    )\n  }\n}\nIn this code, the navigator renders the component specified in initialRoute, which in this case is MyScene. This component will receive a route prop and a navigator prop representing the navigator. The navigator\'s navigation bar will render the title for the current scene, "My Initial Scene".\n\nYou can optionally pass in a passProps property to your initialRoute. NavigatorIOS passes this in as props to the rendered component:\n\ninitialRoute={{\n  component: MyScene,\n  title: \'My Initial Scene\',\n  passProps: { myProp: \'foo\' }\n}}\nYou can then access the props passed in via {this.props.myProp}.\n\nHandling Navigation\nTo trigger navigation functionality such as pushing or popping a view, you have access to a navigator object. The object is passed in as a prop to any component that is rendered by NavigatorIOS. You can then call the relevant methods to perform the navigation action you need:\n\nclass MyView extends Component {\n  _handleBackPress() {\n    this.props.navigator.pop();\n  }\n\n  _handleNextPress(nextRoute) {\n    this.props.navigator.push(nextRoute);\n  }\n\n  render() {\n    const nextRoute = {\n      component: MyView,\n      title: \'Bar That\',\n      passProps: { myProp: \'bar\' }\n    };\n    return(\n      <TouchableHighlight onPress={() => this._handleNextPress(nextRoute)}>\n        <Text style={{marginTop: 200, alignSelf: \'center\'}}>\n          See you on the other nav {this.props.myProp}!\n        </Text>\n      </TouchableHighlight>\n    );\n  }\n}\nYou can also trigger navigator functionality from the NavigatorIOS component:\n\nclass NavvyIOS extends Component {\n  _handleNavigationRequest() {\n    this.refs.nav.push({\n      component: MyView,\n      title: \'Genius\',\n      passProps: { myProp: \'genius\' },\n    });\n  }\n\n  render() {\n    return (\n      <NavigatorIOS\n        ref=\'nav\'\n        initialRoute={{\n          component: MyView,\n          title: \'Foo This\',\n          passProps: { myProp: \'foo\' },\n          rightButtonTitle: \'Add\',\n          onRightButtonPress: () => this._handleNavigationRequest(),\n        }}\n        style={{flex: 1}}\n      />\n    );\n  }\n}\nThe code above adds a _handleNavigationRequest private method that is invoked from the NavigatorIOS component when the right navigation bar item is pressed. To get access to the navigator functionality, a reference to it is saved in the ref prop and later referenced to push a new scene into the navigation stack.\n\nNavigation Bar Configuration\nProps passed to NavigatorIOS will set the default configuration for the navigation bar. Props passed as properties to a route object will set the configuration for that route\'s navigation bar, overriding any props passed to the NavigatorIOS component.\n\n_handleNavigationRequest() {\n  this.refs.nav.push({\n    //...\n    passProps: { myProp: \'genius\' },\n    barTintColor: \'#996699\',\n  });\n}\n\nrender() {\n  return (\n    <NavigatorIOS\n      //...\n      style={{flex: 1}}\n      barTintColor=\'#ffffcc\'\n    />\n  );\n}\nIn the example above the navigation bar color is changed when the new route is pushed.',
      id: '5MYx13I9F6HqlPRmgXlY',
      isDefault: true,
      provider: 'ReactNative',
      techno: 'React Native',
      title: 'NavigatorIOS'
    },
    {
      children: [],
      closeTag: false,
      componentImport: 'react-bootstrap/lib/Image',
      componentProps: [
        {
          description: 'Sets image as responsive image',
          name: 'responsive',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'Sets image shape as rounded',
          name: 'rounded',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'Sets image shape as circle',
          name: 'circle',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'Sets image shape as thumbnail',
          name: 'thumbnail',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'img\'',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        }
      ],
      description: 'Shape\nUse the rounded, circle and thumbnail props to customise the image.\n\n<Grid>\n  <Row>\n    <Col xs={6} md={4}>\n      <Image src="/thumbnail.png" rounded />\n    </Col>\n    <Col xs={6} md={4}>\n      <Image src="/thumbnail.png" circle />\n    </Col>\n    <Col xs={6} md={4}>\n      <Image src="/thumbnail.png" thumbnail />\n    </Col>\n  </Row>\n</Grid>;\n\nResponsive\nUse the responsive to scale image nicely to the parent element.\n\n<Image src="/thumbnail.png" responsive />;',
      id: '5u6VzfLgqFVKbcqEtwxK',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'Image'
    },
    {
      children: [],
      closeTag: false,
      componentImport: 'react-bootstrap/lib/MenuItem',
      componentProps: [
        {
          description: 'Highlight the menu item as active.',
          name: 'active',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'Disable the menu item, making it unselectable.\n\ndefault: false',
          name: 'disabled',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'Styles the menu item as a horizontal rule, providing visual separation between groups of menu items.\n\nall( PropTypes.bool, ({ divider, children }) => divider && children ? new Error(\'Children will not be rendered for dividers\') : null )',
          name: 'divider',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'Value passed to the onSelect handler, useful for identifying the selected menu item.',
          name: 'eventKey',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Styles the menu item as a header label, useful for describing a group of menu items.\n\ndefault: false',
          name: 'header',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'HTML href attribute corresponding to a.href.',
          name: 'href',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Callback fired when the menu item is clicked.',
          name: 'onClick',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Callback fired when the menu item is selected.\n\n(eventKey: any, event: Object) => any',
          name: 'onSelect',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'dropdown\'',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        }
      ],
      description: 'MenuItem',
      id: '6UA414CFnDO9Zhtfg1iv',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'MenuItem'
    },
    {
      children: [],
      closeTag: true,
      componentImport: '-',
      componentProps: [
        {
          description: 'className',
          name: 'className',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        }
      ],
      description: 'Division — a generic container for a block of HTML. Lending no additional meaning, it is typically used as scaffolding to hang CSS on or for JavaScript to reach out to.',
      id: '8eawiS1gwWNjnw6Fz1PS',
      isDefault: false,
      provider: 'HTML',
      techno: 'React',
      title: 'div'
    },
    {
      children: [],
      closeTag: true,
      componentImport: '-',
      componentProps: [
        {
          description: 'className',
          name: 'className',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        }
      ],
      description: 'Ranked headings, h1 being the top-level heading, and h6 being the lowest level heading.',
      id: '8kCGigpk1zw3lGtMjxGF',
      isDefault: false,
      provider: 'HTML',
      techno: 'React',
      title: 'h1'
    },
    {
      children: [],
      closeTag: false,
      componentImport: 'react-bootstrap/lib/ModalDialog',
      componentProps: [
        {
          description: 'A css class to apply to the Modal dialog DOM node.',
          name: 'dialogClassName',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Component size variations.\n\none of: "lg", "large", "sm", "small"',
          name: 'bsSize',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'modal\'',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        }
      ],
      description: 'Modal.Dialog',
      id: '93uClSQcwyGJ0cq2C5cy',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'Modal.Dialog'
    },
    {
      children: [],
      componentImport: 'react-bootstrap/lib/NavbarCollapse',
      componentProps: [],
      description: 'Navbar.Collapse',
      id: '93xY4uCAZjNNlXPKIJSP',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'Navbar.Collapse'
    },
    {
      children: [],
      closeTag: true,
      componentImport: 'react-bootstrap/lib/Jumbotron',
      componentProps: [
        {
          description: 'You can use a custom element type for this component.',
          name: 'componentClass',
          propType: 'PropTypes.element',
          propTypeIsrequired: false
        },
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'jumbotron\'',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        }
      ],
      description: 'A lightweight, flexible component that can optionally extend the entire viewport to showcase key content on your site.\n\n<Jumbotron>\n  <h1>Hello, world!</h1>\n  <p>\n    This is a simple hero unit, a simple jumbotron-style component for calling\n    extra attention to featured content or information.\n  </p>\n  <p>\n    <Button bsStyle="primary">Learn more</Button>\n  </p>\n</Jumbotron>;',
      id: '9MzVGIFczDORixkdTalz',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'Jumbotron'
    },
    {
      children: [],
      closeTag: false,
      componentImport: 'react-bootstrap/lib/InputGroupAddon',
      componentProps: [
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'input-group-addon\'',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        }
      ],
      description: 'InputGroup.Addon',
      id: '9QvbCynRko82uMUS1rQf',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'InputGroup.Addon'
    },
    {
      children: [],
      componentImport: 'react-bootstrap/lib/NavbarToggle',
      componentProps: [
        {
          description: 'onClick',
          name: 'onClick',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'The toggle content, if left empty it will render the default toggle (seen above).',
          name: 'children',
          propType: 'PropTypes.node',
          propTypeIsrequired: true
        }
      ],
      description: 'NavbarToggle',
      id: 'Ayh0HhHwjxvDQJaPwjKd',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'NavbarToggle'
    },
    {
      children: [],
      closeTag: true,
      componentImport: 'react-bootstrap/lib/ListGroup',
      componentProps: [
        {
          description: 'You can use a custom element type for this component.\n\nIf not specified, it will be treated as \'li\' if every child is a non-actionable <ListGroupItem>, and \'div\' otherwise.',
          name: 'componentClass',
          propType: 'PropTypes.element',
          propTypeIsrequired: false
        },
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'list-group\'',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        }
      ],
      description: 'List group ListGroup, ListGroupItem\nList groups are a flexible and powerful component for displaying not only simple lists of elements, but complex ones with custom content.\n\n<ListGroup>\n  <ListGroupItem>Item 1</ListGroupItem>\n  <ListGroupItem>Item 2</ListGroupItem>\n  <ListGroupItem>...</ListGroupItem>\n</ListGroup>;\n\nLinked\nSet the href or onClick prop on ListGroupItem, to create a linked or clickable element.\n\nfunction alertClicked() {\n  alert(\'You clicked the third ListGroupItem\');\n}\n\nrender(\n  <ListGroup>\n    <ListGroupItem href="#link1">Link 1</ListGroupItem>\n    <ListGroupItem href="#link2">Link 2</ListGroupItem>\n    <ListGroupItem onClick={alertClicked}>Trigger an alert</ListGroupItem>\n  </ListGroup>\n);\n\nStyling by state\nSet the active or disabled prop to true to mark or disable the item.\n\n<ListGroup>\n  <ListGroupItem href="#" active>\n    Link 1\n  </ListGroupItem>\n  <ListGroupItem href="#">Link 2</ListGroupItem>\n  <ListGroupItem href="#" disabled>\n    Link 3\n  </ListGroupItem>\n</ListGroup>;\n\nStyling by color\nSet the bsStyle prop to style the item\n\n<ListGroup>\n  <ListGroupItem bsStyle="success">Success</ListGroupItem>\n  <ListGroupItem bsStyle="info">Info</ListGroupItem>\n  <ListGroupItem bsStyle="warning">Warning</ListGroupItem>\n  <ListGroupItem bsStyle="danger">Danger</ListGroupItem>\n</ListGroup>;\n\nWith header\nSet the header prop to create a structured item, with a heading and a body area.\n\n<ListGroup>\n  <ListGroupItem header="Heading 1">Some body text</ListGroupItem>\n  <ListGroupItem header="Heading 2" href="#">\n    Linked item\n  </ListGroupItem>\n  <ListGroupItem header="Heading 3" bsStyle="danger">\n    Danger styling\n  </ListGroupItem>\n</ListGroup>;\n\nWith custom component children\nWhen using ListGroupItems directly, ListGroup looks at whether the items have href or onClick props to determine which DOM elements to emit. However, with custom item components as children to ListGroup, set thecomponentClass prop to specify which element ListGroup should output.\n\nfunction CustomComponent({ children }) {\n  return (\n    <li className="list-group-item" onClick={() => {}}>\n      {children}\n    </li>\n  );\n}\n\nrender(\n  <ListGroup componentClass="ul">\n    <CustomComponent>Custom Child 1</CustomComponent>\n    <CustomComponent>Custom Child 2</CustomComponent>\n    <CustomComponent>Custom Child 3</CustomComponent>\n  </ListGroup>\n);',
      id: 'BNT8eDsR7dkxZUz7gW6n',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'ListGroup'
    },
    {
      children: [],
      closeTag: false,
      componentImport: 'react-bootstrap/lib/Badge',
      componentProps: [
        {
          description: 'default: false',
          name: 'pullRight',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'badge\'',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        }
      ],
      description: '<p>\n  Badges <Badge>42</Badge>\n</p>;\n\nCross-browser compatibility\nUnlike in regular Bootstrap, badges self collapse even in Internet Explorer 8.',
      id: 'BOZJPz9Zqzla0fgjhdgB',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'Badge'
    },
    {
      children: [],
      closeTag: false,
      componentImport: '-',
      componentProps: [
        {
          description: 'If false the user won\'t be able to interact with the control. Default value is true.',
          name: 'enabled',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'If true, then selecting a segment won\'t persist visually. The onValueChange callback will still work as expected.',
          name: 'momentary',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'Callback that is called when the user taps a segment; passes the event as an argument',
          name: 'onChange',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Callback that is called when the user taps a segment; passes the segment\'s value as an argument',
          name: 'onValueChange',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'The index in props.values of the segment to be (pre)selected.',
          name: 'selectedIndex',
          propType: 'PropTypes.number',
          propTypeIsrequired: false
        },
        {
          description: 'Accent color of the control.',
          name: 'tintColor',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'The labels for the control\'s segment buttons, in order.',
          name: 'values',
          propType: 'PropTypes.array',
          propTypeIsrequired: false
        }
      ],
      description: 'Use SegmentedControlIOS to render a UISegmentedControl iOS.\n\nProgrammatically changing selected index\nThe selected index can be changed on the fly by assigning the selectedIndex prop to a state variable, then changing that variable. Note that the state variable would need to be updated as the user selects a value and changes the index, as shown in the example below.\n\nExample\n<SegmentedControlIOS\n  values={[\'One\', \'Two\']}\n  selectedIndex={this.state.selectedIndex}\n  onChange={(event) => {\n    this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex});\n  }}\n/>',
      id: 'BPAMkgpvSqAj3CB8OvyL',
      isDefault: true,
      provider: 'ReactNative',
      techno: 'React Native',
      title: 'SegmentedControlIOS'
    },
    {
      children: [],
      componentImport: 'react-bootstrap/lib/Tab',
      componentProps: [
        {
          description: 'disabled',
          name: 'disabled',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'title',
          name: 'title',
          propType: 'PropTypes.node',
          propTypeIsrequired: true
        },
        {
          description: 'tabClassName is used as className for the associated NavItem',
          name: 'tabClassName',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        },
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        }
      ],
      description: 'Tab',
      id: 'BfK0wZ85SXuyp5hvfJjW',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'Tab'
    },
    {
      children: [],
      closeTag: false,
      componentImport: '-',
      componentProps: [
        {
          description: 'Type: optionalImageSource',
          name: 'overflowIcon',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Sets possible actions on the toolbar as part of the action menu. These are displayed as icons or text on the right side of the widget. If they don\'t fit they are placed in an \'overflow\' menu.\n\nThis property takes an array of objects, where each object has the following keys:\n\ntitle: required, the title of this action\nicon: the icon for this action, e.g. require(\'./some_icon.png\')\nshow: when to show this action as an icon or hide it in the overflow menu: always, ifRoom or never\nshowWithText: boolean, whether to show text alongside the icon or not\n\narray of object: {title: string,icon: optionalImageSource,show: enum(\'always\', \'ifRoom\', \'never\'),showWithText: bool}',
          name: 'actions',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'Sets the content inset for the toolbar starting edge.\n\nThe content inset affects the valid area for Toolbar content other than the navigation button and menu. Insets define the minimum margin for these components and can be used to effectively align Toolbar content along well-known gridlines.',
          name: 'contentInsetStart',
          propType: 'PropTypes.number',
          propTypeIsrequired: false
        },
        {
          description: 'Sets the toolbar logo.\n\nType: optionalImageSource',
          name: 'logo',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Sets the navigation icon.\n\nType: optionalImageSource',
          name: 'navIcon',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Callback that is called when an action is selected. The only argument that is passed to the callback is the position of the action in the actions array.',
          name: 'onActionSelected',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Callback called when the icon is selected.',
          name: 'onIconClicked',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Sets the content inset for the toolbar ending edge.\n\nThe content inset affects the valid area for Toolbar content other than the navigation button and menu. Insets define the minimum margin for these components and can be used to effectively align Toolbar content along well-known gridlines.\n\n',
          name: 'contentInsetEnd',
          propType: 'PropTypes.number',
          propTypeIsrequired: false
        },
        {
          description: 'Used to set the toolbar direction to RTL. In addition to this property you need to add\n\nandroid:supportsRtl="true"\n\nto your application AndroidManifest.xml and then call setLayoutDirection(LayoutDirection.RTL) in your MainActivity onCreate method.',
          name: 'rtl',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'Sets the toolbar subtitle.',
          name: 'subtitle',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Sets the toolbar subtitle color.',
          name: 'subtitleColor',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Used to locate this view in end-to-end tests.',
          name: 'testID',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Sets the toolbar title.',
          name: 'title',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Sets the toolbar title color.',
          name: 'titleColor',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        }
      ],
      description: 'React component that wraps the Android-only Toolbar widget. A Toolbar can display a logo, navigation icon (e.g. hamburger menu), a title & subtitle and a list of actions. The title and subtitle are expanded so the logo and navigation icons are displayed on the left, title and subtitle in the middle and the actions on the right.\n\nIf the toolbar has an only child, it will be displayed between the title and actions.\n\nAlthough the Toolbar supports remote images for the logo, navigation and action icons, this should only be used in DEV mode where require(\'./some_icon.png\') translates into a packager URL. In release mode you should always use a drawable resource for these icons. Using require(\'./some_icon.png\') will do this automatically for you, so as long as you don\'t explicitly use e.g. {uri: \'http://...\'}, you will be good.\n\nExample:\n\nrender: function() {\n  return (\n    <ToolbarAndroid\n      logo={require(\'./app_logo.png\')}\n      title="AwesomeApp"\n      actions={[{title: \'Settings\', icon: require(\'./icon_settings.png\'), show: \'always\'}]}\n      onActionSelected={this.onActionSelected} />\n  )\n},\nonActionSelected: function(position) {\n  if (position === 0) { // index of \'Settings\'\n    showSettings();\n  }\n}',
      id: 'C4eG0qzWuQqjmV7yKefr',
      isDefault: true,
      provider: 'ReactNative',
      techno: 'React Native',
      title: 'ToolbarAndroid'
    },
    {
      children: [],
      closeTag: false,
      componentImport: '-',
      componentProps: [
        {
          description: 'Determines the type of background drawable that\'s going to be used to display feedback. It takes an object with type property and extra data depending on the type. It\'s recommended to use one of the static methods to generate that dictionary.\n\nType: backgroundPropType',
          name: 'background',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Set to true to add the ripple effect to the foreground of the view, instead of the background. This is useful if one of your child views has a background of its own, or you\'re e.g. displaying images, and you don\'t want the ripple to be covered by them.\n\nCheck TouchableNativeFeedback.canUseNativeForeground() first, as this is only available on Android 6.0 and above. If you try to use this on older versions you will get a warning and fallback to background.',
          name: 'useForeground',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        }
      ],
      description: 'A wrapper for making views respond properly to touches (Android only). On Android this component uses native state drawable to display touch feedback.\n\nAt the moment it only supports having a single View instance as a child node, as it\'s implemented by replacing that View with another instance of RCTView node with some additional properties set.\n\nBackground drawable of native feedback touchable can be customized with background property.\n\nExample:\n\nrenderButton: function() {\n  return (\n    <TouchableNativeFeedback\n        onPress={this._onPressButton}\n        background={TouchableNativeFeedback.SelectableBackground()}>\n      <View style={{width: 150, height: 100, backgroundColor: \'red\'}}>\n        <Text style={{margin: 30}}>Button</Text>\n      </View>\n    </TouchableNativeFeedback>\n  );\n},',
      id: 'DWPTOdlJy7wp3eFgpxdJ',
      isDefault: true,
      provider: 'ReactNative',
      techno: 'React Native',
      title: 'TouchableNativeFeedback'
    },
    {
      children: [],
      closeTag: false,
      componentImport: 'react-bootstrap/lib/PanelCollapse',
      componentProps: [
        {
          description: 'Callback fired before the component expands',
          name: 'onEnter',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Callback fired after the component starts to expand',
          name: 'onEntering',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Callback fired after the component has expanded',
          name: 'onEntered',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Callback fired before the component collapses',
          name: 'onExit',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Callback fired after the component starts to collapse',
          name: 'onExiting',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Callback fired after the component has collapsed',
          name: 'onExited',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'panel\'',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        }
      ],
      description: 'Panel.Collapse',
      id: 'DhRlqan3PUDwdQ4lspH6',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'Panel.Collapse'
    },
    {
      children: [],
      closeTag: false,
      componentImport: '-',
      componentProps: [
        {
          description: 'Does this view want to become responder on the start of a touch?\n\nView.props.onStartShouldSetResponder: (event) => [true | false], where event is a synthetic touch event as described above.',
          name: 'onStartShouldSetResponder',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not obvious from the accessibility label.',
          name: 'accessibilityHint',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Overrides the text that\'s read by the screen reader when the user interacts with the element. By default, the label is constructed by traversing all the children and accumulating all the Text nodes separated by space.',
          name: 'accessibilityLabel',
          propType: 'PropTypes.node',
          propTypeIsrequired: false
        },
        {
          description: 'This defines how far a touch event can start away from the view. Typical interface guidelines recommend touch targets that are at least 30 - 40 points/density-independent pixels.\n\nFor example, if a touchable view has a height of 20 the touchable height can be extended to 40 with hitSlop={{top: 10, bottom: 10, left: 0, right: 0}}\n\nThe touch area never extends past the parent view bounds and the Z-index of sibling views always takes precedence if a touch hits two overlapping views.\n\nobject: {top: number, left: number, bottom: number, right: number}',
          name: 'hitSlop',
          propType: 'PropTypes.object',
          propTypeIsrequired: false
        },
        {
          description: 'Used to locate this view from native classes.\n\nThis disables the \'layout-only view removal\' optimization for this view!',
          name: 'nativeID',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'When accessible is true, the system will try to invoke this function when the user performs accessibility tap gesture.\n\n',
          name: 'onAccessibilityTap',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Invoked on mount and layout changes with:\n\n{nativeEvent: { layout: {x, y, width, height}}}\n\nThis event is fired immediately once the layout has been calculated, but the new layout may not yet be reflected on the screen at the time the event is received, especially if a layout animation is in progress.',
          name: 'onLayout',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'When accessible is true, the system will invoke this function when the user performs the magic tap gesture.',
          name: 'onMagicTap',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Does this view want to "claim" touch responsiveness? This is called for every touch move on the View when it is not the responder.\n\nView.props.onMoveShouldSetResponder: (event) => [true | false], where event is a synthetic touch event as described above.',
          name: 'onMoveShouldSetResponder',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'If a parent View wants to prevent a child View from becoming responder on a move, it should have this handler which returns true.\n\nView.props.onMoveShouldSetResponderCapture: (event) => [true | false], where event is a synthetic touch event as described above.',
          name: 'onMoveShouldSetResponderCapture',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'The View is now responding for touch events. This is the time to highlight and show the user what is happening.\n\nView.props.onResponderGrant: (event) => {}, where event is a synthetic touch event as described above.',
          name: 'onResponderGrant',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'The user is moving their finger.\n\nView.props.onResponderMove: (event) => {}, where event is a synthetic touch event as described above.',
          name: 'onResponderMove',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Another responder is already active and will not release it to that View asking to be the responder.\n\nView.props.onResponderReject: (event) => {}, where event is a synthetic touch event as described above.',
          name: 'onResponderReject',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Fired at the end of the touch.\n\nView.props.onResponderRelease: (event) => {}, where event is a synthetic touch event as described above.',
          name: 'onResponderRelease',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'The responder has been taken from the View. Might be taken by other views after a call to onResponderTerminationRequest, or might be taken by the OS without asking (e.g., happens with control center/ notification center on iOS)\n\nView.props.onResponderTerminate: (event) => {}, where event is a synthetic touch event as described above.',
          name: 'onResponderTerminate',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Some other View wants to become responder and is asking this View to release its responder. Returning true allows its release.\n\nView.props.onResponderTerminationRequest: (event) => {}, where event is a synthetic touch event as described above.',
          name: 'onResponderTerminationRequest',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'When true, indicates that the view is an accessibility element. By default, all the touchable elements are accessible.',
          name: 'accessible',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'If a parent View wants to prevent a child View from becoming responder on a touch start, it should have this handler which returns true.\n\nView.props.onStartShouldSetResponderCapture: (event) => [true | false], where event is a synthetic touch event as described above.',
          name: 'onStartShouldSetResponderCapture',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Controls whether the View can be the target of touch events.\n\n\'auto\': The View can be the target of touch events.\n\'none\': The View is never the target of touch events.\n\'box-none\': The View is never the target of touch events but it\'s subviews can be. It behaves like if the view had the following classes in CSS:\n.box-none {\n     pointer-events: none;\n}\n.box-none * {\n     pointer-events: all;\n}\n\'box-only\': The view can be the target of touch events but it\'s subviews cannot be. It behaves like if the view had the following classes in CSS:\n.box-only {\n     pointer-events: all;\n}\n.box-only * {\n     pointer-events: none;\n}\nSince pointerEvents does not affect layout/appearance, and we are already deviating from the spec by adding additional modes, we opt to not include pointerEvents on style. On some platforms, we would need to implement it as a className anyways. Using style or not is an implementation detail of the platform.\n\nenum(\'box-none\', \'none\', \'box-only\', \'auto\')',
          name: 'pointerEvents',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'This is a special performance property exposed by RCTView and is useful for scrolling content when there are many subviews, most of which are offscreen. For this property to be effective, it must be applied to a view that contains many subviews that extend outside its bound. The subviews must also have overflow: hidden, as should the containing view (or one of its superviews).',
          name: 'removeClippedSubviews',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'style',
          name: 'style',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Used to locate this view in end-to-end tests.\n\nThis disables the \'layout-only view removal\' optimization for this view!',
          name: 'testID',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: '> Note: accessibilityComponentTypewill soon be deprecated. When possible, use accessibilityRole and accessibilityStates instead.\n\nIndicates to accessibility services to treat UI component like a native one. Works for Android only.\n\nPossible values are one of:\n\n\'none\'\n\'button\'\n\'radiobutton_checked\'\n\'radiobutton_unchecked\'\n\n',
          name: 'accessibilityComponentType',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'Indicates to accessibility services whether the user should be notified when this view changes. Works for Android API >= 19 only. Possible values:\n\n\'none\' - Accessibility services should not announce changes to this view.\n\'polite\'- Accessibility services should announce changes to this view.\n\'assertive\' - Accessibility services should interrupt ongoing speech to immediately announce changes to this view.\nSee the Android View docs for reference.\n\nenum(\'none\', \'polite\', \'assertive\')',
          name: 'accessibilityLiveRegion',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'Views that are only used to layout their children or otherwise don\'t draw anything may be automatically removed from the native hierarchy as an optimization. Set this property to false to disable this optimization and ensure that this View exists in the native view hierarchy.',
          name: 'collapsable',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'Controls how view is important for accessibility which is if it fires accessibility events and if it is reported to accessibility services that query the screen. Works for Android only.\n\nPossible values:\n\n\'auto\' - The system determines whether the view is important for accessibility - default (recommended).\n\'yes\' - The view is important for accessibility.\n\'no\' - The view is not important for accessibility.\n\'no-hide-descendants\' - The view is not important for accessibility, nor are any of its descendant views.\nSee the Android importantForAccessibility docs for reference.\n\nenum(\'auto\', \'yes\', \'no\', \'no-hide-descendants\')',
          name: 'importantForAccessibility',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'Whether this View needs to rendered offscreen and composited with an alpha in order to preserve 100% correct colors and blending behavior. The default (false) falls back to drawing the component and its children with an alpha applied to the paint used to draw each element instead of rendering the full component offscreen and compositing it back with an alpha value. This default may be noticeable and undesired in the case where the View you are setting an opacity on has multiple overlapping elements (e.g. multiple overlapping Views, or text and a background).\n\nRendering offscreen to preserve correct alpha behavior is extremely expensive and hard to debug for non-native developers, which is why it is not turned on by default. If you do need to enable this property for an animation, consider combining it with renderToHardwareTextureAndroid if the view contents are static (i.e. it doesn\'t need to be redrawn each frame). If that property is enabled, this View will be rendered off-screen once, saved in a hardware texture, and then composited onto the screen with an alpha each frame without having to switch rendering targets on the GPU.',
          name: 'needsOffscreenAlphaCompositing',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'Whether this View should render itself (and all of its children) into a single hardware texture on the GPU.\n\nOn Android, this is useful for animations and interactions that only modify opacity, rotation, translation, and/or scale: in those cases, the view doesn\'t have to be redrawn and display lists don\'t need to be re-executed. The texture can just be re-used and re-composited with different parameters. The downside is that this can use up limited video memory, so this prop should be set back to false at the end of the interaction/animation.',
          name: 'renderToHardwareTextureAndroid',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: '> Note: AccessibilityRole and AccessibilityStates are meant to be a cross-platform solution to replace accessibilityTraits and accessibilityComponentType, which will soon be deprecated. When possible, use accessibilityRole and accessibilityStates instead of accessibilityTraits and accessibilityComponentType.\n\nTells the screen reader to treat the currently focused on element as having a specific role.\n\nPossible values for AccessibilityRole is one of:\n\n\'none\' - The element has no role.\n\'button\' - The element should be treated as a button.\n\'link\' - The element should be treated as a link.\n\'header\' - The element is a header that divides content into sections.\n\'search\' - The element should be treated as a search field.\n\'image\' - The element should be treated as an image.\n\'key\' - The element should be treated like a keyboard key.\n\'text\' - The element should be treated as text.\n\'summary\' - The element provides app summary information.\n\'imagebutton\' - The element has the role of both an image and also a button.\n\'adjustable\' - The element allows adjustment over a range of values.\nOn iOS, these roles map to corresponding Accessibility Traits. Image button has the same functionality as if the trait was set to both \'image\' and \'button\'. See the Accessibility guide for more information.\n\nOn Android, these roles have similar functionality on TalkBack as adding Accessibility Traits does on Voiceover in iOS',
          name: 'accessibilityRole',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: '> Note: AccessibilityRole and AccessibilityStates are meant to be a cross-platform solution to replace accessibilityTraits and accessibilityComponentType, which will soon be deprecated. When possible, use accessibilityRole and accessibilityStates instead of accessibilityTraits and accessibilityComponentType.\n\nTells the screen reader to treat the currently focused on element as being in a specific state.\n\nYou can provide one state, no state, or both states. The states must be passed in through an array. Ex: [\'selected\'] or [\'selected\', \'disabled\']\n\nPossible values for AccessibilityStates are:\n\n\'selected\' - The element is in a selcted state.\n\'disabled\' - The element is in a disabled state.',
          name: 'accessibilityStates',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: '> Note: accessibilityTraits will soon be deprecated. When possible, use accessibilityRole and accessibilityStates instead.\n\nProvides additional traits to screen reader. By default no traits are provided unless specified otherwise in element.\n\nYou can provide one trait or an array of many traits.\n\nPossible values for AccessibilityTraits are:\n\n\'none\' - The element has no traits.\n\'button\' - The element should be treated as a button.\n\'link\' - The element should be treated as a link.\n\'header\' - The element is a header that divides content into sections.\n\'search\' - The element should be treated as a search field.\n\'image\' - The element should be treated as an image.\n\'selected\' - The element is selected.\n\'plays\' - The element plays sound.\n\'key\' - The element should be treated like a keyboard key.\n\'text\' - The element should be treated as text.\n\'summary\' - The element provides app summary information.\n\'disabled\' - The element is disabled.\n\'frequentUpdates\' - The element frequently changes its value.\n\'startsMedia\' - The element starts a media session.\n\'adjustable\' - The element allows adjustment over a range of values.\n\'allowsDirectInteraction\' - The element allows direct touch interaction for VoiceOver users.\n\'pageTurn\' - Informs VoiceOver that it should scroll to the next page when it finishes reading the contents of the element.\nSee the Accessibility guide for more information.',
          name: 'accessibilityTraits',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'A value indicating whether VoiceOver should ignore the elements within views that are siblings of the receiver. Default is false.\n\nSee the Accessibility guide for more information.',
          name: 'accessibilityViewIsModal',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'A value indicating whether the accessibility elements contained within this accessibility element are hidden. Default is false.\n\nSee the Accessibility guide for more information.',
          name: 'accessibilityElementsHidden',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'A value indicating this view should or should not be inverted when color inversion is turned on. A value of true will tell the view to not be inverted even if color inversion is turned on.\n\nSee the Accessibility guide for more information.',
          name: 'accessibilityIgnoresInvertColors',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'Whether this View should be rendered as a bitmap before compositing.\n\nOn iOS, this is useful for animations and interactions that do not modify this component\'s dimensions nor its children; for example, when translating the position of a static view, rasterization allows the renderer to reuse a cached bitmap of a static view and quickly composite it during each frame.\n\nRasterization incurs an off-screen drawing pass and the bitmap consumes memory. Test and measure when using this property.\n\n',
          name: 'shouldRasterizeIOS',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        }
      ],
      description: 'The most fundamental component for building a UI, View is a container that supports layout with flexbox, style, some touch handling, and accessibility controls. View maps directly to the native view equivalent on whatever platform React Native is running on, whether that is a UIView, <div>, android.view, etc.\n\nView is designed to be nested inside other views and can have 0 to many children of any type.\n\nThis example creates a View that wraps two colored boxes and a text component in a row with padding.\n\nclass ViewColoredBoxesWithText extends Component {\n  render() {\n    return (\n      <View\n        style={{\n          flexDirection: \'row\',\n          height: 100,\n          padding: 20,\n        }}>\n        <View style={{backgroundColor: \'blue\', flex: 0.3}} />\n        <View style={{backgroundColor: \'red\', flex: 0.5}} />\n        <Text>Hello World!</Text>\n      </View>\n    );\n  }\n}\nViews are designed to be used with StyleSheet for clarity and performance, although inline styles are also supported.\n\nSynthetic Touch Events\nFor View responder props (e.g., onResponderMove), the synthetic touch event passed to them are of the following form:\n\nnativeEvent\nchangedTouches - Array of all touch events that have changed since the last event.\nidentifier - The ID of the touch.\nlocationX - The X position of the touch, relative to the element.\nlocationY - The Y position of the touch, relative to the element.\npageX - The X position of the touch, relative to the root element.\npageY - The Y position of the touch, relative to the root element.\ntarget - The node id of the element receiving the touch event.\ntimestamp - A time identifier for the touch, useful for velocity calculation.\ntouches - Array of all current touches on the screen.',
      id: 'DonxQSjWJ1a8zKvX4mfU',
      isDefault: true,
      provider: 'ReactNative',
      techno: 'React Native',
      title: 'View'
    },
    {
      children: [],
      closeTag: true,
      componentImport: 'react-bootstrap/lib/Carousel',
      componentProps: [
        {
          description: 'default: true',
          name: 'slide',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'default: true',
          name: 'indicators',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'The amount of time to delay between automatically cycling an item. If null, carousel will not automatically cycle.\ndefault: 5000',
          name: 'interval',
          propType: 'PropTypes.number',
          propTypeIsrequired: true
        },
        {
          description: 'default: true',
          name: 'controls',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'default: true',
          name: 'pauseOnHover',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'default: true',
          name: 'wrap',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'Callback fired when the active item changes.\n\n(eventKey: any, ?event: Object) => any\nIf this callback takes two or more arguments, the second argument will be a persisted event object with direction set to the direction of the transition.',
          name: 'onSelect',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'onSlideEnd',
          name: 'onSlideEnd',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'activeIndex',
          name: 'activeIndex',
          propType: 'PropTypes.number',
          propTypeIsrequired: true
        },
        {
          description: 'defaultActiveIndex',
          name: 'defaultActiveIndex',
          propType: 'PropTypes.number',
          propTypeIsrequired: true
        },
        {
          description: 'direction',
          name: 'direction',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: true
        },
        {
          description: '<Glyphicon glyph="chevron-left" />',
          name: 'prevIcon',
          propType: 'PropTypes.node',
          propTypeIsrequired: true
        },
        {
          description: 'Label shown to screen readers only, can be used to show the previous element in the carousel. Set to null to deactivate.\n\ndefault: \'Previous\'',
          name: 'prevLabel',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        },
        {
          description: '<Glyphicon glyph="chevron-right" />',
          name: 'nextIcon',
          propType: 'PropTypes.node',
          propTypeIsrequired: true
        },
        {
          description: '\t\nLabel shown to screen readers only, can be used to show the next element in the carousel. Set to null to deactivate.\n\ndefault: \'Next\'',
          name: 'nextLabel',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        },
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'carousel\'',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        }
      ],
      description: 'Carousels Carousel, Carousel.Item, Carousel.Caption',
      id: 'DzmkCU24ug4FovPJfAwD',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'Carousel'
    },
    {
      children: [],
      closeTag: false,
      componentImport: 'react-bootstrap/lib/BreadcrumbItem',
      componentProps: [
        {
          description: 'If set to true, renders span instead of a\n\ndefault: false',
          name: 'active',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'href attribute for the inner a element',
          name: 'href',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'title attribute for the inner a element',
          name: 'title',
          propType: 'PropTypes.node',
          propTypeIsrequired: false
        },
        {
          description: 'target attribute for the inner a element',
          name: 'target',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        }
      ],
      description: 'Breadcrumb Item',
      id: 'EePm08YwomzPQPlJCUcB',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'Breadcrumb.Item'
    },
    {
      children: [],
      componentImport: 'react-bootstrap/lib/NavbarHeader',
      componentProps: [],
      description: 'Navbar.Header',
      id: 'HAI627meuoN0YhJzEzS5',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'Navbar.Header'
    },
    {
      children: [],
      closeTag: false,
      componentImport: '-',
      componentProps: [
        {
          description: 'The visible prop determines whether your modal is visible.',
          name: 'visible',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'The supportedOrientations prop allows the modal to be rotated to any of the specified orientations. On iOS, the modal is still restricted by what\'s specified in your app\'s Info.plist\'s UISupportedInterfaceOrientations field. When using presentationStyle of pageSheet or formSheet, this property will be ignored by iOS.\n\nType: array of enum(\'portrait\', \'portrait-upside-down\', \'landscape\', \'landscape-left\', \'landscape-right\')',
          name: 'supportedOrientations',
          propType: 'PropTypes.array',
          propTypeIsrequired: false
        },
        {
          description: 'The onRequestClose callback is called when the user taps the hardware back button on Android or the menu button on Apple TV. Because of this required prop, be aware that BackHandler events will not be emitted as long as the modal is open.',
          name: 'onRequestClose',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'The onShow prop allows passing a function that will be called once the modal has been shown.',
          name: 'onShow',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'The transparent prop determines whether your modal will fill the entire view. Setting this to true will render the modal over a transparent background.',
          name: 'transparent',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'The animationType prop controls how the modal animates.\n\nslide slides in from the bottom\nfade fades into view\nnone appears without an animation\nDefault is set to none.\n\nType: enum(\'none\', \'slide\', \'fade\')',
          name: 'animationType',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'The hardwareAccelerated prop controls whether to force hardware acceleration for the underlying window.',
          name: 'hardwareAccelerated',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'The onDismiss prop allows passing a function that will be called once the modal has been dismissed.',
          name: 'onDismiss',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'The onOrientationChange callback is called when the orientation changes while the modal is being displayed. The orientation provided is only \'portrait\' or \'landscape\'. This callback is also called on initial render, regardless of the current orientation.',
          name: 'onOrientationChange',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'The presentationStyle prop controls how the modal appears (generally on larger devices such as iPad or plus-sized iPhones). See https://developer.apple.com/reference/uikit/uimodalpresentationstyle for details.\n\nfullScreen covers the screen completely\npageSheet covers portrait-width view centered (only on larger devices)\nformSheet covers narrow-width view centered (only on larger devices)\noverFullScreen covers the screen completely, but allows transparency\nDefault is set to overFullScreen or fullScreen depending on transparent property.\n\nType: enum(\'fullScreen\', \'pageSheet\', \'formSheet\', \'overFullScreen\')',
          name: 'presentationStyle',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'Deprecated. Use the animationType prop instead.',
          name: 'animated',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        }
      ],
      description: 'The Modal component is a simple way to present content above an enclosing view.\n\nNote: If you need more control over how to present modals over the rest of your app, then consider using a top-level Navigator.\n\nimport React, {Component} from \'react\';\nimport {Modal, Text, TouchableHighlight, View, Alert} from \'react-native\';\n\nclass ModalExample extends Component {\n  state = {\n    modalVisible: false,\n  };\n\n  setModalVisible(visible) {\n    this.setState({modalVisible: visible});\n  }\n\n  render() {\n    return (\n      <View style={{marginTop: 22}}>\n        <Modal\n          animationType="slide"\n          transparent={false}\n          visible={this.state.modalVisible}\n          onRequestClose={() => {\n            Alert.alert(\'Modal has been closed.\');\n          }}>\n          <View style={{marginTop: 22}}>\n            <View>\n              <Text>Hello World!</Text>\n\n              <TouchableHighlight\n                onPress={() => {\n                  this.setModalVisible(!this.state.modalVisible);\n                }}>\n                <Text>Hide Modal</Text>\n              </TouchableHighlight>\n            </View>\n          </View>\n        </Modal>\n\n        <TouchableHighlight\n          onPress={() => {\n            this.setModalVisible(true);\n          }}>\n          <Text>Show Modal</Text>\n        </TouchableHighlight>\n      </View>\n    );\n  }\n}',
      id: 'HCCjl7fwouBebFdsxMY8',
      isDefault: true,
      provider: 'ReactNative',
      techno: 'React Native',
      title: 'Modal'
    },
    {
      children: [],
      componentImport: 'react-bootstrap/lib/OverlayTrigger',
      componentProps: [
        {
          description: 'Specify which action or actions trigger Overlay visibility\n\ndefault: [\'hover\', \'focus\']',
          name: 'trigger',
          propType: ' PropTypes.arrayOf()',
          propTypeIsrequired: true
        },
        {
          description: 'A millisecond delay amount to show and hide the Overlay once triggered',
          name: 'delay',
          propType: 'PropTypes.number',
          propTypeIsrequired: true
        },
        {
          description: 'A millisecond delay amount before showing the Overlay once triggered.',
          name: 'delayShow',
          propType: 'PropTypes.number',
          propTypeIsrequired: true
        },
        {
          description: 'A millisecond delay amount before hiding the Overlay once triggered.',
          name: 'delayHide',
          propType: 'PropTypes.number',
          propTypeIsrequired: true
        },
        {
          description: 'The initial visibility state of the Overlay. For more nuanced visibility control, consider using the Overlay component directly.\n\ndefault: false',
          name: 'defaultOverlayShown',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'An element or text to overlay next to the target.',
          name: 'overlay',
          propType: 'PropTypes.node',
          propTypeIsrequired: true
        }
      ],
      description: 'OverlayTrigger',
      id: 'I8AOaJGuZCPHw5erNh3c',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'OverlayTrigger'
    },
    {
      children: [],
      closeTag: true,
      componentImport: 'react-bootstrap/lib/Nav',
      componentProps: [
        {
          description: 'Marks the NavItem with a matching eventKey as active. Has a higher precedence over activeHref.',
          name: 'activeKey',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Marks the child NavItem with a matching href prop as active.',
          name: 'activeHref',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'NavItems are be positioned vertically.\n\ndefault: false',
          name: 'stacked',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'all( PropTypes.bool, ({ justified, navbar }) => justified && navbar ? Error(\'justified navbar `Nav`s are not supported\') : null )\n\n\ndefault: false',
          name: 'justified',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'A callback fired when a NavItem is selected.\n\nfunction (\n Any eventKey,\n SyntheticEvent event?\n)',
          name: 'onSelect',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'ARIA role for the Nav, in the context of a TabContainer, the default will be set to "tablist", but can be overridden by the Nav when set explicitly.\n\nWhen the role is set to "tablist" NavItem focus is managed according to the ARIA authoring practices for tabs: https://www.w3.org/TR/2013/WD-wai-aria-practices-20130307/#tabpanel',
          name: 'role',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Apply styling an alignment for use in a Navbar. This prop will be set automatically when the Nav is used inside a Navbar.',
          name: 'navbar',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'Float the Nav to the right. When navbar is true the appropriate contextual classes are added as well.\n\ndefault: false',
          name: 'pullRight',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'Float the Nav to the left. When navbar is true the appropriate contextual classes are added as well.\n\ndefault: false',
          name: 'pullLeft',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'Component visual or contextual style variants.\n\none of: "lg", "large", "sm", "small"',
          name: 'bsStyle',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'nav\'',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        }
      ],
      description: '#Navs Nav, NavItem\nNavs come in two styles, pills and tabs. Disable a tab by adding disabled.\n\nfunction handleSelect(selectedKey) {\n  alert(`selected ${selectedKey}`);\n}\n\nconst navInstance = (\n  <Nav bsStyle="pills" activeKey={1} onSelect={handleSelect}>\n    <NavItem eventKey={1} href="/home">\n      NavItem 1 content\n    </NavItem>\n    <NavItem eventKey={2} title="Item">\n      NavItem 2 content\n    </NavItem>\n    <NavItem eventKey={3} disabled>\n      NavItem 3 content\n    </NavItem>\n  </Nav>\n);\n\nrender(navInstance);\n\n#Dropdown\nAdd dropdowns using the NavDropdown component.\n\nclass NavDropdownExample extends React.Component {\n  handleSelect(eventKey, event) {\n    event.preventDefault();\n    alert(`selected ${eventKey}`);\n  }\n\n  render() {\n    return (\n      <Nav bsStyle="tabs" activeKey="1" onSelect={k => this.handleSelect(k)}>\n        <NavItem eventKey="1" href="/home">\n          NavItem 1 content\n        </NavItem>\n        <NavItem eventKey="2" title="Item">\n          NavItem 2 content\n        </NavItem>\n        <NavItem eventKey="3" disabled>\n          NavItem 3 content\n        </NavItem>\n        <NavDropdown eventKey="4" title="Dropdown" id="nav-dropdown">\n          <MenuItem eventKey="4.1">Action</MenuItem>\n          <MenuItem eventKey="4.2">Another action</MenuItem>\n          <MenuItem eventKey="4.3">Something else here</MenuItem>\n          <MenuItem divider />\n          <MenuItem eventKey="4.4">Separated link</MenuItem>\n        </NavDropdown>\n      </Nav>\n    );\n  }\n}\n\nrender(<NavDropdownExample />);\n\n#Stacked\nThey can also be stacked vertically.\n\nfunction handleSelect(selectedKey) {\n  alert(`selected ${selectedKey}`);\n}\n\nconst navInstance = (\n  <Nav bsStyle="pills" stacked activeKey={1} onSelect={handleSelect}>\n    <NavItem eventKey={1} href="/home">\n      NavItem 1 content\n    </NavItem>\n    <NavItem eventKey={2} title="Item">\n      NavItem 2 content\n    </NavItem>\n    <NavItem eventKey={3} disabled>\n      NavItem 3 content\n    </NavItem>\n  </Nav>\n);\n\nrender(navInstance);\n\n#Justified\nThey can be justified to take the full width of their parent.\n\nclass NavJustified extends React.Component {\n  handleSelect(selectedKey) {\n    alert(`selected ${selectedKey}`);\n  }\n\n  render() {\n    return (\n      <div>\n        <Nav\n          bsStyle="tabs"\n          justified\n          activeKey={1}\n          onSelect={key => this.handleSelect(key)}\n        >\n          <NavItem eventKey={1} href="/home">\n            NavItem 1 content\n          </NavItem>\n          <NavItem eventKey={2} title="Item">\n            NavItem 2 content\n          </NavItem>\n          <NavItem eventKey={3} disabled>\n            NavItem 3 content\n          </NavItem>\n        </Nav>\n        <br />\n        <Nav\n          bsStyle="pills"\n          justified\n          activeKey={1}\n          onSelect={key => this.handleSelect(key)}\n        >\n          <NavItem eventKey={1} href="/home">\n            NavItem 1 content\n          </NavItem>\n          <NavItem eventKey={2} title="Item">\n            NavItem 2 content\n          </NavItem>\n          <NavItem eventKey={3} disabled>\n            NavItem 3 content\n          </NavItem>\n        </Nav>\n      </div>\n    );\n  }\n}\n\nrender(<NavJustified />);',
      id: 'IlKlRNyOS53lT71Apga2',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'Nav'
    },
    {
      children: [],
      closeTag: false,
      componentImport: 'react-bootstrap/lib/ControlLabel',
      componentProps: [
        {
          description: 'Uses controlId from <FormGroup> if not explicitly specified.',
          name: 'htmlFor',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        },
        {
          description: 'default: false',
          name: 'srOnly',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'control-label\'',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        }
      ],
      description: 'ControlLabel',
      id: 'JQEwGlfPfWqUG7wO2Afy',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'ControlLabel'
    },
    {
      children: [],
      closeTag: false,
      componentImport: '-',
      componentProps: [
        {
          description: 'ImageResizeMode is an Enum for different image resizing modes, set via the resizeMode style property on Image components. The values are contain, cover, stretch, center, repeat.',
          name: 'style',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'blurRadius: the blur radius of the blur filter added to the image',
          name: 'blurRadius',
          propType: 'PropTypes.number',
          propTypeIsrequired: false
        },
        {
          description: 'Invoked on mount and layout changes with {nativeEvent: {layout: {x, y, width, height}}}.',
          name: 'onLayout',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Invoked when load completes successfully.',
          name: 'onLoad',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Invoked when load either succeeds or fails.',
          name: 'onLoadEnd',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Invoked on load start.\n\ne.g., onLoadStart={(e) => this.setState({loading: true})}',
          name: 'onLoadStart',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Determines how to resize the image when the frame doesn\'t match the raw image dimensions.\n\ncover: Scale the image uniformly (maintain the image\'s aspect ratio) so that both dimensions (width and height) of the image will be equal to or larger than the corresponding dimension of the view (minus padding).\n\ncontain: Scale the image uniformly (maintain the image\'s aspect ratio) so that both dimensions (width and height) of the image will be equal to or less than the corresponding dimension of the view (minus padding).\n\nstretch: Scale width and height independently, This may change the aspect ratio of the src.\n\nrepeat: Repeat the image to cover the frame of the view. The image will keep its size and aspect ratio, unless it is larger than the view, in which case it will be scaled down uniformly so that it is contained in the view.\n\ncenter: Center the image in the view along both dimensions. If the image is larger than the view, scale it down uniformly so that it is contained in the view.\n\nType: enum(\'cover\', \'contain\', \'stretch\', \'repeat\', \'center\')',
          name: 'resizeMode',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'The image source (either a remote URL or a local file resource).\n\nThis prop can also contain several remote URLs, specified together with their width and height and potentially with scale/other URI arguments. The native side will then choose the best uri to display based on the measured size of the image container. A cache property can be added to control how networked request interacts with the local cache.\n\nThe currently supported formats are png, jpg, jpeg, bmp, gif, webp (Android only), psd (iOS only).',
          name: 'source',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Similarly to source, this property represents the resource used to render the loading indicator for the image, displayed until image is ready to be displayed, typically after when it got downloaded from network.',
          name: 'loadingIndicatorSource',
          propType: 'PropTypes.array',
          propTypeIsrequired: false
        },
        {
          description: 'Invoked on load error with {nativeEvent: {error}}.',
          name: 'onError',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'A unique identifier for this element to be used in UI Automation testing scripts.',
          name: 'testID',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'The mechanism that should be used to resize the image when the image\'s dimensions differ from the image view\'s dimensions. Defaults to auto.\n\nauto: Use heuristics to pick between resize and scale.\n\nresize: A software operation which changes the encoded image in memory before it gets decoded. This should be used instead of scale when the image is much larger than the view.\n\nscale: The image gets drawn downscaled or upscaled. Compared to resize, scale is faster (usually hardware accelerated) and produces higher quality images. This should be used if the image is smaller than the view. It should also be used if the image is slightly bigger than the view.\n\nMore details about resize and scale can be found at http://frescolib.org/docs/resizing.html.\n\nType: enum(\'auto\', \'resize\', \'scale\')',
          name: 'resizeMethod',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'The text that\'s read by the screen reader when the user interacts with the image.',
          name: 'accessibilityLabel',
          propType: 'PropTypes.node',
          propTypeIsrequired: false
        },
        {
          description: 'When true, indicates the image is an accessibility element.',
          name: 'accessible',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'When the image is resized, the corners of the size specified by capInsets will stay a fixed size, but the center content and borders of the image will be stretched. This is useful for creating resizable rounded buttons, shadows, and other resizable assets. More info in the official Apple documentation.\n\nType: object: {top: number, left: number, bottom: number, right: number}',
          name: 'capInsets',
          propType: 'PropTypes.object',
          propTypeIsrequired: false
        },
        {
          description: 'A static image to display while loading the image source.\nIf passing an object, the general shape is {uri: string, width: number, height: number, scale: number}:\n\nuri - a string representing the resource identifier for the image, which should be either a local file path or the name of a static image resource (which should be wrapped in the require(\'./path/to/image.png\') function).\nwidth, height - can be specified if known at build time, in which case these will be used to set the default <Image/> component dimensions.\nscale - used to indicate the scale factor of the image. Defaults to 1.0 if unspecified, meaning that one image pixel equates to one display point / DIP.\nIf passing a number:\n\nnumber - Opaque type returned by something like require(\'./image.jpg\').\nNote: On Android, the default source prop is ignored on debug builds.',
          name: 'defaultSource',
          propType: 'PropTypes.object',
          propTypeIsrequired: false
        },
        {
          description: 'Invoked when a partial load of the image is complete. The definition of what constitutes a "partial load" is loader specific though this is meant for progressive JPEG loads.',
          name: 'onPartialLoad',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Invoked on download progress with {nativeEvent: {loaded, total}}.',
          name: 'onProgress',
          propType: 'PropTypes.number',
          propTypeIsrequired: false
        },
        {
          description: 'Android only. By default, it is 300ms.',
          name: 'fadeDuration',
          propType: 'PropTypes.number',
          propTypeIsrequired: false
        }
      ],
      description: 'A React component for displaying different types of images, including network images, static resources, temporary local images, and images from local disk, such as the camera roll.\n\nThis example shows fetching and displaying an image from local storage as well as one from network and even from data provided in the \'data:\' uri scheme.\n\nNote that for network and data images, you will need to manually specify the dimensions of your image!\n\nimport React, { Component } from \'react\';\nimport { AppRegistry, View, Image } from \'react-native\';\n\nexport default class DisplayAnImage extends Component {\n  render() {\n    return (\n      <View>\n        <Image\n          source={require(\'/react-native/img/favicon.png\')}\n        />\n        <Image\n          style={{width: 50, height: 50}}\n          source={{uri: \'https://facebook.github.io/react-native/docs/assets/favicon.png\'}}\n        />\n        <Image\n          style={{width: 66, height: 58}}\n          source={{uri: \'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==\'}}\n        />\n      </View>\n    );\n  }\n}\n\n// skip this line if using Create React Native App\nAppRegistry.registerComponent(\'DisplayAnImage\', () => DisplayAnImage);\n\n\nYou can also add style to an image:\n\nimport React, { Component } from \'react\';\nimport { AppRegistry, View, Image, StyleSheet } from \'react-native\';\n\nconst styles = StyleSheet.create({\n  stretch: {\n    width: 50,\n    height: 200\n  }\n});\n\nexport default class DisplayAnImageWithStyle extends Component {\n  render() {\n    return (\n      <View>\n        <Image\n          style={styles.stretch}\n          source={require(\'/react-native/img/favicon.png\')}\n        />\n      </View>\n    );\n  }\n}\n\n// skip these lines if using Create React Native App\nAppRegistry.registerComponent(\n  \'DisplayAnImageWithStyle\',\n  () => DisplayAnImageWithStyle\n);\n\nGIF and WebP support on Android\nWhen building your own native code, GIF and WebP are not supported by default on Android.\n\nYou will need to add some optional modules in android/app/build.gradle, depending on the needs of your app.\n\ndependencies {\n  // If your app supports Android versions before Ice Cream Sandwich (API level 14)\n  compile \'com.facebook.fresco:animated-base-support:1.10.0\'\n\n  // For animated GIF support\n  compile \'com.facebook.fresco:animated-gif:1.10.0\'\n\n  // For WebP support, including animated WebP\n  compile \'com.facebook.fresco:animated-webp:1.10.0\'\n  compile \'com.facebook.fresco:webpsupport:1.10.0\'\n\n  // For WebP support, without animations\n  compile \'com.facebook.fresco:webpsupport:1.10.0\'\n}',
      id: 'KkOEyDJ2Nny1kFXydDJf',
      isDefault: true,
      provider: 'ReactNative',
      techno: 'React Native',
      title: 'Image'
    },
    {
      children: [],
      closeTag: false,
      componentImport: 'react-bootstrap/lib/Tooltip',
      componentProps: [
        {
          description: 'An html id attribute, necessary for accessibility',
          name: 'id',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        },
        {
          description: 'Sets the direction the Tooltip is positioned towards.\n\ndefault: right',
          name: 'placement',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: true
        },
        {
          description: 'The "top" position value for the Tooltip.',
          name: 'positionTop',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        },
        {
          description: '\t\nThe "left" position value for the Tooltip.',
          name: 'positionLeft',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        },
        {
          description: 'The "top" position value for the Tooltip arrow.',
          name: 'arrowOffsetTop',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        },
        {
          description: 'The "left" position value for the Tooltip arrow.',
          name: 'arrowOffsetLeft',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        },
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'tooltip\'',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        }
      ],
      description: '#Tooltips Tooltip\nTooltip component for a more stylish alternative to that anchor tag title attribute.\n\n<div>\n  <Tooltip placement="right" className="in" id="tooltip-right">\n    Tooltip right\n  </Tooltip>\n\n  <Tooltip placement="top" className="in" id="tooltip-top">\n    Tooltip top\n  </Tooltip>\n\n  <Tooltip placement="left" className="in" id="tooltip-left">\n    Tooltip left\n  </Tooltip>\n\n  <Tooltip placement="bottom" className="in" id="tooltip-bottom">\n    Tooltip bottom\n  </Tooltip>\n</div>;\n\n#With OverlayTrigger\nAttach and position tooltips with OverlayTrigger.\n\nconst tooltip = (\n  <Tooltip id="tooltip">\n    <strong>Holy guacamole!</strong> Check this info.\n  </Tooltip>\n);\n\nconst positionerInstance = (\n  <ButtonToolbar>\n    <OverlayTrigger placement="left" overlay={tooltip}>\n      <Button bsStyle="default">Holy guacamole!</Button>\n    </OverlayTrigger>\n\n    <OverlayTrigger placement="top" overlay={tooltip}>\n      <Button bsStyle="default">Holy guacamole!</Button>\n    </OverlayTrigger>\n\n    <OverlayTrigger placement="bottom" overlay={tooltip}>\n      <Button bsStyle="default">Holy guacamole!</Button>\n    </OverlayTrigger>\n\n    <OverlayTrigger placement="right" overlay={tooltip}>\n      <Button bsStyle="default">Holy guacamole!</Button>\n    </OverlayTrigger>\n  </ButtonToolbar>\n);\n\nrender(positionerInstance);\n\n#In text copy\nPositioned tooltip in text copy.\n\nfunction LinkWithTooltip({ id, children, href, tooltip }) {\n  return (\n    <OverlayTrigger\n      overlay={<Tooltip id={id}>{tooltip}</Tooltip>}\n      placement="top"\n      delayShow={300}\n      delayHide={150}\n    >\n      <a href={href}>{children}</a>\n    </OverlayTrigger>\n  );\n}\n\nrender(\n  <p className="muted" style={{ marginBottom: 0 }}>\n    Tight pants next level keffiyeh{\' \'}\n    <LinkWithTooltip tooltip="Default tooltip" href="#" id="tooltip-1">\n      you probably\n    </LinkWithTooltip>{\' \'}\n    haven\'t heard of them. Photo booth beard raw denim letterpress vegan\n    messenger bag stumptown. Farm-to-table seitan, mcsweeney\'s fixie sustainable\n    quinoa 8-bit american apparel{\' \'}\n    <LinkWithTooltip\n      tooltip={\n        <span>\n          Another <strong>tooltip</strong>\n        </span>\n      }\n      href="#"\n      id="tooltip-2"\n    >\n      have a\n    </LinkWithTooltip>\n    terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo\n    thundercats. Tofu biodiesel williamsburg marfa, four loko mcsweeney\'s\n    cleanse vegan chambray. A really ironic artisan{\' \'}\n    <LinkWithTooltip tooltip="Another one here too" href="#" id="tooltip-3">\n      whatever keytar\n    </LinkWithTooltip>\n    , scenester farm-to-table banksy Austin{\' \'}\n    <LinkWithTooltip tooltip="The last tip!" href="#" id="tooltip-4">\n      twitter handle\n    </LinkWithTooltip>{\' \'}\n    freegan cred raw denim single-origin coffee viral.\n  </p>\n);',
      id: 'Lh543WD0KaNFUI1Gi6wq',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'Tooltip'
    },
    {
      children: [],
      componentImport: 'react-bootstrap/lib/InputGroupButton',
      componentProps: [
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'input-group-btn\'',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        }
      ],
      description: 'InputGroup.Button',
      id: 'LvuttVoKjsvQ8LfdAhNs',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'InputGroup.Button'
    },
    {
      children: [],
      closeTag: false,
      componentImport: 'react-bootstrap/lib/Radio',
      componentProps: [
        {
          description: 'default: false',
          name: 'Radio',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'default: false',
          name: 'disabled',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'Only valid if inline is not set.\n\none of: \'success\', \'warning\', \'error\', null',
          name: 'validationState',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: true
        },
        {
          description: 'Attaches a ref to the <input> element. Only functions can be used here.\n\n<Radio inputRef={ref => { this.input = ref; }} />',
          name: 'inputRef',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'radio\'',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        }
      ],
      description: 'Radio',
      id: 'NTp1U4FBxbM70vsT1mGD',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'Radio'
    },
    {
      children: [],
      closeTag: false,
      componentImport: '-',
      componentProps: [
        {
          description: 'onSnapshotReady',
          name: 'onSnapshotReady',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'testIdentifier',
          name: 'testIdentifier',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        }
      ],
      description: 'SnapshotViewIOS',
      id: 'Ns7VKzTkDIIgaH7oEilO',
      isDefault: true,
      provider: 'ReactNative',
      techno: 'React Native',
      title: 'SnapshotViewIOS'
    },
    {
      children: [],
      closeTag: true,
      componentImport: 'react-bootstrap/lib/Form',
      componentProps: [
        {
          description: 'default: false',
          name: 'horizontal',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'default: false',
          name: 'inline',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'You can use a custom element type for this component.\n\ndefault: \'form\'',
          name: 'componentClass',
          propType: 'PropTypes.element',
          propTypeIsrequired: true
        },
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'form\'',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        }
      ],
      description: '#Form layout Form\n#Inline forms\nUse <Form inline> instead of <form>. JSX strips whitespace between lines, so you will need to manually add spaces. Additionally, Bootstrap assigns inline form controls width: auto by default, so you may need to set custom widths.\n\n<Form inline>\n  <FormGroup controlId="formInlineName">\n    <ControlLabel>Name</ControlLabel>{\' \'}\n    <FormControl type="text" placeholder="Jane Doe" />\n  </FormGroup>{\' \'}\n  <FormGroup controlId="formInlineEmail">\n    <ControlLabel>Email</ControlLabel>{\' \'}\n    <FormControl type="email" placeholder="jane.doe@example.com" />\n  </FormGroup>{\' \'}\n  <Button type="submit">Send invitation</Button>\n</Form>;\n\nHorizontal forms\nUse <Form horizontal> instead of <form>, then use <Col>s to align labels and controls. Do not use <Row> here, as <FormGroup> will already serve as a grid row in a horizontal form.\n\n<Form horizontal>\n  <FormGroup controlId="formHorizontalEmail">\n    <Col componentClass={ControlLabel} sm={2}>\n      Email\n    </Col>\n    <Col sm={10}>\n      <FormControl type="email" placeholder="Email" />\n    </Col>\n  </FormGroup>\n\n  <FormGroup controlId="formHorizontalPassword">\n    <Col componentClass={ControlLabel} sm={2}>\n      Password\n    </Col>\n    <Col sm={10}>\n      <FormControl type="password" placeholder="Password" />\n    </Col>\n  </FormGroup>\n\n  <FormGroup>\n    <Col smOffset={2} sm={10}>\n      <Checkbox>Remember me</Checkbox>\n    </Col>\n  </FormGroup>\n\n  <FormGroup>\n    <Col smOffset={2} sm={10}>\n      <Button type="submit">Sign in</Button>\n    </Col>\n  </FormGroup>\n</Form>;',
      id: 'NuJPzIvE9BK3v5G0h16U',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'Form'
    },
    {
      children: [],
      closeTag: false,
      componentImport: 'react-bootstrap/lib/Checkbox',
      componentProps: [
        {
          description: 'default: false',
          name: 'inline',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'default: false',
          name: 'disabled',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'default: \'\'',
          name: 'title',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        },
        {
          description: 'Only valid if inline is not set.\n\none of: \'success\', \'warning\', \'error\', null',
          name: 'validationState',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: true
        },
        {
          description: 'Attaches a ref to the <input> element. Only functions can be used here.\n\n<Checkbox inputRef={ref => { this.input = ref; }} />',
          name: 'inputRef',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'checkbox\'\t\n',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        }
      ],
      description: 'Checkbox',
      id: 'OjYh7UUqGjJ9511mtPlT',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'Checkbox'
    },
    {
      children: [],
      closeTag: false,
      componentImport: 'react-bootstrap/lib/Glyphicon',
      componentProps: [
        {
          description: 'An icon name without "glyphicon-" prefix. See e.g. http://getbootstrap.com/components/#glyphicons',
          name: 'glyph',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        },
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'glyphicon\'',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        }
      ],
      description: 'Use them in buttons, button groups for a toolbar, navigation, or prepended form inputs.\n\n<div>\n  <ButtonToolbar>\n    <ButtonGroup>\n      <Button>\n        <Glyphicon glyph="align-left" />\n      </Button>\n      <Button>\n        <Glyphicon glyph="align-center" />\n      </Button>\n      <Button>\n        <Glyphicon glyph="align-right" />\n      </Button>\n      <Button>\n        <Glyphicon glyph="align-justify" />\n      </Button>\n    </ButtonGroup>\n  </ButtonToolbar>\n  <ButtonToolbar>\n    <ButtonGroup>\n      <Button bsSize="large">\n        <Glyphicon glyph="star" /> Star\n      </Button>\n      <Button>\n        <Glyphicon glyph="star" /> Star\n      </Button>\n      <Button bsSize="small">\n        <Glyphicon glyph="star" /> Star\n      </Button>\n      <Button bsSize="xsmall">\n        <Glyphicon glyph="star" /> Star\n      </Button>\n    </ButtonGroup>\n  </ButtonToolbar>\n</div>;',
      id: 'Om1IYPloEtjfdQlgLJBC',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'Glyphicon'
    },
    {
      children: [],
      componentImport: 'react-bootstrap/lib/TabContainer',
      componentProps: [
        {
          description: 'HTML id attribute, required if no generateChildId prop is specified.\n\nfunction(props, ...args) { let error = null; if (!props.generateChildId) { error = idPropType(props, ...args); if (!error && !props.id) { error = new Error( \'In order to properly initialize Tabs in a way that is accessible \' + \'to assistive technologies (such as screen readers) an `id` or a \' + \'`generateChildId` prop to TabContainer is required\' ); } } return error;',
          name: 'id',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        },
        {
          description: 'A function that takes an eventKey and type and returns a unique id for child tab <NavItem>s and <TabPane>s. The function must be a pure function, meaning it should always return the same id for the same set of inputs. The default value requires that an id to be set for the <TabContainer>.\n\nThe type argument will either be "tab" or "pane".\n\ndefault: (eventKey, type) => `${this.props.id}-${type}-${key}`',
          name: 'generateChildId',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'he eventKey of the currently active tab.',
          name: 'onSelect',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        },
        {
          description: 'The eventKey of the currently active tab.',
          name: 'activeKey',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        }
      ],
      description: 'TabContainer',
      id: 'QCAx3D1RBvmWiyjoRkjn',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'TabContainer'
    },
    {
      children: [],
      closeTag: false,
      componentImport: '-',
      componentProps: [
        {
          description: 'This defines how far your touch can start away from the button. This is added to pressRetentionOffset when moving off of the button. ** NOTE ** The touch area never extends past the parent view bounds and the Z-index of sibling views always takes precedence if a touch hits two overlapping views.\n\nobject: {top: number, left: number, bottom: number, right: number}',
          name: 'hitSlop',
          propType: 'PropTypes.object',
          propTypeIsrequired: false
        },
        {
          description: '> Note: accessibilityComponentTypewill soon be deprecated. When possible, use accessibilityRole and accessibilityStates instead.\n\nType: AccessibilityComponentTypes',
          name: 'accessibilityComponentType',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not obvious from the accessibility label.',
          name: 'accessibilityHint',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Overrides the text that\'s read by the screen reader when the user interacts with the element. By default, the label is constructed by traversing all the children and accumulating all the Text nodes separated by space.',
          name: 'accessibilityLabel',
          propType: 'PropTypes.node',
          propTypeIsrequired: false
        },
        {
          description: 'accessibilityRole\n\nType: AccessibilityRoles',
          name: 'accessibilityRole',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'array of AccessibilityStates',
          name: 'accessibilityStates',
          propType: 'PropTypes.array',
          propTypeIsrequired: false
        },
        {
          description: '> Note: accessibilityTraitswill soon be deprecated. When possible, use accessibilityRole and accessibilityStates instead.\n\nType: AccessibilityTraits, ,array of AccessibilityTraits',
          name: 'accessibilityTraits',
          propType: 'PropTypes.array',
          propTypeIsrequired: false
        },
        {
          description: 'accessible',
          name: 'accessible',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'Delay in ms, from onPressIn, before onLongPress is called.',
          name: 'delayLongPress',
          propType: 'PropTypes.number',
          propTypeIsrequired: false
        },
        {
          description: 'Delay in ms, from the start of the touch, before onPressIn is called.',
          name: 'delayPressIn',
          propType: 'PropTypes.number',
          propTypeIsrequired: false
        },
        {
          description: 'Delay in ms, from the release of the touch, before onPressOut is called.',
          name: 'delayPressOut',
          propType: 'PropTypes.number',
          propTypeIsrequired: false
        },
        {
          description: 'If true, disable all interactions for this component.',
          name: 'disabled',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'Invoked when the item loses focus.',
          name: 'onBlur',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Invoked when the item receives focus.',
          name: 'onFocus',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Invoked on mount and layout changes with\n\n{nativeEvent: {layout: {x, y, width, height}}}',
          name: 'onLayout',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'onLongPress',
          name: 'onLongPress',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Called when the touch is released, but not if cancelled (e.g. by a scroll that steals the responder lock).',
          name: 'onPress',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Called as soon as the touchable element is pressed and invoked even before onPress. This can be useful when making network requests.',
          name: 'onPressIn',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Called as soon as the touch is released even before onPress.',
          name: 'onPressOut',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'When the scroll view is disabled, this defines how far your touch may move off of the button, before deactivating the button. Once deactivated, try moving it back and you\'ll see that the button is once again reactivated! Move it back and forth several times while the scroll view is disabled. Ensure you pass in a constant to reduce memory allocations.\n\nobject: {top: number, left: number, bottom: number, right: number}',
          name: 'pressRetentionOffset',
          propType: 'PropTypes.object',
          propTypeIsrequired: false
        }
      ],
      description: 'Do not use unless you have a very good reason. All elements that respond to press should have a visual feedback when touched.\n\nTouchableWithoutFeedback supports only one child. If you wish to have several child components, wrap them in a View.',
      id: 'QzbzZhhnXD6MVsUqsz57',
      isDefault: true,
      provider: 'ReactNative',
      techno: 'React Native',
      title: 'TouchableWithoutFeedback'
    },
    {
      children: [],
      closeTag: true,
      componentImport: 'react-bootstrap/lib/Overlay',
      componentProps: [
        {
          description: 'Set the visibility of the Overlay\n\ndefault: false',
          name: 'show',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'Specify whether the overlay should trigger onHide when the user clicks outside the overlay\n\ndefault: false',
          name: 'rootClose',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'A callback invoked by the overlay when it wishes to be hidden. Required if rootClose is specified.',
          name: 'onHide',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Use animation. default: Fade',
          name: 'animation',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'Callback fired before the Overlay transitions in',
          name: 'onEnter',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Callback fired as the Overlay begins to transition in',
          name: 'onEntering',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'Callback fired after the Overlay finishes transitioning in',
          name: 'onEntered',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Callback fired right before the Overlay transitions out',
          name: 'onExit',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Callback fired as the Overlay begins to transition out',
          name: 'onExiting',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Callback fired after the Overlay finishes transitioning out',
          name: 'onExited',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Sets the direction of the Overlay.\n\ndefault: right',
          name: 'placement',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        }
      ],
      description: '#Custom overlays Overlay\nThe OverlayTrigger component is great for most use cases, but as a higher level abstraction it can lack the flexibility needed to build more nuanced or custom behaviors into your Overlay components. For these cases it can be helpful to forgo the trigger and use the Overlay component directly.\n\n\nclass Example extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.getTarget = this.getTarget.bind(this);\n    this.handleToggle = this.handleToggle.bind(this);\n\n    this.state = {\n      show: true\n    };\n  }\n\n  getTarget() {\n    return ReactDOM.findDOMNode(this.target);\n  }\n\n  handleToggle() {\n    this.setState({ show: !this.state.show });\n  }\n\n  render() {\n    const sharedProps = {\n      container: this,\n      target: this.getTarget,\n      show: this.state.show\n    };\n\n    return (\n      <div style={{ height: 100, paddingLeft: 150, position: \'relative\' }}>\n        <Button\n          ref={button => {\n            this.target = button;\n          }}\n          onClick={this.handleToggle}\n        >\n          Click me!\n        </Button>\n\n        <Overlay {...sharedProps} placement="left">\n          <Tooltip id="overload-left">Tooltip overload!</Tooltip>\n        </Overlay>\n        <Overlay {...sharedProps} placement="top">\n          <Tooltip id="overload-top">Tooltip overload!</Tooltip>\n        </Overlay>\n        <Overlay {...sharedProps} placement="right">\n          <Tooltip id="overload-right">Tooltip overload!</Tooltip>\n        </Overlay>\n        <Overlay {...sharedProps} placement="bottom">\n          <Tooltip id="overload-bottom">Tooltip overload!</Tooltip>\n        </Overlay>\n      </div>\n    );\n  }\n}\n\nrender(<Example />);\n\n#Use Overlay instead of Tooltip and Popover\nYou don\'t need to use the provided Tooltip or Popover components. Creating custom overlays is as easy as wrapping some markup in an Overlay component. Make sure to pass down the className and style props to the wrapped element to make positioning and transitions work.\n\nfunction CustomPopover({ className, style }) {\n  return (\n    <div\n      className={className}\n      style={{\n        ...style,\n        position: \'absolute\',\n        backgroundColor: \'#EEE\',\n        boxShadow: \'0 5px 10px rgba(0, 0, 0, 0.2)\',\n        border: \'1px solid #CCC\',\n        borderRadius: 3,\n        marginLeft: -5,\n        marginTop: 5,\n        padding: 10\n      }}\n    >\n      <strong>Holy guacamole!</strong> Check this info.\n    </div>\n  );\n}\n\nclass Example extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.handleToggle = this.handleToggle.bind(this);\n\n    this.state = {\n      show: true\n    };\n  }\n\n  handleToggle() {\n    this.setState({ show: !this.state.show });\n  }\n\n  render() {\n    return (\n      <div style={{ height: 100, position: \'relative\' }}>\n        <Button\n          ref={button => {\n            this.target = button;\n          }}\n          onClick={this.handleToggle}\n        >\n          I am an Overlay target\n        </Button>\n\n        <Overlay\n          show={this.state.show}\n          onHide={() => this.setState({ show: false })}\n          placement="right"\n          container={this}\n          target={() => ReactDOM.findDOMNode(this.target)}\n        >\n          <CustomPopover />\n        </Overlay>\n      </div>\n    );\n  }\n}\n\nrender(<Example />);',
      id: 'RKFCAcMYt9GJLluWaMGb',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'Overlay'
    },
    {
      children: [],
      closeTag: false,
      componentImport: 'react-bootstrap/lib/FormControlFeedback',
      componentProps: [
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'form-control-feedback\'',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        }
      ],
      description: 'FormControl.Feedback',
      id: 'RNTGYdkkm8osSehwVxKl',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'FormControl.Feedback'
    },
    {
      children: [],
      closeTag: true,
      componentImport: 'react-bootstrap/lib/Tabs',
      componentProps: [
        {
          description: 'Mark the Tab with a matching eventKey as active.',
          name: 'activeKey',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        },
        {
          description: 'Navigation style\n\none of: \'tabs\', \'pills\'',
          name: 'bsStyle',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: true
        },
        {
          description: 'Sets a default animation strategy. Use false to disable, true to enable the default <Fade> animation, or a react-transition-group v2 <Transition/> component.\n\ndefault: true\n\n',
          name: 'animation',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'requiredForA11y( PropTypes.oneOfType([PropTypes.string, PropTypes.number]) )',
          name: 'id',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: true
        },
        {
          description: 'Callback fired when a Tab is selected.\n\nfunction (\n  Any eventKey,\n  SyntheticEvent event?\n)',
          name: 'onSelect',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'Wait until the first "enter" transition to mount tabs (add them to the DOM)\n\ndefault: false',
          name: 'mountOnEnter',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'Unmount tabs (remove it from the DOM) when it is no longer visible\n\ndefault: false',
          name: 'unmountOnExit',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        }
      ],
      description: '#Togglable tabs Tabs, Tab, TabContainer, TabContent, TabPane\nAdd quick, dynamic tab functionality to transition through panes of local content.\n\n#Uncontrolled\nAllow the component to control its own state.\n\n<Tabs defaultActiveKey={2} id="uncontrolled-tab-example">\n  <Tab eventKey={1} title="Tab 1">\n    Tab 1 content\n  </Tab>\n  <Tab eventKey={2} title="Tab 2">\n    Tab 2 content\n  </Tab>\n  <Tab eventKey={3} title="Tab 3" disabled>\n    Tab 3 content\n  </Tab>\n</Tabs>;\n\n#Controlled\nPass down the active state on render via props.\n\nclass ControlledTabs extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.handleSelect = this.handleSelect.bind(this);\n\n    this.state = {\n      key: 1\n    };\n  }\n\n  handleSelect(key) {\n    alert(`selected ${key}`);\n    this.setState({ key });\n  }\n\n  render() {\n    return (\n      <Tabs\n        activeKey={this.state.key}\n        onSelect={this.handleSelect}\n        id="controlled-tab-example"\n      >\n        <Tab eventKey={1} title="Tab 1">\n          Tab 1 content\n        </Tab>\n        <Tab eventKey={2} title="Tab 2">\n          Tab 2 content\n        </Tab>\n        <Tab eventKey={3} title="Tab 3" disabled>\n          Tab 3 content\n        </Tab>\n      </Tabs>\n    );\n  }\n}\n\nrender(<ControlledTabs />);\n\n#No animation\nSet the animation prop to false\n\n<Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">\n  <Tab eventKey={1} title="Tab 1">\n    Tab 1 content\n  </Tab>\n  <Tab eventKey={2} title="Tab 2">\n    Tab 2 content\n  </Tab>\n  <Tab eventKey={3} title="Tab 3" disabled>\n    Tab 3 content\n  </Tab>\n</Tabs>;\n\n#Tabs with Dropdown\n\n<Tab.Container id="tabs-with-dropdown" defaultActiveKey="first">\n  <Row className="clearfix">\n    <Col sm={12}>\n      <Nav bsStyle="tabs">\n        <NavItem eventKey="first">Tab 1</NavItem>\n        <NavItem eventKey="second">Tab 2</NavItem>\n        <NavDropdown eventKey="3" title="Dropdown" id="nav-dropdown-within-tab">\n          <MenuItem eventKey="3.1">Action</MenuItem>\n          <MenuItem eventKey="3.2">Another action</MenuItem>\n          <MenuItem eventKey="3.3">Something else here</MenuItem>\n          <MenuItem divider />\n          <MenuItem eventKey="3.4">Separated link</MenuItem>\n        </NavDropdown>\n      </Nav>\n    </Col>\n    <Col sm={12}>\n      <Tab.Content animation>\n        <Tab.Pane eventKey="first">Tab 1 content</Tab.Pane>\n        <Tab.Pane eventKey="second">Tab 2 content</Tab.Pane>\n        <Tab.Pane eventKey="3.1">Tab 3.1 content</Tab.Pane>\n        <Tab.Pane eventKey="3.2">Tab 3.2 content</Tab.Pane>\n        <Tab.Pane eventKey="3.3">Tab 3.3 content</Tab.Pane>\n        <Tab.Pane eventKey="3.4">Tab 3.4 content</Tab.Pane>\n      </Tab.Content>\n    </Col>\n  </Row>\n</Tab.Container>;\n\n#Custom Tab Layout\nFor more complex layouts the flexible TabContainer, TabContent, andTabPane components along with any style of Nav allow you to quickly piece together your own Tabs component with additional markup needed.\n\nJust create a set of NavItems each with an eventKey corresponding to the eventKey of a TabPane. Wrap the whole thing in a TabContainer and you have fully functioning custom tabs component. Check out the below example making use of the grid system and pills.\n\n<Tab.Container id="left-tabs-example" defaultActiveKey="first">\n  <Row className="clearfix">\n    <Col sm={4}>\n      <Nav bsStyle="pills" stacked>\n        <NavItem eventKey="first">Tab 1</NavItem>\n        <NavItem eventKey="second">Tab 2</NavItem>\n      </Nav>\n    </Col>\n    <Col sm={8}>\n      <Tab.Content animation>\n        <Tab.Pane eventKey="first">Tab 1 content</Tab.Pane>\n        <Tab.Pane eventKey="second">Tab 2 content</Tab.Pane>\n      </Tab.Content>\n    </Col>\n  </Row>\n</Tab.Container>;',
      id: 'RqM89P3LXDoEh09oR4oa',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'Tabs'
    },
    {
      children: [],
      closeTag: false,
      componentImport: '-',
      componentProps: [
        {
          description: 'When true, the scroll view bounces vertically when it reaches the end even if the content is smaller than the scroll view itself. The default value is false when horizontal={true} and true otherwise.',
          name: 'alwaysBounceVertical',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'These styles will be applied to the scroll view content container which wraps all of the child views. Example:\n\nreturn (\n  <ScrollView contentContainerStyle={styles.contentContainer}>\n  </ScrollView>\n);\n...\nconst styles = StyleSheet.create({\n  contentContainer: {\n    paddingVertical: 20\n  }\n});\n\nType: StyleSheetPropType(View Style props)',
          name: 'contentContainerStyle',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Determines whether the keyboard gets dismissed in response to a drag.\n\nCross platform\n\n\'none\' (the default), drags do not dismiss the keyboard.\n\'on-drag\', the keyboard is dismissed when a drag begins.\niOS Only\n\n\'interactive\', the keyboard is dismissed interactively with the drag and moves in synchrony with the touch; dragging upwards cancels the dismissal. On android this is not supported and it will have the same behavior as \'none\'.\n\nType: enum(\'none\', \'on-drag\', \'interactive\')',
          name: 'keyboardDismissMode',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'Determines when the keyboard should stay visible after a tap.\n\n\'never\' (the default), tapping outside of the focused text input when the keyboard is up dismisses the keyboard. When this happens, children won\'t receive the tap.\n\'always\', the keyboard will not dismiss automatically, and the scroll view will not catch taps, but children of the scroll view can catch taps.\n\'handled\', the keyboard will not dismiss automatically when the tap was handled by a children, (or captured by an ancestor).\nfalse, deprecated, use \'never\' instead\ntrue, deprecated, use \'always\' instead\n\nType: enum(\'always\', \'never\', \'handled\', false, true)',
          name: 'keyboardShouldPersistTaps',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'Called when scrollable content view of the ScrollView changes.\n\nHandler function is passed the content width and content height as parameters: (contentWidth, contentHeight)\n\nIt\'s implemented using onLayout handler attached to the content container which this ScrollView renders.',
          name: 'onContentSizeChange',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Called when the momentum scroll starts (scroll which occurs as the ScrollView glides to a stop).',
          name: 'onMomentumScrollBegin',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Called when the momentum scroll ends (scroll which occurs as the ScrollView glides to a stop).',
          name: 'onMomentumScrollEnd',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Fires at most once per frame during scrolling. The frequency of the events can be controlled using the scrollEventThrottle prop.',
          name: 'onScroll',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Called when the user begins to drag the scroll view.',
          name: 'onScrollBeginDrag',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Called when the user stops dragging the scroll view and it either stops or begins to glide.',
          name: 'onScrollEndDrag',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'When true, the scroll view stops on multiples of the scroll view\'s size when scrolling. This can be used for horizontal pagination. The default value is false.\n\nNote: Vertical pagination is not supported on Android.',
          name: 'pagingEnabled',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'A RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView. Only works for vertical ScrollViews (horizontal prop must be false).',
          name: 'refreshControl',
          propType: 'PropTypes.element',
          propTypeIsrequired: false
        },
        {
          description: 'Experimental: When true, offscreen child views (whose overflow value is hidden) are removed from their native backing superview when offscreen. This can improve scrolling performance on long lists. The default value is true.',
          name: 'removeClippedSubviews',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'When false, the view cannot be scrolled via touch interaction. The default value is true.\n\nNote that the view can always be scrolled by calling scrollTo.\n',
          name: 'scrollEnabled',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'When true, shows a horizontal scroll indicator. The default value is true.',
          name: 'showsHorizontalScrollIndicator',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'When true, shows a vertical scroll indicator. The default value is true.',
          name: 'showsVerticalScrollIndicator',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'An array of child indices determining which children get docked to the top of the screen when scrolling. For example, passing stickyHeaderIndices={[0]} will cause the first child to be fixed to the top of the scroll view. This property is not supported in conjunction with horizontal={true}',
          name: 'stickyHeaderIndices',
          propType: 'PropTypes.array',
          propTypeIsrequired: false
        },
        {
          description: 'Sometimes a scrollview takes up more space than its content fills. When this is the case, this prop will fill the rest of the scrollview with a color to avoid setting a background and creating unnecessary overdraw. This is an advanced optimization that is not needed in the general case.',
          name: 'endFillColor',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Used to override default value of overScroll mode.\n\nPossible values:\n\n\'auto\' - Default value, allow a user to over-scroll this view only if the content is large enough to meaningfully scroll.\n\'always\' - Always allow a user to over-scroll this view.\n\'never\' - Never allow a user to over-scroll this view.\n\n\nType: enum(\'auto\', \'always\', \'never\')',
          name: 'overScrollMode',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'Tag used to log scroll performance on this scroll view. Will force momentum events to be turned on (see sendMomentumEvents). This doesn\'t do anything out of the box and you need to implement a custom native FpsListener for it to be useful.',
          name: 'scrollPerfTag',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'When true, the scroll view bounces horizontally when it reaches the end even if the content is smaller than the scroll view itself. The default value is true when horizontal={true} and false otherwise.',
          name: 'alwaysBounceHorizontal',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'When true, the scroll view\'s children are arranged horizontally in a row instead of vertically in a column. The default value is false.',
          name: 'horizontal',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'Controls whether iOS should automatically adjust the content inset for scroll views that are placed behind a navigation bar or tab bar/ toolbar. The default value is true.',
          name: 'automaticallyAdjustContentInsets',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'When true, the scroll view bounces when it reaches the end of the content if the content is larger then the scroll view along the axis of the scroll direction. When false, it disables all bouncing even if the alwaysBounce* props are true. The default value is true.',
          name: 'bounces',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'When true, gestures can drive zoom past min/max and the zoom will animate to the min/max value at gesture end, otherwise the zoom will not exceed the limits.',
          name: 'bouncesZoom',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'When false, once tracking starts, won\'t try to drag if the touch moves. The default value is true.',
          name: 'canCancelContentTouches',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'When true, the scroll view automatically centers the content when the content is smaller than the scroll view bounds; when the content is larger than the scroll view, this property has no effect. The default value is false.',
          name: 'centerContent',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'The amount by which the scroll view content is inset from the edges of the scroll view. Defaults to {top: 0, left: 0, bottom: 0, right: 0}.\n\nType: object: {top: number, left: number, bottom: number, right: number}',
          name: 'contentInset',
          propType: 'PropTypes.object',
          propTypeIsrequired: false
        },
        {
          description: 'This property specifies how the safe area insets are used to modify the content area of the scroll view. The default value of this property is "never". Available on iOS 11 and later.\n\nType: enum(\'automatic\', \'scrollableAxes\', \'never\', \'always\')',
          name: 'contentInsetAdjustmentBehavior',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'Used to manually set the starting scroll offset. The default value is {x: 0, y: 0}.',
          name: 'contentOffset',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'A floating-point number that determines how quickly the scroll view decelerates after the user lifts their finger. You may also use string shortcuts "normal" and "fast" which match the underlying iOS settings for UIScrollViewDecelerationRateNormal and UIScrollViewDecelerationRateFast respectively.\n\n\'normal\': 0.998 (the default)\n\'fast\': 0.99\n\nType: enum(\'fast\', \'normal\'), ,number',
          name: 'decelerationRate',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'When true, the ScrollView will try to lock to only vertical or horizontal scrolling while dragging. The default value is false.',
          name: 'directionalLockEnabled',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'The style of the scroll indicators.\n\n\'default\' (the default), same as black.\n\'black\', scroll indicator is black. This style is good against a light background.\n\'white\', scroll indicator is white. This style is good against a dark background.\n\nType: enum(\'default\', \'black\', \'white\')',
          name: 'indicatorStyle',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'The maximum allowed zoom scale. The default value is 1.0.',
          name: 'maximumZoomScale',
          propType: 'PropTypes.number',
          propTypeIsrequired: false
        },
        {
          description: 'The minimum allowed zoom scale. The default value is 1.0.',
          name: 'minimumZoomScale',
          propType: 'PropTypes.number',
          propTypeIsrequired: false
        },
        {
          description: 'When true, ScrollView allows use of pinch gestures to zoom in and out. The default value is true.',
          name: 'pinchGestureEnabled',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'This controls how often the scroll event will be fired while scrolling (as a time interval in ms). A lower number yields better accuracy for code that is tracking the scroll position, but can lead to scroll performance problems due to the volume of information being send over the bridge. You will not notice a difference between values set between 1-16 as the JS run loop is synced to the screen refresh rate. If you do not need precise scroll position tracking, set this value higher to limit the information being sent across the bridge. The default value is zero, which results in the scroll event being sent only once each time the view is scrolled.',
          name: 'scrollEventThrottle',
          propType: 'PropTypes.number',
          propTypeIsrequired: false
        },
        {
          description: 'The amount by which the scroll view indicators are inset from the edges of the scroll view. This should normally be set to the same value as the contentInset. Defaults to {0, 0, 0, 0}.\n\nType: object: {top: number, left: number, bottom: number, right: number}',
          name: 'scrollIndicatorInsets',
          propType: 'PropTypes.object',
          propTypeIsrequired: false
        },
        {
          description: 'When true, the scroll view scrolls to top when the status bar is tapped. The default value is true.',
          name: 'scrollsToTop',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'When snapToInterval is set, snapToAlignment will define the relationship of the snapping to the scroll view.\n\n\'start\' (the default) will align the snap at the left (horizontal) or top (vertical)\n\'center\' will align the snap in the center\n\'end\' will align the snap at the right (horizontal) or bottom (vertical)\n\nType: enum(\'start\', \'center\', \'end\')',
          name: 'snapToAlignment',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'When set, causes the scroll view to stop at multiples of the value of snapToInterval. This can be used for paginating through children that have lengths smaller than the scroll view. Typically used in combination with snapToAlignment and decelerationRate="fast". Overrides less configurable pagingEnabled prop.\n\nNote: Vertical snapToInterval is not supported on Android.',
          name: 'snapToInterval',
          propType: 'PropTypes.number',
          propTypeIsrequired: false
        },
        {
          description: 'The current scale of the scroll view content. The default value is 1.0.',
          name: 'zoomScale',
          propType: 'PropTypes.number',
          propTypeIsrequired: false
        },
        {
          description: 'Enables nested scrolling for Android API level 21+. Nested scrolling is supported by default on iOS.',
          name: 'nestedScrollEnabled',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        }
      ],
      description: 'Component that wraps platform ScrollView while providing integration with touch locking "responder" system.\n\nKeep in mind that ScrollViews must have a bounded height in order to work, since they contain unbounded-height children into a bounded container (via a scroll interaction). In order to bound the height of a ScrollView, either set the height of the view directly (discouraged) or make sure all parent views have bounded height. Forgetting to transfer {flex: 1} down the view stack can lead to errors here, which the element inspector makes easy to debug.\n\nDoesn\'t yet support other contained responders from blocking this scroll view from becoming the responder.\n\n<ScrollView> vs <FlatList> - which one to use?\n\nScrollView simply renders all its react child components at once. That makes it very easy to understand and use.\n\nOn the other hand, this has a performance downside. Imagine you have a very long list of items you want to display, maybe several screens worth of content. Creating JS components and native views for everything all at once, much of which may not even be shown, will contribute to slow rendering and increased memory usage.\n\nThis is where FlatList comes into play. FlatList renders items lazily, just when they are about to appear, and removes items that scroll way off screen to save memory and processing time.\n\nFlatList is also handy if you want to render separators between your items, multiple columns, infinite scroll loading, or any number of other features it supports out of the box.',
      id: 'Sa5gnvuwj44k5pt9Tglp',
      isDefault: true,
      provider: 'ReactNative',
      techno: 'React Native',
      title: 'ScrollView'
    },
    {
      children: [],
      closeTag: false,
      componentImport: 'react-bootstrap/lib/ProgressBar',
      componentProps: [
        {
          description: 'min\n\ndefault: 0',
          name: 'min',
          propType: 'PropTypes.number',
          propTypeIsrequired: true
        },
        {
          description: 'now',
          name: 'now',
          propType: 'PropTypes.number',
          propTypeIsrequired: true
        },
        {
          description: 'max\n\ndefault: 100',
          name: 'max',
          propType: 'PropTypes.number',
          propTypeIsrequired: true
        },
        {
          description: 'label',
          name: 'label',
          propType: 'PropTypes.node',
          propTypeIsrequired: true
        },
        {
          description: 'default: false',
          name: 'srOnly',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'default: false',
          name: 'striped',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'default: false',
          name: 'active',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'type: onlyProgressBar',
          name: 'children',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        },
        {
          description: 'Component visual or contextual style variants.\n\none of: "success", "warning", "danger", "info"',
          name: 'bsStyle',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: true
        },
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'progress-bar\'',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        }
      ],
      description: '#Progress bars ProgressBar\nProvide up-to-date feedback on the progress of a workflow or action with simple yet flexible progress bars.\n\n#Basic example\nDefault progress bar.\n\n<ProgressBar now={60} />;\n\n#With label\nAdd a label prop to show a visible percentage. For low percentages, consider adding a min-width to ensure the label\'s text is fully visible.\n\nconst now = 60;\n\nconst progressInstance = <ProgressBar now={now} label={`${now}%`} />;\n\nrender(progressInstance);\n\n#Screenreader only label\nAdd a srOnly prop to hide the label visually.\n\nconst now = 60;\n\nconst progressInstance = <ProgressBar now={now} label={`${now}%`} srOnly />;\n\nrender(progressInstance);\n\n#Contextual alternatives\nProgress bars use some of the same button and alert classes for consistent styles.\n\n<div>\n  <ProgressBar bsStyle="success" now={40} />\n  <ProgressBar bsStyle="info" now={20} />\n  <ProgressBar bsStyle="warning" now={60} />\n  <ProgressBar bsStyle="danger" now={80} />\n</div>;\n\n#Striped\nUses a gradient to create a striped effect. Not available in IE8.\n\n<div>\n  <ProgressBar striped bsStyle="success" now={40} />\n  <ProgressBar striped bsStyle="info" now={20} />\n  <ProgressBar striped bsStyle="warning" now={60} />\n  <ProgressBar striped bsStyle="danger" now={80} />\n</div>;\n\n#Animated\nAdd active prop to animate the stripes right to left. Not available in IE9 and below.\n\n<ProgressBar active now={45} />;\n\n#Stacked\nNest <ProgressBar />s to stack them.\n\n<ProgressBar>\n  <ProgressBar striped bsStyle="success" now={35} key={1} />\n  <ProgressBar bsStyle="warning" now={20} key={2} />\n  <ProgressBar active bsStyle="danger" now={10} key={3} />\n</ProgressBar>;\n\n',
      id: 'TwRratbcLFFMiBnWdkXR',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'ProgressBar'
    },
    {
      children: [],
      closeTag: false,
      componentImport: 'react-bootstrap/lib/Alert',
      componentProps: [
        {
          description: 'Closeable alerts: just pass in a onDismiss function.',
          name: 'onDismiss',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Default: \'Close alert\'',
          name: 'closeLabel',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Component visual or contextual style variants. Deafult: \'info\'',
          name: 'bsStyle',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\nDefault: \'alert\'',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        }
      ],
      description: 'class AlertDismissable extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.handleDismiss = this.handleDismiss.bind(this);\n    this.handleShow = this.handleShow.bind(this);\n\n    this.state = {\n      show: true\n    };\n  }\n\n  handleDismiss() {\n    this.setState({ show: false });\n  }\n\n  handleShow() {\n    this.setState({ show: true });\n  }\n\n  render() {\n    if (this.state.show) {\n      return (\n        <Alert bsStyle="danger" onDismiss={this.handleDismiss}>\n          <h4>Oh snap! You got an error!</h4>\n          <p>\n            Change this and that and try again. Duis mollis, est non commodo\n            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.\n            Cras mattis consectetur purus sit amet fermentum.\n          </p>\n          <p>\n            <Button bsStyle="danger">Take this action</Button>\n            <span> or </span>\n            <Button onClick={this.handleDismiss}>Hide Alert</Button>\n          </p>\n        </Alert>\n      );\n    }\n\n    return <Button onClick={this.handleShow}>Show Alert</Button>;\n  }\n}\n\nrender(<AlertDismissable />);',
      id: 'UiDOCcR8GgBTsegJY1tj',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'Alert'
    },
    {
      children: [],
      closeTag: false,
      componentImport: '-',
      componentProps: [
        {
          description: 'The style of the tab bar. Supported values are \'default\', \'black\'. Use \'black\' instead of setting barTintColor to black. This produces a tab bar with the native iOS style with higher translucency.\n\nenum(\'default\', \'black\')',
          name: 'barStyle',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'Background color of the tab bar',
          name: 'barTintColor',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Specifies tab bar item positioning. Available values are:\n\nfill - distributes items across the entire width of the tab bar\ncenter - centers item in the available tab bar space\nauto (default) - distributes items dynamically according to the user interface idiom. In a horizontally compact environment (e.g. iPhone 5) this value defaults to fill, in a horizontally regular one (e.g. iPad) it defaults to center.\n\nenum(\'fill\', \'center\', \'auto\')',
          name: 'itemPositioning',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'style',
          name: 'style',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Color of the currently selected tab icon',
          name: 'tintColor',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'A Boolean value that indicates whether the tab bar is translucent',
          name: 'translucent',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'Color of unselected tab icons. Available since iOS 10.',
          name: 'unselectedItemTintColor',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Color of text on unselected tabs',
          name: 'unselectedTintColor',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        }
      ],
      description: 'TabBarIOS',
      id: 'VQhJW0TkVxGjFKx5BBuZ',
      isDefault: true,
      provider: 'ReactNative',
      techno: 'React Native',
      title: 'TabBarIOS'
    },
    {
      children: [],
      closeTag: false,
      componentImport: 'react-bootstrap/lib/FormControl',
      componentProps: [
        {
          description: 'You can use a custom element type for this component.\n\ndefault: \'input\'',
          name: 'componentClass',
          propType: 'PropTypes.element',
          propTypeIsrequired: true
        },
        {
          description: 'Only relevant if componentClass is \'input\'.',
          name: 'type',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        },
        {
          description: 'Uses controlId from <FormGroup> if not explicitly specified.',
          name: 'id',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        },
        {
          description: 'Attaches a ref to the <input> element. Only functions can be used here.\n\n<FormControl inputRef={ref => { this.input = ref; }} />',
          name: 'inputRef',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'Component size variations.\n\none of: "sm", "small", "lg", "large"',
          name: 'bsSize',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: true
        },
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'form-control\'',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        }
      ],
      description: 'FormControl',
      id: 'WiJxosR2Zj1CrxwrAl21',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'FormControl'
    },
    {
      children: [],
      closeTag: false,
      componentImport: 'react-bootstrap/lib/DropdownButton',
      componentProps: [
        {
          description: 'Component visual or contextual style variants.',
          name: 'bsStyle',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        },
        {
          description: 'Component size variations.',
          name: 'bsSize',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        },
        {
          description: 'title',
          name: 'title',
          propType: 'PropTypes.node',
          propTypeIsrequired: true
        },
        {
          description: 'noCaret',
          name: 'noCaret',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        }
      ],
      description: 'DropdownButton',
      id: 'WwzmVnngTfupuvp5A0ke',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'DropdownButton'
    },
    {
      children: [],
      closeTag: false,
      componentImport: 'react-bootstrap/lib/ToggleButton',
      componentProps: [
        {
          description: 'The <input> type',
          name: 'type',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        },
        {
          description: 'The HTML input name, used to group like checkboxes or radio buttons together semantically',
          name: 'name',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        },
        {
          description: 'The checked state of the input, managed by ` automatically',
          name: 'checked',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'The disabled state of both the label and input',
          name: 'disabled',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'onChange',
          name: 'onChange',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'The value of the input, and unique identifier in the ToggleButtonGroup',
          name: 'value',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        }
      ],
      description: 'ToggleButton',
      id: 'XR8wRXtjvEMBCwZoQoj9',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'ToggleButton'
    },
    {
      children: [],
      closeTag: true,
      componentImport: 'react-bootstrap/lib/Modal',
      componentProps: [
        {
          description: 'Include a backdrop component. Specify \'static\' for a backdrop that doesn\'t trigger an "onHide" when clicked.\n\none of: \'static\', true, false',
          name: 'backdrop',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'Add an optional extra class name to .modal-backdrop It could end up looking like class="modal-backdrop foo-modal-backdrop in".',
          name: 'backdropClassName',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Close the modal when escape key is pressed',
          name: 'keyboard',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'Open and close the Modal with a slide and fade animation.\n\ndefault: true',
          name: 'animation',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'A Component type that provides the modal content Markup. This is a useful prop when you want to use your own styles and markup to create a custom modal component.\n\ndefault: ModalDialog',
          name: 'dialogComponentClass',
          propType: 'PropTypes.element',
          propTypeIsrequired: false
        },
        {
          description: 'When true The modal will automatically shift focus to itself when it opens, and replace it to the last focused element when it closes. Generally this should never be set to false as it makes the Modal less accessible to assistive technologies, like screen-readers.',
          name: 'autoFocus',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'When true The modal will prevent focus from leaving the Modal while open. Consider leaving the default value here, as it is necessary to make the Modal work well with assistive technologies, such as screen readers.',
          name: 'enforceFocus',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'When true The modal will restore focus to previously focused element once modal is hidden',
          name: 'restoreFocus',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'When true The modal will show itself.',
          name: 'show',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: '\t\nA callback fired when the header closeButton or non-static backdrop is clicked. Required if either are specified.',
          name: 'onHide',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'Callback fired before the Modal transitions in',
          name: 'onEnter',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Callback fired as the Modal begins to transition in',
          name: 'onEntering',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Callback fired after the Modal finishes transitioning in',
          name: 'onEntered',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Callback fired right before the Modal transitions out',
          name: 'onExit',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Callback fired as the Modal begins to transition out',
          name: 'onExiting',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Callback fired after the Modal finishes transitioning out',
          name: 'onExited',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Component size variations.\n\none of: "lg", "large", "sm", "small"',
          name: 'bsSize',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'modal\'',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        }
      ],
      description: '#Modals Modal\n#Static Markup\nA modal dialog component\n\n<div className="static-modal">\n  <Modal.Dialog>\n    <Modal.Header>\n      <Modal.Title>Modal title</Modal.Title>\n    </Modal.Header>\n\n    <Modal.Body>One fine body...</Modal.Body>\n\n    <Modal.Footer>\n      <Button>Close</Button>\n      <Button bsStyle="primary">Save changes</Button>\n    </Modal.Footer>\n  </Modal.Dialog>\n</div>;\n\n#Basic example\nA modal with header, body, and set of actions in the footer. Use <Modal/> in combination with other components to show or hide your Modal. The <Modal/> Component comes with a few convenient "sub components": <Modal.Header/>, <Modal.Title/>, <Modal.Body/>, and <Modal.Footer/>, which you can use to build the Modal content.\n\nclass Example extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.handleShow = this.handleShow.bind(this);\n    this.handleClose = this.handleClose.bind(this);\n\n    this.state = {\n      show: false\n    };\n  }\n\n  handleClose() {\n    this.setState({ show: false });\n  }\n\n  handleShow() {\n    this.setState({ show: true });\n  }\n\n  render() {\n    const popover = (\n      <Popover id="modal-popover" title="popover">\n        very popover. such engagement\n      </Popover>\n    );\n    const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;\n\n    return (\n      <div>\n        <p>Click to get the full Modal experience!</p>\n\n        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>\n          Launch demo modal\n        </Button>\n\n        <Modal show={this.state.show} onHide={this.handleClose}>\n          <Modal.Header closeButton>\n            <Modal.Title>Modal heading</Modal.Title>\n          </Modal.Header>\n          <Modal.Body>\n            <h4>Text in a modal</h4>\n            <p>\n              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.\n            </p>\n\n            <h4>Popover in a modal</h4>\n            <p>\n              there is a{\' \'}\n              <OverlayTrigger overlay={popover}>\n                <a href="#popover">popover</a>\n              </OverlayTrigger>{\' \'}\n              here\n            </p>\n\n            <h4>Tooltips in a modal</h4>\n            <p>\n              there is a{\' \'}\n              <OverlayTrigger overlay={tooltip}>\n                <a href="#tooltip">tooltip</a>\n              </OverlayTrigger>{\' \'}\n              here\n            </p>\n\n            <hr />\n\n            <h4>Overflowing text to show scroll behavior</h4>\n            <p>\n              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,\n              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta\n              ac consectetur ac, vestibulum at eros.\n            </p>\n            <p>\n              Praesent commodo cursus magna, vel scelerisque nisl consectetur\n              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor\n              auctor.\n            </p>\n            <p>\n              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo\n              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio\n              dui. Donec ullamcorper nulla non metus auctor fringilla.\n            </p>\n            <p>\n              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,\n              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta\n              ac consectetur ac, vestibulum at eros.\n            </p>\n            <p>\n              Praesent commodo cursus magna, vel scelerisque nisl consectetur\n              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor\n              auctor.\n            </p>\n            <p>\n              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo\n              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio\n              dui. Donec ullamcorper nulla non metus auctor fringilla.\n            </p>\n            <p>\n              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,\n              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta\n              ac consectetur ac, vestibulum at eros.\n            </p>\n            <p>\n              Praesent commodo cursus magna, vel scelerisque nisl consectetur\n              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor\n              auctor.\n            </p>\n            <p>\n              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo\n              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio\n              dui. Donec ullamcorper nulla non metus auctor fringilla.\n            </p>\n          </Modal.Body>\n          <Modal.Footer>\n            <Button onClick={this.handleClose}>Close</Button>\n          </Modal.Footer>\n        </Modal>\n      </div>\n    );\n  }\n}\n\nrender(<Example />);\n\nAdditional Import Options\nThe Modal Header, Title, Body, and Footer components are available as static properties the <Modal/> component, but you can also, import them directly from the /lib directory like: require("react-bootstrap/lib/ModalHeader").\n\n#Contained Modal\nYou will need to add the following css to your project and ensure that your container has the modal-container class.\n\n.modal-container {\n  position: relative;\n}\n.modal-container .modal, .modal-container .modal-backdrop {\n  position: absolute;\n}\n\n/**\n * You will want to include this bit of css\n *\n * .modal-container {\n *   position: relative;\n * }\n * .modal-container .modal, .modal-container .modal-backdrop {\n *   position: absolute;\n * }\n */\n\nclass Trigger extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.handleHide = this.handleHide.bind(this);\n\n    this.state = {\n      show: false\n    };\n  }\n\n  handleHide() {\n    this.setState({ show: false });\n  }\n  render() {\n    return (\n      <div className="modal-container" style={{ height: 200 }}>\n        <Button\n          bsStyle="primary"\n          bsSize="large"\n          onClick={() => this.setState({ show: true })}\n        >\n          Launch contained modal\n        </Button>\n\n        <Modal\n          show={this.state.show}\n          onHide={this.handleHide}\n          container={this}\n          aria-labelledby="contained-modal-title"\n        >\n          <Modal.Header closeButton>\n            <Modal.Title id="contained-modal-title">\n              Contained Modal\n            </Modal.Title>\n          </Modal.Header>\n          <Modal.Body>\n            Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id\n            ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.\n          </Modal.Body>\n          <Modal.Footer>\n            <Button onClick={this.handleHide}>Close</Button>\n          </Modal.Footer>\n        </Modal>\n      </div>\n    );\n  }\n}\n\nrender(<Trigger />);\n\n#Sizing modals using standard Bootstrap props\nYou can specify a bootstrap large or small modal by using the "bsSize" prop.\n\nclass MySmallModal extends React.Component {\n  render() {\n    return (\n      <Modal\n        {...this.props}\n        bsSize="small"\n        aria-labelledby="contained-modal-title-sm"\n      >\n        <Modal.Header closeButton>\n          <Modal.Title id="contained-modal-title-sm">Modal heading</Modal.Title>\n        </Modal.Header>\n        <Modal.Body>\n          <h4>Wrapped Text</h4>\n          <p>\n            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,\n            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta\n            ac consectetur ac, vestibulum at eros.\n          </p>\n          <p>\n            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\n            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor\n            auctor.\n          </p>\n          <p>\n            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo\n            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio\n            dui. Donec ullamcorper nulla non metus auctor fringilla.\n          </p>\n          <p>\n            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,\n            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta\n            ac consectetur ac, vestibulum at eros.\n          </p>\n          <p>\n            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\n            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor\n            auctor.\n          </p>\n          <p>\n            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo\n            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio\n            dui. Donec ullamcorper nulla non metus auctor fringilla.\n          </p>\n          <p>\n            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,\n            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta\n            ac consectetur ac, vestibulum at eros.\n          </p>\n          <p>\n            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\n            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor\n            auctor.\n          </p>\n          <p>\n            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo\n            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio\n            dui. Donec ullamcorper nulla non metus auctor fringilla.\n          </p>\n        </Modal.Body>\n        <Modal.Footer>\n          <Button onClick={this.props.onHide}>Close</Button>\n        </Modal.Footer>\n      </Modal>\n    );\n  }\n}\n\nclass MyLargeModal extends React.Component {\n  render() {\n    return (\n      <Modal\n        {...this.props}\n        bsSize="large"\n        aria-labelledby="contained-modal-title-lg"\n      >\n        <Modal.Header closeButton>\n          <Modal.Title id="contained-modal-title-lg">Modal heading</Modal.Title>\n        </Modal.Header>\n        <Modal.Body>\n          <h4>Wrapped Text</h4>\n          <p>\n            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,\n            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta\n            ac consectetur ac, vestibulum at eros.\n          </p>\n          <p>\n            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\n            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor\n            auctor.\n          </p>\n          <p>\n            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo\n            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio\n            dui. Donec ullamcorper nulla non metus auctor fringilla.\n          </p>\n          <p>\n            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,\n            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta\n            ac consectetur ac, vestibulum at eros.\n          </p>\n          <p>\n            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\n            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor\n            auctor.\n          </p>\n          <p>\n            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo\n            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio\n            dui. Donec ullamcorper nulla non metus auctor fringilla.\n          </p>\n          <p>\n            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,\n            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta\n            ac consectetur ac, vestibulum at eros.\n          </p>\n          <p>\n            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\n            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor\n            auctor.\n          </p>\n          <p>\n            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo\n            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio\n            dui. Donec ullamcorper nulla non metus auctor fringilla.\n          </p>\n        </Modal.Body>\n        <Modal.Footer>\n          <Button onClick={this.props.onHide}>Close</Button>\n        </Modal.Footer>\n      </Modal>\n    );\n  }\n}\n\nclass App extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.state = {\n      smShow: false,\n      lgShow: false\n    };\n  }\n  render() {\n    let smClose = () => this.setState({ smShow: false });\n    let lgClose = () => this.setState({ lgShow: false });\n\n    return (\n      <ButtonToolbar>\n        <Button\n          bsStyle="primary"\n          onClick={() => this.setState({ smShow: true })}\n        >\n          Launch small demo modal\n        </Button>\n        <Button\n          bsStyle="primary"\n          onClick={() => this.setState({ lgShow: true })}\n        >\n          Launch large demo modal\n        </Button>\n\n        <MySmallModal show={this.state.smShow} onHide={smClose} />\n        <MyLargeModal show={this.state.lgShow} onHide={lgClose} />\n      </ButtonToolbar>\n    );\n  }\n}\n\nrender(<App />);\n\n#Sizing modals using custom CSS\nYou can apply custom css to the modal dialog div using the "dialogClassName" prop. Example is using a custom css class with width set to 90%.\n\nclass Example extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.handleShow = this.handleShow.bind(this);\n    this.handleHide = this.handleHide.bind(this);\n\n    this.state = {\n      show: false\n    };\n  }\n\n  handleShow() {\n    this.setState({ show: true });\n  }\n\n  handleHide() {\n    this.setState({ show: false });\n  }\n\n  render() {\n    return (\n      <ButtonToolbar>\n        <Button bsStyle="primary" onClick={this.handleShow}>\n          Launch demo modal\n        </Button>\n\n        <Modal\n          {...this.props}\n          show={this.state.show}\n          onHide={this.handleHide}\n          dialogClassName="custom-modal"\n        >\n          <Modal.Header closeButton>\n            <Modal.Title id="contained-modal-title-lg">\n              Modal heading\n            </Modal.Title>\n          </Modal.Header>\n          <Modal.Body>\n            <h4>Wrapped Text</h4>\n            <p>\n              Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae\n              unde commodi aspernatur enim, consectetur. Cumque deleniti\n              temporibus ipsam atque a dolores quisquam quisquam adipisci\n              possimus laboriosam. Quibusdam facilis doloribus debitis! Sit\n              quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem!\n              Mollitia reiciendis porro quo magni incidunt dolore amet atque\n              facilis ipsum deleniti rem! Dolores debitis voluptatibus ipsum\n              dicta. Dolor quod amet ab sint esse distinctio tenetur. Veritatis\n              laudantium quibusdam quidem corporis architecto veritatis. Ex\n              facilis minima beatae sunt perspiciatis placeat. Quasi corporis\n              odio eaque voluptatibus ratione magnam nulla? Amet cum maiores\n              consequuntur totam dicta! Inventore adipisicing vel vero odio modi\n              doloremque? Vitae porro impedit ea minima laboriosam quisquam\n              neque. Perspiciatis omnis obcaecati consequatur sunt deleniti\n              similique facilis sequi. Ipsum harum vitae modi reiciendis\n              officiis. Quas laudantium laudantium modi corporis nihil provident\n              consectetur omnis, natus nulla distinctio illum corporis. Sit ex\n              earum odio ratione consequatur odit minus laborum? Eos? Sit ipsum\n              illum architecto aspernatur perspiciatis error fuga illum, tempora\n              harum earum, a dolores. Animi facilis inventore harum dolore\n              accusamus fuga provident molestiae eum! Odit dicta error dolorem\n              sunt reprehenderit. Sit similique iure quae obcaecati harum. Eum\n              saepe fugit magnam dicta aliquam? Sapiente possimus aliquam fugiat\n              officia culpa sint! Beatae voluptates voluptatem excepturi\n              molestiae alias in tenetur beatae placeat architecto. Sit possimus\n              rerum fugiat sapiente aspernatur. Necessitatibus tempora animi\n              dicta perspiciatis tempora a velit in! Doloribus perspiciatis\n              doloribus suscipit nam earum. Deleniti veritatis eaque totam\n              assumenda fuga sapiente! Id recusandae. Consectetur necessitatibus\n              eaque velit nobis aliquid? Fugit illum qui suscipit aspernatur\n              alias ipsum repudiandae! Quia omnis quisquam dignissimos a\n              mollitia. Suscipit aspernatur eum maiores repellendus ipsum\n              doloribus alias voluptatum consequatur. Consectetur quibusdam\n              veniam quas tenetur necessitatibus repudiandae? Rem optio vel\n              alias neque optio sapiente quidem similique reiciendis tempore.\n              Illum accusamus officia cum enim minima eligendi consectetur nemo\n              veritatis nam nisi! Adipisicing nobis perspiciatis dolorum\n              adipisci soluta architecto doloremque voluptatibus omnis debitis\n              quas repellendus. Consequuntur assumenda illum commodi mollitia\n              asperiores? Quis aspernatur consequatur modi veritatis aliquid at?\n              Atque vel iure quos. Amet provident voluptatem amet aliquam\n              deserunt sint, elit dolorem ipsa, voluptas? Quos esse facilis\n              neque nihil sequi non? Voluptates rem ab quae dicta culpa dolorum\n              sed atque molestias debitis omnis! Sit sint repellendus deleniti\n              officiis distinctio. Impedit vel quos harum doloribus corporis.\n              Laborum ullam nemo quaerat reiciendis recusandae minima dicta\n              molestias rerum. Voluptas et ut omnis est ipsum accusamus harum.\n              Amet exercitationem quasi velit inventore neque doloremque!\n              Consequatur neque dolorem vel impedit sunt voluptate. Amet quo\n              amet magni exercitationem libero recusandae possimus pariatur.\n              Cumque eum blanditiis vel vitae distinctio! Tempora! Consectetur\n              sit eligendi neque sunt soluta laudantium natus qui aperiam\n              quisquam consectetur consequatur sit sint a unde et. At voluptas\n              ut officiis esse totam quasi dolorem! Hic deserunt doloribus\n              repudiandae! Lorem quod ab nostrum asperiores aliquam ab id\n              consequatur, expedita? Tempora quaerat ex ea temporibus in tempore\n              voluptates cumque. Quidem nam dolor reiciendis qui dolor assumenda\n              ipsam veritatis quasi. Esse! Sit consectetur hic et sunt iste!\n              Accusantium atque elit voluptate asperiores corrupti temporibus\n              mollitia! Placeat soluta odio ad blanditiis nisi. Eius reiciendis\n              id quos dolorum eaque suscipit magni delectus maxime. Sit odit\n              provident vel magnam quod. Possimus eligendi non corrupti tenetur\n              culpa accusantium quod quis. Voluptatum quaerat animi dolore\n              maiores molestias voluptate? Necessitatibus illo omnis laborum hic\n              enim minima! Similique. Dolor voluptatum reprehenderit nihil\n              adipisci aperiam voluptatem soluta magnam accusamus iste incidunt\n              tempore consequatur illo illo odit. Asperiores nesciunt iusto nemo\n              animi ratione. Sunt odit similique doloribus temporibus\n              reiciendis! Ullam. Dolor dolores veniam animi sequi dolores\n              molestias voluptatem iure velit. Elit dolore quaerat incidunt enim\n              aut distinctio. Ratione molestiae laboriosam similique laboriosam\n              eum et nemo expedita. Consequuntur perspiciatis cumque dolorem.\n            </p>\n          </Modal.Body>\n          <Modal.Footer>\n            <Button onClick={this.handleHide}>Close</Button>\n          </Modal.Footer>\n        </Modal>\n      </ButtonToolbar>\n    );\n  }\n}\n\nrender(<Example />);\n\n#Multiple Modals\nNot supported\nReact-Bootstrap modals are not designed to support rendering multiple modals simultaneously. You will have to add react-overlays as a dependency and build your own modal component using its <ModalManager/> component, which supports multiple modals.\n\n',
      id: 'XnY6X0Of1vqpbt4pNF06',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'Modal'
    },
    {
      children: [],
      closeTag: false,
      componentImport: '-',
      componentProps: [
        {
          description: 'Does this view want to become responder on the start of a touch?\n\nView.props.onStartShouldSetResponder: (event) => [true | false], where event is a synthetic touch event as described above.',
          name: 'onStartShouldSetResponder',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not obvious from the accessibility label.',
          name: 'accessibilityHint',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Overrides the text that\'s read by the screen reader when the user interacts with the element. By default, the label is constructed by traversing all the children and accumulating all the Text nodes separated by space.',
          name: 'accessibilityLabel',
          propType: 'PropTypes.node',
          propTypeIsrequired: false
        },
        {
          description: 'This defines how far a touch event can start away from the view. Typical interface guidelines recommend touch targets that are at least 30 - 40 points/density-independent pixels.\n\nFor example, if a touchable view has a height of 20 the touchable height can be extended to 40 with hitSlop={{top: 10, bottom: 10, left: 0, right: 0}}\n\nThe touch area never extends past the parent view bounds and the Z-index of sibling views always takes precedence if a touch hits two overlapping views.\n\nType: object: {top: number, left: number, bottom: number, right: number}',
          name: 'hitSlop',
          propType: 'PropTypes.object',
          propTypeIsrequired: false
        },
        {
          description: 'Used to locate this view from native classes.\n\nThis disables the \'layout-only view removal\' optimization for this view!',
          name: 'nativeID',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'When accessible is true, the system will try to invoke this function when the user performs accessibility tap gesture.',
          name: 'onAccessibilityTap',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Invoked on mount and layout changes with:\n\n{nativeEvent: { layout: {x, y, width, height}}}\n\nThis event is fired immediately once the layout has been calculated, but the new layout may not yet be reflected on the screen at the time the event is received, especially if a layout animation is in progress.',
          name: 'onLayout',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'When accessible is true, the system will invoke this function when the user performs the magic tap gesture.',
          name: 'onMagicTap',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Does this view want to "claim" touch responsiveness? This is called for every touch move on the View when it is not the responder.\n\nView.props.onMoveShouldSetResponder: (event) => [true | false], where event is a synthetic touch event as described above.',
          name: 'onMoveShouldSetResponder',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'If a parent View wants to prevent a child View from becoming responder on a move, it should have this handler which returns true.\n\nView.props.onMoveShouldSetResponderCapture: (event) => [true | false], where event is a synthetic touch event as described above.',
          name: 'onMoveShouldSetResponderCapture',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'The View is now responding for touch events. This is the time to highlight and show the user what is happening.\n\nView.props.onResponderGrant: (event) => {}, where event is a synthetic touch event as described above.',
          name: 'onResponderGrant',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'The user is moving their finger.\n\nView.props.onResponderMove: (event) => {}, where event is a synthetic touch event as described above.',
          name: 'onResponderMove',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Another responder is already active and will not release it to that View asking to be the responder.\n\nView.props.onResponderReject: (event) => {}, where event is a synthetic touch event as described above.',
          name: 'onResponderReject',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Fired at the end of the touch.\n\nView.props.onResponderRelease: (event) => {}, where event is a synthetic touch event as described above.',
          name: 'onResponderRelease',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'The responder has been taken from the View. Might be taken by other views after a call to onResponderTerminationRequest, or might be taken by the OS without asking (e.g., happens with control center/ notification center on iOS)\n\nView.props.onResponderTerminate: (event) => {}, where event is a synthetic touch event as described above.',
          name: 'onResponderTerminate',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Some other View wants to become responder and is asking this View to release its responder. Returning true allows its release.\n\nView.props.onResponderTerminationRequest: (event) => {}, where event is a synthetic touch event as described above.',
          name: 'onResponderTerminationRequest',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'When true, indicates that the view is an accessibility element. By default, all the touchable elements are accessible.',
          name: 'accessible',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'If a parent View wants to prevent a child View from becoming responder on a touch start, it should have this handler which returns true.\n\nView.props.onStartShouldSetResponderCapture: (event) => [true | false], where event is a synthetic touch event as described above.',
          name: 'onStartShouldSetResponderCapture',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Controls whether the View can be the target of touch events.\n\n\'auto\': The View can be the target of touch events.\n\'none\': The View is never the target of touch events.\n\'box-none\': The View is never the target of touch events but it\'s subviews can be. It behaves like if the view had the following classes in CSS:\n.box-none {\n     pointer-events: none;\n}\n.box-none * {\n     pointer-events: all;\n}\n\'box-only\': The view can be the target of touch events but it\'s subviews cannot be. It behaves like if the view had the following classes in CSS:\n.box-only {\n     pointer-events: all;\n}\n.box-only * {\n     pointer-events: none;\n}\nSince pointerEvents does not affect layout/appearance, and we are already deviating from the spec by adding additional modes, we opt to not include pointerEvents on style. On some platforms, we would need to implement it as a className anyways. Using style or not is an implementation detail of the platform.\n\nType: enum(\'box-none\', \'none\', \'box-only\', \'auto\')',
          name: 'pointerEvents',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'This is a special performance property exposed by RCTView and is useful for scrolling content when there are many subviews, most of which are offscreen. For this property to be effective, it must be applied to a view that contains many subviews that extend outside its bound. The subviews must also have overflow: hidden, as should the containing view (or one of its superviews).',
          name: 'removeClippedSubviews',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'style',
          name: 'style',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Used to locate this view in end-to-end tests.\n\nThis disables the \'layout-only view removal\' optimization for this view!',
          name: 'testID',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: '> Note: accessibilityComponentTypewill soon be deprecated. When possible, use accessibilityRole and accessibilityStates instead.\n\nIndicates to accessibility services to treat UI component like a native one. Works for Android only.\n\nPossible values are one of:\n\n\'none\'\n\'button\'\n\'radiobutton_checked\'\n\'radiobutton_unchecked\'\n\n',
          name: 'accessibilityComponentType',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Indicates to accessibility services whether the user should be notified when this view changes. Works for Android API >= 19 only. Possible values:\n\n\'none\' - Accessibility services should not announce changes to this view.\n\'polite\'- Accessibility services should announce changes to this view.\n\'assertive\' - Accessibility services should interrupt ongoing speech to immediately announce changes to this view.\n\nType: enum(\'none\', \'polite\', \'assertive\')',
          name: 'accessibilityLiveRegion',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'Views that are only used to layout their children or otherwise don\'t draw anything may be automatically removed from the native hierarchy as an optimization. Set this property to false to disable this optimization and ensure that this View exists in the native view hierarchy.',
          name: 'collapsable',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'Controls how view is important for accessibility which is if it fires accessibility events and if it is reported to accessibility services that query the screen. Works for Android only.\n\nPossible values:\n\n\'auto\' - The system determines whether the view is important for accessibility - default (recommended).\n\'yes\' - The view is important for accessibility.\n\'no\' - The view is not important for accessibility.\n\'no-hide-descendants\' - The view is not important for accessibility, nor are any of its descendant views.\n\nType: enum(\'auto\', \'yes\', \'no\', \'no-hide-descendants\')',
          name: 'importantForAccessibility',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'Whether this View needs to rendered offscreen and composited with an alpha in order to preserve 100% correct colors and blending behavior. The default (false) falls back to drawing the component and its children with an alpha applied to the paint used to draw each element instead of rendering the full component offscreen and compositing it back with an alpha value. This default may be noticeable and undesired in the case where the View you are setting an opacity on has multiple overlapping elements (e.g. multiple overlapping Views, or text and a background).\n\nRendering offscreen to preserve correct alpha behavior is extremely expensive and hard to debug for non-native developers, which is why it is not turned on by default. If you do need to enable this property for an animation, consider combining it with renderToHardwareTextureAndroid if the view contents are static (i.e. it doesn\'t need to be redrawn each frame). If that property is enabled, this View will be rendered off-screen once, saved in a hardware texture, and then composited onto the screen with an alpha each frame without having to switch rendering targets on the GPU.',
          name: 'needsOffscreenAlphaCompositing',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'Whether this View should render itself (and all of its children) into a single hardware texture on the GPU.\n\nOn Android, this is useful for animations and interactions that only modify opacity, rotation, translation, and/or scale: in those cases, the view doesn\'t have to be redrawn and display lists don\'t need to be re-executed. The texture can just be re-used and re-composited with different parameters. The downside is that this can use up limited video memory, so this prop should be set back to false at the end of the interaction/animation.',
          name: 'renderToHardwareTextureAndroid',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: '> Note: AccessibilityRole and AccessibilityStates are meant to be a cross-platform solution to replace accessibilityTraits and accessibilityComponentType, which will soon be deprecated. When possible, use accessibilityRole and accessibilityStates instead of accessibilityTraits and accessibilityComponentType.\n\nTells the screen reader to treat the currently focused on element as having a specific role.\n\nPossible values for AccessibilityRole is one of:\n\n\'none\' - The element has no role.\n\'button\' - The element should be treated as a button.\n\'link\' - The element should be treated as a link.\n\'header\' - The element is a header that divides content into sections.\n\'search\' - The element should be treated as a search field.\n\'image\' - The element should be treated as an image.\n\'key\' - The element should be treated like a keyboard key.\n\'text\' - The element should be treated as text.\n\'summary\' - The element provides app summary information.\n\'imagebutton\' - The element has the role of both an image and also a button.\n\'adjustable\' - The element allows adjustment over a range of values.\nOn iOS, these roles map to corresponding Accessibility Traits. Image button has the same functionality as if the trait was set to both \'image\' and \'button\'. See the Accessibility guide for more information.\n\nOn Android, these roles have similar functionality on TalkBack as adding Accessibility Traits does on Voiceover in iOS',
          name: 'accessibilityRole',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: '> Note: AccessibilityRole and AccessibilityStates are meant to be a cross-platform solution to replace accessibilityTraits and accessibilityComponentType, which will soon be deprecated. When possible, use accessibilityRole and accessibilityStates instead of accessibilityTraits and accessibilityComponentType.\n\nTells the screen reader to treat the currently focused on element as being in a specific state.\n\nYou can provide one state, no state, or both states. The states must be passed in through an array. Ex: [\'selected\'] or [\'selected\', \'disabled\']\n\nPossible values for AccessibilityStates are:\n\n\'selected\' - The element is in a selcted state.\n\'disabled\' - The element is in a disabled state.',
          name: 'accessibilityStates',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: '> Note: accessibilityTraits will soon be deprecated. When possible, use accessibilityRole and accessibilityStates instead.\n\nProvides additional traits to screen reader. By default no traits are provided unless specified otherwise in element.\n\nYou can provide one trait or an array of many traits.\n\nPossible values for AccessibilityTraits are:\n\n\'none\' - The element has no traits.\n\'button\' - The element should be treated as a button.\n\'link\' - The element should be treated as a link.\n\'header\' - The element is a header that divides content into sections.\n\'search\' - The element should be treated as a search field.\n\'image\' - The element should be treated as an image.\n\'selected\' - The element is selected.\n\'plays\' - The element plays sound.\n\'key\' - The element should be treated like a keyboard key.\n\'text\' - The element should be treated as text.\n\'summary\' - The element provides app summary information.\n\'disabled\' - The element is disabled.\n\'frequentUpdates\' - The element frequently changes its value.\n\'startsMedia\' - The element starts a media session.\n\'adjustable\' - The element allows adjustment over a range of values.\n\'allowsDirectInteraction\' - The element allows direct touch interaction for VoiceOver users.\n\'pageTurn\' - Informs VoiceOver that it should scroll to the next page when it finishes reading the contents of the element.',
          name: 'accessibilityTraits',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'A value indicating whether VoiceOver should ignore the elements within views that are siblings of the receiver. Default is false.',
          name: 'accessibilityViewIsModal',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'A value indicating whether the accessibility elements contained within this accessibility element are hidden. Default is false.',
          name: 'accessibilityElementsHidden',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'A value indicating this view should or should not be inverted when color inversion is turned on. A value of true will tell the view to not be inverted even if color inversion is turned on.',
          name: 'accessibilityIgnoresInvertColors',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'Whether this View should be rendered as a bitmap before compositing.\n\nOn iOS, this is useful for animations and interactions that do not modify this component\'s dimensions nor its children; for example, when translating the position of a static view, rasterization allows the renderer to reuse a cached bitmap of a static view and quickly composite it during each frame.\n\nRasterization incurs an off-screen drawing pass and the bitmap consumes memory. Test and measure when using this property.',
          name: 'shouldRasterizeIOS',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        }
      ],
      description: 'Displays a circular loading indicator.\n\nimport React, { Component } from \'react\'\nimport {\n  ActivityIndicator,\n  AppRegistry,\n  StyleSheet,\n  Text,\n  View,\n} from \'react-native\'\n\nexport default class App extends Component {\n  render() {\n    return (\n      <View style={[styles.container, styles.horizontal]}>\n        <ActivityIndicator size="large" color="#0000ff" />\n        <ActivityIndicator size="small" color="#00ff00" />\n        <ActivityIndicator size="large" color="#0000ff" />\n        <ActivityIndicator size="small" color="#00ff00" />\n      </View>\n    )\n  }\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: \'center\'\n  },\n  horizontal: {\n    flexDirection: \'row\',\n    justifyContent: \'space-around\',\n    padding: 10\n  }\n})\n\nAppRegistry.registerComponent(\'App\', () => App)',
      id: 'XyXEaauLRTECjJrUodQt',
      isDefault: true,
      provider: 'ReactNative',
      techno: 'React Native',
      title: 'ActivityIndicator'
    },
    {
      children: [],
      closeTag: false,
      componentImport: '-',
      componentProps: [
        {
          description: 'Specifies whether fonts should scale to respect Text Size accessibility settings. The default is true.',
          name: 'allowFontScaling',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'Can tell TextInput to automatically capitalize certain characters. This property is not supported by some keyboard types such as name-phone-pad.\n\ncharacters: all characters.\nwords: first letter of each word.\nsentences: first letter of each sentence (default).\nnone: don\'t auto capitalize anything.\n\nenum(\'none\', \'sentences\', \'words\', \'characters\')',
          name: 'autoCapitalize',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'If false, disables auto-correct. The default value is true.',
          name: 'autoCorrect',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'If true, focuses the input on componentDidMount. The default value is false.',
          name: 'autoFocus',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'If true, the text field will blur when submitted. The default value is true for single-line fields and false for multiline fields. Note that for multiline fields, setting blurOnSubmit to true means that pressing return will blur the field and trigger the onSubmitEditing event instead of inserting a newline into the field.',
          name: 'blurOnSubmit',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'If true, caret is hidden. The default value is false.',
          name: 'caretHidden',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'When the clear button should appear on the right side of the text view. This property is supported only for single-line TextInput component. The default value is never.\n\nenum(\'never\', \'while-editing\', \'unless-editing\', \'always\')',
          name: 'clearButtonMode',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'If true, clears the text field automatically when editing begins.',
          name: 'clearTextOnFocus',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'If true, context menu is hidden. The default value is false.',
          name: 'contextMenuHidden',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'Determines the types of data converted to clickable URLs in the text input. Only valid if multiline={true} and editable={false}. By default no data types are detected.\n\nYou can provide one type or an array of many types.\n\nPossible values for dataDetectorTypes are:\n\n\'phoneNumber\'\n\'link\'\n\'address\'\n\'calendarEvent\'\n\'none\'\n\'all\'\n\nenum(\'phoneNumber\', \'link\', \'address\', \'calendarEvent\', \'none\', \'all\'), ,array of enum(\'phoneNumber\', \'link\', \'address\', \'calendarEvent\', \'none\', \'all\')\n',
          name: 'dataDetectorTypes',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'Provides an initial value that will change when the user starts typing. Useful for simple use-cases where you do not want to deal with listening to events and updating the value prop to keep the controlled state in sync.',
          name: 'defaultValue',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'When false, if there is a small amount of space available around a text input (e.g. landscape orientation on a phone), the OS may choose to have the user edit the text inside of a full screen text input mode. When true, this feature is disabled and users will always edit the text directly inside of the text input. Defaults to false.',
          name: 'disableFullscreenUI',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'If false, text is not editable. The default value is true.',
          name: 'editable',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'If true, the keyboard disables the return key when there is no text and automatically enables it when there is text. The default value is false.',
          name: 'enablesReturnKeyAutomatically',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'If defined, the provided image resource will be rendered on the left. The image resource must be inside /android/app/src/main/res/drawable and referenced like\n\n<TextInput\n inlineImageLeft=\'search_icon\'\n/>',
          name: 'inlineImageLeft',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Padding between the inline image, if any, and the text input itself.',
          name: 'inlineImagePadding',
          propType: 'PropTypes.number',
          propTypeIsrequired: false
        },
        {
          description: 'Determines the color of the keyboard.\n\nenum(\'default\', \'light\', \'dark\')',
          name: 'keyboardAppearance',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'Determines which keyboard to open, e.g.numeric.\n\nThe following values work across platforms:\n\ndefault\nnumber-pad\ndecimal-pad\nnumeric\nemail-address\nphone-pad\niOS Only\n\nThe following values work on iOS only:\n\nascii-capable\nnumbers-and-punctuation\nurl\nname-phone-pad\ntwitter\nweb-search\nAndroid Only\n\nThe following values work on Android only:\n\nvisible-password\n\nenum(\'default\', \'email-address\', \'numeric\', \'phone-pad\', \'ascii-capable\', \'numbers-and-punctuation\', \'url\', \'number-pad\', \'name-phone-pad\', \'decimal-pad\', \'twitter\', \'web-search\', \'visible-password\')',
          name: 'keyboardType',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'Limits the maximum number of characters that can be entered. Use this instead of implementing the logic in JS to avoid flicker.',
          name: 'maxLength',
          propType: 'PropTypes.number',
          propTypeIsrequired: false
        },
        {
          description: 'If true, the text input can be multiple lines. The default value is false.',
          name: 'multiline',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'Sets the number of lines for a TextInput. Use it with multiline set to true to be able to fill the lines.',
          name: 'numberOfLines',
          propType: 'PropTypes.number',
          propTypeIsrequired: false
        },
        {
          description: 'Callback that is called when the text input is blurred.',
          name: 'onBlur',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Callback that is called when the text input\'s text changes.',
          name: 'onChange',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Callback that is called when the text input\'s text changes. Changed text is passed as an argument to the callback handler.',
          name: 'onChangeText',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Callback that is called when the text input\'s content size changes. This will be called with { nativeEvent: { contentSize: { width, height } } }.\n\nOnly called for multiline text inputs.',
          name: 'onContentSizeChange',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Callback that is called when text input ends.',
          name: 'onEndEditing',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Callback that is called when the text input is focused.',
          name: 'onFocus',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Callback that is called when a key is pressed. This will be called with { nativeEvent: { key: keyValue } } where keyValue is \'Enter\' or \'Backspace\' for respective keys and the typed-in character otherwise including \' \' for space. Fires before onChange callbacks. Note: on Android only the inputs from soft keyboard are handled, not the hardware keyboard inputs.',
          name: 'onKeyPress',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Invoked on mount and layout changes with {x, y, width, height}.',
          name: 'onLayout',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Invoked on content scroll with { nativeEvent: { contentOffset: { x, y } } }. May also contain other properties from ScrollEvent but on Android contentSize is not provided for performance reasons.',
          name: 'onScroll',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Callback that is called when the text input selection is changed. This will be called with { nativeEvent: { selection: { start, end } } }.',
          name: 'onSelectionChange',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Callback that is called when the text input\'s submit button is pressed. Invalid if multiline={true} is specified.',
          name: 'onSubmitEditing',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'The string that will be rendered before text input has been entered.',
          name: 'placeholder',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'The text color of the placeholder string.',
          name: 'placeholderTextColor',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Sets the return key to the label. Use it instead of returnKeyType.',
          name: 'returnKeyLabel',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Determines how the return key should look. On Android you can also use returnKeyLabel.\n\nCross platform\n\nThe following values work across platforms:\n\ndone\ngo\nnext\nsearch\nsend\nAndroid Only\n\nThe following values work on Android only:\n\nnone\nprevious\niOS Only\n\nThe following values work on iOS only:\n\ndefault\nemergency-call\ngoogle\njoin\nroute\nyahoo\n\nenum(\'done\', \'go\', \'next\', \'search\', \'send\', \'none\', \'previous\', \'default\', \'emergency-call\', \'google\', \'join\', \'route\', \'yahoo\')',
          name: 'returnKeyType',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'If false, scrolling of the text view will be disabled. The default value is true. Only works with multiline={true}.',
          name: 'scrollEnabled',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'If true, the text input obscures the text entered so that sensitive text like passwords stay secure. The default value is false. Does not work with multiline={true}.',
          name: 'secureTextEntry',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'The start and end of the text input\'s selection. Set start and end to the same value to position the cursor.\n\nobject: {start: number,end: number}',
          name: 'selection',
          propType: 'PropTypes.object',
          propTypeIsrequired: false
        },
        {
          description: 'The highlight and cursor color of the text input.',
          name: 'selectionColor',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'An instance of DocumentSelectionState, this is some state that is responsible for maintaining selection information for a document.\n\nSome functionality that can be performed with this instance is:\n\nblur()\nfocus()\nupdate()\nYou can reference DocumentSelectionState in vendor/document/selection/DocumentSelectionState.js\n\nDocumentSelectionState',
          name: 'selectionState',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'If true, all text will automatically be selected on focus.',
          name: 'selectTextOnFocus',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'If false, disables spell-check style (i.e. red underlines). The default value is inherited from autoCorrect.',
          name: 'spellCheck',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'Give the keyboard and the system information about the expected semantic meaning for the content that users enter.\n\nFor iOS 11+ you can set textContentType to username or password to enable autofill of login details from the device keychain.\n\nTo disable autofill, set textContentType to none.\n\nPossible values for textContentType are:\n\nnone\nURL\naddressCity\naddressCityAndState\naddressState\ncountryName\ncreditCardNumber\nemailAddress\nfamilyName\nfullStreetAddress\ngivenName\njobTitle\nlocation\nmiddleName\nname\nnamePrefix\nnameSuffix\nnickname\norganizationName\npostalCode\nstreetAddressLine1\nstreetAddressLine2\nsublocality\ntelephoneNumber\nusername\npassword\n\n\nenum(\'none\', \'URL\', \'addressCity\', \'addressCityAndState\', \'addressState\', \'countryName\', \'creditCardNumber\', \'emailAddress\', \'familyName\', \'fullStreetAddress\', \'givenName\', \'jobTitle\', \'location\', \'middleName\', \'name\', \'namePrefix\', \'nameSuffix\', \'nickname\', \'organizationName\', \'postalCode\', \'streetAddressLine1\', \'streetAddressLine2\', \'sublocality\', \'telephoneNumber\', \'username\', \'password\')',
          name: 'textContentType',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'Note that not all Text styles are supported, an incomplete list of what is not supported includes:\n\nborderLeftWidth\nborderTopWidth\nborderRightWidth\nborderBottomWidth\nborderTopLeftRadius\nborderTopRightRadius\nborderBottomRightRadius\nborderBottomLeftRadius\nsee Issue#7070 for more detail.',
          name: 'style',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Set text break strategy on Android API Level 23+, possible values are simple, highQuality, balanced The default value is simple.\n\nenum(\'simple\', \'highQuality\', \'balanced\')',
          name: 'textBreakStrategy',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'The color of the TextInput underline.',
          name: 'underlineColorAndroid',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'The value to show for the text input. TextInput is a controlled component, which means the native value will be forced to match this value prop if provided. For most uses, this works great, but in some cases this may cause flickering - one common cause is preventing edits by keeping value the same. In addition to simply setting the same value, either set editable={false}, or set/update maxLength to prevent unwanted edits without flicker.',
          name: 'value',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        }
      ],
      description: 'A foundational component for inputting text into the app via a keyboard. Props provide configurability for several features, such as auto-correction, auto-capitalization, placeholder text, and different keyboard types, such as a numeric keypad.\n\nThe simplest use case is to plop down a TextInput and subscribe to the onChangeText events to read the user input. There are also other events, such as onSubmitEditing and onFocus that can be subscribed to. \n\nA simple example:\n\nimport React, { Component } from \'react\';\nimport { AppRegistry, TextInput } from \'react-native\';\n\nexport default class UselessTextInput extends Component {\n  constructor(props) {\n    super(props);\n    this.state = { text: \'Useless Placeholder\' };\n  }\n\n  render() {\n    return (\n      <TextInput\n        style={{height: 40, borderColor: \'gray\', borderWidth: 1}}\n        onChangeText={(text) => this.setState({text})}\n        value={this.state.text}\n      />\n    );\n  }\n}\n\n// skip this line if using Create React Native App\nAppRegistry.registerComponent(\'AwesomeProject\', () => UselessTextInput);\n\nTwo methods exposed via the native element are .focus() and .blur() that will focus or blur the TextInput programmatically.\n\nNote that some props are only available with multiline={true/false}. Additionally, border styles that apply to only one side of the element (e.g., borderBottomColor, borderLeftWidth, etc.) will not be applied if multiline=false. To achieve the same effect, you can wrap your TextInput in a View:\n\nimport React, { Component } from \'react\';\nimport { AppRegistry, View, TextInput } from \'react-native\';\n\nclass UselessTextInput extends Component {\n  render() {\n    return (\n      <TextInput\n        {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below\n        editable = {true}\n        maxLength = {40}\n      />\n    );\n  }\n}\n\nexport default class UselessTextInputMultiline extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      text: \'Useless Multiline Placeholder\',\n    };\n  }\n\n  // If you type something in the text box that is a color, the background will change to that\n  // color.\n  render() {\n    return (\n     <View style={{\n       backgroundColor: this.state.text,\n       borderBottomColor: \'#000000\',\n       borderBottomWidth: 1 }}\n     >\n       <UselessTextInput\n         multiline = {true}\n         numberOfLines = {4}\n         onChangeText={(text) => this.setState({text})}\n         value={this.state.text}\n       />\n     </View>\n    );\n  }\n}\n\n// skip these lines if using Create React Native App\nAppRegistry.registerComponent(\n \'AwesomeProject\',\n () => UselessTextInputMultiline\n);\n\nTextInput has by default a border at the bottom of its view. This border has its padding set by the background image provided by the system, and it cannot be changed. Solutions to avoid this is to either not set height explicitly, case in which the system will take care of displaying the border in the correct position, or to not display the border by setting underlineColorAndroid to transparent.\n\nNote that on Android performing text selection in input can change app\'s activity windowSoftInputMode param to adjustResize. This may cause issues with components that have position: \'absolute\' while keyboard is active. To avoid this behavior either specify windowSoftInputMode in AndroidManifest.xml ( https://developer.android.com/guide/topics/manifest/activity-element.html ) or control this param programmatically with native code.\n',
      id: 'YDrqxb1xtoege8w4EbL8',
      isDefault: true,
      provider: 'ReactNative',
      techno: 'React Native',
      title: 'TextInput'
    },
    {
      children: [],
      closeTag: false,
      componentImport: '-',
      componentProps: [
        {
          description: 'Index of initial page that should be selected. Use setPage method to update the page, and onPageSelected to monitor page changes',
          name: 'initialPage',
          propType: 'PropTypes.number',
          propTypeIsrequired: false
        },
        {
          description: 'Determines whether the keyboard gets dismissed in response to a drag.\n\n\'none\' (the default), drags do not dismiss the keyboard.\n\'on-drag\', the keyboard is dismissed when a drag begins.\n\nenum(\'none\', \'on-drag\')',
          name: 'keyboardDismissMode',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'Executed when transitioning between pages (either because of animation for the requested page change or when user is swiping/dragging between pages) The event.nativeEvent object for this callback will carry following data:\n\nposition - index of first page from the left that is currently visible\noffset - value from range [0, 1] describing stage between page transitions. Value x means that (1 - x) fraction of the page at "position" index is visible, and x fraction of the next page is visible.',
          name: 'onPageScroll',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Function called when the page scrolling state has changed. The page scrolling state can be in 3 states:\n\nidle, meaning there is no interaction with the page scroller happening at the time\ndragging, meaning there is currently an interaction with the page scroller\nsettling, meaning that there was an interaction with the page scroller, and the page scroller is now finishing its closing or opening animation',
          name: 'onPageScrollStateChanged',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'This callback will be called once ViewPager finish navigating to selected page (when user swipes between pages). The event.nativeEvent object passed to this callback will have following fields:\n\nposition - index of page that has been selected',
          name: 'onPageSelected',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Blank space to show between pages. This is only visible while scrolling, pages are still edge-to-edge.',
          name: 'pageMargin',
          propType: 'PropTypes.number',
          propTypeIsrequired: false
        },
        {
          description: 'Whether enable showing peekFraction or not. If this is true, the preview of last and next page will show in current screen. Defaults to false.',
          name: 'peekEnabled',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'When false, the content does not scroll. The default value is true.',
          name: 'scrollEnabled',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'A helper function to scroll to a specific page in the ViewPager. The transition between pages will be animated.\n\nposition - index of page that will be selected',
          name: 'setPage',
          propType: 'PropTypes.number',
          propTypeIsrequired: false
        },
        {
          description: 'A helper function to scroll to a specific page in the ViewPager. The transition between pages will not be animated.\n\nposition - index of page that will be selected',
          name: 'setPageWithoutAnimation',
          propType: 'PropTypes.number',
          propTypeIsrequired: false
        }
      ],
      description: 'Container that allows to flip left and right between child views. Each child view of the ViewPagerAndroid will be treated as a separate page and will be stretched to fill the ViewPagerAndroid.\n\nIt is important all children are <View>s and not composite components. You can set style properties like padding or backgroundColor for each child. It is also important that each child have a key prop.\n\nExample:\n\nrender: function() {\n  return (\n    <ViewPagerAndroid\n      style={styles.viewPager}\n      initialPage={0}>\n      <View style={styles.pageStyle} key="1">\n        <Text>First page</Text>\n      </View>\n      <View style={styles.pageStyle} key="2">\n        <Text>Second page</Text>\n      </View>\n    </ViewPagerAndroid>\n  );\n}\n\n...\n\nvar styles = {\n  ...\n  viewPager: {\n    flex: 1\n  },\n  pageStyle: {\n    alignItems: \'center\',\n    padding: 20,\n  }\n}',
      id: 'YMYpix4S3rGoMnHvTw3n',
      isDefault: true,
      provider: 'ReactNative',
      techno: 'React Native',
      title: 'ViewPagerAndroid'
    },
    {
      children: [],
      closeTag: false,
      componentImport: 'react-bootstrap/lib/PanelHeading',
      componentProps: [
        {
          description: 'You can use a custom element type for this component.\n\ndefault: \'div\'',
          name: 'componentClass',
          propType: 'PropTypes.element',
          propTypeIsrequired: false
        },
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault" \'panel\'',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        }
      ],
      description: 'Panel.Heading',
      id: 'a7bZesFogd0zTHkyXOUG',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'Panel.Heading'
    },
    {
      children: [],
      componentImport: 'react-bootstrap/lib/NavItem',
      componentProps: [
        {
          description: 'default: false',
          name: 'active',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'default: false',
          name: 'disabled',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'role',
          name: 'role',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        },
        {
          description: 'href',
          name: 'href',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        },
        {
          description: 'onClick',
          name: 'onClick',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'onSelect',
          name: 'onSelect',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'A unique identifier for the Component, the eventKey makes it distinguishable from others in a set. Similar to React\'s key prop, in that it only needs to be unique amoungst the Components siblings, not globally.',
          name: 'eventKey',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        }
      ],
      description: 'NavItem',
      id: 'awtslcjjjb049j68O2la',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'NavItem'
    },
    {
      children: [],
      closeTag: false,
      componentImport: '-',
      componentProps: [
        {
          description: 'itemStyle',
          name: 'itemStyle',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'onValueChange',
          name: 'onValueChange',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'selectedValue',
          name: 'selectedValue',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        }
      ],
      description: 'PickerIOS',
      id: 'b10AGRkK1Oa8HvZdiLjO',
      isDefault: true,
      provider: 'ReactNative',
      techno: 'React Native',
      title: 'PickerIOS'
    },
    {
      children: [],
      closeTag: false,
      componentImport: '-',
      componentProps: [
        {
          description: 'Determines what the opacity of the wrapped view should be when touch is active.',
          name: 'activeOpacity',
          propType: 'PropTypes.number',
          propTypeIsrequired: false
        },
        {
          description: 'Called immediately after the underlay is hidden',
          name: 'onHideUnderlay',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Called immediately after the underlay is shown',
          name: 'onShowUnderlay',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'style',
          name: 'style',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'The color of the underlay that will show through when the touch is active.',
          name: 'underlayColor',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: '(Apple TV only) TV preferred focus (see documentation for the View component).',
          name: 'hasTVPreferredFocus',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: '(Apple TV only) Object with properties to control Apple TV parallax effects.\n\nenabled: If true, parallax effects are enabled. Defaults to true. shiftDistanceX: Defaults to 2.0. shiftDistanceY: Defaults to 2.0. tiltAngle: Defaults to 0.05. magnification: Defaults to 1.0. pressMagnification: Defaults to 1.0. pressDuration: Defaults to 0.3. pressDelay: Defaults to 0.0.',
          name: 'tvParallaxProperties',
          propType: 'PropTypes.object',
          propTypeIsrequired: false
        }
      ],
      description: 'A wrapper for making views respond properly to touches. On press down, the opacity of the wrapped view is decreased, which allows the underlay color to show through, darkening or tinting the view.\n\nThe underlay comes from wrapping the child in a new View, which can affect layout, and sometimes cause unwanted visual artifacts if not used correctly, for example if the backgroundColor of the wrapped view isn\'t explicitly set to an opaque color.\n\nTouchableHighlight must have one child (not zero or more than one). If you wish to have several child components, wrap them in a View.\n\nExample:\n\nrenderButton: function() {\n  return (\n    <TouchableHighlight onPress={this._onPressButton}>\n      <Image\n        style={styles.button}\n        source={require(\'./myButton.png\')}\n      />\n    </TouchableHighlight>\n  );\n},\n\nExample:\n\nimport React, { Component } from \'react\'\nimport {\n  AppRegistry,\n  StyleSheet,\n  TouchableHighlight,\n  Text,\n  View,\n} from \'react-native\'\n\nclass App extends Component {\n  constructor(props) {\n    super(props)\n    this.state = { count: 0 }\n  }\n\n  onPress = () => {\n    this.setState({\n      count: this.state.count+1\n    })\n  }\n\n render() {\n    return (\n      <View style={styles.container}>\n        <TouchableHighlight\n         style={styles.button}\n         onPress={this.onPress}\n        >\n         <Text> Touch Here </Text>\n        </TouchableHighlight>\n        <View style={[styles.countContainer]}>\n          <Text style={[styles.countText]}>\n            { this.state.count !== 0 ? this.state.count: null}\n          </Text>\n        </View>\n      </View>\n    )\n  }\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: \'center\',\n    paddingHorizontal: 10\n  },\n  button: {\n    alignItems: \'center\',\n    backgroundColor: \'#DDDDDD\',\n    padding: 10\n  },\n  countContainer: {\n    alignItems: \'center\',\n    padding: 10\n  },\n  countText: {\n    color: \'#FF00FF\'\n  }\n})\n\nAppRegistry.registerComponent(\'App\', () => App)',
      id: 'cXPwQfDg20VaLvOyRu55',
      isDefault: true,
      provider: 'ReactNative',
      techno: 'React Native',
      title: 'TouchableHighlight'
    },
    {
      children: [],
      closeTag: false,
      componentImport: 'react-bootstrap/lib/HelpBlock',
      componentProps: [
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'help-block\'',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        }
      ],
      description: 'HelpBlock',
      id: 'coNeMqBYSd6QhN301bCt',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'HelpBlock'
    },
    {
      children: [],
      closeTag: false,
      componentImport: 'react-bootstrap/lib/FormControlStatic',
      componentProps: [
        {
          description: 'You can use a custom element type for this component.\n\ndefault: \'p\'',
          name: 'componentClass',
          propType: 'PropTypes.element',
          propTypeIsrequired: true
        },
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'form-control-static\'',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        }
      ],
      description: 'FormControl.Static',
      id: 'cyBBSi3l2Fs18XXcBFud',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'FormControl.Static'
    },
    {
      children: [],
      closeTag: false,
      componentImport: 'react-jsonschema-form',
      componentProps: [
        {
          description: 'Form id',
          name: 'id',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'className',
          name: 'className',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Form name',
          name: 'name',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'method="post"',
          name: 'method',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'target="_blank"',
          name: 'target',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'action="/users/list"',
          name: 'action',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'autocomplete="off"',
          name: 'autocomplete',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'enctype="multipart/form-data"',
          name: 'enctype',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'acceptcharset="ISO-8859-1"',
          name: 'acceptcharset',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'schema',
          name: 'schema',
          propType: 'PropTypes.array',
          propTypeIsrequired: false
        },
        {
          description: 'onSubmit',
          name: 'onSubmit',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'onBlur',
          name: 'onBlur',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'onFocus',
          name: 'onFocus',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'onError',
          name: 'onError',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'formData',
          name: 'formData',
          propType: 'PropTypes.array',
          propTypeIsrequired: false
        },
        {
          description: 'ref={(form) => {yourForm = form;}}',
          name: 'ref',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'disabled',
          name: 'disabled',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        }
      ],
      description: 'react-jsonschema-form is meant to automatically generate a React form based on a JSON Schema. It is a major component in the kinto-admin project. If you want to generate a form for any data, sight unseen, simply given a JSON schema, react-jsonschema-form may be for you. If you have a priori knowledge of your data and want a toolkit for generating forms for it, you might look elsewhere.\n\nreact-jsonschema-form validates that the data conforms to the given schema, but doesn\'t prevent the user from inputing data that doesn\'t fit (for example, stripping non-numbers from a number field, or adding values to an array that is already "full").\n\n<Form\n  id="edit-form"\n  className="form form-wide"\n  name="awesomeForm"\n  method="post"\n  target="_blank"\n  action="/users/list"\n  autocomplete="off"\n  enctype="multipart/form-data"\n  acceptcharset="ISO-8859-1"\n  schema={} />',
      id: 'dlJls0V3K562K2K7H8tj',
      isDefault: true,
      provider: 'Jsonschema-form',
      techno: 'React',
      title: 'Form'
    },
    {
      children: [],
      closeTag: false,
      componentImport: 'react-bootstrap/lib/ModalBody',
      componentProps: [
        {
          description: 'You can use a custom element type for this component.\n\ndefault: \'div\'',
          name: 'componentClass',
          propType: 'PropTypes.element',
          propTypeIsrequired: false
        },
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'modal-body\'',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        }
      ],
      description: 'Modal.Body',
      id: 'eKv8EYkQXHoOFwCLRdaZ',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'Modal.Body'
    },
    {
      children: [],
      closeTag: false,
      componentImport: 'react-bootstrap/lib/SplitButton',
      componentProps: [
        {
          description: 'Component visual or contextual style variants.',
          name: 'bsStyle',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        },
        {
          description: 'Component size variations.',
          name: 'bsSize',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        },
        {
          description: 'href',
          name: 'href',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        },
        {
          description: 'onClick',
          name: 'onClick',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'The content of the split button.',
          name: 'title',
          propType: 'PropTypes.node',
          propTypeIsrequired: true
        },
        {
          description: 'Accessible label for the toggle; the value of title if not specified.',
          name: 'toggleLabel',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        }
      ],
      description: 'SplitButton',
      id: 'fB5hupS0hr3W70YLoXdb',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'SplitButton'
    },
    {
      children: [],
      closeTag: false,
      componentImport: '-',
      componentProps: [
        {
          description: 'The navigation view that will be rendered to the side of the screen and can be pulled in.',
          name: 'renderNavigationView',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'Function called whenever the navigation view has been closed.',
          name: 'onDrawerClose',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Specifies the side of the screen from which the drawer will slide in.\n\nType: enum(DrawerConsts.DrawerPosition.Left, DrawerConsts.DrawerPosition.Right)',
          name: 'drawerPosition',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'Specifies the width of the drawer, more precisely the width of the view that be pulled in from the edge of the window.',
          name: 'drawerWidth',
          propType: 'PropTypes.number',
          propTypeIsrequired: false
        },
        {
          description: 'Determines whether the keyboard gets dismissed in response to a drag.\n\n\'none\' (the default), drags do not dismiss the keyboard.\n\'on-drag\', the keyboard is dismissed when a drag begins.\n\nType: enum(\'none\', \'on-drag\')',
          name: 'keyboardDismissMode',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'Specifies the lock mode of the drawer. The drawer can be locked in 3 states:\n\nunlocked (default), meaning that the drawer will respond (open/close) to touch gestures.\nlocked-closed, meaning that the drawer will stay closed and not respond to gestures.\nlocked-open, meaning that the drawer will stay opened and not respond to gestures. The drawer may still be opened and closed programmatically (openDrawer/closeDrawer).\n\nType: enum(\'unlocked\', \'locked-closed\', \'locked-open\')',
          name: 'drawerLockMode',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'Function called whenever the navigation view has been opened.',
          name: 'onDrawerOpen',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Function called whenever there is an interaction with the navigation view.',
          name: 'onDrawerSlide',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Function called when the drawer state has changed. The drawer can be in 3 states:\n\nidle, meaning there is no interaction with the navigation view happening at the time\ndragging, meaning there is currently an interaction with the navigation view\nsettling, meaning that there was an interaction with the navigation view, and the navigation view is now finishing its closing or opening animation',
          name: 'onDrawerStateChanged',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Specifies the background color of the drawer. The default value is white. If you want to set the opacity of the drawer, use rgba. Example:\n\nreturn (\n  <DrawerLayoutAndroid drawerBackgroundColor="rgba(0,0,0,0.5)">\n  </DrawerLayoutAndroid>\n);',
          name: 'drawerBackgroundColor',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Make the drawer take the entire screen and draw the background of the status bar to allow it to open over the status bar. It will only have an effect on API 21+.',
          name: 'statusBarBackgroundColor',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        }
      ],
      description: 'React component that wraps the platform DrawerLayout (Android only). The Drawer (typically used for navigation) is rendered with renderNavigationView and direct children are the main view (where your content goes). The navigation view is initially not visible on the screen, but can be pulled in from the side of the window specified by the drawerPosition prop and its width can be set by the drawerWidth prop.\n\nExample:\n\nrender: function() {\n  var navigationView = (\n    <View style={{flex: 1, backgroundColor: \'#fff\'}}>\n      <Text style={{margin: 10, fontSize: 15, textAlign: \'left\'}}>I\'m in the Drawer!</Text>\n    </View>\n  );\n  return (\n    <DrawerLayoutAndroid\n      drawerWidth={300}\n      drawerPosition={DrawerLayoutAndroid.positions.Left}\n      renderNavigationView={() => navigationView}>\n      <View style={{flex: 1, alignItems: \'center\'}}>\n        <Text style={{margin: 10, fontSize: 15, textAlign: \'right\'}}>Hello</Text>\n        <Text style={{margin: 10, fontSize: 15, textAlign: \'right\'}}>World!</Text>\n      </View>\n    </DrawerLayoutAndroid>\n  );\n},',
      id: 'fKVk2SDHkW1Vevh2NPHH',
      isDefault: true,
      provider: 'ReactNative',
      techno: 'React Native',
      title: 'DrawerLayoutAndroid'
    },
    {
      children: [],
      closeTag: false,
      componentImport: '-',
      componentProps: [
        {
          description: 'style',
          name: 'style',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'imageStyle',
          name: 'imageStyle',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Allows to set a reference to the inner Image component',
          name: 'imageRef',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        }
      ],
      description: 'A common feature request from developers familiar with the web is background-image. To handle this use case, you can use the <ImageBackground> component, which has the same props as <Image>, and add whatever children to it you would like to layer on top of it.\n\nYou might not want to use <ImageBackground> in some cases, since the implementation is very simple. Refer to <ImageBackground>\'s source code for more insight, and create your own custom component when needed.\n\nNote that you must specify some width and height style attributes.\n\nExample\nreturn (\n  <ImageBackground source={...} style={{width: \'100%\', height: \'100%\'}}>\n    <Text>Inside</Text>\n  </ImageBackground>\n);',
      id: 'fZvZYq1EHs3hz6rwOSqS',
      isDefault: true,
      provider: 'ReactNative',
      techno: 'React Native',
      title: 'ImageBackground'
    },
    {
      children: [],
      closeTag: true,
      componentImport: 'react-bootstrap/lib/Label',
      componentProps: [
        {
          description: 'Component visual or contextual style variants.\n\ndefault: \'default\'',
          name: 'bsStyle',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'label\'',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        }
      ],
      description: 'Create a <Label>label</Label> to highlight information.\n\n<div>\n  <h1>\n    Label <Label>New</Label>\n  </h1>\n  <h2>\n    Label <Label>New</Label>\n  </h2>\n  <h3>\n    Label <Label>New</Label>\n  </h3>\n  <h4>\n    Label <Label>New</Label>\n  </h4>\n  <h5>\n    Label <Label>New</Label>\n  </h5>\n  <p>\n    Label <Label>New</Label>\n  </p>\n</div>;\n\nAvailable variations\nAdd any of the below mentioned modifier classes to change the appearance of a label.\n\n<div>\n  <Label bsStyle="default">Default</Label>{\' \'}\n  <Label bsStyle="primary">Primary</Label>{\' \'}\n  <Label bsStyle="success">Success</Label> <Label bsStyle="info">Info</Label>{\' \'}\n  <Label bsStyle="warning">Warning</Label>{\' \'}\n  <Label bsStyle="danger">Danger</Label>\n</div>;',
      id: 'ftfH8uWkSozZq6k5fmun',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'Label'
    },
    {
      children: [],
      closeTag: false,
      componentImport: 'react-bootstrap/lib/Button',
      componentProps: [
        {
          description: 'Default: false',
          name: 'active',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'Default: false',
          name: 'disabled',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'Default: false',
          name: 'block',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'onClick',
          name: 'onClick',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'You can use a custom element type for this component.',
          name: 'componentClass',
          propType: 'PropTypes.element',
          propTypeIsrequired: false
        },
        {
          description: 'href',
          name: 'href',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Defines HTML button type attribute\n\ndefault: \'button\'',
          name: 'type',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'Component visual or contextual style variants.\n\ndefault: \'default\'',
          name: 'bsStyle',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'Component size variations.',
          name: 'bsSize',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'btn\'',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        }
      ],
      description: 'Options\nUse any of the available button style types to quickly create a styled button. Just modify the bsStyle prop.\n\n<ButtonToolbar>\n  {/* Standard button */}\n  <Button>Default</Button>\n\n  {/* Provides extra visual weight and identifies the primary action in a set of buttons */}\n  <Button bsStyle="primary">Primary</Button>\n\n  {/* Indicates a successful or positive action */}\n  <Button bsStyle="success">Success</Button>\n\n  {/* Contextual button for informational alert messages */}\n  <Button bsStyle="info">Info</Button>\n\n  {/* Indicates caution should be taken with this action */}\n  <Button bsStyle="warning">Warning</Button>\n\n  {/* Indicates a dangerous or potentially negative action */}\n  <Button bsStyle="danger">Danger</Button>\n\n  {/* Deemphasize a button by making it look like a link while maintaining button behavior */}\n  <Button bsStyle="link">Link</Button>\n</ButtonToolbar>;\n\nButton spacing\nBecause React doesn\'t output newlines between elements, buttons on the same line are displayed flush against each other. To preserve the spacing between multiple inline buttons, wrap your button group in <ButtonToolbar />.\n\n#Sizes\nFancy larger or smaller buttons? Add bsSize="large", bsSize="small", or bsSize="xsmall" for additional sizes.\n\n<div>\n  <ButtonToolbar>\n    <Button bsStyle="primary" bsSize="large">\n      Large button\n    </Button>\n    <Button bsSize="large">Large button</Button>\n  </ButtonToolbar>\n  <ButtonToolbar>\n    <Button bsStyle="primary">Default button</Button>\n    <Button>Default button</Button>\n  </ButtonToolbar>\n  <ButtonToolbar>\n    <Button bsStyle="primary" bsSize="small">\n      Small button\n    </Button>\n    <Button bsSize="small">Small button</Button>\n  </ButtonToolbar>\n  <ButtonToolbar>\n    <Button bsStyle="primary" bsSize="xsmall">\n      Extra small button\n    </Button>\n    <Button bsSize="xsmall">Extra small button</Button>\n  </ButtonToolbar>\n</div>;\n\nCreate block level buttons—those that span the full width of a parent— by adding the block prop.\n\nconst wellStyles = { maxWidth: 400, margin: \'0 auto 10px\' };\n\nconst buttonsInstance = (\n  <div className="well" style={wellStyles}>\n    <Button bsStyle="primary" bsSize="large" block>\n      Block level button\n    </Button>\n    <Button bsSize="large" block>\n      Block level button\n    </Button>\n  </div>\n);\n\nrender(buttonsInstance);\n\nActive state\nTo set a buttons active state simply set the components active prop.\n\n<ButtonToolbar>\n  <Button bsStyle="primary" bsSize="large" active>\n    Primary button\n  </Button>\n  <Button bsSize="large" active>\n    Button\n  </Button>\n</ButtonToolbar>;\n\nButton tags\nThe DOM element tag is choosen automatically for you based on the props you supply. Passing a href will result in the button using a <a /> element otherwise a <button /> element will be used.\n\n<ButtonToolbar>\n  <Button href="#">Link</Button>\n  <Button>Button</Button>\n</ButtonToolbar>;\n\nDisabled state\nMake buttons look unclickable by fading them back 50%. To do this add the disabled attribute to buttons.\n\n<ButtonToolbar>\n  <Button bsStyle="primary" bsSize="large" disabled>\n    Primary button\n  </Button>\n  <Button bsSize="large" disabled>\n    Button\n  </Button>\n</ButtonToolbar>;\n\nCross-Browser compatibility\nBecause <Button /> will render an <a> tag in certain situations. Since anchor tags can\'t be disabled, the behavior is emulated as best it can be. Specifically, pointer-events: none; style is added to the anchor to prevent focusing, which is only supported in newer browser versions.\n\n#Button loading state\nWhen activating an asynchronous action from a button it is a good UX pattern to give the user feedback as to the loading state, this can easily be done by updating your <Button />’s props from a state change like below.\n\nclass LoadingButton extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.handleClick = this.handleClick.bind(this);\n\n    this.state = {\n      isLoading: false\n    };\n  }\n\n  handleClick() {\n    this.setState({ isLoading: true });\n\n    // This probably where you would have an `ajax` call\n    setTimeout(() => {\n      // Completed of async action, set loading state back\n      this.setState({ isLoading: false });\n    }, 2000);\n  }\n\n  render() {\n    const { isLoading } = this.state;\n\n    return (\n      <Button\n        bsStyle="primary"\n        disabled={isLoading}\n        onClick={!isLoading ? this.handleClick : null}\n      >\n        {isLoading ? \'Loading...\' : \'Loading state\'}\n      </Button>\n    );\n  }\n}\n\nrender(<LoadingButton />);',
      id: 'g76jQnopot8qn6aSptU0',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'Button'
    },
    {
      children: [],
      closeTag: true,
      componentImport: 'react-bootstrap/lib/ButtonGroup',
      componentProps: [
        {
          description: 'default: false',
          name: 'vertical',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'default: false',
          name: 'justified',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'Display block buttons; only useful when used with the "vertical" prop.\n\ndefault: false',
          name: 'block',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'btn-group\'',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        }
      ],
      description: '#Button groups ButtonGroup, ButtonToolbar, ToggleButtonGroup, ToggleButton\nGroup a series of buttons together on a single line with the button group.\n\n#Basic example\nWrap a series of <Button />s in a <ButtonGroup />.\n\n<ButtonGroup>\n  <Button>Left</Button>\n  <Button>Middle</Button>\n  <Button>Right</Button>\n</ButtonGroup>;\n\n#Button toolbar\nCombine sets of <ButtonGroup />s into a <ButtonToolbar /> for more complex components.\n\n<ButtonToolbar>\n  <ButtonGroup>\n    <Button>1</Button>\n    <Button>2</Button>\n    <Button>3</Button>\n    <Button>4</Button>\n  </ButtonGroup>\n\n  <ButtonGroup>\n    <Button>5</Button>\n    <Button>6</Button>\n    <Button>7</Button>\n  </ButtonGroup>\n\n  <ButtonGroup>\n    <Button>8</Button>\n  </ButtonGroup>\n</ButtonToolbar>;\n\n#Sizing\nInstead of applying button sizing props to every button in a group, just add bsSize prop to the <ButtonGroup />.\n\n<div>\n  <ButtonToolbar>\n    <ButtonGroup bsSize="large">\n      <Button>Left</Button>\n      <Button>Middle</Button>\n      <Button>Right</Button>\n    </ButtonGroup>\n  </ButtonToolbar>\n\n  <ButtonToolbar>\n    <ButtonGroup>\n      <Button>Left</Button>\n      <Button>Middle</Button>\n      <Button>Right</Button>\n    </ButtonGroup>\n  </ButtonToolbar>\n\n  <ButtonToolbar>\n    <ButtonGroup bsSize="small">\n      <Button>Left</Button>\n      <Button>Middle</Button>\n      <Button>Right</Button>\n    </ButtonGroup>\n  </ButtonToolbar>\n\n  <ButtonToolbar>\n    <ButtonGroup bsSize="xsmall">\n      <Button>Left</Button>\n      <Button>Middle</Button>\n      <Button>Right</Button>\n    </ButtonGroup>\n  </ButtonToolbar>\n</div>;\n\n#Nesting\nYou can place other button types within the <ButtonGroup /> like <DropdownButton />s.\n\n<ButtonGroup>\n  <Button>1</Button>\n  <Button>2</Button>\n  <DropdownButton title="Dropdown" id="bg-nested-dropdown">\n    <MenuItem eventKey="1">Dropdown link</MenuItem>\n    <MenuItem eventKey="2">Dropdown link</MenuItem>\n  </DropdownButton>\n</ButtonGroup>;\n\n#Vertical variation\nMake a set of buttons appear vertically stacked rather than horizontally. Split button dropdowns are not supported here.\n\nJust add vertical to the <ButtonGroup />.\n\n<ButtonGroup vertical>\n  <Button>Button</Button>\n  <Button>Button</Button>\n  <DropdownButton title="Dropdown" id="bg-vertical-dropdown-1">\n    <MenuItem eventKey="1">Dropdown link</MenuItem>\n    <MenuItem eventKey="2">Dropdown link</MenuItem>\n  </DropdownButton>\n  <Button>Button</Button>\n  <Button>Button</Button>\n  <DropdownButton title="Dropdown" id="bg-vertical-dropdown-2">\n    <MenuItem eventKey="1">Dropdown link</MenuItem>\n    <MenuItem eventKey="2">Dropdown link</MenuItem>\n  </DropdownButton>\n  <DropdownButton title="Dropdown" id="bg-vertical-dropdown-3">\n    <MenuItem eventKey="1">Dropdown link</MenuItem>\n    <MenuItem eventKey="2">Dropdown link</MenuItem>\n  </DropdownButton>\n</ButtonGroup>;\n\nMoreover, you can have buttons be block level elements so they take the full width of their container, just add block to the <ButtonGroup />, in addition to the vertical you just added.\n\n<ButtonGroup vertical block>\n  <Button>Full width button</Button>\n  <Button>Full width button</Button>\n</ButtonGroup>;\n\nJustified button groups\nMake a group of buttons stretch at equal sizes to span the entire width of its parent. Also works with button dropdowns within the button group.\n\nStyle issues\nThere are some issues and workarounds required when using this property, please see bootstrap’s button group docs for more specifics.\n\nJust add justified to the <ButtonGroup />.\n\n<ButtonGroup justified>\n  <Button href="#">Left</Button>\n  <Button href="#">Middle</Button>\n  <DropdownButton title="Dropdown" id="bg-justified-dropdown">\n    <MenuItem eventKey="1">Dropdown link</MenuItem>\n    <MenuItem eventKey="2">Dropdown link</MenuItem>\n  </DropdownButton>\n</ButtonGroup>;\n\n#Checkbox / Radio\nFor checkboxes or radio buttons styled as Bootstrap buttons, use the<ToggleButtonGroup> and <ToggleButton>components. The group behaves as a form component, where the value is an array of the selected eventKeys for checkbox groups or the selected eventKey for radio groups.\n\nBootstrap JS issue\nThere is a known issue when including Bootstrap JS while using Toggle Button Groups. Therefore it is advised not use Bootstrap JS in conjunction with <ToggleButtonGroup> and <ToggleButton>.\n\nUncontrolled\n<div>\n  <ButtonToolbar>\n    <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]}>\n      <ToggleButton value={1}>Checkbox 1 (pre-checked)</ToggleButton>\n      <ToggleButton value={2}>Checkbox 2</ToggleButton>\n      <ToggleButton value={3}>Checkbox 3 (pre-checked)</ToggleButton>\n    </ToggleButtonGroup>\n  </ButtonToolbar>\n\n  <ButtonToolbar>\n    <ToggleButtonGroup type="radio" name="options" defaultValue={1}>\n      <ToggleButton value={1}>Radio 1 (pre-checked)</ToggleButton>\n      <ToggleButton value={2}>Radio 2</ToggleButton>\n      <ToggleButton value={3}>Radio 3</ToggleButton>\n    </ToggleButtonGroup>\n  </ButtonToolbar>\n</div>;\n\nControlled\nclass ToggleButtonGroupControlled extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.handleChange = this.handleChange.bind(this);\n\n    this.state = {\n      value: [1, 3]\n    };\n  }\n\n  handleChange(e) {\n    this.setState({ value: e });\n  }\n\n  render() {\n    return (\n      <ToggleButtonGroup\n        type="checkbox"\n        value={this.state.value}\n        onChange={this.handleChange}\n      >\n        <ToggleButton value={1}>Checkbox 1 (pre-checked)</ToggleButton>\n        <ToggleButton value={2}>Checkbox 2</ToggleButton>\n        <ToggleButton value={3}>Checkbox 3 (pre-checked)</ToggleButton>\n        <ToggleButton value={4} disabled>\n          Checkbox 4 (disabled)\n        </ToggleButton>\n      </ToggleButtonGroup>\n    );\n  }\n}\n\nrender(<ToggleButtonGroupControlled />);',
      id: 'gWepwMarJTpoK5kYY3VK',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'ButtonGroup'
    },
    {
      children: [],
      closeTag: false,
      componentImport: 'react-bootstrap/lib/Thumbnail',
      componentProps: [
        {
          description: 'src property that is passed down to the image inside this component',
          name: 'src',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        },
        {
          description: 'alt property that is passed down to the image inside this component',
          name: 'alt',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        },
        {
          description: 'href property that is passed down to the image inside this component',
          name: 'href',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        },
        {
          description: 'onError callback that is passed down to the image inside this component',
          name: 'onError',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'onLoad callback that is passed down to the image inside this component',
          name: 'onLoad',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'thumbnail\'',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        }
      ],
      description: 'Thumbnails are designed to showcase linked images with minimal required markup. You can extend the grid component with thumbnails.\n\n#Anchor Thumbnail\nCreates an anchor wrapping an image.\n\n<Grid>\n  <Row>\n    <Col xs={6} md={3}>\n      <Thumbnail href="#" alt="171x180" src="/thumbnail.png" />\n    </Col>\n    <Col xs={6} md={3}>\n      <Thumbnail href="#" alt="171x180" src="/thumbnail.png" />\n    </Col>\n    <Col xs={6} md={3}>\n      <Thumbnail href="#" alt="171x180" src="/thumbnail.png" />\n    </Col>\n  </Row>\n</Grid>;\n\nDivider Thumbnail\nCreates a divider wrapping an image and other children elements.\n\n<Grid>\n  <Row>\n    <Col xs={6} md={4}>\n      <Thumbnail src="/thumbnaildiv.png" alt="242x200">\n        <h3>Thumbnail label</h3>\n        <p>Description</p>\n        <p>\n          <Button bsStyle="primary">Button</Button>\n          &nbsp;\n          <Button bsStyle="default">Button</Button>\n        </p>\n      </Thumbnail>\n    </Col>\n    <Col xs={6} md={4}>\n      <Thumbnail src="/thumbnaildiv.png" alt="242x200">\n        <h3>Thumbnail label</h3>\n        <p>Description</p>\n        <p>\n          <Button bsStyle="primary">Button</Button>\n          &nbsp;\n          <Button bsStyle="default">Button</Button>\n        </p>\n      </Thumbnail>\n    </Col>\n    <Col xs={6} md={4}>\n      <Thumbnail src="/thumbnaildiv.png" alt="242x200">\n        <h3>Thumbnail label</h3>\n        <p>Description</p>\n        <p>\n          <Button bsStyle="primary">Button</Button>\n          &nbsp;\n          <Button bsStyle="default">Button</Button>\n        </p>\n      </Thumbnail>\n    </Col>\n  </Row>\n</Grid>;',
      id: 'gc94RK4XAoUsdRt30Dv2',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'Thumbnail'
    },
    {
      children: [],
      closeTag: false,
      componentImport: 'react-bootstrap/lib/PanelToggle',
      componentProps: [
        {
          description: 'You can use a custom element for this component\n\ndefault: SafeAnchor',
          name: 'componentClass',
          propType: 'PropTypes.element',
          propTypeIsrequired: false
        }
      ],
      description: 'Panel.Toggle',
      id: 'hS7Uja0jxaHZgQFo3JSU',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'Panel.Toggle'
    },
    {
      children: [],
      closeTag: false,
      componentImport: '-',
      componentProps: [
        {
          description: 'Used to style and layout the Slider. See StyleSheet.js and ViewStylePropTypes.js for more info.',
          name: 'style',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'If true the user won\'t be able to move the slider. Default value is false.',
          name: 'disabled',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'Initial maximum value of the slider. Default value is 1.',
          name: 'maximumValue',
          propType: 'PropTypes.number',
          propTypeIsrequired: false
        },
        {
          description: 'The color used for the track to the left of the button. Overrides the default blue gradient image on iOS.',
          name: 'minimumTrackTintColor',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Initial minimum value of the slider. Default value is 0.',
          name: 'minimumValue',
          propType: 'PropTypes.number',
          propTypeIsrequired: false
        },
        {
          description: 'Callback that is called when the user releases the slider, regardless if the value has changed. The current value is passed as an argument to the callback handler.',
          name: 'onSlidingComplete',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Callback continuously called while the user is dragging the slider.',
          name: 'onValueChange',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Step value of the slider. The value should be between 0 and (maximumValue - minimumValue). Default value is 0.',
          name: 'step',
          propType: 'PropTypes.number',
          propTypeIsrequired: false
        },
        {
          description: 'The color used for the track to the right of the button. Overrides the default gray gradient image on iOS.',
          name: 'maximumTrackTintColor',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Used to locate this view in UI automation tests.',
          name: 'testID',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Initial value of the slider. The value should be between minimumValue and maximumValue, which default to 0 and 1 respectively. Default value is 0.\n\nThis is not a controlled component, you don\'t need to update the value during dragging.',
          name: 'value',
          propType: 'PropTypes.number',
          propTypeIsrequired: false
        },
        {
          description: 'Color of the foreground switch grip.',
          name: 'thumbTintColor',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Assigns a maximum track image. Only static images are supported. The leftmost pixel of the image will be stretched to fill the track.\n\nType: Image.propTypes.source',
          name: 'maximumTrackImage',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Assigns a minimum track image. Only static images are supported. The rightmost pixel of the image will be stretched to fill the track.\n\nType: Image.propTypes.source',
          name: 'minimumTrackImage',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Sets an image for the thumb. Only static images are supported.\n\nType: Image.propTypes.source',
          name: 'thumbImage',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Assigns a single image for the track. Only static images are supported. The center pixel of the image will be stretched to fill the track.\n\nType: Image.propTypes.source',
          name: 'trackImage',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        }
      ],
      description: 'A component used to select a single value from a range of values.',
      id: 'hqn9ABubll32mSRsmQLV',
      isDefault: true,
      provider: 'ReactNative',
      techno: 'React Native',
      title: 'Slider'
    },
    {
      children: [],
      closeTag: false,
      componentImport: '-',
      componentProps: [
        {
          description: 'This is the distance between the top of the user screen and the react native view, may be non-zero in some use cases.',
          name: 'keyboardVerticalOffset',
          propType: 'PropTypes.number',
          propTypeIsrequired: false
        },
        {
          description: 'Note: Android and iOS both interact with this prop differently. Android may behave better when given no behavior prop at all, whereas iOS is the opposite.\n\nType: enum(\'height\', \'position\', \'padding\')',
          name: 'behavior',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'The style of the content container(View) when behavior is \'position\'.',
          name: 'contentContainerStyle',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Enabled or disabled KeyboardAvoidingView. The default is true.',
          name: 'enabled',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        }
      ],
      description: 'It is a component to solve the common problem of views that need to move out of the way of the virtual keyboard. It can automatically adjust either its position or bottom padding based on the position of the keyboard.\n\nExample usage:\n\nimport { KeyboardAvoidingView } from \'react-native\';\n\n<KeyboardAvoidingView style={styles.container} behavior="padding" enabled>\n  ... your UI ...\n</KeyboardAvoidingView>\n\n',
      id: 'iT09a7tjh1vOPtsdo0yE',
      isDefault: true,
      provider: 'ReactNative',
      techno: 'React Native',
      title: 'KeyboardAvoidingView'
    },
    {
      children: [],
      closeTag: true,
      componentImport: 'react-bootstrap/lib/InputGroup',
      componentProps: [
        {
          description: 'Component size variations.\n\none of: "lg", "large", "sm", "small"',
          name: 'bsSize',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: true
        },
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'input-group\'',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        }
      ],
      description: 'InputGroup',
      id: 'imE0dSv0F0j2OTGKPtsr',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'InputGroup'
    },
    {
      children: [],
      closeTag: true,
      componentImport: 'react-bootstrap/lib/ToggleButtonGroup',
      componentProps: [
        {
          description: 'An HTML <input> name for each child button.\n\nRequired if type is set to \'radio\'',
          name: 'name',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        },
        {
          description: 'The value, or array of values, of the active (pressed) buttons',
          name: 'value',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        },
        {
          description: 'Callback fired when a button is pressed, depending on whether the type is \'radio\' or \'checkbox\', onChange will be called with the value or array of active values',
          name: 'onChange',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'The input type of the rendered buttons, determines the toggle behavior of the buttons\n\ndefault: \'radio\'\n\none of: \'checkbox\', \'radio\'',
          name: 'type',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: true
        }
      ],
      description: 'ToggleButtonGroup',
      id: 'jDWlFdsxilAmdvIPHpck',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'ToggleButtonGroup'
    },
    {
      children: [],
      closeTag: true,
      componentImport: 'react-bootstrap/lib/Breadcrumb',
      componentProps: [],
      description: 'Breadcrumbs are used to indicate the current page\'s location. Add active attribute to active Breadcrumb.Item.\n\nDo not set both active and href attributes. active overrides href and span element is rendered instead of a.\n\n<Breadcrumb>\n  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>\n  <Breadcrumb.Item href="http://getbootstrap.com/components/#breadcrumbs">\n    Library\n  </Breadcrumb.Item>\n  <Breadcrumb.Item active>Data</Breadcrumb.Item>\n</Breadcrumb>;',
      id: 'k3VdpecMsRbVvTASGKzn',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'Breadcrumb'
    },
    {
      children: [],
      closeTag: false,
      componentImport: 'react-bootstrap/lib/CarouselCaption',
      componentProps: [
        {
          description: 'You can use a custom element type for this component.\n\ndefault: \'div\'',
          name: 'componentClass',
          propType: 'PropTypes.element',
          propTypeIsrequired: true
        },
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'carousel-caption\'',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        }
      ],
      description: 'Carousel.Caption',
      id: 'kc6wM6m8ALddmDvYSVv8',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'Carousel.Caption'
    },
    {
      children: [],
      componentImport: 'react-bootstrap/lib/ModalTitle',
      componentProps: [
        {
          description: 'You can use a custom element type for this component.',
          name: 'componentClass',
          propType: 'PropTypes.element',
          propTypeIsrequired: true
        },
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'modal-title\'',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        }
      ],
      description: 'Modal.Title',
      id: 'mqrK9kqyPNhM6hHgUwEp',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'Modal.Title'
    },
    {
      children: [],
      closeTag: true,
      componentImport: 'react-bootstrap/lib/TabPane',
      componentProps: [
        {
          description: 'Uniquely identify the <TabPane> among its siblings.',
          name: 'eventKey',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        },
        {
          description: 'Use animation when showing or hiding <TabPane>s. Use false to disable, true to enable the default <Fade> animation or a react-transition-group v2 <Transition/> component.',
          name: 'animation',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'tab-pane\'',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        },
        {
          description: 'Transition onEnter callback when animation is not false',
          name: 'onEnter',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'Transition onEntering callback when animation is not false',
          name: 'onEntering',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: '\t\nTransition onEntered callback when animation is not false',
          name: 'onEntered',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'Transition onExit callback when animation is not false',
          name: 'onExit',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'Transition onExiting callback when animation is not false',
          name: 'onExiting',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'Transition onExited callback when animation is not false',
          name: 'onExited',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'Wait until the first "enter" transition to mount the tab (add it to the DOM)',
          name: 'mountOnEnter',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'Unmount the tab (remove it from the DOM) when it is no longer visible',
          name: 'unmountOnExit',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        }
      ],
      description: 'TabPane',
      id: 'nHyxQBWFZMGYVDW7P8Lm',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'TabPane'
    },
    {
      children: [],
      componentImport: 'react-bootstrap/lib/TabContent',
      componentProps: [
        {
          description: 'You can use a custom element type for this component.\n\ndefault: \'div\'',
          name: 'componentClass',
          propType: 'PropTypes.element',
          propTypeIsrequired: true
        },
        {
          description: 'Sets a default animation strategy for all children <TabPane>s. Use false to disable, true to enable the default <Fade> animation or a react-transition-group v2 <Transition/> component.\n\ndefault: true',
          name: 'animation',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'Wait until the first "enter" transition to mount tabs (add them to the DOM)\n\ndefault: false',
          name: 'mountOnEnter',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'Unmount tabs (remove it from the DOM) when they are no longer visible\n\ndefault: false',
          name: 'unmountOnExit',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'tab\'',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        }
      ],
      description: 'TabContent',
      id: 'nPKhBy3nSydNjma6lxX0',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'TabContent'
    },
    {
      children: [],
      closeTag: false,
      componentImport: 'react-bootstrap/lib/CarouselItem',
      componentProps: [
        {
          description: 'direction',
          name: 'direction',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: true
        },
        {
          description: 'onAnimateOutEnd',
          name: 'onAnimateOutEnd',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'default: false',
          name: 'active',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'default: false',
          name: 'animateIn',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'default: false',
          name: 'animateOut',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'index',
          name: 'index',
          propType: 'PropTypes.number',
          propTypeIsrequired: true
        }
      ],
      description: 'CarouselItem',
      id: 'nn6lgRHDkYGV8QZOGb1G',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'Carousel.Item'
    },
    {
      children: [],
      componentImport: 'react-bootstrap/lib/PageItem',
      componentProps: [
        {
          description: 'default: fasle',
          name: 'disabled',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'default: fasle',
          name: 'previous',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'default: fasle',
          name: 'next',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'onClick',
          name: 'onClick',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'onSelect',
          name: 'onSelect',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'A unique identifier for the Component, the eventKey makes it distinguishable from others in a set. Similar to React\'s key prop, in that it only needs to be unique amoungst the Components siblings, not globally.',
          name: 'eventKey',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        }
      ],
      description: 'Pager.Item',
      id: 'o3RntWvdORJ16swg2h15',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'Pager.Item'
    },
    {
      children: [],
      componentImport: 'react-bootstrap/lib/PageHeader',
      componentProps: [
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'page-header\'',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        }
      ],
      description: '#Page header PageHeader\nA simple shell for an h1 to appropriately space out and segment sections of content on a page. It can utilize the h1’s default small element, as well as most other components (with additional styles).\n\n<PageHeader>\n  Example page header <small>Subtext for header</small>\n</PageHeader>;\n\n',
      id: 'pQGTASCkdQI7EJCRsDz3',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'PageHeader'
    },
    {
      children: [],
      componentImport: 'react-bootstrap/lib/FormGroup',
      componentProps: [
        {
          description: 'Sets id on <FormControl> and htmlFor on <FormGroup.Label>.',
          name: 'controlId',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        },
        {
          description: 'one of: \'success\', \'warning\', \'error\', null',
          name: 'validationState',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: true
        },
        {
          description: 'Component size variations.\n\none of: "lg", "large", "sm", "small"',
          name: 'bsSize',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: true
        },
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'form-group\'',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        }
      ],
      description: '#Forms FormGroup, FormControl, ControlLabel\nThe <FormControl> component renders a form control with Bootstrap styling. The <FormGroup> component wraps a form control with proper spacing, along with support for a label, help text, and validation state. To ensure accessibility, set controlId on <FormGroup>, and use <ControlLabel> for the label.\n\nclass FormExample extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.handleChange = this.handleChange.bind(this);\n\n    this.state = {\n      value: \'\'\n    };\n  }\n\n  getValidationState() {\n    const length = this.state.value.length;\n    if (length > 10) return \'success\';\n    else if (length > 5) return \'warning\';\n    else if (length > 0) return \'error\';\n    return null;\n  }\n\n  handleChange(e) {\n    this.setState({ value: e.target.value });\n  }\n\n  render() {\n    return (\n      <form>\n        <FormGroup\n          controlId="formBasicText"\n          validationState={this.getValidationState()}\n        >\n          <ControlLabel>Working example with validation</ControlLabel>\n          <FormControl\n            type="text"\n            value={this.state.value}\n            placeholder="Enter text"\n            onChange={this.handleChange}\n          />\n          <FormControl.Feedback />\n          <HelpBlock>Validation is based on string length.</HelpBlock>\n        </FormGroup>\n      </form>\n    );\n  }\n}\n\nrender(<FormExample />);\n\nThe <FormControl> component directly renders the <input> or other specified component. If you need to access the value of an uncontrolled <FormControl>, attach a ref to it as you would with an uncontrolled input, then call ReactDOM.findDOMNode(ref) to get the DOM node. You can then interact with that node as you would with any other uncontrolled input.\n\nIf your application contains a large number of form groups, we recommend building a higher-level component encapsulating a complete field group that renders the label, the control, and any other necessary components. We don\'t provide this out-of-the-box, because the composition of those field groups is too specific to an individual application to admit a good one-size-fits-all solution.\n\n',
      id: 'pl8eHzTdrIfDx2Fy8gfV',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'FormGroup'
    },
    {
      children: [],
      closeTag: true,
      componentImport: '-',
      componentProps: [
        {
          description: 'The target destination of a link.',
          name: 'href',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'The browsing context in which the target destination should open.',
          name: 'target',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Indicates that the target should be downloaded instead of navigated to.',
          name: 'download',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'The relationship between the link’s page and the link’s target destination.',
          name: 'rel',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'className',
          name: 'className',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        }
      ],
      description: 'Anchor. Primarily used as a hypertext link. The link can be to another page, a part of a page or any other location on the web.',
      id: 'qIhVQYGIOE7A8dAxD24J',
      isDefault: false,
      provider: 'HTML',
      techno: 'React',
      title: 'a'
    },
    {
      children: [],
      componentImport: 'react-bootstrap/lib/Pager',
      componentProps: [
        {
          description: 'onSelect',
          name: 'onSelect',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: pager',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        }
      ],
      description: '#Pager Pager, Pager.Item\nQuick previous and next links.\n\n#Centers by default\n\n<Pager>\n  <Pager.Item href="#">Previous</Pager.Item>{\' \'}\n  <Pager.Item href="#">Next</Pager.Item>\n</Pager>;\n\n#Aligned\nSet the previous or next prop to true, to align left or right.\n\n<Pager>\n  <Pager.Item previous href="#">\n    &larr; Previous Page\n  </Pager.Item>\n  <Pager.Item next href="#">\n    Next Page &rarr;\n  </Pager.Item>\n</Pager>;\n\n#Disabled\nSet the disabled prop to true to disable the link.\n\n<Pager>\n  <Pager.Item previous href="#">\n    &larr; Previous\n  </Pager.Item>\n  <Pager.Item disabled next href="#">\n    Next &rarr;\n  </Pager.Item>\n</Pager>;\n\n',
      id: 'qeziNddJ766T2Vks8YuR',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'Pager'
    },
    {
      children: [],
      closeTag: false,
      componentImport: '-',
      componentProps: [
        {
          description: 'Whether the view should be indicating an active refresh.',
          name: 'refreshing',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'Called when the view starts refreshing.',
          name: 'onRefresh',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'The colors (at least one) that will be used to draw the refresh indicator.',
          name: 'colors',
          propType: 'PropTypes.array',
          propTypeIsrequired: false
        },
        {
          description: 'Whether the pull to refresh functionality is enabled.',
          name: 'enabled',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'The background color of the refresh indicator.',
          name: 'progressBackgroundColor',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Progress view top offset',
          name: 'progressViewOffset',
          propType: 'PropTypes.number',
          propTypeIsrequired: false
        },
        {
          description: 'Size of the refresh indicator, see RefreshControl.SIZE.\n\nType: enum(RefreshLayoutConsts.SIZE.DEFAULT, RefreshLayoutConsts.SIZE.LARGE)',
          name: 'size',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'The color of the refresh indicator.',
          name: 'tintColor',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'The title displayed under the refresh indicator.',
          name: 'title',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Title color.',
          name: 'titleColor',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        }
      ],
      description: 'This component is used inside a ScrollView or ListView to add pull to refresh functionality. When the ScrollView is at scrollY: 0, swiping down triggers an onRefresh event.\n\nUsage example\nclass RefreshableList extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      refreshing: false,\n    };\n  }\n\n  _onRefresh = () => {\n    this.setState({refreshing: true});\n    fetchData().then(() => {\n      this.setState({refreshing: false});\n    });\n  }\n\n  render() {\n    return (\n      <ScrollView\n        refreshControl={\n          <RefreshControl\n            refreshing={this.state.refreshing}\n            onRefresh={this._onRefresh}\n          />\n        }\n        ...\n      />\n    );\n  }\n  ...\n}\nNote: refreshing is a controlled prop, this is why it needs to be set to true in the onRefresh function otherwise the refresh indicator will stop immediately.',
      id: 'qyPI4z1mNK2VUOTgQF5x',
      isDefault: true,
      provider: 'ReactNative',
      techno: 'React Native',
      title: 'RefreshControl'
    },
    {
      children: [],
      componentImport: 'react-bootstrap/lib/ModalHeader',
      componentProps: [
        {
          description: 'Provides an accessible label for the close button. It is used for Assistive Technology when the label text is not readable.\n\ndefault: \'Close\'',
          name: 'closeLabel',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        },
        {
          description: 'Specify whether the Component should contain a close button\n\ndefault: false',
          name: 'closeButton',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'A Callback fired when the close button is clicked. If used directly inside a Modal component, the onHide will automatically be propagated up to the parent Modal onHide.',
          name: 'onHide',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \t\'modal-header\'',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        }
      ],
      description: 'Modal.Header',
      id: 'r1TLuQYfe7M3xTfZuOSi',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'Modal.Header'
    },
    {
      children: [],
      closeTag: true,
      componentImport: '-',
      componentProps: [
        {
          description: 'className',
          name: 'className',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        }
      ],
      description: 'h3',
      id: 'rLNTUyLrmfjR0jQHLw1w',
      isDefault: false,
      provider: 'HTML',
      techno: 'React',
      title: 'h3'
    },
    {
      children: [],
      closeTag: false,
      componentImport: '-',
      componentProps: [
        {
          description: 'If the transition between status bar property changes should be animated. Supported for backgroundColor, barStyle and hidden.',
          name: 'animated',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'Sets the color of the status bar text.\n\nType: enum(\'default\', \'light-content\', \'dark-content\')',
          name: 'barStyle',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'If the status bar is hidden.',
          name: 'hidden',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'The background color of the status bar.',
          name: 'backgroundColor',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'If the status bar is translucent. When translucent is set to true, the app will draw under the status bar. This is useful when using a semi transparent status bar color.',
          name: 'translucent',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'If the network activity indicator should be visible.',
          name: 'networkActivityIndicatorVisible',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'The transition effect when showing and hiding the status bar using the hidden prop. Defaults to \'fade\'.\n\nenum(\'fade\', \'slide\')',
          name: 'showHideTransition',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        }
      ],
      description: 'Component to control the app status bar.\n\nUsage with Navigator\nIt is possible to have multiple StatusBar components mounted at the same time. The props will be merged in the order the StatusBar components were mounted.\n\n <View>\n   <StatusBar\n     backgroundColor="blue"\n     barStyle="light-content"\n   />\n   <View>\n     <StatusBar hidden={route.statusBarHidden} />\n     ...\n   </View>\n </View>\nImperative API\nFor cases where using a component is not ideal, there is also an imperative API exposed as static functions on the component. It is however not recommended to use the static API and the component for the same prop because any value set by the static API will get overriden by the one set by the component in the next render.\n\nConstants\ncurrentHeight (Android only) The height of the status bar.',
      id: 'sMUag98N1CJb0jqRnVPI',
      isDefault: true,
      provider: 'ReactNative',
      techno: 'React Native',
      title: 'StatusBar'
    },
    {
      children: [],
      closeTag: true,
      componentImport: 'react-bootstrap/lib/Panel',
      componentProps: [
        {
          description: 'Controls the collapsed/expanded state ofthe Panel. Requires a Panel.Collapse or <Panel.Body collapsible> child component in order to actually animate out or in.',
          name: 'expanded',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'A callback fired when the collapse state changes.',
          name: 'onToggle',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'A unique identifier for the Component, the eventKey makes it distinguishable from others in a set. Similar to React\'s key prop, in that it only needs to be unique amoungst the Components siblings, not globally.',
          name: 'eventKey',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'An HTML id attribute uniquely identifying the Panel component.',
          name: 'id',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        }
      ],
      description: '#Panels Panel, PanelGroup, Accordion\n#Basic example\nBy default, all the <Panel /> does is apply a basic border and padding to contain some content.\n\nYou can pass on any additional properties you need, e.g. a custom onClick handler, as it is shown in the example code. They all will apply to the wrapper div element.\n\nfunction handleClick() {\n  alert(\'You have clicked on me\');\n}\n\nconst panelInstance = (\n  <Panel onClick={handleClick}>\n    <Panel.Body>Basic panel example</Panel.Body>\n  </Panel>\n);\n\nrender(panelInstance);\n\n#Panel with heading\nEasily add a heading container to your panel with the <Panel.Heading> and <Panel.Title> sub-components.\n\n<div>\n  <Panel>\n    <Panel.Heading>Panel heading without a title</Panel.Heading>\n    <Panel.Body>Panel content</Panel.Body>\n  </Panel>\n  <Panel>\n    <Panel.Heading>\n      <Panel.Title componentClass="h3">Panel heading with a title</Panel.Title>\n    </Panel.Heading>\n    <Panel.Body>Panel content</Panel.Body>\n  </Panel>\n</div>;\n\nPanel with footer\nPass buttons or secondary text in the <Panel.Footer> sub-component. Note that panel footers do not inherit colors and borders when using contextual variations as they are not meant to be in the foreground.\n\n<Panel>\n  <Panel.Body>Panel content</Panel.Body>\n  <Panel.Footer>Panel footer</Panel.Footer>\n</Panel>;\n\n#Contextual alternatives\nLike other components, easily make a panel more meaningful to a particular context by adding a bsStyle prop.\n\n<div>\n  <Panel bsStyle="primary">\n    <Panel.Heading>\n      <Panel.Title componentClass="h3">Panel heading</Panel.Title>\n    </Panel.Heading>\n    <Panel.Body>Panel content</Panel.Body>\n  </Panel>\n\n  <Panel bsStyle="success">\n    <Panel.Heading>\n      <Panel.Title componentClass="h3">Panel heading</Panel.Title>\n    </Panel.Heading>\n    <Panel.Body>Panel content</Panel.Body>\n  </Panel>\n\n  <Panel bsStyle="info">\n    <Panel.Heading>\n      <Panel.Title componentClass="h3">Panel heading</Panel.Title>\n    </Panel.Heading>\n    <Panel.Body>Panel content</Panel.Body>\n  </Panel>\n\n  <Panel bsStyle="warning">\n    <Panel.Heading>\n      <Panel.Title componentClass="h3">Panel heading</Panel.Title>\n    </Panel.Heading>\n    <Panel.Body>Panel content</Panel.Body>\n  </Panel>\n\n  <Panel bsStyle="danger">\n    <Panel.Heading>\n      <Panel.Title componentClass="h3">Panel heading</Panel.Title>\n    </Panel.Heading>\n    <Panel.Body>Panel content</Panel.Body>\n  </Panel>\n</div>;\n\n#With tables and list groups\nAdd any <Table />, <ListGroup /> to a panel for a seamless integration. Mix and match with Panel.Body as needed.\n\n<Panel>\n  <Panel.Heading>Panel heading</Panel.Heading>\n  <Panel.Body>Some default panel content here.</Panel.Body>\n  <ListGroup>\n    <ListGroupItem>Item 1</ListGroupItem>\n    <ListGroupItem>Item 2</ListGroupItem>\n    <ListGroupItem>&hellip;</ListGroupItem>\n  </ListGroup>\n  <Panel.Body>Some more panel content here.</Panel.Body>\n</Panel>;\n\n#Collapsible Panel\nclass Example extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.state = {\n      open: true\n    };\n  }\n\n  render() {\n    return (\n      <div>\n        <Button onClick={() => this.setState({ open: !this.state.open })}>\n          Click to toggle\n        </Button>\n        <br />\n        <Panel id="collapsible-panel-example-1" expanded={this.state.open}>\n          <Panel.Collapse>\n            <Panel.Body>\n              Anim pariatur cliche reprehenderit, enim eiusmod high life\n              accusamus terry richardson ad squid. Nihil anim keffiyeh\n              helvetica, craft beer labore wes anderson cred nesciunt sapiente\n              ea proident.\n            </Panel.Body>\n          </Panel.Collapse>\n        </Panel>\n\n        <p>You can also make the Panel heading toggle the collapse.</p>\n\n        <Panel id="collapsible-panel-example-2" defaultExpanded>\n          <Panel.Heading>\n            <Panel.Title toggle>\n              Title that functions as a collapse toggle\n            </Panel.Title>\n          </Panel.Heading>\n          <Panel.Collapse>\n            <Panel.Body>\n              Anim pariatur cliche reprehenderit, enim eiusmod high life\n              accusamus terry richardson ad squid. Nihil anim keffiyeh\n              helvetica, craft beer labore wes anderson cred nesciunt sapiente\n              ea proident.\n            </Panel.Body>\n          </Panel.Collapse>\n        </Panel>\n\n        <p>Or use a Panel.Toggle component to customize</p>\n\n        <Panel id="collapsible-panel-example-3" defaultExpanded>\n          <Panel.Heading>\n            <Panel.Title>Title that functions as a collapse toggle</Panel.Title>\n            <Panel.Toggle componentClass="a">My own toggle</Panel.Toggle>\n          </Panel.Heading>\n          <Panel.Collapse>\n            <Panel.Body>\n              Anim pariatur cliche reprehenderit, enim eiusmod high life\n              accusamus terry richardson ad squid. Nihil anim keffiyeh\n              helvetica, craft beer labore wes anderson cred nesciunt sapiente\n              ea proident.\n            </Panel.Body>\n          </Panel.Collapse>\n        </Panel>\n      </div>\n    );\n  }\n}\n\nrender(<Example />);\n\n#Controlled PanelGroups\nPanelGroups can be controlled by a parent component. The activeKey prop dictates which panel is open.\n\nclass ControlledPanelGroup extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.handleSelect = this.handleSelect.bind(this);\n\n    this.state = {\n      activeKey: \'1\'\n    };\n  }\n\n  handleSelect(activeKey) {\n    this.setState({ activeKey });\n  }\n\n  render() {\n    return (\n      <PanelGroup\n        accordion\n        id="accordion-controlled-example"\n        activeKey={this.state.activeKey}\n        onSelect={this.handleSelect}\n      >\n        <Panel eventKey="1">\n          <Panel.Heading>\n            <Panel.Title toggle>Panel heading 1</Panel.Title>\n          </Panel.Heading>\n          <Panel.Body collapsible>Panel content 1</Panel.Body>\n        </Panel>\n        <Panel eventKey="2">\n          <Panel.Heading>\n            <Panel.Title toggle>Panel heading 2</Panel.Title>\n          </Panel.Heading>\n          <Panel.Body collapsible>Panel content 2</Panel.Body>\n        </Panel>\n      </PanelGroup>\n    );\n  }\n}\n\nrender(<ControlledPanelGroup />);\n\n#Uncontrolled PanelGroups\nPanelGroups can also be uncontrolled where they manage their own state. The defaultActiveKey prop dictates which panel is open when initially.\n\n<PanelGroup accordion id="accordion-uncontrolled-example" defaultActiveKey="2">\n  <Panel eventKey="1">\n    <Panel.Heading>\n      <Panel.Title toggle>Panel heading 1</Panel.Title>\n    </Panel.Heading>\n    <Panel.Body collapsible>Panel content 1</Panel.Body>\n  </Panel>\n  <Panel eventKey="2">\n    <Panel.Heading>\n      <Panel.Title toggle>Panel heading 2</Panel.Title>\n    </Panel.Heading>\n    <Panel.Body collapsible>Panel content 2</Panel.Body>\n  </Panel>\n</PanelGroup>;\n\n#Accordions\nUse <PanelGroup accordion /> to create an accordion style collapsing Panel set\n\n<PanelGroup accordion id="accordion-example">\n  <Panel eventKey="1">\n    <Panel.Heading>\n      <Panel.Title toggle>Collapsible Group Item #1</Panel.Title>\n    </Panel.Heading>\n    <Panel.Body collapsible>\n      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry\n      richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard\n      dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf\n      moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla\n      assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore\n      wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur\n      butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim\n      aesthetic synth nesciunt you probably haven\'t heard of them accusamus\n      labore sustainable VHS.\n    </Panel.Body>\n  </Panel>\n  <Panel eventKey="2">\n    <Panel.Heading>\n      <Panel.Title toggle>Collapsible Group Item #2</Panel.Title>\n    </Panel.Heading>\n    <Panel.Body collapsible>\n      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry\n      richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard\n      dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf\n      moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla\n      assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore\n      wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur\n      butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim\n      aesthetic synth nesciunt you probably haven\'t heard of them accusamus\n      labore sustainable VHS.\n    </Panel.Body>\n  </Panel>\n  <Panel eventKey="3">\n    <Panel.Heading>\n      <Panel.Title toggle>Collapsible Group Item #3</Panel.Title>\n    </Panel.Heading>\n    <Panel.Body collapsible>\n      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry\n      richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard\n      dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf\n      moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla\n      assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore\n      wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur\n      butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim\n      aesthetic synth nesciunt you probably haven\'t heard of them accusamus\n      labore sustainable VHS.\n    </Panel.Body>\n  </Panel>\n</PanelGroup>;\n',
      id: 'sTpjWLBEA4AnGgEFzNV7',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'Panel'
    },
    {
      children: [],
      closeTag: false,
      componentImport: '-',
      componentProps: [
        {
          description: 'Callback for when an item is selected. This is called with the following parameters:\n\nitemValue: the value prop of the item that was selected\nitemPosition: the index of the selected item in this picker',
          name: 'onValueChange',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Value matching value of one of the items. Can be a string or an integer.',
          name: 'selectedValue',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'style',
          name: 'style',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Used to locate this view in end-to-end tests.',
          name: 'testID',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'If set to false, the picker will be disabled, i.e. the user will not be able to make a selection.',
          name: 'enabled',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'On Android, specifies how to display the selection items when the user taps on the picker:\n\n\'dialog\': Show a modal dialog. This is the default.\n\'dropdown\': Shows a dropdown anchored to the picker view\n\nType: enum(\'dialog\', \'dropdown\')',
          name: 'mode',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'Prompt string for this picker, used on Android in dialog mode as the title of the dialog.',
          name: 'prompt',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Style to apply to each of the item labels.',
          name: 'itemStyle',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        }
      ],
      description: 'Renders the native picker component on iOS and Android. Example:\n\n<Picker\n  selectedValue={this.state.language}\n  style={{ height: 50, width: 100 }}\n  onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>\n  <Picker.Item label="Java" value="java" />\n  <Picker.Item label="JavaScript" value="js" />\n</Picker>',
      id: 'sbS4hHTWOyNdcmPn95w7',
      isDefault: true,
      provider: 'ReactNative',
      techno: 'React Native',
      title: 'Picker'
    },
    {
      children: [],
      closeTag: false,
      componentImport: 'react-bootstrap/lib/NavbarBrand',
      componentProps: [],
      description: 'Navbar.Brand',
      id: 't2FggUXxb7HCS5s6Sy0d',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'Navbar.Brand'
    },
    {
      children: [],
      closeTag: true,
      componentImport: '-',
      componentProps: [
        {
          description: 'className',
          name: 'className',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        }
      ],
      description: 'A generic container for a text or inline HTML. Lending no additional meaning, it is typically used as scaffolding to hang CSS on or for JavaScript to reach out to.',
      id: 't4AcKwRBQ6slXwKtd1Af',
      isDefault: false,
      provider: 'HTML',
      techno: 'React',
      title: 'span'
    },
    {
      children: [],
      closeTag: true,
      componentImport: 'react-bootstrap/lib/Popover',
      componentProps: [
        {
          description: '\t\nAn html id attribute, necessary for accessibility',
          name: 'id',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Sets the direction the Popover is positioned towards.\n\ndefault: \'right\'\n\none of: \'top\', \'right\', \'bottom\', \'left\'',
          name: 'placement',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'The "top" position value for the Popover.',
          name: 'positionTop',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'The "left" position value for the Popover.',
          name: 'positionLeft',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'The "top" position value for the Popover arrow.',
          name: 'arrowOffsetTop',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'The "left" position value for the Popover arrow.',
          name: 'arrowOffsetLeft',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Title content',
          name: 'title',
          propType: 'PropTypes.node',
          propTypeIsrequired: false
        },
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'popover\'',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        }
      ],
      description: '#Popovers Popover\nThe Popover, offers a more robust alternative to the Tooltip for displaying overlays of content.\n\n<div style={{ height: 120 }}>\n  <Popover\n    id="popover-basic"\n    placement="right"\n    positionLeft={200}\n    positionTop={50}\n    title="Popover right"\n  >\n    And here\'s some <strong>amazing</strong> content. It\'s very engaging. right?\n  </Popover>\n</div>;\n\n#With OverlayTrigger\nThe Popover component, like the Tooltip can be used with an OverlayTrigger Component, and positioned around it.\n\nconst popoverLeft = (\n  <Popover id="popover-positioned-left" title="Popover left">\n    <strong>Holy guacamole!</strong> Check this info.\n  </Popover>\n);\n\nconst popoverTop = (\n  <Popover id="popover-positioned-top" title="Popover top">\n    <strong>Holy guacamole!</strong> Check this info.\n  </Popover>\n);\n\nconst popoverBottom = (\n  <Popover id="popover-positioned-bottom" title="Popover bottom">\n    <strong>Holy guacamole!</strong> Check this info.\n  </Popover>\n);\n\nconst popoverRight = (\n  <Popover id="popover-positioned-right" title="Popover right">\n    <strong>Holy guacamole!</strong> Check this info.\n  </Popover>\n);\n\nrender(\n  <ButtonToolbar>\n    <OverlayTrigger trigger="click" placement="left" overlay={popoverLeft}>\n      <Button>Holy guacamole!</Button>\n    </OverlayTrigger>\n    <OverlayTrigger trigger="click" placement="top" overlay={popoverTop}>\n      <Button>Holy guacamole!</Button>\n    </OverlayTrigger>\n    <OverlayTrigger trigger="click" placement="bottom" overlay={popoverBottom}>\n      <Button>Holy guacamole!</Button>\n    </OverlayTrigger>\n    <OverlayTrigger trigger="click" placement="right" overlay={popoverRight}>\n      <Button>Holy guacamole!</Button>\n    </OverlayTrigger>\n  </ButtonToolbar>\n);\n\n#Trigger behaviors\nIt\'s inadvisable to use "hover" or "focus" triggers for popovers, because they have poor accessibility from keyboard and on mobile devices.\n\nconst popoverClick = (\n  <Popover id="popover-trigger-click" title="Popover bottom">\n    <strong>Holy guacamole!</strong> Check this info.\n  </Popover>\n);\n\nconst popoverHoverFocus = (\n  <Popover id="popover-trigger-hover-focus" title="Popover bottom">\n    <strong>Holy guacamole!</strong> Check this info.\n  </Popover>\n);\n\nconst popoverFocus = (\n  <Popover id="popover-trigger-focus" title="Popover bottom">\n    <strong>Holy guacamole!</strong> Check this info.\n  </Popover>\n);\n\nconst popoverClickRootClose = (\n  <Popover id="popover-trigger-click-root-close" title="Popover bottom">\n    <strong>Holy guacamole!</strong> Check this info.\n  </Popover>\n);\n\nrender(\n  <ButtonToolbar>\n    <OverlayTrigger trigger="click" placement="bottom" overlay={popoverClick}>\n      <Button>Click</Button>\n    </OverlayTrigger>\n    <OverlayTrigger\n      trigger={[\'hover\', \'focus\']}\n      placement="bottom"\n      overlay={popoverHoverFocus}\n    >\n      <Button>Hover + Focus</Button>\n    </OverlayTrigger>\n    <OverlayTrigger trigger="focus" placement="bottom" overlay={popoverFocus}>\n      <Button>Focus</Button>\n    </OverlayTrigger>\n    <OverlayTrigger\n      trigger="click"\n      rootClose\n      placement="bottom"\n      overlay={popoverClickRootClose}\n    >\n      <Button>Click w/rootClose</Button>\n    </OverlayTrigger>\n  </ButtonToolbar>\n);\n\n#Popover component in container\nSpecify container to control the DOM element to which to append the overlay. This element must be a positioned element to allow correctly positioning the overlay.\n\nclass Example extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.handleClick = e => {\n      this.setState({ target: e.target, show: !this.state.show });\n    };\n\n    this.state = {\n      show: false\n    };\n  }\n\n  render() {\n    return (\n      <ButtonToolbar>\n        <Button onClick={this.handleClick}>Holy guacamole!</Button>\n\n        <Overlay\n          show={this.state.show}\n          target={this.state.target}\n          placement="bottom"\n          container={this}\n          containerPadding={20}\n        >\n          <Popover id="popover-contained" title="Popover bottom">\n            <strong>Holy guacamole!</strong> Check this info.\n          </Popover>\n        </Overlay>\n      </ButtonToolbar>\n    );\n  }\n}\n\nrender(<Example />);\n\n#Positioned popover components in scrolling container\n\nconst popoverLeft = (\n  <Popover id="popover-positioned-scrolling-left" title="Popover left">\n    <strong>Holy guacamole!</strong> Check this info.\n  </Popover>\n);\n\nconst popoverTop = (\n  <Popover id="popover-positioned-scrolling-top" title="Popover top">\n    <strong>Holy guacamole!</strong> Check this info.\n  </Popover>\n);\n\nconst popoverBottom = (\n  <Popover id="popover-positioned-scrolling-bottom" title="Popover bottom">\n    <strong>Holy guacamole!</strong> Check this info.\n  </Popover>\n);\n\nconst popoverRight = (\n  <Popover id="popover-positioned-scrolling-right" title="Popover right">\n    <strong>Holy guacamole!</strong> Check this info.\n  </Popover>\n);\n\nclass Positioner extends React.Component {\n  render() {\n    return (\n      <ButtonToolbar style={{ padding: \'100px 0\' }}>\n        <OverlayTrigger\n          container={this}\n          trigger="click"\n          placement="left"\n          overlay={popoverLeft}\n        >\n          <Button>Holy guacamole!</Button>\n        </OverlayTrigger>\n        <OverlayTrigger\n          container={this}\n          trigger="click"\n          placement="top"\n          overlay={popoverTop}\n        >\n          <Button>Holy guacamole!</Button>\n        </OverlayTrigger>\n        <OverlayTrigger\n          container={this}\n          trigger="click"\n          placement="bottom"\n          overlay={popoverBottom}\n        >\n          <Button>Holy guacamole!</Button>\n        </OverlayTrigger>\n        <OverlayTrigger\n          container={this}\n          trigger="click"\n          placement="right"\n          overlay={popoverRight}\n        >\n          <Button>Holy guacamole!</Button>\n        </OverlayTrigger>\n      </ButtonToolbar>\n    );\n  }\n}\n\nrender(<Positioner />);',
      id: 'tFqEwwd9iDvgH55hVkdT',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'Popover'
    },
    {
      children: [],
      closeTag: false,
      componentImport: '-',
      componentProps: [
        {
          description: '(info: any) => ?React.Element<any>\nTakes an item from data and renders it into the list',
          name: 'renderItem',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'The default accessor functions assume this is an array of objects with shape {key: string} but you can override getItem, getItemCount, and keyExtractor to handle any type of index-based data.',
          name: 'data',
          propType: 'PropTypes.array',
          propTypeIsrequired: true
        },
        {
          description: '(data: any, index: number) => object;\nA generic accessor for extracting an item from any sort of data blob.',
          name: 'getItem',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: '(data: any) => number;\nDetermines how many items are in the data blob.',
          name: 'getItemCount',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'debug will turn on extra logging and visual overlays to aid with debugging both usage and implementation, but with a significant perf hit.',
          name: 'debug',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'A marker property for telling the list to re-render (since it implements PureComponent). If any of your renderItem, Header, Footer, etc. functions depend on anything outside of the data prop, stick it here and treat it immutably.',
          name: 'extraData',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: '(\n    data: any,\n    index: number,\n  ) => {length: number, offset: number, index: number}',
          name: 'getItemLayout',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Instead of starting at the top with the first item, start at initialScrollIndex. This disables the "scroll to top" optimization that keeps the first initialNumToRender items always rendered and immediately renders the items starting at this initial index. Requires getItemLayout to be implemented.',
          name: 'initialScrollIndex',
          propType: 'PropTypes.number',
          propTypeIsrequired: false
        },
        {
          description: 'Reverses the direction of scroll. Uses scale transforms of -1.',
          name: 'inverted',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'Each cell is rendered using this element. Can be a React Component Class,or a render function. Defaults to using View.',
          name: 'CellRendererComponent',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Rendered when the list is empty. Can be a React Component Class, a render function, or a rendered element.',
          name: 'ListEmptyComponent',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Rendered at the bottom of all the items. Can be a React Component Class, a render function, or a rendered element.',
          name: 'ListFooterComponent',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Rendered at the top of all the items. Can be a React Component Class, a render function, or a rendered element.',
          name: 'ListHeaderComponent',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'onLayout',
          name: 'onLayout',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: '() => void\nIf provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly.',
          name: 'onRefresh',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: '(info: {\n    index: number,\n    highestMeasuredFrameIndex: number,\n    averageItemLength: number,\n  }) => void\nUsed to handle failures when scrolling to an index that has not been measured yet. Recommended action is to either compute your own offset and scrollTo it, or scroll as far as possible and then try again after more items have been rendered.\n\n',
          name: 'onScrollToIndexFailed',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: '(info: {\n    viewableItems: array,\n    changed: array,\n  }) => void\nCalled when the viewability of rows changes, as defined by the viewabilityConfig prop.',
          name: 'onViewableItemsChanged',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Set this true while waiting for new data from a refresh.',
          name: 'refreshing',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'This may improve scroll performance for large lists.\n\nNote: May have bugs (missing content) in some circumstances - use at your own risk.',
          name: 'removeClippedSubviews',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: '(props: object) => element;\nRender a custom scroll component, e.g. with a differently styled RefreshControl.',
          name: 'renderScrollComponent',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'See ViewabilityHelper.js for flow type and further documentation.\n\ntYPE: ViewabilityConfig',
          name: 'viewabilityConfig',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'List of ViewabilityConfig/onViewableItemsChanged pairs. A specific onViewableItemsChanged will be called when its corresponding ViewabilityConfig\'s conditions are met. See ViewabilityHelper.js for flow type and further documentation.\n\narray of ViewabilityConfigCallbackPair',
          name: 'viewabilityConfigCallbackPairs',
          propType: 'PropTypes.array',
          propTypeIsrequired: false
        },
        {
          description: 'horizontal',
          name: 'horizontal',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'How many items to render in the initial batch. This should be enough to fill the screen but not much more. Note these items will never be unmounted as part of the windowed rendering in order to improve perceived performance of scroll-to-top actions.',
          name: 'initialNumToRender',
          propType: 'PropTypes.number',
          propTypeIsrequired: false
        },
        {
          description: '(item: object, index: number) => string;\nUsed to extract a unique key for a given item at the specified index. Key is used for caching and as the react key to track item re-ordering. The default extractor checks item.key, then falls back to using the index, like React does.',
          name: 'keyExtractor',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'The maximum number of items to render in each incremental render batch. The more rendered at once, the better the fill rate, but responsiveness may suffer because rendering content may interfere with responding to button taps or other interactions.',
          name: 'maxToRenderPerBatch',
          propType: 'PropTypes.number',
          propTypeIsrequired: false
        },
        {
          description: '(info: {distanceFromEnd: number}) => void\nCalled once when the scroll position gets within onEndReachedThreshold of the rendered content.',
          name: 'onEndReached',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'How far from the end (in units of visible length of the list) the bottom edge of the list must be from the end of the content to trigger the onEndReached callback. Thus a value of 0.5 will trigger onEndReached when the end of the content is within half the visible length of the list.',
          name: 'onEndReachedThreshold',
          propType: 'PropTypes.number',
          propTypeIsrequired: false
        },
        {
          description: 'Amount of time between low-pri item render batches, e.g. for rendering items quite a ways off screen. Similar fill rate/responsiveness tradeoff as maxToRenderPerBatch.',
          name: 'updateCellsBatchingPeriod',
          propType: 'PropTypes.number',
          propTypeIsrequired: false
        },
        {
          description: 'Determines the maximum number of items rendered outside of the visible area, in units of visible lengths. So if your list fills the screen, then windowSize={21} (the default) will render the visible screen area plus up to 10 screens above and 10 below the viewport. Reducing this number will reduce memory consumption and may improve performance, but will increase the chance that fast scrolling may reveal momentary blank areas of unrendered content.\n\n',
          name: 'windowSize',
          propType: 'PropTypes.number',
          propTypeIsrequired: false
        },
        {
          description: 'Set this when offset is needed for the loading indicator to show correctly.',
          name: 'progressViewOffset',
          propType: 'PropTypes.number',
          propTypeIsrequired: false
        }
      ],
      description: 'Base implementation for the more convenient <FlatList> and <SectionList> components, which are also better documented. In general, this should only really be used if you need more flexibility than FlatList provides, e.g. for use with immutable data instead of plain arrays.\n\nVirtualization massively improves memory consumption and performance of large lists by maintaining a finite render window of active items and replacing all items outside of the render window with appropriately sized blank space. The window adapts to scrolling behavior, and items are rendered incrementally with low-pri (after any running interactions) if they are far from the visible area, or with hi-pri otherwise to minimize the potential of seeing blank space.\n\nSome caveats:\n\nInternal state is not preserved when content scrolls out of the render window. Make sure all your data is captured in the item data or external stores like Flux, Redux, or Relay.\nThis is a PureComponent which means that it will not re-render if props remain shallow- equal. Make sure that everything your renderItem function depends on is passed as a prop (e.g. extraData) that is not === after updates, otherwise your UI may not update on changes. This includes the data prop and parent component state.\nIn order to constrain memory and enable smooth scrolling, content is rendered asynchronously offscreen. This means it\'s possible to scroll faster than the fill rate and momentarily see blank content. This is a tradeoff that can be adjusted to suit the needs of each application, and we are working on improving it behind the scenes.\nBy default, the list looks for a key prop on each item and uses that for the React key. Alternatively, you can provide a custom keyExtractor prop.',
      id: 'tUt8yuIqGjWxpqeu2wl3',
      isDefault: true,
      provider: 'ReactNative',
      techno: 'React Native',
      title: 'VirtualizedList'
    },
    {
      children: [],
      closeTag: false,
      componentImport: '-',
      componentProps: [
        {
          description: 'Lets the user select text, to use the native copy and paste functionality.',
          name: 'selectable',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not obvious from the accessibility label.',
          name: 'accessibilityHint',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Overrides the text that\'s read by the screen reader when the user interacts with the element. By default, the label is constructed by traversing all the children and accumulating all the Text nodes separated by space.',
          name: 'accessibilityLabel',
          propType: 'PropTypes.node',
          propTypeIsrequired: false
        },
        {
          description: 'When set to true, indicates that the view is an accessibility element. The default value for a Text element is true.\n\nSee the Accessibility guide for more information.',
          name: 'accessible',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'When numberOfLines is set, this prop defines how text will be truncated. numberOfLines must be set in conjunction with this prop.\n\nThis can be one of the following values:\n\nhead - The line is displayed so that the end fits in the container and the missing text at the beginning of the line is indicated by an ellipsis glyph. e.g., "...wxyz"\nmiddle - The line is displayed so that the beginning and end fit in the container and the missing text in the middle is indicated by an ellipsis glyph. "ab...yz"\ntail - The line is displayed so that the beginning fits in the container and the missing text at the end of the line is indicated by an ellipsis glyph. e.g., "abcd..."\nclip - Lines are not drawn past the edge of the text container.\nThe default is tail.\n\nenum(\'head\', \'middle\', \'tail\', \'clip\')',
          name: 'ellipsizeMode',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'Used to locate this view from native code.',
          name: 'nativeID',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Used to truncate the text with an ellipsis after computing the text layout, including line wrapping, such that the total number of lines does not exceed this number.\n\nThis prop is commonly used with ellipsizeMode.',
          name: 'numberOfLines',
          propType: 'PropTypes.number',
          propTypeIsrequired: false
        },
        {
          description: 'Invoked on mount and layout changes with\n\n{nativeEvent: {layout: {x, y, width, height}}}',
          name: 'onLayout',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'This function is called on long press.\n\ne.g., onLongPress={this.increaseSize}>',
          name: 'onLongPress',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'This function is called on press.\n\ne.g., onPress={() => console.log(\'1st\')}',
          name: 'onPress',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'When the scroll view is disabled, this defines how far your touch may move off of the button, before deactivating the button. Once deactivated, try moving it back and you\'ll see that the button is once again reactivated! Move it back and forth several times while the scroll view is disabled. Ensure you pass in a constant to reduce memory allocations.\n\nobject: {top: number, left: number, bottom: number, right: number}',
          name: 'pressRetentionOffset',
          propType: 'PropTypes.object',
          propTypeIsrequired: false
        },
        {
          description: 'Specifies whether fonts should scale to respect Text Size accessibility settings. The default is true.',
          name: 'allowFontScaling',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'style',
          name: 'style',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Used to locate this view in end-to-end tests.',
          name: 'testID',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        }
      ],
      description: 'A React component for displaying text.\n\nText supports nesting, styling, and touch handling.\n\nIn the following example, the nested title and body text will inherit the fontFamily from styles.baseText, but the title provides its own additional styles. The title and body will stack on top of each other on account of the literal newlines:\n\nimport React, { Component } from \'react\';\nimport { AppRegistry, Text, StyleSheet } from \'react-native\';\n\nexport default class TextInANest extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      titleText: "Bird\'s Nest",\n      bodyText: \'This is not really a bird nest.\'\n    };\n  }\n\n  render() {\n    return (\n      <Text style={styles.baseText}>\n        <Text style={styles.titleText} onPress={this.onPressTitle}>\n          {this.state.titleText}{\'\\n\'}{\'\\n\'}\n        </Text>\n        <Text numberOfLines={5}>\n          {this.state.bodyText}\n        </Text>\n      </Text>\n    );\n  }\n}\n\nconst styles = StyleSheet.create({\n  baseText: {\n    fontFamily: \'Cochin\',\n  },\n  titleText: {\n    fontSize: 20,\n    fontWeight: \'bold\',\n  },\n});\n\n// skip this line if using Create React Native App\nAppRegistry.registerComponent(\'TextInANest\', () => TextInANest);\n\nNested text\nBoth iOS and Android allow you to display formatted text by annotating ranges of a string with specific formatting like bold or colored text (NSAttributedString on iOS, SpannableString on Android). In practice, this is very tedious. For React Native, we decided to use web paradigm for this where you can nest text to achieve the same effect.\n\nimport React, { Component } from \'react\';\nimport { AppRegistry, Text } from \'react-native\';\n\nexport default class BoldAndBeautiful extends Component {\n  render() {\n    return (\n      <Text style={{fontWeight: \'bold\'}}>\n        I am bold\n        <Text style={{color: \'red\'}}>\n          and red\n        </Text>\n      </Text>\n    );\n  }\n}\n\n// skip this line if using Create React Native App\nAppRegistry.registerComponent(\'AwesomeProject\', () => BoldAndBeautiful);\n\n\nBehind the scenes, React Native converts this to a flat NSAttributedString or SpannableString that contains the following information:\n\n"I am bold and red"\n0-9: bold\n9-17: bold, red\nNested views (iOS only)\nOn iOS, you can nest views within your Text component. Here\'s an example:\n\nimport React, { Component } from \'react\';\nimport { AppRegistry, Text, View } from \'react-native\';\n\nexport default class BlueIsCool extends Component {\n  render() {\n    return (\n      <Text>\n        There is a blue square\n        <View style={{width: 50, height: 50, backgroundColor: \'steelblue\'}} />\n        in between my text.\n      </Text>\n    );\n  }\n}\n\n// skip this line if using Create React Native App\nAppRegistry.registerComponent(\'AwesomeProject\', () => BlueIsCool);\n\nIn order to use this feature, you must give the view a width and a height.\n\nContainers\nThe <Text> element is special relative to layout: everything inside is no longer using the flexbox layout but using text layout. This means that elements inside of a <Text> are no longer rectangles, but wrap when they see the end of the line.\n\n<Text>\n  <Text>First part and </Text>\n  <Text>second part</Text>\n</Text>\n// Text container: all the text flows as if it was one\n// |First part |\n// |and second |\n// |part       |\n\n<View>\n  <Text>First part and </Text>\n  <Text>second part</Text>\n</View>\n// View container: each text is its own block\n// |First part |\n// |and        |\n// |second part|\nLimited Style Inheritance\nOn the web, the usual way to set a font family and size for the entire document is to take advantage of inherited CSS properties like so:\n\nhtml {\n  font-family: \'lucida grande\', tahoma, verdana, arial, sans-serif;\n  font-size: 11px;\n  color: #141823;\n}\nAll elements in the document will inherit this font unless they or one of their parents specifies a new rule.\n\nIn React Native, we are more strict about it: you must wrap all the text nodes inside of a <Text> component. You cannot have a text node directly under a <View>.\n\n// BAD: will raise exception, can\'t have a text node as child of a <View>\n<View>\n  Some text\n</View>\n\n// GOOD\n<View>\n  <Text>\n    Some text\n  </Text>\n</View>\nYou also lose the ability to set up a default font for an entire subtree. The recommended way to use consistent fonts and sizes across your application is to create a component MyAppText that includes them and use this component across your app. You can also use this component to make more specific components like MyAppHeaderText for other kinds of text.\n\n<View>\n  <MyAppText>\n    Text styled with the default font for the entire application\n  </MyAppText>\n  <MyAppHeaderText>Text styled as a header</MyAppHeaderText>\n</View>\nAssuming that MyAppText is a component that simply renders out its children into a Text component with styling, then MyAppHeaderText can be defined as follows:\n\nclass MyAppHeaderText extends Component {\n  render() {\n    return (\n      <MyAppText>\n        <Text style={{fontSize: 20}}>{this.props.children}</Text>\n      </MyAppText>\n    );\n  }\n}\nComposing MyAppText in this way ensures that we get the styles from a top-level component, but leaves us the ability to add / override them in specific use cases.\n\nReact Native still has the concept of style inheritance, but limited to text subtrees. In this case, the second part will be both bold and red.\n\n<Text style={{fontWeight: \'bold\'}}>\n  I am bold\n  <Text style={{color: \'red\'}}>and red</Text>\n</Text>\nWe believe that this more constrained way to style text will yield better apps:\n\n(Developer) React components are designed with strong isolation in mind: You should be able to drop a component anywhere in your application, trusting that as long as the props are the same, it will look and behave the same way. Text properties that could inherit from outside of the props would break this isolation.\n\n(Implementor) The implementation of React Native is also simplified. We do not need to have a fontFamily field on every single element, and we do not need to potentially traverse the tree up to the root every time we display a text node. The style inheritance is only encoded inside of the native Text component and doesn\'t leak to other components or the system itself.',
      id: 'v9PsHv1IsgoFIT42Osh7',
      isDefault: true,
      provider: 'ReactNative',
      techno: 'React Native',
      title: 'Text'
    },
    {
      children: [],
      closeTag: false,
      componentImport: '-',
      componentProps: [],
      description: 'The purpose of SafeAreaView is to render content within the safe area boundaries of a device. It is currently only applicable to iOS devices with iOS version 11 or later.\n\nSafeAreaView renders nested content and automatically applies paddings to reflect the portion of the view that is not covered by navigation bars, tab bars, toolbars, and other ancestor views. Moreover, and most importantly, Safe Area\'s paddings reflect the physical limitation of the screen, such as rounded corners or camera notches (i.e. the sensor housing area on iPhone X).\n\nUsage Example\nSimply wrap your top level view with a SafeAreaView with a flex: 1 style applied to it. You may also want to use a background color that matches your application\'s design.\n\n<SafeAreaView style={{flex: 1, backgroundColor: \'#fff\'}}>\n  <View style={{flex: 1}}>\n    <Text>Hello World!</Text>\n  </View>\n</SafeAreaView>',
      id: 'vOiATZP57vkVOFzWEWvI',
      isDefault: true,
      provider: 'ReactNative',
      techno: 'React Native',
      title: 'SafeAreaView'
    },
    {
      children: [],
      closeTag: true,
      componentImport: '-',
      componentProps: [
        {
          description: 'className',
          name: 'className',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        }
      ],
      description: 'h2',
      id: 'vvzFz9XULbtRCoDwaJZA',
      isDefault: false,
      provider: 'HTML',
      techno: 'React',
      title: 'h2'
    },
    {
      children: [],
      closeTag: false,
      componentImport: '-',
      componentProps: [
        {
          description: 'Determines what the opacity of the wrapped view should be when touch is active. Defaults to 0.2.',
          name: 'activeOpacity',
          propType: 'PropTypes.number',
          propTypeIsrequired: false
        },
        {
          description: '(Apple TV only) Object with properties to control Apple TV parallax effects.\n\nenabled: If true, parallax effects are enabled. Defaults to true. shiftDistanceX: Defaults to 2.0. shiftDistanceY: Defaults to 2.0. tiltAngle: Defaults to 0.05. magnification: Defaults to 1.0. pressMagnification: Defaults to 1.0. pressDuration: Defaults to 0.3. pressDelay: Defaults to 0.0.',
          name: 'tvParallaxProperties',
          propType: 'PropTypes.object',
          propTypeIsrequired: false
        },
        {
          description: '(Apple TV only) TV preferred focus (see documentation for the View component).',
          name: 'hasTVPreferredFocus',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        }
      ],
      description: 'A wrapper for making views respond properly to touches. On press down, the opacity of the wrapped view is decreased, dimming it.\n\nOpacity is controlled by wrapping the children in an Animated.View, which is added to the view hierarchy. Be aware that this can affect layout.\n\nExample:\n\nrenderButton: function() {\n  return (\n    <TouchableOpacity onPress={this._onPressButton}>\n      <Image\n        style={styles.button}\n        source={require(\'./myButton.png\')}\n      />\n    </TouchableOpacity>\n  );\n},\n\nimport React, { Component } from \'react\'\nimport {\n  AppRegistry,\n  StyleSheet,\n  TouchableOpacity,\n  Text,\n  View,\n} from \'react-native\'\n\nclass App extends Component {\n  constructor(props) {\n    super(props)\n    this.state = { count: 0 }\n  }\n\n  onPress = () => {\n    this.setState({\n      count: this.state.count+1\n    })\n  }\n\n render() {\n   return (\n     <View style={styles.container}>\n       <TouchableOpacity\n         style={styles.button}\n         onPress={this.onPress}\n       >\n         <Text> Touch Here </Text>\n       </TouchableOpacity>\n       <View style={[styles.countContainer]}>\n         <Text style={[styles.countText]}>\n            { this.state.count !== 0 ? this.state.count: null}\n          </Text>\n        </View>\n      </View>\n    )\n  }\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: \'center\',\n    paddingHorizontal: 10\n  },\n  button: {\n    alignItems: \'center\',\n    backgroundColor: \'#DDDDDD\',\n    padding: 10\n  },\n  countContainer: {\n    alignItems: \'center\',\n    padding: 10\n  },\n  countText: {\n    color: \'#FF00FF\'\n  }\n})\n\nAppRegistry.registerComponent(\'App\', () => App)',
      id: 'w0fMsYPO6sJYPeoheDkQ',
      isDefault: true,
      provider: 'ReactNative',
      techno: 'React Native',
      title: 'TouchableOpacity'
    },
    {
      children: [],
      closeTag: false,
      componentImport: 'react-bootstrap/lib/Well',
      componentProps: [
        {
          description: 'Component size variations.',
          name: 'bsSize',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: true
        },
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'well\'',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        }
      ],
      description: 'Use the well as a simple effect on an element to give it an inset effect.\n\n<Well>Look I\'m in a well!</Well>;\n\nOptional classes\nControl padding and rounded corners with two optional modifier classes.\n\n<div>\n  <Well bsSize="large">Look I\'m in a large well!</Well>\n  <Well bsSize="small">Look I\'m in a small well!</Well>\n</div>;\n\n',
      id: 'wBme7p3E5m2mLjFzmDAY',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'Well'
    },
    {
      children: [],
      closeTag: true,
      componentImport: 'react-bootstrap/lib/Dropdown',
      componentProps: [
        {
          description: 'The menu will open above the dropdown button, instead of below it.',
          name: 'dropup',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'An html id attribute, necessary for assistive technologies, such as screen readers.',
          name: 'id',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        },
        {
          description: 'You can use a custom element type for this component.\n\ndefault: ButtonGroup',
          name: 'componentClass',
          propType: 'PropTypes.element',
          propTypeIsrequired: true
        },
        {
          description: '\t\nThe children of a Dropdown may be a <Dropdown.Toggle> or a <Dropdown.Menu>.',
          name: 'children',
          propType: 'PropTypes.node',
          propTypeIsrequired: true
        },
        {
          description: 'Whether or not component is disabled.',
          name: 'disabled',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'Align the menu to the right side of the Dropdown toggle',
          name: 'pullRight',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'Whether or not the Dropdown is visible.',
          name: 'open',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'defaultOpen',
          name: 'defaultOpen',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'A callback fired when the Dropdown wishes to change visibility. Called with the requested open value, the DOM event, and the source that fired it: \'click\',\'keydown\',\'rootClose\', or \'select\'.\n\nfunction(Boolean isOpen, Object event, { String source }) {}',
          name: 'onToggle',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'Which event when fired outside the component will cause it to be closed\n\nNote: For custom dropdown components, you will have to pass the rootCloseEvent to <RootCloseWrapper> in your custom dropdown menu component (similarly to how it is implemented in <Dropdown.Menu>).\n\none of: \'click\', \'mousedown\'',
          name: 'onSelect',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: true
        }
      ],
      description: '#Dropdowns DropdownButton, SplitButton, Dropdown\n#Single button dropdowns\nCreate a dropdown button with the <DropdownButton /> component.\n\nconst BUTTONS = [\'Default\', \'Primary\', \'Success\', \'Info\', \'Warning\', \'Danger\'];\n\nfunction renderDropdownButton(title, i) {\n  return (\n    <DropdownButton\n      bsStyle={title.toLowerCase()}\n      title={title}\n      key={i}\n      id={`dropdown-basic-${i}`}\n    >\n      <MenuItem eventKey="1">Action</MenuItem>\n      <MenuItem eventKey="2">Another action</MenuItem>\n      <MenuItem eventKey="3" active>\n        Active Item\n      </MenuItem>\n      <MenuItem divider />\n      <MenuItem eventKey="4">Separated link</MenuItem>\n    </DropdownButton>\n  );\n}\n\nconst buttonsInstance = (\n  <ButtonToolbar>{BUTTONS.map(renderDropdownButton)}</ButtonToolbar>\n);\n\nrender(buttonsInstance);\n\n#Split button dropdowns\nSimilarly, create split button dropdowns with the <SplitButton /> component.\n\nconst BUTTONS = [\'Default\', \'Primary\', \'Success\', \'Info\', \'Warning\', \'Danger\'];\n\nfunction renderDropdownButton(title, i) {\n  return (\n    <SplitButton\n      bsStyle={title.toLowerCase()}\n      title={title}\n      key={i}\n      id={`split-button-basic-${i}`}\n    >\n      <MenuItem eventKey="1">Action</MenuItem>\n      <MenuItem eventKey="2">Another action</MenuItem>\n      <MenuItem eventKey="3">Something else here</MenuItem>\n      <MenuItem divider />\n      <MenuItem eventKey="4">Separated link</MenuItem>\n    </SplitButton>\n  );\n}\n\nconst buttonsInstance = (\n  <ButtonToolbar>{BUTTONS.map(renderDropdownButton)}</ButtonToolbar>\n);\n\nrender(buttonsInstance);\n\n#Sizing\nDropdowns work with buttons of all sizes.\n\n<div>\n  <ButtonToolbar>\n    <DropdownButton\n      bsSize="large"\n      title="Large button"\n      id="dropdown-size-large"\n    >\n      <MenuItem eventKey="1">Action</MenuItem>\n      <MenuItem eventKey="2">Another action</MenuItem>\n      <MenuItem eventKey="3">Something else here</MenuItem>\n      <MenuItem divider />\n      <MenuItem eventKey="4">Separated link</MenuItem>\n    </DropdownButton>\n  </ButtonToolbar>\n\n  <ButtonToolbar>\n    <DropdownButton title="Default button" id="dropdown-size-medium">\n      <MenuItem eventKey="1">Action</MenuItem>\n      <MenuItem eventKey="2">Another action</MenuItem>\n      <MenuItem eventKey="3">Something else here</MenuItem>\n      <MenuItem divider />\n      <MenuItem eventKey="4">Separated link</MenuItem>\n    </DropdownButton>\n  </ButtonToolbar>\n\n  <ButtonToolbar>\n    <DropdownButton\n      bsSize="small"\n      title="Small button"\n      id="dropdown-size-small"\n    >\n      <MenuItem eventKey="1">Action</MenuItem>\n      <MenuItem eventKey="2">Another action</MenuItem>\n      <MenuItem eventKey="3">Something else here</MenuItem>\n      <MenuItem divider />\n      <MenuItem eventKey="4">Separated link</MenuItem>\n    </DropdownButton>\n  </ButtonToolbar>\n\n  <ButtonToolbar>\n    <DropdownButton\n      bsSize="xsmall"\n      title="Extra small button"\n      id="dropdown-size-extra-small"\n    >\n      <MenuItem eventKey="1">Action</MenuItem>\n      <MenuItem eventKey="2">Another action</MenuItem>\n      <MenuItem eventKey="3">Something else here</MenuItem>\n      <MenuItem divider />\n      <MenuItem eventKey="4">Separated link</MenuItem>\n    </DropdownButton>\n  </ButtonToolbar>\n</div>;\n\n#No caret variation\nRemove the caret using the noCaret prop.\n\n<ButtonToolbar>\n  <DropdownButton\n    bsStyle="default"\n    title="No caret"\n    noCaret\n    id="dropdown-no-caret"\n  >\n    <MenuItem eventKey="1">Action</MenuItem>\n    <MenuItem eventKey="2">Another action</MenuItem>\n    <MenuItem eventKey="3">Something else here</MenuItem>\n    <MenuItem divider />\n    <MenuItem eventKey="4">Separated link</MenuItem>\n  </DropdownButton>\n</ButtonToolbar>;\n\n#Dropup variation\nTrigger dropdown menus that site above the button by adding the dropup prop.\n\n<div>\n  <ButtonToolbar>\n    <SplitButton title="Dropup" dropup id="split-button-dropup">\n      <MenuItem eventKey="1">Action</MenuItem>\n      <MenuItem eventKey="2">Another action</MenuItem>\n      <MenuItem eventKey="3">Something else here</MenuItem>\n      <MenuItem divider />\n      <MenuItem eventKey="4">Separated link</MenuItem>\n    </SplitButton>\n  </ButtonToolbar>\n\n  <ButtonToolbar>\n    <SplitButton\n      bsStyle="primary"\n      title="Right dropup"\n      dropup\n      pullRight\n      id="split-button-dropup-pull-right"\n    >\n      <MenuItem eventKey="1">Action</MenuItem>\n      <MenuItem eventKey="2">Another action</MenuItem>\n      <MenuItem eventKey="3">Something else here</MenuItem>\n      <MenuItem divider />\n      <MenuItem eventKey="4">Separated link</MenuItem>\n    </SplitButton>\n  </ButtonToolbar>\n</div>;\n\n#Dropdown right variation\nTrigger dropdown menus that align to the right of the button using the pullRight prop.\n\n<SplitButton title="Dropdown right" pullRight id="split-button-pull-right">\n  <MenuItem eventKey="1">Action</MenuItem>\n  <MenuItem eventKey="2">Another action</MenuItem>\n  <MenuItem eventKey="3">Something else here</MenuItem>\n  <MenuItem divider />\n  <MenuItem eventKey="4">Separated link</MenuItem>\n</SplitButton>;\n\n#Menu items MenuItem\nThis component represents a menu item in a dropdown.\n\nIt supports the basic anchor properties href, target, title.\n\nIt also supports different properties of the normal Bootstrap MenuItem.\n\nheader: To add a header label to sections\ndivider: Adds an horizontal divider between sections\ndisabled: shows the item as disabled, and prevents onSelect from firing\neventKey: passed to the callback\nonSelect: a callback that is called when the user clicks the item.\nThe callback is called with the following arguments: eventKey and event\n\nfunction onSelectAlert(eventKey) {\n  alert(`Alert from menu item.\\neventKey: ${eventKey}`);\n}\n\nconst MenuItems = (\n  <Clearfix>\n    <ul className="dropdown-menu open">\n      <MenuItem header>Header</MenuItem>\n      <MenuItem>link</MenuItem>\n      <MenuItem divider />\n      <MenuItem header>Header</MenuItem>\n      <MenuItem>link</MenuItem>\n      <MenuItem disabled>disabled</MenuItem>\n      <MenuItem title="See? I have a title.">link with title</MenuItem>\n      <MenuItem eventKey={1} href="#someHref" onSelect={onSelectAlert}>\n        link that alerts\n      </MenuItem>\n    </ul>\n  </Clearfix>\n);\n\nrender(MenuItems);\n\n#Dropdown Customization\nIf the default handling of the dropdown menu and toggle components aren\'t to your liking, you can customize them, by using the more basic Dropdown Component to explicitly specify the Toggle and Menu components\n\nAdditional Import Options\nAs a convenience Toggle and Menu components available as static properties on the Dropdown component. However, you can also import them directly, from the /lib directory like: require("react-bootstrap/lib/DropdownToggle").\n\n<ButtonToolbar>\n  <Dropdown id="dropdown-custom-1">\n    <Dropdown.Toggle>\n      <Glyphicon glyph="star" />\n      Pow! Zoom!\n    </Dropdown.Toggle>\n    <Dropdown.Menu className="super-colors">\n      <MenuItem eventKey="1">Action</MenuItem>\n      <MenuItem eventKey="2">Another action</MenuItem>\n      <MenuItem eventKey="3" active>\n        Active Item\n      </MenuItem>\n      <MenuItem divider />\n      <MenuItem eventKey="4">Separated link</MenuItem>\n    </Dropdown.Menu>\n  </Dropdown>\n\n  <Dropdown id="dropdown-custom-2">\n    <Button bsStyle="info">mix it up style-wise</Button>\n    <Dropdown.Toggle bsStyle="success" />\n    <Dropdown.Menu className="super-colors">\n      <MenuItem eventKey="1">Action</MenuItem>\n      <MenuItem eventKey="2">Another action</MenuItem>\n      <MenuItem eventKey="3" active>\n        Active Item\n      </MenuItem>\n      <MenuItem divider />\n      <MenuItem eventKey="4">Separated link</MenuItem>\n    </Dropdown.Menu>\n  </Dropdown>\n</ButtonToolbar>;\n\nCustom Dropdown Components\nFor those that want to customize everything, you can forgo the included Toggle and Menu components, and create your own. In order to tell the Dropdown component what role your custom components play, add a special prop bsRole to your menu or toggle components. The Dropdown expects at least one component with bsRole="toggle" and exactly one with bsRole="menu". Custom toggle and menu components must be able to accept refs.\n\nUsing rootCloseEvent with custom dropdown components\nIf you want to use the rootCloseEvent prop with your custom dropdown components, you will have to pass the rootCloseEvent to <RootCloseWrapper> in your custom dropdown menu component similarly to how it is implemented in <Dropdown.Menu>.\n\nYou will have to add react-overlays as a dependency and import <RootCloseWrapper> from react-overlays yourself like: import RootCloseWrapper from \'react-overlays/lib/RootCloseWrapper\'.\n\nclass CustomToggle extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.handleClick = this.handleClick.bind(this);\n  }\n\n  handleClick(e) {\n    e.preventDefault();\n\n    this.props.onClick(e);\n  }\n\n  render() {\n    return (\n      <a href="" onClick={this.handleClick}>\n        {this.props.children}\n      </a>\n    );\n  }\n}\n\nclass CustomMenu extends React.Component {\n  constructor(props, context) {\n    super(props, context);\n\n    this.handleChange = this.handleChange.bind(this);\n\n    this.state = {\n      value: \'\'\n    };\n  }\n\n  handleChange(e) {\n    this.setState({ value: e.target.value });\n  }\n\n  focusNext() {\n    const input = ReactDOM.findDOMNode(this.input);\n\n    if (input) {\n      input.focus();\n    }\n  }\n\n  render() {\n    const { children } = this.props;\n    const { value } = this.state;\n\n    return (\n      <div className="dropdown-menu" style={{ padding: \'\' }}>\n        <FormControl\n          ref={c => {\n            this.input = c;\n          }}\n          type="text"\n          placeholder="Type to filter..."\n          onChange={this.handleChange}\n          value={value}\n        />\n        <ul className="list-unstyled">\n          {React.Children.toArray(children).filter(\n            child => !value.trim() || child.props.children.indexOf(value) !== -1\n          )}\n        </ul>\n      </div>\n    );\n  }\n}\n\nrender(\n  <Dropdown id="dropdown-custom-menu">\n    <CustomToggle bsRole="toggle">Custom toggle</CustomToggle>\n\n    <CustomMenu bsRole="menu">\n      <MenuItem eventKey="1">Red</MenuItem>\n      <MenuItem eventKey="2">Blue</MenuItem>\n      <MenuItem eventKey="3" active>\n        Orange\n      </MenuItem>\n      <MenuItem eventKey="1">Red-Orange</MenuItem>\n    </CustomMenu>\n  </Dropdown>\n);',
      id: 'wGzOd67czzPSMgxR5Bga',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'Dropdown'
    },
    {
      children: [],
      closeTag: false,
      componentImport: '-',
      componentProps: [
        {
          description: 'If true the user won\'t be able to toggle the switch. Default value is false.',
          name: 'disabled',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'Custom colors for the switch track.\n\niOS: When the switch value is false, the track shrinks into the border. If you want to change the color of the background exposed by the shrunken track, use ios_backgroundColor.\n\nobject: {false: color, true: color}',
          name: 'trackColor',
          propType: 'PropTypes.object',
          propTypeIsrequired: false
        },
        {
          description: 'On iOS, custom color for the background. This background color can be seen either when the switch value is false or when the switch is disabled (and the switch is translucent).',
          name: 'ios_backgroundColor',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Invoked with the new value when the value changes.',
          name: 'onValueChange',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'Used to locate this view in end-to-end tests.',
          name: 'testID',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Color of the foreground switch grip. If this is set on iOS, the switch grip will lose its drop shadow.',
          name: 'thumbColor',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'The value of the switch. If true the switch will be turned on. Default value is false.',
          name: 'value',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        }
      ],
      description: 'Renders a boolean input.\n\nThis is a controlled component that requires an onValueChange callback that updates the value prop in order for the component to reflect user actions. If the value prop is not updated, the component will continue to render the supplied value prop instead of the expected result of any user actions.',
      id: 'zKnBxj8y73fgcKPcwiSt',
      isDefault: true,
      provider: 'ReactNative',
      techno: 'React Native',
      title: 'Switch'
    },
    {
      children: [],
      closeTag: false,
      componentImport: '-',
      componentProps: [
        {
          description: 'Whether to show the ProgressBar (true, the default) or hide it (false).',
          name: 'animating',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'Color of the progress bar.',
          name: 'color',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'If the progress bar will show indeterminate progress. Note that this can only be false if styleAttr is Horizontal.',
          name: 'indeterminate',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'The progress value (between 0 and 1).',
          name: 'progress',
          propType: 'PropTypes.number',
          propTypeIsrequired: false
        },
        {
          description: 'Style of the ProgressBar. One of:\n\nHorizontal\nNormal (default)\nSmall\nLarge\nInverse\nSmallInverse\nLargeInverse\n\nType: enum(\'Horizontal\', \'Normal\', \'Small\', \'Large\', \'Inverse\', \'SmallInverse\', \'LargeInverse\')\n',
          name: 'styleAttr',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'Used to locate this view in end-to-end tests.',
          name: 'testID',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        }
      ],
      description: 'Android-only React component used to indicate that the app is loading or there is some activity in the app.\n\nExample:\n\nimport React, { Component } from "react";\nimport {\n  ProgressBarAndroid,\n  AppRegistry,\n  StyleSheet,\n  View\n} from "react-native";\n\nexport default class App extends Component {\n  render() {\n    return (\n      <View style={styles.container}>\n        <ProgressBarAndroid />\n        <ProgressBarAndroid styleAttr="Horizontal" />\n        <ProgressBarAndroid styleAttr="Horizontal" color="#2196F3" />\n        <ProgressBarAndroid\n          styleAttr="Horizontal"\n          indeterminate={false}\n          progress={0.5}\n        />\n      </View>\n    );\n  }\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: "space-evenly",\n    padding: 10\n  }\n});\n\nAppRegistry.registerComponent("App", () => App);',
      id: 'zdwfyP6JSl9rlH7H2tBJ',
      isDefault: true,
      provider: 'ReactNative',
      techno: 'React Native',
      title: 'ProgressBarAndroid'
    },
    {
      children: [],
      closeTag: false,
      componentImport: '-',
      componentProps: [
        {
          description: 'The currently selected date.',
          name: 'date',
          propType: 'PropTypes.instanceOf()',
          propTypeIsrequired: true
        },
        {
          description: 'Date change handler.\n\nThis is called when the user changes the date or time in the UI. The first and only argument is a Date object representing the new date and time.\n\n',
          name: 'onDateChange',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'Maximum date.\n\nRestricts the range of possible date/time values.',
          name: 'maximumDate',
          propType: 'PropTypes.instanceOf()',
          propTypeIsrequired: false
        },
        {
          description: 'Minimum date.\n\nRestricts the range of possible date/time values.',
          name: 'minimumDate',
          propType: 'PropTypes.instanceOf()',
          propTypeIsrequired: false
        },
        {
          description: 'The interval at which minutes can be selected.',
          name: 'minuteInterval',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'The date picker mode.\n\nType: enum(\'date\', \'time\', \'datetime\')',
          name: 'mode',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'The locale for the date picker. Value needs to be a Locale ID.',
          name: 'locale',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Timezone offset in minutes.\n\nBy default, the date picker will use the device\'s timezone. With this parameter, it is possible to force a certain timezone offset. For instance, to show times in Pacific Standard Time, pass -7 * 60.',
          name: 'timeZoneOffsetInMinutes',
          propType: 'PropTypes.number',
          propTypeIsrequired: false
        }
      ],
      description: 'Use DatePickerIOS to render a date/time picker (selector) on iOS. This is a controlled component, so you must hook in to the onDateChange callback and update the date prop in order for the component to update, otherwise the user\'s change will be reverted immediately to reflect props.date as the source of truth.\n\nExample\nimport React, { Component } from \'react\'\nimport {\n  DatePickerIOS,\n  View,\n  StyleSheet,\n} from \'react-native\'\n\nexport default class App extends Component {\n  constructor(props) {\n    super(props);\n    this.state = { chosenDate: new Date() };\n\n    this.setDate = this.setDate.bind(this);\n  }\n\n  setDate(newDate) {\n    this.setState({chosenDate: newDate})\n  }\n\n  render() {\n    return (\n      <View style={styles.container}>\n        <DatePickerIOS\n          date={this.state.chosenDate}\n          onDateChange={this.setDate}\n        />\n      </View>\n    )\n  }\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: \'center\'\n  },\n})',
      id: 'zfpJHOMJWkqPZLQV9tpZ',
      isDefault: true,
      provider: 'ReactNative',
      techno: 'React Native',
      title: 'DatePickerIOS'
    },
    {
      children: [],
      closeTag: false,
      componentImport: 'react-bootstrap/lib/Table',
      componentProps: [
        {
          description: 'striped\n\ndefault: false',
          name: 'striped',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'bordered\n\ndefault: false',
          name: 'bordered',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'default: false',
          name: 'condensed',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'default: false',
          name: 'hover',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'default: false',
          name: 'responsive',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'table\'',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        }
      ],
      description: '#Tables Table\nUse the striped, bordered, condensed and hover props to customise the table.\n\n<Table striped bordered condensed hover>\n  <thead>\n    <tr>\n      <th>#</th>\n      <th>First Name</th>\n      <th>Last Name</th>\n      <th>Username</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>1</td>\n      <td>Mark</td>\n      <td>Otto</td>\n      <td>@mdo</td>\n    </tr>\n    <tr>\n      <td>2</td>\n      <td>Jacob</td>\n      <td>Thornton</td>\n      <td>@fat</td>\n    </tr>\n    <tr>\n      <td>3</td>\n      <td colSpan="2">Larry the Bird</td>\n      <td>@twitter</td>\n    </tr>\n  </tbody>\n</Table>;\n\n#Responsive\nAdd responsive prop to make them scroll horizontally up to small devices (under 768px). When viewing on anything larger than 768px wide, you will not see any difference in these tables.\n\n<Table responsive>\n  <thead>\n    <tr>\n      <th>#</th>\n      <th>Table heading</th>\n      <th>Table heading</th>\n      <th>Table heading</th>\n      <th>Table heading</th>\n      <th>Table heading</th>\n      <th>Table heading</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>1</td>\n      <td>Table cell</td>\n      <td>Table cell</td>\n      <td>Table cell</td>\n      <td>Table cell</td>\n      <td>Table cell</td>\n      <td>Table cell</td>\n    </tr>\n    <tr>\n      <td>2</td>\n      <td>Table cell</td>\n      <td>Table cell</td>\n      <td>Table cell</td>\n      <td>Table cell</td>\n      <td>Table cell</td>\n      <td>Table cell</td>\n    </tr>\n    <tr>\n      <td>3</td>\n      <td>Table cell</td>\n      <td>Table cell</td>\n      <td>Table cell</td>\n      <td>Table cell</td>\n      <td>Table cell</td>\n      <td>Table cell</td>\n    </tr>\n  </tbody>\n</Table>;',
      id: 'zgLvCUqQXXJdieaioe72',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'Table'
    },
    {
      children: [],
      closeTag: true,
      componentImport: 'react-bootstrap/lib/ButtonToolbar',
      componentProps: [
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'btn-toolbar\'',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        }
      ],
      description: 'ButtonToolbar',
      id: 'zo8Chk8vnL0PEIeVmqJN',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'ButtonToolbar'
    },
    {
      children: [],
      componentImport: 'react-bootstrap/lib/ModalFooter',
      componentProps: [
        {
          description: 'You can use a custom element type for this component.\n\ndefault: \'div\'',
          name: 'componentClass',
          propType: 'PropTypes.element',
          propTypeIsrequired: true
        },
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'modal-footer\'',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        }
      ],
      description: 'Modal.Footer',
      id: 'zul9y7IXXu6HIt5xXx9L',
      isDefault: true,
      provider: 'Bootstrap',
      techno: 'React',
      title: 'Modal.Footer'
    }
  ],
}