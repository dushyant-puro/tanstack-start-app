export type FlipSource = {
  label: string;
  url: string;
  /** Optional kind to render type-specific buttons in the UI. */
  kind?: "Interview" | "Tweet" | "News Report" | "Speech Archive";
};

export type Flip = {
  id: string;
  politicianName: string;
  politicianImage: string;
  party: string;
  oldStatement: string;
  oldDate: string; // ISO
  newStatement: string;
  newDate: string; // ISO
  flipScore: number; // 0-100
  category: string;
  sources: FlipSource[];
};
