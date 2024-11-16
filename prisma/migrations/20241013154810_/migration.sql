-- DropForeignKey
ALTER TABLE "Season" DROP CONSTRAINT "Season_catalogId_fkey";

-- AddForeignKey
ALTER TABLE "Season" ADD CONSTRAINT "Season_catalogId_fkey" FOREIGN KEY ("catalogId") REFERENCES "Catalog"("id") ON DELETE CASCADE ON UPDATE CASCADE;
