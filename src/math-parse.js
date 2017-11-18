// @flow

export type Operator =
  | 'Multiply' | 'Add' | 'Subtract' | 'Divide'

export type Expression =
  | { _type: 'literal', val: number }
  | { _type: 'variable', name: string }
  | { _type: 'operation',
      operator: Operator,
      operands: Array<Expression> };

export type Error = { error: 'error', msg: string };

const symbolToOperatorMap: { [symbol: string]: Operator } = {
  '+': 'Add',
  '-': 'Subtract',
  '*': 'Multiply',
  '/': 'Divide'
};

const operatorToFunctionMap: { [op: Operator]: (Array<number> => number) } = {
  'Add': arr => arr[0] + arr[1],
  'Subtract': arr => arr[0] - arr[1],
  'Multiply': arr => arr[0] * arr[1],
  'Divide': arr => arr[0] / arr[1],
};

export function ParseExpression(str: string): Expression | Error {
  str = str.trim();

  if (str.length == 0)
    return { error: 'error', msg: 'Invalid expression (empty)' };

  if (str.startsWith('(') && str.endsWith(')'))
    return ParseExpression(str.substring(1, str.length - 1));

  var nestLevel = 0;

  // Find any top level operands
  for (var i = 0; i<str.length; i++){
    if (str[i] == '(') nestLevel++;
    if (str[i] == ')') nestLevel--;

    if (nestLevel == 0) {
      const operator = symbolToOperatorMap[str[i]];

      if (operator != null) {
        const left = ParseExpression(str.substring(0, i));
        const right = ParseExpression(str.substring(i+1, str.length));
        if (left.error) return left; // bubble up error
        if (right.error) return right; // bubble up error

        return { _type: 'operation', operator: operator, operands: [ left, right ]};
      }
    }
  }

  if (nestLevel != 0)
    return { error: 'error', msg: 'Unbalanced parentheses in expression' };

  var num = Number(str);
  if (!Number.isNaN(num))
    return { _type: 'literal', val: num };

  return { _type: 'variable', name: str };
}

export function EvaluateExpression(expr: Expression, variableValues: { [name: string]: number }): number | Error {
  if (expr._type === 'literal')
    return expr.val;

  if (expr._type === 'variable') {
    const value = variableValues[expr.name];
    return value ? value : { error: 'error', msg: 'Unbound variable encountered' };
  }

  if (expr._type === 'operation') {
    const x: Array<Expression> = expr.operands;
    const values: Array<number | Error> = x.map(o => EvaluateExpression(o, variableValues));
    const successValues = values.filter(v => typeof(v) === 'number').map(v => Number(v));
    const errors: Array<Error> = values.filter(v => typeof(v) !== 'number');

    if (errors.length > 0) return errors[0];

    var f = operatorToFunctionMap[expr.operator];
    if (f == null)
      return { error: 'error', msg: 'Unsupported operator' };
    else
      return f(successValues);
  }
}
