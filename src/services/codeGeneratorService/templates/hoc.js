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
{{#mapDispatchToProps}}
const mapDispatchToProps = () => {

}

{{/mapDispatchToProps}}
{{#mapStateToProps}}
{{#mapDispatchToProps}}
export default connect(mapStateToProps, mapDispatchToProps)({{projectName}});
{{/mapDispatchToProps}}
{{/mapStateToProps}}
{{^mapStateToProps}}
{{#mapDispatchToProps}}
export default connect(null, mapDispatchToProps)({{projectName}});
{{/mapDispatchToProps}}
{{/mapStateToProps}}
{{#mapStateToProps}}
{{^mapDispatchToProps}}
export default connect(mapStateToProps)({{projectName}});
{{/mapDispatchToProps}}
{{/mapStateToProps}}
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





