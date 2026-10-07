// The Pixel2Tech data contract, wrapped once for Composer. Both the database
// resource (module.ts) and the web service's dependency (service.ts) use it.
//
// contract.json and contract.d.ts are generated from contract.prisma by
// `npx prisma contract emit`. Commit them; never edit them by hand.
//
// Changing the schema:
//   1. edit contract.prisma
//   2. npx prisma contract emit
//   3. npx prisma migration plan --name <slug>
//   4. npx prisma migration ref set db <the "to" hash printed by step 3>
//   5. commit contract.*, migrations/ — `prisma deploy` applies them on the next push
import { dataContract } from "@prisma/composer-prisma-cloud/orm";
import type { Contract } from "./contract.d.ts";
import contractJson from "./contract.json" with { type: "json" };

export const siteData = dataContract<Contract>(contractJson);
