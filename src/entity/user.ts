import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ comment: '名称' })
  name: string;

  @Column({ select: false, comment: '密码' })
  password: string;

  @Column({ comment: '邮箱' })
  email: string;

  @Column({ comment: '头衔' })
  title: string;
}
