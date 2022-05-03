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

export default function Home() {
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
          <div><IconButton onClick={refreshlist} colorScheme="purple" aria-label='Refresh' icon={<MdRefresh />} /></div>
          <div><Input focusBorderColor="purple.500" variant='outline' placeholder='Search' /></div>
          <div><IconButton colorScheme="purple" aria-label='Search database' icon={<MdSearch />} /></div>
        </ul>
        <div id="core">
        <TableContainer>
          <Table variant='striped' colorScheme='blackAlpha'>
            <Thead>
              <Tr>
                <Th>Title</Th>
                <Th>Thumbnail</Th>
                <Th>Link</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr className='holder'>
                <Td className='title'>Naruto</Td>
                <Td className='thumb'>https://</Td>
                <Td className='link'>https://</Td>
              </Tr>
              <Tr className='holder'>
                <Td className='title'>Naruto</Td>
                <Td className='thumb'>https://</Td>
                <Td className='link'>https://</Td>
              </Tr>
              <Tr className='holder'>
                <Td className='title'>Naruto</Td>
                <Td className='thumb'>https://</Td>
                <Td className='link'>https://</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        </div>
      </main>
    </div>
  )
}
