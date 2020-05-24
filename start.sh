#!/bin/sh
echo "START!"
export CLASSPATH=".:/usr/local/lib/antlr-4.8-complete.jar:$CLASSPATH"
alias antlr4='java -Xmx500M -cp "/usr/local/lib/antlr-4.8-complete.jar:$CLASSPATH" org.antlr.v4.Tool'
alias grun='java -Xmx500M -cp "/usr/local/lib/antlr-4.8-complete.jar:$CLASSPATH" org.antlr.v4.gui.TestRig'
antlr4 grammar/C.g4
javac grammar/*.java
cd grammar
antlr4 -Dlanguage=JavaScript -visitor -o ../src/parser C.g4
cd ..
node compilator.js
