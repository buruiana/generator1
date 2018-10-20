export const hocTemplate =
`{{#hoc}}

{{#connectRedux}}
import { connect } from "react-redux";
{{/connectRedux}}
import {{projectName}} from './{{projectName}}';

{{#connectRedux}}
{{#mapStateToProps}}

const mapStateToProps = state => ({

});
{{/mapStateToProps}}
{{/connectRedux}}

{{#connectRedux}}
{{#mapDispatchToProps}}
const mapDispatchToProps = () => {

}
{{/mapDispatchToProps}}
{{/connectRedux}}

{{#connectRedux}}
{{#mapStateToProps}}
{{#mapDispatchToProps}}
export default connect(mapStateToProps, mapDispatchToProps)({{projectName}});
{{/mapDispatchToProps}}
{{/mapStateToProps}}
{{/connectRedux}}

{{#connectRedux}}
{{^mapStateToProps}}
{{#mapDispatchToProps}}
export default connect(null, mapDispatchToProps)({{projectName}});
{{/mapDispatchToProps}}
{{/mapStateToProps}}
{{/connectRedux}}

{{#connectRedux}}
{{#mapStateToProps}}
{{^mapDispatchToProps}}
export default connect(mapStateToProps)({{projectName}});
{{/mapDispatchToProps}}
{{/mapStateToProps}}
{{/connectRedux}}

{{#connectRedux}}
{{^mapStateToProps}}
{{^mapDispatchToProps}}
export default connect(null, null)({{projectName}});
{{/mapDispatchToProps}}
{{/mapStateToProps}}
{{/connectRedux}}

{{^connectRedux}}
export default {{projectName}};
{{/connectRedux}}
{{/hoc}}
`;





