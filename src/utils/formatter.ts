export function priceFormatter(price: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price)
}

export function dateFormatter(date: Date) {
  return new Intl.DateTimeFormat('pt-BR').format(date)
}
