import assertIsCallable from '../src/assert-is-callable-x';

/* eslint-disable-next-line compat/compat */
const hasSymbolSupport = typeof Symbol === 'function' && typeof Symbol('') === 'symbol';
const ifSymbolSupportIt = hasSymbolSupport ? it : xit;

describe('assertIsCallable', function() {
  it('primitives should throw a TypeError', function() {
    expect.assertions(11);
    const block = function(value) {
      try {
        assertIsCallable(value);

        return false;
      } catch (e) {
        expect(e).toStrictEqual(expect.any(TypeError));
        expect(e.message).toBe(`${String(value)} is not callable`);
      }

      return true;
    };

    const values = [undefined, null, 1, true, ''];
    const expected = values.map(function() {
      return true;
    });
    const actual = values.map(block);
    expect(actual).toStrictEqual(expected);
  });

  it('objects should throw a TypeError', function() {
    expect.assertions(9);
    const block = function(value) {
      try {
        assertIsCallable(value);

        return false;
      } catch (e) {
        expect(e).toStrictEqual(expect.any(TypeError));
        expect(e.message).toBe('#<Object> is not callable');
      }

      return true;
    };

    const values = [[], {}, /r/, new Date()];
    const expected = values.map(function() {
      return true;
    });
    const actual = values.map(block);
    expect(actual).toStrictEqual(expected);
  });

  ifSymbolSupportIt('Symbol literals should throw a TypeError', function() {
    expect.assertions(3);
    const block = function(value) {
      try {
        assertIsCallable(value);

        return false;
      } catch (e) {
        expect(e).toStrictEqual(expect.any(TypeError));
        expect(e.message).toBe('Symbol(mySymbol) is not callable');
      }

      return true;
    };

    /* eslint-disable-next-line compat/compat */
    const values = [Symbol('mySymbol')];
    const expected = values.map(function() {
      return true;
    });
    const actual = values.map(block);
    expect(actual).toStrictEqual(expected);
  });

  ifSymbolSupportIt('Symbol objects should throw a TypeError', function() {
    expect.assertions(3);
    const block = function(value) {
      try {
        assertIsCallable(value);

        return false;
      } catch (e) {
        expect(e).toStrictEqual(expect.any(TypeError));
        expect(e.message).toBe('#<Object> is not callable');
      }

      return true;
    };

    /* eslint-disable-next-line compat/compat */
    const values = [Object(Symbol('mySymbol'))];
    const expected = values.map(function() {
      return true;
    });
    const actual = values.map(block);
    expect(actual).toStrictEqual(expected);
  });

  it('should return the function', function() {
    expect.assertions(1);
    const block = function(value) {
      try {
        return assertIsCallable(value);
      } catch (ignore) {
        // empty
      }

      return false;
    };

    /* eslint-disable-next-line lodash/prefer-noop */
    const values = [function() {}, Array, block, assertIsCallable];
    const expected = values.map(function(x) {
      return x;
    });
    const actual = values.map(block);
    expect(actual).toStrictEqual(expected);
  });
});
