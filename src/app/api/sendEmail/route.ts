// src/app/api/sendEmail/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  services?: string[];
}

interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

export async function POST(request: NextRequest) {
  try {
    // Parse and validate request body
    const body: ContactFormData = await request.json();
    const { name, email, phone, subject, message, services } = body;

    // Enhanced validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: 'Tous les champs obligatoires doivent être remplis.' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Veuillez fournir une adresse email valide.' },
        { status: 400 }
      );
    }

    // Security: Basic input sanitization
    const sanitizeInput = (input: string): string => {
      return input.replace(/[<>]/g, '').trim();
    };

    const sanitizedName = sanitizeInput(name);
    const sanitizedSubject = sanitizeInput(subject);
    const sanitizedMessage = sanitizeInput(message);
    const formattedServices = services?.length ? services.join(', ') : 'Non spécifié';

    // Email configuration
    const emailConfig: EmailConfig = {
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: parseInt(process.env.EMAIL_PORT || '587') === 465,
      auth: {
        user: process.env.EMAIL_USER || '',
        pass: process.env.EMAIL_PASS || '',
      },
    };

    // Validate email configuration
    if (!emailConfig.auth.user || !emailConfig.auth.pass) {
      return NextResponse.json(
        { success: false, error: 'Configuration email manquante.' },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport(emailConfig);

    // Verify connection
    await transporter.verify();

    const formattedMessage = sanitizedMessage.replace(/\n/g, '<br>');
    const currentYear = new Date().getFullYear();
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';
    const noReplyEmail = `noreply@${process.env.EMAIL_USER?.split('@')[1] || ''}`;

    // --- EMAIL 1: Send notification to AGENCY (admin) ---
    const adminEmail = process.env.EMAIL_TO || process.env.EMAIL_USER;
    
    const adminEmailPromise = transporter.sendMail({
      from: `"Taguini Marketing" <${noReplyEmail}>`,
      replyTo: email,
      to: adminEmail,
      subject: `Nouvelle demande de contact: ${sanitizedName} - ${sanitizedSubject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Nouvelle demande de contact</title>
          <style>
            body {
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f5f5f5;
              color: #1f2937;
            }
            .container {
              max-width: 600px;
              margin: 20px auto;
              background-color: #ffffff;
              border-radius: 16px;
              overflow: hidden;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
              border: 1px solid #e5e7eb;
            }
            .header {
              background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
              padding: 32px;
              text-align: center;
              color: white;
            }
            .header h1 {
              margin: 0;
              font-size: 24px;
              font-weight: 700;
            }
            .header p {
              margin: 8px 0 0 0;
              opacity: 0.9;
              font-size: 14px;
            }
            .content {
              padding: 32px;
            }
            .info-card {
              background: #f9fafb;
              border-radius: 12px;
              padding: 20px;
              margin-bottom: 24px;
              border-left: 4px solid #ef4444;
            }
            .info-row {
              margin-bottom: 12px;
            }
            .info-label {
              font-weight: 600;
              color: #374151;
              margin-bottom: 4px;
              font-size: 13px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            }
            .info-value {
              color: #111827;
              font-size: 15px;
              word-break: break-word;
            }
            .message-box {
              background: #fef2f2;
              border-radius: 12px;
              padding: 20px;
              margin-top: 20px;
              border: 1px solid #fee2e2;
            }
            .message-box h3 {
              color: #dc2626;
              margin: 0 0 12px 0;
              font-size: 16px;
            }
            .message-content {
              color: #374151;
              line-height: 1.6;
              font-size: 14px;
            }
            .footer {
              text-align: center;
              padding: 24px;
              background: #f9fafb;
              border-top: 1px solid #e5e7eb;
              font-size: 12px;
              color: #6b7280;
            }
            .btn {
              display: inline-block;
              padding: 10px 20px;
              background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
              color: white;
              text-decoration: none;
              border-radius: 8px;
              font-size: 14px;
              font-weight: 500;
              margin-top: 12px;
            }
            .badge {
              display: inline-block;
              background: #e5e7eb;
              color: #374151;
              padding: 4px 12px;
              border-radius: 20px;
              font-size: 12px;
              margin-top: 8px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Nouvelle demande de contact</h1>
              <p>Formulaire de contact - Taguini Marketing</p>
            </div>
            <div class="content">
              <div class="info-card">
                <div class="info-row">
                  <div class="info-label">👤 Nom complet</div>
                  <div class="info-value">${sanitizedName}</div>
                </div>
                <div class="info-row">
                  <div class="info-label">📧 Email</div>
                  <div class="info-value">${email}</div>
                </div>
                ${phone ? `
                <div class="info-row">
                  <div class="info-label">📞 Téléphone</div>
                  <div class="info-value">${phone}</div>
                </div>
                ` : ''}
                <div class="info-row">
                  <div class="info-label">🎯 Sujet</div>
                  <div class="info-value">${sanitizedSubject}</div>
                </div>
                <div class="info-row">
                  <div class="info-label">🛠️ Services</div>
                  <div class="info-value">${formattedServices}</div>
                </div>
                <div class="info-row">
                  <div class="info-label">📅 Date</div>
                  <div class="info-value">${new Date().toLocaleString('fr-FR')}</div>
                </div>
              </div>

              <div class="message-box">
                <h3>💬 Message du client</h3>
                <div class="message-content">${formattedMessage}</div>
              </div>

              <div style="text-align: center; margin-top: 24px;">
                <a href="mailto:${email}" class="btn">📧 Répondre au client</a>
              </div>
            </div>
            <div class="footer">
              <p>© ${currentYear} Taguini Marketing - Agence de marketing digital</p>
              <p>Cet email a été envoyé automatiquement depuis le formulaire de contact.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    // --- EMAIL 2: Send auto-reply to CLIENT ---
    const clientEmailPromise = transporter.sendMail({
      from: `"Taguini Marketing" <${noReplyEmail}>`,
      to: email,
      subject: `Merci pour votre message, ${sanitizedName} !`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Confirmation de réception</title>
          <style>
            body {
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              margin: 0;
              padding: 0;
              background: linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%);
              color: #1f2937;
            }
            .container {
              max-width: 600px;
              margin: 20px auto;
              background-color: #ffffff;
              border-radius: 24px;
              overflow: hidden;
              box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
              border: 1px solid #e5e7eb;
            }
            .header {
              background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
              padding: 40px;
              text-align: center;
              color: white;
              position: relative;
            }
            .header h1 {
              margin: 0;
              font-size: 28px;
              font-weight: 700;
            }
            .header p {
              margin: 12px 0 0 0;
              opacity: 0.95;
              font-size: 16px;
            }
            .content {
              padding: 40px;
            }
            .welcome-message {
              font-size: 16px;
              line-height: 1.6;
              color: #374151;
              margin-bottom: 32px;
            }
            .steps {
              display: flex;
              flex-direction: column;
              gap: 16px;
              margin: 32px 0;
            }
            .step {
              display: flex;
              align-items: flex-start;
              gap: 16px;
              padding: 16px;
              background: #f9fafb;
              border-radius: 12px;
              border: 1px solid #e5e7eb;
            }
            .step-number {
              width: 32px;
              height: 32px;
              background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
              color: white;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: 700;
              font-size: 14px;
              flex-shrink: 0;
            }
            .step-content h4 {
              margin: 0 0 4px 0;
              color: #111827;
              font-size: 16px;
            }
            .step-content p {
              margin: 0;
              color: #6b7280;
              font-size: 14px;
            }
            .contact-info {
              background: linear-gradient(135deg, #fef2f2 0%, #fff5f5 100%);
              padding: 24px;
              border-radius: 12px;
              margin: 32px 0;
              border: 1px solid #fee2e2;
            }
            .contact-info h3 {
              color: #dc2626;
              margin: 0 0 16px 0;
              font-size: 18px;
            }
            .contact-details {
              display: flex;
              flex-direction: column;
              gap: 12px;
            }
            .contact-item {
              display: flex;
              align-items: center;
              gap: 12px;
            }
            .contact-icon {
              width: 32px;
              height: 32px;
              background: white;
              border-radius: 8px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 18px;
            }
            .btn-group {
              display: flex;
              flex-wrap: wrap;
              gap: 12px;
              justify-content: center;
              margin-top: 32px;
            }
            .btn {
              display: inline-flex;
              align-items: center;
              gap: 8px;
              padding: 12px 24px;
              background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
              color: white;
              text-decoration: none;
              border-radius: 10px;
              font-weight: 600;
              font-size: 14px;
              transition: transform 0.2s, box-shadow 0.2s;
            }
            .btn-secondary {
              background: #f3f4f6;
              color: #374151;
              border: 1px solid #e5e7eb;
            }
            .btn:hover {
              transform: translateY(-2px);
              box-shadow: 0 10px 20px rgba(239, 68, 68, 0.2);
            }
            .footer {
              text-align: center;
              padding: 24px;
              background: #f9fafb;
              border-top: 1px solid #e5e7eb;
              font-size: 12px;
              color: #6b7280;
            }
            .social-links {
              display: flex;
              justify-content: center;
              gap: 16px;
              margin-top: 16px;
            }
            .social-link {
              color: #6b7280;
              text-decoration: none;
              font-size: 12px;
            }
            .social-link:hover {
              color: #ef4444;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>✨ Merci pour votre message !</h1>
              <p>Votre demande a bien été reçue</p>
            </div>
            <div class="content">
              <div class="welcome-message">
                <strong>Bonjour ${sanitizedName},</strong><br><br>
                Nous vous remercions de nous avoir contactés concernant <strong>« ${sanitizedSubject} »</strong>.
                Votre message est important pour nous et nous sommes ravis de pouvoir vous accompagner dans votre projet.
              </div>

              <div class="steps">
                <div class="step">
                  <div class="step-number">1</div>
                  <div class="step-content">
                    <h4>Analyse de votre demande</h4>
                    <p>Notre équipe analyse vos besoins en marketing digital</p>
                  </div>
                </div>
                <div class="step">
                  <div class="step-number">2</div>
                  <div class="step-content">
                    <h4>Proposition personnalisée</h4>
                    <p>Nous vous préparons une stratégie sur mesure adaptée à vos objectifs</p>
                  </div>
                </div>
                <div class="step">
                  <div class="step-number">3</div>
                  <div class="step-content">
                    <h4>Contact rapide</h4>
                    <p>Nous vous recontacterons sous 24 à 48 heures ouvrées</p>
                  </div>
                </div>
              </div>

              <div class="contact-info">
                <h3>📞 Contactez-nous directement</h3>
                <div class="contact-details">
                  <div class="contact-item">
                    <div class="contact-icon">📧</div>
                    <div>contact@taguinimarketing.com</div>
                  </div>
                  <div class="contact-item">
                    <div class="contact-icon">📱</div>
                    <div>+216 54 650 272</div>
                  </div>
                  <div class="contact-item">
                    <div class="contact-icon">💬</div>
                    <div>WhatsApp: +216 54 650 272</div>
                  </div>
                </div>
              </div>

              <div class="btn-group">
                <a href="${baseUrl}/services" class="btn">
                  🚀 Découvrir nos services
                </a>
                <a href="${baseUrl}/portfolio" class="btn btn-secondary">
                  📁 Voir notre portfolio
                </a>
              </div>
            </div>
            <div class="footer">
              <p>© ${currentYear} Taguini Marketing - Agence de marketing digital</p>
              <p>Cet email a été envoyé automatiquement. Merci de ne pas y répondre.</p>
              <div class="social-links">
                <a href="#" class="social-link">Facebook</a>
                <a href="#" class="social-link">Instagram</a>
                <a href="#" class="social-link">LinkedIn</a>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    // Wait for both emails to be sent
    await Promise.all([adminEmailPromise, clientEmailPromise]);

    return NextResponse.json({
      success: true,
      message: 'Votre message a été envoyé avec succès ! Notre équipe vous recontactera dans les plus brefs délais.',
    });
  } catch (error) {
    console.error('Email sending error:', error);
    
    let errorMessage = 'Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer ou nous contacter directement au +216 54 650 272.';
    
    if (error instanceof Error) {
      if (error.message.includes('EAUTH')) {
        errorMessage = 'Erreur d\'authentification email. Veuillez contacter notre support.';
      } else if (error.message.includes('ECONNECTION')) {
        errorMessage = 'Problème de connexion au serveur email. Veuillez réessayer plus tard.';
      }
    }

    return NextResponse.json(
      { 
        success: false, 
        error: errorMessage,
        alternative: 'Vous pouvez également nous contacter directement par téléphone au +216 54 650 272'
      },
      { status: 500 }
    );
  }
}