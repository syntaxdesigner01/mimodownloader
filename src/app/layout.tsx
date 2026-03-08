import type { Metadata } from "next";
import "./globals.css";
import { ReduxProvider } from "./redux/reduxProvider";

export const metadata: Metadata = {
  title: "mimoYT",
  description: "Download MP3 and MP4 of your favourite videos from YouTube",
  keywords: [
    "downloader",
    "youtube",
    "video downloader",
    "music downloader",
    "mp3",
    "mp4",
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
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
