import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
const dea = process.env.GITHUB_ID;
import axios from "axios";
// const router = useRouter();
const handler = NextAuth({
  providers: [
    GitHubProvider(
      {
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      },
    ),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "jsmith9@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        var user;
        await axios
          .post(`https://server-nova.vercel.app/User/sign-in`, {
            email: credentials.email,
            password: credentials.password,
          })
          .then((res) => {
            user = res.data.user;
          })
          .catch((err) => {
            throw new Error("Invalid credentials");
          });
        return user;
      },
    }),
  ],
  callbacks: {
    async signIn({user, account, profile, email}) {
      var documentGitHub = true
      var userProviderData
      // console.log("Account: ",account, "\n")
      // console.log("Profile: ",profile, "\n")
      // console.log("User SignIn: ",user, "\n")
      // console.log("Email: ",email, "\n")
      if(account.provider == 'github'){
        console.log("SignIn by Github")
        await axios.post("https://server-nova.vercel.app/User/providerGitHubExist", {email: user.email})
        .then((response) => {
          documentGitHub = response.data.find
        }).catch((error) => {
          documentGitHub = false
        })
        if(!documentGitHub) {
          await axios
            .post(`https://server-nova.vercel.app/User/sign-up`, {
              picture: profile.avatar_url,
              username: profile.login,
              email: user.email,
              password: account.providerAccountId,
            })
            .then((res) => {
              console.log("Success:")
            })
            .catch((err) => {
              console.log("Failed: ", err)
              // throw new Error("Invalid credentials");
            });
        }
        await axios
        .post(`https://server-nova.vercel.app/User/sign-in`, {
          email: user.email,
          password: account.providerAccountId,
        })
        .then((res) => {
          // console.log("CARGADO: ", res.data.user)
          userProviderData=res.data.user
        })
        .catch((err) => {
          console.log(err)
        });
        user.server = userProviderData
      }
      return true;
    }, 
    async jwt({ token, user }) {
      if (user) {
        if(user.server) {
          token.user = user.server
        }
        else {
          token.user = user
        }
      }
      return token;
    },
    async session({ session, user, token }) {
      // console.log("Session: ",session, "\n")
      // console.log("User: ",user, "\n")
      // console.log("Token: ",token, "\n")

      session = token;
      return session;
    },
    async redirect({ url, baseUrl }) {
      console.log("URL: ", url, "\n")
      console.log("BaseURL: ", baseUrl, "\n")
      const destinationPage = `${baseUrl}/me/dashboard`
      return destinationPage;
    },
  },
});

export { handler as GET, handler as POST };
