// Generated from grammar/C.g4 by ANTLR 4.8
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class CParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, COMMENT=2, BLOCK_COMMENT=3, DATA_TYPE_VARIABLE=4, LABEL=5, STRING=6, 
		NUMBER=7, END=8, OPERATOR_ASSIGN=9, OPERATOR_PLUS=10, OPERATOR_SUB=11, 
		OPERATOR_MULTIPLY=12, OPERATOR_DIVIDE=13, OPERATOR_INCREMENT=14, OPERATOR_DECREMENT=15, 
		OPERATOR_AND=16, OPERATOR_OR=17, OPERATOR_EQ=18, OPERATOR_GT=19, OPERATOR_GE=20, 
		OPERATOR_LT=21, OPERATOR_LE=22, SYMBOL_IF=23, SYMBOL_WHILE=24, SYMBOL_ELSE=25, 
		SYMBOL_TRUE=26, SYMBOL_FALSE=27, LEFT_BRACE=28, RIGHT_BRACE=29, LEFT_PAR=30, 
		RIGHT_PAR=31, EOL=32, WS=33;
	public static final int
		RULE_prog = 0, RULE_statement = 1, RULE_comment_section = 2, RULE_variable = 3, 
		RULE_function_parameter = 4, RULE_assign_operation = 5, RULE_other_expression = 6, 
		RULE_function_declaration = 7, RULE_func_call = 8, RULE_args_list = 9, 
		RULE_atom = 10, RULE_function_name = 11, RULE_lab = 12, RULE_multiplication_or_divide = 13, 
		RULE_add_or_substract = 14, RULE_block = 15, RULE_statement_if = 16, RULE_statement_while = 17;
	private static String[] makeRuleNames() {
		return new String[] {
			"prog", "statement", "comment_section", "variable", "function_parameter", 
			"assign_operation", "other_expression", "function_declaration", "func_call", 
			"args_list", "atom", "function_name", "lab", "multiplication_or_divide", 
			"add_or_substract", "block", "statement_if", "statement_while"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "','", null, null, null, null, null, null, "';'", "'='", "'+'", 
			"'-'", "'*'", "'/'", "'++'", "'--'", "'&&'", "'||'", "'=='", "'>'", "'>='", 
			"'<'", "'<='", "'if'", "'while'", "'else'", "'true'", "'false'", "'{'", 
			"'}'", "'('", "')'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, "COMMENT", "BLOCK_COMMENT", "DATA_TYPE_VARIABLE", "LABEL", 
			"STRING", "NUMBER", "END", "OPERATOR_ASSIGN", "OPERATOR_PLUS", "OPERATOR_SUB", 
			"OPERATOR_MULTIPLY", "OPERATOR_DIVIDE", "OPERATOR_INCREMENT", "OPERATOR_DECREMENT", 
			"OPERATOR_AND", "OPERATOR_OR", "OPERATOR_EQ", "OPERATOR_GT", "OPERATOR_GE", 
			"OPERATOR_LT", "OPERATOR_LE", "SYMBOL_IF", "SYMBOL_WHILE", "SYMBOL_ELSE", 
			"SYMBOL_TRUE", "SYMBOL_FALSE", "LEFT_BRACE", "RIGHT_BRACE", "LEFT_PAR", 
			"RIGHT_PAR", "EOL", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "C.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public CParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class ProgContext extends ParserRuleContext {
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public ProgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_prog; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CListener ) ((CListener)listener).enterProg(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CListener ) ((CListener)listener).exitProg(this);
		}
	}

	public final ProgContext prog() throws RecognitionException {
		ProgContext _localctx = new ProgContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_prog);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(39);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << COMMENT) | (1L << BLOCK_COMMENT) | (1L << DATA_TYPE_VARIABLE) | (1L << LABEL) | (1L << STRING) | (1L << NUMBER) | (1L << END) | (1L << OPERATOR_PLUS) | (1L << OPERATOR_SUB) | (1L << SYMBOL_IF) | (1L << SYMBOL_WHILE) | (1L << SYMBOL_TRUE) | (1L << SYMBOL_FALSE) | (1L << LEFT_PAR))) != 0)) {
				{
				{
				setState(36);
				statement();
				}
				}
				setState(41);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementContext extends ParserRuleContext {
		public VariableContext variable() {
			return getRuleContext(VariableContext.class,0);
		}
		public Assign_operationContext assign_operation() {
			return getRuleContext(Assign_operationContext.class,0);
		}
		public Function_declarationContext function_declaration() {
			return getRuleContext(Function_declarationContext.class,0);
		}
		public Comment_sectionContext comment_section() {
			return getRuleContext(Comment_sectionContext.class,0);
		}
		public Statement_ifContext statement_if() {
			return getRuleContext(Statement_ifContext.class,0);
		}
		public Statement_whileContext statement_while() {
			return getRuleContext(Statement_whileContext.class,0);
		}
		public Other_expressionContext other_expression() {
			return getRuleContext(Other_expressionContext.class,0);
		}
		public TerminalNode END() { return getToken(CParser.END, 0); }
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CListener ) ((CListener)listener).enterStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CListener ) ((CListener)listener).exitStatement(this);
		}
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_statement);
		try {
			setState(50);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(42);
				variable();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(43);
				assign_operation();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(44);
				function_declaration();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(45);
				comment_section();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(46);
				statement_if();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(47);
				statement_while();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(48);
				other_expression(0);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(49);
				match(END);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Comment_sectionContext extends ParserRuleContext {
		public TerminalNode COMMENT() { return getToken(CParser.COMMENT, 0); }
		public TerminalNode BLOCK_COMMENT() { return getToken(CParser.BLOCK_COMMENT, 0); }
		public Comment_sectionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comment_section; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CListener ) ((CListener)listener).enterComment_section(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CListener ) ((CListener)listener).exitComment_section(this);
		}
	}

	public final Comment_sectionContext comment_section() throws RecognitionException {
		Comment_sectionContext _localctx = new Comment_sectionContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_comment_section);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(52);
			_la = _input.LA(1);
			if ( !(_la==COMMENT || _la==BLOCK_COMMENT) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VariableContext extends ParserRuleContext {
		public LabContext name;
		public Other_expressionContext value;
		public TerminalNode DATA_TYPE_VARIABLE() { return getToken(CParser.DATA_TYPE_VARIABLE, 0); }
		public TerminalNode OPERATOR_ASSIGN() { return getToken(CParser.OPERATOR_ASSIGN, 0); }
		public LabContext lab() {
			return getRuleContext(LabContext.class,0);
		}
		public Other_expressionContext other_expression() {
			return getRuleContext(Other_expressionContext.class,0);
		}
		public TerminalNode END() { return getToken(CParser.END, 0); }
		public VariableContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variable; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CListener ) ((CListener)listener).enterVariable(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CListener ) ((CListener)listener).exitVariable(this);
		}
	}

	public final VariableContext variable() throws RecognitionException {
		VariableContext _localctx = new VariableContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_variable);
		try {
			setState(63);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(54);
				match(DATA_TYPE_VARIABLE);
				setState(55);
				((VariableContext)_localctx).name = lab();
				setState(56);
				match(OPERATOR_ASSIGN);
				setState(57);
				((VariableContext)_localctx).value = other_expression(0);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(59);
				match(DATA_TYPE_VARIABLE);
				setState(60);
				((VariableContext)_localctx).name = lab();
				setState(61);
				match(END);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Function_parameterContext extends ParserRuleContext {
		public LabContext name;
		public TerminalNode DATA_TYPE_VARIABLE() { return getToken(CParser.DATA_TYPE_VARIABLE, 0); }
		public LabContext lab() {
			return getRuleContext(LabContext.class,0);
		}
		public Function_parameterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_function_parameter; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CListener ) ((CListener)listener).enterFunction_parameter(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CListener ) ((CListener)listener).exitFunction_parameter(this);
		}
	}

	public final Function_parameterContext function_parameter() throws RecognitionException {
		Function_parameterContext _localctx = new Function_parameterContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_function_parameter);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(65);
			match(DATA_TYPE_VARIABLE);
			setState(66);
			((Function_parameterContext)_localctx).name = lab();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Assign_operationContext extends ParserRuleContext {
		public LabContext name;
		public Other_expressionContext value;
		public TerminalNode OPERATOR_ASSIGN() { return getToken(CParser.OPERATOR_ASSIGN, 0); }
		public LabContext lab() {
			return getRuleContext(LabContext.class,0);
		}
		public Other_expressionContext other_expression() {
			return getRuleContext(Other_expressionContext.class,0);
		}
		public Assign_operationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assign_operation; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CListener ) ((CListener)listener).enterAssign_operation(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CListener ) ((CListener)listener).exitAssign_operation(this);
		}
	}

	public final Assign_operationContext assign_operation() throws RecognitionException {
		Assign_operationContext _localctx = new Assign_operationContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_assign_operation);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(68);
			((Assign_operationContext)_localctx).name = lab();
			setState(69);
			match(OPERATOR_ASSIGN);
			setState(70);
			((Assign_operationContext)_localctx).value = other_expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Other_expressionContext extends ParserRuleContext {
		public Other_expressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_other_expression; }
	 
		public Other_expressionContext() { }
		public void copyFrom(Other_expressionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class BinaryExpressionContext extends Other_expressionContext {
		public Token op;
		public List<Other_expressionContext> other_expression() {
			return getRuleContexts(Other_expressionContext.class);
		}
		public Other_expressionContext other_expression(int i) {
			return getRuleContext(Other_expressionContext.class,i);
		}
		public TerminalNode OPERATOR_AND() { return getToken(CParser.OPERATOR_AND, 0); }
		public TerminalNode OPERATOR_OR() { return getToken(CParser.OPERATOR_OR, 0); }
		public BinaryExpressionContext(Other_expressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CListener ) ((CListener)listener).enterBinaryExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CListener ) ((CListener)listener).exitBinaryExpression(this);
		}
	}
	public static class CompareExpressionContext extends Other_expressionContext {
		public Token op;
		public List<Other_expressionContext> other_expression() {
			return getRuleContexts(Other_expressionContext.class);
		}
		public Other_expressionContext other_expression(int i) {
			return getRuleContext(Other_expressionContext.class,i);
		}
		public TerminalNode OPERATOR_EQ() { return getToken(CParser.OPERATOR_EQ, 0); }
		public TerminalNode OPERATOR_GT() { return getToken(CParser.OPERATOR_GT, 0); }
		public TerminalNode OPERATOR_GE() { return getToken(CParser.OPERATOR_GE, 0); }
		public TerminalNode OPERATOR_LE() { return getToken(CParser.OPERATOR_LE, 0); }
		public TerminalNode OPERATOR_LT() { return getToken(CParser.OPERATOR_LT, 0); }
		public CompareExpressionContext(Other_expressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CListener ) ((CListener)listener).enterCompareExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CListener ) ((CListener)listener).exitCompareExpression(this);
		}
	}
	public static class AddExpressionContext extends Other_expressionContext {
		public Other_expressionContext left;
		public Add_or_substractContext op;
		public Other_expressionContext right;
		public List<Other_expressionContext> other_expression() {
			return getRuleContexts(Other_expressionContext.class);
		}
		public Other_expressionContext other_expression(int i) {
			return getRuleContext(Other_expressionContext.class,i);
		}
		public Add_or_substractContext add_or_substract() {
			return getRuleContext(Add_or_substractContext.class,0);
		}
		public AddExpressionContext(Other_expressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CListener ) ((CListener)listener).enterAddExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CListener ) ((CListener)listener).exitAddExpression(this);
		}
	}
	public static class AtomExpressionContext extends Other_expressionContext {
		public AtomContext atom() {
			return getRuleContext(AtomContext.class,0);
		}
		public AtomExpressionContext(Other_expressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CListener ) ((CListener)listener).enterAtomExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CListener ) ((CListener)listener).exitAtomExpression(this);
		}
	}
	public static class LabelExpressionContext extends Other_expressionContext {
		public TerminalNode LABEL() { return getToken(CParser.LABEL, 0); }
		public LabelExpressionContext(Other_expressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CListener ) ((CListener)listener).enterLabelExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CListener ) ((CListener)listener).exitLabelExpression(this);
		}
	}
	public static class ParExpressionContext extends Other_expressionContext {
		public TerminalNode LEFT_PAR() { return getToken(CParser.LEFT_PAR, 0); }
		public Other_expressionContext other_expression() {
			return getRuleContext(Other_expressionContext.class,0);
		}
		public TerminalNode RIGHT_PAR() { return getToken(CParser.RIGHT_PAR, 0); }
		public ParExpressionContext(Other_expressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CListener ) ((CListener)listener).enterParExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CListener ) ((CListener)listener).exitParExpression(this);
		}
	}
	public static class FunctionExpressionContext extends Other_expressionContext {
		public Func_callContext func_call() {
			return getRuleContext(Func_callContext.class,0);
		}
		public FunctionExpressionContext(Other_expressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CListener ) ((CListener)listener).enterFunctionExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CListener ) ((CListener)listener).exitFunctionExpression(this);
		}
	}
	public static class MultiplicationOrDivideExpressionContext extends Other_expressionContext {
		public Other_expressionContext left;
		public Multiplication_or_divideContext op;
		public Other_expressionContext right;
		public List<Other_expressionContext> other_expression() {
			return getRuleContexts(Other_expressionContext.class);
		}
		public Other_expressionContext other_expression(int i) {
			return getRuleContext(Other_expressionContext.class,i);
		}
		public Multiplication_or_divideContext multiplication_or_divide() {
			return getRuleContext(Multiplication_or_divideContext.class,0);
		}
		public MultiplicationOrDivideExpressionContext(Other_expressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CListener ) ((CListener)listener).enterMultiplicationOrDivideExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CListener ) ((CListener)listener).exitMultiplicationOrDivideExpression(this);
		}
	}

	public final Other_expressionContext other_expression() throws RecognitionException {
		return other_expression(0);
	}

	private Other_expressionContext other_expression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		Other_expressionContext _localctx = new Other_expressionContext(_ctx, _parentState);
		Other_expressionContext _prevctx = _localctx;
		int _startState = 12;
		enterRecursionRule(_localctx, 12, RULE_other_expression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(80);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				{
				_localctx = new ParExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(73);
				match(LEFT_PAR);
				setState(74);
				other_expression(0);
				setState(75);
				match(RIGHT_PAR);
				}
				break;
			case 2:
				{
				_localctx = new FunctionExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(77);
				func_call();
				}
				break;
			case 3:
				{
				_localctx = new LabelExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(78);
				match(LABEL);
				}
				break;
			case 4:
				{
				_localctx = new AtomExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(79);
				atom();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(98);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,5,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(96);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
					case 1:
						{
						_localctx = new MultiplicationOrDivideExpressionContext(new Other_expressionContext(_parentctx, _parentState));
						((MultiplicationOrDivideExpressionContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_other_expression);
						setState(82);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(83);
						((MultiplicationOrDivideExpressionContext)_localctx).op = multiplication_or_divide();
						setState(84);
						((MultiplicationOrDivideExpressionContext)_localctx).right = other_expression(9);
						}
						break;
					case 2:
						{
						_localctx = new AddExpressionContext(new Other_expressionContext(_parentctx, _parentState));
						((AddExpressionContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_other_expression);
						setState(86);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(87);
						((AddExpressionContext)_localctx).op = add_or_substract();
						setState(88);
						((AddExpressionContext)_localctx).right = other_expression(8);
						}
						break;
					case 3:
						{
						_localctx = new BinaryExpressionContext(new Other_expressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_other_expression);
						setState(90);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(91);
						((BinaryExpressionContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==OPERATOR_AND || _la==OPERATOR_OR) ) {
							((BinaryExpressionContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(92);
						other_expression(4);
						}
						break;
					case 4:
						{
						_localctx = new CompareExpressionContext(new Other_expressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_other_expression);
						setState(93);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(94);
						((CompareExpressionContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OPERATOR_EQ) | (1L << OPERATOR_GT) | (1L << OPERATOR_GE) | (1L << OPERATOR_LT) | (1L << OPERATOR_LE))) != 0)) ) {
							((CompareExpressionContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(95);
						other_expression(3);
						}
						break;
					}
					} 
				}
				setState(100);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,5,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class Function_declarationContext extends ParserRuleContext {
		public LabContext name;
		public Args_listContext args;
		public TerminalNode DATA_TYPE_VARIABLE() { return getToken(CParser.DATA_TYPE_VARIABLE, 0); }
		public TerminalNode LEFT_PAR() { return getToken(CParser.LEFT_PAR, 0); }
		public TerminalNode RIGHT_PAR() { return getToken(CParser.RIGHT_PAR, 0); }
		public TerminalNode LEFT_BRACE() { return getToken(CParser.LEFT_BRACE, 0); }
		public TerminalNode RIGHT_BRACE() { return getToken(CParser.RIGHT_BRACE, 0); }
		public LabContext lab() {
			return getRuleContext(LabContext.class,0);
		}
		public Args_listContext args_list() {
			return getRuleContext(Args_listContext.class,0);
		}
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public Function_declarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_function_declaration; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CListener ) ((CListener)listener).enterFunction_declaration(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CListener ) ((CListener)listener).exitFunction_declaration(this);
		}
	}

	public final Function_declarationContext function_declaration() throws RecognitionException {
		Function_declarationContext _localctx = new Function_declarationContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_function_declaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(101);
			match(DATA_TYPE_VARIABLE);
			setState(102);
			((Function_declarationContext)_localctx).name = lab();
			setState(103);
			match(LEFT_PAR);
			setState(104);
			((Function_declarationContext)_localctx).args = args_list();
			setState(105);
			match(RIGHT_PAR);
			setState(106);
			match(LEFT_BRACE);
			setState(110);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << COMMENT) | (1L << BLOCK_COMMENT) | (1L << DATA_TYPE_VARIABLE) | (1L << LABEL) | (1L << STRING) | (1L << NUMBER) | (1L << END) | (1L << OPERATOR_PLUS) | (1L << OPERATOR_SUB) | (1L << SYMBOL_IF) | (1L << SYMBOL_WHILE) | (1L << SYMBOL_TRUE) | (1L << SYMBOL_FALSE) | (1L << LEFT_PAR))) != 0)) {
				{
				{
				setState(107);
				statement();
				}
				}
				setState(112);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(113);
			match(RIGHT_BRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Func_callContext extends ParserRuleContext {
		public Function_nameContext name;
		public Args_listContext args;
		public TerminalNode LEFT_PAR() { return getToken(CParser.LEFT_PAR, 0); }
		public TerminalNode RIGHT_PAR() { return getToken(CParser.RIGHT_PAR, 0); }
		public Function_nameContext function_name() {
			return getRuleContext(Function_nameContext.class,0);
		}
		public Args_listContext args_list() {
			return getRuleContext(Args_listContext.class,0);
		}
		public Func_callContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_func_call; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CListener ) ((CListener)listener).enterFunc_call(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CListener ) ((CListener)listener).exitFunc_call(this);
		}
	}

	public final Func_callContext func_call() throws RecognitionException {
		Func_callContext _localctx = new Func_callContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_func_call);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(115);
			((Func_callContext)_localctx).name = function_name();
			setState(116);
			match(LEFT_PAR);
			setState(117);
			((Func_callContext)_localctx).args = args_list();
			setState(118);
			match(RIGHT_PAR);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Args_listContext extends ParserRuleContext {
		public Function_parameterContext function_parameter;
		public List<Function_parameterContext> args = new ArrayList<Function_parameterContext>();
		public List<Function_parameterContext> function_parameter() {
			return getRuleContexts(Function_parameterContext.class);
		}
		public Function_parameterContext function_parameter(int i) {
			return getRuleContext(Function_parameterContext.class,i);
		}
		public Args_listContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_args_list; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CListener ) ((CListener)listener).enterArgs_list(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CListener ) ((CListener)listener).exitArgs_list(this);
		}
	}

	public final Args_listContext args_list() throws RecognitionException {
		Args_listContext _localctx = new Args_listContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_args_list);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(125);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,7,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(120);
					((Args_listContext)_localctx).function_parameter = function_parameter();
					((Args_listContext)_localctx).args.add(((Args_listContext)_localctx).function_parameter);
					setState(121);
					match(T__0);
					}
					} 
				}
				setState(127);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,7,_ctx);
			}
			setState(129);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DATA_TYPE_VARIABLE) {
				{
				setState(128);
				((Args_listContext)_localctx).function_parameter = function_parameter();
				((Args_listContext)_localctx).args.add(((Args_listContext)_localctx).function_parameter);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AtomContext extends ParserRuleContext {
		public TerminalNode STRING() { return getToken(CParser.STRING, 0); }
		public TerminalNode NUMBER() { return getToken(CParser.NUMBER, 0); }
		public TerminalNode OPERATOR_PLUS() { return getToken(CParser.OPERATOR_PLUS, 0); }
		public TerminalNode OPERATOR_SUB() { return getToken(CParser.OPERATOR_SUB, 0); }
		public TerminalNode SYMBOL_TRUE() { return getToken(CParser.SYMBOL_TRUE, 0); }
		public TerminalNode SYMBOL_FALSE() { return getToken(CParser.SYMBOL_FALSE, 0); }
		public AtomContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_atom; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CListener ) ((CListener)listener).enterAtom(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CListener ) ((CListener)listener).exitAtom(this);
		}
	}

	public final AtomContext atom() throws RecognitionException {
		AtomContext _localctx = new AtomContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_atom);
		int _la;
		try {
			setState(137);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case STRING:
				enterOuterAlt(_localctx, 1);
				{
				setState(131);
				match(STRING);
				}
				break;
			case NUMBER:
			case OPERATOR_PLUS:
			case OPERATOR_SUB:
				enterOuterAlt(_localctx, 2);
				{
				setState(133);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==OPERATOR_PLUS || _la==OPERATOR_SUB) {
					{
					setState(132);
					_la = _input.LA(1);
					if ( !(_la==OPERATOR_PLUS || _la==OPERATOR_SUB) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					}
				}

				setState(135);
				match(NUMBER);
				}
				break;
			case SYMBOL_TRUE:
			case SYMBOL_FALSE:
				enterOuterAlt(_localctx, 3);
				{
				setState(136);
				_la = _input.LA(1);
				if ( !(_la==SYMBOL_TRUE || _la==SYMBOL_FALSE) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Function_nameContext extends ParserRuleContext {
		public TerminalNode LABEL() { return getToken(CParser.LABEL, 0); }
		public Function_nameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_function_name; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CListener ) ((CListener)listener).enterFunction_name(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CListener ) ((CListener)listener).exitFunction_name(this);
		}
	}

	public final Function_nameContext function_name() throws RecognitionException {
		Function_nameContext _localctx = new Function_nameContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_function_name);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(139);
			match(LABEL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LabContext extends ParserRuleContext {
		public TerminalNode LABEL() { return getToken(CParser.LABEL, 0); }
		public LabContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lab; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CListener ) ((CListener)listener).enterLab(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CListener ) ((CListener)listener).exitLab(this);
		}
	}

	public final LabContext lab() throws RecognitionException {
		LabContext _localctx = new LabContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_lab);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(141);
			match(LABEL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Multiplication_or_divideContext extends ParserRuleContext {
		public TerminalNode OPERATOR_MULTIPLY() { return getToken(CParser.OPERATOR_MULTIPLY, 0); }
		public TerminalNode OPERATOR_DIVIDE() { return getToken(CParser.OPERATOR_DIVIDE, 0); }
		public Multiplication_or_divideContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_multiplication_or_divide; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CListener ) ((CListener)listener).enterMultiplication_or_divide(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CListener ) ((CListener)listener).exitMultiplication_or_divide(this);
		}
	}

	public final Multiplication_or_divideContext multiplication_or_divide() throws RecognitionException {
		Multiplication_or_divideContext _localctx = new Multiplication_or_divideContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_multiplication_or_divide);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(143);
			_la = _input.LA(1);
			if ( !(_la==OPERATOR_MULTIPLY || _la==OPERATOR_DIVIDE) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Add_or_substractContext extends ParserRuleContext {
		public TerminalNode OPERATOR_PLUS() { return getToken(CParser.OPERATOR_PLUS, 0); }
		public TerminalNode OPERATOR_SUB() { return getToken(CParser.OPERATOR_SUB, 0); }
		public Add_or_substractContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_add_or_substract; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CListener ) ((CListener)listener).enterAdd_or_substract(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CListener ) ((CListener)listener).exitAdd_or_substract(this);
		}
	}

	public final Add_or_substractContext add_or_substract() throws RecognitionException {
		Add_or_substractContext _localctx = new Add_or_substractContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_add_or_substract);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(145);
			_la = _input.LA(1);
			if ( !(_la==OPERATOR_PLUS || _la==OPERATOR_SUB) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BlockContext extends ParserRuleContext {
		public TerminalNode LEFT_BRACE() { return getToken(CParser.LEFT_BRACE, 0); }
		public TerminalNode RIGHT_BRACE() { return getToken(CParser.RIGHT_BRACE, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public BlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CListener ) ((CListener)listener).enterBlock(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CListener ) ((CListener)listener).exitBlock(this);
		}
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(147);
			match(LEFT_BRACE);
			setState(149); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(148);
				statement();
				}
				}
				setState(151); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << COMMENT) | (1L << BLOCK_COMMENT) | (1L << DATA_TYPE_VARIABLE) | (1L << LABEL) | (1L << STRING) | (1L << NUMBER) | (1L << END) | (1L << OPERATOR_PLUS) | (1L << OPERATOR_SUB) | (1L << SYMBOL_IF) | (1L << SYMBOL_WHILE) | (1L << SYMBOL_TRUE) | (1L << SYMBOL_FALSE) | (1L << LEFT_PAR))) != 0) );
			setState(153);
			match(RIGHT_BRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Statement_ifContext extends ParserRuleContext {
		public List<TerminalNode> SYMBOL_IF() { return getTokens(CParser.SYMBOL_IF); }
		public TerminalNode SYMBOL_IF(int i) {
			return getToken(CParser.SYMBOL_IF, i);
		}
		public List<Other_expressionContext> other_expression() {
			return getRuleContexts(Other_expressionContext.class);
		}
		public Other_expressionContext other_expression(int i) {
			return getRuleContext(Other_expressionContext.class,i);
		}
		public List<BlockContext> block() {
			return getRuleContexts(BlockContext.class);
		}
		public BlockContext block(int i) {
			return getRuleContext(BlockContext.class,i);
		}
		public List<TerminalNode> SYMBOL_ELSE() { return getTokens(CParser.SYMBOL_ELSE); }
		public TerminalNode SYMBOL_ELSE(int i) {
			return getToken(CParser.SYMBOL_ELSE, i);
		}
		public Statement_ifContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement_if; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CListener ) ((CListener)listener).enterStatement_if(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CListener ) ((CListener)listener).exitStatement_if(this);
		}
	}

	public final Statement_ifContext statement_if() throws RecognitionException {
		Statement_ifContext _localctx = new Statement_ifContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_statement_if);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(155);
			match(SYMBOL_IF);
			setState(156);
			other_expression(0);
			setState(157);
			block();
			setState(165);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,12,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(158);
					match(SYMBOL_ELSE);
					setState(159);
					match(SYMBOL_IF);
					setState(160);
					other_expression(0);
					setState(161);
					block();
					}
					} 
				}
				setState(167);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,12,_ctx);
			}
			setState(170);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SYMBOL_ELSE) {
				{
				setState(168);
				match(SYMBOL_ELSE);
				setState(169);
				block();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Statement_whileContext extends ParserRuleContext {
		public TerminalNode SYMBOL_WHILE() { return getToken(CParser.SYMBOL_WHILE, 0); }
		public Other_expressionContext other_expression() {
			return getRuleContext(Other_expressionContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public Statement_whileContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement_while; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CListener ) ((CListener)listener).enterStatement_while(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CListener ) ((CListener)listener).exitStatement_while(this);
		}
	}

	public final Statement_whileContext statement_while() throws RecognitionException {
		Statement_whileContext _localctx = new Statement_whileContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_statement_while);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(172);
			match(SYMBOL_WHILE);
			setState(173);
			other_expression(0);
			setState(174);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 6:
			return other_expression_sempred((Other_expressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean other_expression_sempred(Other_expressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 8);
		case 1:
			return precpred(_ctx, 7);
		case 2:
			return precpred(_ctx, 3);
		case 3:
			return precpred(_ctx, 2);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3#\u00b3\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\3\2\7\2(\n\2\f\2\16\2+\13\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\5\3\65\n\3\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\5\5B\n\5\3\6\3"+
		"\6\3\6\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\5\bS\n\b\3\b\3"+
		"\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\7\bc\n\b\f\b\16\bf"+
		"\13\b\3\t\3\t\3\t\3\t\3\t\3\t\3\t\7\to\n\t\f\t\16\tr\13\t\3\t\3\t\3\n"+
		"\3\n\3\n\3\n\3\n\3\13\3\13\3\13\7\13~\n\13\f\13\16\13\u0081\13\13\3\13"+
		"\5\13\u0084\n\13\3\f\3\f\5\f\u0088\n\f\3\f\3\f\5\f\u008c\n\f\3\r\3\r\3"+
		"\16\3\16\3\17\3\17\3\20\3\20\3\21\3\21\6\21\u0098\n\21\r\21\16\21\u0099"+
		"\3\21\3\21\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\7\22\u00a6\n\22\f\22"+
		"\16\22\u00a9\13\22\3\22\3\22\5\22\u00ad\n\22\3\23\3\23\3\23\3\23\3\23"+
		"\2\3\16\24\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$\2\b\3\2\4\5\3\2"+
		"\22\23\3\2\24\30\3\2\f\r\3\2\34\35\3\2\16\17\2\u00b9\2)\3\2\2\2\4\64\3"+
		"\2\2\2\6\66\3\2\2\2\bA\3\2\2\2\nC\3\2\2\2\fF\3\2\2\2\16R\3\2\2\2\20g\3"+
		"\2\2\2\22u\3\2\2\2\24\177\3\2\2\2\26\u008b\3\2\2\2\30\u008d\3\2\2\2\32"+
		"\u008f\3\2\2\2\34\u0091\3\2\2\2\36\u0093\3\2\2\2 \u0095\3\2\2\2\"\u009d"+
		"\3\2\2\2$\u00ae\3\2\2\2&(\5\4\3\2\'&\3\2\2\2(+\3\2\2\2)\'\3\2\2\2)*\3"+
		"\2\2\2*\3\3\2\2\2+)\3\2\2\2,\65\5\b\5\2-\65\5\f\7\2.\65\5\20\t\2/\65\5"+
		"\6\4\2\60\65\5\"\22\2\61\65\5$\23\2\62\65\5\16\b\2\63\65\7\n\2\2\64,\3"+
		"\2\2\2\64-\3\2\2\2\64.\3\2\2\2\64/\3\2\2\2\64\60\3\2\2\2\64\61\3\2\2\2"+
		"\64\62\3\2\2\2\64\63\3\2\2\2\65\5\3\2\2\2\66\67\t\2\2\2\67\7\3\2\2\28"+
		"9\7\6\2\29:\5\32\16\2:;\7\13\2\2;<\5\16\b\2<B\3\2\2\2=>\7\6\2\2>?\5\32"+
		"\16\2?@\7\n\2\2@B\3\2\2\2A8\3\2\2\2A=\3\2\2\2B\t\3\2\2\2CD\7\6\2\2DE\5"+
		"\32\16\2E\13\3\2\2\2FG\5\32\16\2GH\7\13\2\2HI\5\16\b\2I\r\3\2\2\2JK\b"+
		"\b\1\2KL\7 \2\2LM\5\16\b\2MN\7!\2\2NS\3\2\2\2OS\5\22\n\2PS\7\7\2\2QS\5"+
		"\26\f\2RJ\3\2\2\2RO\3\2\2\2RP\3\2\2\2RQ\3\2\2\2Sd\3\2\2\2TU\f\n\2\2UV"+
		"\5\34\17\2VW\5\16\b\13Wc\3\2\2\2XY\f\t\2\2YZ\5\36\20\2Z[\5\16\b\n[c\3"+
		"\2\2\2\\]\f\5\2\2]^\t\3\2\2^c\5\16\b\6_`\f\4\2\2`a\t\4\2\2ac\5\16\b\5"+
		"bT\3\2\2\2bX\3\2\2\2b\\\3\2\2\2b_\3\2\2\2cf\3\2\2\2db\3\2\2\2de\3\2\2"+
		"\2e\17\3\2\2\2fd\3\2\2\2gh\7\6\2\2hi\5\32\16\2ij\7 \2\2jk\5\24\13\2kl"+
		"\7!\2\2lp\7\36\2\2mo\5\4\3\2nm\3\2\2\2or\3\2\2\2pn\3\2\2\2pq\3\2\2\2q"+
		"s\3\2\2\2rp\3\2\2\2st\7\37\2\2t\21\3\2\2\2uv\5\30\r\2vw\7 \2\2wx\5\24"+
		"\13\2xy\7!\2\2y\23\3\2\2\2z{\5\n\6\2{|\7\3\2\2|~\3\2\2\2}z\3\2\2\2~\u0081"+
		"\3\2\2\2\177}\3\2\2\2\177\u0080\3\2\2\2\u0080\u0083\3\2\2\2\u0081\177"+
		"\3\2\2\2\u0082\u0084\5\n\6\2\u0083\u0082\3\2\2\2\u0083\u0084\3\2\2\2\u0084"+
		"\25\3\2\2\2\u0085\u008c\7\b\2\2\u0086\u0088\t\5\2\2\u0087\u0086\3\2\2"+
		"\2\u0087\u0088\3\2\2\2\u0088\u0089\3\2\2\2\u0089\u008c\7\t\2\2\u008a\u008c"+
		"\t\6\2\2\u008b\u0085\3\2\2\2\u008b\u0087\3\2\2\2\u008b\u008a\3\2\2\2\u008c"+
		"\27\3\2\2\2\u008d\u008e\7\7\2\2\u008e\31\3\2\2\2\u008f\u0090\7\7\2\2\u0090"+
		"\33\3\2\2\2\u0091\u0092\t\7\2\2\u0092\35\3\2\2\2\u0093\u0094\t\5\2\2\u0094"+
		"\37\3\2\2\2\u0095\u0097\7\36\2\2\u0096\u0098\5\4\3\2\u0097\u0096\3\2\2"+
		"\2\u0098\u0099\3\2\2\2\u0099\u0097\3\2\2\2\u0099\u009a\3\2\2\2\u009a\u009b"+
		"\3\2\2\2\u009b\u009c\7\37\2\2\u009c!\3\2\2\2\u009d\u009e\7\31\2\2\u009e"+
		"\u009f\5\16\b\2\u009f\u00a7\5 \21\2\u00a0\u00a1\7\33\2\2\u00a1\u00a2\7"+
		"\31\2\2\u00a2\u00a3\5\16\b\2\u00a3\u00a4\5 \21\2\u00a4\u00a6\3\2\2\2\u00a5"+
		"\u00a0\3\2\2\2\u00a6\u00a9\3\2\2\2\u00a7\u00a5\3\2\2\2\u00a7\u00a8\3\2"+
		"\2\2\u00a8\u00ac\3\2\2\2\u00a9\u00a7\3\2\2\2\u00aa\u00ab\7\33\2\2\u00ab"+
		"\u00ad\5 \21\2\u00ac\u00aa\3\2\2\2\u00ac\u00ad\3\2\2\2\u00ad#\3\2\2\2"+
		"\u00ae\u00af\7\32\2\2\u00af\u00b0\5\16\b\2\u00b0\u00b1\5 \21\2\u00b1%"+
		"\3\2\2\2\20)\64ARbdp\177\u0083\u0087\u008b\u0099\u00a7\u00ac";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}