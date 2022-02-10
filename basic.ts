let username: string = "Jas";
let hasLoggedIn: boolean = true;

username += " Palermo";

console.log(username);

const names: string[] = username.split(" ");
const myValues: Array<number> = [1, 2, 2];

interface Person {
  first: string;
  last: string;
}

const myPerson: Person = {
  first: "Jas",
  last: "Palermo",
};

myPerson.first = "jas";
console.log(myPerson.first);

const ids: Record<number, string> = {
  10: "a",
  20: "b",
};
ids[30] = "c";

for (let i = 0; i < 10; i++) {
  console.log(i);
}

[1, 2, 3].forEach((v) => console.log(v, "sex"));
const out = [4, 5, 6].map((v) => v * 10);
console.log(out);