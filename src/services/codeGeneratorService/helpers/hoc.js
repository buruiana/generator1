import capitalize from 'lodash/capitalize';

export const generateHocCode = hoc => {
  let code = `import ${capitalize(hoc.projectName)} from './${hoc.projectName}';\n`;

  if (hoc.hoc.connectRedux) {
    let mapStateToProps = 'null';
    let mapDispatchToProps = 'null';

    code+= `import { connect } from "react-redux";\n\n`

    if (hoc.hoc.mapStateToProps) {
      code+= `const mapStateToProps = () => {}\n\n`;
      mapStateToProps = 'mapStateToProps';
    }

    if (hoc.hoc.mapDispatchToProps) {
      code+= `const mapDispatchToProps = () => {}\n\n`;
      mapDispatchToProps = 'mapDispatchToProps';
    }

    if (hoc.hoc.mapStateToProps && !hoc.hoc.mapDispatchToProps) {
      code += `export default connect(${mapStateToProps})(${capitalize(hoc.projectName)});`;
    } else if (hoc.hoc.mapDispatchToProps) {
      code += `export default connect(${mapStateToProps}, ${mapDispatchToProps})(${capitalize(hoc.projectName)});`;
    } else {
      code += `export default connect(null, null)(${capitalize(hoc.projectName)});`;
    }
  } else {
    code += `export default ${capitalize(hoc.projectName)};`;
  }

  return code;
}
