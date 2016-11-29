export default function (babel) {
  const { types: t } = babel;

  return {
    name: 'ast-transform',
    visitor: {
      BooleanLiteral(path) {
        if (path.node.value) {
          path.replaceWith(t.UnaryExpression('!', t.NumericLiteral(0), true));
        } else {
          path.replaceWith(t.NumericLiteral(0));
        }
      }
    }
  };
}
