export const smartTemplate = `
import React from "react";

{{#smart}}
const {{projectName}} = props => {
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

  return (

  );
};

export default {{projectName}};
{{/smart}}
`;