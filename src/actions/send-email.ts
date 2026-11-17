'use server';

import { Resend } from 'resend';

import { env } from '@/env.mjs';
import { contactEmail } from '@/lib/data';
import { TFormSchema } from '@/lib/form-schema';

export const sendEmail = async ({ email, message }: TFormSchema) => {
  try {
    const resend = new Resend(env.RESEND_API_KEY);
    // Resend returns API failures in `error` instead of throwing
    const { error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: contactEmail,
      subject: `Portfolio enquiry from ${email}`,
      replyTo: email,
      text: `email: ${email} \nmessage: ${message}`,
    });

    if (error) {
      console.error('Resend error:', error);
      return {
        error: `Couldn't send your message. Please email ${contactEmail} directly.`,
      };
    }

    return {
      data: 'Email sent successfully!',
    };
  } catch {
    return {
      error: `Couldn't send your message. Please email ${contactEmail} directly.`,
    };
  }
};
