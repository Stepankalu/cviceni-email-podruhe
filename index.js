// const goodbye = (name) => {
//   return 'S pozdravem ' + name;
// };

// const formalGoodbye = (formalName) => {
//   return 'S přáním krásného dne' + formalName;
// }

// const rudeGoodbye = (rudeName) => {
//   return 'Tak sbohem vole' + rudeName;
// }

// const fillSubject = (subject) => {
//   document.querySelector('.email__subject').textContent = subject;
// };

// const fillBody = (body, name, goodbyeFunction) => {
//   const bodyElm = document.querySelector('.email__body');
//   bodyElm.innerHTML = body;
//   const closingElm = document.querySelector('.email__closing');
//   closingElm.textContent = goodbyeFunction(name);
// };

const goodbye = (name) => {
  return 'S pozdravem ' + name;
};

const formalGoodbye = (name) => {
  return 'S uctivou poklonou ' + name;
};

const rudeGoodbye = (name) => {
  return 'Se měj. ' + name;
};

const fillSubject = (subject) => {
  document.querySelector('.email__subject').textContent = subject;
};

const fillBody = (body, name, goodbyeFunction) => {
  const bodyElement = document.querySelector('.email__body');
  bodyElement.innerHTML = body;
  const closingElement = document.querySelector('.email__closing');
  closingElement.textContent = goodbyeFunction(name);
};