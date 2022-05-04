import Head from 'next/head'
import Image from 'next/image'
import {refreshlist} from './api/functions.js';
import { IconButton, Input } from '@chakra-ui/react'
import { MdMenuBook, MdRefresh, MdSearch } from 'react-icons/md'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import { ViewOffIcon } from '@chakra-ui/icons';


export default function Home(data) {
  return (
    <div>
      <Head>
        <title>Mangalinks</title>
        <meta name="description" content="Database for Mangalinks" />
        <link rel="icon" href="/Final.jpg" />
      </Head>

      <main>
        <ul id="nav">
          <div><IconButton colorScheme="purple" aria-label='Books' icon={<MdMenuBook />} /></div>
          <div><IconButton onClick={() => refreshlist(data)} colorScheme="purple" aria-label='Refresh' icon={<MdRefresh />} /></div>
          <div><Input focusBorderColor="purple.500" variant='outline' placeholder='Search' /></div>
          <div><IconButton colorScheme="purple" aria-label='Search database' icon={<MdSearch />} /></div>
        </ul>
        <div id="core">
          <table variant='striped' colorScheme='blackAlpha'>
            <tbody id="tablebody">

            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}


export async function getServerSideProps(){
  const puppeteer = require('puppeteer');

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://mangadex.org/search?q=naruto');

  await page.waitFor(5000);
  
  const title = await page.evaluate( () => {
    const text = document.getElementsByClassName("title");

    const getTitle = Array.from(text).map(v => v.lastChild.textContent);

    return getTitle;
  });

  const thumb = await page.evaluate( () => {
    const th = document.querySelectorAll('img[alt="Cover image"]');

    const getThumb = Array.from(th).map(v => v.src);

    return getThumb;
  });

  const link = await page.evaluate( () => {
    const lk = document.getElementsByClassName("title");

    const getLink = Array.from(lk).map(v => v.href);

    return getLink;
  });

  await browser.close();

  return {
    props: {title, thumb, link}, // will be passed to the page component as props
  }
}