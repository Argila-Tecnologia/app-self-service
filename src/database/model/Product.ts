import { Model } from '@nozbe/watermelondb';
import { field } from '@nozbe/watermelondb/decorators';

export class Product extends Model {
  static table = 'products';

  @field('product_id')
  product_id!: string;

  @field('name')
  name!: string;

  @field('pdv_id')
  pdv_id!: string;
}
