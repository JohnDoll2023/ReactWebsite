import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "John Doll",
  description: "Created by and about John Doll",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <nav className="width-full flex flex-row text-center items-center">
          <Link href="/" className="mx-10">
            <img src="/doll.jpg" alt="John Doll" width={50} height={50} />
          </Link>
          <Link href="/" className="mx-10">Home</Link>
          <Link href="/projects" className="mx-10">Projects</Link>
          <Link href="/resume" className="mx-10">Resume</Link>
          <Link href="/education" className="mx-10">Education</Link>
          <Link href="/experience" className="mx-10">Experience</Link>
          <Link href="/1se" className="mx-10">1SE</Link>
          <Link href="/blog" className="mx-10">Blog</Link>
          <Link href="/contact" className="mx-10">Contact Me</Link>
        </nav>
        {children}
        <footer className="width-full bg-gradient-to-b to-cyan-300 from-white">
          <div className="flex flex-col items-center">
              <ul className="flex flex-row">
                <li className="mx-2">
                    <a href="https://www.youtube.com/channel/UCm9XHfS8Zkr9vs9REP0_T_Q" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                    </a>
                </li>
                <li className="mx-2">
                    <a href="https://www.linkedin.com/in/johnmdoll" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                </li>
                <li className="mx-2">
                    <a href="https://www.instagram.com/professordoll/" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 500 500"><path className="cls-1" d="M250,193.27A56.73,56.73,0,1,0,306.73,250,56.8,56.8,0,0,0,250,193.27Z"/><path className="cls-1" d="M316.74,105.49H183.26a77.86,77.86,0,0,0-77.77,77.77V316.74a77.86,77.86,0,0,0,77.77,77.77H316.74a77.86,77.86,0,0,0,77.77-77.77V183.26A77.86,77.86,0,0,0,316.74,105.49ZM250,336.7A86.7,86.7,0,1,1,336.7,250,86.8,86.8,0,0,1,250,336.7Zm95.27-160.26A21.41,21.41,0,1,1,366.68,155,21.41,21.41,0,0,1,345.27,176.45Z"/><path className="cls-1" d="M484.85,124.74a144.17,144.17,0,0,0-2.32-25.29c-1.94-10.19-4.67-20.12-9.55-29.33A101.84,101.84,0,0,0,453.39,44a97.14,97.14,0,0,0-42.76-24.4c-14.83-4-30-4.84-45.21-4.82a.46.46,0,0,1-.09-.23H134.59c0,.08,0,.16,0,.23-8.65.16-17.32.09-25.92,1.16A123.46,123.46,0,0,0,81,22.14,97.48,97.48,0,0,0,44.25,46.26,97.15,97.15,0,0,0,19.68,89.17c-3.94,14.72-4.8,29.73-4.82,44.85L14.7,365.69v0c.28,10.45.37,21,2.13,31.36,1.87,11,4.54,21.71,9.64,31.69A101.36,101.36,0,0,0,54.77,463a91.91,91.91,0,0,0,28.31,15.35c15.12,4.88,30.72,6.75,46.55,6.84,9.88.06,19.74.31,29.62.27,71.74-.3,143.49.52,215.23-.44a169.32,169.32,0,0,0,28.23-3A95.61,95.61,0,0,0,450,459c15.78-14.08,26.43-31.3,31.24-52.09,3.15-13.59,3.93-27.38,4.07-41.21v-2.76C485.3,361.86,484.89,127.84,484.85,124.74Zm-60.38,192A107.87,107.87,0,0,1,316.74,424.48H183.26A107.87,107.87,0,0,1,75.52,316.74V183.26A107.87,107.87,0,0,1,183.26,75.52H316.74A107.87,107.87,0,0,1,424.48,183.26Z"/></svg>
                    </a>
                </li>
                <li className="mx-2">
                    <a href="https://github.com/JohnDoll2023" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                </li>
                <li className="mx-2">
                    <a href="https://www.strava.com/athletes/59946814" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169"/></svg>
                    </a>
                </li>
                <li className="mx-2 brightness-0">
                    <a href="https://leetcode.com/JohnDoll2023/" target="_blank">
                        <img src="/leetcode.png" id="leetcode" alt="Leetcode" width="21" height="24"/>
                    </a>
                </li>
              </ul>
              <p className="text-sm mt-1">&copy; {new Date().getFullYear()} John Doll </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
