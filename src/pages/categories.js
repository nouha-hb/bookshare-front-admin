import Head from 'next/head';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { OverviewLatestOrders } from 'src/sections/overview/overview-latest-orders';
import { ChangeEvent, useState } from "react";
import TextField from '@mui/material/TextField';

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
import { CategoryCard } from 'src/sections/categories/categorie-card';
import { CompaniesSearch } from 'src/sections/companies/companies-search';

const categories = [
    {
      id:0,
      name: 'Horror',
      nbbooks: '4',
     
    },
    {
        id:1,
        name: 'romance',
        nbbooks: '5',
    },
    {
        id:1,
        name: 'action',
        nbbooks: '5',
    },
    {
        id:1,
        name: 'drama',
        nbbooks: '5',
    },
]

const Page = () => (
  <>
    <Head>
      <title>
        Categories | admin
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
                Categories
              </Typography>
              <Stack
                alignItems="center"
                direction="row"
                spacing={1}
              >
               
               
              </Stack>
            </Stack>
            <div>
            <Stack 
            direction="row"
            spacing={2}>
                
            
              <TextField id="outlined-basic" label="Add category " variant="outlined" />
                <Button
                  startIcon={(
                    <SvgIcon fontSize="small">
                      <PlusIcon />
                    </SvgIcon>
                  )}
                  variant="contained"
                >
                  Add
                </Button>
            
              </Stack>
            </div>
          </Stack>
       
          <Grid
            container
            spacing={3}
          >
            {categories.map((category) => (
              <Grid
                xs={12}
                md={6}
                lg={4}
                key={category.id}
              >
                <CategoryCard category={category} />
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
