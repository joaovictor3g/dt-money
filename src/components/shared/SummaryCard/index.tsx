import {
  ArrowCircleDown,
  ArrowCircleUp,
  CurrencyDollar,
  IconProps,
} from "phosphor-react";
import { Box } from "./styles";

type SummaryType = "income" | "outcome" | "total";

interface SummaryBoxProps {
  type: SummaryType;
  variant?: "green";
}

const defaultIconProps: IconProps = { size: 32 };

const options = new Map<SummaryType, string>([
  ["income", "Entradas"],
  ["outcome", "Saidas"],
  ["total", "Total"],
]);

const icons = new Map<SummaryType, JSX.Element>([
  ["income", <ArrowCircleUp {...defaultIconProps} color="#00b37e" />],
  ["outcome", <ArrowCircleDown {...defaultIconProps} color="#F75A68" />],
  ["total", <CurrencyDollar {...defaultIconProps} color="#ffffff" />],
]);

export function SummaryCard({ type, variant }: SummaryBoxProps) {
  const option = options.get(type);
  const icon = icons.get(type);

  return (
    <Box variant={variant}>
      <header>
        <span>{option}</span>
        {icon}
      </header>

      <strong>R$ 17.400,00</strong>
    </Box>
  );
}
