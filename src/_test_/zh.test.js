
import zh from '../zh'

describe('中文字符串',()=>{
   test('包含"中文"',()=>{
     expect(zh).toMatch(/中文/);
   })
   test('passes when given an empty string', () => {
    expect('').toBeEmpty();
    expect('hello').not.toBeEmpty();
  });
})