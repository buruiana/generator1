export const smartTemplate = `
import React from "react";
{{>importPartial}}
{{#smart}}
class {{projectName}} extends Component {
{{#hasConstructor}}
  constructor(props) {
    super(props);

    {{#hasState}}
    this.state = {

    }
    {{/hasState}}
    [
      {{#constList}}
      '{{{.}}}',
      {{/constList}}
    ].forEach((name) => (this[name] = this[name].bind(this)));

  }

{{/hasConstructor}}

{{#lifeCycleMethods}}
{{#componentWillMount}}
  componentWillMount() {

  };

{{/componentWillMount}}
{{#componentDidMount}}
  componentDidMount() {

  };

{{/componentDidMount}}
{{#componentWillReceiveProps}}
  componentWillReceiveProps() {

  };

{{/componentWillReceiveProps}}
{{#shouldComponentUpdate}}
  shouldComponentUpdate() {

  };

{{/shouldComponentUpdate}}
{{#componentWillUpdate}}
  componentWillUpdate() {

  };

{{/componentWillUpdate}}
{{#componentDidUpdate}}
  componentDidUpdate() {

  };

{{/componentDidUpdate}}
{{#componentWillUnmount}}
  componentWillUnmount() {

  };

{{/componentWillUnmount}}
{{/lifeCycleMethods}}

  render() {
    {{#constList}}
    const {{.}} = () => {
      return null;
    };

    {{/constList}}
    return (
      {{#tree}}
      {{^closeTag}}{{^hasComponentPropsVals}}{{^hasChildren}}<{{title}} />{{/hasChildren}}{{/hasComponentPropsVals}}{{/closeTag}}{{#hasChildren}}{{^closeTag}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/closeTag}}{{/hasChildren}}{{#closeTag}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/closeTag}}
      {{#hasComponentPropsVals}}<{{title}}{{/hasComponentPropsVals}}
      {{#componentProps}}{{#val}}
        {{name}}={{{val}}}{{/val}}
      {{/componentProps}}
      {{#hasComponentPropsVals}}>{{/hasComponentPropsVals}}
      {{#children}}
        {{^closeTag}}{{^hasComponentPropsVals}}{{^hasChildren}}<{{title}} />{{/hasChildren}}{{/hasComponentPropsVals}}{{/closeTag}}{{#hasChildren}}{{^closeTag}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/closeTag}}{{/hasChildren}}{{#closeTag}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/closeTag}}
        {{#hasComponentPropsVals}}<{{title}}{{/hasComponentPropsVals}}
        {{>propsPartial}}
        {{#hasComponentPropsVals}}>{{/hasComponentPropsVals}}
          {{>childrenPartial}}
        {{^closeTag}}{{#hasChildren}}</ {{title}}>{{/hasChildren}}{{/closeTag}}{{#closeTag}}</ {{title}}>{{/closeTag}}
      {{/children}}
      {{^closeTag}}{{#hasChildren}}</ {{title}}>{{/hasChildren}}{{/closeTag}}{{#closeTag}}</ {{title}}>{{/closeTag}}
      {{/tree}}
    );
  }
};

export default {{projectName}};
{{/smart}}
`;