import { dayOfTheWeek } from './utils'

test('2021/5/2 is Sunday', () => {
  expect(dayOfTheWeek(new Date('2021/5/2'))).toBe('Sunday')
})
