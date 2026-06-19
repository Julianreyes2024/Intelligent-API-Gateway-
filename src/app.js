
// punto de entrada de la aplicación que va a tener dependencias a los demás módulos, requisitos de otros archivos, etc.
const { emailTemplate } = require('./js-foundation/01-template');/* sintaxis tradicional de importaciones en nodejs*/

//console.log(emailTemplate);
const { emailTemplate } = require('./js-foundation/02-destructuring');
const { emailTemplate } = require('./js-foundation/03-callbacks');


