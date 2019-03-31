import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const Header = () => {
  return (
    <>
      <header>
        <h1>
          <Link href="/">
            <a>Dynamic dashboard</a>
          </Link>
        </h1>
      </header>
      <style jsx>{`
        header {
          padding: 0.5em 0;
          border-bottom: 10px solid var(--dark-gray);
          display: flex;
          align-items: center;
          justify-content: center;
          @media (--large-desktop) {
            justify-content: start;
          }
        }
        h1 {
          margin: 0 0 0 0.5em;
          transform: skew(-7deg);
        }
      `}</style>
    </>
  );
};

export default Header;
