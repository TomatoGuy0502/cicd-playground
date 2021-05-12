export const dayOfTheWeek = (date = new Date()) => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]

  return days[date.getDay()]
}

export const addHi = (greeting = 'Hay') => {
  return greeting + 'Hi'
}
