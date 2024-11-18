/*
  Warnings:

  - You are about to drop the column `otp` on the `User` table. All the data in the column will be lost.
  - Added the required column `expiry` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `otpHash` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "otp",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "expiry" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "otpHash" TEXT NOT NULL;
