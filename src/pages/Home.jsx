import { Card, Layout } from "../components";
import useData from "../hooks/useData";

const Home = () => {
  const { data } = useData();

  return (
    <Layout>
      <section className=" w-full flex flex-col items-center gap-14 py-10">
        {data.map((user) => (
          <article key={user.cell}>
            <Card user={user} />
          </article>
        ))}
      </section>
    </Layout>
  );
};

export default Home;
