const monthsNames = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря'
]
export const formatDateforCreate = (dateVal, formatType = '') => {
  // YYYY-MM-DD HH:MM

  const date = dateVal || new Date()
  const formatValue = val => {
    return val < 10 ? '0' + val : val
  }

  const fullYear = date.getFullYear()
  const fullMonth =
    formatType === 'withMonthName'
      ? monthsNames[date.getMonth()].toUpperCase()
      : formatValue(date.getMonth() + 1)
  const fullDay =
    formatType === 'withMonthName'
      ? date.getDate()
      : formatValue(date.getDate())
  const fullHours = formatValue(date.getHours())
  const fullMinutes = formatValue(date.getMinutes())

  switch (formatType) {
    case 'withMonthName':
      return `${fullDay} ${fullMonth} ${fullYear}`
    case 'withDots':
      return `${fullDay}.${fullMonth}.${fullYear} ${fullHours}:${fullMinutes}`
    default:
      return `${fullYear}-${fullMonth}-${fullDay} ${fullHours}:${fullMinutes}`
  }
}
export const formatDateWithMonthName = value => {
  if (!value) return '-'

  return formatDateforCreate(new Date(value), 'withMonthName')
}
export const formatDateWithDots = value => {
  if (!value) return '-'

  return formatDateforCreate(new Date(value), 'withDots')
}
