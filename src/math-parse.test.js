var pi = 3.14159;

describe('Math Parsing/Evaluation', () => {
  const math = require('./math-parse');

  const expectValue = (str, variables, expected) => {
    const expr = math.ParseExpression(str);
    const value = math.EvaluateExpression(expr, variables);

    if (typeof(expected) === 'number')
      expect(value).toEqual(expected);
    else if (typeof(expected) === 'string'){
      expect(value).toEqual({ error: 'error', msg: expected });
    }
  }

  test('Test 1', () => { expectValue('((x+4)/3)-y', { x: 2, y: 3 }, -1); });
  test('Test 2', () => { expectValue('((x+4)/3)-y', { x: 2 }, 'Unbound variable encountered'); });
  test('Test 3', () => { expectValue('3.14159 * (radius * radius)', { radius: 3 }, 9 * pi); });
});
