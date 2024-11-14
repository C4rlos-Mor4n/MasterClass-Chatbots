import { addKeyword, EVENTS } from "@builderbot/bot";
import { GetAllProducts } from "~/services";

const Registrado = addKeyword(EVENTS.ACTION)
  .addAction(async (ctx, { flowDynamic, state }) => {
    const products = await GetAllProducts();
    const CincoProdutos = products.slice(0, 5);
    await state.update({
      Productos: CincoProdutos,
    });

    await CincoProdutos.map(
      async (product: {
        id: number;
        title: string;
        price: number;
        images: string[];
      }) => {
        const Image = product.images[0].replace(/["[\]]/g, "");
        return await flowDynamic([
          {
            body: `ID: *${product.id}*\n\nTITULO: *${product.title}*\n\nPRECIO: *${product.price}* \n\nPara comprar este producto, envia el ID del producto`,
            media: Image,
          },
        ]);
      }
    );
  })
  .addAction(
    { capture: true },
    async (ctx, { state, fallBack, flowDynamic }) => {
      const Productos = state.get("Productos");

      if (ctx.body === "1") {
        return await flowDynamic("Producto 1 seleccionado");
      } else {
        return fallBack(
          "Producto no encontrado, por favor escribe el ID del producto de los productos anteriores"
        );
      }
    }
  );
export { Registrado };
