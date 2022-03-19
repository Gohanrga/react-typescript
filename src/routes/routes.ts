import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";
//import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: String;
}

//definiendo la parte de lazyload
//el lazy requiere el export default
const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */'../01-lazyload/layout/LazyLayout'));

//para los anidamientos en version 6 en el path se pone /nombre/*

export const routes :  Route[] = [
  {
    to: '/lazyload/',
    path: '/lazyload/*',
    Component: LazyLayout,
    name: 'LazyLayout'
  },
  {
    to: '/no-lazy',
    path: 'noLazy',
    Component: NoLazy,
    name: 'NoLazy'
  },
];
