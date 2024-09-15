import React, { useState,useEffect} from 'react';
import DataFetcher from './DataFetcher';

export default function TestWeather(){
    return <div className="container">
        <DataFetcher />
    </div>;
}