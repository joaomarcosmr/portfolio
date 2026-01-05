import { NextRequest, NextResponse } from "next/server";
import { sendEmail, validateEmail, sanitizeInput, EmailData } from "@/lib/emailService";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validação
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios" },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: "Email inválido" },
        { status: 400 }
      );
    }

    // Sanitização
    const emailData: EmailData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      subject: sanitizeInput(subject),
      message: sanitizeInput(message),
    };

    // Envio de email
    const success = await sendEmail(emailData);

    if (success) {
      return NextResponse.json(
        { message: "Email enviado com sucesso!" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: "Erro ao enviar email" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Erro na API de contato:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}






