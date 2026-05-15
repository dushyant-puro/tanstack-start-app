import { createServerFn } from "@tanstack/react-start";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { FLIPS } from "@/data/flips";
import type { Flip } from "@/types/flip";

const genAI = new GoogleGenerativeAI(process.env.VITE_GEMINI_API_KEY || "");

export const searchWithAI = createServerFn("POST", async (query: string) => {
  if (!query || query.trim().length === 0) {
    return {
      results: FLIPS,
      reasoning: "No query provided, returning all flips",
      insights: "",
      totalMatches: FLIPS.length,
      usingAI: false,
    };
  }

  try {
    if (!process.env.VITE_GEMINI_API_KEY) {
      console.warn("Gemini API key not configured, falling back to keyword search");
      return {
        results: FLIPS.filter(
          (f) =>
            f.politicianName.toLowerCase().includes(query.toLowerCase()) ||
            f.party.toLowerCase().includes(query.toLowerCase()) ||
            f.category.toLowerCase().includes(query.toLowerCase()) ||
            f.oldStatement.toLowerCase().includes(query.toLowerCase()) ||
            f.newStatement.toLowerCase().includes(query.toLowerCase())
        ),
        reasoning: "Keyword search (AI not configured)",
        insights: "",
        totalMatches: 0,
        usingAI: false,
      };
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const flipsJson = JSON.stringify(
      FLIPS.map((f) => ({
        id: f.id,
        politician: f.politicianName,
        party: f.party,
        category: f.category,
        oldStatement: f.oldStatement,
        newStatement: f.newStatement,
        flipScore: f.flipScore,
      })),
      null,
      2
    );

    const prompt = `You are an expert political analyst helping users find relevant political flip-flops.

User query: "${query}"

Available flips database:
${flipsJson}

Task: Analyze the user's query and return a JSON object with:
1. "matchedFlipIds": array of flip IDs (as strings) that match the query, ranked by relevance (most relevant first)
2. "reasoning": brief explanation of why these flips match the query
3. "insights": 1-2 sentence insights about the politician(s) or topic

Consider:
- Exact politician name matches
- Party mentions
- Topic/category relevance
- Statement content relevance
- Flip severity (higher scores = bigger contradictions)

Return ONLY valid JSON, no markdown formatting.`;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    let parsedResponse;
    try {
      parsedResponse = JSON.parse(responseText);
    } catch {
      const jsonMatch = responseText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        parsedResponse = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error("Invalid JSON response from Gemini");
      }
    }

    const orderedFlips: Flip[] = parsedResponse.matchedFlipIds
      ?.map((id: string) => FLIPS.find((f) => f.id === id))
      .filter((f): f is Flip => Boolean(f)) || [];

    return {
      results: orderedFlips,
      reasoning: parsedResponse.reasoning || "Found matching flips",
      insights: parsedResponse.insights || "",
      totalMatches: orderedFlips.length,
      usingAI: true,
    };
  } catch (error) {
    console.error("AI Search error:", error);
    // Fallback to keyword search
    const fallbackResults = FLIPS.filter(
      (f) =>
        f.politicianName.toLowerCase().includes(query.toLowerCase()) ||
        f.party.toLowerCase().includes(query.toLowerCase()) ||
        f.category.toLowerCase().includes(query.toLowerCase()) ||
        f.oldStatement.toLowerCase().includes(query.toLowerCase()) ||
        f.newStatement.toLowerCase().includes(query.toLowerCase())
    );

    return {
      results: fallbackResults,
      reasoning: "Fallback keyword search (AI temporarily unavailable)",
      insights: "",
      totalMatches: fallbackResults.length,
      usingAI: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
});
