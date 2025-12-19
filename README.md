
# Trinity

Trinity is a modern web application designed to provide a unified interface for interacting with and comparing responses from three world-class Large Language Models simultaneously: Google Gemini, Meta Llama, and Alibaba Qwen.

Built with a focus on performance and clean state management, Trinity allows users to see how different AI architectures interpret the same prompt in real-time.
## Features

- Multi-Model Orchestration: Get responses from Llama, Gemini, and Qwen all in one place.

- Real-time Comparison: Compare insights, tone, and accuracy across different AI providers side-by-side.

- Global State Management: Complex asynchronous logic for multiple API streams handled efficiently via Redux Toolkit.

- Modern UI/UX: A clean, minimalist, and fully responsive interface built with Tailwind CSS.

- Theming: Seamless toggle between Dark and Light modes for comfortable viewing in any environment.

- High Performance: Optimized development and build cycles powered by Bun and Vite.

## Tech Stack

**Frontend :** React (Hooks, Functional Components)

**State Management :** Redux Toolkit (RTK)

**Styling :** Tailwind CSS

**Build Tool/Runtime :** Vite + Bun

**APIs :** Google Gemini API, Meta Llama (via Groq/Provider), Alibaba Qwen (Hugging Face).


## Installation

Clone the repository:

```bash
  git clone https://github.com/your-username/trinity.git
    cd trinity
```
Install bun :
```bash
  bun install
```
Environment Variables: Create a .env file in the root directory and add your API keys:
```bash
VITE_GEMINI_API_KEY=your_key_here
VITE_LLAMA_API_KEY=your_key_here
VITE_QWEN_API_KEY=your_key_here
```
Run the development server:
```bash
 bun run dev
```
## What I Learned
- Building Trinity was a deep dive into the modern React ecosystem. Key takeaways included:

- Implementing complex asynchronous middleware to handle multiple concurrent API calls.

- Optimizing UI performance for long-form text streaming.

- Designing a scalable architecture using Vite and Bun for lightning-fast HMR (Hot Module Replacement).
