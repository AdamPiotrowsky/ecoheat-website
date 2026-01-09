import { NextResponse } from 'next/server';
import { Resend } from 'resend';

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error('Brak RESEND_API_KEY w env');
      return NextResponse.json(
        { ok: false, error: 'Brak konfiguracji serwera (RESEND_API_KEY).' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const body = await req.json();

    const name = String(body.name ?? '').trim();
    const email = String(body.email ?? '').trim();
    const phone = String(body.phone ?? '').trim();
    const message = String(body.message ?? '').trim();

    if (!isValidEmail(email) || !message) {
      return NextResponse.json(
        { ok: false, error: 'Podaj poprawny email i treść wiadomości.' },
        { status: 400 }
      );
    }

    const to = process.env.CONTACT_TO;
    const from = process.env.CONTACT_FROM;

    if (!to || !from) {
      console.error('Brak CONTACT_TO lub CONTACT_FROM w env');
      return NextResponse.json(
        { ok: false, error: 'Brak konfiguracji adresów email.' },
        { status: 500 }
      );
    }

    const subject = 'EcoHeat Technic – wiadomość ze strony';

    const text =
      `Imię i nazwisko: ${name}\n` +
      `Email: ${email}\n` +
      `Telefon: ${phone}\n\n` +
      `${message}\n`;

    console.log('Wysyłam mail przez Resend…');

    const { data, error } = await resend.emails.send({
      from,
      to,
      subject,
      text,
      replyTo: email,
    });

    // 🔍 KLUCZOWE: zobaczmy co mówi Resend
    console.log('Resend response data:', data);
    console.log('Resend response error:', error);

    if (error) {
      console.error('Resend zwrócił błąd:', error);
      return NextResponse.json(
        { ok: false, error: 'Błąd wysyłki emaila przez Resend.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Błąd w /api/send-email:', err);
    return NextResponse.json(
      { ok: false, error: 'Nie udało się wysłać wiadomości.' },
      { status: 500 }
    );
  }
}
