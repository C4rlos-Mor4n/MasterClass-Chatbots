import { createFlow } from "@builderbot/bot";
import { Registrado } from "./Registrado";
import { FlowInitial } from "./FlowInitial";

export default createFlow([FlowInitial, Registrado]);
