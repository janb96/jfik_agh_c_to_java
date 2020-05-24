// Generated from grammar/C.g4 by ANTLR 4.8
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class CLexer extends Lexer {
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
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "COMMENT", "BLOCK_COMMENT", "DATA_TYPE_VARIABLE", "DIGIT", "LABEL", 
			"STRING", "NUMBER", "END", "OPERATOR_ASSIGN", "OPERATOR_PLUS", "OPERATOR_SUB", 
			"OPERATOR_MULTIPLY", "OPERATOR_DIVIDE", "OPERATOR_INCREMENT", "OPERATOR_DECREMENT", 
			"OPERATOR_AND", "OPERATOR_OR", "OPERATOR_EQ", "OPERATOR_GT", "OPERATOR_GE", 
			"OPERATOR_LT", "OPERATOR_LE", "SYMBOL_IF", "SYMBOL_WHILE", "SYMBOL_ELSE", 
			"SYMBOL_TRUE", "SYMBOL_FALSE", "LEFT_BRACE", "RIGHT_BRACE", "LEFT_PAR", 
			"RIGHT_PAR", "EOL", "WS"
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


	public CLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "C.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2#\u010c\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\3\2\3\2\3\3\3\3\3\3\3\3\7\3N\n\3\f\3\16\3Q\13\3\3\3"+
		"\3\3\3\4\3\4\3\4\3\4\7\4Y\n\4\f\4\16\4\\\13\4\3\4\3\4\3\4\3\4\3\4\3\5"+
		"\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3"+
		"\5\3\5\3\5\3\5\5\5y\n\5\3\6\6\6|\n\6\r\6\16\6}\3\7\6\7\u0081\n\7\r\7\16"+
		"\7\u0082\3\7\3\7\7\7\u0087\n\7\f\7\16\7\u008a\13\7\3\b\3\b\7\b\u008e\n"+
		"\b\f\b\16\b\u0091\13\b\3\b\3\b\3\t\6\t\u0096\n\t\r\t\16\t\u0097\3\t\3"+
		"\t\6\t\u009c\n\t\r\t\16\t\u009d\3\t\3\t\6\t\u00a2\n\t\r\t\16\t\u00a3\3"+
		"\t\3\t\6\t\u00a8\n\t\r\t\16\t\u00a9\3\t\6\t\u00ad\n\t\r\t\16\t\u00ae\3"+
		"\t\3\t\6\t\u00b3\n\t\r\t\16\t\u00b4\5\t\u00b7\n\t\3\n\3\n\3\13\3\13\3"+
		"\f\3\f\3\r\3\r\3\16\3\16\3\17\3\17\3\20\3\20\3\20\3\21\3\21\3\21\3\22"+
		"\3\22\3\22\3\23\3\23\3\23\3\24\3\24\3\24\3\25\3\25\3\26\3\26\3\26\3\27"+
		"\3\27\3\30\3\30\3\30\3\31\3\31\3\31\3\32\3\32\3\32\3\32\3\32\3\32\3\33"+
		"\3\33\3\33\3\33\3\33\3\34\3\34\3\34\3\34\3\34\3\35\3\35\3\35\3\35\3\35"+
		"\3\35\3\36\3\36\3\37\3\37\3 \3 \3!\3!\3\"\5\"\u0100\n\"\3\"\3\"\3\"\3"+
		"\"\3#\6#\u0107\n#\r#\16#\u0108\3#\3#\4Z\u008f\2$\3\3\5\4\7\5\t\6\13\2"+
		"\r\7\17\b\21\t\23\n\25\13\27\f\31\r\33\16\35\17\37\20!\21#\22%\23\'\24"+
		")\25+\26-\27/\30\61\31\63\32\65\33\67\349\35;\36=\37? A!C\"E#\3\2\7\4"+
		"\2\f\f\17\17\3\2\62;\4\2C\\c|\5\2C\\aac|\4\2\13\13\"\"\2\u0120\2\3\3\2"+
		"\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21"+
		"\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2"+
		"\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3"+
		"\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3"+
		"\2\2\2\2\65\3\2\2\2\2\67\3\2\2\2\29\3\2\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3"+
		"\2\2\2\2A\3\2\2\2\2C\3\2\2\2\2E\3\2\2\2\3G\3\2\2\2\5I\3\2\2\2\7T\3\2\2"+
		"\2\tx\3\2\2\2\13{\3\2\2\2\r\u0080\3\2\2\2\17\u008b\3\2\2\2\21\u00b6\3"+
		"\2\2\2\23\u00b8\3\2\2\2\25\u00ba\3\2\2\2\27\u00bc\3\2\2\2\31\u00be\3\2"+
		"\2\2\33\u00c0\3\2\2\2\35\u00c2\3\2\2\2\37\u00c4\3\2\2\2!\u00c7\3\2\2\2"+
		"#\u00ca\3\2\2\2%\u00cd\3\2\2\2\'\u00d0\3\2\2\2)\u00d3\3\2\2\2+\u00d5\3"+
		"\2\2\2-\u00d8\3\2\2\2/\u00da\3\2\2\2\61\u00dd\3\2\2\2\63\u00e0\3\2\2\2"+
		"\65\u00e6\3\2\2\2\67\u00eb\3\2\2\29\u00f0\3\2\2\2;\u00f6\3\2\2\2=\u00f8"+
		"\3\2\2\2?\u00fa\3\2\2\2A\u00fc\3\2\2\2C\u00ff\3\2\2\2E\u0106\3\2\2\2G"+
		"H\7.\2\2H\4\3\2\2\2IJ\7\61\2\2JK\7\61\2\2KO\3\2\2\2LN\n\2\2\2ML\3\2\2"+
		"\2NQ\3\2\2\2OM\3\2\2\2OP\3\2\2\2PR\3\2\2\2QO\3\2\2\2RS\b\3\2\2S\6\3\2"+
		"\2\2TU\7\61\2\2UV\7,\2\2VZ\3\2\2\2WY\13\2\2\2XW\3\2\2\2Y\\\3\2\2\2Z[\3"+
		"\2\2\2ZX\3\2\2\2[]\3\2\2\2\\Z\3\2\2\2]^\7,\2\2^_\7\61\2\2_`\3\2\2\2`a"+
		"\b\4\2\2a\b\3\2\2\2bc\7k\2\2cd\7p\2\2dy\7v\2\2ef\7h\2\2fg\7n\2\2gh\7q"+
		"\2\2hi\7c\2\2iy\7v\2\2jk\7f\2\2kl\7q\2\2lm\7w\2\2mn\7d\2\2no\7n\2\2oy"+
		"\7g\2\2pq\7e\2\2qr\7j\2\2rs\7c\2\2sy\7t\2\2tu\7x\2\2uv\7q\2\2vw\7k\2\2"+
		"wy\7f\2\2xb\3\2\2\2xe\3\2\2\2xj\3\2\2\2xp\3\2\2\2xt\3\2\2\2y\n\3\2\2\2"+
		"z|\t\3\2\2{z\3\2\2\2|}\3\2\2\2}{\3\2\2\2}~\3\2\2\2~\f\3\2\2\2\177\u0081"+
		"\t\4\2\2\u0080\177\3\2\2\2\u0081\u0082\3\2\2\2\u0082\u0080\3\2\2\2\u0082"+
		"\u0083\3\2\2\2\u0083\u0088\3\2\2\2\u0084\u0087\t\5\2\2\u0085\u0087\5\13"+
		"\6\2\u0086\u0084\3\2\2\2\u0086\u0085\3\2\2\2\u0087\u008a\3\2\2\2\u0088"+
		"\u0086\3\2\2\2\u0088\u0089\3\2\2\2\u0089\16\3\2\2\2\u008a\u0088\3\2\2"+
		"\2\u008b\u008f\7$\2\2\u008c\u008e\13\2\2\2\u008d\u008c\3\2\2\2\u008e\u0091"+
		"\3\2\2\2\u008f\u0090\3\2\2\2\u008f\u008d\3\2\2\2\u0090\u0092\3\2\2\2\u0091"+
		"\u008f\3\2\2\2\u0092\u0093\7$\2\2\u0093\20\3\2\2\2\u0094\u0096\5\13\6"+
		"\2\u0095\u0094\3\2\2\2\u0096\u0097\3\2\2\2\u0097\u0095\3\2\2\2\u0097\u0098"+
		"\3\2\2\2\u0098\u00b7\3\2\2\2\u0099\u009b\7/\2\2\u009a\u009c\5\13\6\2\u009b"+
		"\u009a\3\2\2\2\u009c\u009d\3\2\2\2\u009d\u009b\3\2\2\2\u009d\u009e\3\2"+
		"\2\2\u009e\u00b7\3\2\2\2\u009f\u00a1\7/\2\2\u00a0\u00a2\5\13\6\2\u00a1"+
		"\u00a0\3\2\2\2\u00a2\u00a3\3\2\2\2\u00a3\u00a1\3\2\2\2\u00a3\u00a4\3\2"+
		"\2\2\u00a4\u00a5\3\2\2\2\u00a5\u00a7\7\60\2\2\u00a6\u00a8\5\13\6\2\u00a7"+
		"\u00a6\3\2\2\2\u00a8\u00a9\3\2\2\2\u00a9\u00a7\3\2\2\2\u00a9\u00aa\3\2"+
		"\2\2\u00aa\u00b7\3\2\2\2\u00ab\u00ad\5\13\6\2\u00ac\u00ab\3\2\2\2\u00ad"+
		"\u00ae\3\2\2\2\u00ae\u00ac\3\2\2\2\u00ae\u00af\3\2\2\2\u00af\u00b0\3\2"+
		"\2\2\u00b0\u00b2\7\60\2\2\u00b1\u00b3\5\13\6\2\u00b2\u00b1\3\2\2\2\u00b3"+
		"\u00b4\3\2\2\2\u00b4\u00b2\3\2\2\2\u00b4\u00b5\3\2\2\2\u00b5\u00b7\3\2"+
		"\2\2\u00b6\u0095\3\2\2\2\u00b6\u0099\3\2\2\2\u00b6\u009f\3\2\2\2\u00b6"+
		"\u00ac\3\2\2\2\u00b7\22\3\2\2\2\u00b8\u00b9\7=\2\2\u00b9\24\3\2\2\2\u00ba"+
		"\u00bb\7?\2\2\u00bb\26\3\2\2\2\u00bc\u00bd\7-\2\2\u00bd\30\3\2\2\2\u00be"+
		"\u00bf\7/\2\2\u00bf\32\3\2\2\2\u00c0\u00c1\7,\2\2\u00c1\34\3\2\2\2\u00c2"+
		"\u00c3\7\61\2\2\u00c3\36\3\2\2\2\u00c4\u00c5\7-\2\2\u00c5\u00c6\7-\2\2"+
		"\u00c6 \3\2\2\2\u00c7\u00c8\7/\2\2\u00c8\u00c9\7/\2\2\u00c9\"\3\2\2\2"+
		"\u00ca\u00cb\7(\2\2\u00cb\u00cc\7(\2\2\u00cc$\3\2\2\2\u00cd\u00ce\7~\2"+
		"\2\u00ce\u00cf\7~\2\2\u00cf&\3\2\2\2\u00d0\u00d1\7?\2\2\u00d1\u00d2\7"+
		"?\2\2\u00d2(\3\2\2\2\u00d3\u00d4\7@\2\2\u00d4*\3\2\2\2\u00d5\u00d6\7@"+
		"\2\2\u00d6\u00d7\7?\2\2\u00d7,\3\2\2\2\u00d8\u00d9\7>\2\2\u00d9.\3\2\2"+
		"\2\u00da\u00db\7>\2\2\u00db\u00dc\7?\2\2\u00dc\60\3\2\2\2\u00dd\u00de"+
		"\7k\2\2\u00de\u00df\7h\2\2\u00df\62\3\2\2\2\u00e0\u00e1\7y\2\2\u00e1\u00e2"+
		"\7j\2\2\u00e2\u00e3\7k\2\2\u00e3\u00e4\7n\2\2\u00e4\u00e5\7g\2\2\u00e5"+
		"\64\3\2\2\2\u00e6\u00e7\7g\2\2\u00e7\u00e8\7n\2\2\u00e8\u00e9\7u\2\2\u00e9"+
		"\u00ea\7g\2\2\u00ea\66\3\2\2\2\u00eb\u00ec\7v\2\2\u00ec\u00ed\7t\2\2\u00ed"+
		"\u00ee\7w\2\2\u00ee\u00ef\7g\2\2\u00ef8\3\2\2\2\u00f0\u00f1\7h\2\2\u00f1"+
		"\u00f2\7c\2\2\u00f2\u00f3\7n\2\2\u00f3\u00f4\7u\2\2\u00f4\u00f5\7g\2\2"+
		"\u00f5:\3\2\2\2\u00f6\u00f7\7}\2\2\u00f7<\3\2\2\2\u00f8\u00f9\7\177\2"+
		"\2\u00f9>\3\2\2\2\u00fa\u00fb\7*\2\2\u00fb@\3\2\2\2\u00fc\u00fd\7+\2\2"+
		"\u00fdB\3\2\2\2\u00fe\u0100\7\17\2\2\u00ff\u00fe\3\2\2\2\u00ff\u0100\3"+
		"\2\2\2\u0100\u0101\3\2\2\2\u0101\u0102\7\f\2\2\u0102\u0103\3\2\2\2\u0103"+
		"\u0104\b\"\2\2\u0104D\3\2\2\2\u0105\u0107\t\6\2\2\u0106\u0105\3\2\2\2"+
		"\u0107\u0108\3\2\2\2\u0108\u0106\3\2\2\2\u0108\u0109\3\2\2\2\u0109\u010a"+
		"\3\2\2\2\u010a\u010b\b#\2\2\u010bF\3\2\2\2\24\2OZx}\u0082\u0086\u0088"+
		"\u008f\u0097\u009d\u00a3\u00a9\u00ae\u00b4\u00b6\u00ff\u0108\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}