import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('427489018');
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};