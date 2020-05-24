// Generated from grammar/C.g4 by ANTLR 4.8
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link CParser}.
 */
public interface CListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link CParser#prog}.
	 * @param ctx the parse tree
	 */
	void enterProg(CParser.ProgContext ctx);
	/**
	 * Exit a parse tree produced by {@link CParser#prog}.
	 * @param ctx the parse tree
	 */
	void exitProg(CParser.ProgContext ctx);
	/**
	 * Enter a parse tree produced by {@link CParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterStatement(CParser.StatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link CParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitStatement(CParser.StatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link CParser#comment_section}.
	 * @param ctx the parse tree
	 */
	void enterComment_section(CParser.Comment_sectionContext ctx);
	/**
	 * Exit a parse tree produced by {@link CParser#comment_section}.
	 * @param ctx the parse tree
	 */
	void exitComment_section(CParser.Comment_sectionContext ctx);
	/**
	 * Enter a parse tree produced by {@link CParser#variable}.
	 * @param ctx the parse tree
	 */
	void enterVariable(CParser.VariableContext ctx);
	/**
	 * Exit a parse tree produced by {@link CParser#variable}.
	 * @param ctx the parse tree
	 */
	void exitVariable(CParser.VariableContext ctx);
	/**
	 * Enter a parse tree produced by {@link CParser#function_parameter}.
	 * @param ctx the parse tree
	 */
	void enterFunction_parameter(CParser.Function_parameterContext ctx);
	/**
	 * Exit a parse tree produced by {@link CParser#function_parameter}.
	 * @param ctx the parse tree
	 */
	void exitFunction_parameter(CParser.Function_parameterContext ctx);
	/**
	 * Enter a parse tree produced by {@link CParser#assign_operation}.
	 * @param ctx the parse tree
	 */
	void enterAssign_operation(CParser.Assign_operationContext ctx);
	/**
	 * Exit a parse tree produced by {@link CParser#assign_operation}.
	 * @param ctx the parse tree
	 */
	void exitAssign_operation(CParser.Assign_operationContext ctx);
	/**
	 * Enter a parse tree produced by the {@code binaryExpression}
	 * labeled alternative in {@link CParser#other_expression}.
	 * @param ctx the parse tree
	 */
	void enterBinaryExpression(CParser.BinaryExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code binaryExpression}
	 * labeled alternative in {@link CParser#other_expression}.
	 * @param ctx the parse tree
	 */
	void exitBinaryExpression(CParser.BinaryExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code compareExpression}
	 * labeled alternative in {@link CParser#other_expression}.
	 * @param ctx the parse tree
	 */
	void enterCompareExpression(CParser.CompareExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code compareExpression}
	 * labeled alternative in {@link CParser#other_expression}.
	 * @param ctx the parse tree
	 */
	void exitCompareExpression(CParser.CompareExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code addExpression}
	 * labeled alternative in {@link CParser#other_expression}.
	 * @param ctx the parse tree
	 */
	void enterAddExpression(CParser.AddExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code addExpression}
	 * labeled alternative in {@link CParser#other_expression}.
	 * @param ctx the parse tree
	 */
	void exitAddExpression(CParser.AddExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code atomExpression}
	 * labeled alternative in {@link CParser#other_expression}.
	 * @param ctx the parse tree
	 */
	void enterAtomExpression(CParser.AtomExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code atomExpression}
	 * labeled alternative in {@link CParser#other_expression}.
	 * @param ctx the parse tree
	 */
	void exitAtomExpression(CParser.AtomExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code labelExpression}
	 * labeled alternative in {@link CParser#other_expression}.
	 * @param ctx the parse tree
	 */
	void enterLabelExpression(CParser.LabelExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code labelExpression}
	 * labeled alternative in {@link CParser#other_expression}.
	 * @param ctx the parse tree
	 */
	void exitLabelExpression(CParser.LabelExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code parExpression}
	 * labeled alternative in {@link CParser#other_expression}.
	 * @param ctx the parse tree
	 */
	void enterParExpression(CParser.ParExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code parExpression}
	 * labeled alternative in {@link CParser#other_expression}.
	 * @param ctx the parse tree
	 */
	void exitParExpression(CParser.ParExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code functionExpression}
	 * labeled alternative in {@link CParser#other_expression}.
	 * @param ctx the parse tree
	 */
	void enterFunctionExpression(CParser.FunctionExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code functionExpression}
	 * labeled alternative in {@link CParser#other_expression}.
	 * @param ctx the parse tree
	 */
	void exitFunctionExpression(CParser.FunctionExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code multiplicationOrDivideExpression}
	 * labeled alternative in {@link CParser#other_expression}.
	 * @param ctx the parse tree
	 */
	void enterMultiplicationOrDivideExpression(CParser.MultiplicationOrDivideExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code multiplicationOrDivideExpression}
	 * labeled alternative in {@link CParser#other_expression}.
	 * @param ctx the parse tree
	 */
	void exitMultiplicationOrDivideExpression(CParser.MultiplicationOrDivideExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link CParser#function_declaration}.
	 * @param ctx the parse tree
	 */
	void enterFunction_declaration(CParser.Function_declarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link CParser#function_declaration}.
	 * @param ctx the parse tree
	 */
	void exitFunction_declaration(CParser.Function_declarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link CParser#func_call}.
	 * @param ctx the parse tree
	 */
	void enterFunc_call(CParser.Func_callContext ctx);
	/**
	 * Exit a parse tree produced by {@link CParser#func_call}.
	 * @param ctx the parse tree
	 */
	void exitFunc_call(CParser.Func_callContext ctx);
	/**
	 * Enter a parse tree produced by {@link CParser#args_list}.
	 * @param ctx the parse tree
	 */
	void enterArgs_list(CParser.Args_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link CParser#args_list}.
	 * @param ctx the parse tree
	 */
	void exitArgs_list(CParser.Args_listContext ctx);
	/**
	 * Enter a parse tree produced by {@link CParser#atom}.
	 * @param ctx the parse tree
	 */
	void enterAtom(CParser.AtomContext ctx);
	/**
	 * Exit a parse tree produced by {@link CParser#atom}.
	 * @param ctx the parse tree
	 */
	void exitAtom(CParser.AtomContext ctx);
	/**
	 * Enter a parse tree produced by {@link CParser#function_name}.
	 * @param ctx the parse tree
	 */
	void enterFunction_name(CParser.Function_nameContext ctx);
	/**
	 * Exit a parse tree produced by {@link CParser#function_name}.
	 * @param ctx the parse tree
	 */
	void exitFunction_name(CParser.Function_nameContext ctx);
	/**
	 * Enter a parse tree produced by {@link CParser#lab}.
	 * @param ctx the parse tree
	 */
	void enterLab(CParser.LabContext ctx);
	/**
	 * Exit a parse tree produced by {@link CParser#lab}.
	 * @param ctx the parse tree
	 */
	void exitLab(CParser.LabContext ctx);
	/**
	 * Enter a parse tree produced by {@link CParser#multiplication_or_divide}.
	 * @param ctx the parse tree
	 */
	void enterMultiplication_or_divide(CParser.Multiplication_or_divideContext ctx);
	/**
	 * Exit a parse tree produced by {@link CParser#multiplication_or_divide}.
	 * @param ctx the parse tree
	 */
	void exitMultiplication_or_divide(CParser.Multiplication_or_divideContext ctx);
	/**
	 * Enter a parse tree produced by {@link CParser#add_or_substract}.
	 * @param ctx the parse tree
	 */
	void enterAdd_or_substract(CParser.Add_or_substractContext ctx);
	/**
	 * Exit a parse tree produced by {@link CParser#add_or_substract}.
	 * @param ctx the parse tree
	 */
	void exitAdd_or_substract(CParser.Add_or_substractContext ctx);
	/**
	 * Enter a parse tree produced by {@link CParser#block}.
	 * @param ctx the parse tree
	 */
	void enterBlock(CParser.BlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link CParser#block}.
	 * @param ctx the parse tree
	 */
	void exitBlock(CParser.BlockContext ctx);
	/**
	 * Enter a parse tree produced by {@link CParser#statement_if}.
	 * @param ctx the parse tree
	 */
	void enterStatement_if(CParser.Statement_ifContext ctx);
	/**
	 * Exit a parse tree produced by {@link CParser#statement_if}.
	 * @param ctx the parse tree
	 */
	void exitStatement_if(CParser.Statement_ifContext ctx);
	/**
	 * Enter a parse tree produced by {@link CParser#statement_while}.
	 * @param ctx the parse tree
	 */
	void enterStatement_while(CParser.Statement_whileContext ctx);
	/**
	 * Exit a parse tree produced by {@link CParser#statement_while}.
	 * @param ctx the parse tree
	 */
	void exitStatement_while(CParser.Statement_whileContext ctx);
}