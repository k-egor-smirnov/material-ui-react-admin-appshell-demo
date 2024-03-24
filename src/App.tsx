import {
    defaultLightTheme,
    defaultDarkTheme,
    AdminUI,
    AdminContext,
    Loading,
    localStorageStore,
    defaultI18nProvider,
    ResourceProps,
    Resource,
} from 'react-admin';
import { useEffect, useState } from 'react';

const store = localStorageStore();

function App() {
    const [resources, setResources] = useState<ResourceProps[]>([]);
    const [dataProvider, setDataProvider] =
        useState<typeof import('./dataProvider').default>();

    useEffect(() => {
        Promise.all([import('./Resources'), import('./dataProvider')]).then(
            ([_resources, _dataProvider]) => {
                setResources(_resources.default);
                setDataProvider(_dataProvider.default);
            }
        );
    }, []);

    return (
        <AdminContext
            dataProvider={dataProvider}
            lightTheme={defaultLightTheme}
            i18nProvider={defaultI18nProvider}
            darkTheme={defaultDarkTheme}
            store={store}
        >
            <AdminUI ready={Loading}>
                {resources.map(resource => {
                    return <Resource {...resource} />;
                })}
            </AdminUI>
        </AdminContext>
    );
}

export default App;
