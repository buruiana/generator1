export const mock = {
  allComponents: [
    {
      children: [],
      componentProps: [
        {
          description: 'renderItem({ item: Object, index: number, separators: { highlight: Function, unhighlight: Function, updateProps: Function(select: string, newProps: Object) } }) => ?React.Element\n\nTakes an item from data and renders it into the list.\n\nProvides additional metadata like index if you need it, as well as a more generic separators.updateProps function which let you set whatever props you want to change the rendering of either the leading separator or trailing separator in case the more common highlight and unhighlight (which set the highlighted: boolean prop) are insufficient for your use case.\n\nExample usage:\n\n<FlatList\n  ItemSeparatorComponent={Platform.OS !== \'android\' && ({highlighted}) => (\n    <View style={[style.separator, highlighted && {marginLeft: 0}]} />\n  )}\n  data={[{title: \'Title Text\', key: \'item1\'}]}\n  renderItem={({item, separators}) => (\n    <TouchableHighlight\n      onPress={() => this._onPress(item)}\n      onShowUnderlay={separators.highlight}\n      onHideUnderlay={separators.unhighlight}>\n      <View style={{backgroundColor: \'white\'}}>\n        <Text>{item.title}</Text>\n      </View>\n    </TouchableHighlight>\n  )}\n/>\n',
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
          description: 'Rendered at the top of all the items. Can be a React Component Class, a render function, or a rendered element.1',
          name: 'ListHeaderComponent',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'hhh',
          name: 'lll',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        }
      ],
      description: 'A performant interface for rendering simple, flat lists, supporting the most handy features:\n\nFully cross-platform.\nOptional horizontal mode.\nConfigurable viewability callbacks.\nHeader support.\nFooter support.\nSeparator support.\nPull to Refresh.\nScroll loading.\nScrollToIndex support.\nIf you need section support, use <SectionList>.\n\nMinimal Example:\n\n<FlatList\n  data={[{key: \'a\'}, {key: \'b\'}]}\n  renderItem={({item}) => <Text>{item.key}</Text>}\n/>\nMore complex, multi-select example demonstrating PureComponent usage for perf optimization and avoiding bugs.\n\nBy binding the onPressItem handler, the props will remain === and PureComponent will prevent wasteful re-renders unless the actual id, selected, or title props change, even if the components rendered in MyListItem did not have such optimizations.\nBy passing extraData={this.state} to FlatList we make sure FlatList itself will re-render when the state.selected changes. Without setting this prop, FlatList would not know it needs to re-render any items because it is also a PureComponent and the prop comparison will not show any changes.\nkeyExtractor tells the list to use the ids for the react keys instead of the default key property.\nclass MyListItem extends React.PureComponent {\n  _onPress = () => {\n    this.props.onPressItem(this.props.id);\n  };\n\n  render() {\n    const textColor = this.props.selected ? "red" : "black";\n    return (\n      <TouchableOpacity onPress={this._onPress}>\n        <View>\n          <Text style={{ color: textColor }}>\n            {this.props.title}\n          </Text>\n        </View>\n      </TouchableOpacity>\n    );\n  }\n}\n\nclass MultiSelectList extends React.PureComponent {\n  state = {selected: (new Map(): Map<string, boolean>)};\n\n  _keyExtractor = (item, index) => item.id;\n\n  _onPressItem = (id: string) => {\n    // updater functions are preferred for transactional updates\n    this.setState((state) => {\n      // copy the map rather than modifying state.\n      const selected = new Map(state.selected);\n      selected.set(id, !selected.get(id)); // toggle\n      return {selected};\n    });\n  };\n\n  _renderItem = ({item}) => (\n    <MyListItem\n      id={item.id}\n      onPressItem={this._onPressItem}\n      selected={!!this.state.selected.get(item.id)}\n      title={item.title}\n    />\n  );\n\n  render() {\n    return (\n      <FlatList\n        data={this.props.data}\n        extraData={this.state}\n        keyExtractor={this._keyExtractor}\n        renderItem={this._renderItem}\n      />\n    );\n  }\n}\nThis is a convenience wrapper around <VirtualizedList>, and thus inherits its props (as well as those of <ScrollView>) that aren\'t explicitly listed here, along with the following caveats:\n\nInternal state is not preserved when content scrolls out of the render window. Make sure all your data is captured in the item data or external stores like Flux, Redux, or Relay.\nThis is a PureComponent which means that it will not re-render if props remain shallow- equal. Make sure that everything your renderItem function depends on is passed as a prop (e.g. extraData) that is not === after updates, otherwise your UI may not update on changes. This includes the data prop and parent component state.\nIn order to constrain memory and enable smooth scrolling, content is rendered asynchronously offscreen. This means it\'s possible to scroll faster than the fill rate and momentarily see blank content. This is a tradeoff that can be adjusted to suit the needs of each application, and we are working on improving it behind the scenes.\nBy default, the list looks for a key prop on each item and uses that for the React key. Alternatively, you can provide a custom keyExtractor prop.\nAlso inherits ScrollView Props, unless it is nested in another FlatList of same orientation.',
      id: 'CO4WNiFQLUZ7fit7pjxT',
      provider: 'MaterialUI',
      techno: 'React Native',
      title: 'FlatList'
    },
    {
      children: [],
      componentProps: [
        {
          description: 'The visible prop determines whether your modal is visible.',
          name: 'visible',
          propType: 'PropTypes.node',
          propTypeIsrequired: true
        },
        {
          description: 'The supportedOrientations prop allows the modal to be rotated to any of the specified orientations. On iOS, the modal is still restricted by what\'s specified in your app\'s Info.plist\'s UISupportedInterfaceOrientations field. When using presentationStyle of pageSheet or formSheet, this property will be ignored by iOS.  TYPE\tREQUIRED\tPLATFORM array of enum(\'portrait\', \'portrait-upside-down\', \'landscape\', \'landscape-left\', \'landscape-right\')\tNo\tiOS',
          name: 'supportedOrientations',
          propType: 'PropTypes.symbol',
          propTypeIsrequired: true
        },
        {
          description: 'The onRequestClose callback is called when the user taps the hardware back button on Android or the menu button on Apple TV. Because of this required prop, be aware that BackHandler events will not be emitted as long as the modal is open.  TYPE\tREQUIRED\tPLATFORM function\tYes\tAndroid, Platform.isTVOS function\tNo\t(Others)',
          name: 'onRequestClose',
          propType: 'PropTypes.oneOfType([])'
        }
      ],
      description: 'The Modal component is a simple way to present content above an enclosing view.\n\nNote: If you need more control over how to present modals over the rest of your app, then consider using a top-level Navigator.\n\nimport React, {Component} from \'react\';\nimport {Modal, Text, TouchableHighlight, View, Alert} from \'react-native\';\n\nclass ModalExample extends Component {\n  state = {\n    modalVisible: false,\n  };\n\n  setModalVisible(visible) {\n    this.setState({modalVisible: visible});\n  }\n\n  render() {\n    return (\n      <View style={{marginTop: 22}}>\n        <Modal\n          animationType="slide"\n          transparent={false}\n          visible={this.state.modalVisible}\n          onRequestClose={() => {\n            Alert.alert(\'Modal has been closed.\');\n          }}>\n          <View style={{marginTop: 22}}>\n            <View>\n              <Text>Hello World!</Text>\n\n              <TouchableHighlight\n                onPress={() => {\n                  this.setModalVisible(!this.state.modalVisible);\n                }}>\n                <Text>Hide Modal</Text>\n              </TouchableHighlight>\n            </View>\n          </View>\n        </Modal>\n\n        <TouchableHighlight\n          onPress={() => {\n            this.setModalVisible(true);\n          }}>\n          <Text>Show Modal</Text>\n        </TouchableHighlight>\n      </View>\n    );\n  }\n}',
      id: 'Eo29Jz56Xd2xX9BPz2gb',
      provider: 'CarbonComponents',
      techno: 'React Native',
      title: 'Modal'
    },
    {
      children: [],
      componentProps: [],
      description: 'A component used to select a single value from a range of values.',
      id: 'KJ1tl3S9rCi3KsWnzBRW',
      provider: 'provider-2',
      techno: 'React Native',
      title: 'Slider'
    },
    {
      children: [],
      componentProps: [
        {
          description: 'If set to true, renders span instead of a',
          name: 'active',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'href attribute for the inner a element',
          name: 'href',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        },
        {
          description: 'title attribute for the inner a element',
          name: 'title',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        },
        {
          description: 'target attribute for the inner a element',
          name: 'target',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        }
      ],
      description: '',
      id: 'MnQ9wgehXt3n3kVK23iN',
      provider: 'Bootstrap',
      techno: 'React',
      title: 'Breadcrumb.Item'
    },
    {
      children: [],
      componentProps: [
        {
          description: 'Handler to be called when the user taps the button',
          name: 'onPress',
          propType: 'PropTypes.func'
        },
        {
          description: 'Text to display inside the button',
          name: 'title',
          propType: 'PropTypes.string'
        },
        {
          description: 'Text to display for blindness accessibility features',
          name: 'accessibilityLabel',
          propType: 'PropTypes.string'
        },
        {
          description: 'Color of the text (iOS), or background color of the button (Android)',
          name: 'color',
          propType: 'PropTypes.string'
        }
      ],
      description: 'A basic button component that should render nicely on any platform. Supports a minimal level of customization.\n\nIf this button doesn\'t look right for your app, you can build your own button using TouchableOpacity or TouchableNativeFeedback. For inspiration, look at the source code for this button component. Or, take a look at the wide variety of button components built by the community.\n\nExample usage:\n\nimport { Button } from \'react-native\';\n...\n\n<Button\n  onPress={onPressLearnMore}\n  title="Learn More"\n  color="#841584"\n  accessibilityLabel="Learn more about this purple button"\n/>',
      id: 'alrHnCUeDqPFzGICpfyc',
      provider: 'provider-3',
      techno: 'React',
      title: 'Button'
    },
    {
      children: [],
      componentProps: [
        {
          description: 'onDismiss',
          name: 'onDismiss',
          propType: 'PropTypes.func',
          propTypeIsrequired: false
        },
        {
          description: 'closeLabel',
          name: 'closeLabel',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        },
        {
          description: 'Component visual or contextual style variants.',
          name: 'bsStyle',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: false
        },
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        }
      ],
      description: 'Alert messages',
      id: 'rTeFQK77mNlc1JLT3Bws',
      provider: 'Bootstrap',
      techno: 'React',
      title: 'Alert'
    },
    {
      children: [],
      componentProps: [
        {
          description: 'pullRight',
          name: 'pullRight',
          propType: 'PropTypes.bool',
          propTypeIsrequired: false
        },
        {
          description: 'bsClass',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: false
        }
      ],
      description: 'Easily highlight new or unread items by adding a <Badge> to links, Bootstrap navs, and more.',
      id: 'wso5FhBOSGQrf4MNsURF',
      provider: 'Bootstrap',
      techno: 'React',
      title: 'Badge'
    },
  ],
}