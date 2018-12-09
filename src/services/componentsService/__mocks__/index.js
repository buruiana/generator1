export const mock = {
  allComponents: [
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
      componentImport: 'react-bootstrap/lib/MenuItem',
      componentProps: [
        {
          description: 'Highlight the menu item as active.',
          name: 'active',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'Disable the menu item, making it unselectable.\n\ndefault: false',
          name: 'disabled',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'Styles the menu item as a horizontal rule, providing visual separation between groups of menu items.\n\nall( PropTypes.bool, ({ divider, children }) => divider && children ? new Error(\'Children will not be rendered for dividers\') : null )',
          name: 'divider',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'Value passed to the onSelect handler, useful for identifying the selected menu item.',
          name: 'eventKey',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        },
        {
          description: 'Styles the menu item as a header label, useful for describing a group of menu items.\n\ndefault: false',
          name: 'header',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'HTML href attribute corresponding to a.href.',
          name: 'href',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        },
        {
          description: 'Callback fired when the menu item is clicked.',
          name: 'onClick',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'Callback fired when the menu item is selected.\n\n(eventKey: any, event: Object) => any',
          name: 'onSelect',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'dropdown\'',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
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
      componentImport: 'react-bootstrap/lib/ModalDialog',
      componentProps: [
        {
          description: 'A css class to apply to the Modal dialog DOM node.',
          name: 'dialogClassName',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        },
        {
          description: 'Component size variations.\n\none of: "lg", "large", "sm", "small"',
          name: 'bsSize',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: true
        },
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'modal\'',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
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
      componentImport: 'react-bootstrap/lib/Jumbotron',
      componentProps: [
        {
          description: 'You can use a custom element type for this component.',
          name: 'componentClass',
          propType: 'PropTypes.element',
          propTypeIsrequired: true
        },
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'jumbotron\'',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
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
      componentImport: 'react-bootstrap/lib/InputGroupAddon',
      componentProps: [
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'input-group-addon\'',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
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
      componentImport: 'react-bootstrap/lib/ListGroup',
      componentProps: [
        {
          description: 'You can use a custom element type for this component.\n\nIf not specified, it will be treated as \'li\' if every child is a non-actionable <ListGroupItem>, and \'div\' otherwise.',
          name: 'componentClass',
          propType: 'PropTypes.element',
          propTypeIsrequired: true
        },
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'list-group\'',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
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
      closeTag: true,
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
      componentImport: 'react-bootstrap/lib/PanelCollapse',
      componentProps: [
        {
          description: 'Callback fired before the component expands',
          name: 'onEnter',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'Callback fired after the component starts to expand',
          name: 'onEntering',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'Callback fired after the component has expanded',
          name: 'onEntered',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'Callback fired before the component collapses',
          name: 'onExit',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'Callback fired after the component starts to collapse',
          name: 'onExiting',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'Callback fired after the component has collapsed',
          name: 'onExited',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'panel\'',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
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
      closeTag: true,
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
      componentImport: 'react-bootstrap/lib/Nav',
      componentProps: [
        {
          description: 'Marks the NavItem with a matching eventKey as active. Has a higher precedence over activeHref.',
          name: 'activeKey',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        },
        {
          description: 'Marks the child NavItem with a matching href prop as active.',
          name: 'activeHref',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        },
        {
          description: 'NavItems are be positioned vertically.\n\ndefault: false',
          name: 'stacked',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'all( PropTypes.bool, ({ justified, navbar }) => justified && navbar ? Error(\'justified navbar `Nav`s are not supported\') : null )\n\n\ndefault: false',
          name: 'justified',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'A callback fired when a NavItem is selected.\n\nfunction (\n Any eventKey,\n SyntheticEvent event?\n)',
          name: 'onSelect',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'ARIA role for the Nav, in the context of a TabContainer, the default will be set to "tablist", but can be overridden by the Nav when set explicitly.\n\nWhen the role is set to "tablist" NavItem focus is managed according to the ARIA authoring practices for tabs: https://www.w3.org/TR/2013/WD-wai-aria-practices-20130307/#tabpanel',
          name: 'role',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        },
        {
          description: 'Apply styling an alignment for use in a Navbar. This prop will be set automatically when the Nav is used inside a Navbar.',
          name: 'navbar',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'Float the Nav to the right. When navbar is true the appropriate contextual classes are added as well.\n\ndefault: false',
          name: 'pullRight',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'Float the Nav to the left. When navbar is true the appropriate contextual classes are added as well.\n\ndefault: false',
          name: 'pullLeft',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'Component visual or contextual style variants.\n\none of: "lg", "large", "sm", "small"',
          name: 'bsStyle',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: true
        },
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'nav\'',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
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
      componentImport: 'react-bootstrap/lib/Overlay',
      componentProps: [
        {
          description: 'Set the visibility of the Overlay\n\ndefault: false',
          name: 'show',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'Specify whether the overlay should trigger onHide when the user clicks outside the overlay\n\ndefault: false',
          name: 'rootClose',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'A callback invoked by the overlay when it wishes to be hidden. Required if rootClose is specified.',
          name: 'onHide',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'Use animation. default: Fade',
          name: 'animation',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'Callback fired before the Overlay transitions in',
          name: 'onEnter',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'Callback fired as the Overlay begins to transition in',
          name: 'onEntering',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'Callback fired after the Overlay finishes transitioning in',
          name: 'onEntered',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'Callback fired right before the Overlay transitions out',
          name: 'onExit',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'Callback fired as the Overlay begins to transition out',
          name: 'onExiting',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'Callback fired after the Overlay finishes transitioning out',
          name: 'onExited',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'Sets the direction of the Overlay.\n\ndefault: right',
          name: 'placement',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: true
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
      closeTag: true,
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
      componentImport: 'react-bootstrap/lib/Modal',
      componentProps: [
        {
          description: 'Include a backdrop component. Specify \'static\' for a backdrop that doesn\'t trigger an "onHide" when clicked.\n\none of: \'static\', true, false',
          name: 'backdrop',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: true
        },
        {
          description: 'Add an optional extra class name to .modal-backdrop It could end up looking like class="modal-backdrop foo-modal-backdrop in".',
          name: 'backdropClassName',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        },
        {
          description: 'Close the modal when escape key is pressed',
          name: 'keyboard',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'Open and close the Modal with a slide and fade animation.\n\ndefault: true',
          name: 'animation',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'A Component type that provides the modal content Markup. This is a useful prop when you want to use your own styles and markup to create a custom modal component.\n\ndefault: ModalDialog',
          name: 'dialogComponentClass',
          propType: 'PropTypes.element',
          propTypeIsrequired: true
        },
        {
          description: 'When true The modal will automatically shift focus to itself when it opens, and replace it to the last focused element when it closes. Generally this should never be set to false as it makes the Modal less accessible to assistive technologies, like screen-readers.',
          name: 'autoFocus',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'When true The modal will prevent focus from leaving the Modal while open. Consider leaving the default value here, as it is necessary to make the Modal work well with assistive technologies, such as screen readers.',
          name: 'enforceFocus',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'When true The modal will restore focus to previously focused element once modal is hidden',
          name: 'restoreFocus',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'When true The modal will show itself.',
          name: 'show',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: '\t\nA callback fired when the header closeButton or non-static backdrop is clicked. Required if either are specified.',
          name: 'onHide',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'Callback fired before the Modal transitions in',
          name: 'onEnter',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'Callback fired as the Modal begins to transition in',
          name: 'onEntering',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'Callback fired after the Modal finishes transitioning in',
          name: 'onEntered',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'Callback fired right before the Modal transitions out',
          name: 'onExit',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'Callback fired as the Modal begins to transition out',
          name: 'onExiting',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'Callback fired after the Modal finishes transitioning out',
          name: 'onExited',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'Component size variations.\n\none of: "lg", "large", "sm", "small"',
          name: 'bsSize',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: true
        },
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'modal\'',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
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
      componentImport: 'react-bootstrap/lib/PanelHeading',
      componentProps: [
        {
          description: 'You can use a custom element type for this component.\n\ndefault: \'div\'',
          name: 'componentClass',
          propType: 'PropTypes.element',
          propTypeIsrequired: true
        },
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault" \'panel\'',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
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
      componentImport: 'react-bootstrap/lib/ModalBody',
      componentProps: [
        {
          description: 'You can use a custom element type for this component.\n\ndefault: \'div\'',
          name: 'componentClass',
          propType: 'PropTypes.element',
          propTypeIsrequired: true
        },
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'modal-body\'',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
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
      componentImport: 'react-bootstrap/lib/Label',
      componentProps: [
        {
          description: 'Component visual or contextual style variants.\n\ndefault: \'default\'',
          name: 'bsStyle',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: true
        },
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'label\'',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
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
      componentImport: 'react-bootstrap/lib/PanelToggle',
      componentProps: [
        {
          description: 'You can use a custom element for this component\n\ndefault: SafeAnchor',
          name: 'componentClass',
          propType: 'PropTypes.element',
          propTypeIsrequired: true
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
      componentImport: 'react-bootstrap/lib/Panel',
      componentProps: [
        {
          description: 'Controls the collapsed/expanded state ofthe Panel. Requires a Panel.Collapse or <Panel.Body collapsible> child component in order to actually animate out or in.',
          name: 'expanded',
          propType: 'PropTypes.bool',
          propTypeIsrequired: true
        },
        {
          description: 'A callback fired when the collapse state changes.',
          name: 'onToggle',
          propType: 'PropTypes.func',
          propTypeIsrequired: true
        },
        {
          description: 'A unique identifier for the Component, the eventKey makes it distinguishable from others in a set. Similar to React\'s key prop, in that it only needs to be unique amoungst the Components siblings, not globally.',
          name: 'eventKey',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        },
        {
          description: 'An HTML id attribute uniquely identifying the Panel component.',
          name: 'id',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
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
      componentImport: 'react-bootstrap/lib/Popover',
      componentProps: [
        {
          description: '\t\nAn html id attribute, necessary for accessibility',
          name: 'id',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        },
        {
          description: 'Sets the direction the Popover is positioned towards.\n\ndefault: \'right\'\n\none of: \'top\', \'right\', \'bottom\', \'left\'',
          name: 'placement',
          propType: 'PropTypes.oneOf([\'\', \'\'])',
          propTypeIsrequired: true
        },
        {
          description: 'The "top" position value for the Popover.',
          name: 'positionTop',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        },
        {
          description: 'The "left" position value for the Popover.',
          name: 'positionLeft',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        },
        {
          description: 'The "top" position value for the Popover arrow.',
          name: 'arrowOffsetTop',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        },
        {
          description: 'The "left" position value for the Popover arrow.',
          name: 'arrowOffsetLeft',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
        },
        {
          description: 'Title content',
          name: 'title',
          propType: 'PropTypes.node',
          propTypeIsrequired: true
        },
        {
          description: 'Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.\n\ndefault: \'popover\'',
          name: 'bsClass',
          propType: 'PropTypes.string',
          propTypeIsrequired: true
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
    },
  ],
}