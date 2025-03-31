import { useEffect } from 'react';

export const useDisableScroll = (show: boolean) => {
  useEffect(() => {
    if (!show) {
      document.body.style.overflow = 'unset';
      return;
    }

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [show]);
};
