require('./bootstrap');
import React from 'react';
import ReactRenderer from './src/ReactRenderer';

import TestComponent from './src/components/TestComponent';

const components = [
    {
        name: "TestComponent",
        component: <TestComponent/>,
    },
];

new ReactRenderer(components).renderAll();
