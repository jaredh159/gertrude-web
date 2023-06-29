import React from 'react';
import Link from 'next/link';
import { Logo } from '@shared/components';

const MainFooter: React.FC = () => (
  <footer className="bg-slate-900">
    <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-start p-8 xs:p-12">
      <Link href="/">
        <Logo type="inverted" />
      </Link>
      <div className="flex space-x-12 mt-10 sm:mt-0">
        <ul className="flex flex-col space-y-3 flex-grow">
          <li>
            <FooterLink href="/download">Download</FooterLink>
          </li>
          <li>
            <FooterLink href="/docs">Documentation</FooterLink>
          </li>
          <li>
            <FooterLink href="/contact">Contact us</FooterLink>
          </li>
        </ul>
        <ul className="flex flex-col space-y-3 flex-grow">
          <li>
            <FooterLink href="https://dash.gertrude.app/signup">Signup</FooterLink>
          </li>
          <li>
            <FooterLink href="https://dash.gertrude.app">Login</FooterLink>
          </li>
          <li>
            <FooterLink href="/blog">Blog</FooterLink>
          </li>
        </ul>
      </div>
    </div>
    <div className="flex justify-center items-center p-6 pt-0">
      <p className="text-slate-700 text-lg">© {new Date().getFullYear()} NetRivet Inc.</p>
    </div>
  </footer>
);

export default MainFooter;

interface FooterLinkProps {
  children: React.ReactNode;
  href: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ children, href }) => {
  const Element = href.startsWith(`https://`) ? `a` : Link;
  return (
    <Element
      href={href}
      className="text-slate-600 hover:text-slate-500 transition duration-100 p-1 text-lg"
    >
      {children}
    </Element>
  );
};
