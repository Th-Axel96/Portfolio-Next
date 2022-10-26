import Link from "next/link";

let styles = {
  error: "flex w-screen h-screen items-center justify-center bg-red-500",
};

const error404 = () => {
  return (
    <div className={styles.error}>
      <h1>eror 404 tu t'es perdue</h1>
      <Link href="/">
        <h1>
          Home
        </h1>
      </Link>
    </div>
  );
};

export default error404;
