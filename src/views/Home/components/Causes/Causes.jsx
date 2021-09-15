import React from 'react';
import {ProgressBar} from 'react-bootstrap'

const Causes = () => {
    return (
        <section className="cause">
              <ProgressBar animated variant="success" now={40} />

        </section>
    );
};

export default Causes;