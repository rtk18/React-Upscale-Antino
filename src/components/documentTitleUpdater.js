import React, { useEffect } from 'react';

const DocumentTitleUpdater = () => {
  useEffect(() => {
    document.title = 'Component Mounted';

    // This function will be executed when any instance of the component unmounts
    return () => {
      document.title = 'Component Unmounted';
    };
  }, []); // The empty dependency array ensures that this effect runs only once on the initial mount and cleanup on unmount.

  return <div>Component with Document Title Update</div>;
};

export default DocumentTitleUpdater;
