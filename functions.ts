function addNumber(a: number, b: number): number {
  return a + b;
}

export default addNumber;

export const addStrings = (str1: string, str2: string = "fuck"): string =>
  `${str1} ${str2}`;

export const format = (title: string, param: number | string): string =>
  `${title} ${param}`;

export const format2 = (title: string, param: number | string): string =>
  (title + " " + param).toString();

export const printFormat = (title: string, param: number | string) =>
  console.log((title + " " + param).toString());

export const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Data from ${url}`);

  export const introduce = (salutation: string, ...names: string[]):string => {
    return `${salutation} ${names.join(" ")}`;
  }

