import React, { Fragment } from 'react'
import Tracks from '../tracks/Tracks'
import Search from '../tracks/Search';

function Index() {
    return (
        <div>
            <Fragment>
                <Search/>
                <Tracks/>
            </Fragment>
        </div>
    )
}

export default Index;