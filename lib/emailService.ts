// Email service configuration
// Para usar EmailJS (gratuito e fácil de configurar):
// 1. Crie uma conta em https://www.emailjs.com/
// 2. Configure um serviço de email
// 3. Crie um template de email
// 4. Obtenha suas credenciais e adicione ao .env.local

export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendEmail(data: EmailData): Promise<boolean> {
  try {
    // Simulação de envio de email
    // Em produção, descomente e configure com EmailJS
    
    /*
    // Usando EmailJS
    const emailjs = (await import('@emailjs/browser')).default;
    
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      subject: data.subject,
      message: data.message,
      to_name: 'Seu Nome',
    };

    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );

    return response.status === 200;
    */

    // Simulação para desenvolvimento
    console.log('Email enviado:', data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return true;
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return false;
  }
}

// Validação de email
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Sanitização de input
export function sanitizeInput(input: string): string {
  return input.trim().replace(/<[^>]*>/g, '');
}




