import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterTableUsers1624160557966 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" ADD COLUMN "cardId" uuid`);
    await queryRunner.query(
      `ALTER TABLE "users" ADD CONSTRAINT "users_card_id" FOREIGN KEY ("cardId") REFERENCES "cards"("id") ON DELETE CASCADE ON UPDATE CASCADE;`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP CONSTRAINT "users_card_id";`);
  }
}
