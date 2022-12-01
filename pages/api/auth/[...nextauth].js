import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import db from "../../../database";

const authOptions = {
   providers: [
   CredentialsProvider({
     name: "Credentials",
     credentials: {
       username: { label: "User", type: "text", placeholder: ".." },
       email: { label: "email", type: "email" }
     },
     async authorize(credentials, req) {
       const user = await db.User.create({
         name: credentials.username,
         email: credentials.email
       })
       if (user) {
         // Any object returned will be saved in `user` property
         console.log('user in auth ', user)
         return user
       } else {
         // If you return null then an error will be displayed
         return null
       }
     }
   })
 ],
  secret: 'secret', //protects our connection
};
export default NextAuth(authOptions);
