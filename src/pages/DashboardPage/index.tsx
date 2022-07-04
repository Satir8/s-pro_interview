import React from "react";
import { Layout, PageTitle, CarList } from "components";
import { mockedCars } from "./mockData";

const DashboardPage = () => {
  return (
    <Layout>
      <PageTitle title='Dashboard' />
      <CarList list={mockedCars} />
    </Layout>
  );
};

export default DashboardPage;
