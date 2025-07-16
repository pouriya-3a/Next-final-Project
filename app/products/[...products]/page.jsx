// const fetchData = async (id)=>{
//     try {
//         const res = await fetch(`https://fakestoreapi.com/products/${id}`)
//         const data = await res.json()
//         return data
//     } catch (error) {
        
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

import Image from 'next/image';

const fetchData = async (id) => {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) throw new Error('Product not found');
    return await res.json();
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }
};

export default async function ProductDetails({ params }) {
  console.log(params.products)
  const product = await fetchData(params.products[0]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <p className="text-gray-600">We couldn't find the product you're looking for.</p>
          <a 
            href="/" 
            className="mt-6 inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0 md:w-1/2 bg-gray-100 flex items-center justify-center p-8">
              <div className="relative w-full h-96">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="p-8 md:w-1/2">
              <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">
                {product.category}
              </div>
              <h1 className="mt-2 text-3xl font-extrabold text-gray-900">
                {product.title}
              </h1>
              <div className="mt-4 flex items-center">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-5 w-5 ${i < Math.round(product.rating?.rate) ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-gray-600">
                  {product.rating?.rate} ({product.rating?.count} reviews)
                </span>
              </div>
              <p className="mt-6 text-gray-700">{product.description}</p>
              <div className="mt-8 border-t border-gray-200 pt-6">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-gray-900">
                    ${product.price}
                  </span>
                  {product.price > 100 && (
                    <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Free Shipping
                    </span>
                  )}
                </div>
                <div className="mt-6">
                  <button
                    type="button"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md font-medium transition duration-150 ease-in-out"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export const generateMetadata = ({params}) =>{
  return {
    title : params.products[1],
    description : `Details about ${params.products[1]}`
  }
}