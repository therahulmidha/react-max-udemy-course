import { Fragment } from "react";
import Link from "next/link";

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-info">Nextjs is a fullstack framework</Link>
        </li>
        <li>
          <Link href="/news/extra">Something else</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
