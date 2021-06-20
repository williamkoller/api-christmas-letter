import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableCards1624156386451 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "cards" (
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "title" character varying NOT NULL,
        "description" character varying NOT NULL,
        "destiny" character varying NOT NULL,
        "date" date NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT "cards_pk" PRIMARY KEY ("id"));`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "cards"`);
  }
}
