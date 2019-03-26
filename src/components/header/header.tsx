import Link from 'next/link';

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
