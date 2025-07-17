// const fetchData = async (id)=>{
//     try {
//         const res = await fetch(`https://fakestoreapi.com/products/${id}`)
//         const data = await res.json()
//         return data
//     } catch (error) {

import GamingCard from "../GamingCard";

//     }
// }
// export default async function productsDetails({params}) {
//     const product =  await fetchData(params.id)
//   return (
//     <div>
//       <h1>{product?.title}</h1>
//       <h2>{product?.image}</h2>
//       <p>product id : {params.id}</p>
//     </div>
//   )
// }

const fetchData = async (id) => {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) throw new Error("Product not found");
    return await res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
};

export default async function GamesDetails({ params }) {
  console.log(params.games?.[0]);
  const product = await fetchData(params.games?.[0]); // Fixed typo from gmaes to games

  if (!product) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          p: 2,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 6,
            textAlign: "center",
            maxWidth: 500,
            width: "100%",
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "text.primary",
            }}
          >
            Product Not Found
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 4,
              color: "text.secondary",
            }}
          >
            The requested game could not be found.
          </Typography>

          <NextLink href="/" passHref>
            <Button
              variant="contained"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                background: "linear-gradient(to right, #170C40, #4A2FBF)",
                "&:hover": {
                  background: "linear-gradient(to right, #4A2FBF, #170C40)",
                },
              }}
            >
              Back to Home
            </Button>
          </NextLink>
        </Paper>
      </Box>
    );}

    return <GamingCard product={product} />;

}
export const generateMetadata = ({ params }) => {
  return {
    title: params.games?.[1] || "Game Details",
    description: `Details about ${params.games?.[1] || "this game"}`,
  };
};
