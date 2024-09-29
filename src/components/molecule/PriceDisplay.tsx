interface PriceProps {
  className?: string;
  price: number;
}
function formatPrice(value: number): string {
  return new Intl.NumberFormat("en-US").format(value);
}

export default function PriceDisplay({ price, className }: PriceProps) {
  return <span className={className}>{formatPrice(price)}</span>;
}
