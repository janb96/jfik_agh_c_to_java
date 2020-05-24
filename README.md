# Translator z języka C do Javy

## Zespół
- Jan Boduch
- Mariusz Rogucki

## Spis treści
- Wstęp
- Uzasadnienie wyboru generatora parserów ANTLR4
- Opis napotkanych problemów oraz sposób ich rozwiązania
- Gramatyka
- Sposób uruchomienia
- Linkografia

## Wprowadzenie
Program służący do translacji kodu języka C do kodu języka Java.

Na cele projektu została przygotowana gramatyka dla języka C opierając się na specyfikacji języka. Wykorzystaliśmy narzędzie ANTLR, które pozwala na generowanie parserów i visitorów na podstawie przygotowanej gramatyki. 

Poprawność gramatyki sprawdziliśmy przy pomocy przykładowych plików w języku C oraz pluginu do INTELLIJ. W kolejnym kroku dodaliśmy funkcjonalnośc przetwarzania sparsowanego drzewa za pomocą visitorów. Obsługa listener i parser zaimplementowana jest w JavaScript z użyciem pakietu antlr4.
 
## Uzasadnienie wyboru generatora parserów ANTLRv4
- ANTLR4 posiada bogatą dokumentację
- Plugin do INTELLIJ
- ANTLR4 umożliwia współpracę z JavaScript

## Opis napotkanych problemów i sposoby ich rozwiązywania
- Największym problemem było stworzenie własnej gramatyki. Problem został rozwiązany dzięki wielogodzinnej lekturze dokumentacji ANTLR4.
- Problemem okazało się również skomplikowanie naszej gramatyki. Zrezygnowaliśmy i uprościliśmy reguły. 
- Problem z przejściem przez drzewo. Problem został rozwiązany za pomoca customowych visitorów.

## Gramatyka

- Nazwa gramatyki:

```
grammar C;
```

- Główna reguła:

```
prog: (statement)*;

statement :     variable
                | assign_operation
                | function_declaration
                | comment_section
                | statement_if
                | statement_while
                | other_expression
                | END;
```

- Reguły dla typów i zmiennych

```
variable : DATA_TYPE_VARIABLE name=lab OPERATOR_ASSIGN value=other_expression
				| DATA_TYPE_VARIABLE name=lab END;

DATA_TYPE_VARIABLE   :    'int'
						| 'float'
						| 'double'
						| 'char'
						| 'void';
```

- Reguły dla komentarzy

```
comment_section : COMMENT | BLOCK_COMMENT;
COMMENT  :  '//' ~( '\r' | '\n' )* -> skip;
BLOCK_COMMENT : '/*' .*? '*/' -> skip;
```

- Reguły dla wyrażeń warunkowych

```
statement_if : SYMBOL_IF other_expression block (SYMBOL_ELSE SYMBOL_IF other_expression block)* (SYMBOL_ELSE block)? ;
statement_while : SYMBOL_WHILE other_expression block;
```

- Reguły dla funkcji

```
function_declaration : DATA_TYPE_VARIABLE name=lab LEFT_PAR args=args_list RIGHT_PAR LEFT_BRACE statement* RIGHT_BRACE ;
func_call : name=function_name LEFT_PAR args=args_list RIGHT_PAR;
```

- Cała gramatyka

```

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
```

## Sposób uruchomienia

Do uruchomienia potrzebny będzie node.js i pobrany lokalnie antlr4.

1. Wykonać komendę `npm install`
2. Wykonać komendę `npm i antlr4`
3. W skrycpie `start.sh` zmienić ścieżkę do antlr4
4. W pliku `source.c` w katalogu `src` umieścić swój kod w języku C
5. Wykonać komendę `./start.sh`
6. W pliku `output.java` powinien znajdować się przetłumaczony kod

## Linkografia
- https://www.antlr.org - Strona główna ANTLR
- https://github.com/antlr/antlr4/blob/master/doc/index.md - Dokumentacja ANTLR
- https://www.npmjs.com/package/antlr4 - Pakiet NPM antlr4