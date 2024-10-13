const apiKey = "AIzaSyC_Swpy1eDGo9_7HCHsPzC9DKLv6-L_Tfw";

async function handler(req, res) {
  if (req.method === "POST") {
    const { messageHistory } = req.body;

    const { GoogleGenerativeAI } = await import("@google/generative-ai");

    const genAI = new GoogleGenerativeAI(apiKey);

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction:
        "You are Prot, an AI chatbot designed to help people avoid getting scammed...",
    });

    const generationConfig = {
      temperature: 1,
      topP: 0.95,
      topK: 64,
      maxOutputTokens: 8192,
      responseMimeType: "text/plain",
    };

    const chatSession = model.startChat({
      generationConfig,
      history: messageHistory,
    });

    try {
      const result = await chatSession.sendMessage(req.body.userInput);
      res.status(200).json({ response: result.response.text() });
    } catch (error) {
      res.status(500).json({ error: "Error interacting with Gemini API" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}

module.exports = { handler };
