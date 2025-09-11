export const showAsMenu = (arr = [])=>{
  process.stdout.write("\x1Bc");
  arr.forEach((menu, index)=>{
    console.log(`${index+1}. ${menu?.title || menu?.name || menu}`);
    if(menu?.price){
      console.log(`Price: ${menu?.amount ? `${menu.amount} × `:""}Rp${Number(menu.price).toLocaleString("id")},-`);
    }
    if(menu?.subtotal){
      console.log(`Subtotal: Rp${Number(menu.subtotal).toLocaleString("id")},-`);
    }
  });
};