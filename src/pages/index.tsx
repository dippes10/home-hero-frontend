/* eslint-disable prettier/prettier */

import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

// Note: The subsets need to use single quotes because the font loader values must be explicitly written literal.
// eslint-disable-next-line @typescript-eslint/quotes
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Hero</title>
        <meta name="description" content="Home hero" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/house.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <div>
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/homehero.svg"
            alt="Next.js Logo"
            width={580}
            height={500}
            priority
          />
          <div className={styles.thirteen}>HOME</div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              All Services<span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              You can find a list of Services and&nbsp;Facilities.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Log In <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              login to become a part of&nbsp;us!
            </p>
          </a>

          <a
            href="https://vercel.com/templates"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Contact Us<span>-&gt;</span>
            </h2>
            <p className={inter.className}>Contact and interact with&nbsp;us</p>
          </a>

          <a
            href="https://vercel.com/new"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Get Help <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Get help from one of our&nbsp;HomeHeroes.
            </p>
          </a>
        </div>
      </main>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} minHeight={160}>
          <Grid xs display="flex" justifyContent="center" alignItems="center">
            <Avatar src="/static/images/avatar/1.jpg" />
          </Grid>
          <Grid display="flex" justifyContent="center" alignItems="center">
            <Avatar src="/static/images/avatar/2.jpg" />
          </Grid>
          <Grid xs display="flex" justifyContent="center" alignItems="center">
            <Avatar src="/static/images/avatar/3.jpg" />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
