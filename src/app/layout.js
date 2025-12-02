import './globals.css'; // 👈 THIS IS THE MAGIC LINE YOU WERE LIKELY MISSING

export const metadata = {
  title: 'TechNaam Identity',
  description: 'Digital Visiting Card System',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}