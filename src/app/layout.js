import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const env = process.env.NODE_ENV;

export const metadata = {
  metadataBase: new URL(
    env === "development" ? "http://localhost:3000" : process.env["HOST"]
  ),
  openGraph: {
    title: "ExpenseMaster: Your Ultimate Financial Tracking Solution",
    description:
      "Effortlessly manage your finances with our intuitive expense tracking web application. Track expenses, create budgets, and analyze spending patterns all in one place. Stay organized with receipt scanning, customizable categories, and real-time updates. Simplify your financial management and take control of your expenses today!",
    images: [
      {
        url: "/images/budget.png", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "ExpenseMaster",
      },
    ],
    type: "website",
    locale: "en_US",
    url: env === "development" ? "http://localhost:3000" : process.env["HOST"],
    siteName: "ExpenseMaster",
  },
  title: "ExpenseMaster: Your Ultimate Financial Tracking Solution",
  icons: {
    icon: { url: "/images/budget.png", href: "/images/budget.png" },
  },
  generator: "ExpenseMaster",
  applicationName: "ExpenseMaster",
  referrer: "origin-when-cross-origin",
  creator: "Karan Singh Paul",
  publisher: "Karan Singh Paul",
  manifest: "/manifest.json",
  description:
    "Effortlessly manage your finances with our intuitive expense tracking web application. Track expenses, create budgets, and analyze spending patterns all in one place. Stay organized with receipt scanning, customizable categories, and real-time updates. Simplify your financial management and take control of your expenses today!",
  keywords:
    "Expense tracking,Budget management,Financial management,Expense categorization,Receipt scanning,Expense reports,Transaction history,Expense analytics,Expense sharing,Multi-currency support,Expense reminders,Cloud-based expense storage,Mobile expense tracking,Expense approval workflow,Real-time expense tracking,Expense notifications,Tax deductions,Expense synchronization,Customizable expense categories,Secure payment integration",
};
export const viewport = {
  themeColor: "#E75B4C",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
