var antlr4 = require('antlr4');
var CLexer = require('./src/parser/CLexer').CLexer;
var CParser = require('./src/parser/CParser').CParser;
var CListener = require('./src/parser/CListener').CListener;
var CVisitor = require('./src/parser/CVisitor').CVisitor
const fs = require('fs');

var input = "src/src.c";
var code;

if (fs.existsSync(input)) {
   code = fs.readFileSync(input, 'utf8');
   console.log("Source file C START\n");
   console.log("--------------");
   console.log(code);
   console.log("--------------");
   console.log("\nSource file C END");
 } else {
     console.error("File doesn't exist. Exit.");
     process.exit(1);
}

var chars = new antlr4.InputStream(code);
var lexer = new CLexer(chars);
var tokens  = new antlr4.CommonTokenStream(lexer);
var parser = new CParser(tokens);
parser.buildParseTrees = true;
var tree = parser.prog();

fs.writeFile('output.java', "", function (err) {
      if (err) return console.log(err);
   });

CVisitor.prototype.visitVariable = function(ctx) {
   let datatype = ctx.DATA_TYPE_VARIABLE();
   let name = ctx.name.getText().toString();
   let oldName = datatype + " " + name;
   let newName = "public " + oldName + " ";
   if(ctx.value) {
      let value = (ctx.value.getText());
      newName = newName + " = " + value + ";\n";
   } else {
      newName += ";"
   }

   fs.appendFile('output.java', newName, function (err) {
      if (err) return console.log(err);
   });
};

CVisitor.prototype.visitAssign_operation = function(ctx) {

    let name = ctx.name.getText().toString();
    let value = (ctx.value.getText());
    let assing = name + " = " + value + ";\n";

    fs.appendFile('output.java', assing, function (err) {
      if (err) return console.log(err);
   });

};

CVisitor.prototype.visitAddExpression = function (ctx) {
    let op = ctx.op.getText();
    let left = ctx.left.getText();
    let right = ctx.right.getText();
    let addExpression = left + " " + op + " " + right;

    fs.appendFile('output.java', addExpression, function (err) {
      if (err) return console.log(err);
   });
}


visitor = new CVisitor();
visitor.visit(tree);


console.log("YOU CAN FIND OUTPUT IN OUPUT.JAVA FILE");