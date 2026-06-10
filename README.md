# Sofia QA Portfolio — Playwright + TypeScript

## What this project tests
E2E tests for https://practicesoftwaretesting.com (UI) and Reqres.in (API)

## Tech stack
- Playwright (TypeScript)
- Page Object Model
- GitHub Actions CI/CD

## How to run
npm install
npx playwright test

## Test structure
- tests/ui/ — login, cart, checkout flows
- tests/api/ — REST API CRUD tests
- pages/ — Page Object Model files

## CI/CD
Tests run automatically on every push via GitHub Actions