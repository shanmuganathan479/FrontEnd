// Nested scope

const a = 1;

const outer = () => {
  const b = 2;
  const inner = () => {
    const c = 3;
    console.log(a, b, c);
  };
  inner();
};

outer();

// step1 - First it will try find with in scope
// step2 - Then it will try find 1 level up
// step3 - Then it will try find untill reaches the global variable

// What Does Lexical Mean?
// Lexical refers to the definition of things.

// Anything related to creating words, expressions, or variables is termed lexical.


// What is Lexical Scope in JavaScript?
// Lexical scope is the definition area of an expression.

// In other words, an item's lexical scope is the place in which the item got created.