-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('ACAO', 'ANIMACAO', 'AVENTURA', 'COMEDIA', 'DOCUMENTARIO', 'DRAMA', 'FICCAO_CIENTIFICA', 'ROMANCE', 'SUSPENSE', 'TERROR');

-- CreateTable
CREATE TABLE "Catalog" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,
    "year_of_release" INTEGER NOT NULL,

    CONSTRAINT "Catalog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Season" (
    "id" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "episodes" INTEGER NOT NULL,
    "catalogId" TEXT NOT NULL,

    CONSTRAINT "Season_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Season" ADD CONSTRAINT "Season_catalogId_fkey" FOREIGN KEY ("catalogId") REFERENCES "Catalog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
