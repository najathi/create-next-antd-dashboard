import './globals.css'
import { Inter } from 'next/font/google'
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { __APP_NAME__ } from '@/lib/constants';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: __APP_NAME__,
  description: 'Generated by @najathi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  )
}
