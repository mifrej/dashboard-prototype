import Header from '../header/header';
import Meta from '../meta/meta';
import '../theme/variables.css';

const Page = ({ children }: { children: React.SFC<any> }) => {
  return (
    <main>
      <Meta />
      <Header />
      <div className="inner">{children}</div>
      <style jsx>{`
        .inner {
          padding: 1em;
        }
      `}</style>
      <style jsx global>{`
        @font-face {
          font-family: 'radnika_next';
          src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
          font-weight: normal;
          font-style: normal;
        }
        html {
          font-size: 16px;
        }
        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }
        body {
          font-family: 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
          font-size: 1em;
          margin: 0;
          padding: 0;
        }
        a {
          text-decoration: none;
          color: var(--primary);
        }
        p {
          font-size: 1em;
          line-height: 1.6;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin-top: 0;
          margin-bottom: 0.5em;
          color: var(--dark-blue);
          font-weight: normal;
          font-family: 'Ubuntu', sans-serif;
          text-shadow: var(--text-shadow-default);
          font-size: 1em;
        }

        h1 {
          font-size: 2.5em;
        }

        h2 {
          font-size: 2em;
        }

        h3 {
          font-size: 1.8em;
          margin-bottom: 0.8em;
        }
        h4 {
          font-size: 1.4em;
        }
        h5 {
          font-size: 1.2em;
        }
        h4,
        h5,
        h6 {
          text-shadow: var(--text-shadow-thin);
        }
        h6 {
          color: var(--teal);
        }
        em {
          font-style: normal;
          color: var(--dark-gray);
        }
        button {
          border-radius: var(--border-radius-default);
          background-color: var(--light-gray);
          border: solid var(--border-width-default) var(--medium-gray);
          padding: 0.5em 1em;
        }
        button.primary,
        button.alert {
          color: var(--white);
          & svg {
            fill: var(--white);
          }
        }
        button.primary {
          background-color: var(--primary);
        }
        button.alert {
          background-color: var(--alert);
          border-color: var(--white);
        }
      `}</style>
    </main>
  );
};

export default Page;
