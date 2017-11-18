// @flow

const f1 = () => {
  const a: Array<number | string> = [ 'one', 2, 3, 'four' ];
  const b = a.filter(x => typeof(x) === 'number');
};

const f2 = (a: number | string) => {
  if (typeof(a) === 'number'){
    return a + 5;
  }
  else {
    const c = a;
    console.log('string: ' + a);
    return -1;
  }
};
