import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
const dea = process.env.GITHUB_ID
import axios from "axios";
import { useRouter } from "next/navigation";

// const router = useRouter();


const handler = NextAuth({
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET    
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
              email: { label: "email", type: "email", placeholder: "jsmith9@gmail.com" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req){
                var user;
                await axios.post(`https://server-nova.vercel.app/User/sign-in`, {
                    email: credentials.email,
                    password: credentials.password
                }).then((res) => {
                    user = res.data.user
                }).catch((err) => {
                    throw new Error("Invalid credentials");
                })
                return user
            }
        })
    ], callbacks: {
        async jwt({token, user}){
            console.log(token)
            if(user) token.user = user;
            return token
        },
        async session({session, token}){
            // console.log(".....Token: ", token, "\n\n......................\n\n")
            session = token
            return session
        },
        async redirect({url, baseUrl}){
            console.log("------\n\nUrl: ",url)
            return baseUrl
        }
    },
    pages: {
        signIn: "/signin",
      },
})


export { handler as GET, handler as POST }