import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://owais4077.github.io"),
  title: {
    default: "Owais Ahmad | Data Engineer",
    template: "%s | Owais Ahmad"
  },
  description:
    "World-class Data Engineer portfolio for Owais Ahmad covering Python, SQL, PySpark, Databricks, Delta Lake, ETL pipelines, Lakehouse architecture, and analytics engineering.",
  keywords: [
    "Owais Ahmad",
    "Data Engineer",
    "Data Engineer",
    "ETL Developer",
    "PySpark",
    "Databricks",
    "Delta Lake",
    "SQL",
    "Python",
    "Lakehouse"
  ],
  authors: [{ name: "Owais Ahmad" }],
  creator: "Owais Ahmad",
  alternates: {
    canonical: "/OWAIS-AHMAD-Portfolio/"
  },
  openGraph: {
    title: "Owais Ahmad | Data Engineer",
    description:
      "Premium recruiter-focused Data Engineer portfolio showcasing ETL, Databricks, PySpark, Delta Lake, analytics, and Lakehouse projects.",
    url: "https://owais4077.github.io/OWAIS-AHMAD-Portfolio/",
    siteName: "Owais Ahmad Portfolio",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Owais Ahmad | Data Engineer",
    description:
      "Data Engineer portfolio for ETL pipelines, Databricks, PySpark, SQL, Delta Lake, and analytics engineering."
  },
  robots: {
    index: true,
    follow: true
  },
  manifest: "/manifest.webmanifest"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
