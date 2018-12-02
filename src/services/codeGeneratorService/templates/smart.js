export const smartTemplate = `
import React from "react";

{{#smart}}
class {{projectName}} extends Component {
{{#hasConstructor}}
  constructor(props) {
    super(props);

    {{#hasState}}
    this.state = {

    }
    {{/hasState}}
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
      {{^hasComponentPropsVals}}{{^hasChildren}}<{{title}} />{{/hasChildren}}{{/hasComponentPropsVals}}{{#hasChildren}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/hasChildren}}
      {{#hasComponentPropsVals}}<{{title}}{{/hasComponentPropsVals}}
      {{#componentProps}}{{#val}}
        {{name}}={{{val}}}{{/val}}
      {{/componentProps}}
      {{#hasComponentPropsVals}}>{{/hasComponentPropsVals}}
      {{#children}}
        {{^hasComponentPropsVals}}{{^hasChildren}}<{{title}} />{{/hasChildren}}{{/hasComponentPropsVals}}{{#hasChildren}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/hasChildren}}
        {{#hasComponentPropsVals}}<{{title}}{{/hasComponentPropsVals}}
        {{>propsPartial}}
        {{#hasComponentPropsVals}}>{{/hasComponentPropsVals}}
          {{>childrenPartial}}
        {{#hasChildren}}</ {{title}}>{{/hasChildren}}
      {{/children}}
      {{#hasChildren}}</ {{title}}>{{/hasChildren}}
      {{/tree}}
    );
  }
};

export default {{projectName}};
{{/smart}}
`;