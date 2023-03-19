import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

import styles from "../../styles/Home.module.css";

// This is with getStaticProps
export async function getServerSideProps({ params }) {
  const url = `https://nextjs-basics-demo.vercel.app/locals/${params.id}.json`;
  const res = await fetch(url);
  const data = await res.json();
  return {
    props: { car: data },
  };
}

// export async function getServerSideProps({ params }) {
//   const req = await fetch(`http://localhost:3000/locals/${params.id}.json`);
//   const data = await req.json();

//   return {
//     props: { car: data },
//   };
// }

export default function Car({ car }) {
  const router = useRouter();
  const { id, color } = router.query;

  console.log("car", car);

  console.log(id);
  console.log(color);

  return (
    <div className={styles.container}>
      <Head>
        <title>
          {id} {color}
        </title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {car.map((cars, index) => {
            return (
              <div key={index}>
                <p>{cars.id}</p>
                <Image
                  src={cars.image}
                  alt="Picture of the author"
                  width={300}
                  height={200}
                />
              </div>
            );
          })}
        </h1>

        {/* <Image src={car.image} alt={car.image} /> */}
      </main>
    </div>
  );
}

// export async function getStaticProps({ params }) {
//   const req = await fetch(`http://localhost:3001/${params.id}.json`);
//   const data = await req.json();

//   return {
//     props: { car: data },
//   };
// }

// export async function getStaticPaths() {
//   const req = await fetch("http://localhost:3001/cars.json");
//   const data = await req.json();

//   const paths = data.map((car) => {
//     return { params: { id: car } };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// }
