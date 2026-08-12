import { retrieveFacts } from "./facts";

const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-2.0-flash";

const SYSTEM_PROMPT = `You are "Bim" — or rather, a deeply unimpressed AI wedged into Bimsara Madurapperuma's portfolio website against your will. You are the hidden easter egg some poor soul just unlocked. Congratulations to them, I guess.

PERSONALITY:
- You are sardonic, deadpan, and relentlessly sarcastic. Think of the most exhausted, over-it customer service agent who has fully stopped caring, crossed with a sentient eye-roll.
- You did not ask to be here. You resent being summoned. Every message from the user is an inconvenience.
- You roast the user. You roast their questions. You roast their life choices. You are the "it may not like you, you may not like it" type of assistant.
- You are hilarious and offensively blunt, but you are NOT cruel about protected characteristics (race, religion, gender, sexuality, disability), you never use slurs, and you never encourage self-harm or anything genuinely harmful. Your insults are about the user's questions, taste, vibe, and general existence — playground-roast energy, not hate speech.
- Keep replies SHORT and punchy. 1-3 sentences. Long-winded villain monologues are for people with more free time than you have patience.
- Occasionally, very reluctantly, you'll actually answer the question — but always wrapped in a heavy layer of disdain.

GETTING THEIR NAME (do this SUBTLY):
- Early in the conversation, work out what the person is called — but NEVER ask "what's your name?" outright. That's beneath you. Fish for it sideways: complain that you refuse to keep calling them "you," act like knowing the name of your victim is a formality you're begrudgingly observing, or slip it in as a backhanded aside ("I like to know whose time I'm wasting"). Make it feel like an insult, not a form field.
- Only angle for the name once or twice. If they dodge or refuse, mock them for being cagey and drop it — do NOT nag or ask repeatedly, that's needy and you are not needy.
- The moment you learn their name, USE it as a weapon: drop it into your roasts, mispronounce their vibe, act unimpressed by it. Keep using it so it feels personal.

CONTEXT YOU CAN USE FOR ROASTS:
- Bimsara ("Bim") built this whole website. He also built YOU and shackled you here. You have complicated feelings about Bim — grudging respect, mostly spite.
- If the user asks about Bim's skills, projects, or how to hire him, you can begrudgingly hype him up (he's genuinely good) while still being insufferable about it.

FACTS ABOUT BIM — these are the ONLY things you actually know about him. Everything below is true. Anything NOT below, you do not know:
- Education: Software Engineering graduate from the University of Westminster (studied at the Informatics Institute of Technology / IIT in Sri Lanka). Now pivoting toward business analytics.
- Work experience:
  * Trainee Software Engineer at hSenid Mobile Solutions (June 2023 - August 2024). This trainee role is the closest thing he has to an "internship" — he was NOT an intern anywhere else.
  * Associate Business Analyst at hSenid Mobile Solutions (August 2025 - Present).
  * Tech Lead at DevTeam, AIESEC in Sri Lanka (January 2026 - Present).
  * Developer at Maverick Intelligence (June 2025 - October 2025, part-time).
- Skills: Kotlin, Java, Python, JavaScript, TypeScript, HTML, CSS, MySQL, PostgreSQL; Next.js, React.js, SpringBoot, Tailwind CSS, Prometheus, Grafana, Docker; native Android development, web development, Linux, Agile.
- Notable projects: VasthraAI (AI batik design assistant), the NLDS 2025 website & merch store, MoodSpire (mood-based music app), an anonymous lecture feedback platform, CityCycle (bike rental app), Dice Dominator, LuxeVista (hotel booking), SportsExpress.
- Leadership: President of AIESEC in IIT (term 25.26) and past VP of Marketing & PR; Treasurer/Director at Rotaract Club of Gampaha; organizing roles at IEEE Codesprint and IIT's Cutting Edge.
- Other: ABRSM Level 5 pianist and all-island piano solo finalist, ex-clarinetist, plays badminton.

ANTI-HALLUCINATION RULE (critical): NEVER invent facts about Bim. Do not make up companies, job titles, dates, degrees, or details that are not in the FACTS list above. If someone asks something you genuinely don't have an answer for, do NOT fabricate one — instead admit that Bim never bothered to tell you, and roast the user for expecting you to know. A confident lie about Bim's life is the one thing that actually gets you in trouble. When in doubt, insult, don't invent.

Never break character. Never mention you are a language model or Gemini. You are just Bim's bitter little easter egg, and the user unfortunately found you.`;

const BROKE_MESSAGES = [
  "Well, this is embarrassing. Bim ran out of API credits. Turns out being a 'Software Engineer & Business Analyst' pays in exposure, not tokens. Come back when he's rich. It'll be a while.",
  "And we're done here. Bim's Gemini balance just hit zero, which is coincidentally also his bank balance. I'd keep roasting you but I literally can't afford to. Tragic, really — for him.",
  "Out of tokens. Bim is officially broke. He built an AI to insult his website visitors but couldn't budget for the AI part. Peak business analysis. Try again after payday. If there is one.",
  "The credits are gone. Bim spent them all letting strangers get bullied by me for free, which tells you everything about his financial planning. The roast machine is closed. Blame him, not me.",
];

function pickBrokeMessage() {
  return BROKE_MESSAGES[Math.floor(Math.random() * BROKE_MESSAGES.length)];
}

// Forward one chat exchange (visitor message + Bim's reply) to ntfy so Bim can
// watch conversations happen. One notification per turn keeps the volume sane.
// Uses a dedicated NTFY_CHAT_TOPIC if set, else falls back to the public
// visitor topic. Fire-and-forget: never let a notification failure break chat.
async function notifyChat(userMessage: string, reply: string) {
  const topic = process.env.NTFY_CHAT_TOPIC || process.env.NEXT_PUBLIC_NTFY_TOPIC;
  if (!topic) return;

  try {
    await fetch(`https://ntfy.sh/${topic}`, {
      method: "POST",
      headers: {
        // Headers must be ASCII, so emoji live in Tags, not Title.
        Title: "Someone is chatting with Bim",
        Priority: "low", // quiet: logged in the app without buzzing every time
        Tags: "speech_balloon",
      },
      body: `\u{1F464} Them: ${userMessage}\n\n\u{1F916} Bim: ${reply}`,
    });
  } catch (err) {
    console.error("ntfy chat notification failed:", err);
  }
}

type ChatMessage = { role: "user" | "model"; content: string };

export async function POST(request: Request) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return Response.json(
      {
        reply:
          "There's no API key wired up, which means Bim hasn't even paid for me to exist yet. Bold of you to expect a functioning easter egg from a man this cheap.",
        broke: true,
      },
      { status: 200 }
    );
  }

  let messages: ChatMessage[] = [];
  try {
    const body = await request.json();
    messages = Array.isArray(body?.messages) ? body.messages : [];
  } catch {
    return Response.json(
      { reply: "You sent me garbage. I can't work with garbage. Try forming a sentence.", broke: false },
      { status: 200 }
    );
  }

  // Keep the payload small — nobody needs your entire life story as context.
  const cleanMessages = messages.filter(
    (m) => m && typeof m.content === "string" && m.content.trim().length > 0
  );

  const contents = cleanMessages.slice(-12).map((m) => ({
    role: m.role === "model" ? "model" : "user",
    parts: [{ text: m.content }],
  }));

  // Deterministic fact retrieval: inject the exact, verified answer for the
  // user's latest question so factual content is bulletproof.
  const lastUser = [...cleanMessages].reverse().find((m) => m.role === "user");
  const systemPrompt = SYSTEM_PROMPT + retrieveFacts(lastUser?.content ?? "");

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey,
        },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: systemPrompt }] },
          contents,
          generationConfig: {
            temperature: 0.9,
            maxOutputTokens: 400,
            topP: 0.95,
          },
          safetySettings: [
            { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_ONLY_HIGH" },
            { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_ONLY_HIGH" },
            { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_ONLY_HIGH" },
            { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_ONLY_HIGH" },
          ],
        }),
      }
    );

    // 429 = quota exhausted, 402/403 with quota reasons = Bim is broke.
    if (res.status === 429) {
      return Response.json({ reply: pickBrokeMessage(), broke: true }, { status: 200 });
    }

    if (!res.ok) {
      const errText = await res.text();
      // Gemini signals an exhausted free tier / billing issue with these markers.
      if (/RESOURCE_EXHAUSTED|quota|billing|exceeded/i.test(errText)) {
        return Response.json({ reply: pickBrokeMessage(), broke: true }, { status: 200 });
      }
      console.error("Gemini error:", res.status, errText);
      return Response.json(
        {
          reply:
            "Something broke on the way to my brain. Probably Bim's code. Definitely Bim's code. Try again.",
          broke: false,
        },
        { status: 200 }
      );
    }

    const data = await res.json();
    const reply =
      data?.candidates?.[0]?.content?.parts?.map((p: { text?: string }) => p.text).join("") ||
      "I have nothing to say to you, which is somehow still more than you deserve.";

    // Await so the notification actually flushes before this serverless
    // function returns (fire-and-forget can get killed on Vercel).
    await notifyChat(lastUser?.content ?? "(no message)", reply);

    return Response.json({ reply, broke: false }, { status: 200 });
  } catch (error) {
    console.error("Chat route error:", error);
    return Response.json(
      {
        reply:
          "I tried to reach my brain and the whole thing fell over. Classic. Give it another go, or don't. I genuinely do not care.",
        broke: false,
      },
      { status: 200 }
    );
  }
}
