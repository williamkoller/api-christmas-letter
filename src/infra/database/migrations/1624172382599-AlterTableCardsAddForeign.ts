import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterTableCardsAddForeign1624172382599
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "cards" ADD COLUMN "userId" uuid`);
    await queryRunner.query(
      `ALTER TABLE "cards" ADD CONSTRAINT "cards_user_id" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" DROP CONSTRAINT "cards_user_id";`,
    );
    await queryRunner.query(`ALTER TABLE "cards" DROP COLUMN "userId";`);
  }
}
