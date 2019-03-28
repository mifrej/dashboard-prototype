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
    </>
  );
};

export default Header;
