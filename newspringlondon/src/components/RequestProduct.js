import React, { useEffect, useRef, useState } from 'react';
import './RequestProduct.css';

/**
 * Props:
 * - open: boolean (show/hide)
 * - productName: string
 * - onClose: () => void
 * - endpoint?: string (default: '/api/request-product')
 */
export default function RequestProduct({
  open = false,
  productName = '',
  onClose = () => {},
  endpoint = '/api/request-product',
}) {
  const panelRef = useRef(null);
  const [status, setStatus] = useState('');
  const [submitting, setSubmitting] = useState(false);

  // Close on Esc
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  // Focus the first input when opened
  useEffect(() => {
    if (open && panelRef.current) {
      const first = panelRef.current.querySelector('input, textarea, button');
      first && first.focus();
    }
  }, [open]);

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;

    const fd = new FormData(e.currentTarget);
    const payload = {
      product: productName,
      quantity: Number(fd.get('quantity') || 1),
      name: (fd.get('name') || '').toString().trim(),
      email: (fd.get('email') || '').toString().trim(),
      phone: (fd.get('phone') || '').toString().trim(),
      notes: (fd.get('notes') || '').toString().trim(),
      hp: (fd.get('company') || '').toString(), // honeypot
    };

    if (!payload.name || !payload.email) {
      setStatus('Please complete required fields.');
      return;
    }
    if (payload.hp) {
      // Bot likely — pretend success
      setStatus('Thanks! We’ve received your request.');
      e.currentTarget.reset();
      return;
    }

    try {
      setSubmitting(true);
      setStatus('Sending...');
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('Thanks! We’ve received your request.');
      e.currentTarget.reset();
    } catch {
      setStatus('Something went wrong. Please try again or email info@newspringlondon.com.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="rp__backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label={`Request: ${productName}`}>
      <div className="rp__panel" onClick={(e) => e.stopPropagation()} ref={panelRef}>
        <button className="rp__close" onClick={onClose} aria-label="Close request form">×</button>
        <h3 className="rp__title">Request: {productName}</h3>

        <form onSubmit={handleSubmit} noValidate>
          <label className="rp__label">
            Quantity
            <input className="rp__input" type="number" name="quantity" min="1" defaultValue="1" required />
          </label>

          <label className="rp__label">
            Your name
            <input className="rp__input" type="text" name="name" maxLength={80} required />
          </label>

          <label className="rp__label">
            Email
            <input className="rp__input" type="email" name="email" required />
          </label>

          <label className="rp__label">
            Phone (optional)
            <input className="rp__input" type="tel" name="phone" inputMode="tel" autoComplete="tel" />
          </label>

          <label className="rp__label">
            Notes (optional)
            <textarea className="rp__textarea" name="notes" rows="3" maxLength={500} />
          </label>

          {/* Honeypot (hidden for humans) */}
          <input type="text" name="company" className="rp__hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />

          <label className="rp__consent">
            <input type="checkbox" required /> I agree to be contacted about my request. See our&nbsp;
            <a href="/privacy" target="_blank" rel="noreferrer">privacy notice</a>.
          </label>

          <button type="submit" className="rp__submit" disabled={submitting}>
            {submitting ? 'Sending…' : 'Send request'}
          </button>

          <p className="rp__status" role="status" aria-live="polite">{status}</p>
        </form>
      </div>
    </div>
  );
}
