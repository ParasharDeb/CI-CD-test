# @repo/db

Shared Prisma 7 client (PostgreSQL) for every app in the monorepo.

## Setup

1. Copy `.env.example` to `.env` here and set `DATABASE_URL`.
2. `bun run db:migrate` to create/apply migrations from `prisma/schema.prisma`.

`prisma generate` runs on `bun install`; rerun with `bun run db:generate` after schema edits.

## Use in an app

Add `"@repo/db": "*"` to the app's dependencies, `bun install`, then:

```ts
import { prisma } from "@repo/db";

const users = await prisma.user.findMany();
```

The app's runtime must have `DATABASE_URL` set.
