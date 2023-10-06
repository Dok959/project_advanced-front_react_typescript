import { Suspense, memo, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
    type AppRouterProps,
    routeConfig,
} from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { RequireAuth } from './RequireAuth';

export const AppRouter = memo(function AppRouter(): JSX.Element {
    const renderWithWrapper = useCallback((route: AppRouterProps) => {
        const element = <>{route.element}</>;

        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.authOnly ? (
                        <RequireAuth>{element}</RequireAuth>
                    ) : (
                        element
                    )
                }
            />
        );
    }, []);

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
        </Suspense>
    );
});
