import { priceFormatter } from '@/utils/formatter'
import {
  ArrowCircleDown,
  ArrowCircleUp,
  CurrencyDollar,
  IconProps,
} from 'phosphor-react'
import { SummaryType } from 'transactions'
import { Box } from './styles'

interface SummaryBoxProps {
  type: SummaryType
  variant?: 'green'
  price: number
}

const defaultIconProps: IconProps = { size: 32 }

const options = new Map<SummaryType, string>([
  ['income', 'Entradas'],
  ['outcome', 'Saidas'],
  ['total', 'Total'],
])

const icons = new Map<SummaryType, JSX.Element>([
  ['income', <ArrowCircleUp {...defaultIconProps} key="1" color="#00b37e" />],
  [
    'outcome',
    <ArrowCircleDown {...defaultIconProps} key="2" color="#F75A68" />,
  ],
  ['total', <CurrencyDollar {...defaultIconProps} key="3" color="#ffffff" />],
])

export function SummaryCard({ type, variant, price }: SummaryBoxProps) {
  const option = options.get(type)
  const icon = icons.get(type)
  const priceFormatted = priceFormatter(price)

  return (
    <Box variant={variant}>
      <header>
        <span>{option}</span>
        {icon}
      </header>

      <strong>{priceFormatted}</strong>
    </Box>
  )
}
