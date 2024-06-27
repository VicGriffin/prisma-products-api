/*
  Warnings:

  - You are about to drop the `products` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "products";

-- CreateTable
CREATE TABLE "products_table" (
    "product_Thumbnail" TEXT NOT NULL,
    "product_Title" TEXT NOT NULL,
    "productDescription" TEXT NOT NULL,
    "productCost" DOUBLE PRECISION NOT NULL,
    "onOffer" BOOLEAN NOT NULL,

    CONSTRAINT "products_table_pkey" PRIMARY KEY ("product_Thumbnail")
);

-- CreateIndex
CREATE UNIQUE INDEX "products_table_product_Thumbnail_product_Title_key" ON "products_table"("product_Thumbnail", "product_Title");
