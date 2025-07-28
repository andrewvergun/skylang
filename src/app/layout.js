import "@/styles/globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CookieBanner from "@/components/CookieBanner/CookieBanner";

export const metadata = {
    title: "Language School",
    description: "Мовна школа онлайн",
};

export default function RootLayout({children}) {
    return (
        <html lang="uk">
        <body>
        <Header/>
        {children}
        <Footer/>
        <CookieBanner/>
        </body>
        </html>
    );
}