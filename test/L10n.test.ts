import { L10n, l10n } from '../src';

describe('L10n', () => {
  const dict = {
    en: { hello: 'Hello', bye: 'Goodbye' },
    ja: { hello: 'こんにちは', bye: 'さようなら', '$0 said hello.': '$0はこんにちはと言った' },
  };

  beforeEach(() => {
    L10n.register(dict, 'ja');
  });

  afterEach(() => {
    L10n.register({}, 'default');
  });

  test('should register a dictionary', () => {
    expect(L10n['dict']).toEqual(dict);
    expect(L10n['lang']).toBe('ja');
  });

  test('should get a localized string', () => {
    expect(L10n.get('hello')).toBe('こんにちは');
    expect(L10n.get('bye', 'en')).toBe('Goodbye');
    expect(L10n.get('unknown-key')).toBe('unknown-key');
  });

  test('should format a localized string', () => {
    expect(L10n.format('$0 said hello.', ['Alice'])).toBe('Aliceはこんにちはと言った');
    expect(L10n.format('$0 $1', ['A', 'B'])).toBe('A B');
    expect(L10n.format('unknown-key', ['value'])).toBe('unknown-key');
  });

  test('should get a localized string using l10n helper function', () => {
    expect(l10n('hello')).toBe('こんにちは');
    expect(l10n('bye', undefined, 'en')).toBe('Goodbye');
    expect(l10n('unknown-key')).toBe('unknown-key');
  });

  test('should format a localized string using l10n helper function', () => {
    expect(l10n('$0 said hello.', ['Alice'])).toBe('Aliceはこんにちはと言った');
    expect(l10n('$0 $1', ['A', 'B'])).toBe('A B');
    expect(l10n('unknown-key', ['value'])).toBe('unknown-key');
  });
});
