/* 
    var
    - Allows variable re-declaration
    - Allows variable update
    - Global scope
*/
var a = 12;
var a = "A string";
var a = true;

/*
    let
    - Does not allow variable redeclaration
    - Allows variable update
    - Block scope
*/
{
    let b = 56.55;
    console.log(b);
}
// The follwing line will throw error
//console.log(b);

/*
    const
    - Does not allow variable redeclaration
    - Does not allow variable update
    - Block scope
*/
{
    const c = 3.14;
    console.log(c);
}
// The follwing line will throw error
//console.log(c);