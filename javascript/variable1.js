//Types of Varibale
/*1.Implicit global-global scope
2.Var- global+function scope
3.let-block scope
4.const-block scope*/

{
    let b=1;
    {
        console.log(b);
    }
}

{
    //console.log(b);
}