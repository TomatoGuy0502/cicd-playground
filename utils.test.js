import { dayOfTheWeek, addHi } from './utils'

test('2021/5/2 is Sunday', () => {
  expect(dayOfTheWeek(new Date('2021/5/2'))).toBe('Sunday')
})

test('addHi(Yo) equals to YoHi ', () => {
  expect(addHi('Yo')).toBe('YoHi')
  expect(addHi('BOb')).toBe('BObHi')
  expect(addHi('Lofi')).toBe('LofiHi')
})
