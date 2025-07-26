import '../styles/global.css';
import ThemeProviders from '../components/ThemeProviders';

export const metadata = {
  title: 'Your Site Title',
  description: 'Your site description',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProviders>
          {children}
        </ThemeProviders>
      </body>
    </html>
  );
}