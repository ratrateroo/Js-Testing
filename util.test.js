const { generateText } = require('./util');

test('output name and age', () => {
    const text = generateText('Mark', 31);
    expect(text).toBe('Mark (31 years old)');
});