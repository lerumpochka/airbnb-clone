import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import db from "../../../database";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "your username..." },
        password: { label: "Password", type: "password", placeholder: "your password" },
      },
      async authorize(credentials, req) {
        const user = await db.User.create({
          name: credentials.username,
          email: credentials.password,
        });
        console.log("fda", user);
        if (user) {
          // Any object returned will be saved in `user` property
          console.log("user in auth ", user);
          return user;
        } else {
          // If you return null then an error will be displayed
          return null;
        }
      },
    }),
  ],
  secret: "secret", //protects our connection
};
export default NextAuth(authOptions);
