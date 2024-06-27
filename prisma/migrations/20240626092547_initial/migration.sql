-- CreateTable
CREATE TABLE "products" (
    "product_T" TEXT NOT NULL,
    "product_Title" TEXT NOT NULL,
    "productDescription" TEXT NOT NULL,
    "productCost" DOUBLE PRECISION NOT NULL,
    "onOffer" BOOLEAN NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("product_T")
);
