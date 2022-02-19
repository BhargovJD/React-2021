import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@gmain.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: true,
  },

  {
    name: "lama",
    email: "l@gmain.com",
    password: bcrypt.hashSync("12345", 10),
  },

  {
    name: "Dev",
    email: "d@gmain.com",
    password: bcrypt.hashSync("12345", 10),
  },
];

export default users;
