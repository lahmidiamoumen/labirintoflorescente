import { GoogleGenAI } from "@google/genai";

export default async function handler(req: any, res: any) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { image, mimeType } = req.body;
    
    // Securely access the API key from the server environment
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
      console.error("API Key missing in server environment");
      return res.status(500).json({ error: 'Server configuration error: API Key missing.' });
    }

    const ai = new GoogleGenAI({ apiKey });

    // The prompt is now secure on the server
    const prompt = "Visualize this building completely wrapped in white heavy-duty confinement tarps for asbestos removal (désamiantage). The entire structure should be covered in tight white industrial shrink wrap film. Maintain the original angle and perspective. Photorealistic construction site style.";

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            inlineData: {
              data: image,
              mimeType: mimeType || 'image/jpeg'
            }
          },
          {
            text: prompt
          }
        ]
      }
    });

    // Parse response
    let generatedImage = null;
    let textFeedback = "";

    if (response.candidates && response.candidates[0].content && response.candidates[0].content.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          const resultBase64 = part.inlineData.data;
          // Return as full Data URI
          generatedImage = `data:image/png;base64,${resultBase64}`;
          break;
        } else if (part.text) {
          textFeedback += part.text;
        }
      }
    }

    if (!generatedImage) {
      // If the model refused or returned text, send that back as an error
      return res.status(422).json({ error: textFeedback || "Failed to generate image." });
    }

    // Success
    return res.status(200).json({ image: generatedImage });

  } catch (error: any) {
    console.error("Server AI Generation Error:", error);
    return res.status(500).json({ error: error.message || "Internal Server Error" });
  }
}