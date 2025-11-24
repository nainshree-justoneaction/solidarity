import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Solidarity",
  description: "Unified platform for students, mentors, parents, counsellors, institutes & companies",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
