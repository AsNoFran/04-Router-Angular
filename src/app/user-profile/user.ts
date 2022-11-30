export class User {
  name: string;
  age: number;
  quote: string;
  image: string;

  constructor(name: string, age: number, quote: string, image: string) {
    this.name = name;
    this.age = age;
    this.quote = quote;
    this.image = image;
  }
}
