// const fetchData = async()=>{
//     try {
//         const res = await fetch('https://fakestoreapi.com/products')
//         const data = await res.json()
//         return data
//     } catch (error) {
//         console.log(error)
//     }
// }

import Link from "next/link";

// export default async function products() {
//     const products = await fetchData()
//     const items = products?.map((e,index) => (
//         <div key={index}>
//             <img src={e.image} alt={e.description} />
//             <h2>{e.title}</h2>
//             <p>{e.description.split(' ').slice(0,12).join(' ')}</p>
//         </div>
//     ))
//   return (
//     <div>
//       {items}
//     </div>
//   )
// }

const fetchData = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) throw new Error("Failed to fetch products");
    return await res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return null;
  }
};

export default async function Products() {
  const products = await fetchData();
  const items = products?.map((product) => (
    <Link key={product.id} href={`products/${product.id}/${product.title.replaceAll(' ','-')}`}>
      <div
        key={product.id}
        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
      >
        <div className="p-4 h-48 flex items-center justify-center bg-white">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        <div className="p-4 border-t border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">{product.title}</h2>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

          <div className="flex items-center justify-between mt-4">
            <span className="text-lg font-bold text-gray-900">${product.price}</span>
            <span
              className={`px-2 py-1 text-xs rounded-full ${
                product.rating.rate > 4
                  ? "bg-green-100 text-green-800"
                  : product.rating.rate > 3
                  ? "bg-blue-100 text-blue-800"
                  : "bg-yellow-100 text-yellow-800"
              }`}
            >
              {product.rating.rate} ★ ({product.rating.count})
            </span>
          </div>
        </div>
      </div>
    </Link>
  ));
  if (!products) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">Failed to load products</h1>
          <p className="text-gray-600 mt-2">Please try again later</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items}
        </div>
      </div>
    </div>
  );
}
