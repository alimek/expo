/// <reference types="react" />
import { DrawerNavigationOptions, DrawerNavigationEventMap } from '@react-navigation/drawer';
import { DrawerNavigationState, ParamListBase } from '@react-navigation/native';
export declare const Drawer: import("react").ForwardRefExoticComponent<Omit<Omit<import("@react-navigation/drawer").DrawerNavigatorProps, "initialRouteName" | "children" | "layout" | "id" | "screenListeners" | "screenOptions" | "screenLayout" | "UNSTABLE_router"> & import("@react-navigation/native").DefaultRouterOptions<string> & {
    children: import("react").ReactNode;
    layout?: ((props: {
        state: DrawerNavigationState<ParamListBase>;
        navigation: import("@react-navigation/native").NavigationHelpers<ParamListBase, {}>;
        descriptors: Record<string, import("@react-navigation/native").Descriptor<DrawerNavigationOptions, import("@react-navigation/native").NavigationProp<ParamListBase, string, string | undefined, DrawerNavigationState<ParamListBase>, DrawerNavigationOptions, DrawerNavigationEventMap>, import("@react-navigation/native").RouteProp<ParamListBase, string>>>;
        children: import("react").ReactNode;
    }) => import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>>) | undefined;
    screenListeners?: Partial<{
        drawerItemPress: import("@react-navigation/native").EventListenerCallback<DrawerNavigationEventMap & import("@react-navigation/native").EventMapCore<DrawerNavigationState<ParamListBase>>, "drawerItemPress", true>;
        transitionStart: import("@react-navigation/native").EventListenerCallback<DrawerNavigationEventMap & import("@react-navigation/native").EventMapCore<DrawerNavigationState<ParamListBase>>, "transitionStart", unknown>;
        transitionEnd: import("@react-navigation/native").EventListenerCallback<DrawerNavigationEventMap & import("@react-navigation/native").EventMapCore<DrawerNavigationState<ParamListBase>>, "transitionEnd", unknown>;
        gestureStart: import("@react-navigation/native").EventListenerCallback<DrawerNavigationEventMap & import("@react-navigation/native").EventMapCore<DrawerNavigationState<ParamListBase>>, "gestureStart", unknown>;
        gestureEnd: import("@react-navigation/native").EventListenerCallback<DrawerNavigationEventMap & import("@react-navigation/native").EventMapCore<DrawerNavigationState<ParamListBase>>, "gestureEnd", unknown>;
        gestureCancel: import("@react-navigation/native").EventListenerCallback<DrawerNavigationEventMap & import("@react-navigation/native").EventMapCore<DrawerNavigationState<ParamListBase>>, "gestureCancel", unknown>;
        focus: import("@react-navigation/native").EventListenerCallback<DrawerNavigationEventMap & import("@react-navigation/native").EventMapCore<DrawerNavigationState<ParamListBase>>, "focus", unknown>;
        blur: import("@react-navigation/native").EventListenerCallback<DrawerNavigationEventMap & import("@react-navigation/native").EventMapCore<DrawerNavigationState<ParamListBase>>, "blur", unknown>;
        state: import("@react-navigation/native").EventListenerCallback<DrawerNavigationEventMap & import("@react-navigation/native").EventMapCore<DrawerNavigationState<ParamListBase>>, "state", unknown>;
        beforeRemove: import("@react-navigation/native").EventListenerCallback<DrawerNavigationEventMap & import("@react-navigation/native").EventMapCore<DrawerNavigationState<ParamListBase>>, "beforeRemove", true>;
    }> | ((props: {
        route: import("@react-navigation/native").RouteProp<ParamListBase, string>;
        navigation: import("@react-navigation/drawer").DrawerNavigationProp<ParamListBase, string, undefined>;
    }) => Partial<{
        drawerItemPress: import("@react-navigation/native").EventListenerCallback<DrawerNavigationEventMap & import("@react-navigation/native").EventMapCore<DrawerNavigationState<ParamListBase>>, "drawerItemPress", true>;
        transitionStart: import("@react-navigation/native").EventListenerCallback<DrawerNavigationEventMap & import("@react-navigation/native").EventMapCore<DrawerNavigationState<ParamListBase>>, "transitionStart", unknown>;
        transitionEnd: import("@react-navigation/native").EventListenerCallback<DrawerNavigationEventMap & import("@react-navigation/native").EventMapCore<DrawerNavigationState<ParamListBase>>, "transitionEnd", unknown>;
        gestureStart: import("@react-navigation/native").EventListenerCallback<DrawerNavigationEventMap & import("@react-navigation/native").EventMapCore<DrawerNavigationState<ParamListBase>>, "gestureStart", unknown>;
        gestureEnd: import("@react-navigation/native").EventListenerCallback<DrawerNavigationEventMap & import("@react-navigation/native").EventMapCore<DrawerNavigationState<ParamListBase>>, "gestureEnd", unknown>;
        gestureCancel: import("@react-navigation/native").EventListenerCallback<DrawerNavigationEventMap & import("@react-navigation/native").EventMapCore<DrawerNavigationState<ParamListBase>>, "gestureCancel", unknown>;
        focus: import("@react-navigation/native").EventListenerCallback<DrawerNavigationEventMap & import("@react-navigation/native").EventMapCore<DrawerNavigationState<ParamListBase>>, "focus", unknown>;
        blur: import("@react-navigation/native").EventListenerCallback<DrawerNavigationEventMap & import("@react-navigation/native").EventMapCore<DrawerNavigationState<ParamListBase>>, "blur", unknown>;
        state: import("@react-navigation/native").EventListenerCallback<DrawerNavigationEventMap & import("@react-navigation/native").EventMapCore<DrawerNavigationState<ParamListBase>>, "state", unknown>;
        beforeRemove: import("@react-navigation/native").EventListenerCallback<DrawerNavigationEventMap & import("@react-navigation/native").EventMapCore<DrawerNavigationState<ParamListBase>>, "beforeRemove", true>;
    }>) | undefined;
    screenOptions?: DrawerNavigationOptions | ((props: {
        route: import("@react-navigation/native").RouteProp<ParamListBase, string>;
        navigation: import("@react-navigation/drawer").DrawerNavigationProp<ParamListBase, string, undefined>;
        theme: ReactNavigation.Theme;
    }) => DrawerNavigationOptions) | undefined;
    screenLayout?: ((props: {
        route: import("@react-navigation/native").RouteProp<ParamListBase, string>;
        navigation: import("@react-navigation/drawer").DrawerNavigationProp<ParamListBase, string, undefined>;
        theme: ReactNavigation.Theme;
        children: import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>>;
    }) => import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>>) | undefined;
    UNSTABLE_router?: (<Action extends Readonly<{
        type: string;
        payload?: object | undefined;
        source?: string | undefined;
        target?: string | undefined;
    }>>(original: import("@react-navigation/native").Router<DrawerNavigationState<ParamListBase>, Action>) => Partial<import("@react-navigation/native").Router<DrawerNavigationState<ParamListBase>, Action>>) | undefined;
} & {
    id?: undefined;
}, "children"> & Partial<Pick<Omit<import("@react-navigation/drawer").DrawerNavigatorProps, "initialRouteName" | "children" | "layout" | "id" | "screenListeners" | "screenOptions" | "screenLayout" | "UNSTABLE_router"> & import("@react-navigation/native").DefaultRouterOptions<string> & {
    children: import("react").ReactNode;
    layout?: ((props: {
        state: DrawerNavigationState<ParamListBase>;
        navigation: import("@react-navigation/native").NavigationHelpers<ParamListBase, {}>;
        descriptors: Record<string, import("@react-navigation/native").Descriptor<DrawerNavigationOptions, import("@react-navigation/native").NavigationProp<ParamListBase, string, string | undefined, DrawerNavigationState<ParamListBase>, DrawerNavigationOptions, DrawerNavigationEventMap>, import("@react-navigation/native").RouteProp<ParamListBase, string>>>;
        children: import("react").ReactNode;
    }) => import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>>) | undefined;
    screenListeners?: Partial<{
        drawerItemPress: import("@react-navigation/native").EventListenerCallback<DrawerNavigationEventMap & import("@react-navigation/native").EventMapCore<DrawerNavigationState<ParamListBase>>, "drawerItemPress", true>;
        transitionStart: import("@react-navigation/native").EventListenerCallback<DrawerNavigationEventMap & import("@react-navigation/native").EventMapCore<DrawerNavigationState<ParamListBase>>, "transitionStart", unknown>;
        transitionEnd: import("@react-navigation/native").EventListenerCallback<DrawerNavigationEventMap & import("@react-navigation/native").EventMapCore<DrawerNavigationState<ParamListBase>>, "transitionEnd", unknown>;
        gestureStart: import("@react-navigation/native").EventListenerCallback<DrawerNavigationEventMap & import("@react-navigation/native").EventMapCore<DrawerNavigationState<ParamListBase>>, "gestureStart", unknown>;
        gestureEnd: import("@react-navigation/native").EventListenerCallback<DrawerNavigationEventMap & import("@react-navigation/native").EventMapCore<DrawerNavigationState<ParamListBase>>, "gestureEnd", unknown>;
        gestureCancel: import("@react-navigation/native").EventListenerCallback<DrawerNavigationEventMap & import("@react-navigation/native").EventMapCore<DrawerNavigationState<ParamListBase>>, "gestureCancel", unknown>;
        focus: import("@react-navigation/native").EventListenerCallback<DrawerNavigationEventMap & import("@react-navigation/native").EventMapCore<DrawerNavigationState<ParamListBase>>, "focus", unknown>;
        blur: import("@react-navigation/native").EventListenerCallback<DrawerNavigationEventMap & import("@react-navigation/native").EventMapCore<DrawerNavigationState<ParamListBase>>, "blur", unknown>;
        state: import("@react-navigation/native").EventListenerCallback<DrawerNavigationEventMap & import("@react-navigation/native").EventMapCore<DrawerNavigationState<ParamListBase>>, "state", unknown>;
        beforeRemove: import("@react-navigation/native").EventListenerCallback<DrawerNavigationEventMap & import("@react-navigation/native").EventMapCore<DrawerNavigationState<ParamListBase>>, "beforeRemove", true>;
    }> | ((props: {
        route: import("@react-navigation/native").RouteProp<ParamListBase, string>;
        navigation: import("@react-navigation/drawer").DrawerNavigationProp<ParamListBase, string, undefined>;
    }) => Partial<{
        drawerItemPress: import("@react-navigation/native").EventListenerCallback<DrawerNavigationEventMap & import("@react-navigation/native").EventMapCore<DrawerNavigationState<ParamListBase>>, "drawerItemPress", true>;
        transitionStart: import("@react-navigation/native").EventListenerCallback<DrawerNavigationEventMap & import("@react-navigation/native").EventMapCore<DrawerNavigationState<ParamListBase>>, "transitionStart", unknown>;
        transitionEnd: import("@react-navigation/native").EventListenerCallback<DrawerNavigationEventMap & import("@react-navigation/native").EventMapCore<DrawerNavigationState<ParamListBase>>, "transitionEnd", unknown>;
        gestureStart: import("@react-navigation/native").EventListenerCallback<DrawerNavigationEventMap & import("@react-navigation/native").EventMapCore<DrawerNavigationState<ParamListBase>>, "gestureStart", unknown>;
        gestureEnd: import("@react-navigation/native").EventListenerCallback<DrawerNavigationEventMap & import("@react-navigation/native").EventMapCore<DrawerNavigationState<ParamListBase>>, "gestureEnd", unknown>;
        gestureCancel: import("@react-navigation/native").EventListenerCallback<DrawerNavigationEventMap & import("@react-navigation/native").EventMapCore<DrawerNavigationState<ParamListBase>>, "gestureCancel", unknown>;
        focus: import("@react-navigation/native").EventListenerCallback<DrawerNavigationEventMap & import("@react-navigation/native").EventMapCore<DrawerNavigationState<ParamListBase>>, "focus", unknown>;
        blur: import("@react-navigation/native").EventListenerCallback<DrawerNavigationEventMap & import("@react-navigation/native").EventMapCore<DrawerNavigationState<ParamListBase>>, "blur", unknown>;
        state: import("@react-navigation/native").EventListenerCallback<DrawerNavigationEventMap & import("@react-navigation/native").EventMapCore<DrawerNavigationState<ParamListBase>>, "state", unknown>;
        beforeRemove: import("@react-navigation/native").EventListenerCallback<DrawerNavigationEventMap & import("@react-navigation/native").EventMapCore<DrawerNavigationState<ParamListBase>>, "beforeRemove", true>;
    }>) | undefined;
    screenOptions?: DrawerNavigationOptions | ((props: {
        route: import("@react-navigation/native").RouteProp<ParamListBase, string>;
        navigation: import("@react-navigation/drawer").DrawerNavigationProp<ParamListBase, string, undefined>;
        theme: ReactNavigation.Theme;
    }) => DrawerNavigationOptions) | undefined;
    screenLayout?: ((props: {
        route: import("@react-navigation/native").RouteProp<ParamListBase, string>;
        navigation: import("@react-navigation/drawer").DrawerNavigationProp<ParamListBase, string, undefined>;
        theme: ReactNavigation.Theme;
        children: import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>>;
    }) => import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>>) | undefined;
    UNSTABLE_router?: (<Action extends Readonly<{
        type: string;
        payload?: object | undefined;
        source?: string | undefined;
        target?: string | undefined;
    }>>(original: import("@react-navigation/native").Router<DrawerNavigationState<ParamListBase>, Action>) => Partial<import("@react-navigation/native").Router<DrawerNavigationState<ParamListBase>, Action>>) | undefined;
} & {
    id?: undefined;
}, "children">> & import("react").RefAttributes<unknown>> & {
    Screen: (props: import("..").ScreenProps<DrawerNavigationOptions, DrawerNavigationState<ParamListBase>, DrawerNavigationEventMap>) => null;
};
export default Drawer;
//# sourceMappingURL=DrawerClient.d.ts.map