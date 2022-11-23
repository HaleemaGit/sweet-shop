import Image from 'next/image'
import type { ReactNode } from 'react';
import { Header } from './header';



type LayoutProps = {
  readonly children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <main className="h-full w-full bg-white py-5 px-4 flex flex-col items-center justify-center">
      {/* <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 self-center mb-10">
        WELCOME TO </h1>
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 self-center">`FRIZZLE AND GIGGLE SWEET LOUNGE`
      </h1> */}
      {children}
    </main>
  </>
);