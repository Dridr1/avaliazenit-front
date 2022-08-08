import jwt from "jsonwebtoken";

const token = jwt.sign({nome: "Adriano"}, "olavadia");

console.log(jwt.decode(token));

