import * as React from 'react';

import {createRoot} from 'react-dom/client';

import Shell from './Components/Shell/Shell'
import Form from './Components/Form/Form';
import Info from './Components/Info/Info';

function App () {
    return (
        <Shell>
            <Form />
            <Info />
        </Shell>
    );
}

createRoot(document.getElementById('root')).render(<App />);
