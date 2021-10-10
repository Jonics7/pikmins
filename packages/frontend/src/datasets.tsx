import { createContext, useState } from 'react';
import { Dataset } from 'common';
import { useMemo } from 'react';

import Datasets from './Data/Datasets.json';

export interface DatasetsContextType {
    datasets?: Dataset[];
}

export const DatabasesContext = createContext<DatasetsContextType>({});

export const DatabasesProvider: React.FC = ({ children }) => {
    const [datasets, setDatasets] = useState<Dataset[] | undefined>();

    useMemo(() => {
        fetch('http://localhost:5000/datasets', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setDatasets((data as Dataset[]).concat(Datasets as Dataset[]));
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <DatabasesContext.Provider value={{ datasets }}>
            {datasets !== undefined ? children : null}
        </DatabasesContext.Provider>
    );
};
