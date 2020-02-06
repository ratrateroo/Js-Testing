const { generateText, checkAndGenerate } = require('./util');

test('should output name and age', () => {
    const text = generateText('Mark', 31);
    expect(text).toBe('Mark (31 years old)');
});

test('should generate a valid text output', () => {
    const text = checkAndGenerate('Mark', 31);
    expect(text).toBe('Mark (31 years old)');
});