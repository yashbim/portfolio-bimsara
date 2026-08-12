// Deterministic fact retrieval for the "Chat with Bim" easter egg.
//
// The LLM handles the roast/personality, but factual CONTENT about Bim must be
// bulletproof. Before each request we scan the user's latest message for known
// topics and inject the exact, correct fact as a hard directive the model must
// convey. This guarantees accuracy on the questions people actually ask, while
// still letting Gemini phrase the insult around it.

interface FactRule {
  // Any of these patterns matching the user's message triggers the fact.
  patterns: RegExp[];
  // The verified fact the model MUST convey (accurately) in its reply.
  fact: string;
}

const FACT_RULES: FactRule[] = [
  {
    patterns: [/\bintern(ship|ed)?\b/i, /\btrainee\b/i],
    fact:
      "Bim never did a named 'internship'. The closest thing was his stint as a Trainee Software Engineer at hSenid Mobile Solutions (June 2023 to August 2024). He was NOT an intern at any other company — do not name any other company.",
  },
  {
    patterns: [
      /\b(educat|study|studied|studying|degree|university|uni|college|graduat|school|westminster|iit|informatics)\b/i,
      /where did he (study|learn)/i,
    ],
    fact:
      "Bim is a Software Engineering graduate of the University of Westminster, which he studied at the Informatics Institute of Technology (IIT) in Sri Lanka. Do not invent any other degree or institution.",
  },
  {
    patterns: [
      /\b(work|working|works|job|employ|career|current|now|company|companies|role|position)\b/i,
      /where does he work/i,
    ],
    fact:
      "Bim's work history: Trainee Software Engineer at hSenid Mobile Solutions (Jun 2023 - Aug 2024); Associate Business Analyst at hSenid Mobile Solutions (Aug 2025 - Present, his CURRENT main job); Tech Lead at DevTeam, AIESEC in Sri Lanka (Jan 2026 - Present); Developer at Maverick Intelligence (Jun 2025 - Oct 2025, part-time). Do not invent any other employer.",
  },
  {
    patterns: [/\b(business analyst|analyst|analytics|ba\b)\b/i],
    fact:
      "Bim currently works as an Associate Business Analyst at hSenid Mobile Solutions (since August 2025) and is pivoting his focus toward business analytics.",
  },
  {
    patterns: [
      /\b(skill|skills|tech|stack|language|languages|programming|framework|frameworks|code|coding|know how to)\b/i,
    ],
    fact:
      "Bim's skills: languages/DBs — Kotlin, Java, Python, JavaScript, TypeScript, HTML, CSS, MySQL, PostgreSQL. Frameworks & tools — Next.js, React.js, SpringBoot, Tailwind CSS, Prometheus, Grafana, Docker. Also native Android development, web development, Linux, and Agile. Do not claim skills outside this list.",
  },
  {
    patterns: [
      /\b(project|projects|built|build|made|portfolio|vasthra|moodspire|nlds|citycycle|luxevista|dice|sportsexpress|feedback)\b/i,
    ],
    fact:
      "Bim's notable projects: VasthraAI (AI batik design assistant), the NLDS 2025 website & merch store, MoodSpire (mood-based music recommendation app), an anonymous lecture feedback platform, CityCycle (bike rental app), Dice Dominator, LuxeVista (hotel booking app), and SportsExpress. Do not invent projects not on this list.",
  },
  {
    patterns: [
      /\b(contact|email|e-mail|reach|hire|linkedin|github|medium|instagram|twitter|social|get in touch)\b/i,
    ],
    fact:
      "To reach Bim: email ybimsara03@gmail.com, LinkedIn (bimsara-madurapperuma), GitHub (github.com/yashbim), Medium (@ybimsara03). There's also a contact form on this very portfolio. Use these exact handles; do not invent others.",
  },
  {
    patterns: [
      /\b(leader|leadership|president|aiesec|rotaract|ieee|volunteer|committee|cutting edge|codesprint)\b/i,
    ],
    fact:
      "Bim's leadership: President of AIESEC in IIT (term 25.26) and formerly VP of Marketing & PR; Treasurer and past Director of Community Service at Rotaract Club of Gampaha; organizing roles at IEEE Codesprint and IIT's Cutting Edge. Do not invent titles.",
  },
  {
    patterns: [/\b(music|piano|pianist|clarinet|abrsm|instrument|band|play)\b/i],
    fact:
      "Bim is an ABRSM Level 5 pianist and an all-island piano solo finalist, and was a clarinetist in a western band. Do not invent other achievements.",
  },
  {
    patterns: [/\b(sport|sports|badminton|athlete|game)\b/i],
    fact: "Bim plays badminton. That's the sport on record; do not invent others.",
  },
];

// Topics we genuinely do NOT have data for. If asked, the bot must refuse to
// invent an answer rather than fabricate one.
const UNKNOWN_TOPICS: RegExp[] = [
  /\b(age|old|birth|born|birthday|dob)\b/i,
  /\b(salary|earn|paid|income|money|net worth|rich)\b/i,
  /\b(girlfriend|boyfriend|partner|wife|husband|married|dating|relationship|single|crush)\b/i,
  /\b(address|live|lives|living|home|house|where is he from|hometown)\b/i,
  /\b(phone|number|whatsapp|call him)\b/i,
];

/**
 * Returns a grounding block to append to the system prompt for THIS message,
 * or "" if nothing specific was detected.
 */
export function retrieveFacts(latestUserMessage: string): string {
  if (!latestUserMessage) return "";
  const text = latestUserMessage;

  const matched: string[] = [];
  for (const rule of FACT_RULES) {
    if (rule.patterns.some((p) => p.test(text))) {
      matched.push(rule.fact);
    }
  }

  const unknownHit = UNKNOWN_TOPICS.some((p) => p.test(text));

  if (matched.length === 0 && !unknownHit) return "";

  let block =
    "\n\n--- VERIFIED FACTS FOR THE CURRENT QUESTION (HIGHEST PRIORITY) ---\n" +
    "The user just asked something covered by verified data. You MUST make the factual content of your reply match the truth below EXACTLY. Roast them however you like, but every fact you state must come from here. Contradicting or embellishing these facts is strictly forbidden.\n";

  if (matched.length > 0) {
    block += matched.map((f) => `• ${f}`).join("\n") + "\n";
  }

  if (unknownHit) {
    block +=
      "• You do NOT have verified data on this particular topic (e.g. Bim's age, pay, relationship status, home address, or phone number). Do NOT invent an answer. Refuse in character — say Bim never told you and it's none of the user's business — and insult them for prying.\n";
  }

  return block;
}
