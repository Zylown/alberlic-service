import { COMPANY } from "@/app/data";

export function BrandMark() {
  return (
    <a className="brand-mark" href="#inicio" aria-label={`${COMPANY.name} inicio`}>
      <span className="brand-symbol" aria-hidden="true">
        A
      </span>
      <span className="brand-copy">
        <strong>{COMPANY.name}</strong>
        <small>Transporte y mudanzas</small>
      </span>
    </a>
  );
}
