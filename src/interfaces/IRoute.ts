import React from 'react';

export default interface IRoute {
    path: string;
    component: any;
    layout?: any;
}