export const importPartial = `
{{#importsList}}
import
{{#default}}
  {{.}}
{{/default}}
{{#nonDefaults}}{{{.}}}{{/nonDefaults}}
from '{{{name}}}';
{{/importsList}}
`;