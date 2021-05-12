export const dayOfTheWeek = (date = new Date()) => {
  const days = [
    'Sunnnday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]

  return days[date.getDay()]
}
