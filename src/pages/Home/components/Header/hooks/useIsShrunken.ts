import { useEffect, useState } from 'react';

export const useIsShrunken = () => {
	const [isShrunken, setShrunken] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const shrunken =
				document.body.scrollTop > 100 ||
				document.documentElement.scrollTop > 100;

			setShrunken(shrunken);
		};

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return isShrunken;
};
