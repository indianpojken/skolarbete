interface Name {
  title: string,
  first: string,
  last: string,
}

interface User {
  name: Name,
  email: string,
  nat: string,
}

enum Gender {
  Male,
  Female
}

export { User, Gender }
