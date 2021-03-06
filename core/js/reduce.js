ABE_LR_GRAMMARS=new Array();
ABE_LR_GRAMMARS[0]= {
//Program->TopStatements 
reduce: function() {
var p0=Abe.Stack.pop().value;//TopStatements
var value=func_Program(p0);
return {
	symbolTag:Abe.Tag.PROGRAM,
value:value
}
}
}
ABE_LR_GRAMMARS[1]= {
//TopStatements->ε 
reduce: function() {
var p0=Abe.Stack.pop().value;//ε
var value=func_TopStatements(p0);
return {
	symbolTag:Abe.Tag.TOPSTATEMENTS,
value:value
}
}
}
ABE_LR_GRAMMARS[2]= {
//TopStatements->TopStatementsPrefix 
reduce: function() {
var p0=Abe.Stack.pop().value;//TopStatementsPrefix
var value=func_TopStatements_0(p0);
return {
	symbolTag:Abe.Tag.TOPSTATEMENTS,
value:value
}
}
}
ABE_LR_GRAMMARS[3]= {
//TopStatementsPrefix->TopStatement 
reduce: function() {
var p0=Abe.Stack.pop().value;//TopStatement
var value=func_TopStatementsPrefix(p0);
return {
	symbolTag:Abe.Tag.TOPSTATEMENTSPREFIX,
value:value
}
}
}
ABE_LR_GRAMMARS[4]= {
//TopStatementsPrefix->TopStatementsPrefix TopStatement 
reduce: function() {
var p0=Abe.Stack.pop().value;//TopStatement
var p1=Abe.Stack.pop().value;//TopStatementsPrefix
var value=func_TopStatementsPrefix_0(p1,p0);
return {
	symbolTag:Abe.Tag.TOPSTATEMENTSPREFIX,
value:value
}
}
}
ABE_LR_GRAMMARS[5]= {
//TopStatement->Statement 
reduce: function() {
var p0=Abe.Stack.pop().value;//Statement
var value=func_TopStatement(p0);
return {
	symbolTag:Abe.Tag.TOPSTATEMENT,
value:value
}
}
}
ABE_LR_GRAMMARS[6]= {
//TopStatement->FunctionDefinition 
reduce: function() {
var p0=Abe.Stack.pop().value;//FunctionDefinition
var value=func_TopStatement_0(p0);
return {
	symbolTag:Abe.Tag.TOPSTATEMENT,
value:value
}
}
}
ABE_LR_GRAMMARS[7]= {
//FunctionDefinition->NamedFunction 
reduce: function() {
var p0=Abe.Stack.pop().value;//NamedFunction
var value=func_FunctionDefinition(p0);
return {
	symbolTag:Abe.Tag.FUNCTIONDEFINITION,
value:value
}
}
}
ABE_LR_GRAMMARS[8]= {
//AnonymousFunction->function FormalParametersAndBody 
reduce: function() {
var p0=Abe.Stack.pop().value;//FormalParametersAndBody
var p1=Abe.Stack.pop().value;//function
var value=func_AnonymousFunction(p1,p0);
return {
	symbolTag:Abe.Tag.ANONYMOUSFUNCTION,
value:value
}
}
}
ABE_LR_GRAMMARS[9]= {
//NamedFunction->function Identifier FormalParametersAndBody 
reduce: function() {
var p0=Abe.Stack.pop().value;//FormalParametersAndBody
var p1=Abe.Stack.pop().value;//Identifier
var p2=Abe.Stack.pop().value;//function
var value=func_NamedFunction(p2,p1,p0);
return {
	symbolTag:Abe.Tag.NAMEDFUNCTION,
value:value
}
}
}
ABE_LR_GRAMMARS[10]= {
//FormalParametersAndBody->( FormalParameters ) { TopStatements } 
reduce: function() {
var p0=Abe.Stack.pop().value;//}
var p1=Abe.Stack.pop().value;//TopStatements
var p2=Abe.Stack.pop().value;//{
var p3=Abe.Stack.pop().value;//)
var p4=Abe.Stack.pop().value;//FormalParameters
var p5=Abe.Stack.pop().value;//(
var value=func_FormalParametersAndBody(p5,p4,p3,p2,p1,p0);
return {
	symbolTag:Abe.Tag.FORMALPARAMETERSANDBODY,
value:value
}
}
}
ABE_LR_GRAMMARS[11]= {
//FormalParameters->ε 
reduce: function() {
var p0=Abe.Stack.pop().value;//ε
var value=func_FormalParameters(p0);
return {
	symbolTag:Abe.Tag.FORMALPARAMETERS,
value:value
}
}
}
ABE_LR_GRAMMARS[12]= {
//FormalParameters->FormalParametersPrefix 
reduce: function() {
var p0=Abe.Stack.pop().value;//FormalParametersPrefix
var value=func_FormalParameters_0(p0);
return {
	symbolTag:Abe.Tag.FORMALPARAMETERS,
value:value
}
}
}
ABE_LR_GRAMMARS[13]= {
//FormalParametersPrefix->FormalParameter 
reduce: function() {
var p0=Abe.Stack.pop().value;//FormalParameter
var value=func_FormalParametersPrefix(p0);
return {
	symbolTag:Abe.Tag.FORMALPARAMETERSPREFIX,
value:value
}
}
}
ABE_LR_GRAMMARS[14]= {
//FormalParametersPrefix->FormalParametersPrefix , FormalParameter 
reduce: function() {
var p0=Abe.Stack.pop().value;//FormalParameter
var p1=Abe.Stack.pop().value;//,
var p2=Abe.Stack.pop().value;//FormalParametersPrefix
var value=func_FormalParametersPrefix_0(p2,p1,p0);
return {
	symbolTag:Abe.Tag.FORMALPARAMETERSPREFIX,
value:value
}
}
}
ABE_LR_GRAMMARS[15]= {
//FormalParameter->Identifier 
reduce: function() {
var p0=Abe.Stack.pop().value;//Identifier
var value=func_FormalParameter(p0);
return {
	symbolTag:Abe.Tag.FORMALPARAMETER,
value:value
}
}
}
ABE_LR_GRAMMARS[16]= {
//TryStatement->try Block CatchClauses 
reduce: function() {
var p0=Abe.Stack.pop().value;//CatchClauses
var p1=Abe.Stack.pop().value;//Block
var p2=Abe.Stack.pop().value;//try
var value=func_TryStatement(p2,p1,p0);
return {
	symbolTag:Abe.Tag.TRYSTATEMENT,
value:value
}
}
}
ABE_LR_GRAMMARS[17]= {
//TryStatement->try Block FinallyClause 
reduce: function() {
var p0=Abe.Stack.pop().value;//FinallyClause
var p1=Abe.Stack.pop().value;//Block
var p2=Abe.Stack.pop().value;//try
var value=func_TryStatement_0(p2,p1,p0);
return {
	symbolTag:Abe.Tag.TRYSTATEMENT,
value:value
}
}
}
ABE_LR_GRAMMARS[18]= {
//TryStatement->try Block CatchClauses FinallyClause 
reduce: function() {
var p0=Abe.Stack.pop().value;//FinallyClause
var p1=Abe.Stack.pop().value;//CatchClauses
var p2=Abe.Stack.pop().value;//Block
var p3=Abe.Stack.pop().value;//try
var value=func_TryStatement_1(p3,p2,p1,p0);
return {
	symbolTag:Abe.Tag.TRYSTATEMENT,
value:value
}
}
}
ABE_LR_GRAMMARS[19]= {
//CatchClauses->CatchClause 
reduce: function() {
var p0=Abe.Stack.pop().value;//CatchClause
var value=func_CatchClauses(p0);
return {
	symbolTag:Abe.Tag.CATCHCLAUSES,
value:value
}
}
}
ABE_LR_GRAMMARS[20]= {
//CatchClauses->CatchClauses CatchClause 
reduce: function() {
var p0=Abe.Stack.pop().value;//CatchClause
var p1=Abe.Stack.pop().value;//CatchClauses
var value=func_CatchClauses_0(p1,p0);
return {
	symbolTag:Abe.Tag.CATCHCLAUSES,
value:value
}
}
}
ABE_LR_GRAMMARS[21]= {
//CatchClause->catch ( Identifier ) Block 
reduce: function() {
var p0=Abe.Stack.pop().value;//Block
var p1=Abe.Stack.pop().value;//)
var p2=Abe.Stack.pop().value;//Identifier
var p3=Abe.Stack.pop().value;//(
var p4=Abe.Stack.pop().value;//catch
var value=func_CatchClause(p4,p3,p2,p1,p0);
return {
	symbolTag:Abe.Tag.CATCHCLAUSE,
value:value
}
}
}
ABE_LR_GRAMMARS[22]= {
//FinallyClause->finally Block 
reduce: function() {
var p0=Abe.Stack.pop().value;//Block
var p1=Abe.Stack.pop().value;//finally
var value=func_FinallyClause(p1,p0);
return {
	symbolTag:Abe.Tag.FINALLYCLAUSE,
value:value
}
}
}
ABE_LR_GRAMMARS[23]= {
//ReturnStatement->return OptionalExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//OptionalExpression
var p1=Abe.Stack.pop().value;//return
var value=func_ReturnStatement(p1,p0);
return {
	symbolTag:Abe.Tag.RETURNSTATEMENT,
value:value
}
}
}
ABE_LR_GRAMMARS[24]= {
//ThrowStatement->throw Expression 
reduce: function() {
var p0=Abe.Stack.pop().value;//Expression
var p1=Abe.Stack.pop().value;//throw
var value=func_ThrowStatement(p1,p0);
return {
	symbolTag:Abe.Tag.THROWSTATEMENT,
value:value
}
}
}
ABE_LR_GRAMMARS[25]= {
//WithStatement->with ParenthesizedExpression Statement 
reduce: function() {
var p0=Abe.Stack.pop().value;//Statement
var p1=Abe.Stack.pop().value;//ParenthesizedExpression
var p2=Abe.Stack.pop().value;//with
var value=func_WithStatement(p2,p1,p0);
return {
	symbolTag:Abe.Tag.WITHSTATEMENT,
value:value
}
}
}
ABE_LR_GRAMMARS[26]= {
//ContinueStatement->continue OptionalLabel 
reduce: function() {
var p0=Abe.Stack.pop().value;//OptionalLabel
var p1=Abe.Stack.pop().value;//continue
var value=func_ContinueStatement(p1,p0);
return {
	symbolTag:Abe.Tag.CONTINUESTATEMENT,
value:value
}
}
}
ABE_LR_GRAMMARS[27]= {
//BreakStatement->break OptionalLabel 
reduce: function() {
var p0=Abe.Stack.pop().value;//OptionalLabel
var p1=Abe.Stack.pop().value;//break
var value=func_BreakStatement(p1,p0);
return {
	symbolTag:Abe.Tag.BREAKSTATEMENT,
value:value
}
}
}
ABE_LR_GRAMMARS[28]= {
//OptionalLabel->ε 
reduce: function() {
var p0=Abe.Stack.pop().value;//ε
var value=func_OptionalLabel(p0);
return {
	symbolTag:Abe.Tag.OPTIONALLABEL,
value:value
}
}
}
ABE_LR_GRAMMARS[29]= {
//OptionalLabel->Identifier 
reduce: function() {
var p0=Abe.Stack.pop().value;//Identifier
var value=func_OptionalLabel_0(p0);
return {
	symbolTag:Abe.Tag.OPTIONALLABEL,
value:value
}
}
}
ABE_LR_GRAMMARS[30]= {
//ForStatement->for ( ForInitializer ; OptionalExpression ; OptionalExpression ) Statement 
reduce: function() {
var p0=Abe.Stack.pop().value;//Statement
var p1=Abe.Stack.pop().value;//)
var p2=Abe.Stack.pop().value;//OptionalExpression
var p3=Abe.Stack.pop().value;//;
var p4=Abe.Stack.pop().value;//OptionalExpression
var p5=Abe.Stack.pop().value;//;
var p6=Abe.Stack.pop().value;//ForInitializer
var p7=Abe.Stack.pop().value;//(
var p8=Abe.Stack.pop().value;//for
var value=func_ForStatement(p8,p7,p6,p5,p4,p3,p2,p1,p0);
return {
	symbolTag:Abe.Tag.FORSTATEMENT,
value:value
}
}
}
ABE_LR_GRAMMARS[31]= {
//ForInitializer->ε 
reduce: function() {
var p0=Abe.Stack.pop().value;//ε
var value=func_ForInitializer(p0);
return {
	symbolTag:Abe.Tag.FORINITIALIZER,
value:value
}
}
}
ABE_LR_GRAMMARS[32]= {
//ForInitializer->Expression 
reduce: function() {
var p0=Abe.Stack.pop().value;//Expression
var value=func_ForInitializer_0(p0);
return {
	symbolTag:Abe.Tag.FORINITIALIZER,
value:value
}
}
}
ABE_LR_GRAMMARS[33]= {
//ForInitializer->var VariableDeclarationList 
reduce: function() {
var p0=Abe.Stack.pop().value;//VariableDeclarationList
var p1=Abe.Stack.pop().value;//var
var value=func_ForInitializer_1(p1,p0);
return {
	symbolTag:Abe.Tag.FORINITIALIZER,
value:value
}
}
}
ABE_LR_GRAMMARS[34]= {
//DoStatement->do Statement while ParenthesizedExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//ParenthesizedExpression
var p1=Abe.Stack.pop().value;//while
var p2=Abe.Stack.pop().value;//Statement
var p3=Abe.Stack.pop().value;//do
var value=func_DoStatement(p3,p2,p1,p0);
return {
	symbolTag:Abe.Tag.DOSTATEMENT,
value:value
}
}
}
ABE_LR_GRAMMARS[35]= {
//WhileStatement->while ParenthesizedExpression Statement 
reduce: function() {
var p0=Abe.Stack.pop().value;//Statement
var p1=Abe.Stack.pop().value;//ParenthesizedExpression
var p2=Abe.Stack.pop().value;//while
var value=func_WhileStatement(p2,p1,p0);
return {
	symbolTag:Abe.Tag.WHILESTATEMENT,
value:value
}
}
}
ABE_LR_GRAMMARS[36]= {
//SwitchStatement->switch ParenthesizedExpression { CasePrefix } 
reduce: function() {
var p0=Abe.Stack.pop().value;//}
var p1=Abe.Stack.pop().value;//CasePrefix
var p2=Abe.Stack.pop().value;//{
var p3=Abe.Stack.pop().value;//ParenthesizedExpression
var p4=Abe.Stack.pop().value;//switch
var value=func_SwitchStatement(p4,p3,p2,p1,p0);
return {
	symbolTag:Abe.Tag.SWITCHSTATEMENT,
value:value
}
}
}
ABE_LR_GRAMMARS[37]= {
//CasePrefix->CaseGroups LastCaseGroup 
reduce: function() {
var p0=Abe.Stack.pop().value;//LastCaseGroup
var p1=Abe.Stack.pop().value;//CaseGroups
var value=func_CasePrefix(p1,p0);
return {
	symbolTag:Abe.Tag.CASEPREFIX,
value:value
}
}
}
ABE_LR_GRAMMARS[38]= {
//CasePrefix->ε 
reduce: function() {
var p0=Abe.Stack.pop().value;//ε
var value=func_CasePrefix_0(p0);
return {
	symbolTag:Abe.Tag.CASEPREFIX,
value:value
}
}
}
ABE_LR_GRAMMARS[39]= {
//CaseGroups->ε 
reduce: function() {
var p0=Abe.Stack.pop().value;//ε
var value=func_CaseGroups(p0);
return {
	symbolTag:Abe.Tag.CASEGROUPS,
value:value
}
}
}
ABE_LR_GRAMMARS[40]= {
//CaseGroups->CaseGroups CaseGroup 
reduce: function() {
var p0=Abe.Stack.pop().value;//CaseGroup
var p1=Abe.Stack.pop().value;//CaseGroups
var value=func_CaseGroups_0(p1,p0);
return {
	symbolTag:Abe.Tag.CASEGROUPS,
value:value
}
}
}
ABE_LR_GRAMMARS[41]= {
//CaseGroup->CaseGuards BlockStatementsPrefix 
reduce: function() {
var p0=Abe.Stack.pop().value;//BlockStatementsPrefix
var p1=Abe.Stack.pop().value;//CaseGuards
var value=func_CaseGroup(p1,p0);
return {
	symbolTag:Abe.Tag.CASEGROUP,
value:value
}
}
}
ABE_LR_GRAMMARS[42]= {
//LastCaseGroup->CaseGuards BlockStatements 
reduce: function() {
var p0=Abe.Stack.pop().value;//BlockStatements
var p1=Abe.Stack.pop().value;//CaseGuards
var value=func_LastCaseGroup(p1,p0);
return {
	symbolTag:Abe.Tag.LASTCASEGROUP,
value:value
}
}
}
ABE_LR_GRAMMARS[43]= {
//CaseGuards->CaseGuard 
reduce: function() {
var p0=Abe.Stack.pop().value;//CaseGuard
var value=func_CaseGuards(p0);
return {
	symbolTag:Abe.Tag.CASEGUARDS,
value:value
}
}
}
ABE_LR_GRAMMARS[44]= {
//CaseGuards->CaseGuards CaseGuard 
reduce: function() {
var p0=Abe.Stack.pop().value;//CaseGuard
var p1=Abe.Stack.pop().value;//CaseGuards
var value=func_CaseGuards_0(p1,p0);
return {
	symbolTag:Abe.Tag.CASEGUARDS,
value:value
}
}
}
ABE_LR_GRAMMARS[45]= {
//CaseGuard->CGP : 
reduce: function() {
var p0=Abe.Stack.pop().value;//:
var p1=Abe.Stack.pop().value;//CGP
var value=func_CaseGuard(p1,p0);
return {
	symbolTag:Abe.Tag.CASEGUARD,
value:value
}
}
}
ABE_LR_GRAMMARS[46]= {
//CGP->case Expression 
reduce: function() {
var p0=Abe.Stack.pop().value;//Expression
var p1=Abe.Stack.pop().value;//case
var value=func_CGP(p1,p0);
return {
	symbolTag:Abe.Tag.CGP,
value:value
}
}
}
ABE_LR_GRAMMARS[47]= {
//CGP->default 
reduce: function() {
var p0=Abe.Stack.pop().value;//default
var value=func_CGP_0(p0);
return {
	symbolTag:Abe.Tag.CGP,
value:value
}
}
}
ABE_LR_GRAMMARS[48]= {
//IfStatement->if ParenthesizedExpression Statement ElseStatement 
reduce: function() {
var p0=Abe.Stack.pop().value;//ElseStatement
var p1=Abe.Stack.pop().value;//Statement
var p2=Abe.Stack.pop().value;//ParenthesizedExpression
var p3=Abe.Stack.pop().value;//if
var value=func_IfStatement(p3,p2,p1,p0);
return {
	symbolTag:Abe.Tag.IFSTATEMENT,
value:value
}
}
}
ABE_LR_GRAMMARS[49]= {
//ElseStatement->else Statement 
reduce: function() {
var p0=Abe.Stack.pop().value;//Statement
var p1=Abe.Stack.pop().value;//else
var value=func_ElseStatement(p1,p0);
return {
	symbolTag:Abe.Tag.ELSESTATEMENT,
value:value
}
}
}
ABE_LR_GRAMMARS[50]= {
//ElseStatement->ε 
reduce: function() {
var p0=Abe.Stack.pop().value;//ε
var value=func_ElseStatement_0(p0);
return {
	symbolTag:Abe.Tag.ELSESTATEMENT,
value:value
}
}
}
ABE_LR_GRAMMARS[51]= {
//LabeledStatement->Identifier : Statement 
reduce: function() {
var p0=Abe.Stack.pop().value;//Statement
var p1=Abe.Stack.pop().value;//:
var p2=Abe.Stack.pop().value;//Identifier
var value=func_LabeledStatement(p2,p1,p0);
return {
	symbolTag:Abe.Tag.LABELEDSTATEMENT,
value:value
}
}
}
ABE_LR_GRAMMARS[52]= {
//Block->{ BlockStatements } 
reduce: function() {
var p0=Abe.Stack.pop().value;//}
var p1=Abe.Stack.pop().value;//BlockStatements
var p2=Abe.Stack.pop().value;//{
var value=func_Block(p2,p1,p0);
return {
	symbolTag:Abe.Tag.BLOCK,
value:value
}
}
}
ABE_LR_GRAMMARS[53]= {
//BlockStatements->ε 
reduce: function() {
var p0=Abe.Stack.pop().value;//ε
var value=func_BlockStatements(p0);
return {
	symbolTag:Abe.Tag.BLOCKSTATEMENTS,
value:value
}
}
}
ABE_LR_GRAMMARS[54]= {
//BlockStatements->BlockStatementsPrefix 
reduce: function() {
var p0=Abe.Stack.pop().value;//BlockStatementsPrefix
var value=func_BlockStatements_0(p0);
return {
	symbolTag:Abe.Tag.BLOCKSTATEMENTS,
value:value
}
}
}
ABE_LR_GRAMMARS[55]= {
//BlockStatementsPrefix->Statement 
reduce: function() {
var p0=Abe.Stack.pop().value;//Statement
var value=func_BlockStatementsPrefix(p0);
return {
	symbolTag:Abe.Tag.BLOCKSTATEMENTSPREFIX,
value:value
}
}
}
ABE_LR_GRAMMARS[56]= {
//BlockStatementsPrefix->BlockStatementsPrefix Statement 
reduce: function() {
var p0=Abe.Stack.pop().value;//Statement
var p1=Abe.Stack.pop().value;//BlockStatementsPrefix
var value=func_BlockStatementsPrefix_0(p1,p0);
return {
	symbolTag:Abe.Tag.BLOCKSTATEMENTSPREFIX,
value:value
}
}
}
ABE_LR_GRAMMARS[57]= {
//VariableDefinition->var VariableDeclarationList 
reduce: function() {
var p0=Abe.Stack.pop().value;//VariableDeclarationList
var p1=Abe.Stack.pop().value;//var
var value=func_VariableDefinition(p1,p0);
return {
	symbolTag:Abe.Tag.VARIABLEDEFINITION,
value:value
}
}
}
ABE_LR_GRAMMARS[58]= {
//VariableDeclarationList->VariableDeclaration 
reduce: function() {
var p0=Abe.Stack.pop().value;//VariableDeclaration
var value=func_VariableDeclarationList(p0);
return {
	symbolTag:Abe.Tag.VARIABLEDECLARATIONLIST,
value:value
}
}
}
ABE_LR_GRAMMARS[59]= {
//VariableDeclarationList->VariableDeclarationList , VariableDeclaration 
reduce: function() {
var p0=Abe.Stack.pop().value;//VariableDeclaration
var p1=Abe.Stack.pop().value;//,
var p2=Abe.Stack.pop().value;//VariableDeclarationList
var value=func_VariableDeclarationList_0(p2,p1,p0);
return {
	symbolTag:Abe.Tag.VARIABLEDECLARATIONLIST,
value:value
}
}
}
ABE_LR_GRAMMARS[60]= {
//VariableDeclaration->Identifier VariableInitializer 
reduce: function() {
var p0=Abe.Stack.pop().value;//VariableInitializer
var p1=Abe.Stack.pop().value;//Identifier
var value=func_VariableDeclaration(p1,p0);
return {
	symbolTag:Abe.Tag.VARIABLEDECLARATION,
value:value
}
}
}
ABE_LR_GRAMMARS[61]= {
//VariableInitializer->ε 
reduce: function() {
var p0=Abe.Stack.pop().value;//ε
var value=func_VariableInitializer(p0);
return {
	symbolTag:Abe.Tag.VARIABLEINITIALIZER,
value:value
}
}
}
ABE_LR_GRAMMARS[62]= {
//VariableInitializer->= AssignmentExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//AssignmentExpression
var p1=Abe.Stack.pop().value;//=
var value=func_VariableInitializer_0(p1,p0);
return {
	symbolTag:Abe.Tag.VARIABLEINITIALIZER,
value:value
}
}
}
ABE_LR_GRAMMARS[63]= {
//ExpressionStatement->Expression 
reduce: function() {
var p0=Abe.Stack.pop().value;//Expression
var value=func_ExpressionStatement(p0);
return {
	symbolTag:Abe.Tag.EXPRESSIONSTATEMENT,
value:value
}
}
}
ABE_LR_GRAMMARS[64]= {
//EmptyStatement->; 
reduce: function() {
var p0=Abe.Stack.pop().value;//;
var value=func_EmptyStatement(p0);
return {
	symbolTag:Abe.Tag.EMPTYSTATEMENT,
value:value
}
}
}
ABE_LR_GRAMMARS[65]= {
//Expression->AssignmentExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//AssignmentExpression
var value=func_Expression(p0);
return {
	symbolTag:Abe.Tag.EXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[66]= {
//Expression->Expression , AssignmentExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//AssignmentExpression
var p1=Abe.Stack.pop().value;//,
var p2=Abe.Stack.pop().value;//Expression
var value=func_Expression_0(p2,p1,p0);
return {
	symbolTag:Abe.Tag.EXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[67]= {
//OptionalExpression->Expression 
reduce: function() {
var p0=Abe.Stack.pop().value;//Expression
var value=func_OptionalExpression(p0);
return {
	symbolTag:Abe.Tag.OPTIONALEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[68]= {
//OptionalExpression->ε 
reduce: function() {
var p0=Abe.Stack.pop().value;//ε
var value=func_OptionalExpression_0(p0);
return {
	symbolTag:Abe.Tag.OPTIONALEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[69]= {
//Statement->EmptyStatement 
reduce: function() {
var p0=Abe.Stack.pop().value;//EmptyStatement
var value=func_Statement(p0);
return {
	symbolTag:Abe.Tag.STATEMENT,
value:value
}
}
}
ABE_LR_GRAMMARS[70]= {
//Statement->ExpressionStatement OptionalSemicolon 
reduce: function() {
var p0=Abe.Stack.pop().value;//OptionalSemicolon
var p1=Abe.Stack.pop().value;//ExpressionStatement
var value=func_Statement_0(p1,p0);
return {
	symbolTag:Abe.Tag.STATEMENT,
value:value
}
}
}
ABE_LR_GRAMMARS[71]= {
//Statement->VariableDefinition OptionalSemicolon 
reduce: function() {
var p0=Abe.Stack.pop().value;//OptionalSemicolon
var p1=Abe.Stack.pop().value;//VariableDefinition
var value=func_Statement_1(p1,p0);
return {
	symbolTag:Abe.Tag.STATEMENT,
value:value
}
}
}
ABE_LR_GRAMMARS[72]= {
//Statement->Block 
reduce: function() {
var p0=Abe.Stack.pop().value;//Block
var value=func_Statement_2(p0);
return {
	symbolTag:Abe.Tag.STATEMENT,
value:value
}
}
}
ABE_LR_GRAMMARS[73]= {
//Statement->LabeledStatement 
reduce: function() {
var p0=Abe.Stack.pop().value;//LabeledStatement
var value=func_Statement_3(p0);
return {
	symbolTag:Abe.Tag.STATEMENT,
value:value
}
}
}
ABE_LR_GRAMMARS[74]= {
//Statement->IfStatement 
reduce: function() {
var p0=Abe.Stack.pop().value;//IfStatement
var value=func_Statement_4(p0);
return {
	symbolTag:Abe.Tag.STATEMENT,
value:value
}
}
}
ABE_LR_GRAMMARS[75]= {
//Statement->SwitchStatement 
reduce: function() {
var p0=Abe.Stack.pop().value;//SwitchStatement
var value=func_Statement_5(p0);
return {
	symbolTag:Abe.Tag.STATEMENT,
value:value
}
}
}
ABE_LR_GRAMMARS[76]= {
//Statement->DoStatement OptionalSemicolon 
reduce: function() {
var p0=Abe.Stack.pop().value;//OptionalSemicolon
var p1=Abe.Stack.pop().value;//DoStatement
var value=func_Statement_6(p1,p0);
return {
	symbolTag:Abe.Tag.STATEMENT,
value:value
}
}
}
ABE_LR_GRAMMARS[77]= {
//Statement->WhileStatement 
reduce: function() {
var p0=Abe.Stack.pop().value;//WhileStatement
var value=func_Statement_7(p0);
return {
	symbolTag:Abe.Tag.STATEMENT,
value:value
}
}
}
ABE_LR_GRAMMARS[78]= {
//Statement->ForStatement 
reduce: function() {
var p0=Abe.Stack.pop().value;//ForStatement
var value=func_Statement_8(p0);
return {
	symbolTag:Abe.Tag.STATEMENT,
value:value
}
}
}
ABE_LR_GRAMMARS[79]= {
//Statement->WithStatement 
reduce: function() {
var p0=Abe.Stack.pop().value;//WithStatement
var value=func_Statement_9(p0);
return {
	symbolTag:Abe.Tag.STATEMENT,
value:value
}
}
}
ABE_LR_GRAMMARS[80]= {
//Statement->ContinueStatement OptionalSemicolon 
reduce: function() {
var p0=Abe.Stack.pop().value;//OptionalSemicolon
var p1=Abe.Stack.pop().value;//ContinueStatement
var value=func_Statement_10(p1,p0);
return {
	symbolTag:Abe.Tag.STATEMENT,
value:value
}
}
}
ABE_LR_GRAMMARS[81]= {
//Statement->BreakStatement OptionalSemicolon 
reduce: function() {
var p0=Abe.Stack.pop().value;//OptionalSemicolon
var p1=Abe.Stack.pop().value;//BreakStatement
var value=func_Statement_11(p1,p0);
return {
	symbolTag:Abe.Tag.STATEMENT,
value:value
}
}
}
ABE_LR_GRAMMARS[82]= {
//Statement->ReturnStatement OptionalSemicolon 
reduce: function() {
var p0=Abe.Stack.pop().value;//OptionalSemicolon
var p1=Abe.Stack.pop().value;//ReturnStatement
var value=func_Statement_12(p1,p0);
return {
	symbolTag:Abe.Tag.STATEMENT,
value:value
}
}
}
ABE_LR_GRAMMARS[83]= {
//Statement->ThrowStatement OptionalSemicolon 
reduce: function() {
var p0=Abe.Stack.pop().value;//OptionalSemicolon
var p1=Abe.Stack.pop().value;//ThrowStatement
var value=func_Statement_13(p1,p0);
return {
	symbolTag:Abe.Tag.STATEMENT,
value:value
}
}
}
ABE_LR_GRAMMARS[84]= {
//Statement->TryStatement 
reduce: function() {
var p0=Abe.Stack.pop().value;//TryStatement
var value=func_Statement_14(p0);
return {
	symbolTag:Abe.Tag.STATEMENT,
value:value
}
}
}
ABE_LR_GRAMMARS[85]= {
//OptionalSemicolon->; 
reduce: function() {
var p0=Abe.Stack.pop().value;//;
var value=func_OptionalSemicolon(p0);
return {
	symbolTag:Abe.Tag.OPTIONALSEMICOLON,
value:value
}
}
}
ABE_LR_GRAMMARS[86]= {
//AssignmentExpression->ConditionalExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//ConditionalExpression
var value=func_AssignmentExpression(p0);
return {
	symbolTag:Abe.Tag.ASSIGNMENTEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[87]= {
//AssignmentExpression->LeftSideExpression = AssignmentExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//AssignmentExpression
var p1=Abe.Stack.pop().value;//=
var p2=Abe.Stack.pop().value;//LeftSideExpression
var value=func_AssignmentExpression_0(p2,p1,p0);
return {
	symbolTag:Abe.Tag.ASSIGNMENTEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[88]= {
//AssignmentExpression->LeftSideExpression CompoundAssignment AssignmentExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//AssignmentExpression
var p1=Abe.Stack.pop().value;//CompoundAssignment
var p2=Abe.Stack.pop().value;//LeftSideExpression
var value=func_AssignmentExpression_1(p2,p1,p0);
return {
	symbolTag:Abe.Tag.ASSIGNMENTEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[89]= {
//CompoundAssignment->*= 
reduce: function() {
var p0=Abe.Stack.pop().value;//*=
var value=func_CompoundAssignment(p0);
return {
	symbolTag:Abe.Tag.COMPOUNDASSIGNMENT,
value:value
}
}
}
ABE_LR_GRAMMARS[90]= {
//CompoundAssignment->/= 
reduce: function() {
var p0=Abe.Stack.pop().value;///=
var value=func_CompoundAssignment_0(p0);
return {
	symbolTag:Abe.Tag.COMPOUNDASSIGNMENT,
value:value
}
}
}
ABE_LR_GRAMMARS[91]= {
//CompoundAssignment->%= 
reduce: function() {
var p0=Abe.Stack.pop().value;//%=
var value=func_CompoundAssignment_1(p0);
return {
	symbolTag:Abe.Tag.COMPOUNDASSIGNMENT,
value:value
}
}
}
ABE_LR_GRAMMARS[92]= {
//CompoundAssignment->+= 
reduce: function() {
var p0=Abe.Stack.pop().value;//+=
var value=func_CompoundAssignment_2(p0);
return {
	symbolTag:Abe.Tag.COMPOUNDASSIGNMENT,
value:value
}
}
}
ABE_LR_GRAMMARS[93]= {
//CompoundAssignment->-= 
reduce: function() {
var p0=Abe.Stack.pop().value;//-=
var value=func_CompoundAssignment_3(p0);
return {
	symbolTag:Abe.Tag.COMPOUNDASSIGNMENT,
value:value
}
}
}
ABE_LR_GRAMMARS[94]= {
//CompoundAssignment-><<= 
reduce: function() {
var p0=Abe.Stack.pop().value;//<<=
var value=func_CompoundAssignment_4(p0);
return {
	symbolTag:Abe.Tag.COMPOUNDASSIGNMENT,
value:value
}
}
}
ABE_LR_GRAMMARS[95]= {
//CompoundAssignment->>>= 
reduce: function() {
var p0=Abe.Stack.pop().value;//>>=
var value=func_CompoundAssignment_5(p0);
return {
	symbolTag:Abe.Tag.COMPOUNDASSIGNMENT,
value:value
}
}
}
ABE_LR_GRAMMARS[96]= {
//CompoundAssignment->>>>= 
reduce: function() {
var p0=Abe.Stack.pop().value;//>>>=
var value=func_CompoundAssignment_6(p0);
return {
	symbolTag:Abe.Tag.COMPOUNDASSIGNMENT,
value:value
}
}
}
ABE_LR_GRAMMARS[97]= {
//CompoundAssignment->&= 
reduce: function() {
var p0=Abe.Stack.pop().value;//&=
var value=func_CompoundAssignment_7(p0);
return {
	symbolTag:Abe.Tag.COMPOUNDASSIGNMENT,
value:value
}
}
}
ABE_LR_GRAMMARS[98]= {
//CompoundAssignment->^= 
reduce: function() {
var p0=Abe.Stack.pop().value;//^=
var value=func_CompoundAssignment_8(p0);
return {
	symbolTag:Abe.Tag.COMPOUNDASSIGNMENT,
value:value
}
}
}
ABE_LR_GRAMMARS[99]= {
//CompoundAssignment->|= 
reduce: function() {
var p0=Abe.Stack.pop().value;//|=
var value=func_CompoundAssignment_9(p0);
return {
	symbolTag:Abe.Tag.COMPOUNDASSIGNMENT,
value:value
}
}
}
ABE_LR_GRAMMARS[100]= {
//ConditionalExpression->LogicalOrExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//LogicalOrExpression
var value=func_ConditionalExpression(p0);
return {
	symbolTag:Abe.Tag.CONDITIONALEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[101]= {
//ConditionalExpression->LogicalOrExpression ? AssignmentExpression : AssignmentExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//AssignmentExpression
var p1=Abe.Stack.pop().value;//:
var p2=Abe.Stack.pop().value;//AssignmentExpression
var p3=Abe.Stack.pop().value;//?
var p4=Abe.Stack.pop().value;//LogicalOrExpression
var value=func_ConditionalExpression_0(p4,p3,p2,p1,p0);
return {
	symbolTag:Abe.Tag.CONDITIONALEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[102]= {
//LogicalAndExpression->BitwiseOrExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//BitwiseOrExpression
var value=func_LogicalAndExpression(p0);
return {
	symbolTag:Abe.Tag.LOGICALANDEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[103]= {
//LogicalAndExpression->LogicalAndExpression && BitwiseOrExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//BitwiseOrExpression
var p1=Abe.Stack.pop().value;//&&
var p2=Abe.Stack.pop().value;//LogicalAndExpression
var value=func_LogicalAndExpression_0(p2,p1,p0);
return {
	symbolTag:Abe.Tag.LOGICALANDEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[104]= {
//LogicalOrExpression->LogicalAndExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//LogicalAndExpression
var value=func_LogicalOrExpression(p0);
return {
	symbolTag:Abe.Tag.LOGICALOREXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[105]= {
//LogicalOrExpression->LogicalOrExpression || LogicalAndExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//LogicalAndExpression
var p1=Abe.Stack.pop().value;//||
var p2=Abe.Stack.pop().value;//LogicalOrExpression
var value=func_LogicalOrExpression_0(p2,p1,p0);
return {
	symbolTag:Abe.Tag.LOGICALOREXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[106]= {
//BitwiseAndExpression->EqualityExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//EqualityExpression
var value=func_BitwiseAndExpression(p0);
return {
	symbolTag:Abe.Tag.BITWISEANDEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[107]= {
//BitwiseAndExpression->BitwiseAndExpression & EqualityExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//EqualityExpression
var p1=Abe.Stack.pop().value;//&
var p2=Abe.Stack.pop().value;//BitwiseAndExpression
var value=func_BitwiseAndExpression_0(p2,p1,p0);
return {
	symbolTag:Abe.Tag.BITWISEANDEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[108]= {
//BitwiseXorExpression->BitwiseAndExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//BitwiseAndExpression
var value=func_BitwiseXorExpression(p0);
return {
	symbolTag:Abe.Tag.BITWISEXOREXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[109]= {
//BitwiseXorExpression->BitwiseXorExpression ^ BitwiseAndExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//BitwiseAndExpression
var p1=Abe.Stack.pop().value;//^
var p2=Abe.Stack.pop().value;//BitwiseXorExpression
var value=func_BitwiseXorExpression_0(p2,p1,p0);
return {
	symbolTag:Abe.Tag.BITWISEXOREXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[110]= {
//BitwiseOrExpression->BitwiseXorExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//BitwiseXorExpression
var value=func_BitwiseOrExpression(p0);
return {
	symbolTag:Abe.Tag.BITWISEOREXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[111]= {
//BitwiseOrExpression->BitwiseOrExpression | BitwiseXorExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//BitwiseXorExpression
var p1=Abe.Stack.pop().value;//|
var p2=Abe.Stack.pop().value;//BitwiseOrExpression
var value=func_BitwiseOrExpression_0(p2,p1,p0);
return {
	symbolTag:Abe.Tag.BITWISEOREXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[112]= {
//EqualityExpression->RelationalExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//RelationalExpression
var value=func_EqualityExpression(p0);
return {
	symbolTag:Abe.Tag.EQUALITYEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[113]= {
//EqualityExpression->EqualityExpression == RelationalExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//RelationalExpression
var p1=Abe.Stack.pop().value;//==
var p2=Abe.Stack.pop().value;//EqualityExpression
var value=func_EqualityExpression_0(p2,p1,p0);
return {
	symbolTag:Abe.Tag.EQUALITYEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[114]= {
//EqualityExpression->EqualityExpression != RelationalExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//RelationalExpression
var p1=Abe.Stack.pop().value;//!=
var p2=Abe.Stack.pop().value;//EqualityExpression
var value=func_EqualityExpression_1(p2,p1,p0);
return {
	symbolTag:Abe.Tag.EQUALITYEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[115]= {
//EqualityExpression->EqualityExpression === RelationalExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//RelationalExpression
var p1=Abe.Stack.pop().value;//===
var p2=Abe.Stack.pop().value;//EqualityExpression
var value=func_EqualityExpression_2(p2,p1,p0);
return {
	symbolTag:Abe.Tag.EQUALITYEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[116]= {
//EqualityExpression->EqualityExpression !== RelationalExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//RelationalExpression
var p1=Abe.Stack.pop().value;//!==
var p2=Abe.Stack.pop().value;//EqualityExpression
var value=func_EqualityExpression_3(p2,p1,p0);
return {
	symbolTag:Abe.Tag.EQUALITYEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[117]= {
//RelationalExpression->ShiftExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//ShiftExpression
var value=func_RelationalExpression(p0);
return {
	symbolTag:Abe.Tag.RELATIONALEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[118]= {
//RelationalExpression->RelationalExpression < ShiftExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//ShiftExpression
var p1=Abe.Stack.pop().value;//<
var p2=Abe.Stack.pop().value;//RelationalExpression
var value=func_RelationalExpression_0(p2,p1,p0);
return {
	symbolTag:Abe.Tag.RELATIONALEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[119]= {
//RelationalExpression->RelationalExpression > ShiftExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//ShiftExpression
var p1=Abe.Stack.pop().value;//>
var p2=Abe.Stack.pop().value;//RelationalExpression
var value=func_RelationalExpression_1(p2,p1,p0);
return {
	symbolTag:Abe.Tag.RELATIONALEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[120]= {
//RelationalExpression->RelationalExpression <= ShiftExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//ShiftExpression
var p1=Abe.Stack.pop().value;//<=
var p2=Abe.Stack.pop().value;//RelationalExpression
var value=func_RelationalExpression_2(p2,p1,p0);
return {
	symbolTag:Abe.Tag.RELATIONALEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[121]= {
//RelationalExpression->RelationalExpression >= ShiftExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//ShiftExpression
var p1=Abe.Stack.pop().value;//>=
var p2=Abe.Stack.pop().value;//RelationalExpression
var value=func_RelationalExpression_3(p2,p1,p0);
return {
	symbolTag:Abe.Tag.RELATIONALEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[122]= {
//RelationalExpression->RelationalExpression instanceof ShiftExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//ShiftExpression
var p1=Abe.Stack.pop().value;//instanceof
var p2=Abe.Stack.pop().value;//RelationalExpression
var value=func_RelationalExpression_4(p2,p1,p0);
return {
	symbolTag:Abe.Tag.RELATIONALEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[123]= {
//RelationalExpression->RelationalExpression in ShiftExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//ShiftExpression
var p1=Abe.Stack.pop().value;//in
var p2=Abe.Stack.pop().value;//RelationalExpression
var value=func_RelationalExpression_5(p2,p1,p0);
return {
	symbolTag:Abe.Tag.RELATIONALEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[124]= {
//ShiftExpression->AdditiveExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//AdditiveExpression
var value=func_ShiftExpression(p0);
return {
	symbolTag:Abe.Tag.SHIFTEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[125]= {
//ShiftExpression->ShiftExpression << AdditiveExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//AdditiveExpression
var p1=Abe.Stack.pop().value;//<<
var p2=Abe.Stack.pop().value;//ShiftExpression
var value=func_ShiftExpression_0(p2,p1,p0);
return {
	symbolTag:Abe.Tag.SHIFTEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[126]= {
//ShiftExpression->ShiftExpression >> AdditiveExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//AdditiveExpression
var p1=Abe.Stack.pop().value;//>>
var p2=Abe.Stack.pop().value;//ShiftExpression
var value=func_ShiftExpression_1(p2,p1,p0);
return {
	symbolTag:Abe.Tag.SHIFTEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[127]= {
//ShiftExpression->ShiftExpression >>> AdditiveExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//AdditiveExpression
var p1=Abe.Stack.pop().value;//>>>
var p2=Abe.Stack.pop().value;//ShiftExpression
var value=func_ShiftExpression_2(p2,p1,p0);
return {
	symbolTag:Abe.Tag.SHIFTEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[128]= {
//AdditiveExpression->MultiplicativeExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//MultiplicativeExpression
var value=func_AdditiveExpression(p0);
return {
	symbolTag:Abe.Tag.ADDITIVEEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[129]= {
//AdditiveExpression->AdditiveExpression + MultiplicativeExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//MultiplicativeExpression
var p1=Abe.Stack.pop().value;//+
var p2=Abe.Stack.pop().value;//AdditiveExpression
var value=func_AdditiveExpression_0(p2,p1,p0);
return {
	symbolTag:Abe.Tag.ADDITIVEEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[130]= {
//AdditiveExpression->AdditiveExpression - MultiplicativeExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//MultiplicativeExpression
var p1=Abe.Stack.pop().value;//-
var p2=Abe.Stack.pop().value;//AdditiveExpression
var value=func_AdditiveExpression_1(p2,p1,p0);
return {
	symbolTag:Abe.Tag.ADDITIVEEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[131]= {
//MultiplicativeExpression->UnaryExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//UnaryExpression
var value=func_MultiplicativeExpression(p0);
return {
	symbolTag:Abe.Tag.MULTIPLICATIVEEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[132]= {
//MultiplicativeExpression->MultiplicativeExpression * UnaryExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//UnaryExpression
var p1=Abe.Stack.pop().value;//*
var p2=Abe.Stack.pop().value;//MultiplicativeExpression
var value=func_MultiplicativeExpression_0(p2,p1,p0);
return {
	symbolTag:Abe.Tag.MULTIPLICATIVEEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[133]= {
//MultiplicativeExpression->MultiplicativeExpression / UnaryExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//UnaryExpression
var p1=Abe.Stack.pop().value;///
var p2=Abe.Stack.pop().value;//MultiplicativeExpression
var value=func_MultiplicativeExpression_1(p2,p1,p0);
return {
	symbolTag:Abe.Tag.MULTIPLICATIVEEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[134]= {
//MultiplicativeExpression->MultiplicativeExpression % UnaryExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//UnaryExpression
var p1=Abe.Stack.pop().value;//%
var p2=Abe.Stack.pop().value;//MultiplicativeExpression
var value=func_MultiplicativeExpression_2(p2,p1,p0);
return {
	symbolTag:Abe.Tag.MULTIPLICATIVEEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[135]= {
//UnaryExpression->PostfixExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//PostfixExpression
var value=func_UnaryExpression(p0);
return {
	symbolTag:Abe.Tag.UNARYEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[136]= {
//UnaryExpression->delete LeftSideExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//LeftSideExpression
var p1=Abe.Stack.pop().value;//delete
var value=func_UnaryExpression_0(p1,p0);
return {
	symbolTag:Abe.Tag.UNARYEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[137]= {
//UnaryExpression->void UnaryExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//UnaryExpression
var p1=Abe.Stack.pop().value;//void
var value=func_UnaryExpression_1(p1,p0);
return {
	symbolTag:Abe.Tag.UNARYEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[138]= {
//UnaryExpression->typeof UnaryExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//UnaryExpression
var p1=Abe.Stack.pop().value;//typeof
var value=func_UnaryExpression_2(p1,p0);
return {
	symbolTag:Abe.Tag.UNARYEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[139]= {
//UnaryExpression->++ LeftSideExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//LeftSideExpression
var p1=Abe.Stack.pop().value;//++
var value=func_UnaryExpression_3(p1,p0);
return {
	symbolTag:Abe.Tag.UNARYEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[140]= {
//UnaryExpression->-- LeftSideExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//LeftSideExpression
var p1=Abe.Stack.pop().value;//--
var value=func_UnaryExpression_4(p1,p0);
return {
	symbolTag:Abe.Tag.UNARYEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[141]= {
//UnaryExpression->+ UnaryExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//UnaryExpression
var p1=Abe.Stack.pop().value;//+
var value=func_UnaryExpression_5(p1,p0);
return {
	symbolTag:Abe.Tag.UNARYEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[142]= {
//UnaryExpression->- UnaryExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//UnaryExpression
var p1=Abe.Stack.pop().value;//-
var value=func_UnaryExpression_6(p1,p0);
return {
	symbolTag:Abe.Tag.UNARYEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[143]= {
//UnaryExpression->~ UnaryExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//UnaryExpression
var p1=Abe.Stack.pop().value;//~
var value=func_UnaryExpression_7(p1,p0);
return {
	symbolTag:Abe.Tag.UNARYEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[144]= {
//UnaryExpression->! UnaryExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//UnaryExpression
var p1=Abe.Stack.pop().value;//!
var value=func_UnaryExpression_8(p1,p0);
return {
	symbolTag:Abe.Tag.UNARYEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[145]= {
//PostfixExpression->LeftSideExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//LeftSideExpression
var value=func_PostfixExpression(p0);
return {
	symbolTag:Abe.Tag.POSTFIXEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[146]= {
//PostfixExpression->LeftSideExpression ++ 
reduce: function() {
var p0=Abe.Stack.pop().value;//++
var p1=Abe.Stack.pop().value;//LeftSideExpression
var value=func_PostfixExpression_0(p1,p0);
return {
	symbolTag:Abe.Tag.POSTFIXEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[147]= {
//PostfixExpression->LeftSideExpression -- 
reduce: function() {
var p0=Abe.Stack.pop().value;//--
var p1=Abe.Stack.pop().value;//LeftSideExpression
var value=func_PostfixExpression_1(p1,p0);
return {
	symbolTag:Abe.Tag.POSTFIXEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[148]= {
//LeftSideExpression->CallExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//CallExpression
var value=func_LeftSideExpression(p0);
return {
	symbolTag:Abe.Tag.LEFTSIDEEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[149]= {
//LeftSideExpression->ShortNewExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//ShortNewExpression
var value=func_LeftSideExpression_0(p0);
return {
	symbolTag:Abe.Tag.LEFTSIDEEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[150]= {
//CallExpression->PrimaryExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//PrimaryExpression
var value=func_CallExpression(p0);
return {
	symbolTag:Abe.Tag.CALLEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[151]= {
//CallExpression->FullNewExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//FullNewExpression
var value=func_CallExpression_0(p0);
return {
	symbolTag:Abe.Tag.CALLEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[152]= {
//CallExpression->CallExpression MemberOperator 
reduce: function() {
var p0=Abe.Stack.pop().value;//MemberOperator
var p1=Abe.Stack.pop().value;//CallExpression
var value=func_CallExpression_1(p1,p0);
return {
	symbolTag:Abe.Tag.CALLEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[153]= {
//CallExpression->CallExpression Arguments 
reduce: function() {
var p0=Abe.Stack.pop().value;//Arguments
var p1=Abe.Stack.pop().value;//CallExpression
var value=func_CallExpression_2(p1,p0);
return {
	symbolTag:Abe.Tag.CALLEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[154]= {
//FullNewExpression->new FullNewSubexpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//FullNewSubexpression
var p1=Abe.Stack.pop().value;//new
var value=func_FullNewExpression(p1,p0);
return {
	symbolTag:Abe.Tag.FULLNEWEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[155]= {
//ShortNewExpression->new ShortNewSubexpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//ShortNewSubexpression
var p1=Abe.Stack.pop().value;//new
var value=func_ShortNewExpression(p1,p0);
return {
	symbolTag:Abe.Tag.SHORTNEWEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[156]= {
//FullNewSubexpression->PrimaryExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//PrimaryExpression
var value=func_FullNewSubexpression(p0);
return {
	symbolTag:Abe.Tag.FULLNEWSUBEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[157]= {
//FullNewSubexpression->FullNewExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//FullNewExpression
var value=func_FullNewSubexpression_0(p0);
return {
	symbolTag:Abe.Tag.FULLNEWSUBEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[158]= {
//FullNewSubexpression->FullNewSubexpression MemberOperator 
reduce: function() {
var p0=Abe.Stack.pop().value;//MemberOperator
var p1=Abe.Stack.pop().value;//FullNewSubexpression
var value=func_FullNewSubexpression_1(p1,p0);
return {
	symbolTag:Abe.Tag.FULLNEWSUBEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[159]= {
//ShortNewSubexpression->FullNewSubexpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//FullNewSubexpression
var value=func_ShortNewSubexpression(p0);
return {
	symbolTag:Abe.Tag.SHORTNEWSUBEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[160]= {
//ShortNewSubexpression->ShortNewExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//ShortNewExpression
var value=func_ShortNewSubexpression_0(p0);
return {
	symbolTag:Abe.Tag.SHORTNEWSUBEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[161]= {
//MemberOperator->[ Expression ] 
reduce: function() {
var p0=Abe.Stack.pop().value;//]
var p1=Abe.Stack.pop().value;//Expression
var p2=Abe.Stack.pop().value;//[
var value=func_MemberOperator(p2,p1,p0);
return {
	symbolTag:Abe.Tag.MEMBEROPERATOR,
value:value
}
}
}
ABE_LR_GRAMMARS[162]= {
//MemberOperator->. Identifier 
reduce: function() {
var p0=Abe.Stack.pop().value;//Identifier
var p1=Abe.Stack.pop().value;//.
var value=func_MemberOperator_0(p1,p0);
return {
	symbolTag:Abe.Tag.MEMBEROPERATOR,
value:value
}
}
}
ABE_LR_GRAMMARS[163]= {
//Arguments->( ArgumentList ) 
reduce: function() {
var p0=Abe.Stack.pop().value;//)
var p1=Abe.Stack.pop().value;//ArgumentList
var p2=Abe.Stack.pop().value;//(
var value=func_Arguments(p2,p1,p0);
return {
	symbolTag:Abe.Tag.ARGUMENTS,
value:value
}
}
}
ABE_LR_GRAMMARS[164]= {
//ArgumentList->ε 
reduce: function() {
var p0=Abe.Stack.pop().value;//ε
var value=func_ArgumentList(p0);
return {
	symbolTag:Abe.Tag.ARGUMENTLIST,
value:value
}
}
}
ABE_LR_GRAMMARS[165]= {
//ArgumentList->AssignmentExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//AssignmentExpression
var value=func_ArgumentList_0(p0);
return {
	symbolTag:Abe.Tag.ARGUMENTLIST,
value:value
}
}
}
ABE_LR_GRAMMARS[166]= {
//ArgumentList->ArgumentList AssignmentExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//AssignmentExpression
var p1=Abe.Stack.pop().value;//ArgumentList
var value=func_ArgumentList_1(p1,p0);
return {
	symbolTag:Abe.Tag.ARGUMENTLIST,
value:value
}
}
}
ABE_LR_GRAMMARS[167]= {
//ArrayLiteral->[ ElementList ] 
reduce: function() {
var p0=Abe.Stack.pop().value;//]
var p1=Abe.Stack.pop().value;//ElementList
var p2=Abe.Stack.pop().value;//[
var value=func_ArrayLiteral(p2,p1,p0);
return {
	symbolTag:Abe.Tag.ARRAYLITERAL,
value:value
}
}
}
ABE_LR_GRAMMARS[168]= {
//ElementList->ε 
reduce: function() {
var p0=Abe.Stack.pop().value;//ε
var value=func_ElementList(p0);
return {
	symbolTag:Abe.Tag.ELEMENTLIST,
value:value
}
}
}
ABE_LR_GRAMMARS[169]= {
//ElementList->LiteralElement 
reduce: function() {
var p0=Abe.Stack.pop().value;//LiteralElement
var value=func_ElementList_0(p0);
return {
	symbolTag:Abe.Tag.ELEMENTLIST,
value:value
}
}
}
ABE_LR_GRAMMARS[170]= {
//ElementList->ElementList , LiteralElement 
reduce: function() {
var p0=Abe.Stack.pop().value;//LiteralElement
var p1=Abe.Stack.pop().value;//,
var p2=Abe.Stack.pop().value;//ElementList
var value=func_ElementList_1(p2,p1,p0);
return {
	symbolTag:Abe.Tag.ELEMENTLIST,
value:value
}
}
}
ABE_LR_GRAMMARS[171]= {
//LiteralElement->AssignmentExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//AssignmentExpression
var value=func_LiteralElement(p0);
return {
	symbolTag:Abe.Tag.LITERALELEMENT,
value:value
}
}
}
ABE_LR_GRAMMARS[172]= {
//ObjectLiteral->{ FieldList } 
reduce: function() {
var p0=Abe.Stack.pop().value;//}
var p1=Abe.Stack.pop().value;//FieldList
var p2=Abe.Stack.pop().value;//{
var value=func_ObjectLiteral(p2,p1,p0);
return {
	symbolTag:Abe.Tag.OBJECTLITERAL,
value:value
}
}
}
ABE_LR_GRAMMARS[173]= {
//FieldList->ε 
reduce: function() {
var p0=Abe.Stack.pop().value;//ε
var value=func_FieldList(p0);
return {
	symbolTag:Abe.Tag.FIELDLIST,
value:value
}
}
}
ABE_LR_GRAMMARS[174]= {
//FieldList->LiteralField 
reduce: function() {
var p0=Abe.Stack.pop().value;//LiteralField
var value=func_FieldList_0(p0);
return {
	symbolTag:Abe.Tag.FIELDLIST,
value:value
}
}
}
ABE_LR_GRAMMARS[175]= {
//FieldList->FieldList , LiteralField 
reduce: function() {
var p0=Abe.Stack.pop().value;//LiteralField
var p1=Abe.Stack.pop().value;//,
var p2=Abe.Stack.pop().value;//FieldList
var value=func_FieldList_1(p2,p1,p0);
return {
	symbolTag:Abe.Tag.FIELDLIST,
value:value
}
}
}
ABE_LR_GRAMMARS[176]= {
//LiteralField->Identifier : AssignmentExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//AssignmentExpression
var p1=Abe.Stack.pop().value;//:
var p2=Abe.Stack.pop().value;//Identifier
var value=func_LiteralField(p2,p1,p0);
return {
	symbolTag:Abe.Tag.LITERALFIELD,
value:value
}
}
}
ABE_LR_GRAMMARS[177]= {
//FunctionExpression->AnonymousFunction 
reduce: function() {
var p0=Abe.Stack.pop().value;//AnonymousFunction
var value=func_FunctionExpression(p0);
return {
	symbolTag:Abe.Tag.FUNCTIONEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[178]= {
//FunctionExpression->NamedFunction 
reduce: function() {
var p0=Abe.Stack.pop().value;//NamedFunction
var value=func_FunctionExpression_0(p0);
return {
	symbolTag:Abe.Tag.FUNCTIONEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[179]= {
//PrimaryExpression->SimpleExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//SimpleExpression
var value=func_PrimaryExpression(p0);
return {
	symbolTag:Abe.Tag.PRIMARYEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[180]= {
//PrimaryExpression->FunctionExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//FunctionExpression
var value=func_PrimaryExpression_0(p0);
return {
	symbolTag:Abe.Tag.PRIMARYEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[181]= {
//PrimaryExpression->ObjectLiteral 
reduce: function() {
var p0=Abe.Stack.pop().value;//ObjectLiteral
var value=func_PrimaryExpression_1(p0);
return {
	symbolTag:Abe.Tag.PRIMARYEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[182]= {
//SimpleExpression->this 
reduce: function() {
var p0=Abe.Stack.pop().value;//this
var value=func_SimpleExpression(p0);
return {
	symbolTag:Abe.Tag.SIMPLEEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[183]= {
//SimpleExpression->null 
reduce: function() {
var p0=Abe.Stack.pop().value;//null
var value=func_SimpleExpression_0(p0);
return {
	symbolTag:Abe.Tag.SIMPLEEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[184]= {
//SimpleExpression->true 
reduce: function() {
var p0=Abe.Stack.pop().value;//true
var value=func_SimpleExpression_1(p0);
return {
	symbolTag:Abe.Tag.SIMPLEEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[185]= {
//SimpleExpression->false 
reduce: function() {
var p0=Abe.Stack.pop().value;//false
var value=func_SimpleExpression_2(p0);
return {
	symbolTag:Abe.Tag.SIMPLEEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[186]= {
//SimpleExpression->Number 
reduce: function() {
var p0=Abe.Stack.pop().value;//Number
var value=func_SimpleExpression_3(p0);
return {
	symbolTag:Abe.Tag.SIMPLEEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[187]= {
//SimpleExpression->String 
reduce: function() {
var p0=Abe.Stack.pop().value;//String
var value=func_SimpleExpression_4(p0);
return {
	symbolTag:Abe.Tag.SIMPLEEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[188]= {
//SimpleExpression->Identifier 
reduce: function() {
var p0=Abe.Stack.pop().value;//Identifier
var value=func_SimpleExpression_5(p0);
return {
	symbolTag:Abe.Tag.SIMPLEEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[189]= {
//SimpleExpression->RegExp 
reduce: function() {
var p0=Abe.Stack.pop().value;//RegExp
var value=func_SimpleExpression_6(p0);
return {
	symbolTag:Abe.Tag.SIMPLEEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[190]= {
//SimpleExpression->ParenthesizedExpression 
reduce: function() {
var p0=Abe.Stack.pop().value;//ParenthesizedExpression
var value=func_SimpleExpression_7(p0);
return {
	symbolTag:Abe.Tag.SIMPLEEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[191]= {
//SimpleExpression->ArrayLiteral 
reduce: function() {
var p0=Abe.Stack.pop().value;//ArrayLiteral
var value=func_SimpleExpression_8(p0);
return {
	symbolTag:Abe.Tag.SIMPLEEXPRESSION,
value:value
}
}
}
ABE_LR_GRAMMARS[192]= {
//ParenthesizedExpression->( Expression ) 
reduce: function() {
var p0=Abe.Stack.pop().value;//)
var p1=Abe.Stack.pop().value;//Expression
var p2=Abe.Stack.pop().value;//(
var value=func_ParenthesizedExpression(p2,p1,p0);
return {
	symbolTag:Abe.Tag.PARENTHESIZEDEXPRESSION,
value:value
}
}
}
