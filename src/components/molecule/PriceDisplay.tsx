interface PriceProps {
  price: number;
}
function formatPrice(value: number): string {
  return new Intl.NumberFormat("en-US").format(value);
}

export default function PriceDisplay({ price }: PriceProps) {
  return <span>{formatPrice(price)}</span>;
}
