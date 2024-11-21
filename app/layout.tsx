import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.layer.css'
import './global.css';
import { OpenInfoHandler } from './open-info-handler';
import { Suspense } from 'react';
import { cookies } from 'next/headers';

export const metadata = {
  title: 'NextGram',
  description:
    'A sample Next.js app showing dynamic routing with modals as a route.',
};

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function RootLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  const cookieStore = cookies()
  const infoUrl = cookieStore.get('info')?.value

  return (
    <html>
      <body> 
      <MantineProvider theme={theme}>
        <Suspense fallback={null}>
          <OpenInfoHandler url={infoUrl} />
        </Suspense>
        {props.modal}
        {props.children}
      </MantineProvider>
      </body>
    </html>
  );
}
