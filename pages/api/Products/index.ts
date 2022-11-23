import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import type { AnySchema, InferType } from 'yup';
import * as y from 'yup';
import type Prisma from '@prisma/client';

export const productSchema: y.SchemaOf<Prisma.Product> = y.object().shape({
  id: y.string().required(),
  description: y.string().required(),
  name: y.string().required(),
  price: y.number().required(),
  image: y.string().required(),
});

export const productsSchema = y.array(productSchema);
export type HTTPMethod =
  | 'GET'
  | 'HEAD'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'CONNECT'
  | 'OPTIONS'
  | 'TRACE'
  | 'PATCH';

type FetcherConfig<Schema extends AnySchema | null> = {
  readonly method: HTTPMethod;
  readonly schema: Schema;
  readonly body?: object;
  readonly config?: RequestInit;
};


import { ResponseError } from '../../../utils/responseError';

export async function fetcher<Schema extends null>(
  path: string,
  { method, body, config, schema }: FetcherConfig<Schema>,
): Promise<null>;

export async function fetcher<Schema extends AnySchema>(
  path: string,
  { method, body, config, schema }: FetcherConfig<Schema>,
): Promise<InferType<Schema>>;

export async function fetcher<Schema extends AnySchema | null>(
  path: string,
  { method, body, config, schema }: FetcherConfig<Schema>,
) {
  try {
    const response = await fetch(path, {
      ...config,
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      method,
      ...(body && { body: JSON.stringify(body) }),
    });
    if (response.ok) {
      if (!schema) {
        return null;
      }

      const data = await response.json();

      return schema.cast(data);
    }
    throw new ResponseError(response.statusText, response.status);
  } catch (err) {
    if (err instanceof ResponseError) {
      throw err;
    }
    throw new ResponseError('Something went wrong during fetching!');
  }
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const prisma = new PrismaClient();

  const products = await prisma.product.findMany();

  if (products.length) {
    console.log ("products: ", products)
    res.status(200).json(products);
    res.end();
  } else {
    res.status(404);
    res.end();
  }
};

export const getProducts = async () => {
    return await fetcher('/api/products', {
      method: 'GET',
      schema: productsSchema,
    });
  };