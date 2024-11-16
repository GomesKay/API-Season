/*
  Warnings:

  - Added the required column `updated_at` to the `Catalog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Season` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Catalog" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Season" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;
