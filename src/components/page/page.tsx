import Header from '../header/header';
import Meta from '../meta/meta';
import '../theme/variables.css';

const Page = ({ children }: { children: React.SFC<any> }) => {
  return (
    <main>
      <Meta />
      <Header />
      <div className="inner">{children}</div>
      <style jsx global>{`
        html {
          font-size: 16px;
          font-family: Verdana, Arial, sans-serif;
        }
        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }
        body {
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
      `}</style>
    </main>
  );
};

export default Page;
