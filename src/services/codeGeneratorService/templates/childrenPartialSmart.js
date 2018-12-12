export const childrenPartialSmart = `
        {{#children}}
          {{^closeTag}}{{^hasComponentPropsVals}}{{^hasChildren}}<{{title}} />{{/hasChildren}}{{/hasComponentPropsVals}}{{/closeTag}}{{#hasChildren}}{{^closeTag}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/closeTag}}{{/hasChildren}}{{#closeTag}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/closeTag}}
          {{#hasComponentPropsVals}}<{{title}}{{/hasComponentPropsVals}}
        {{#componentProps}}{{#val}}
        {{#.}}{{#val}}
            {{name}}={{{val}}}
        {{/val}}{{/.}}
        {{/val}}{{/componentProps}}
          {{#hasComponentPropsVals}}>{{/hasComponentPropsVals}}
            {{#children}}
            {{^closeTag}}{{^hasComponentPropsVals}}{{^hasChildren}}<{{title}} />{{/hasChildren}}{{/hasComponentPropsVals}}{{/closeTag}}{{#hasChildren}}{{^closeTag}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/closeTag}}{{/hasChildren}}{{#closeTag}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/closeTag}}
            {{#hasComponentPropsVals}}<{{title}}{{/hasComponentPropsVals}}
          {{#componentProps}}{{#val}}
          {{#.}}{{#val}}
              {{name}}={{{val}}}
          {{/val}}{{/.}}
          {{/val}}{{/componentProps}}
            {{#hasComponentPropsVals}}>{{/hasComponentPropsVals}}
              {{#children}}
              {{^closeTag}}{{^hasComponentPropsVals}}{{^hasChildren}}<{{title}} />{{/hasChildren}}{{/hasComponentPropsVals}}{{/closeTag}}{{#hasChildren}}{{^closeTag}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/closeTag}}{{/hasChildren}}{{#closeTag}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/closeTag}}
              {{#hasComponentPropsVals}}<{{title}}{{/hasComponentPropsVals}}
            {{#componentProps}}{{#val}}
            {{#.}}{{#val}}
                {{name}}={{{val}}}
            {{/val}}{{/.}}
            {{/val}}{{/componentProps}}
              {{#hasComponentPropsVals}}>{{/hasComponentPropsVals}}
                {{#children}}
                {{^closeTag}}{{^hasComponentPropsVals}}{{^hasChildren}}<{{title}} />{{/hasChildren}}{{/hasComponentPropsVals}}{{/closeTag}}{{#hasChildren}}{{^closeTag}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/closeTag}}{{/hasChildren}}{{#closeTag}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/closeTag}}
                {{#hasComponentPropsVals}}<{{title}}{{/hasComponentPropsVals}}
              {{#componentProps}}{{#val}}
              {{#.}}{{#val}}
                  {{name}}={{{val}}}
              {{/val}}{{/.}}
              {{/val}}{{/componentProps}}
                {{#hasComponentPropsVals}}>{{/hasComponentPropsVals}}
                  {{#children}}
                  {{^closeTag}}{{^hasComponentPropsVals}}{{^hasChildren}}<{{title}} />{{/hasChildren}}{{/hasComponentPropsVals}}{{/closeTag}}{{#hasChildren}}{{^closeTag}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/closeTag}}{{/hasChildren}}{{#closeTag}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/closeTag}}
                  {{#hasComponentPropsVals}}<{{title}}{{/hasComponentPropsVals}}
                {{#componentProps}}{{#val}}
                {{#.}}{{#val}}
                    {{name}}={{{val}}}
                {{/val}}{{/.}}
                {{/val}}{{/componentProps}}
                  {{#hasComponentPropsVals}}>{{/hasComponentPropsVals}}
                    {{#children}}
                    {{^closeTag}}{{^hasComponentPropsVals}}{{^hasChildren}}<{{title}} />{{/hasChildren}}{{/hasComponentPropsVals}}{{/closeTag}}{{#hasChildren}}{{^closeTag}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/closeTag}}{{/hasChildren}}{{#closeTag}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/closeTag}}
                  {{#componentProps}}{{#val}}
                  {{#.}}{{#val}}
                      {{name}}={{{val}}}
                  {{/val}}{{/.}}
                  {{/val}}{{/componentProps}}
                    {{#hasComponentPropsVals}}>{{/hasComponentPropsVals}}
                      {{#children}}
                      {{^closeTag}}{{^hasComponentPropsVals}}{{^hasChildren}}<{{title}} />{{/hasChildren}}{{/hasComponentPropsVals}}{{/closeTag}}{{#hasChildren}}{{^closeTag}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/closeTag}}{{/hasChildren}}{{#closeTag}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/closeTag}}
                      {{#hasComponentPropsVals}}<{{title}}{{/hasComponentPropsVals}}
                    {{#componentProps}}{{#val}}
                    {{#.}}{{#val}}
                        {{name}}={{{val}}}
                    {{/val}}{{/.}}
                    {{/val}}{{/componentProps}}
                      {{#hasComponentPropsVals}}>{{/hasComponentPropsVals}}
                        {{#children}}
                       {{^closeTag}}{{^hasComponentPropsVals}}{{^hasChildren}}<{{title}} />{{/hasChildren}}{{/hasComponentPropsVals}}{{/closeTag}}{{#hasChildren}}{{^closeTag}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/closeTag}}{{/hasChildren}}{{#closeTag}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/closeTag}}
                        {{#hasComponentPropsVals}}<{{title}}{{/hasComponentPropsVals}}
                      {{#componentProps}}{{#val}}
                      {{#.}}{{#val}}
                          {{name}}={{{val}}}
                      {{/val}}{{/.}}
                      {{/val}}{{/componentProps}}
                        {{#hasComponentPropsVals}}>{{/hasComponentPropsVals}}
                          {{#children}}
                          {{^closeTag}}{{^hasComponentPropsVals}}{{^hasChildren}}<{{title}} />{{/hasChildren}}{{/hasComponentPropsVals}}{{/closeTag}}{{#hasChildren}}{{^closeTag}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/closeTag}}{{/hasChildren}}{{#closeTag}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/closeTag}}
                          {{#hasComponentPropsVals}}<{{title}}{{/hasComponentPropsVals}}
                        {{#componentProps}}{{#val}}
                        {{#.}}{{#val}}
                            {{name}}={{{val}}}
                        {{/val}}{{/.}}
                        {{/val}}{{/componentProps}}
                          {{#hasComponentPropsVals}}>{{/hasComponentPropsVals}}
                            {{#children}}
                            {{^closeTag}}{{^hasComponentPropsVals}}{{^hasChildren}}<{{title}} />{{/hasChildren}}{{/hasComponentPropsVals}}{{/closeTag}}{{#hasChildren}}{{^closeTag}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/closeTag}}{{/hasChildren}}{{#closeTag}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/closeTag}}
                            {{#hasComponentPropsVals}}<{{title}}{{/hasComponentPropsVals}}
                          {{#componentProps}}{{#val}}
                          {{#.}}{{#val}}
                              {{name}}={{{val}}}
                          {{/val}}{{/.}}
                          {{/val}}{{/componentProps}}
                            {{#hasComponentPropsVals}}>{{/hasComponentPropsVals}}
                              {{#children}}
                              {{^closeTag}}{{^hasComponentPropsVals}}{{^hasChildren}}<{{title}} />{{/hasChildren}}{{/hasComponentPropsVals}}{{/closeTag}}{{#hasChildren}}{{^closeTag}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/closeTag}}{{/hasChildren}}{{#closeTag}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/closeTag}}
                              {{#hasComponentPropsVals}}<{{title}}{{/hasComponentPropsVals}}
                            {{#componentProps}}{{#val}}
                            {{#.}}{{#val}}
                                {{name}}={{{val}}}
                            {{/val}}{{/.}}
                            {{/val}}{{/componentProps}}
                              {{#hasComponentPropsVals}}>{{/hasComponentPropsVals}}
                                {{#children}}
                                {{^closeTag}}{{^hasComponentPropsVals}}{{^hasChildren}}<{{title}} />{{/hasChildren}}{{/hasComponentPropsVals}}{{/closeTag}}{{#hasChildren}}{{^closeTag}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/closeTag}}{{/hasChildren}}{{#closeTag}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/closeTag}}
                                {{#hasComponentPropsVals}}<{{title}}{{/hasComponentPropsVals}}
                              {{#componentProps}}{{#val}}
                              {{#.}}{{#val}}
                                  {{name}}={{{val}}}
                              {{/val}}{{/.}}
                              {{/val}}{{/componentProps}}
                                {{#hasComponentPropsVals}}>{{/hasComponentPropsVals}}
                                  {{#children}}
                                  {{^closeTag}}{{^hasComponentPropsVals}}{{^hasChildren}}<{{title}} />{{/hasChildren}}{{/hasComponentPropsVals}}{{/closeTag}}{{#hasChildren}}{{^closeTag}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/closeTag}}{{/hasChildren}}{{#closeTag}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/closeTag}}
                                  {{#hasComponentPropsVals}}<{{title}}{{/hasComponentPropsVals}}
                                {{#componentProps}}{{#val}}
                                {{#.}}{{#val}}
                                    {{name}}={{{val}}}
                                {{/val}}{{/.}}
                                {{/val}}{{/componentProps}}
                                  {{#hasComponentPropsVals}}>{{/hasComponentPropsVals}}
                                    {{#children}}
                                    {{^closeTag}}{{^hasComponentPropsVals}}{{^hasChildren}}<{{title}} />{{/hasChildren}}{{/hasComponentPropsVals}}{{/closeTag}}{{#hasChildren}}{{^closeTag}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/closeTag}}{{/hasChildren}}{{#closeTag}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/closeTag}}
                                    {{#hasComponentPropsVals}}<{{title}}{{/hasComponentPropsVals}}
                                  {{#componentProps}}{{#val}}
                                  {{#.}}{{#val}}
                                      {{name}}={{{val}}}
                                  {{/val}}{{/.}}
                                  {{/val}}{{/componentProps}}
                                    {{#hasComponentPropsVals}}>{{/hasComponentPropsVals}}
                                      {{>childrenPartial}}
                                    {{#hasChildren}}</ {{title}}>{{/hasChildren}}
                                  {{/children}}
                                  {{^closeTag}}{{#hasChildren}}</ {{title}}>{{/hasChildren}}{{/closeTag}}{{#closeTag}}</ {{title}}>{{/closeTag}}
                                {{/children}}
                                {{^closeTag}}{{#hasChildren}}</ {{title}}>{{/hasChildren}}{{/closeTag}}{{#closeTag}}</ {{title}}>{{/closeTag}}
                              {{/children}}
                              {{^closeTag}}{{#hasChildren}}</ {{title}}>{{/hasChildren}}{{/closeTag}}{{#closeTag}}</ {{title}}>{{/closeTag}}
                            {{/children}}
                            {{^closeTag}}{{#hasChildren}}</ {{title}}>{{/hasChildren}}{{/closeTag}}{{#closeTag}}</ {{title}}>{{/closeTag}}
                          {{/children}}
                          {{^closeTag}}{{#hasChildren}}</ {{title}}>{{/hasChildren}}{{/closeTag}}{{#closeTag}}</ {{title}}>{{/closeTag}}
                        {{/children}}
                        {{^closeTag}}{{#hasChildren}}</ {{title}}>{{/hasChildren}}{{/closeTag}}{{#closeTag}}</ {{title}}>{{/closeTag}}
                      {{/children}}
                      {{^closeTag}}{{#hasChildren}}</ {{title}}>{{/hasChildren}}{{/closeTag}}{{#closeTag}}</ {{title}}>{{/closeTag}}
                    {{/children}}
                    {{^closeTag}}{{#hasChildren}}</ {{title}}>{{/hasChildren}}{{/closeTag}}{{#closeTag}}</ {{title}}>{{/closeTag}}
                  {{/children}}
                  {{^closeTag}}{{#hasChildren}}</ {{title}}>{{/hasChildren}}{{/closeTag}}{{#closeTag}}</ {{title}}>{{/closeTag}}
                {{/children}}
                {{^closeTag}}{{#hasChildren}}</ {{title}}>{{/hasChildren}}{{/closeTag}}{{#closeTag}}</ {{title}}>{{/closeTag}}
              {{/children}}
              {{^closeTag}}{{#hasChildren}}</ {{title}}>{{/hasChildren}}{{/closeTag}}{{#closeTag}}</ {{title}}>{{/closeTag}}
            {{/children}}
            {{^closeTag}}{{#hasChildren}}</ {{title}}>{{/hasChildren}}{{/closeTag}}{{#closeTag}}</ {{title}}>{{/closeTag}}
          {{/children}}
          {{^closeTag}}{{#hasChildren}}</ {{title}}>{{/hasChildren}}{{/closeTag}}{{#closeTag}}</ {{title}}>{{/closeTag}}
        {{/children}}
`;