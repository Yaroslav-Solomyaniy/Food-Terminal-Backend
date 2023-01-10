-- AlterTable
ALTER TABLE "User" ADD COLUMN     "banReason" TEXT DEFAULT 'No banned',
ADD COLUMN     "isBanned" BOOLEAN DEFAULT false;
