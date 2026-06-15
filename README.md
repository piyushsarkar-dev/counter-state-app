# Counter State App

[![Version](https://img.shields.io/badge/version-1.0.0-blue)](package.json)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

Counter State App is a Next.js 16 playground for exploring counter state patterns across three levels of complexity. It combines local state, shared state, theme switching, and animated numeric updates in a compact, tab-driven interface.

## What the project does

The app presents three counter experiences:

- Home shows basic, local-state counters with simple increment and decrement actions.
- Advanced adds larger step sizes, randomization, and loop controls with animated values.
- Supreme uses shared Jotai state so the counter value can be controlled through a single input.

The app also includes a shared header, a light/dark theme toggle, and a reusable component structure built with Next.js App Router and shadcn-style UI primitives.

## Why the project is useful

This project is a practical reference for learning and demonstrating:

- React state patterns, from component-local state to shared global atoms.
- Next.js App Router pages and shared layout composition.
- UI state transitions, including animated number updates and interval-based controls.
- Theme-aware interface behavior using `next-themes`.

It is useful as a teaching project, a lightweight starter for state-driven UIs, and a reference for organizing small feature routes in a modern Next.js app.

## How to get started

### Prerequisites

- Node.js 24 or newer
- npm 11 or newer

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Then open the app in your browser at `http://localhost:3000`.

### Build and check

```bash
npm run lint
npm run build
```

### Usage overview

- Open the Home page to use the basic counter tabs.
- Visit `/advanced` to try the advanced counter variants, including random and looping behavior.
- Visit `/supreme` to update the shared counter through a text input.
- Use the theme toggle in the header to switch between light and dark mode.

### Key source files

- [Home page](src/app/page.tsx)
- [Advanced page](src/app/advanced/page.tsx)
- [Supreme page](src/app/supreme/page.tsx)
- [Shared layout](src/app/layout.tsx)
- [Counter components](src/components/customui/Counter.tsx)
- [Advanced counter logic](src/components/customui/Advanced.tsx)
- [Supreme shared-state logic](src/components/customui/Supreme.tsx)

## Where to get help

Start with the source files above if you want to understand how a specific route or counter mode works.

Useful references in the repository:

- [README](README.md)
- [License](LICENSE)
- [Contribution guide](CONTRIBUTING.md)

If you are reporting a bug or proposing an improvement, include the route you were using and the exact counter behavior you observed.

## Who maintains and contributes

This project is maintained by Piyush Sarkar, as listed in [package.json](package.json).

Contributions are welcome through pull requests. Please review [CONTRIBUTING.md](CONTRIBUTING.md) before submitting changes and keep contributions focused on the existing app structure and state examples.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
