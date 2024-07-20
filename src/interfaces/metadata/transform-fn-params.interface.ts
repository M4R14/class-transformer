import { TransformationType } from '../../enums';
import { ClassTransformOptions } from '../class-transformer-options.interface';

export interface TransformFnParams<T = any> {
  value: any;
  key: string;
  obj: T;
  type: TransformationType;
  options: ClassTransformOptions;
}
