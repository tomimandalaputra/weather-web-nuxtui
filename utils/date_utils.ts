export enum DATE_FORMAT {
  DATE = 'DD MMM YYYY',
  DATETIME = 'DD MMM YYYY, HH:mm A',
  TIME = 'HH:mm A',
}

export function dateFormat(date?: string, format: DATE_FORMAT | string = DATE_FORMAT.DATETIME) {
  if (!date)
    return undefined

  return useDateFormat(date, format).value
}

export function timestampFormat(timestamp: number, format: DATE_FORMAT | string = DATE_FORMAT.DATETIME) {
  if (!timestamp)
    return undefined

  // Convert timestamp (seconds) to Date
  const date = new Date(timestamp * 1000)

  return useDateFormat(date, format).value
}
