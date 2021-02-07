import React, {useState} from 'react';
import './App.css';
/*Redux*/
import configureStore from "./domain/redux/store";
import {Provider} from "react-redux";
import AppRouter from "./routers/appRouter";
import {IntlProvider} from 'react-intl';
import messages from "./messages";

const {store} = configureStore();

function App() {
    const [locale, setLocale] = useState('es');

    return (
        <Provider store={store}>
            <IntlProvider locale={locale} messages={messages[locale]}>
                <AppRouter setLocale={setLocale} />
            </IntlProvider>
        </Provider>
    );
}

export default App;
