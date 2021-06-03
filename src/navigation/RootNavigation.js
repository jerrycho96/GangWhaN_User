import * as React from 'react';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}
export function goPop(name, params) {
  navigationRef.current?.goBack();
}
export function resetRoot(name, params) {
  navigationRef.current?.resetRoot({
    index: 0,
    routes: [{name}],
  });
}
