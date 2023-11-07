This is a Time Log App.

Stopped at: Full Stak Time log Project: Next.js 13 App Router, Supabase, Zustand, Tailwind, 2023 - 34:35

other projects to look at:
Build and Deploy a Full Stack Notion Clone | NextJS 13, DALL•E, DrizzleORM, OpenAI, TypeScript
Build a Course & LMS Platform: Next 13, React, Stripe, Mux, Prisma, Tailwind, MySQL | Udemy Clone
Build and Deploy a Full Stack Next.js 13 Application | React, Next JS 13, TypeScript, Tailwind CSS

## Getting Started

First, run the development server:

```bash

npm run dev

```

## Seed DB

Make ts-node, typescript, @types/node is installed.
Create a file with sample data in it that is related to your model.
Create seed file and import sample data in seed file. Save as .ts if using typescript if not .js
Go to packson.json and paste the following before scripts:
"prisma": {
"seed": "ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed.ts"
}

Then go to command line and run npx prisma db seed

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
