import { describe, it, expect } from 'vitest';

import { messageDigest } from '../src';

describe('messageDigest', () => {
  it('should convert given message to the message digest using SHA-1', async () => {
    const message = 'Hello, World!';
    const digest = await messageDigest(message, 'SHA-1');
    expect(digest).toBe('0a0a9f2a6772942557ab5355d76af442f8f65e01');
  });

  it('should convert given message to the message digest using SHA-256', async () => {
    const message = 'Hello, World!';
    const digest = await messageDigest(message, 'SHA-256');
    expect(digest).toBe('dffd6021bb2bd5b0af676290809ec3a53191dd81c7f70a4b28688a362182986f');
  });

  it('should convert given message to the message digest using SHA-384', async () => {
    const message = 'Hello, World!';
    const digest = await messageDigest(message, 'SHA-384');
    expect(digest).toBe(
      '5485cc9b3365b4305dfb4e8337e0a598a574f8242bf17289e0dd6c20a3cd44a089de16ab4ab308f63e44b1170eb5f515',
    );
  });

  it('should convert given message to the message digest using SHA-512', async () => {
    const message = 'Hello, World!';
    const digest = await messageDigest(message, 'SHA-512');
    expect(digest).toBe(
      '374d794a95cdcfd8b35993185fef9ba368f160d8daf432d08ba9f1ed1e5abe6cc69291e0fa2fe0006a52570ef18c19def4e617c33ce52ef0a6e5fbe318cb0387',
    );
  });
});
