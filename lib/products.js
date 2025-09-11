import { cartItems } from "./carts.js";
import { input } from "./input.js";
import { showAsMenu } from "./output.js";

const listProduct = [
  {
    id: 1,
    name: "Caramel Macchiato",
    price: 10000
  },
  {
    id: 2,
    name: "Butterscotch Sea Salt Latte",
    price: 15000
  },
  {
    id: 3,
    name: "Mango Yakult",
    price: 18000
  },
];

export const selectProduct = async ()=>{
  let attach = true;
  while(attach){
    showAsMenu(listProduct);
    console.log("\n\n0. Kembali");
    const select = await input("Pilih produk: ");
    if(select === -1 ){
      attach = false;
      continue;
    }
    if(listProduct[select]){
      const {name} = listProduct[select];
      cartItems.push(listProduct[select]);
      await input(`${name} berhasil ditambahkan ke keranjang!`);
    }
  }
};