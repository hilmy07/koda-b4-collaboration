import { history } from "./carts.js";
import { input } from "./input.js";

export const isiHistori = async () => {
  console.clear();
  console.log("========== RIWAYAT PEMESANAN ==========\n");

  if (history.length === 0) {
    console.log("Belum ada riwayat pesanan.\n");
    await input("Tekan Enter untuk kembali...");
    return;
  }

  history.forEach((order, i) => {
    const orderNumber = (i + 1).toString().padStart(2, "0");
    console.log(`🧾 Pesanan #${orderNumber}`);

    const itemsList = order
      .map((item) => {
        const subtotal = Number(item.subtotal).toLocaleString("id-ID");
        return `- ${item.name} x${item.amount} = Rp ${subtotal}`;
      })
      .join("\n");

    const total = order.reduce((acc, item) => acc + item.subtotal, 0);
    const totalFormatted = total.toLocaleString("id-ID");

    console.log(itemsList);
    console.log(`>> Total: Rp ${totalFormatted}\n`);
    console.log("----------------------------------------\n");
  });

  await input("Tekan Enter untuk kembali...");
  console.clear();
};
