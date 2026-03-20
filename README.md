# 🌙 Yochimu (よちむ) - Japanese Text Parser 🇯🇵

[![Next.js](https://img.shields.io/badge/Next.js-15.4-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.x-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Open Source](https://img.shields.io/badge/Open-Source-brightgreen?style=flat-square&logo=github)](https://github.com/ernestohegi/japanese-text-parser)

> 💭 **よちむ (Yochimu)** means "prophetic dream" in Japanese. This tool was created to help Japanese language learners efficiently study vocabulary in context.

## 🚀 What is Yochimu?

Yochimu is a powerful tool designed for Japanese language learners who want to study vocabulary **in context** rather than in isolation. Unlike traditional vocabulary lists or flashcards, Yochimu allows you to work with real Japanese sentences, preserving the context that is crucial for proper language acquisition.

With Yochimu, you can:

- 🔍 Search for any Japanese word or phrase
- 📚 Get authentic example sentences with translations
- 💾 Save your favorite sentences for study
- 📤 Export to Anki-compatible format for spaced repetition practice

## ✨ Features

### 🇯🇵 Search in Japanese

Enter any Japanese word or phrase and get detailed translations and example sentences. Yochimu tokenizes your input and finds relevant, natural sentences.

### 🔖 Save Your Favorites

Collect useful sentences by clicking on them, building your personalized study list as you explore.

### 📝 Export to Anki

Download your saved sentences as a TSV file that can be easily imported into Anki for spaced repetition practice.

## 🧠 Why Context Matters

Learning words in isolation makes it difficult to understand how they're actually used in real Japanese. Yochimu focuses on providing complete sentences so you can learn:

- 🌟 Natural word usage
- 🔄 Common collocations (words that often appear together)
- 📏 Grammatical patterns
- 🏮 Cultural context

This approach leads to better retention and more natural Japanese expression.

## 🛠️ Built With

Yochimu is built with modern web technologies:

- ⚛️ **React.js** - For building the user interface
- 📱 **Next.js** - For server-side rendering and API routes
- 🔒 **TypeScript** - For type safety and better developer experience
- 🎨 **TailwindCSS** - For styling
- 🇯🇵 **Wanakana** - For Japanese text processing
- 🔄 **React Query** - For efficient data fetching
- 💾 **File-Saver** - For downloading TSV files

## 🔌 API Integration

Yochimu integrates with the [Tatoeba API](https://en.wiki.tatoeba.org/articles/show/api) to fetch authentic Japanese sentences with English translations. Tatoeba is a large database of example sentences translated into many languages.

## 🧪 Mocking with MSW

Yochimu includes [Mock Service Worker (MSW)](https://mswjs.io/) for deterministic local development and test-ready request mocking.

- In development, the browser worker starts automatically and can mock:
   - `POST /api/translate`
   - `GET https://tatoeba.org/eng/api_v0/search`
- Shared handlers live in `src/mocks/handlers.ts`.
- Browser setup lives in `src/mocks/browser.ts`.
- Node/test setup lives in `src/mocks/server.ts`.

The worker script is stored at `public/mockServiceWorker.js` and configured through `msw.workerDirectory` in `package.json`.

To refresh the worker file after upgrading MSW:

```bash
pnpm dlx msw init public --save
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ernestohegi/japanese-text-parser.git
   cd japanese-text-parser
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn
   # or
   pnpm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📖 How to Use

### Basic Usage

1. **Enter a Japanese Word or Phrase**

   - In the search box on the home page, type any Japanese word, phrase, or sentence you want to learn more about.
   - Examples: 単語 (word), 日本語 (Japanese language), 勉強する (to study)

2. **Review the Results**

   - Yochimu will display example sentences containing your search term with English translations.

3. **Save Sentences You Want to Study**

   - Click on any sentence to add it to your study list. The sentence will be highlighted to show it's been selected.

4. **Export Your Study List**
   - Once you've collected some sentences, click the "Export" button to download your list as a TSV file.

### Importing to Anki

The TSV files from Yochimu are formatted for easy import into Anki:

1. Open Anki on your computer
2. Create a new deck or select an existing one
3. Click "File" → "Import" and select the TSV file you downloaded
4. Configure the field mapping (first field: Japanese, second field: English)
5. Begin studying with Anki's spaced repetition system

## 💡 Tips for Effective Study

- Choose sentences that are at or slightly above your current level
- Focus on natural, everyday expressions rather than literary or extremely formal Japanese
- Try to understand the grammar patterns in each sentence
- Read sentences aloud to practice pronunciation
- Create a consistent study routine with Anki

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute to Yochimu:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🐛 Issues and Feature Requests

If you encounter any issues or have ideas for new features, please [open an issue](https://github.com/ernestohegi/japanese-text-parser/issues) on GitHub.

## 📄 License

This project is open source and available under the MIT License.

---

Happy Japanese learning! 🎌 がんばって！
