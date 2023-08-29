import { useRoutes } from 'react-router-dom'
import MainLayout from '../components/layouts/MainLayout'
import HomePage from '../pages/HomePage'
import { PATH } from '../constant/config'
import BTComponent from '../BTComponent/BTComponent'
import BindingData from '../BindingData/BindingData'
import RenderWithCondition from '../RenderWithCondition/RenderWithCondition'
import HandleEvent from '../HandleEvent/HandleEvent'
import StyleComponent from '../StyleComponent/StyleComponent'
import RenderWithMap from '../RenderWithMap/RenderWithMap'
import MovieDetail from '../RenderWithMap/MovieDetail'
import DemoState from '../State/DemoState'
import DemoProps from '../Props/DemoProps'
import BTShoeShop from '../BTShoeShop/BTShoeShop'
import DemoRedux from '../DemoRedux/DemoRedux'
import BTPhoneRedux from '../BTPhoneRedux/BTPhoneRedux'
import BTMovieBooking from '../BTMovieBooking/BTMovieBooking'
import NotFound from '../pages/NotFound'
import BTForm from '../BTForm/BTForm'
import DemoUseEffect from '../hooks/DemoUseEffect'

// code spilit

export const useRouters = () => {
    return useRoutes([
        {
            element: <MainLayout />,
            children: [
                {
                    index: true,
                    element: <HomePage />,
                },
                {
                    path: PATH.baiTapComponent,
                    element: <BTComponent />,
                },
                {
                    path: PATH.bindingData,
                    element: <BindingData />,
                },
                {
                    path: PATH.renderCondition,
                    element: <RenderWithCondition />,
                },
                {
                    path: PATH.handleEvent,
                    element: <HandleEvent />,
                },
                {
                    path: PATH.styledComponent,
                    element: <StyleComponent />,
                },
                {
                    path: PATH.renderMap,
                    element: <RenderWithMap />,
                },
                {
                    path: PATH.movieDetail,
                    element: <MovieDetail />,
                },
                {
                    path: PATH.demoState,
                    element: <DemoState />,
                },
                {
                    path: PATH.demoProps,
                    element: <DemoProps />,
                },
                {
                    path: PATH.baiTapShoeShop,
                    element: <BTShoeShop />,
                },
                {
                    path: PATH.redux,
                    children: [
                        {
                            index: true,
                            element: <DemoRedux />,
                        },
                        {
                            path: PATH.baiTapPhone,
                            element: <BTPhoneRedux />,
                        },
                        {
                            path: PATH.baiTapMovie,
                            element: <BTMovieBooking />,
                        },
                    ],
                },
                {
                    path: PATH.baiTapForm,
                    element: <BTForm />,
                },
                {
                    path: PATH.useEffect,
                    element: <DemoUseEffect />,
                },
                {
                    path: '*',
                    element: <NotFound />,
                },
            ],
        },
    ])
}
