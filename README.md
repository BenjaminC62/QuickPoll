# How to create db (REMINDER FOR ME)

```bash
npx prisma init --db
```

```bash
npm install @prisma/extension-accelerate
```

- Add this 

```jsx
import { withAccelerate } from "@prisma/extension-accelerate"

const prisma = new PrismaClient().$extends(withAccelerate())
```

```bash
npx prisma migrate dev
```

```bash
npx prisma studio
```

- Lancer le back : 

```bash
npx ts-node-dev src/index.ts
```