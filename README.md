# templatify code

often we use template engine, template and some context to generate code or text in dynamic way. but some time we need to do thing in opposite direction: we have initial code or text and we want to generate template from initial text like the text in ./src/initial_text.txt and list of the words in text that should be converted to a parametre or model like the list in ./src/schema.json and some context like content in ./src/context.ts
then run :

```
deno task g:code

```
this command will generate template in ./output/template.jinja and will generate code based on this template and the context in ./src/context.ts in the file ./output/code.ts using dunjucks template engine (or jinja).


# how to use 

- clone this repo in local
- replace the content of ./src/initial_text.txt with yours
- replace the content of ./src/schema.json with yours
- replace the content of ./src/context.ts with yours 
- run the command 
```
deno task g:code

```
and you will get your code generated in the ./output folder.