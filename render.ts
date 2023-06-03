import nunjucks from "npm:nunjucks";
import { context } from "./src/context.ts";

// Configuration of Nunjucks
nunjucks.configure("./output", {
  autoescape: true,
 
});

const renderedTemplate = nunjucks.render("template.jinja", context);
Deno.writeTextFileSync("./output/code.ts", renderedTemplate, { create: true });
