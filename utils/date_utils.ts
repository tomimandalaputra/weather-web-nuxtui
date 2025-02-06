export enum DATE_FORMAT {
  DATE = 'DD MMM YYYY',
  DATETIME = 'DD MMM YYYY, HH:mm',
  TIME = 'HH:mm a',
}

export function dateFormat(date?: string, format: DATE_FORMAT | string = DATE_FORMAT.DATETIME) {
  if (!date)
    return undefined

  return useDateFormat(date, format).value
}
