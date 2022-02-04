import { IsInt, IsOptional, IsPositive } from 'class-validator';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

const TABLE_NAME = 'Abonents';

@Entity(TABLE_NAME)
export class AbonentEntity extends BaseEntity
{
   public static readonly TABLE_NAME = TABLE_NAME;

   @PrimaryGeneratedColumn({type: 'int', unsigned: true})
   public readonly id!: number;

   @Column({type: 'varchar', length: 64, nullable: true, default: null})
   public readonly name?: string | null;

   @Column({type: 'varchar', length: 64, nullable: true, default: null})
   public readonly address?: string | null;

   @Column({type: 'varchar', length: 16, nullable: true, default: null})
   public readonly phone?: string | null;

   @Column({type: 'varchar', length: 16, nullable: true, default: null})
   public readonly mobile?: string | null;

   @IsPositive()
   @IsInt()
   @IsOptional()
   @Column({type: 'int', unsigned: true, nullable: true, default: null})
   public readonly kross?: number | null;

   @Column({type: 'int', unsigned: true, nullable: true, default: null})
   public readonly magistral?: number | null;

   @Column({type: 'int', unsigned: true, nullable: true, default: null})
   public readonly raspred?: number | null;

   @Column({type: 'int', unsigned: true, nullable: true, default: null})
   public readonly adsl?: number | null;

   @Column({type: 'double', nullable: true, default: null})
   public readonly latitude?: number | null;

   @Column({type: 'double', nullable: true, default: null})
   public readonly longitude?: number | null;
}
