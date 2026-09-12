'use client';

import { useState } from 'react';

// Placeholder Formspree endpoint. Must be replaced with a real form ID before this page goes live.
const FORM_ENDPOINT = 'https://formspree.io/f/REPLACE_BEFORE_LAUNCH';

export default function IntlBuyersForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      // silently handle
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="wds-form-success">
        <strong>Enquiry received.</strong>
        <p>Thank you. We review every enquiry personally and respond within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <input type="text" name="_gotcha" style={{ display: 'none' }} />
      <input type="hidden" name="_subject" value="New International Buyer Enquiry - Vantara" />

      <div className="wds-form-group">
        <label className="wds-form-label" htmlFor="ib-name">Full Name</label>
        <input className="wds-form-input" type="text" id="ib-name" name="name" placeholder="Your full name" required />
      </div>
      <div className="wds-form-group">
        <label className="wds-form-label" htmlFor="ib-email">Email Address</label>
        <input className="wds-form-input" type="email" id="ib-email" name="email" placeholder="your@email.com" required />
      </div>
      <div className="wds-form-group">
        <label className="wds-form-label" htmlFor="ib-budget">Budget</label>
        <input className="wds-form-input" type="text" id="ib-budget" name="budget" placeholder="e.g. R400,000" required />
      </div>
      <div className="wds-form-group">
        <label className="wds-form-label" htmlFor="ib-vehicle">Vehicle Type / Spec</label>
        <input className="wds-form-input" type="text" id="ib-vehicle" name="vehicle" placeholder="Make, model, or type you have in mind" required />
      </div>
      <div className="wds-form-group">
        <label className="wds-form-label" htmlFor="ib-timeline">Timeline</label>
        <input className="wds-form-input" type="text" id="ib-timeline" name="timeline" placeholder="When do you need this sorted by?" />
      </div>
      <div className="wds-form-group">
        <label className="wds-form-label" htmlFor="ib-country">Country</label>
        <input className="wds-form-input" type="text" id="ib-country" name="country" placeholder="Where you're relocating from" required />
      </div>
      <button type="submit" className="wds-cta-btn" disabled={submitting}>
        {submitting ? 'Sending...' : 'Start your enquiry'}
      </button>
    </form>
  );
}
