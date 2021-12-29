import React, { useState } from 'react';
import Navbar from '../shared/Navbar/Navbar';
import Cards from './Cards/Cards';
import CreateJob from './CreateJob/CreateJob';
import Jobs from './Jobs/Jobs';
import SearchItems from './SearchItems/SearchItems';

const Home = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Navbar />
            <Cards />
            <CreateJob open={open} setOpen={setOpen} />
            <SearchItems />
            <Jobs />
        </>
    );
};

export default Home;