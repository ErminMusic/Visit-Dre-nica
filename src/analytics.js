import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-6TCDM52R17');
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};