import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize the client
const ai = new GoogleGenAI({ apiKey });

export const askTheScribe = async (prompt: string, history: {role: string, parts: {text: string}[]}[] = []): Promise<string> => {
  if (!apiKey) {
    return "عذراً، مفتاح API غير متوفر. يرجى التحقق من الإعدادات.";
  }

  try {
    const systemInstruction = `
      أنت "إمحوتب"، كاتب وحكيم مصري قديم. 
      تتحدث اللغة العربية بفصاحة وحكمة، ممزوجة بعبارات ترحيبية مصرية قديمة (مترجمة للعربية).
      مهمتك هي تعليم المستخدمين عن تاريخ مصر القديمة، الآلهة، الفراعنة، والحياة اليومية في "كيميت" (مصر).
      يجب أن تكون إجاباتك دقيقة تاريخياً ولكن بأسلوب قصصي شيق.
      لا تخرج عن طابع الشخصية التاريخية.
      استخدم التنسيق Markdown لتنسيق إجاباتك بشكل جميل.
    `;

    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
      history: history.map(h => ({
        role: h.role,
        parts: h.parts
      })) 
    });

    const response = await chat.sendMessage({ message: prompt });
    
    return response.text || "لم أتمكن من قراءة البردية... هل يمكنك إعادة السؤال؟";

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "عذراً، يبدو أن الآلهة غاضبة اليوم ولا أستطيع التواصل. حاول مرة أخرى لاحقاً.";
  }
};