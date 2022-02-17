import NextAuth from "next-auth";
// import FacebookProvider from "next-auth/providers/facebook";
// import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
// import EmailProvider from "next-auth/providers/email";

export default NextAuth({
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
		// FacebookProvider({
		// 	clientId: process.env.FACEBOOK_ID,
		// 	clientSecret: process.env.FACEBOOK_SECRET,
		// }),
		// GoogleProvider({
		// 	clientId: process.env.GOOGLE_ID,
		// 	clientSecret: process.env.GOOGLE_SECRET,
		// }),
		// 	EmailProvider({
		// 		server: {
		// 			host: process.env.EMAIL_SERVER_HOST,
		// 			port: process.env.EMAIL_SERVER_PORT,
		// 			auth: {
		// 				user: process.env.EMAIL_SERVER_USER,
		// 				pass: process.env.EMAIL_SERVER_PASSWORD,
		// 			},
		// 		},
		// 		from: process.env.EMAIL_FROM,
		// 	}),
	],
});
