'use client';

import { useState } from 'react';

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

type Props = {
  title?: string;
  description?: string;
  submitLabel?: string;
};

const inputBase =
  'mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-black/10';

export default function MeetingForm({
  title = 'Umów się na spotkanie',
  description = 'Zostaw kontakt i krótki opis potrzeb — odezwiemy się.',
  submitLabel = 'Wyślij wiadomość',
}: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');

  const emailOk = isValidEmail(email);
  const messageOk = message.trim().length > 0;
  const canSend = emailOk && messageOk && status !== 'sending';

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSend) return;

    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.ok) {
        setStatus('error');
        setErrorMsg(data?.error || 'Nie udało się wysłać wiadomości.');
        return;
      }

      setStatus('sent');
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMsg('Błąd połączenia. Spróbuj ponownie.');
    }
  }

  return (
    <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm md:p-10">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-2xl font-bold tracking-tight md:text-3xl">{title}</h3>
        <p className="mx-auto mt-3 max-w-2xl text-gray-600">{description}</p>
      </div>

      {/* Form */}
      <form
        className="mx-auto mt-8 w-full max-w-2xl"
        onSubmit={handleSubmit}
      >
        <div className="grid gap-4 md:grid-cols-2">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-900">
              Imię i nazwisko
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Imię i nazwisko"
              className={`${inputBase} border-black/10 focus:border-black/30`}
              autoComplete="name"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-gray-900">
              Telefon <span className="font-normal text-gray-400">(opcjonalnie)</span>
            </label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="np. 123 456 789"
              className={`${inputBase} border-black/10 focus:border-black/30`}
              autoComplete="tel"
              inputMode="tel"
            />
          </div>
        </div>

        {/* Email */}
        <div className="mt-4">
          <label className="block text-sm font-semibold text-gray-900">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="np. twójadres@email.pl"
            className={[
              inputBase,
              email.length === 0
                ? 'border-black/10 focus:border-black/30'
                : emailOk
                ? 'border-black/20 focus:border-black/40'
                : 'border-red-400 focus:border-red-500',
            ].join(' ')}
            autoComplete="email"
            inputMode="email"
          />
          {!emailOk && email.length > 0 ? (
            <p className="mt-2 text-xs text-red-600">Podaj poprawny adres email.</p>
          ) : null}
        </div>

        {/* Message */}
        <div className="mt-4">
          <label className="block text-sm font-semibold text-gray-900">
            Treść wiadomości <span className="text-red-500">*</span>
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Opisz krótko, czego potrzebujesz (np. pompa ciepła / rekuperacja / modernizacja instalacji)..."
            rows={6}
            className={`${inputBase} border-black/10 focus:border-black/30`}
          />
          {!messageOk && message.length > 0 ? (
            <p className="mt-2 text-xs text-red-600">Wpisz treść wiadomości.</p>
          ) : null}
        </div>

        {/* Button + status */}
        <div className="mt-6">
          <button
            type="submit"
            disabled={!canSend}
            className={[
              'inline-flex w-full items-center justify-center rounded-xl px-8 py-4 text-base font-semibold border border-black transition-all duration-300 ease-out',
              canSend
                ? 'bg-black text-white hover:bg-white hover:text-black hover:shadow-md'
                : 'bg-black/40 text-white/80 cursor-not-allowed',
            ].join(' ')}
          >
            {status === 'sending' ? 'Wysyłanie…' : submitLabel}
          </button>

          {status === 'sent' && (
            <p className="mt-3 text-center text-sm font-semibold text-green-700">
              ✅ Wiadomość została wysłana. Dziękujemy!
            </p>
          )}

          {status === 'error' && (
            <p className="mt-3 text-center text-sm font-semibold text-red-700">
              ❌ {errorMsg || 'Nie udało się wysłać wiadomości.'}
            </p>
          )}

          <p className="mt-3 text-center text-xs text-gray-500">
           
          </p>
        </div>
      </form>
    </div>
  );
}
