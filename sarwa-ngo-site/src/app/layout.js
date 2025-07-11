import "./globals.css";

export const metadata = {
  title: 'SARWA NGO',
  description: 'Empowering lives since 2006',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

