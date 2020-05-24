grammar C;

prog: (statement)*;

statement :     variable
                | assign_operation
                | function_declaration
                | comment_section
                | statement_if
                | statement_while
                | other_expression
                | END;


comment_section : COMMENT | BLOCK_COMMENT;
COMMENT  :  '//' ~( '\r' | '\n' )* -> skip;
BLOCK_COMMENT : '/*' .*? '*/' -> skip;


variable : DATA_TYPE_VARIABLE name=lab OPERATOR_ASSIGN value=other_expression
				| DATA_TYPE_VARIABLE name=lab END;

function_parameter: DATA_TYPE_VARIABLE name=lab;

DATA_TYPE_VARIABLE   : 'int'
						| 'float'
						|	'double'
						|	'char'
						|	'void';


assign_operation : name=lab OPERATOR_ASSIGN value=other_expression;

other_expression : 	 left=other_expression op=multiplication_or_divide right=other_expression                     #multiplicationOrDivideExpression
	     | left=other_expression op=add_or_substract right=other_expression                       #addExpression
	     | LEFT_PAR other_expression RIGHT_PAR                                     #parExpression
	     | func_call                                            #functionExpression
	     | LABEL                                                #labelExpression
	     | other_expression op=(OPERATOR_AND | OPERATOR_OR) other_expression                        #binaryExpression
	     | other_expression op=(OPERATOR_EQ | OPERATOR_GT | OPERATOR_GE | OPERATOR_LE | OPERATOR_LT) other_expression #compareExpression
	     | atom                                                 #atomExpression
     ;


function_declaration : DATA_TYPE_VARIABLE name=lab LEFT_PAR args=args_list RIGHT_PAR LEFT_BRACE statement* RIGHT_BRACE ;
func_call : name=function_name LEFT_PAR args=args_list RIGHT_PAR;

args_list : (args+=function_parameter',')*(args+=function_parameter)?;

atom : STRING
     | (OPERATOR_PLUS | OPERATOR_SUB)? NUMBER
     | (SYMBOL_TRUE | SYMBOL_FALSE)
     ;

function_name: LABEL;
lab: LABEL;

multiplication_or_divide: (OPERATOR_MULTIPLY | OPERATOR_DIVIDE);
add_or_substract:   (OPERATOR_PLUS | OPERATOR_SUB);

block : LEFT_BRACE statement+ RIGHT_BRACE;

statement_if : SYMBOL_IF other_expression block (SYMBOL_ELSE SYMBOL_IF other_expression block)* (SYMBOL_ELSE block)? ;
statement_while : SYMBOL_WHILE other_expression block;

fragment DIGIT : [0-9]+ ;
LABEL: [a-zA-Z]+ ([a-zA-Z_] | DIGIT)*;

STRING : '"'.*?'"';

NUMBER : 	DIGIT+
            | '-' DIGIT+
            | '-' DIGIT+ '.' DIGIT+
            | DIGIT+ '.' DIGIT+;


END: ';';
OPERATOR_ASSIGN: '=' ;
OPERATOR_PLUS: '+' ;
OPERATOR_SUB: '-' ;
OPERATOR_MULTIPLY: '*' ;
OPERATOR_DIVIDE: '/' ;
OPERATOR_INCREMENT: '++' ;
OPERATOR_DECREMENT: '--' ;
OPERATOR_AND: '&&';
OPERATOR_OR: '||';
OPERATOR_EQ: '==';
OPERATOR_GT: '>';
OPERATOR_GE: '>=';
OPERATOR_LT: '<';
OPERATOR_LE: '<=';
SYMBOL_IF    : 'if' ;
SYMBOL_WHILE : 'while' ;
SYMBOL_ELSE : 'else';
SYMBOL_TRUE: 'true';
SYMBOL_FALSE: 'false';
LEFT_BRACE : '{';
RIGHT_BRACE : '}';
LEFT_PAR: '(';
RIGHT_PAR: ')';
EOL : '\r'? '\n' -> skip;
WS : [ \t]+ -> skip;


