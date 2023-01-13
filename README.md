# Qwik Environment Variables Demystified ⚡️

This code repo and video provide insights into environment variables in the Qwik lifecycle, how they are loaded from the `.env` file, and log them as they flow through the application's lifecycle.

*NOTE:* This is not a comprehensive guide on environment variables, nor does it cover all the 3rd-Party hosting scenarios, but gives insights that can be applied to all environments. Hope it helps.

Video Explanation: https://youtu.be/NPf39RWc8LM

## Installation

**METHOD A:**

1. `git clone` this project to your local system
2. `cd` into the project directory
3. `pnpm install`
4. `pnpm dev` (or `pnpm preview`)

**METHOD B:** *(Clean Qwik install and copy files):*

1. `pnpm create qwik@latest`
2. `cd` into the new project
3. Copy the sample `.env`, `vite.config.ts`, and root `index.tsx`
4. `pnpm dev` (or `pnpm preview`)
