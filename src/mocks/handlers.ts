import { http, HttpResponse } from "msw";

import type { TatoebaSentences } from "@/requests/tatoeba.types";

type TranslateResponse = [string, { text: string; translation: string }[]][];

const tatoebaResults: TatoebaSentences[] = [
  {
    text: "予知夢を見た。",
    translations: [[{ text: "I had a prophetic dream." }]],
  },
  {
    text: "彼は予知夢を信じている。",
    translations: [[{ text: "He believes in prophetic dreams." }]],
  },
];

export const handlers = [
  http.post("/api/translate", async ({ request }) => {
    const body = (await request.json()) as { term?: string };
    const rawTerm = typeof body?.term === "string" ? body.term.trim() : "";
    const term = rawTerm || "予知夢";

    const payload: TranslateResponse = [
      [
        term,
        [
          {
            text: `${term}を学びましょう。`,
            translation: `Let's learn ${term}.`,
          },
          {
            text: `今日は${term}について勉強した。`,
            translation: `Today I studied about ${term}.`,
          },
        ],
      ],
    ];

    return HttpResponse.json(payload, { status: 200 });
  }),

  http.get("https://tatoeba.org/eng/api_v0/search", ({ request }) => {
    const url = new URL(request.url);
    const query = url.searchParams.get("query")?.trim();

    const response = {
      results:
        query && query !== "予知夢"
          ? [
              {
                text: `${query}の例文です。`,
                translations: [[{ text: `This is an example sentence with ${query}.` }]],
              },
            ]
          : tatoebaResults,
    };

    return HttpResponse.json(response, { status: 200 });
  }),
];
