import Head from 'next/head';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { OverviewLatestOrders } from 'src/sections/overview/overview-latest-orders';
import { ChangeEvent, useState } from "react";
import { BooksSearch } from 'src/sections/books/book-search';

import {
  Box,
  Button,
  Container,
  Pagination,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { BookCard } from 'src/sections/books/book-card';
import { CompaniesSearch } from 'src/sections/companies/companies-search';

const books = [
    {
      id:0,
      name: 'Book1',
      author : 'Daniel',
      username  : 'Nouha',
      logo: '/assets/logos/logo-dropbox.png',
      email  : 'nouha@gmail.com',


     
    },
    {
        id:1,
        name: 'Book2',
        author : 'Arthur',
        username  : 'Nouha',
        email  : 'nouha@gmail.com',
        logo: '/assets/logos/logo-dropbox.png',
  
  
       
      }, {
        id:2,
        name: 'Book3',
        author : 'Daniel',
        Username  : 'Manar',
        email  : 'nouha@gmail.com',
        logo: '/assets/logos/logo-dropbox.png',
  
  
       
      }, 
]

const Page = () => (
  <>
    <Head>
      <title>
        Books | admin
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={3}>
          <Stack
            direction="row"
            justifyContent="space-between"
            spacing={4}
          >
            <Stack spacing={1}>
              <Typography variant="h4">
                Books
              </Typography>
              <Stack
                alignItems="center"
                direction="row"
                spacing={1}
              >
               
               
              </Stack>
            </Stack>
          </Stack>
          <BooksSearch />

          <Grid
            container
            spacing={3}
          >
            {books.map((book) => (
              <Grid
                xs={12}
                md={6}
                lg={4}
                key={book.id}
              >
                <BookCard book={book} />
              </Grid>
            ))}
            
          </Grid>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Pagination
              count={3}
              size="small"
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
