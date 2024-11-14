import { MemoryDB as Database } from "@builderbot/bot";
import { createBot } from "@builderbot/bot";
import templates from "./templates";
import provider from "./provider";

const PORT = process.env.PORT ?? 3008;

const main = async () => {
  const { httpServer } = await createBot({
    flow: templates,
    provider: provider,
    database: new Database(),
  });

  httpServer(+PORT);
};

main();
