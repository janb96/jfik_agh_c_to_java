// Generated from C.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by CParser.

function CVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

CVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
CVisitor.prototype.constructor = CVisitor;

// Visit a parse tree produced by CParser#prog.
CVisitor.prototype.visitProg = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CParser#statement.
CVisitor.prototype.visitStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CParser#comment_section.
CVisitor.prototype.visitComment_section = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CParser#variable.
CVisitor.prototype.visitVariable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CParser#function_parameter.
CVisitor.prototype.visitFunction_parameter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CParser#assign_operation.
CVisitor.prototype.visitAssign_operation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CParser#binaryExpression.
CVisitor.prototype.visitBinaryExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CParser#compareExpression.
CVisitor.prototype.visitCompareExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CParser#addExpression.
CVisitor.prototype.visitAddExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CParser#atomExpression.
CVisitor.prototype.visitAtomExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CParser#labelExpression.
CVisitor.prototype.visitLabelExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CParser#parExpression.
CVisitor.prototype.visitParExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CParser#functionExpression.
CVisitor.prototype.visitFunctionExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CParser#multiplicationOrDivideExpression.
CVisitor.prototype.visitMultiplicationOrDivideExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CParser#function_declaration.
CVisitor.prototype.visitFunction_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CParser#func_call.
CVisitor.prototype.visitFunc_call = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CParser#args_list.
CVisitor.prototype.visitArgs_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CParser#atom.
CVisitor.prototype.visitAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CParser#function_name.
CVisitor.prototype.visitFunction_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CParser#lab.
CVisitor.prototype.visitLab = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CParser#multiplication_or_divide.
CVisitor.prototype.visitMultiplication_or_divide = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CParser#add_or_substract.
CVisitor.prototype.visitAdd_or_substract = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CParser#block.
CVisitor.prototype.visitBlock = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CParser#statement_if.
CVisitor.prototype.visitStatement_if = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CParser#statement_while.
CVisitor.prototype.visitStatement_while = function(ctx) {
  return this.visitChildren(ctx);
};



exports.CVisitor = CVisitor;