import "./globals.css";
import Providers from "./Providers";

export const metadata = {
  title: "Nova-App",
  description: "Creating application by XxJmsergexX",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
