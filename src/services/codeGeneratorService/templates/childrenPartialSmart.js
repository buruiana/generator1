export const childrenPartial = `
        {{#children}}
          {{^hasComponentPropsVals}}{{^hasChildren}}<{{title}} />{{/hasChildren}}{{/hasComponentPropsVals}}
          {{#hasChildren}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/hasChildren}}
          {{#hasComponentPropsVals}}<{{title}}{{/hasComponentPropsVals}}
        {{#componentProps}}{{#val}}
        {{#.}}{{#val}}
            {{name}}={ {{val}} }
        {{/val}}{{/.}}
        {{/val}}{{/componentProps}}
          {{#hasComponentPropsVals}}>{{/hasComponentPropsVals}}
            {{#children}}
            {{^hasComponentPropsVals}}{{^hasChildren}}<{{title}} />{{/hasChildren}}{{/hasComponentPropsVals}}
            {{#hasChildren}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/hasChildren}}
            {{#hasComponentPropsVals}}<{{title}}{{/hasComponentPropsVals}}
          {{#componentProps}}{{#val}}
          {{#.}}{{#val}}
              {{name}}={ {{val}} }
          {{/val}}{{/.}}
          {{/val}}{{/componentProps}}
            {{#hasComponentPropsVals}}>{{/hasComponentPropsVals}}
              {{#children}}
              {{^hasComponentPropsVals}}{{^hasChildren}}<{{title}} />{{/hasChildren}}{{/hasComponentPropsVals}}
              {{#hasChildren}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/hasChildren}}
              {{#hasComponentPropsVals}}<{{title}}{{/hasComponentPropsVals}}
            {{#componentProps}}{{#val}}
            {{#.}}{{#val}}
                {{name}}={ {{val}} }
            {{/val}}{{/.}}
            {{/val}}{{/componentProps}}
              {{#hasComponentPropsVals}}>{{/hasComponentPropsVals}}
                {{#children}}
                {{^hasComponentPropsVals}}{{^hasChildren}}<{{title}} />{{/hasChildren}}{{/hasComponentPropsVals}}
                {{#hasChildren}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/hasChildren}}
                {{#hasComponentPropsVals}}<{{title}}{{/hasComponentPropsVals}}
              {{#componentProps}}{{#val}}
              {{#.}}{{#val}}
                  {{name}}={ {{val}} }
              {{/val}}{{/.}}
              {{/val}}{{/componentProps}}
                {{#hasComponentPropsVals}}>{{/hasComponentPropsVals}}
                  {{#children}}
                  {{^hasComponentPropsVals}}{{^hasChildren}}<{{title}} />{{/hasChildren}}{{/hasComponentPropsVals}}
                  {{#hasChildren}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/hasChildren}}
                  {{#hasComponentPropsVals}}<{{title}}{{/hasComponentPropsVals}}
                {{#componentProps}}{{#val}}
                {{#.}}{{#val}}
                    {{name}}={ {{val}} }
                {{/val}}{{/.}}
                {{/val}}{{/componentProps}}
                  {{#hasComponentPropsVals}}>{{/hasComponentPropsVals}}
                    {{#children}}
                    {{^hasComponentPropsVals}}{{^hasChildren}}<{{title}} />{{/hasChildren}}{{/hasComponentPropsVals}}
                    {{#hasChildren}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/hasChildren}}
                    {{#hasComponentPropsVals}}<{{title}}{{/hasComponentPropsVals}}
                  {{#componentProps}}{{#val}}
                  {{#.}}{{#val}}
                      {{name}}={ {{val}} }
                  {{/val}}{{/.}}
                  {{/val}}{{/componentProps}}
                    {{#hasComponentPropsVals}}>{{/hasComponentPropsVals}}
                      {{#children}}
                      {{^hasComponentPropsVals}}{{^hasChildren}}<{{title}} />{{/hasChildren}}{{/hasComponentPropsVals}}
                      {{#hasChildren}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/hasChildren}}
                      {{#hasComponentPropsVals}}<{{title}}{{/hasComponentPropsVals}}
                    {{#componentProps}}{{#val}}
                    {{#.}}{{#val}}
                        {{name}}={ {{val}} }
                    {{/val}}{{/.}}
                    {{/val}}{{/componentProps}}
                      {{#hasComponentPropsVals}}>{{/hasComponentPropsVals}}
                        {{#children}}
                        {{^hasComponentPropsVals}}{{^hasChildren}}<{{title}} />{{/hasChildren}}{{/hasComponentPropsVals}}
                        {{#hasChildren}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/hasChildren}}
                        {{#hasComponentPropsVals}}<{{title}}{{/hasComponentPropsVals}}
                      {{#componentProps}}{{#val}}
                      {{#.}}{{#val}}
                          {{name}}={ {{val}} }
                      {{/val}}{{/.}}
                      {{/val}}{{/componentProps}}
                        {{#hasComponentPropsVals}}>{{/hasComponentPropsVals}}
                          {{#children}}
                          {{^hasComponentPropsVals}}{{^hasChildren}}<{{title}} />{{/hasChildren}}{{/hasComponentPropsVals}}
                          {{#hasChildren}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/hasChildren}}
                          {{#hasComponentPropsVals}}<{{title}}{{/hasComponentPropsVals}}
                        {{#componentProps}}{{#val}}
                        {{#.}}{{#val}}
                            {{name}}={ {{val}} }
                        {{/val}}{{/.}}
                        {{/val}}{{/componentProps}}
                          {{#hasComponentPropsVals}}>{{/hasComponentPropsVals}}
                            {{#children}}
                            {{^hasComponentPropsVals}}{{^hasChildren}}<{{title}} />{{/hasChildren}}{{/hasComponentPropsVals}}
                            {{#hasChildren}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/hasChildren}}
                            {{#hasComponentPropsVals}}<{{title}}{{/hasComponentPropsVals}}
                          {{#componentProps}}{{#val}}
                          {{#.}}{{#val}}
                              {{name}}={ {{val}} }
                          {{/val}}{{/.}}
                          {{/val}}{{/componentProps}}
                            {{#hasComponentPropsVals}}>{{/hasComponentPropsVals}}
                              {{#children}}
                              {{^hasComponentPropsVals}}{{^hasChildren}}<{{title}} />{{/hasChildren}}{{/hasComponentPropsVals}}
                              {{#hasChildren}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/hasChildren}}
                              {{#hasComponentPropsVals}}<{{title}}{{/hasComponentPropsVals}}
                            {{#componentProps}}{{#val}}
                            {{#.}}{{#val}}
                                {{name}}={ {{val}} }
                            {{/val}}{{/.}}
                            {{/val}}{{/componentProps}}
                              {{#hasComponentPropsVals}}>{{/hasComponentPropsVals}}
                                {{#children}}
                                {{^hasComponentPropsVals}}{{^hasChildren}}<{{title}} />{{/hasChildren}}{{/hasComponentPropsVals}}
                                {{#hasChildren}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/hasChildren}}
                                {{#hasComponentPropsVals}}<{{title}}{{/hasComponentPropsVals}}
                              {{#componentProps}}{{#val}}
                              {{#.}}{{#val}}
                                  {{name}}={ {{val}} }
                              {{/val}}{{/.}}
                              {{/val}}{{/componentProps}}
                                {{#hasComponentPropsVals}}>{{/hasComponentPropsVals}}
                                  {{#children}}
                                  {{^hasComponentPropsVals}}{{^hasChildren}}<{{title}} />{{/hasChildren}}{{/hasComponentPropsVals}}
                                  {{#hasChildren}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/hasChildren}}
                                  {{#hasComponentPropsVals}}<{{title}}{{/hasComponentPropsVals}}
                                {{#componentProps}}{{#val}}
                                {{#.}}{{#val}}
                                    {{name}}={ {{val}} }
                                {{/val}}{{/.}}
                                {{/val}}{{/componentProps}}
                                  {{#hasComponentPropsVals}}>{{/hasComponentPropsVals}}
                                    {{#children}}
                                    {{^hasComponentPropsVals}}{{^hasChildren}}<{{title}} />{{/hasChildren}}{{/hasComponentPropsVals}}
                                    {{#hasChildren}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/hasChildren}}
                                    {{#hasComponentPropsVals}}<{{title}}{{/hasComponentPropsVals}}
                                  {{#componentProps}}{{#val}}
                                  {{#.}}{{#val}}
                                      {{name}}={ {{val}} }
                                  {{/val}}{{/.}}
                                  {{/val}}{{/componentProps}}
                                    {{#hasComponentPropsVals}}>{{/hasComponentPropsVals}}
                                      {{>childrenPartial}}
                                    {{#hasChildren}}</ {{title}}>{{/hasChildren}}
                                  {{/children}}
                                  {{#hasChildren}}</ {{title}}>{{/hasChildren}}
                                {{/children}}
                                {{#hasChildren}}</ {{title}}>{{/hasChildren}}
                              {{/children}}
                              {{#hasChildren}}</ {{title}}>{{/hasChildren}}
                            {{/children}}
                            {{#hasChildren}}</ {{title}}>{{/hasChildren}}
                          {{/children}}
                          {{#hasChildren}}</ {{title}}>{{/hasChildren}}
                        {{/children}}
                        {{#hasChildren}}</ {{title}}>{{/hasChildren}}
                      {{/children}}
                      {{#hasChildren}}</ {{title}}>{{/hasChildren}}
                    {{/children}}
                    {{#hasChildren}}</ {{title}}>{{/hasChildren}}
                  {{/children}}
                  {{#hasChildren}}</ {{title}}>{{/hasChildren}}
                {{/children}}
                {{#hasChildren}}</ {{title}}>{{/hasChildren}}
              {{/children}}
              {{#hasChildren}}</ {{title}}>{{/hasChildren}}
            {{/children}}
            {{#hasChildren}}</ {{title}}>{{/hasChildren}}
          {{/children}}
          {{#hasChildren}}</ {{title}}>{{/hasChildren}}
        {{/children}}
`;