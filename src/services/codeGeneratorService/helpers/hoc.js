import { hocTemplate } from '../templates/hoc';

const Mustache = require('mustache');

export const generateHocCode = props => {
  const hoc = { ...props.hoc, projectName: props.projectName };
  const data = {
    hoc,
    connectRedux: () => this.connectRedux,
    mapStateToProps: () => this.mapStateToProps,
    mapDispatchToProps: () => this.mapDispatchToProps,
    projectName: () => this.projectName,
  };

  return Mustache.render(hocTemplate, data);
}