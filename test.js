import test from 'ava';
import {fromString} from './helpers/pipe';

import sass from './lib/sass';

test('compiles', t => {
  const input = '$foo: red; body { background: $foo; }';
  const expected = 'body {\n  background: red; }\n\n/*# sourceMappingURL=../maps/sass/style.css.map */\n';

  return fromString(input, 'sass/style.scss', sass)
    .then(output => {
      const contents = output.contents.toString();
      t.is(contents, expected, 'Sass compiled as expected');
    });
});