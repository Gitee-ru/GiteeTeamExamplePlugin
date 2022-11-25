import React, { useEffect, Suspense, useMemo } from 'react';
import { MemoryRouter, Switch, Route, useHistory } from 'react-router-dom';
import { ConfigProvider, message } from '@osui/ui';
import { PluginSDKContext } from '@projectproxima/plugin-sdk';
import { NavLinksProvider } from '@/components/NavLinksProvider';

const rootElement = 'ExamplePlugin';

message.config({
  getContainer: () =>
    /*document.getElementById('osc-proxima') || */ document.getElementById(rootElement),
});

import routes from './routes';

const navLinks = routes.map(({ path, label }) => ({ path, label }));

interface QiankunContextProps {
  setGlobalState?: (data: { data: any }) => void;
  Parse?: any;
  onRefreshContext?: any;
}

export const QiankunContext = React.createContext({} as QiankunContextProps);

const GoPropsRoute = props => {
  const history = useHistory();

  useEffect(() => {
    console.info('子应用接收route:', props?.route);
    // 跳转渲染指定的路由
    if (props?.route) {
      history.push(props?.route);
    }
  }, []);

  return null;
};

const App: React.FC = props => {
  const qiankunContextValue: any = useMemo(
    () => ({
      ...props,
    }),
    [props],
  );

  return (
    <PluginSDKContext.Provider value={qiankunContextValue.sdk}>
      <ConfigProvider getPopupContainer={() => document.getElementById(rootElement)}>
        <NavLinksProvider links={navLinks}>
          <MemoryRouter>
            <GoPropsRoute {...props} />
            <Switch>
              <Suspense fallback={<div>Loading...</div>}>
                {routes.map(({ path, component, exact }) => (
                  <Route path={path} component={component} exact={exact} key={path} />
                ))}
              </Suspense>
            </Switch>
          </MemoryRouter>
        </NavLinksProvider>
      </ConfigProvider>
    </PluginSDKContext.Provider>
  );
};

export default App;
