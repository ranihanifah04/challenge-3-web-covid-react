import React from 'react'
import {Switch, Route} from 'react-router-dom';

import Beranda from '../Beranda';
import tentangSaya from '../tentangsaya';
import info from '../info';
import pencegahan from '../pencegahan';
import data from '../data';

const Utama = () => (
    <Switch>
        <Route exact path="/" component={Beranda} />
        <Route path="/tentangsaya" component={tentangSaya} />
        <Route path="/info" component={info} />
        <Route path="/pencegahan" component={pencegahan} />
        <Route path="/data" component={data} />
    </Switch>
)

export default Utama;