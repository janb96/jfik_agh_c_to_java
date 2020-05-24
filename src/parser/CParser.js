// Generated from C.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var CListener = require('./CListener').CListener;
var CVisitor = require('./CVisitor').CVisitor;

var grammarFileName = "C.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003#\u00b3\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0003\u0002\u0007",
    "\u0002(\n\u0002\f\u0002\u000e\u0002+\u000b\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0005\u00035\n\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0005\u0005B\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\bS\n\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0007\bc\n\b\f\b\u000e\bf\u000b\b\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0007\to\n\t\f\t\u000e",
    "\tr\u000b\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0007\u000b~\n\u000b\f\u000b\u000e",
    "\u000b\u0081\u000b\u000b\u0003\u000b\u0005\u000b\u0084\n\u000b\u0003",
    "\f\u0003\f\u0005\f\u0088\n\f\u0003\f\u0003\f\u0005\f\u008c\n\f\u0003",
    "\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010",
    "\u0003\u0010\u0003\u0011\u0003\u0011\u0006\u0011\u0098\n\u0011\r\u0011",
    "\u000e\u0011\u0099\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0007",
    "\u0012\u00a6\n\u0012\f\u0012\u000e\u0012\u00a9\u000b\u0012\u0003\u0012",
    "\u0003\u0012\u0005\u0012\u00ad\n\u0012\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0002\u0003\u000e\u0014\u0002\u0004\u0006",
    "\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$\u0002",
    "\b\u0003\u0002\u0004\u0005\u0003\u0002\u0012\u0013\u0003\u0002\u0014",
    "\u0018\u0003\u0002\f\r\u0003\u0002\u001c\u001d\u0003\u0002\u000e\u000f",
    "\u0002\u00b9\u0002)\u0003\u0002\u0002\u0002\u00044\u0003\u0002\u0002",
    "\u0002\u00066\u0003\u0002\u0002\u0002\bA\u0003\u0002\u0002\u0002\nC",
    "\u0003\u0002\u0002\u0002\fF\u0003\u0002\u0002\u0002\u000eR\u0003\u0002",
    "\u0002\u0002\u0010g\u0003\u0002\u0002\u0002\u0012u\u0003\u0002\u0002",
    "\u0002\u0014\u007f\u0003\u0002\u0002\u0002\u0016\u008b\u0003\u0002\u0002",
    "\u0002\u0018\u008d\u0003\u0002\u0002\u0002\u001a\u008f\u0003\u0002\u0002",
    "\u0002\u001c\u0091\u0003\u0002\u0002\u0002\u001e\u0093\u0003\u0002\u0002",
    "\u0002 \u0095\u0003\u0002\u0002\u0002\"\u009d\u0003\u0002\u0002\u0002",
    "$\u00ae\u0003\u0002\u0002\u0002&(\u0005\u0004\u0003\u0002\'&\u0003\u0002",
    "\u0002\u0002(+\u0003\u0002\u0002\u0002)\'\u0003\u0002\u0002\u0002)*",
    "\u0003\u0002\u0002\u0002*\u0003\u0003\u0002\u0002\u0002+)\u0003\u0002",
    "\u0002\u0002,5\u0005\b\u0005\u0002-5\u0005\f\u0007\u0002.5\u0005\u0010",
    "\t\u0002/5\u0005\u0006\u0004\u000205\u0005\"\u0012\u000215\u0005$\u0013",
    "\u000225\u0005\u000e\b\u000235\u0007\n\u0002\u00024,\u0003\u0002\u0002",
    "\u00024-\u0003\u0002\u0002\u00024.\u0003\u0002\u0002\u00024/\u0003\u0002",
    "\u0002\u000240\u0003\u0002\u0002\u000241\u0003\u0002\u0002\u000242\u0003",
    "\u0002\u0002\u000243\u0003\u0002\u0002\u00025\u0005\u0003\u0002\u0002",
    "\u000267\t\u0002\u0002\u00027\u0007\u0003\u0002\u0002\u000289\u0007",
    "\u0006\u0002\u00029:\u0005\u001a\u000e\u0002:;\u0007\u000b\u0002\u0002",
    ";<\u0005\u000e\b\u0002<B\u0003\u0002\u0002\u0002=>\u0007\u0006\u0002",
    "\u0002>?\u0005\u001a\u000e\u0002?@\u0007\n\u0002\u0002@B\u0003\u0002",
    "\u0002\u0002A8\u0003\u0002\u0002\u0002A=\u0003\u0002\u0002\u0002B\t",
    "\u0003\u0002\u0002\u0002CD\u0007\u0006\u0002\u0002DE\u0005\u001a\u000e",
    "\u0002E\u000b\u0003\u0002\u0002\u0002FG\u0005\u001a\u000e\u0002GH\u0007",
    "\u000b\u0002\u0002HI\u0005\u000e\b\u0002I\r\u0003\u0002\u0002\u0002",
    "JK\b\b\u0001\u0002KL\u0007 \u0002\u0002LM\u0005\u000e\b\u0002MN\u0007",
    "!\u0002\u0002NS\u0003\u0002\u0002\u0002OS\u0005\u0012\n\u0002PS\u0007",
    "\u0007\u0002\u0002QS\u0005\u0016\f\u0002RJ\u0003\u0002\u0002\u0002R",
    "O\u0003\u0002\u0002\u0002RP\u0003\u0002\u0002\u0002RQ\u0003\u0002\u0002",
    "\u0002Sd\u0003\u0002\u0002\u0002TU\f\n\u0002\u0002UV\u0005\u001c\u000f",
    "\u0002VW\u0005\u000e\b\u000bWc\u0003\u0002\u0002\u0002XY\f\t\u0002\u0002",
    "YZ\u0005\u001e\u0010\u0002Z[\u0005\u000e\b\n[c\u0003\u0002\u0002\u0002",
    "\\]\f\u0005\u0002\u0002]^\t\u0003\u0002\u0002^c\u0005\u000e\b\u0006",
    "_`\f\u0004\u0002\u0002`a\t\u0004\u0002\u0002ac\u0005\u000e\b\u0005b",
    "T\u0003\u0002\u0002\u0002bX\u0003\u0002\u0002\u0002b\\\u0003\u0002\u0002",
    "\u0002b_\u0003\u0002\u0002\u0002cf\u0003\u0002\u0002\u0002db\u0003\u0002",
    "\u0002\u0002de\u0003\u0002\u0002\u0002e\u000f\u0003\u0002\u0002\u0002",
    "fd\u0003\u0002\u0002\u0002gh\u0007\u0006\u0002\u0002hi\u0005\u001a\u000e",
    "\u0002ij\u0007 \u0002\u0002jk\u0005\u0014\u000b\u0002kl\u0007!\u0002",
    "\u0002lp\u0007\u001e\u0002\u0002mo\u0005\u0004\u0003\u0002nm\u0003\u0002",
    "\u0002\u0002or\u0003\u0002\u0002\u0002pn\u0003\u0002\u0002\u0002pq\u0003",
    "\u0002\u0002\u0002qs\u0003\u0002\u0002\u0002rp\u0003\u0002\u0002\u0002",
    "st\u0007\u001f\u0002\u0002t\u0011\u0003\u0002\u0002\u0002uv\u0005\u0018",
    "\r\u0002vw\u0007 \u0002\u0002wx\u0005\u0014\u000b\u0002xy\u0007!\u0002",
    "\u0002y\u0013\u0003\u0002\u0002\u0002z{\u0005\n\u0006\u0002{|\u0007",
    "\u0003\u0002\u0002|~\u0003\u0002\u0002\u0002}z\u0003\u0002\u0002\u0002",
    "~\u0081\u0003\u0002\u0002\u0002\u007f}\u0003\u0002\u0002\u0002\u007f",
    "\u0080\u0003\u0002\u0002\u0002\u0080\u0083\u0003\u0002\u0002\u0002\u0081",
    "\u007f\u0003\u0002\u0002\u0002\u0082\u0084\u0005\n\u0006\u0002\u0083",
    "\u0082\u0003\u0002\u0002\u0002\u0083\u0084\u0003\u0002\u0002\u0002\u0084",
    "\u0015\u0003\u0002\u0002\u0002\u0085\u008c\u0007\b\u0002\u0002\u0086",
    "\u0088\t\u0005\u0002\u0002\u0087\u0086\u0003\u0002\u0002\u0002\u0087",
    "\u0088\u0003\u0002\u0002\u0002\u0088\u0089\u0003\u0002\u0002\u0002\u0089",
    "\u008c\u0007\t\u0002\u0002\u008a\u008c\t\u0006\u0002\u0002\u008b\u0085",
    "\u0003\u0002\u0002\u0002\u008b\u0087\u0003\u0002\u0002\u0002\u008b\u008a",
    "\u0003\u0002\u0002\u0002\u008c\u0017\u0003\u0002\u0002\u0002\u008d\u008e",
    "\u0007\u0007\u0002\u0002\u008e\u0019\u0003\u0002\u0002\u0002\u008f\u0090",
    "\u0007\u0007\u0002\u0002\u0090\u001b\u0003\u0002\u0002\u0002\u0091\u0092",
    "\t\u0007\u0002\u0002\u0092\u001d\u0003\u0002\u0002\u0002\u0093\u0094",
    "\t\u0005\u0002\u0002\u0094\u001f\u0003\u0002\u0002\u0002\u0095\u0097",
    "\u0007\u001e\u0002\u0002\u0096\u0098\u0005\u0004\u0003\u0002\u0097\u0096",
    "\u0003\u0002\u0002\u0002\u0098\u0099\u0003\u0002\u0002\u0002\u0099\u0097",
    "\u0003\u0002\u0002\u0002\u0099\u009a\u0003\u0002\u0002\u0002\u009a\u009b",
    "\u0003\u0002\u0002\u0002\u009b\u009c\u0007\u001f\u0002\u0002\u009c!",
    "\u0003\u0002\u0002\u0002\u009d\u009e\u0007\u0019\u0002\u0002\u009e\u009f",
    "\u0005\u000e\b\u0002\u009f\u00a7\u0005 \u0011\u0002\u00a0\u00a1\u0007",
    "\u001b\u0002\u0002\u00a1\u00a2\u0007\u0019\u0002\u0002\u00a2\u00a3\u0005",
    "\u000e\b\u0002\u00a3\u00a4\u0005 \u0011\u0002\u00a4\u00a6\u0003\u0002",
    "\u0002\u0002\u00a5\u00a0\u0003\u0002\u0002\u0002\u00a6\u00a9\u0003\u0002",
    "\u0002\u0002\u00a7\u00a5\u0003\u0002\u0002\u0002\u00a7\u00a8\u0003\u0002",
    "\u0002\u0002\u00a8\u00ac\u0003\u0002\u0002\u0002\u00a9\u00a7\u0003\u0002",
    "\u0002\u0002\u00aa\u00ab\u0007\u001b\u0002\u0002\u00ab\u00ad\u0005 ",
    "\u0011\u0002\u00ac\u00aa\u0003\u0002\u0002\u0002\u00ac\u00ad\u0003\u0002",
    "\u0002\u0002\u00ad#\u0003\u0002\u0002\u0002\u00ae\u00af\u0007\u001a",
    "\u0002\u0002\u00af\u00b0\u0005\u000e\b\u0002\u00b0\u00b1\u0005 \u0011",
    "\u0002\u00b1%\u0003\u0002\u0002\u0002\u0010)4ARbdp\u007f\u0083\u0087",
    "\u008b\u0099\u00a7\u00ac"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "','", null, null, null, null, null, null, "';'", 
                     "'='", "'+'", "'-'", "'*'", "'/'", "'++'", "'--'", 
                     "'&&'", "'||'", "'=='", "'>'", "'>='", "'<'", "'<='", 
                     "'if'", "'while'", "'else'", "'true'", "'false'", "'{'", 
                     "'}'", "'('", "')'" ];

var symbolicNames = [ null, null, "COMMENT", "BLOCK_COMMENT", "DATA_TYPE_VARIABLE", 
                      "LABEL", "STRING", "NUMBER", "END", "OPERATOR_ASSIGN", 
                      "OPERATOR_PLUS", "OPERATOR_SUB", "OPERATOR_MULTIPLY", 
                      "OPERATOR_DIVIDE", "OPERATOR_INCREMENT", "OPERATOR_DECREMENT", 
                      "OPERATOR_AND", "OPERATOR_OR", "OPERATOR_EQ", "OPERATOR_GT", 
                      "OPERATOR_GE", "OPERATOR_LT", "OPERATOR_LE", "SYMBOL_IF", 
                      "SYMBOL_WHILE", "SYMBOL_ELSE", "SYMBOL_TRUE", "SYMBOL_FALSE", 
                      "LEFT_BRACE", "RIGHT_BRACE", "LEFT_PAR", "RIGHT_PAR", 
                      "EOL", "WS" ];

var ruleNames =  [ "prog", "statement", "comment_section", "variable", "function_parameter", 
                   "assign_operation", "other_expression", "function_declaration", 
                   "func_call", "args_list", "atom", "function_name", "lab", 
                   "multiplication_or_divide", "add_or_substract", "block", 
                   "statement_if", "statement_while" ];

function CParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

CParser.prototype = Object.create(antlr4.Parser.prototype);
CParser.prototype.constructor = CParser;

Object.defineProperty(CParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

CParser.EOF = antlr4.Token.EOF;
CParser.T__0 = 1;
CParser.COMMENT = 2;
CParser.BLOCK_COMMENT = 3;
CParser.DATA_TYPE_VARIABLE = 4;
CParser.LABEL = 5;
CParser.STRING = 6;
CParser.NUMBER = 7;
CParser.END = 8;
CParser.OPERATOR_ASSIGN = 9;
CParser.OPERATOR_PLUS = 10;
CParser.OPERATOR_SUB = 11;
CParser.OPERATOR_MULTIPLY = 12;
CParser.OPERATOR_DIVIDE = 13;
CParser.OPERATOR_INCREMENT = 14;
CParser.OPERATOR_DECREMENT = 15;
CParser.OPERATOR_AND = 16;
CParser.OPERATOR_OR = 17;
CParser.OPERATOR_EQ = 18;
CParser.OPERATOR_GT = 19;
CParser.OPERATOR_GE = 20;
CParser.OPERATOR_LT = 21;
CParser.OPERATOR_LE = 22;
CParser.SYMBOL_IF = 23;
CParser.SYMBOL_WHILE = 24;
CParser.SYMBOL_ELSE = 25;
CParser.SYMBOL_TRUE = 26;
CParser.SYMBOL_FALSE = 27;
CParser.LEFT_BRACE = 28;
CParser.RIGHT_BRACE = 29;
CParser.LEFT_PAR = 30;
CParser.RIGHT_PAR = 31;
CParser.EOL = 32;
CParser.WS = 33;

CParser.RULE_prog = 0;
CParser.RULE_statement = 1;
CParser.RULE_comment_section = 2;
CParser.RULE_variable = 3;
CParser.RULE_function_parameter = 4;
CParser.RULE_assign_operation = 5;
CParser.RULE_other_expression = 6;
CParser.RULE_function_declaration = 7;
CParser.RULE_func_call = 8;
CParser.RULE_args_list = 9;
CParser.RULE_atom = 10;
CParser.RULE_function_name = 11;
CParser.RULE_lab = 12;
CParser.RULE_multiplication_or_divide = 13;
CParser.RULE_add_or_substract = 14;
CParser.RULE_block = 15;
CParser.RULE_statement_if = 16;
CParser.RULE_statement_while = 17;


function ProgContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CParser.RULE_prog;
    return this;
}

ProgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgContext.prototype.constructor = ProgContext;

ProgContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

ProgContext.prototype.enterRule = function(listener) {
    if(listener instanceof CListener ) {
        listener.enterProg(this);
	}
};

ProgContext.prototype.exitRule = function(listener) {
    if(listener instanceof CListener ) {
        listener.exitProg(this);
	}
};

ProgContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CVisitor ) {
        return visitor.visitProg(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CParser.ProgContext = ProgContext;

CParser.prototype.prog = function() {

    var localctx = new ProgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, CParser.RULE_prog);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 39;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CParser.COMMENT) | (1 << CParser.BLOCK_COMMENT) | (1 << CParser.DATA_TYPE_VARIABLE) | (1 << CParser.LABEL) | (1 << CParser.STRING) | (1 << CParser.NUMBER) | (1 << CParser.END) | (1 << CParser.OPERATOR_PLUS) | (1 << CParser.OPERATOR_SUB) | (1 << CParser.SYMBOL_IF) | (1 << CParser.SYMBOL_WHILE) | (1 << CParser.SYMBOL_TRUE) | (1 << CParser.SYMBOL_FALSE) | (1 << CParser.LEFT_PAR))) !== 0)) {
            this.state = 36;
            this.statement();
            this.state = 41;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

StatementContext.prototype.assign_operation = function() {
    return this.getTypedRuleContext(Assign_operationContext,0);
};

StatementContext.prototype.function_declaration = function() {
    return this.getTypedRuleContext(Function_declarationContext,0);
};

StatementContext.prototype.comment_section = function() {
    return this.getTypedRuleContext(Comment_sectionContext,0);
};

StatementContext.prototype.statement_if = function() {
    return this.getTypedRuleContext(Statement_ifContext,0);
};

StatementContext.prototype.statement_while = function() {
    return this.getTypedRuleContext(Statement_whileContext,0);
};

StatementContext.prototype.other_expression = function() {
    return this.getTypedRuleContext(Other_expressionContext,0);
};

StatementContext.prototype.END = function() {
    return this.getToken(CParser.END, 0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof CListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof CListener ) {
        listener.exitStatement(this);
	}
};

StatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CVisitor ) {
        return visitor.visitStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CParser.StatementContext = StatementContext;

CParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, CParser.RULE_statement);
    try {
        this.state = 50;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 42;
            this.variable();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 43;
            this.assign_operation();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 44;
            this.function_declaration();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 45;
            this.comment_section();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 46;
            this.statement_if();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 47;
            this.statement_while();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 48;
            this.other_expression(0);
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 49;
            this.match(CParser.END);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Comment_sectionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CParser.RULE_comment_section;
    return this;
}

Comment_sectionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Comment_sectionContext.prototype.constructor = Comment_sectionContext;

Comment_sectionContext.prototype.COMMENT = function() {
    return this.getToken(CParser.COMMENT, 0);
};

Comment_sectionContext.prototype.BLOCK_COMMENT = function() {
    return this.getToken(CParser.BLOCK_COMMENT, 0);
};

Comment_sectionContext.prototype.enterRule = function(listener) {
    if(listener instanceof CListener ) {
        listener.enterComment_section(this);
	}
};

Comment_sectionContext.prototype.exitRule = function(listener) {
    if(listener instanceof CListener ) {
        listener.exitComment_section(this);
	}
};

Comment_sectionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CVisitor ) {
        return visitor.visitComment_section(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CParser.Comment_sectionContext = Comment_sectionContext;

CParser.prototype.comment_section = function() {

    var localctx = new Comment_sectionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, CParser.RULE_comment_section);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 52;
        _la = this._input.LA(1);
        if(!(_la===CParser.COMMENT || _la===CParser.BLOCK_COMMENT)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function VariableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CParser.RULE_variable;
    this.name = null; // LabContext
    this.value = null; // Other_expressionContext
    return this;
}

VariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableContext.prototype.constructor = VariableContext;

VariableContext.prototype.DATA_TYPE_VARIABLE = function() {
    return this.getToken(CParser.DATA_TYPE_VARIABLE, 0);
};

VariableContext.prototype.OPERATOR_ASSIGN = function() {
    return this.getToken(CParser.OPERATOR_ASSIGN, 0);
};

VariableContext.prototype.lab = function() {
    return this.getTypedRuleContext(LabContext,0);
};

VariableContext.prototype.other_expression = function() {
    return this.getTypedRuleContext(Other_expressionContext,0);
};

VariableContext.prototype.END = function() {
    return this.getToken(CParser.END, 0);
};

VariableContext.prototype.enterRule = function(listener) {
    if(listener instanceof CListener ) {
        listener.enterVariable(this);
	}
};

VariableContext.prototype.exitRule = function(listener) {
    if(listener instanceof CListener ) {
        listener.exitVariable(this);
	}
};

VariableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CVisitor ) {
        return visitor.visitVariable(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CParser.VariableContext = VariableContext;

CParser.prototype.variable = function() {

    var localctx = new VariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, CParser.RULE_variable);
    try {
        this.state = 63;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 54;
            this.match(CParser.DATA_TYPE_VARIABLE);
            this.state = 55;
            localctx.name = this.lab();
            this.state = 56;
            this.match(CParser.OPERATOR_ASSIGN);
            this.state = 57;
            localctx.value = this.other_expression(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 59;
            this.match(CParser.DATA_TYPE_VARIABLE);
            this.state = 60;
            localctx.name = this.lab();
            this.state = 61;
            this.match(CParser.END);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Function_parameterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CParser.RULE_function_parameter;
    this.name = null; // LabContext
    return this;
}

Function_parameterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Function_parameterContext.prototype.constructor = Function_parameterContext;

Function_parameterContext.prototype.DATA_TYPE_VARIABLE = function() {
    return this.getToken(CParser.DATA_TYPE_VARIABLE, 0);
};

Function_parameterContext.prototype.lab = function() {
    return this.getTypedRuleContext(LabContext,0);
};

Function_parameterContext.prototype.enterRule = function(listener) {
    if(listener instanceof CListener ) {
        listener.enterFunction_parameter(this);
	}
};

Function_parameterContext.prototype.exitRule = function(listener) {
    if(listener instanceof CListener ) {
        listener.exitFunction_parameter(this);
	}
};

Function_parameterContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CVisitor ) {
        return visitor.visitFunction_parameter(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CParser.Function_parameterContext = Function_parameterContext;

CParser.prototype.function_parameter = function() {

    var localctx = new Function_parameterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, CParser.RULE_function_parameter);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 65;
        this.match(CParser.DATA_TYPE_VARIABLE);
        this.state = 66;
        localctx.name = this.lab();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Assign_operationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CParser.RULE_assign_operation;
    this.name = null; // LabContext
    this.value = null; // Other_expressionContext
    return this;
}

Assign_operationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Assign_operationContext.prototype.constructor = Assign_operationContext;

Assign_operationContext.prototype.OPERATOR_ASSIGN = function() {
    return this.getToken(CParser.OPERATOR_ASSIGN, 0);
};

Assign_operationContext.prototype.lab = function() {
    return this.getTypedRuleContext(LabContext,0);
};

Assign_operationContext.prototype.other_expression = function() {
    return this.getTypedRuleContext(Other_expressionContext,0);
};

Assign_operationContext.prototype.enterRule = function(listener) {
    if(listener instanceof CListener ) {
        listener.enterAssign_operation(this);
	}
};

Assign_operationContext.prototype.exitRule = function(listener) {
    if(listener instanceof CListener ) {
        listener.exitAssign_operation(this);
	}
};

Assign_operationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CVisitor ) {
        return visitor.visitAssign_operation(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CParser.Assign_operationContext = Assign_operationContext;

CParser.prototype.assign_operation = function() {

    var localctx = new Assign_operationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, CParser.RULE_assign_operation);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 68;
        localctx.name = this.lab();
        this.state = 69;
        this.match(CParser.OPERATOR_ASSIGN);
        this.state = 70;
        localctx.value = this.other_expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Other_expressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CParser.RULE_other_expression;
    return this;
}

Other_expressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Other_expressionContext.prototype.constructor = Other_expressionContext;


 
Other_expressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function BinaryExpressionContext(parser, ctx) {
	Other_expressionContext.call(this, parser);
    this.op = null; // Token;
    Other_expressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BinaryExpressionContext.prototype = Object.create(Other_expressionContext.prototype);
BinaryExpressionContext.prototype.constructor = BinaryExpressionContext;

CParser.BinaryExpressionContext = BinaryExpressionContext;

BinaryExpressionContext.prototype.other_expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Other_expressionContext);
    } else {
        return this.getTypedRuleContext(Other_expressionContext,i);
    }
};

BinaryExpressionContext.prototype.OPERATOR_AND = function() {
    return this.getToken(CParser.OPERATOR_AND, 0);
};

BinaryExpressionContext.prototype.OPERATOR_OR = function() {
    return this.getToken(CParser.OPERATOR_OR, 0);
};
BinaryExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof CListener ) {
        listener.enterBinaryExpression(this);
	}
};

BinaryExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof CListener ) {
        listener.exitBinaryExpression(this);
	}
};

BinaryExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CVisitor ) {
        return visitor.visitBinaryExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function CompareExpressionContext(parser, ctx) {
	Other_expressionContext.call(this, parser);
    this.op = null; // Token;
    Other_expressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CompareExpressionContext.prototype = Object.create(Other_expressionContext.prototype);
CompareExpressionContext.prototype.constructor = CompareExpressionContext;

CParser.CompareExpressionContext = CompareExpressionContext;

CompareExpressionContext.prototype.other_expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Other_expressionContext);
    } else {
        return this.getTypedRuleContext(Other_expressionContext,i);
    }
};

CompareExpressionContext.prototype.OPERATOR_EQ = function() {
    return this.getToken(CParser.OPERATOR_EQ, 0);
};

CompareExpressionContext.prototype.OPERATOR_GT = function() {
    return this.getToken(CParser.OPERATOR_GT, 0);
};

CompareExpressionContext.prototype.OPERATOR_GE = function() {
    return this.getToken(CParser.OPERATOR_GE, 0);
};

CompareExpressionContext.prototype.OPERATOR_LE = function() {
    return this.getToken(CParser.OPERATOR_LE, 0);
};

CompareExpressionContext.prototype.OPERATOR_LT = function() {
    return this.getToken(CParser.OPERATOR_LT, 0);
};
CompareExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof CListener ) {
        listener.enterCompareExpression(this);
	}
};

CompareExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof CListener ) {
        listener.exitCompareExpression(this);
	}
};

CompareExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CVisitor ) {
        return visitor.visitCompareExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AddExpressionContext(parser, ctx) {
	Other_expressionContext.call(this, parser);
    this.left = null; // Other_expressionContext;
    this.op = null; // Add_or_substractContext;
    this.right = null; // Other_expressionContext;
    Other_expressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AddExpressionContext.prototype = Object.create(Other_expressionContext.prototype);
AddExpressionContext.prototype.constructor = AddExpressionContext;

CParser.AddExpressionContext = AddExpressionContext;

AddExpressionContext.prototype.other_expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Other_expressionContext);
    } else {
        return this.getTypedRuleContext(Other_expressionContext,i);
    }
};

AddExpressionContext.prototype.add_or_substract = function() {
    return this.getTypedRuleContext(Add_or_substractContext,0);
};
AddExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof CListener ) {
        listener.enterAddExpression(this);
	}
};

AddExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof CListener ) {
        listener.exitAddExpression(this);
	}
};

AddExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CVisitor ) {
        return visitor.visitAddExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AtomExpressionContext(parser, ctx) {
	Other_expressionContext.call(this, parser);
    Other_expressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AtomExpressionContext.prototype = Object.create(Other_expressionContext.prototype);
AtomExpressionContext.prototype.constructor = AtomExpressionContext;

CParser.AtomExpressionContext = AtomExpressionContext;

AtomExpressionContext.prototype.atom = function() {
    return this.getTypedRuleContext(AtomContext,0);
};
AtomExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof CListener ) {
        listener.enterAtomExpression(this);
	}
};

AtomExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof CListener ) {
        listener.exitAtomExpression(this);
	}
};

AtomExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CVisitor ) {
        return visitor.visitAtomExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LabelExpressionContext(parser, ctx) {
	Other_expressionContext.call(this, parser);
    Other_expressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LabelExpressionContext.prototype = Object.create(Other_expressionContext.prototype);
LabelExpressionContext.prototype.constructor = LabelExpressionContext;

CParser.LabelExpressionContext = LabelExpressionContext;

LabelExpressionContext.prototype.LABEL = function() {
    return this.getToken(CParser.LABEL, 0);
};
LabelExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof CListener ) {
        listener.enterLabelExpression(this);
	}
};

LabelExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof CListener ) {
        listener.exitLabelExpression(this);
	}
};

LabelExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CVisitor ) {
        return visitor.visitLabelExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ParExpressionContext(parser, ctx) {
	Other_expressionContext.call(this, parser);
    Other_expressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParExpressionContext.prototype = Object.create(Other_expressionContext.prototype);
ParExpressionContext.prototype.constructor = ParExpressionContext;

CParser.ParExpressionContext = ParExpressionContext;

ParExpressionContext.prototype.LEFT_PAR = function() {
    return this.getToken(CParser.LEFT_PAR, 0);
};

ParExpressionContext.prototype.other_expression = function() {
    return this.getTypedRuleContext(Other_expressionContext,0);
};

ParExpressionContext.prototype.RIGHT_PAR = function() {
    return this.getToken(CParser.RIGHT_PAR, 0);
};
ParExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof CListener ) {
        listener.enterParExpression(this);
	}
};

ParExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof CListener ) {
        listener.exitParExpression(this);
	}
};

ParExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CVisitor ) {
        return visitor.visitParExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FunctionExpressionContext(parser, ctx) {
	Other_expressionContext.call(this, parser);
    Other_expressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FunctionExpressionContext.prototype = Object.create(Other_expressionContext.prototype);
FunctionExpressionContext.prototype.constructor = FunctionExpressionContext;

CParser.FunctionExpressionContext = FunctionExpressionContext;

FunctionExpressionContext.prototype.func_call = function() {
    return this.getTypedRuleContext(Func_callContext,0);
};
FunctionExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof CListener ) {
        listener.enterFunctionExpression(this);
	}
};

FunctionExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof CListener ) {
        listener.exitFunctionExpression(this);
	}
};

FunctionExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CVisitor ) {
        return visitor.visitFunctionExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MultiplicationOrDivideExpressionContext(parser, ctx) {
	Other_expressionContext.call(this, parser);
    this.left = null; // Other_expressionContext;
    this.op = null; // Multiplication_or_divideContext;
    this.right = null; // Other_expressionContext;
    Other_expressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MultiplicationOrDivideExpressionContext.prototype = Object.create(Other_expressionContext.prototype);
MultiplicationOrDivideExpressionContext.prototype.constructor = MultiplicationOrDivideExpressionContext;

CParser.MultiplicationOrDivideExpressionContext = MultiplicationOrDivideExpressionContext;

MultiplicationOrDivideExpressionContext.prototype.other_expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Other_expressionContext);
    } else {
        return this.getTypedRuleContext(Other_expressionContext,i);
    }
};

MultiplicationOrDivideExpressionContext.prototype.multiplication_or_divide = function() {
    return this.getTypedRuleContext(Multiplication_or_divideContext,0);
};
MultiplicationOrDivideExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof CListener ) {
        listener.enterMultiplicationOrDivideExpression(this);
	}
};

MultiplicationOrDivideExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof CListener ) {
        listener.exitMultiplicationOrDivideExpression(this);
	}
};

MultiplicationOrDivideExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CVisitor ) {
        return visitor.visitMultiplicationOrDivideExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};



CParser.prototype.other_expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Other_expressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 12;
    this.enterRecursionRule(localctx, 12, CParser.RULE_other_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 80;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            localctx = new ParExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 73;
            this.match(CParser.LEFT_PAR);
            this.state = 74;
            this.other_expression(0);
            this.state = 75;
            this.match(CParser.RIGHT_PAR);
            break;

        case 2:
            localctx = new FunctionExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 77;
            this.func_call();
            break;

        case 3:
            localctx = new LabelExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 78;
            this.match(CParser.LABEL);
            break;

        case 4:
            localctx = new AtomExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 79;
            this.atom();
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 98;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 96;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new MultiplicationOrDivideExpressionContext(this, new Other_expressionContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, CParser.RULE_other_expression);
                    this.state = 82;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 83;
                    localctx.op = this.multiplication_or_divide();
                    this.state = 84;
                    localctx.right = this.other_expression(9);
                    break;

                case 2:
                    localctx = new AddExpressionContext(this, new Other_expressionContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, CParser.RULE_other_expression);
                    this.state = 86;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 87;
                    localctx.op = this.add_or_substract();
                    this.state = 88;
                    localctx.right = this.other_expression(8);
                    break;

                case 3:
                    localctx = new BinaryExpressionContext(this, new Other_expressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CParser.RULE_other_expression);
                    this.state = 90;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 91;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===CParser.OPERATOR_AND || _la===CParser.OPERATOR_OR)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 92;
                    this.other_expression(4);
                    break;

                case 4:
                    localctx = new CompareExpressionContext(this, new Other_expressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CParser.RULE_other_expression);
                    this.state = 93;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 94;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CParser.OPERATOR_EQ) | (1 << CParser.OPERATOR_GT) | (1 << CParser.OPERATOR_GE) | (1 << CParser.OPERATOR_LT) | (1 << CParser.OPERATOR_LE))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 95;
                    this.other_expression(3);
                    break;

                } 
            }
            this.state = 100;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function Function_declarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CParser.RULE_function_declaration;
    this.name = null; // LabContext
    this.args = null; // Args_listContext
    return this;
}

Function_declarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Function_declarationContext.prototype.constructor = Function_declarationContext;

Function_declarationContext.prototype.DATA_TYPE_VARIABLE = function() {
    return this.getToken(CParser.DATA_TYPE_VARIABLE, 0);
};

Function_declarationContext.prototype.LEFT_PAR = function() {
    return this.getToken(CParser.LEFT_PAR, 0);
};

Function_declarationContext.prototype.RIGHT_PAR = function() {
    return this.getToken(CParser.RIGHT_PAR, 0);
};

Function_declarationContext.prototype.LEFT_BRACE = function() {
    return this.getToken(CParser.LEFT_BRACE, 0);
};

Function_declarationContext.prototype.RIGHT_BRACE = function() {
    return this.getToken(CParser.RIGHT_BRACE, 0);
};

Function_declarationContext.prototype.lab = function() {
    return this.getTypedRuleContext(LabContext,0);
};

Function_declarationContext.prototype.args_list = function() {
    return this.getTypedRuleContext(Args_listContext,0);
};

Function_declarationContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

Function_declarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof CListener ) {
        listener.enterFunction_declaration(this);
	}
};

Function_declarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof CListener ) {
        listener.exitFunction_declaration(this);
	}
};

Function_declarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CVisitor ) {
        return visitor.visitFunction_declaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CParser.Function_declarationContext = Function_declarationContext;

CParser.prototype.function_declaration = function() {

    var localctx = new Function_declarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, CParser.RULE_function_declaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 101;
        this.match(CParser.DATA_TYPE_VARIABLE);
        this.state = 102;
        localctx.name = this.lab();
        this.state = 103;
        this.match(CParser.LEFT_PAR);
        this.state = 104;
        localctx.args = this.args_list();
        this.state = 105;
        this.match(CParser.RIGHT_PAR);
        this.state = 106;
        this.match(CParser.LEFT_BRACE);
        this.state = 110;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CParser.COMMENT) | (1 << CParser.BLOCK_COMMENT) | (1 << CParser.DATA_TYPE_VARIABLE) | (1 << CParser.LABEL) | (1 << CParser.STRING) | (1 << CParser.NUMBER) | (1 << CParser.END) | (1 << CParser.OPERATOR_PLUS) | (1 << CParser.OPERATOR_SUB) | (1 << CParser.SYMBOL_IF) | (1 << CParser.SYMBOL_WHILE) | (1 << CParser.SYMBOL_TRUE) | (1 << CParser.SYMBOL_FALSE) | (1 << CParser.LEFT_PAR))) !== 0)) {
            this.state = 107;
            this.statement();
            this.state = 112;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 113;
        this.match(CParser.RIGHT_BRACE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Func_callContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CParser.RULE_func_call;
    this.name = null; // Function_nameContext
    this.args = null; // Args_listContext
    return this;
}

Func_callContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Func_callContext.prototype.constructor = Func_callContext;

Func_callContext.prototype.LEFT_PAR = function() {
    return this.getToken(CParser.LEFT_PAR, 0);
};

Func_callContext.prototype.RIGHT_PAR = function() {
    return this.getToken(CParser.RIGHT_PAR, 0);
};

Func_callContext.prototype.function_name = function() {
    return this.getTypedRuleContext(Function_nameContext,0);
};

Func_callContext.prototype.args_list = function() {
    return this.getTypedRuleContext(Args_listContext,0);
};

Func_callContext.prototype.enterRule = function(listener) {
    if(listener instanceof CListener ) {
        listener.enterFunc_call(this);
	}
};

Func_callContext.prototype.exitRule = function(listener) {
    if(listener instanceof CListener ) {
        listener.exitFunc_call(this);
	}
};

Func_callContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CVisitor ) {
        return visitor.visitFunc_call(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CParser.Func_callContext = Func_callContext;

CParser.prototype.func_call = function() {

    var localctx = new Func_callContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, CParser.RULE_func_call);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 115;
        localctx.name = this.function_name();
        this.state = 116;
        this.match(CParser.LEFT_PAR);
        this.state = 117;
        localctx.args = this.args_list();
        this.state = 118;
        this.match(CParser.RIGHT_PAR);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Args_listContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CParser.RULE_args_list;
    this._function_parameter = null; // Function_parameterContext
    this.args = []; // of Function_parameterContexts
    return this;
}

Args_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Args_listContext.prototype.constructor = Args_listContext;

Args_listContext.prototype.function_parameter = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Function_parameterContext);
    } else {
        return this.getTypedRuleContext(Function_parameterContext,i);
    }
};

Args_listContext.prototype.enterRule = function(listener) {
    if(listener instanceof CListener ) {
        listener.enterArgs_list(this);
	}
};

Args_listContext.prototype.exitRule = function(listener) {
    if(listener instanceof CListener ) {
        listener.exitArgs_list(this);
	}
};

Args_listContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CVisitor ) {
        return visitor.visitArgs_list(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CParser.Args_listContext = Args_listContext;

CParser.prototype.args_list = function() {

    var localctx = new Args_listContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, CParser.RULE_args_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 125;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 120;
                localctx._function_parameter = this.function_parameter();
                localctx.args.push(localctx._function_parameter);
                this.state = 121;
                this.match(CParser.T__0); 
            }
            this.state = 127;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
        }

        this.state = 129;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===CParser.DATA_TYPE_VARIABLE) {
            this.state = 128;
            localctx._function_parameter = this.function_parameter();
            localctx.args.push(localctx._function_parameter);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AtomContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CParser.RULE_atom;
    return this;
}

AtomContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AtomContext.prototype.constructor = AtomContext;

AtomContext.prototype.STRING = function() {
    return this.getToken(CParser.STRING, 0);
};

AtomContext.prototype.NUMBER = function() {
    return this.getToken(CParser.NUMBER, 0);
};

AtomContext.prototype.OPERATOR_PLUS = function() {
    return this.getToken(CParser.OPERATOR_PLUS, 0);
};

AtomContext.prototype.OPERATOR_SUB = function() {
    return this.getToken(CParser.OPERATOR_SUB, 0);
};

AtomContext.prototype.SYMBOL_TRUE = function() {
    return this.getToken(CParser.SYMBOL_TRUE, 0);
};

AtomContext.prototype.SYMBOL_FALSE = function() {
    return this.getToken(CParser.SYMBOL_FALSE, 0);
};

AtomContext.prototype.enterRule = function(listener) {
    if(listener instanceof CListener ) {
        listener.enterAtom(this);
	}
};

AtomContext.prototype.exitRule = function(listener) {
    if(listener instanceof CListener ) {
        listener.exitAtom(this);
	}
};

AtomContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CVisitor ) {
        return visitor.visitAtom(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CParser.AtomContext = AtomContext;

CParser.prototype.atom = function() {

    var localctx = new AtomContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, CParser.RULE_atom);
    var _la = 0; // Token type
    try {
        this.state = 137;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CParser.STRING:
            this.enterOuterAlt(localctx, 1);
            this.state = 131;
            this.match(CParser.STRING);
            break;
        case CParser.NUMBER:
        case CParser.OPERATOR_PLUS:
        case CParser.OPERATOR_SUB:
            this.enterOuterAlt(localctx, 2);
            this.state = 133;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===CParser.OPERATOR_PLUS || _la===CParser.OPERATOR_SUB) {
                this.state = 132;
                _la = this._input.LA(1);
                if(!(_la===CParser.OPERATOR_PLUS || _la===CParser.OPERATOR_SUB)) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                }
            }

            this.state = 135;
            this.match(CParser.NUMBER);
            break;
        case CParser.SYMBOL_TRUE:
        case CParser.SYMBOL_FALSE:
            this.enterOuterAlt(localctx, 3);
            this.state = 136;
            _la = this._input.LA(1);
            if(!(_la===CParser.SYMBOL_TRUE || _la===CParser.SYMBOL_FALSE)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Function_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CParser.RULE_function_name;
    return this;
}

Function_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Function_nameContext.prototype.constructor = Function_nameContext;

Function_nameContext.prototype.LABEL = function() {
    return this.getToken(CParser.LABEL, 0);
};

Function_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof CListener ) {
        listener.enterFunction_name(this);
	}
};

Function_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof CListener ) {
        listener.exitFunction_name(this);
	}
};

Function_nameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CVisitor ) {
        return visitor.visitFunction_name(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CParser.Function_nameContext = Function_nameContext;

CParser.prototype.function_name = function() {

    var localctx = new Function_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, CParser.RULE_function_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 139;
        this.match(CParser.LABEL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LabContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CParser.RULE_lab;
    return this;
}

LabContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LabContext.prototype.constructor = LabContext;

LabContext.prototype.LABEL = function() {
    return this.getToken(CParser.LABEL, 0);
};

LabContext.prototype.enterRule = function(listener) {
    if(listener instanceof CListener ) {
        listener.enterLab(this);
	}
};

LabContext.prototype.exitRule = function(listener) {
    if(listener instanceof CListener ) {
        listener.exitLab(this);
	}
};

LabContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CVisitor ) {
        return visitor.visitLab(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CParser.LabContext = LabContext;

CParser.prototype.lab = function() {

    var localctx = new LabContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, CParser.RULE_lab);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 141;
        this.match(CParser.LABEL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Multiplication_or_divideContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CParser.RULE_multiplication_or_divide;
    return this;
}

Multiplication_or_divideContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Multiplication_or_divideContext.prototype.constructor = Multiplication_or_divideContext;

Multiplication_or_divideContext.prototype.OPERATOR_MULTIPLY = function() {
    return this.getToken(CParser.OPERATOR_MULTIPLY, 0);
};

Multiplication_or_divideContext.prototype.OPERATOR_DIVIDE = function() {
    return this.getToken(CParser.OPERATOR_DIVIDE, 0);
};

Multiplication_or_divideContext.prototype.enterRule = function(listener) {
    if(listener instanceof CListener ) {
        listener.enterMultiplication_or_divide(this);
	}
};

Multiplication_or_divideContext.prototype.exitRule = function(listener) {
    if(listener instanceof CListener ) {
        listener.exitMultiplication_or_divide(this);
	}
};

Multiplication_or_divideContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CVisitor ) {
        return visitor.visitMultiplication_or_divide(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CParser.Multiplication_or_divideContext = Multiplication_or_divideContext;

CParser.prototype.multiplication_or_divide = function() {

    var localctx = new Multiplication_or_divideContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, CParser.RULE_multiplication_or_divide);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 143;
        _la = this._input.LA(1);
        if(!(_la===CParser.OPERATOR_MULTIPLY || _la===CParser.OPERATOR_DIVIDE)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Add_or_substractContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CParser.RULE_add_or_substract;
    return this;
}

Add_or_substractContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Add_or_substractContext.prototype.constructor = Add_or_substractContext;

Add_or_substractContext.prototype.OPERATOR_PLUS = function() {
    return this.getToken(CParser.OPERATOR_PLUS, 0);
};

Add_or_substractContext.prototype.OPERATOR_SUB = function() {
    return this.getToken(CParser.OPERATOR_SUB, 0);
};

Add_or_substractContext.prototype.enterRule = function(listener) {
    if(listener instanceof CListener ) {
        listener.enterAdd_or_substract(this);
	}
};

Add_or_substractContext.prototype.exitRule = function(listener) {
    if(listener instanceof CListener ) {
        listener.exitAdd_or_substract(this);
	}
};

Add_or_substractContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CVisitor ) {
        return visitor.visitAdd_or_substract(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CParser.Add_or_substractContext = Add_or_substractContext;

CParser.prototype.add_or_substract = function() {

    var localctx = new Add_or_substractContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, CParser.RULE_add_or_substract);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 145;
        _la = this._input.LA(1);
        if(!(_la===CParser.OPERATOR_PLUS || _la===CParser.OPERATOR_SUB)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.LEFT_BRACE = function() {
    return this.getToken(CParser.LEFT_BRACE, 0);
};

BlockContext.prototype.RIGHT_BRACE = function() {
    return this.getToken(CParser.RIGHT_BRACE, 0);
};

BlockContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

BlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof CListener ) {
        listener.enterBlock(this);
	}
};

BlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof CListener ) {
        listener.exitBlock(this);
	}
};

BlockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CVisitor ) {
        return visitor.visitBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CParser.BlockContext = BlockContext;

CParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, CParser.RULE_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 147;
        this.match(CParser.LEFT_BRACE);
        this.state = 149; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 148;
            this.statement();
            this.state = 151; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CParser.COMMENT) | (1 << CParser.BLOCK_COMMENT) | (1 << CParser.DATA_TYPE_VARIABLE) | (1 << CParser.LABEL) | (1 << CParser.STRING) | (1 << CParser.NUMBER) | (1 << CParser.END) | (1 << CParser.OPERATOR_PLUS) | (1 << CParser.OPERATOR_SUB) | (1 << CParser.SYMBOL_IF) | (1 << CParser.SYMBOL_WHILE) | (1 << CParser.SYMBOL_TRUE) | (1 << CParser.SYMBOL_FALSE) | (1 << CParser.LEFT_PAR))) !== 0));
        this.state = 153;
        this.match(CParser.RIGHT_BRACE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Statement_ifContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CParser.RULE_statement_if;
    return this;
}

Statement_ifContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Statement_ifContext.prototype.constructor = Statement_ifContext;

Statement_ifContext.prototype.SYMBOL_IF = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CParser.SYMBOL_IF);
    } else {
        return this.getToken(CParser.SYMBOL_IF, i);
    }
};


Statement_ifContext.prototype.other_expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Other_expressionContext);
    } else {
        return this.getTypedRuleContext(Other_expressionContext,i);
    }
};

Statement_ifContext.prototype.block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BlockContext);
    } else {
        return this.getTypedRuleContext(BlockContext,i);
    }
};

Statement_ifContext.prototype.SYMBOL_ELSE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CParser.SYMBOL_ELSE);
    } else {
        return this.getToken(CParser.SYMBOL_ELSE, i);
    }
};


Statement_ifContext.prototype.enterRule = function(listener) {
    if(listener instanceof CListener ) {
        listener.enterStatement_if(this);
	}
};

Statement_ifContext.prototype.exitRule = function(listener) {
    if(listener instanceof CListener ) {
        listener.exitStatement_if(this);
	}
};

Statement_ifContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CVisitor ) {
        return visitor.visitStatement_if(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CParser.Statement_ifContext = Statement_ifContext;

CParser.prototype.statement_if = function() {

    var localctx = new Statement_ifContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, CParser.RULE_statement_if);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 155;
        this.match(CParser.SYMBOL_IF);
        this.state = 156;
        this.other_expression(0);
        this.state = 157;
        this.block();
        this.state = 165;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 158;
                this.match(CParser.SYMBOL_ELSE);
                this.state = 159;
                this.match(CParser.SYMBOL_IF);
                this.state = 160;
                this.other_expression(0);
                this.state = 161;
                this.block(); 
            }
            this.state = 167;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
        }

        this.state = 170;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===CParser.SYMBOL_ELSE) {
            this.state = 168;
            this.match(CParser.SYMBOL_ELSE);
            this.state = 169;
            this.block();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Statement_whileContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CParser.RULE_statement_while;
    return this;
}

Statement_whileContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Statement_whileContext.prototype.constructor = Statement_whileContext;

Statement_whileContext.prototype.SYMBOL_WHILE = function() {
    return this.getToken(CParser.SYMBOL_WHILE, 0);
};

Statement_whileContext.prototype.other_expression = function() {
    return this.getTypedRuleContext(Other_expressionContext,0);
};

Statement_whileContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

Statement_whileContext.prototype.enterRule = function(listener) {
    if(listener instanceof CListener ) {
        listener.enterStatement_while(this);
	}
};

Statement_whileContext.prototype.exitRule = function(listener) {
    if(listener instanceof CListener ) {
        listener.exitStatement_while(this);
	}
};

Statement_whileContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CVisitor ) {
        return visitor.visitStatement_while(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CParser.Statement_whileContext = Statement_whileContext;

CParser.prototype.statement_while = function() {

    var localctx = new Statement_whileContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, CParser.RULE_statement_while);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 172;
        this.match(CParser.SYMBOL_WHILE);
        this.state = 173;
        this.other_expression(0);
        this.state = 174;
        this.block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


CParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 6:
			return this.other_expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

CParser.prototype.other_expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 8);
		case 1:
			return this.precpred(this._ctx, 7);
		case 2:
			return this.precpred(this._ctx, 3);
		case 3:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.CParser = CParser;
