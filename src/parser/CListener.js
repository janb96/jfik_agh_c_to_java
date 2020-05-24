// Generated from C.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by CParser.
function CListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

CListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
CListener.prototype.constructor = CListener;

// Enter a parse tree produced by CParser#prog.
CListener.prototype.enterProg = function(ctx) {
};

// Exit a parse tree produced by CParser#prog.
CListener.prototype.exitProg = function(ctx) {
};


// Enter a parse tree produced by CParser#statement.
CListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by CParser#statement.
CListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by CParser#comment_section.
CListener.prototype.enterComment_section = function(ctx) {
};

// Exit a parse tree produced by CParser#comment_section.
CListener.prototype.exitComment_section = function(ctx) {
};


// Enter a parse tree produced by CParser#variable.
CListener.prototype.enterVariable = function(ctx) {
};

// Exit a parse tree produced by CParser#variable.
CListener.prototype.exitVariable = function(ctx) {
};


// Enter a parse tree produced by CParser#function_parameter.
CListener.prototype.enterFunction_parameter = function(ctx) {
};

// Exit a parse tree produced by CParser#function_parameter.
CListener.prototype.exitFunction_parameter = function(ctx) {
};


// Enter a parse tree produced by CParser#assign_operation.
CListener.prototype.enterAssign_operation = function(ctx) {
};

// Exit a parse tree produced by CParser#assign_operation.
CListener.prototype.exitAssign_operation = function(ctx) {
};


// Enter a parse tree produced by CParser#binaryExpression.
CListener.prototype.enterBinaryExpression = function(ctx) {
};

// Exit a parse tree produced by CParser#binaryExpression.
CListener.prototype.exitBinaryExpression = function(ctx) {
};


// Enter a parse tree produced by CParser#compareExpression.
CListener.prototype.enterCompareExpression = function(ctx) {
};

// Exit a parse tree produced by CParser#compareExpression.
CListener.prototype.exitCompareExpression = function(ctx) {
};


// Enter a parse tree produced by CParser#addExpression.
CListener.prototype.enterAddExpression = function(ctx) {
};

// Exit a parse tree produced by CParser#addExpression.
CListener.prototype.exitAddExpression = function(ctx) {
};


// Enter a parse tree produced by CParser#atomExpression.
CListener.prototype.enterAtomExpression = function(ctx) {
};

// Exit a parse tree produced by CParser#atomExpression.
CListener.prototype.exitAtomExpression = function(ctx) {
};


// Enter a parse tree produced by CParser#labelExpression.
CListener.prototype.enterLabelExpression = function(ctx) {
};

// Exit a parse tree produced by CParser#labelExpression.
CListener.prototype.exitLabelExpression = function(ctx) {
};


// Enter a parse tree produced by CParser#parExpression.
CListener.prototype.enterParExpression = function(ctx) {
};

// Exit a parse tree produced by CParser#parExpression.
CListener.prototype.exitParExpression = function(ctx) {
};


// Enter a parse tree produced by CParser#functionExpression.
CListener.prototype.enterFunctionExpression = function(ctx) {
};

// Exit a parse tree produced by CParser#functionExpression.
CListener.prototype.exitFunctionExpression = function(ctx) {
};


// Enter a parse tree produced by CParser#multiplicationOrDivideExpression.
CListener.prototype.enterMultiplicationOrDivideExpression = function(ctx) {
};

// Exit a parse tree produced by CParser#multiplicationOrDivideExpression.
CListener.prototype.exitMultiplicationOrDivideExpression = function(ctx) {
};


// Enter a parse tree produced by CParser#function_declaration.
CListener.prototype.enterFunction_declaration = function(ctx) {
};

// Exit a parse tree produced by CParser#function_declaration.
CListener.prototype.exitFunction_declaration = function(ctx) {
};


// Enter a parse tree produced by CParser#func_call.
CListener.prototype.enterFunc_call = function(ctx) {
};

// Exit a parse tree produced by CParser#func_call.
CListener.prototype.exitFunc_call = function(ctx) {
};


// Enter a parse tree produced by CParser#args_list.
CListener.prototype.enterArgs_list = function(ctx) {
};

// Exit a parse tree produced by CParser#args_list.
CListener.prototype.exitArgs_list = function(ctx) {
};


// Enter a parse tree produced by CParser#atom.
CListener.prototype.enterAtom = function(ctx) {
};

// Exit a parse tree produced by CParser#atom.
CListener.prototype.exitAtom = function(ctx) {
};


// Enter a parse tree produced by CParser#function_name.
CListener.prototype.enterFunction_name = function(ctx) {
};

// Exit a parse tree produced by CParser#function_name.
CListener.prototype.exitFunction_name = function(ctx) {
};


// Enter a parse tree produced by CParser#lab.
CListener.prototype.enterLab = function(ctx) {
};

// Exit a parse tree produced by CParser#lab.
CListener.prototype.exitLab = function(ctx) {
};


// Enter a parse tree produced by CParser#multiplication_or_divide.
CListener.prototype.enterMultiplication_or_divide = function(ctx) {
};

// Exit a parse tree produced by CParser#multiplication_or_divide.
CListener.prototype.exitMultiplication_or_divide = function(ctx) {
};


// Enter a parse tree produced by CParser#add_or_substract.
CListener.prototype.enterAdd_or_substract = function(ctx) {
};

// Exit a parse tree produced by CParser#add_or_substract.
CListener.prototype.exitAdd_or_substract = function(ctx) {
};


// Enter a parse tree produced by CParser#block.
CListener.prototype.enterBlock = function(ctx) {
};

// Exit a parse tree produced by CParser#block.
CListener.prototype.exitBlock = function(ctx) {
};


// Enter a parse tree produced by CParser#statement_if.
CListener.prototype.enterStatement_if = function(ctx) {
};

// Exit a parse tree produced by CParser#statement_if.
CListener.prototype.exitStatement_if = function(ctx) {
};


// Enter a parse tree produced by CParser#statement_while.
CListener.prototype.enterStatement_while = function(ctx) {
};

// Exit a parse tree produced by CParser#statement_while.
CListener.prototype.exitStatement_while = function(ctx) {
};



exports.CListener = CListener;