import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '나는 어떤 유형? | 청소년 MBTI 테스트',
  description: '나만의 성격 유형을 알아보자! 청소년을 위한 쉽고 재미있는 MBTI 테스트',
  openGraph: {
    title: '나는 어떤 유형? | 청소년 MBTI 테스트',
    description: '나만의 성격 유형을 알아보자! 청소년을 위한 쉽고 재미있는 MBTI 테스트',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
