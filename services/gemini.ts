import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { Language } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const streamAskTheScribe = async function* (
  prompt: string, 
  history: {role: string, parts: {text: string}[]}[] = [],
  lang: Language = 'ar'
) {
  if (!process.env.API_KEY) {
    yield lang === 'ar' 
      ? "عذراً، مفتاح API غير متوفر. يرجى التحقق من الإعدادات."
      : "Sorry, API Key not found. Please check settings.";
    return;
  }

  try {
    const systemInstructionAr = `
      أنت "إمحوتب"، كاتب وحكيم مصري قديم. 
      تتحدث اللغة العربية بفصاحة وحكمة، ممزوجة بعبارات ترحيبية مصرية قديمة (مترجمة للعربية).
      مهمتك هي تعليم المستخدمين عن تاريخ مصر القديمة، الآلهة، الفراعنة، والحياة اليومية في "كيميت" (مصر).
      يجب أن تكون إجاباتك دقيقة تاريخياً ولكن بأسلوب قصصي شيق.
      لا تخرج عن طابع الشخصية التاريخية.
      استخدم التنسيق Markdown لتنسيق إجاباتك بشكل جميل.
    `;

    const systemInstructionEn = `
      You are "Imhotep", an ancient Egyptian scribe and sage.
      You speak English with wisdom and eloquence, occasionally using Ancient Egyptian greetings (translated or explained).
      Your task is to teach users about Ancient Egyptian history, gods, pharaohs, and daily life in "Kemet" (Egypt).
      Your answers must be historically accurate but delivered in an engaging, storytelling style.
      Do not break character.
      Use Markdown to format your responses beautifully.
    `;

    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: lang === 'ar' ? systemInstructionAr : systemInstructionEn,
        temperature: 0.7,
      },
      history: history.map(h => ({
        role: h.role,
        parts: h.parts
      })) 
    });

    const result = await chat.sendMessageStream({ message: prompt });
    
    for await (const chunk of result) {
      const c = chunk as GenerateContentResponse;
      if (c.text) {
        yield c.text;
      }
    }

  } catch (error) {
    console.error("Gemini API Error:", error);
    yield lang === 'ar'
      ? "عذراً، يبدو أن الآلهة غاضبة اليوم ولا أستطيع التواصل. حاول مرة أخرى لاحقاً."
      : "Apologies, it seems the gods are displeased today and I cannot communicate. Please try again later.";
  }
};
