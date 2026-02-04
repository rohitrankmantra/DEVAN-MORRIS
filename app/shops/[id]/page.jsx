import { products } from "@/data/products";
import ProductContent from "./product-content";

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-charcoal">Product not found</h1>
      </div>
    );
  }

  return <ProductContent product={product} />;
}
