/*
 * Para criar: name, email, password
 */

interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string;
  email: string;
  password: string;
  techs: Array<string | TechObject>;
}

export default function ({ name, email, password }: CreateUserData) {
  return {
    name,
    email,
    password,
  };
}
