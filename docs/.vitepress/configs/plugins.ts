import path from 'path';
// @ts-ignore
import fs from 'fs';
import MarkdownIt from 'markdown-it';
import mdContainer from 'markdown-it-container';
// @ts-ignore
import { highlight } from '../../utils/highlight';
// @ts-ignore
import tag from '../plugins/tag';
import type Token from 'markdown-it/lib/token';
import type Renderer from 'markdown-it/lib/renderer';

const localMd = MarkdownIt().use(tag);

interface ContainerOpts {
  marker?: string | undefined;
  validate?(params: string): boolean;
  render?(
    tokens: Token[],
    index: number,
    options: any,
    env: any,
    self: Renderer
  ): string;
}

export const mdPlugin = (md: MarkdownIt) => {
  // @ts-ignore
  md.use(mdContainer, 'demo', {
    validate(params) {
      // @ts-ignore
      return !!params.trim().match(/^demo\s*(.*)$/);
    },

    render(tokens, idx) {
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
      if (tokens[idx].nesting === 1 /* means the tag is opening */) {
        const description = m && m.length > 1 ? m[1] : '';
        const sourceFileToken = tokens[idx + 2];
        let source = '';
        const sourceFile = sourceFileToken.children?.[0].content ?? '';
        if (sourceFileToken.type === 'inline') {
          source = fs.readFileSync(
            path.resolve(process.cwd(),'docs', 'examples', `${sourceFile}.vue`),
            'utf-8'
          );
        }
        if (!source) { // @ts-ignore
          // console.error(`Incorrect source file: ${sourceFile}`)
          return
          // throw new Error(`Incorrect source file: ${sourceFile}`);
        }

        return `<Demo source="${encodeURIComponent(
          highlight(source, 'vue')
        )}" path="${sourceFile}" raw-source="${encodeURIComponent(
          source
        )}" description="${encodeURIComponent(localMd.render(description))}">`;
      } else {
        return '</Demo>';
      }
    },
  } as ContainerOpts);
};
