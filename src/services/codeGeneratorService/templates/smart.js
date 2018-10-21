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

    return (

    );
  }
};

export default {{projectName}};
{{/smart}}
`;