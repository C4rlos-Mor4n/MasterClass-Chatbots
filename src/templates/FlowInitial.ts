import { addKeyword, EVENTS } from "@builderbot/bot";
import { Registrado } from "./Registrado";

const FlowInitial = addKeyword(EVENTS.WELCOME)
  .addAction(async (_, { state, gotoFlow }) => {
    const nombre = await state.get("name");
    if (nombre) {
      return gotoFlow(Registrado);
    }
  })
  .addAnswer(
    "Hola, bienvenido a BuilderBot!, por favor ingrese tu nombre",
    {
      capture: true,
    },
    async (ctx, { state, flowDynamic, gotoFlow }) => {
      const RespuestaUser = ctx.body;
      await state.update({ name: RespuestaUser });

      await flowDynamic("Tengo tu nombre: " + RespuestaUser);

      return gotoFlow(Registrado);
    }
  );

export { FlowInitial };
