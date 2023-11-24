import type { Metadata } from "next";
import "./globals.css";
import { UiProviders } from "../../chakraProvider";
import { ReduxProvider } from "./redux/reduxProvider";

export const metadata: Metadata = {
  title: "mimo downloader",
  description: "Download MP3 of your favourite vidoes from Youtube",
  keywords: [
    "Download",
    "youtube",
    "tiktok",
    "music downloader",
    "vidoe downloader",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <UiProviders>{children}</UiProviders>
        </ReduxProvider>
      </body>
    </html>
  );
}
