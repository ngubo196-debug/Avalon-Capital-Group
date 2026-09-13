'use client';

import { useState } from 'react';

type Currency = 'USD' | 'EUR' | 'GBP' | 'ZAR';

const CURRENCIES: Currency[] = ['USD', 'EUR', 'GBP', 'ZAR'];

// Manually-updated table, not a live FX rate. Update these two constants when rates move.
const RATES: Record<Exclude<Currency, 'ZAR'>, number> = {
  USD: 16.10,
  EUR: 18.70,
  GBP: 21.79,
};

const SYMBOLS: Record<Currency, string> = {
  USD: '$',
  EUR: '€',
  GBP: '£',
  ZAR: 'R',
};

const ZAR_TIERS = {
  entry: 18000,
  mid: 28000,
  top: 45000,
};

function formatAmount(zarAmount: number, currency: Currency): string {
  if (currency === 'ZAR') {
    return zarAmount.toLocaleString('en-US');
  }
  const converted = Math.round(zarAmount / RATES[currency]);
  return converted.toLocaleString('en-US');
}

export default function IntlBuyersPricing() {
  const [currency, setCurrency] = useState<Currency>('USD');
  const showApprox = currency !== 'ZAR';

  return (
    <>
      <div className="wds-currency-toggle" role="group" aria-label="Display prices in">
        {CURRENCIES.map((c) => (
          <button
            key={c}
            type="button"
            className={`wds-currency-btn${currency === c ? ' wds-currency-btn--active' : ''}`}
            aria-pressed={currency === c}
            onClick={() => setCurrency(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="wds-tier-grid">
        <div className="wds-tier-card wds-tier-card--entry">
          <div className="wds-tier-price">From {SYMBOLS[currency]}{formatAmount(ZAR_TIERS.entry, currency)}</div>
          <div className="wds-tier-range">Vehicles under R350,000</div>
          {showApprox && <div className="wds-tier-approx">Approximate. Final price confirmed in ZAR.</div>}
        </div>
        <div className="wds-tier-card">
          <div className="wds-tier-price">{SYMBOLS[currency]}{formatAmount(ZAR_TIERS.mid, currency)}</div>
          <div className="wds-tier-range">Vehicles R350,000 to R800,000</div>
          {showApprox && <div className="wds-tier-approx">Approximate. Final price confirmed in ZAR.</div>}
        </div>
        <div className="wds-tier-card">
          <div className="wds-tier-price">{SYMBOLS[currency]}{formatAmount(ZAR_TIERS.top, currency)}+</div>
          <div className="wds-tier-range">Vehicles above R800,000, scoped individually</div>
          {showApprox && <div className="wds-tier-approx">Approximate. Final price confirmed in ZAR.</div>}
        </div>
      </div>
    </>
  );
}
