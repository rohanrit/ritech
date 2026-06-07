# AI Generation Master Prompt: REACTECH Front-End Implementation

This file serves as a comprehensive structural prompt optimized for AI code assistants (such as Claude Code, Antigravity, or OpenCode) to generate the production-grade front-end layer for the **REACTECH** digital platform. Copy and paste the text below directly into your LLM coding environment.

---

```text
Act as an expert Senior Frontend Engineer and UI/UX Specialist. Your task is to implement a high-performance, modern, and visually striking web application shell based on the brand identity of "REACTECH" (Digital Technology Solutions). 

### 1. Core Visual & Identity Requirements
- **Brand Name Typography Split:** The company name "REACTECH" must be strictly separated visually using typographic styling. 
  - "REAC": Rendered in a bold, solid, geometric sans-serif typeface (uppercase). It represents structural solidity and corporate stability.
  - "TECH": Rendered in a light, clean, wide-tracked (high letter-spacing) technical typeface (uppercase) using a vibrant Cyan color element (`#06B6D4` / `#00F0FF`).
- **Aesthetic Vibe:** Modern cyber-minimalism / dark tech theme. Utilize deep black backgrounds, glassmorphic container panels, subtle grid alignments, light-gray thin borders, and strategic high-luminance neon glow points matching a modern tech era.
- **Reference Asset Context:** The application shell's design language borrows its design tokens from the official transparent brand asset (watermarked_img_5789422192151574146.png), which translates an "R" monogram into fluid network nodes shifting from blue to deep purple, capped with high-intensity glowing circuit nodes.

### 2. Technical Stack Specifications
- **Framework:** Next.js (App Router architecture, TypeScript strict mode).
- **Styling:** Tailwind CSS (with arbitrary value supports or extended design tokens).
- **Icons:** Lucide React or inline high-fidelity SVGs matching the geometric grid aesthetic.
- **State Management:** Zustand for global reactive side-effects and system sync statuses.

### 3. Detailed Component Code Specifications to Generate

#### Component A: Global Header Navigation (`/components/navigation/GlobalNavbar.tsx`)
- Implement a sticky top header navbar with a highly polished backdrop blur layer (`backdrop-blur-md bg-slate-950/75`).
- Left brand alignment: An inline combination of a custom geometric miniature icon (representing the node-linked "R" monogram) and the typographic text split: `<span className="font-extrabold text-white">REAC</span><span className="font-light text-cyan-400 tracking-widest ml-[1px]">TECH</span>`.
- Center alignment: Core utility text routing links ("Architecture", "Data Nodes", "System Configuration") with clean active/hover transitions.
- Right alignment: A system status action item pill resembling a live server matrix button containing a glowing green/cyan radar ping indicator and the uppercase system state moniker `SYS_ACTIVE`.

#### Component B: Responsive Dashboard Grid Grid Elements (`/app/page.tsx`)
- Build an enterprise-tier operational panel matrix wrapped inside a standard container bounding grid (`max-w-7xl mx-auto px-6 py-8`).
- Incorporate a clean welcome section displaying an uppercase modern section header alongside an active terminal clock module detailing current sync speeds.
- Render a 3-column layout showcasing technical data node metrics. Each container must use a glassmorphic layer (`bg-slate-900/40 backdrop-blur-lg border border-slate-800`), an ambient radial glow positioned in the upper right quadrant that reveals itself softly on hover, and explicit numeric tracking elements for frame latency metrics (e.g., "nominal", "syncing").

#### Component C: Authentication Interface (`/app/(auth)/login/page.tsx`)
- Design a high-fidelity centrist authentication portal layout using a minimal dark framework.
- The interactive form must capture credentials securely, integrating clear state transitions on click.
- Enforce the logical integration parameters indicating a POST routing request targeted toward the verification layer endpoint: `http://localhost:8001/api/v1/auth/login`. Handle active token generation expectations gracefully by setting localized mockup cookie responses upon resolution.

### 4. Implementation Guidelines & Constraints
- Ensure strict type safety across all properties and interfaces. Do not use `any`.
- Keep layout logic highly linear. Avoid heavy UI components that degrade viewport responsiveness.
- Make extensive use of Tailwind's box-shadow systems (`shadow-[0_0_20px_rgba(0,240,255,0.25)]`) to cleanly replicate the high-intensity light accents displayed in the corporate design guidelines.
- Do not add arbitrary text filler; every code segment must be structural, operational, and clean.
```
