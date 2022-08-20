declare module 'transactions' {
  export type SummaryType = 'income' | 'outcome' | 'total'

  export interface Transaction {
    id?: number
    description: string
    type: 'income' | 'outcome'
    price: number
    createdAt?: Date
    category: string
    priceFormatted?: string
    dateFormatted?: string
  }
}
