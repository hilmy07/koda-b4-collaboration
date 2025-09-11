import readline from "node:readline/promises";
import {stdin, stdout} from "node:process";

export async function input(q, type="number"){
  let result;
  const rl = readline.createInterface({
    input: stdin,
    output: stdout
  });
    
  if(type === "number"){
    result = parseInt(await rl.question(q)) - 1;
  }else{
    result = await rl.question(q);
  }
    
  rl.close();
  return result;
}