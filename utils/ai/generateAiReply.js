const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const chat = model.startChat({
  history: [
    {
      role: "user",
      parts: [
        {
          text: `A strikingly beautiful fantasy woman with ethereal features, dressed in ornate, detailed armor with intricate gold and emerald designs. Her long, flowing turquoise hair is braided and adorned with golden ornaments and floral decorations. Her eyes glow with a mystical energy, and shimmering, iridescent makeup highlights her sharp cheekbones. The lighting is moody and atmospheric, with warm candlelight illuminating the background, creating a soft bokeh effect. Her expression is intense and regal, evoking a sense of mystery and power. The image should be highly detailed, realistic, and cinematic, with rich textures and a dark fantasy aesthetic.
              comment: Wow. That’s Nice!`,
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "Glad you like it! She actually spent hours posing like this—turns out, looking epic is hard work!",
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: `A legendary warrior standing atop a mountain, his cloak billowing in the wind, as he gazes over a vast battlefield. The scene is illuminated by a dramatic sunset, casting golden hues across his detailed silver armor. His expression is stoic yet determined. The painting should evoke a sense of heroism and grandeur.`,
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "Thanks! He may look heroic, but deep down, he’s just wondering where he left his sword.",
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: `A futuristic cyberpunk city with neon lights reflecting off rain-soaked streets. A lone figure in a high-tech jacket stands under a flickering streetlight, their face obscured by a glowing visor. Hovering cars zoom through the skyline as the city hums with electricity.`,
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "Appreciate it! The figure looks mysterious and cool, but trust me, they’re just checking their GPS for the nearest ramen shop.",
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: `An ancient sorceress stands in the ruins of an old temple, her hands glowing with arcane power. The wind whips through her silver hair as magical runes swirl around her. The scene should feel mystical and powerful, evoking a sense of ancient wisdom.`,
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "Thanks! She was going for ‘wise and powerful,’ but honestly, she’s just trying to remember if she turned off her cauldron.",
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: `A colossal dragon perched atop a mountain peak, its scales shimmering in the moonlight. Smoke drifts from its nostrils as it surveys the valley below. The scene should feel majestic and awe-inspiring, with a strong fantasy atmosphere.`,
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "Glad you think so! The dragon may look mighty, but it's actually just waiting for someone to bring it snacks.",
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: `A mysterious rogue sits in the shadows of a medieval tavern, their hood drawn low over their face. A single candle flickers on the wooden table, casting eerie shadows. The atmosphere is tense, hinting at secrets and intrigue.`,
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "Appreciate it! They look like they’re plotting something, but really, they’re just trying to decide if they should order another round.",
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: `An enchanted forest glowing under the light of a full moon. Bioluminescent plants and ethereal creatures give the scenery a dreamlike quality. A lone traveler walks through, their cloak trailing behind them.`,
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "Thanks! The traveler looks deep in thought, but really, they’re just wondering if fairies accept credit cards.",
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: `A fearless space explorer in a high-tech suit stands on the surface of an alien planet. The sky is filled with swirling nebulas and distant galaxies. The ground glows with strange, pulsating energy. The explorer's visor reflects the vastness of space.`,
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "Glad you like it! They may look brave, but inside, they’re just hoping their space snacks didn’t float away.",
        },
      ],
    },
  ],
});

const generateAiReply = async (prompt, comment) => {
  const finalPrompt = `prompt: ${prompt}
    comment:${comment}`;
  let result = await chat.sendMessage(finalPrompt);
  return result.response.text();
};

module.exports = generateAiReply;
