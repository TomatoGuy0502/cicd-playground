import Stack from '../stack'

describe('My Stack', () => {
  let stack

  beforeEach(() => {
    stack = new Stack()
  })

  test('is created empty', () => {
    expect(stack.top).toBe(-1)
    expect(stack.items).toEqual({})
  })

  test('can push to the top', () => {
    stack.push('🍓')

    expect(stack.top).toBe(0)
    expect(stack.peek).toBe('🍓')
  })

  test('can pop top', () => {
    stack.push('🍓')
    expect(stack.items).toEqual({ 0: '🍓' })
    expect(stack.pop()).toBe('🍓')
    expect(stack.top).toBe(-1)
  })
})
