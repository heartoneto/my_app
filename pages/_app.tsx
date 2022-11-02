import React, { Component, ReactNode, useState } from 'react';
import type { AppProps } from 'next/app';
import { useBoolean } from 'usehooks-ts';

// rsuite styles
import 'rsuite/dist/rsuite.min.css';
import { CustomProvider } from 'rsuite';
export interface MyAppProps {
  children: ReactNode,
  activeKey: string,
  expandedMenu: boolean,
  title: string,
};

type Theme = 'light' | 'dark';

export default function App({ Component, pageProps }: MyAppProps & AppProps) {
  const expandedMenuState = useBoolean(pageProps.expandedMenu);
  const [theme, setTheme] = useState<Theme>('light');

  return (
    < CustomProvider theme={theme}>
      <Component {...pageProps} />
    </CustomProvider>
  );

  // return <Component {...pageProps} />;
}
