import { greet } from './greet.js';

describe('greet', () => {
  it('returns a String "Hello Jane!" if called with greet ("Jane")', () => {
    const result = greet('Jane');
    expect(result).toBe('Hello Jane!');
  });

  it('returns "Hello stranger!" if called greet()', () => {
    const result = greet();
    expect(result).toBe('Hello stranger!');
  });

  it('returns "Hello coach" if called greet("Mareike"), greet("Paul") and greet("Jerry")', () => {
    expect(greet('Mareike')).toBe('Hello Coach!');
    expect(greet('Paul')).toBe('Hello Coach!');
    expect(greet('Jerry')).toBe('Hello Coach!');
  });
});
