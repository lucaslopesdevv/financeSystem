/*
  Warnings:

  - You are about to drop the column `totalAmountOfSalary` on the `Finance` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Finance" DROP COLUMN "totalAmountOfSalary";

-- CreateTable
CREATE TABLE "Salary" (
    "id" TEXT NOT NULL,
    "totalAmountOfSalary" TEXT,

    CONSTRAINT "Salary_pkey" PRIMARY KEY ("id")
);
