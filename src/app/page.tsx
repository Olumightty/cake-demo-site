import Hero from "@/components/Hero/Hero";
import Products from "@/components/Products/Products";

export default async function Home(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const searchParams = await props.searchParams
  const category = searchParams?.category || 'All'
  return (
    <>
      <Hero/>
      <Products currentCategory={category as string}/>
    </>

  );
}
