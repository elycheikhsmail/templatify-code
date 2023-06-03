// read json
import data from "./src/schema.json" assert { type: "json" };
// read file
let text = Deno.readTextFileSync("./src/initial_text.txt");

data.forEach((item) => {
  text = text.replaceAll(item.word, ` {{ ${item.model}}}`);
});
Deno.writeTextFileSync("./output/template.jinja", text, { create: true });
