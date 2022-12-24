console.log("Hello World!\n");
const a = 'Mg==';
const b = 'MTA=';
const a_n = Number(Buffer.from(a, 'base64').toString('ascii'));
const b_n = Number(Buffer.from(b, 'base64').toString('ascii'));
console.log(Math.pow(a_n,b_n));

