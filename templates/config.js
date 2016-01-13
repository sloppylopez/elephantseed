System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "stage": 0,
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "dist/bundle.js": [
      "app.js",
      "npm:babel-runtime@5.8.34/helpers/class-call-check",
      "npm:babel-runtime@5.8.34/helpers/get",
      "npm:babel-runtime@5.8.34/helpers/inherits",
      "npm:babel-runtime@5.8.34/helpers/create-class",
      "npm:react@0.14.3",
      "npm:react-router@1.0.1",
      "npm:react-dom@0.14.3",
      "components/acme_nav_bar/acme-nav-bar.js",
      "npm:jquery@2.1.4",
      "components/acme_footer/acme-footer.js",
      "components/acme_body/acme-body.js",
      "npm:history@1.13.1",
      "github:twbs/bootstrap@3.3.6/css/bootstrap.css!github:systemjs/plugin-css@0.1.20",
      "npm:babel-runtime@5.8.34/core-js/object/set-prototype-of",
      "npm:babel-runtime@5.8.34/core-js/object/get-own-property-descriptor",
      "npm:babel-runtime@5.8.34/core-js/object/create",
      "npm:babel-runtime@5.8.34/core-js/object/define-property",
      "npm:react-router@1.0.1/lib/index",
      "npm:react@0.14.3/react",
      "npm:react-dom@0.14.3/index",
      "npm:react-bootstrap@0.28.1",
      "npm:history@1.13.1/lib/index",
      "npm:jquery@2.1.4/dist/jquery",
      "components/acme_body/acme_list_group/acme-list-group.js",
      "npm:core-js@1.2.6/library/fn/object/set-prototype-of",
      "npm:react-router@1.0.1/lib/Link",
      "npm:react-router@1.0.1/lib/RouteContext",
      "npm:react-router@1.0.1/lib/PropTypes",
      "npm:core-js@1.2.6/library/fn/object/create",
      "npm:core-js@1.2.6/library/fn/object/get-own-property-descriptor",
      "npm:core-js@1.2.6/library/fn/object/define-property",
      "npm:react-router@1.0.1/lib/IndexLink",
      "npm:react-router@1.0.1/lib/History",
      "npm:react@0.14.3/lib/React",
      "npm:react-router@1.0.1/lib/IndexRedirect",
      "npm:react-router@1.0.1/lib/IndexRoute",
      "npm:react-router@1.0.1/lib/Redirect",
      "npm:react-router@1.0.1/lib/Route",
      "npm:react-router@1.0.1/lib/Lifecycle",
      "npm:react-router@1.0.1/lib/RoutingContext",
      "npm:react-router@1.0.1/lib/RouteUtils",
      "npm:react-router@1.0.1/lib/Router",
      "npm:react-router@1.0.1/lib/useRoutes",
      "npm:react-router@1.0.1/lib/match",
      "npm:react@0.14.3/lib/ReactDOM",
      "npm:react-bootstrap@0.28.1/lib/index",
      "npm:history@1.13.1/lib/Actions",
      "npm:history@1.13.1/lib/createLocation",
      "npm:history@1.13.1/lib/useBasename",
      "npm:history@1.13.1/lib/enableBeforeUnload",
      "npm:history@1.13.1/lib/enableQueries",
      "npm:history@1.13.1/lib/useQueries",
      "npm:history@1.13.1/lib/createBrowserHistory",
      "npm:history@1.13.1/lib/createHashHistory",
      "npm:history@1.13.1/lib/createMemoryHistory",
      "npm:history@1.13.1/lib/useBeforeUnload",
      "npm:react-router-bootstrap@0.19.3",
      "npm:core-js@1.2.6/library/modules/$.core",
      "npm:core-js@1.2.6/library/modules/$",
      "npm:core-js@1.2.6/library/modules/es6.object.set-prototype-of",
      "npm:react@0.14.3/lib/ReactDOMServer",
      "npm:react@0.14.3/lib/Object.assign",
      "npm:react@0.14.3/lib/ReactCurrentOwner",
      "npm:react@0.14.3/lib/ReactVersion",
      "npm:fbjs@0.3.2/lib/ExecutionEnvironment",
      "npm:invariant@2.2.0",
      "npm:core-js@1.2.6/library/modules/es6.object.get-own-property-descriptor",
      "npm:warning@2.1.0",
      "github:jspm/nodelibs-process@0.1.2",
      "npm:react-router@1.0.1/lib/TransitionUtils",
      "npm:react-router@1.0.1/lib/isActive",
      "npm:react-router@1.0.1/lib/computeChangedRoutes",
      "npm:react-router@1.0.1/lib/getRouteParams",
      "npm:react-router@1.0.1/lib/getComponents",
      "npm:react@0.14.3/lib/ReactReconciler",
      "npm:react@0.14.3/lib/renderSubtreeIntoContainer",
      "npm:react@0.14.3/lib/ReactIsomorphic",
      "npm:react-router@1.0.1/lib/PatternUtils",
      "npm:react-router@1.0.1/lib/matchRoutes",
      "npm:react@0.14.3/lib/ReactDOMTextComponent",
      "npm:react@0.14.3/lib/ReactPerf",
      "npm:fbjs@0.3.2/lib/warning",
      "npm:react@0.14.3/lib/deprecated",
      "npm:react@0.14.3/lib/ReactDefaultInjection",
      "npm:react@0.14.3/lib/ReactInstanceHandles",
      "npm:react@0.14.3/lib/ReactMount",
      "npm:react@0.14.3/lib/ReactUpdates",
      "npm:react@0.14.3/lib/findDOMNode",
      "npm:babel-runtime@5.8.34/helpers/interop-require-wildcard",
      "npm:babel-runtime@5.8.34/helpers/interop-require-default",
      "npm:react-bootstrap@0.28.1/lib/utils/createChainedFunction",
      "npm:react-bootstrap@0.28.1/lib/utils/childrenValueInputValidation",
      "npm:react-bootstrap@0.28.1/lib/Accordion",
      "npm:react-bootstrap@0.28.1/lib/Alert",
      "npm:react-bootstrap@0.28.1/lib/Breadcrumb",
      "npm:react-bootstrap@0.28.1/lib/Badge",
      "npm:react-bootstrap@0.28.1/lib/BreadcrumbItem",
      "npm:react-bootstrap@0.28.1/lib/ButtonGroup",
      "npm:react-bootstrap@0.28.1/lib/Button",
      "npm:react-bootstrap@0.28.1/lib/ButtonInput",
      "npm:react-bootstrap@0.28.1/lib/ButtonToolbar",
      "npm:react-bootstrap@0.28.1/lib/Carousel",
      "npm:react-bootstrap@0.28.1/lib/CarouselItem",
      "npm:react-bootstrap@0.28.1/lib/Col",
      "npm:react-bootstrap@0.28.1/lib/CollapsibleNav",
      "npm:react-bootstrap@0.28.1/lib/Dropdown",
      "npm:react-bootstrap@0.28.1/lib/DropdownButton",
      "npm:react-bootstrap@0.28.1/lib/Image",
      "npm:react-bootstrap@0.28.1/lib/Grid",
      "npm:react-bootstrap@0.28.1/lib/Glyphicon",
      "npm:react-bootstrap@0.28.1/lib/Input",
      "npm:react-bootstrap@0.28.1/lib/Jumbotron",
      "npm:react-bootstrap@0.28.1/lib/Interpolate",
      "npm:react-bootstrap@0.28.1/lib/MenuItem",
      "npm:react-bootstrap@0.28.1/lib/ListGroupItem",
      "npm:react-bootstrap@0.28.1/lib/ListGroup",
      "npm:react-bootstrap@0.28.1/lib/Modal",
      "npm:react-bootstrap@0.28.1/lib/ModalBody",
      "npm:react-bootstrap@0.28.1/lib/Label",
      "npm:react-bootstrap@0.28.1/lib/ModalFooter",
      "npm:react-bootstrap@0.28.1/lib/ModalHeader",
      "npm:react-bootstrap@0.28.1/lib/Nav",
      "npm:react-bootstrap@0.28.1/lib/ModalTitle",
      "npm:react-bootstrap@0.28.1/lib/Navbar",
      "npm:react-bootstrap@0.28.1/lib/utils/ValidComponentChildren",
      "npm:react-bootstrap@0.28.1/lib/NavBrand",
      "npm:react-bootstrap@0.28.1/lib/NavbarBrand",
      "npm:react-bootstrap@0.28.1/lib/utils/bootstrapUtils",
      "npm:react-bootstrap@0.28.1/lib/NavDropdown",
      "npm:react-bootstrap@0.28.1/lib/Overlay",
      "npm:react-bootstrap@0.28.1/lib/NavItem",
      "npm:react-bootstrap@0.28.1/lib/PageHeader",
      "npm:react-bootstrap@0.28.1/lib/Pager",
      "npm:react-bootstrap@0.28.1/lib/PageItem",
      "npm:react-bootstrap@0.28.1/lib/OverlayTrigger",
      "npm:react-bootstrap@0.28.1/lib/Pagination",
      "npm:react-bootstrap@0.28.1/lib/Panel",
      "npm:react-bootstrap@0.28.1/lib/Popover",
      "npm:react-bootstrap@0.28.1/lib/ProgressBar",
      "npm:react-bootstrap@0.28.1/lib/ResponsiveEmbed",
      "npm:react-bootstrap@0.28.1/lib/PanelGroup",
      "npm:react-bootstrap@0.28.1/lib/Row",
      "npm:react-bootstrap@0.28.1/lib/SafeAnchor",
      "npm:react-bootstrap@0.28.1/lib/Tab",
      "npm:react-bootstrap@0.28.1/lib/SplitButton",
      "npm:react-bootstrap@0.28.1/lib/Tabs",
      "npm:react-bootstrap@0.28.1/lib/Table",
      "npm:react-bootstrap@0.28.1/lib/Well",
      "npm:react-bootstrap@0.28.1/lib/Tooltip",
      "npm:react-bootstrap@0.28.1/lib/Collapse",
      "npm:history@1.13.1/lib/ExecutionEnvironment",
      "npm:history@1.13.1/lib/DOMUtils",
      "npm:history@1.13.1/lib/extractPath",
      "npm:qs@4.0.0",
      "npm:history@1.13.1/lib/createHistory",
      "npm:history@1.13.1/lib/parsePath",
      "npm:history@1.13.1/lib/runTransitionHook",
      "npm:history@1.13.1/lib/deprecate",
      "npm:history@1.13.1/lib/createDOMHistory",
      "npm:history@1.13.1/lib/DOMStateStorage",
      "npm:react-bootstrap@0.28.1/lib/Thumbnail",
      "npm:react-bootstrap@0.28.1/lib/FormControls/index",
      "npm:react-bootstrap@0.28.1/lib/Fade",
      "npm:react-router-bootstrap@0.19.3/lib/index",
      "npm:react@0.14.3/lib/ReactServerRendering",
      "npm:react-router@1.0.1/lib/AsyncUtils",
      "npm:react@0.14.3/lib/escapeTextContentForBrowser",
      "npm:fbjs@0.3.2/lib/emptyFunction",
      "npm:react@0.14.3/lib/ClientReactRootIndex",
      "npm:react@0.14.3/lib/ServerReactRootIndex",
      "npm:react@0.14.3/lib/ReactRootIndex",
      "npm:react@0.14.3/lib/ReactDOMFeatureFlags",
      "npm:react@0.14.3/lib/ReactEmptyComponentRegistry",
      "npm:react@0.14.3/lib/ReactInstanceMap",
      "npm:react@0.14.3/lib/shouldUpdateReactComponent",
      "npm:core-js@1.2.6/library/modules/$.set-proto",
      "npm:core-js@1.2.6/library/modules/$.export",
      "npm:core-js@1.2.6/library/modules/$.object-sap",
      "npm:core-js@1.2.6/library/modules/$.to-iobject",
      "npm:react@0.14.3/lib/ReactInjection",
      "npm:react@0.14.3/lib/ReactReconcileTransaction",
      "npm:react@0.14.3/lib/SVGDOMPropertyConfig",
      "npm:react@0.14.3/lib/ReactMarkupChecksum",
      "npm:fbjs@0.3.2/lib/containsNode",
      "npm:warning@2.1.0/browser",
      "npm:invariant@2.2.0/browser",
      "github:jspm/nodelibs-process@0.1.2/index",
      "npm:react@0.14.3/lib/ReactRef",
      "npm:react@0.14.3/lib/ReactElement",
      "npm:react@0.14.3/lib/ReactComponentBrowserEnvironment",
      "npm:fbjs@0.3.2/lib/invariant",
      "npm:react@0.14.3/lib/ReactBrowserEventEmitter",
      "npm:fbjs@0.3.2/lib/emptyObject",
      "npm:react@0.14.3/lib/ReactChildren",
      "npm:react@0.14.3/lib/ReactClass",
      "npm:react@0.14.3/lib/ReactComponent",
      "npm:react@0.14.3/lib/ReactDOMFactories",
      "npm:react@0.14.3/lib/ReactElementValidator",
      "npm:react@0.14.3/lib/ReactPropTypes",
      "npm:react@0.14.3/lib/DOMChildrenOperations",
      "npm:react@0.14.3/lib/onlyChild",
      "npm:react@0.14.3/lib/DOMPropertyOperations",
      "npm:react@0.14.3/lib/setTextContent",
      "npm:react@0.14.3/lib/validateDOMNesting",
      "npm:react@0.14.3/lib/BeforeInputEventPlugin",
      "npm:react@0.14.3/lib/ChangeEventPlugin",
      "npm:react@0.14.3/lib/EnterLeaveEventPlugin",
      "npm:react@0.14.3/lib/HTMLDOMPropertyConfig",
      "npm:react@0.14.3/lib/DefaultEventPluginOrder",
      "npm:react@0.14.3/lib/ReactBrowserComponentMixin",
      "npm:react@0.14.3/lib/ReactDefaultBatchingStrategy",
      "npm:react@0.14.3/lib/ReactDOMComponent",
      "npm:react@0.14.3/lib/SelectEventPlugin",
      "npm:react@0.14.3/lib/ReactEventListener",
      "npm:react@0.14.3/lib/SimpleEventPlugin",
      "npm:react@0.14.3/lib/ReactDefaultPerf",
      "npm:react@0.14.3/lib/DOMProperty",
      "npm:react@0.14.3/lib/ReactUpdateQueue",
      "npm:react@0.14.3/lib/instantiateReactComponent",
      "npm:react@0.14.3/lib/setInnerHTML",
      "npm:react-prop-types@0.3.0/lib/singlePropFrom",
      "npm:babel-runtime@5.8.34/helpers/object-without-properties",
      "npm:react-prop-types@0.3.0/lib/all",
      "npm:react-bootstrap@0.28.1/lib/utils/TransitionEvents",
      "npm:react-prop-types@0.3.0/lib/isRequiredForA11y",
      "npm:dom-helpers@2.4.0/ownerDocument",
      "npm:dom-helpers@2.4.0/util/inDOM",
      "npm:dom-helpers@2.4.0/activeElement",
      "npm:dom-helpers@2.4.0/query/contains",
      "npm:keycode@2.1.0",
      "npm:dom-helpers@2.4.0/util/scrollbarSize",
      "npm:dom-helpers@2.4.0/events",
      "npm:classnames@2.2.1",
      "npm:babel-runtime@5.8.34/helpers/extends",
      "npm:react-prop-types@0.3.0/lib/elementType",
      "npm:babel-runtime@5.8.34/core-js/object/keys",
      "npm:lodash-compat@3.10.1/collection/find",
      "npm:lodash-compat@3.10.1/object/omit",
      "npm:uncontrollable@3.1.4",
      "npm:lodash-compat@3.10.1/object/pick",
      "npm:react-overlays@0.5.4/lib/utils/isOverflowing",
      "npm:react-prop-types@0.3.0/lib/deprecated",
      "npm:react@0.14.3/lib/CallbackQueue",
      "npm:react@0.14.3/lib/PooledClass",
      "npm:react@0.14.3/lib/Transaction",
      "npm:react-bootstrap@0.28.1/lib/styleMaps",
      "npm:react-bootstrap@0.28.1/lib/FormGroup",
      "npm:react-bootstrap@0.28.1/lib/InputBase",
      "npm:react-bootstrap@0.28.1/lib/utils/deprecationWarning",
      "npm:react-bootstrap@0.28.1/lib/DropdownMenu",
      "npm:react-bootstrap@0.28.1/lib/utils/CustomPropTypes",
      "npm:react-bootstrap@0.28.1/lib/DropdownToggle",
      "npm:react-bootstrap@0.28.1/lib/ModalDialog",
      "npm:react-bootstrap@0.28.1/lib/NavbarHeader",
      "npm:react-overlays@0.5.4/lib/Modal",
      "npm:react-bootstrap@0.28.1/lib/NavbarToggle",
      "npm:react-overlays@0.5.4/lib/Overlay",
      "npm:react-bootstrap@0.28.1/lib/NavbarCollapse",
      "npm:dom-helpers@2.4.0/style",
      "npm:react-overlays@0.5.4/lib/Transition",
      "npm:react-bootstrap@0.28.1/lib/SplitToggle",
      "npm:react-bootstrap@0.28.1/lib/PaginationButton",
      "npm:react-bootstrap@0.28.1/lib/deprecated/Navbar",
      "npm:history@1.13.1/lib/AsyncUtils",
      "npm:qs@4.0.0/lib/index",
      "npm:deep-equal@1.0.1",
      "npm:react-router-bootstrap@0.19.3/lib/IndexLinkContainer",
      "npm:react-router-bootstrap@0.19.3/lib/LinkContainer",
      "npm:react-bootstrap@0.28.1/lib/FormControls/Static",
      "npm:react@0.14.3/lib/ReactServerBatchingStrategy",
      "npm:core-js@1.2.6/library/modules/$.is-object",
      "npm:core-js@1.2.6/library/modules/$.global",
      "npm:core-js@1.2.6/library/modules/$.fails",
      "npm:core-js@1.2.6/library/modules/$.defined",
      "npm:react@0.14.3/lib/adler32",
      "npm:react@0.14.3/lib/ViewportMetrics",
      "npm:fbjs@0.3.2/lib/keyOf",
      "npm:fbjs@0.3.2/lib/mapObject",
      "npm:react@0.14.3/lib/getIteratorFn",
      "npm:react@0.14.3/lib/isTextInputElement",
      "npm:react@0.14.3/lib/getEventTarget",
      "npm:react@0.14.3/lib/ReactDOMButton",
      "npm:fbjs@0.3.2/lib/shallowEqual",
      "npm:fbjs@0.3.2/lib/getActiveElement",
      "npm:fbjs@0.3.2/lib/getUnboundedScrollPosition",
      "npm:react@0.14.3/lib/getEventCharCode",
      "npm:core-js@1.2.6/library/modules/$.an-object",
      "npm:core-js@1.2.6/library/modules/$.ctx",
      "npm:core-js@1.2.6/library/modules/$.iobject",
      "npm:react@0.14.3/lib/ReactEmptyComponent",
      "npm:fbjs@0.3.2/lib/isTextNode",
      "npm:process@0.11.2",
      "npm:react@0.14.3/lib/ReactEventEmitterMixin",
      "npm:react@0.14.3/lib/quoteAttributeValueForBrowser",
      "npm:react@0.14.3/lib/FallbackCompositionState",
      "npm:react@0.14.3/lib/SyntheticCompositionEvent",
      "npm:react@0.14.3/lib/SyntheticInputEvent",
      "npm:react@0.14.3/lib/SyntheticMouseEvent",
      "npm:react@0.14.3/lib/SyntheticClipboardEvent",
      "npm:react@0.14.3/lib/SyntheticFocusEvent",
      "npm:react@0.14.3/lib/SyntheticKeyboardEvent",
      "npm:react@0.14.3/lib/SyntheticDragEvent",
      "npm:react@0.14.3/lib/SyntheticTouchEvent",
      "npm:react@0.14.3/lib/SyntheticUIEvent",
      "npm:react@0.14.3/lib/SyntheticWheelEvent",
      "npm:react@0.14.3/lib/canDefineProperty",
      "npm:react@0.14.3/lib/ReactPropTypeLocationNames",
      "npm:fbjs@0.3.2/lib/keyMirror",
      "npm:react@0.14.3/lib/ReactMultiChild",
      "npm:fbjs@0.3.2/lib/EventListener",
      "npm:react@0.14.3/lib/ReactServerRenderingTransaction",
      "npm:react@0.14.3/lib/EventPluginHub",
      "npm:react@0.14.3/lib/ReactComponentEnvironment",
      "npm:react@0.14.3/lib/ReactNativeComponent",
      "npm:react@0.14.3/lib/ReactInputSelection",
      "npm:react@0.14.3/lib/ReactOwner",
      "npm:react@0.14.3/lib/ReactDOMIDOperations",
      "npm:react@0.14.3/lib/EventConstants",
      "npm:react@0.14.3/lib/EventPluginRegistry",
      "npm:react@0.14.3/lib/isEventSupported",
      "npm:react@0.14.3/lib/traverseAllChildren",
      "npm:react@0.14.3/lib/ReactPropTypeLocations",
      "npm:react@0.14.3/lib/ReactNoopUpdateQueue",
      "npm:react@0.14.3/lib/Danger",
      "npm:react@0.14.3/lib/ReactMultiChildUpdateTypes",
      "npm:react@0.14.3/lib/EventPropagators",
      "npm:react@0.14.3/lib/SyntheticEvent",
      "npm:react@0.14.3/lib/AutoFocusUtils",
      "npm:react@0.14.3/lib/ReactDOMInput",
      "npm:react@0.14.3/lib/CSSPropertyOperations",
      "npm:react@0.14.3/lib/ReactDOMOption",
      "npm:react@0.14.3/lib/ReactDOMSelect",
      "npm:react@0.14.3/lib/ReactDOMTextarea",
      "npm:dom-helpers@2.4.0/util/babelHelpers",
      "npm:keycode@2.1.0/index",
      "npm:classnames@2.2.1/index",
      "npm:react-prop-types@0.3.0/lib/common",
      "npm:lodash-compat@3.10.1/internal/arrayMap",
      "npm:lodash-compat@3.10.1/function/restParam",
      "npm:dom-helpers@2.4.0/query/isWindow",
      "npm:dom-helpers@2.4.0/events/index",
      "npm:fbjs@0.3.2/lib/performanceNow",
      "npm:react@0.14.3/lib/ReactDefaultPerfAnalysis",
      "npm:babel-runtime@5.8.34/core-js/object/assign",
      "npm:core-js@1.2.6/library/fn/object/keys",
      "npm:lodash-compat@3.10.1/internal/baseEach",
      "npm:lodash-compat@3.10.1/internal/createFind",
      "npm:lodash-compat@3.10.1/internal/baseDifference",
      "npm:lodash-compat@3.10.1/internal/baseFlatten",
      "npm:lodash-compat@3.10.1/internal/bindCallback",
      "npm:lodash-compat@3.10.1/object/keysIn",
      "npm:lodash-compat@3.10.1/internal/pickByArray",
      "npm:lodash-compat@3.10.1/internal/pickByCallback",
      "npm:uncontrollable@3.1.4/index",
      "npm:react-prop-types@0.2.2/lib/mountable",
      "npm:react-prop-types@0.2.2/lib/elementType",
      "npm:react-overlays@0.5.4/lib/ModalManager",
      "npm:react-overlays@0.5.4/lib/RootCloseWrapper",
      "npm:react-overlays@0.5.4/lib/utils/ownerDocument",
      "npm:react@0.14.3/lib/ReactCompositeComponent",
      "npm:react-bootstrap@0.28.1/lib/utils/childrenToArray",
      "npm:react-overlays@0.5.4/lib/Portal",
      "npm:react-overlays@0.5.4/lib/utils/addFocusListener",
      "npm:react-overlays@0.5.4/lib/utils/addEventListener",
      "npm:react-overlays@0.5.4/lib/utils/getContainer",
      "npm:react-bootstrap@0.28.1/lib/utils/createSelectedEvent",
      "npm:dom-helpers@2.4.0/events/on",
      "npm:dom-helpers@2.4.0/transition/properties",
      "npm:dom-helpers@2.4.0/style/index",
      "npm:qs@4.0.0/lib/stringify",
      "npm:qs@4.0.0/lib/parse",
      "npm:deep-equal@1.0.1/index",
      "npm:react-overlays@0.5.4/lib/Position",
      "npm:core-js@1.2.6/library/modules/$.a-function",
      "npm:core-js@1.2.6/library/modules/$.cof",
      "npm:process@0.11.2/browser",
      "npm:fbjs@0.3.2/lib/isNode",
      "npm:react@0.14.3/lib/getEventModifierState",
      "npm:react@0.14.3/lib/forEachAccumulated",
      "npm:fbjs@0.3.2/lib/focusNode",
      "npm:react@0.14.3/lib/getEventKey",
      "npm:react@0.14.3/lib/ReactErrorUtils",
      "npm:react@0.14.3/lib/getTextContentAccessor",
      "npm:react@0.14.3/lib/ReactChildReconciler",
      "npm:react@0.14.3/lib/flattenChildren",
      "npm:react@0.14.3/lib/EventPluginUtils",
      "npm:react@0.14.3/lib/accumulateInto",
      "npm:react@0.14.3/lib/ReactDOMSelection",
      "npm:react@0.14.3/lib/CSSProperty",
      "npm:fbjs@0.3.2/lib/camelizeStyleName",
      "npm:fbjs@0.3.2/lib/createNodesFromMarkup",
      "npm:fbjs@0.3.2/lib/getMarkupWrap",
      "npm:react@0.14.3/lib/LinkedValueUtils",
      "npm:fbjs@0.3.2/lib/memoizeStringOnly",
      "npm:lodash-compat@3.10.1/internal/baseFindIndex",
      "npm:lodash-compat@3.10.1/internal/baseFind",
      "npm:lodash-compat@3.10.1/internal/arrayPush",
      "npm:lodash-compat@3.10.1/internal/isObjectLike",
      "npm:lodash-compat@3.10.1/utility/identity",
      "npm:lodash-compat@3.10.1/internal/arrayEach",
      "npm:lodash-compat@3.10.1/internal/isIndex",
      "npm:lodash-compat@3.10.1/internal/isLength",
      "npm:lodash-compat@3.10.1/lang/isObject",
      "npm:lodash-compat@3.10.1/support",
      "npm:react-prop-types@0.2.2/lib/common",
      "npm:dom-helpers@2.4.0/events/off",
      "npm:dom-helpers@2.4.0/events/filter",
      "npm:react@0.14.3/lib/dangerousStyleValue",
      "npm:fbjs@0.3.2/lib/hyphenateStyleName",
      "npm:fbjs@0.3.2/lib/performance",
      "npm:core-js@1.2.6/library/fn/object/assign",
      "npm:core-js@1.2.6/library/modules/es6.object.keys",
      "npm:lodash-compat@3.10.1/internal/baseForOwn",
      "npm:lodash-compat@3.10.1/internal/createBaseEach",
      "npm:lodash-compat@3.10.1/internal/baseCallback",
      "npm:lodash-compat@3.10.1/lang/isArray",
      "npm:lodash-compat@3.10.1/internal/baseIndexOf",
      "npm:lodash-compat@3.10.1/internal/createCache",
      "npm:lodash-compat@3.10.1/internal/cacheIndexOf",
      "npm:lodash-compat@3.10.1/lang/isArguments",
      "npm:lodash-compat@3.10.1/internal/isArrayLike",
      "npm:lodash-compat@3.10.1/lang/isFunction",
      "npm:lodash-compat@3.10.1/lang/isString",
      "npm:lodash-compat@3.10.1/internal/baseForIn",
      "npm:lodash-compat@3.10.1/internal/toObject",
      "npm:uncontrollable@3.1.4/createUncontrollable",
      "npm:react-overlays@0.5.4/lib/utils/manageAriaHidden",
      "npm:react-overlays@0.5.4/lib/utils/createChainedFunction",
      "npm:dom-helpers@2.4.0/style/removeStyle",
      "npm:qs@4.0.0/lib/utils",
      "npm:deep-equal@1.0.1/lib/keys",
      "npm:deep-equal@1.0.1/lib/is_arguments",
      "npm:dom-helpers@2.4.0/class",
      "npm:dom-helpers@2.4.0/style/getComputedStyle",
      "npm:dom-helpers@2.4.0/util/camelizeStyle",
      "npm:dom-helpers@2.4.0/util/hyphenateStyle",
      "npm:react-overlays@0.5.4/lib/utils/overlayPositionUtils",
      "npm:react@0.14.3/lib/getNodeForCharacterOffset",
      "npm:fbjs@0.3.2/lib/camelize",
      "npm:dom-helpers@2.4.0/query/querySelectorAll",
      "npm:fbjs@0.3.2/lib/hyphenate",
      "npm:fbjs@0.3.2/lib/createArrayFromMixed",
      "npm:core-js@1.2.6/library/modules/es6.object.assign",
      "npm:core-js@1.2.6/library/modules/$.to-object",
      "npm:lodash-compat@3.10.1/object/keys",
      "npm:lodash-compat@3.10.1/internal/getLength",
      "npm:lodash-compat@3.10.1/internal/baseMatches",
      "npm:lodash-compat@3.10.1/internal/baseMatchesProperty",
      "npm:lodash-compat@3.10.1/internal/baseFor",
      "npm:lodash-compat@3.10.1/utility/property",
      "npm:lodash-compat@3.10.1/internal/getNative",
      "npm:lodash-compat@3.10.1/internal/indexOfNaN",
      "npm:dom-helpers@2.4.0/util/camelize",
      "npm:dom-helpers@2.4.0/util/hyphenate",
      "npm:dom-helpers@2.4.0/class/index",
      "npm:dom-helpers@2.4.0/query/offset",
      "npm:dom-helpers@2.4.0/query/position",
      "npm:dom-helpers@2.4.0/query/scrollTop",
      "npm:lodash-compat@3.10.1/internal/SetCache",
      "npm:uncontrollable@3.1.4/utils",
      "npm:lodash-compat@3.10.1/internal/baseSlice",
      "npm:core-js@1.2.6/library/modules/$.object-assign",
      "npm:lodash-compat@3.10.1/internal/shimKeys",
      "npm:lodash-compat@3.10.1/internal/baseProperty",
      "npm:lodash-compat@3.10.1/internal/baseIsMatch",
      "npm:lodash-compat@3.10.1/internal/getMatchData",
      "npm:lodash-compat@3.10.1/internal/baseGet",
      "npm:lodash-compat@3.10.1/internal/baseIsEqual",
      "npm:fbjs@0.3.2/lib/toArray",
      "npm:lodash-compat@3.10.1/internal/isKey",
      "npm:lodash-compat@3.10.1/array/last",
      "npm:lodash-compat@3.10.1/internal/isStrictComparable",
      "npm:lodash-compat@3.10.1/internal/createBaseFor",
      "npm:lodash-compat@3.10.1/internal/basePropertyDeep",
      "npm:lodash-compat@3.10.1/lang/isNative",
      "npm:lodash-compat@3.10.1/internal/toPath",
      "npm:dom-helpers@2.4.0/class/removeClass",
      "npm:dom-helpers@2.4.0/class/hasClass",
      "npm:dom-helpers@2.4.0/class/addClass",
      "npm:dom-helpers@2.4.0/query/scrollLeft",
      "npm:dom-helpers@2.4.0/query/offsetParent",
      "npm:lodash-compat@3.10.1/internal/cachePush",
      "npm:lodash-compat@3.10.1/object/pairs",
      "npm:lodash-compat@3.10.1/internal/baseIsEqualDeep",
      "npm:lodash-compat@3.10.1/internal/isHostObject",
      "npm:lodash-compat@3.10.1/internal/baseToString",
      "npm:lodash-compat@3.10.1/internal/equalByTag",
      "npm:lodash-compat@3.10.1/internal/equalArrays",
      "npm:lodash-compat@3.10.1/lang/isTypedArray",
      "npm:lodash-compat@3.10.1/internal/equalObjects",
      "npm:lodash-compat@3.10.1/internal/arraySome"
    ]
  },

  map: {
    "babel": "npm:babel-core@5.8.34",
    "babel-runtime": "npm:babel-runtime@5.8.34",
    "bootstrap": "github:twbs/bootstrap@3.3.6",
    "classnames": "npm:classnames@2.2.1",
    "clean-css": "npm:clean-css@3.4.8",
    "core-js": "npm:core-js@1.2.6",
    "css": "github:systemjs/plugin-css@0.1.20",
    "express": "npm:express@4.13.3",
    "history": "npm:history@1.13.1",
    "jquery": "npm:jquery@2.1.4",
    "react": "npm:react@0.14.3",
    "react-bootstrap": "npm:react-bootstrap@0.28.1",
    "react-dom": "npm:react-dom@0.14.3",
    "react-router": "npm:react-router@1.0.1",
    "react-router-bootstrap": "npm:react-router-bootstrap@0.19.3",
    "scss": "github:mobilexag/plugin-sass@0.1.0",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.5.3"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.11.0"
    },
    "github:jspm/nodelibs-domain@0.1.0": {
      "domain-browser": "npm:domain-browser@1.1.4"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-net@0.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "timers": "github:jspm/nodelibs-timers@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-querystring@0.1.0": {
      "querystring": "npm:querystring@0.2.0"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-timers@0.1.0": {
      "timers-browserify": "npm:timers-browserify@1.4.1"
    },
    "github:jspm/nodelibs-tty@0.1.0": {
      "tty-browserify": "npm:tty-browserify@0.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:mobilexag/plugin-sass@0.1.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "reqwest": "github:ded/reqwest@2.0.5",
      "sass.js": "npm:sass.js@0.9.4",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "github:twbs/bootstrap@3.3.6": {
      "jquery": "github:components/jquery@2.1.4"
    },
    "npm:accepts@1.2.13": {
      "mime-types": "npm:mime-types@2.1.8",
      "negotiator": "npm:negotiator@0.5.3"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:asap@2.0.3": {
      "domain": "github:jspm/nodelibs-domain@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:asn1.js@4.2.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@4.5.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.34": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:browserify-aes@1.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.2",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.5",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:browserify-rsa@4.0.0": {
      "bn.js": "npm:bn.js@4.5.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:browserify-sign@4.0.0": {
      "bn.js": "npm:bn.js@4.5.0",
      "browserify-rsa": "npm:browserify-rsa@4.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.0.2",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:buffer@3.5.3": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:cipher-base@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:classnames@2.2.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:clean-css@3.4.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commander": "npm:commander@2.8.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.4.4",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commander@2.8.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:content-disposition@0.5.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:cookie-signature@1.0.6": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@4.0.0": {
      "bn.js": "npm:bn.js@4.5.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.0.2"
    },
    "npm:create-hash@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.4"
    },
    "npm:create-hmac@1.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.11.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@4.0.0",
      "create-ecdh": "npm:create-ecdh@4.0.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "diffie-hellman": "npm:diffie-hellman@5.0.0",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@4.0.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:debug@2.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ms": "npm:ms@0.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:depd@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:destroy@1.0.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:diffie-hellman@5.0.0": {
      "bn.js": "npm:bn.js@4.5.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.0",
      "randombytes": "npm:randombytes@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:domain-browser@1.1.4": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:elliptic@6.0.2": {
      "bn.js": "npm:bn.js@4.5.0",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:envify@3.4.0": {
      "jstransform": "npm:jstransform@10.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "through": "npm:through@2.3.8"
    },
    "npm:esprima-fb@13001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:etag@1.7.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:express@4.13.3": {
      "accepts": "npm:accepts@1.2.13",
      "array-flatten": "npm:array-flatten@1.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "content-disposition": "npm:content-disposition@0.5.0",
      "content-type": "npm:content-type@1.0.1",
      "cookie": "npm:cookie@0.1.3",
      "cookie-signature": "npm:cookie-signature@1.0.6",
      "debug": "npm:debug@2.2.0",
      "depd": "npm:depd@1.0.1",
      "escape-html": "npm:escape-html@1.0.2",
      "etag": "npm:etag@1.7.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "finalhandler": "npm:finalhandler@0.4.0",
      "fresh": "npm:fresh@0.3.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "merge-descriptors": "npm:merge-descriptors@1.0.0",
      "methods": "npm:methods@1.1.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "on-finished": "npm:on-finished@2.3.0",
      "parseurl": "npm:parseurl@1.3.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-to-regexp": "npm:path-to-regexp@0.1.7",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "proxy-addr": "npm:proxy-addr@1.0.9",
      "qs": "npm:qs@4.0.0",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "range-parser": "npm:range-parser@1.0.3",
      "send": "npm:send@0.13.0",
      "serve-static": "npm:serve-static@1.10.0",
      "type-is": "npm:type-is@1.6.10",
      "utils-merge": "npm:utils-merge@1.0.0",
      "vary": "npm:vary@1.0.1"
    },
    "npm:fbjs@0.3.2": {
      "core-js": "npm:core-js@1.2.6",
      "loose-envify": "npm:loose-envify@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "promise": "npm:promise@7.0.4",
      "ua-parser-js": "npm:ua-parser-js@0.7.9",
      "whatwg-fetch": "npm:whatwg-fetch@0.9.0"
    },
    "npm:finalhandler@0.4.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "debug": "npm:debug@2.2.0",
      "escape-html": "npm:escape-html@1.0.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "on-finished": "npm:on-finished@2.3.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "unpipe": "npm:unpipe@1.0.0"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:history@1.13.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "deep-equal": "npm:deep-equal@1.0.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "invariant": "npm:invariant@2.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "qs": "npm:qs@4.0.0",
      "warning": "npm:warning@2.1.0"
    },
    "npm:http-errors@1.3.1": {
      "inherits": "npm:inherits@2.0.1",
      "statuses": "npm:statuses@1.2.1"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:invariant@2.2.0": {
      "loose-envify": "npm:loose-envify@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:jquery@2.1.4": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:jstransform@10.1.0": {
      "base62": "npm:base62@0.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "esprima-fb": "npm:esprima-fb@13001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.1.31"
    },
    "npm:lodash-compat@3.10.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:loose-envify@1.1.0": {
      "js-tokens": "npm:js-tokens@1.0.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:miller-rabin@4.0.0": {
      "bn.js": "npm:bn.js@4.5.0",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:mime-db@1.20.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:mime-types@2.1.8": {
      "mime-db": "npm:mime-db@1.20.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:mime@1.3.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:on-finished@2.3.0": {
      "ee-first": "npm:ee-first@1.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:parse-asn1@5.0.0": {
      "asn1.js": "npm:asn1.js@4.2.1",
      "browserify-aes": "npm:browserify-aes@1.0.5",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:parseurl@1.3.0": {
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:promise@7.0.4": {
      "asap": "npm:asap@2.0.3",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:proxy-addr@1.0.9": {
      "forwarded": "npm:forwarded@0.1.0",
      "ipaddr.js": "npm:ipaddr.js@1.0.4"
    },
    "npm:public-encrypt@4.0.0": {
      "bn.js": "npm:bn.js@4.5.0",
      "browserify-rsa": "npm:browserify-rsa@4.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:randombytes@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:react-bootstrap@0.28.1": {
      "babel-runtime": "npm:babel-runtime@5.8.34",
      "classnames": "npm:classnames@2.2.1",
      "dom-helpers": "npm:dom-helpers@2.4.0",
      "invariant": "npm:invariant@2.2.0",
      "keycode": "npm:keycode@2.1.0",
      "lodash-compat": "npm:lodash-compat@3.10.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@0.14.3",
      "react-dom": "npm:react-dom@0.14.3",
      "react-overlays": "npm:react-overlays@0.5.4",
      "react-prop-types": "npm:react-prop-types@0.3.0",
      "uncontrollable": "npm:uncontrollable@3.1.4",
      "warning": "npm:warning@2.1.0"
    },
    "npm:react-dom@0.14.3": {
      "react": "npm:react@0.14.3"
    },
    "npm:react-overlays@0.5.4": {
      "classnames": "npm:classnames@2.2.1",
      "dom-helpers": "npm:dom-helpers@2.4.0",
      "react": "npm:react@0.14.3",
      "react-dom": "npm:react-dom@0.14.3",
      "react-prop-types": "npm:react-prop-types@0.2.2",
      "warning": "npm:warning@2.1.0"
    },
    "npm:react-prop-types@0.2.2": {
      "warning": "npm:warning@2.1.0"
    },
    "npm:react-prop-types@0.3.0": {
      "warning": "npm:warning@2.1.0"
    },
    "npm:react-router-bootstrap@0.19.3": {
      "react": "npm:react@0.14.3",
      "react-router": "npm:react-router@1.0.1"
    },
    "npm:react-router@1.0.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "history": "npm:history@1.13.1",
      "invariant": "npm:invariant@2.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "warning": "npm:warning@2.1.0"
    },
    "npm:react@0.14.3": {
      "envify": "npm:envify@3.4.0",
      "fbjs": "npm:fbjs@0.3.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sass.js@0.9.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:send@0.13.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "debug": "npm:debug@2.2.0",
      "depd": "npm:depd@1.0.1",
      "destroy": "npm:destroy@1.0.3",
      "escape-html": "npm:escape-html@1.0.2",
      "etag": "npm:etag@1.7.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fresh": "npm:fresh@0.3.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http-errors": "npm:http-errors@1.3.1",
      "mime": "npm:mime@1.3.4",
      "ms": "npm:ms@0.7.1",
      "on-finished": "npm:on-finished@2.3.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "range-parser": "npm:range-parser@1.0.3",
      "statuses": "npm:statuses@1.2.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:serve-static@1.10.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "escape-html": "npm:escape-html@1.0.2",
      "parseurl": "npm:parseurl@1.3.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "send": "npm:send@0.13.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:sha.js@2.4.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.1.31": {
      "amdefine": "npm:amdefine@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.4.4": {
      "amdefine": "npm:amdefine@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:statuses@1.2.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:through@2.3.8": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:timers-browserify@1.4.1": {
      "process": "npm:process@0.11.2"
    },
    "npm:type-is@1.6.10": {
      "media-typer": "npm:media-typer@0.3.0",
      "mime-types": "npm:mime-types@2.1.8"
    },
    "npm:ua-parser-js@0.7.9": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:uncontrollable@3.1.4": {
      "invariant": "npm:invariant@2.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@0.14.3"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:warning@2.1.0": {
      "loose-envify": "npm:loose-envify@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
