
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Department
 * 
 */
export type Department = $Result.DefaultSelection<Prisma.$DepartmentPayload>
/**
 * Model LogReq
 * 
 */
export type LogReq = $Result.DefaultSelection<Prisma.$LogReqPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model Board
 * 
 */
export type Board = $Result.DefaultSelection<Prisma.$BoardPayload>
/**
 * Model Card
 * 
 */
export type Card = $Result.DefaultSelection<Prisma.$CardPayload>
/**
 * Model Tenant
 * 
 */
export type Tenant = $Result.DefaultSelection<Prisma.$TenantPayload>
/**
 * Model House
 * 
 */
export type House = $Result.DefaultSelection<Prisma.$HousePayload>
/**
 * Model Room
 * 
 */
export type Room = $Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model HouseImage
 * 
 */
export type HouseImage = $Result.DefaultSelection<Prisma.$HouseImagePayload>
/**
 * Model RoomImage
 * 
 */
export type RoomImage = $Result.DefaultSelection<Prisma.$RoomImagePayload>
/**
 * Model Contract
 * 
 */
export type Contract = $Result.DefaultSelection<Prisma.$ContractPayload>
/**
 * Model ContractDocument
 * 
 */
export type ContractDocument = $Result.DefaultSelection<Prisma.$ContractDocumentPayload>
/**
 * Model Enum
 * 
 */
export type Enum = $Result.DefaultSelection<Prisma.$EnumPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const HouseType: {
  COMMUNITY: 'COMMUNITY',
  APARTMENT: 'APARTMENT',
  VILLA: 'VILLA',
  TOWNHOUSE: 'TOWNHOUSE',
  COMMERCIAL: 'COMMERCIAL'
};

export type HouseType = (typeof HouseType)[keyof typeof HouseType]


export const RoomType: {
  MASTER_ROOM: 'MASTER_ROOM',
  SECOND_ROOM: 'SECOND_ROOM',
  PART_ROOM: 'PART_ROOM'
};

export type RoomType = (typeof RoomType)[keyof typeof RoomType]


export const PriceUnit: {
  PER_MONTH: 'PER_MONTH',
  PER_DAY: 'PER_DAY',
  PER_YEAR: 'PER_YEAR'
};

export type PriceUnit = (typeof PriceUnit)[keyof typeof PriceUnit]


export const AreaUnit: {
  SQUARE_METER: 'SQUARE_METER',
  SQUARE_FOOT: 'SQUARE_FOOT'
};

export type AreaUnit = (typeof AreaUnit)[keyof typeof AreaUnit]


export const Direction: {
  EAST: 'EAST',
  SOUTH_EAST: 'SOUTH_EAST',
  SOUTH: 'SOUTH',
  SOUTH_WEST: 'SOUTH_WEST',
  WEST: 'WEST',
  NORTH_WEST: 'NORTH_WEST',
  NORTH: 'NORTH',
  NORTH_EAST: 'NORTH_EAST'
};

export type Direction = (typeof Direction)[keyof typeof Direction]


export const HouseStatus: {
  AVAILABLE: 'AVAILABLE',
  RENTED: 'RENTED',
  UNDER_REPAIR: 'UNDER_REPAIR',
  UNAVAILABLE: 'UNAVAILABLE'
};

export type HouseStatus = (typeof HouseStatus)[keyof typeof HouseStatus]


export const ContractStatus: {
  DRAFT: 'DRAFT',
  ACTIVE: 'ACTIVE',
  EXPIRED: 'EXPIRED',
  TERMINATED: 'TERMINATED'
};

export type ContractStatus = (typeof ContractStatus)[keyof typeof ContractStatus]


export const EnumType: {
  SYSTEM: 'SYSTEM',
  BUSINESS: 'BUSINESS',
  NORMAL: 'NORMAL',
  FIELD: 'FIELD'
};

export type EnumType = (typeof EnumType)[keyof typeof EnumType]

}

export type HouseType = $Enums.HouseType

export const HouseType: typeof $Enums.HouseType

export type RoomType = $Enums.RoomType

export const RoomType: typeof $Enums.RoomType

export type PriceUnit = $Enums.PriceUnit

export const PriceUnit: typeof $Enums.PriceUnit

export type AreaUnit = $Enums.AreaUnit

export const AreaUnit: typeof $Enums.AreaUnit

export type Direction = $Enums.Direction

export const Direction: typeof $Enums.Direction

export type HouseStatus = $Enums.HouseStatus

export const HouseStatus: typeof $Enums.HouseStatus

export type ContractStatus = $Enums.ContractStatus

export const ContractStatus: typeof $Enums.ContractStatus

export type EnumType = $Enums.EnumType

export const EnumType: typeof $Enums.EnumType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.department`: Exposes CRUD operations for the **Department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.department.findMany()
    * ```
    */
  get department(): Prisma.DepartmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.logReq`: Exposes CRUD operations for the **LogReq** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LogReqs
    * const logReqs = await prisma.logReq.findMany()
    * ```
    */
  get logReq(): Prisma.LogReqDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.board`: Exposes CRUD operations for the **Board** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Boards
    * const boards = await prisma.board.findMany()
    * ```
    */
  get board(): Prisma.BoardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.card`: Exposes CRUD operations for the **Card** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cards
    * const cards = await prisma.card.findMany()
    * ```
    */
  get card(): Prisma.CardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tenant`: Exposes CRUD operations for the **Tenant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tenants
    * const tenants = await prisma.tenant.findMany()
    * ```
    */
  get tenant(): Prisma.TenantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.house`: Exposes CRUD operations for the **House** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Houses
    * const houses = await prisma.house.findMany()
    * ```
    */
  get house(): Prisma.HouseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.houseImage`: Exposes CRUD operations for the **HouseImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HouseImages
    * const houseImages = await prisma.houseImage.findMany()
    * ```
    */
  get houseImage(): Prisma.HouseImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roomImage`: Exposes CRUD operations for the **RoomImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomImages
    * const roomImages = await prisma.roomImage.findMany()
    * ```
    */
  get roomImage(): Prisma.RoomImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contract`: Exposes CRUD operations for the **Contract** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contracts
    * const contracts = await prisma.contract.findMany()
    * ```
    */
  get contract(): Prisma.ContractDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contractDocument`: Exposes CRUD operations for the **ContractDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContractDocuments
    * const contractDocuments = await prisma.contractDocument.findMany()
    * ```
    */
  get contractDocument(): Prisma.ContractDocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.enum`: Exposes CRUD operations for the **Enum** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enums
    * const enums = await prisma.enum.findMany()
    * ```
    */
  get enum(): Prisma.EnumDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Department: 'Department',
    LogReq: 'LogReq',
    Role: 'Role',
    Board: 'Board',
    Card: 'Card',
    Tenant: 'Tenant',
    House: 'House',
    Room: 'Room',
    HouseImage: 'HouseImage',
    RoomImage: 'RoomImage',
    Contract: 'Contract',
    ContractDocument: 'ContractDocument',
    Enum: 'Enum'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "department" | "logReq" | "role" | "board" | "card" | "tenant" | "house" | "room" | "houseImage" | "roomImage" | "contract" | "contractDocument" | "enum"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Department: {
        payload: Prisma.$DepartmentPayload<ExtArgs>
        fields: Prisma.DepartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findFirst: {
            args: Prisma.DepartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findMany: {
            args: Prisma.DepartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          create: {
            args: Prisma.DepartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          createMany: {
            args: Prisma.DepartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DepartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          update: {
            args: Prisma.DepartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          deleteMany: {
            args: Prisma.DepartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DepartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          aggregate: {
            args: Prisma.DepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartment>
          }
          groupBy: {
            args: Prisma.DepartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartmentCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentCountAggregateOutputType> | number
          }
        }
      }
      LogReq: {
        payload: Prisma.$LogReqPayload<ExtArgs>
        fields: Prisma.LogReqFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogReqFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogReqPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogReqFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogReqPayload>
          }
          findFirst: {
            args: Prisma.LogReqFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogReqPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogReqFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogReqPayload>
          }
          findMany: {
            args: Prisma.LogReqFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogReqPayload>[]
          }
          create: {
            args: Prisma.LogReqCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogReqPayload>
          }
          createMany: {
            args: Prisma.LogReqCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LogReqDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogReqPayload>
          }
          update: {
            args: Prisma.LogReqUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogReqPayload>
          }
          deleteMany: {
            args: Prisma.LogReqDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LogReqUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LogReqUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogReqPayload>
          }
          aggregate: {
            args: Prisma.LogReqAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogReq>
          }
          groupBy: {
            args: Prisma.LogReqGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogReqGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogReqCountArgs<ExtArgs>
            result: $Utils.Optional<LogReqCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      Board: {
        payload: Prisma.$BoardPayload<ExtArgs>
        fields: Prisma.BoardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BoardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BoardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          findFirst: {
            args: Prisma.BoardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BoardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          findMany: {
            args: Prisma.BoardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>[]
          }
          create: {
            args: Prisma.BoardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          createMany: {
            args: Prisma.BoardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BoardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          update: {
            args: Prisma.BoardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          deleteMany: {
            args: Prisma.BoardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BoardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BoardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          aggregate: {
            args: Prisma.BoardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBoard>
          }
          groupBy: {
            args: Prisma.BoardGroupByArgs<ExtArgs>
            result: $Utils.Optional<BoardGroupByOutputType>[]
          }
          count: {
            args: Prisma.BoardCountArgs<ExtArgs>
            result: $Utils.Optional<BoardCountAggregateOutputType> | number
          }
        }
      }
      Card: {
        payload: Prisma.$CardPayload<ExtArgs>
        fields: Prisma.CardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          findFirst: {
            args: Prisma.CardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          findMany: {
            args: Prisma.CardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>[]
          }
          create: {
            args: Prisma.CardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          createMany: {
            args: Prisma.CardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          update: {
            args: Prisma.CardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          deleteMany: {
            args: Prisma.CardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          aggregate: {
            args: Prisma.CardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCard>
          }
          groupBy: {
            args: Prisma.CardGroupByArgs<ExtArgs>
            result: $Utils.Optional<CardGroupByOutputType>[]
          }
          count: {
            args: Prisma.CardCountArgs<ExtArgs>
            result: $Utils.Optional<CardCountAggregateOutputType> | number
          }
        }
      }
      Tenant: {
        payload: Prisma.$TenantPayload<ExtArgs>
        fields: Prisma.TenantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TenantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findFirst: {
            args: Prisma.TenantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findMany: {
            args: Prisma.TenantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          create: {
            args: Prisma.TenantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          createMany: {
            args: Prisma.TenantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TenantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          update: {
            args: Prisma.TenantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          deleteMany: {
            args: Prisma.TenantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TenantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TenantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          aggregate: {
            args: Prisma.TenantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenant>
          }
          groupBy: {
            args: Prisma.TenantGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenantGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenantCountArgs<ExtArgs>
            result: $Utils.Optional<TenantCountAggregateOutputType> | number
          }
        }
      }
      House: {
        payload: Prisma.$HousePayload<ExtArgs>
        fields: Prisma.HouseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HouseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HouseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePayload>
          }
          findFirst: {
            args: Prisma.HouseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HouseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePayload>
          }
          findMany: {
            args: Prisma.HouseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePayload>[]
          }
          create: {
            args: Prisma.HouseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePayload>
          }
          createMany: {
            args: Prisma.HouseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HouseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePayload>
          }
          update: {
            args: Prisma.HouseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePayload>
          }
          deleteMany: {
            args: Prisma.HouseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HouseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HouseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePayload>
          }
          aggregate: {
            args: Prisma.HouseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHouse>
          }
          groupBy: {
            args: Prisma.HouseGroupByArgs<ExtArgs>
            result: $Utils.Optional<HouseGroupByOutputType>[]
          }
          count: {
            args: Prisma.HouseCountArgs<ExtArgs>
            result: $Utils.Optional<HouseCountAggregateOutputType> | number
          }
        }
      }
      Room: {
        payload: Prisma.$RoomPayload<ExtArgs>
        fields: Prisma.RoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findFirst: {
            args: Prisma.RoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findMany: {
            args: Prisma.RoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          create: {
            args: Prisma.RoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          createMany: {
            args: Prisma.RoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          update: {
            args: Prisma.RoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          deleteMany: {
            args: Prisma.RoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.RoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      HouseImage: {
        payload: Prisma.$HouseImagePayload<ExtArgs>
        fields: Prisma.HouseImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HouseImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HouseImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseImagePayload>
          }
          findFirst: {
            args: Prisma.HouseImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HouseImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseImagePayload>
          }
          findMany: {
            args: Prisma.HouseImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseImagePayload>[]
          }
          create: {
            args: Prisma.HouseImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseImagePayload>
          }
          createMany: {
            args: Prisma.HouseImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HouseImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseImagePayload>
          }
          update: {
            args: Prisma.HouseImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseImagePayload>
          }
          deleteMany: {
            args: Prisma.HouseImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HouseImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HouseImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HouseImagePayload>
          }
          aggregate: {
            args: Prisma.HouseImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHouseImage>
          }
          groupBy: {
            args: Prisma.HouseImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<HouseImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.HouseImageCountArgs<ExtArgs>
            result: $Utils.Optional<HouseImageCountAggregateOutputType> | number
          }
        }
      }
      RoomImage: {
        payload: Prisma.$RoomImagePayload<ExtArgs>
        fields: Prisma.RoomImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomImagePayload>
          }
          findFirst: {
            args: Prisma.RoomImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomImagePayload>
          }
          findMany: {
            args: Prisma.RoomImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomImagePayload>[]
          }
          create: {
            args: Prisma.RoomImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomImagePayload>
          }
          createMany: {
            args: Prisma.RoomImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoomImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomImagePayload>
          }
          update: {
            args: Prisma.RoomImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomImagePayload>
          }
          deleteMany: {
            args: Prisma.RoomImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoomImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomImagePayload>
          }
          aggregate: {
            args: Prisma.RoomImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoomImage>
          }
          groupBy: {
            args: Prisma.RoomImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomImageCountArgs<ExtArgs>
            result: $Utils.Optional<RoomImageCountAggregateOutputType> | number
          }
        }
      }
      Contract: {
        payload: Prisma.$ContractPayload<ExtArgs>
        fields: Prisma.ContractFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContractFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContractFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          findFirst: {
            args: Prisma.ContractFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContractFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          findMany: {
            args: Prisma.ContractFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>[]
          }
          create: {
            args: Prisma.ContractCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          createMany: {
            args: Prisma.ContractCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ContractDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          update: {
            args: Prisma.ContractUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          deleteMany: {
            args: Prisma.ContractDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContractUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContractUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          aggregate: {
            args: Prisma.ContractAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContract>
          }
          groupBy: {
            args: Prisma.ContractGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContractGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContractCountArgs<ExtArgs>
            result: $Utils.Optional<ContractCountAggregateOutputType> | number
          }
        }
      }
      ContractDocument: {
        payload: Prisma.$ContractDocumentPayload<ExtArgs>
        fields: Prisma.ContractDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContractDocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContractDocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractDocumentPayload>
          }
          findFirst: {
            args: Prisma.ContractDocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContractDocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractDocumentPayload>
          }
          findMany: {
            args: Prisma.ContractDocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractDocumentPayload>[]
          }
          create: {
            args: Prisma.ContractDocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractDocumentPayload>
          }
          createMany: {
            args: Prisma.ContractDocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ContractDocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractDocumentPayload>
          }
          update: {
            args: Prisma.ContractDocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractDocumentPayload>
          }
          deleteMany: {
            args: Prisma.ContractDocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContractDocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContractDocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractDocumentPayload>
          }
          aggregate: {
            args: Prisma.ContractDocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContractDocument>
          }
          groupBy: {
            args: Prisma.ContractDocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContractDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContractDocumentCountArgs<ExtArgs>
            result: $Utils.Optional<ContractDocumentCountAggregateOutputType> | number
          }
        }
      }
      Enum: {
        payload: Prisma.$EnumPayload<ExtArgs>
        fields: Prisma.EnumFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnumFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnumPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnumFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnumPayload>
          }
          findFirst: {
            args: Prisma.EnumFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnumPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnumFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnumPayload>
          }
          findMany: {
            args: Prisma.EnumFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnumPayload>[]
          }
          create: {
            args: Prisma.EnumCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnumPayload>
          }
          createMany: {
            args: Prisma.EnumCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EnumDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnumPayload>
          }
          update: {
            args: Prisma.EnumUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnumPayload>
          }
          deleteMany: {
            args: Prisma.EnumDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnumUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EnumUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnumPayload>
          }
          aggregate: {
            args: Prisma.EnumAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnum>
          }
          groupBy: {
            args: Prisma.EnumGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnumGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnumCountArgs<ExtArgs>
            result: $Utils.Optional<EnumCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    department?: DepartmentOmit
    logReq?: LogReqOmit
    role?: RoleOmit
    board?: BoardOmit
    card?: CardOmit
    tenant?: TenantOmit
    house?: HouseOmit
    room?: RoomOmit
    houseImage?: HouseImageOmit
    roomImage?: RoomImageOmit
    contract?: ContractOmit
    contractDocument?: ContractDocumentOmit
    enum?: EnumOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    roles: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | UserCountOutputTypeCountRolesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
  }


  /**
   * Count Type DepartmentCountOutputType
   */

  export type DepartmentCountOutputType = {
    users: number
    children: number
  }

  export type DepartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | DepartmentCountOutputTypeCountUsersArgs
    children?: boolean | DepartmentCountOutputTypeCountChildrenArgs
  }

  // Custom InputTypes
  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCountOutputType
     */
    select?: DepartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type BoardCountOutputType
   */

  export type BoardCountOutputType = {
    cards: number
  }

  export type BoardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cards?: boolean | BoardCountOutputTypeCountCardsArgs
  }

  // Custom InputTypes
  /**
   * BoardCountOutputType without action
   */
  export type BoardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardCountOutputType
     */
    select?: BoardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BoardCountOutputType without action
   */
  export type BoardCountOutputTypeCountCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardWhereInput
  }


  /**
   * Count Type TenantCountOutputType
   */

  export type TenantCountOutputType = {
    houses: number
    rooms: number
    contracts: number
  }

  export type TenantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    houses?: boolean | TenantCountOutputTypeCountHousesArgs
    rooms?: boolean | TenantCountOutputTypeCountRoomsArgs
    contracts?: boolean | TenantCountOutputTypeCountContractsArgs
  }

  // Custom InputTypes
  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantCountOutputType
     */
    select?: TenantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountHousesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HouseWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountContractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractWhereInput
  }


  /**
   * Count Type HouseCountOutputType
   */

  export type HouseCountOutputType = {
    images: number
    rooms: number
    contracts: number
  }

  export type HouseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | HouseCountOutputTypeCountImagesArgs
    rooms?: boolean | HouseCountOutputTypeCountRoomsArgs
    contracts?: boolean | HouseCountOutputTypeCountContractsArgs
  }

  // Custom InputTypes
  /**
   * HouseCountOutputType without action
   */
  export type HouseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseCountOutputType
     */
    select?: HouseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HouseCountOutputType without action
   */
  export type HouseCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HouseImageWhereInput
  }

  /**
   * HouseCountOutputType without action
   */
  export type HouseCountOutputTypeCountRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
  }

  /**
   * HouseCountOutputType without action
   */
  export type HouseCountOutputTypeCountContractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractWhereInput
  }


  /**
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    images: number
    contracts: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | RoomCountOutputTypeCountImagesArgs
    contracts?: boolean | RoomCountOutputTypeCountContractsArgs
  }

  // Custom InputTypes
  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomImageWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountContractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractWhereInput
  }


  /**
   * Count Type ContractCountOutputType
   */

  export type ContractCountOutputType = {
    documents: number
  }

  export type ContractCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | ContractCountOutputTypeCountDocumentsArgs
  }

  // Custom InputTypes
  /**
   * ContractCountOutputType without action
   */
  export type ContractCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractCountOutputType
     */
    select?: ContractCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContractCountOutputType without action
   */
  export type ContractCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractDocumentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    gender: number | null
    departmentId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    gender: number | null
    departmentId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    name: string | null
    pinyin: string | null
    email: string | null
    gender: number | null
    avatar: string | null
    birthDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    lastLoginAt: Date | null
    isVerified: boolean | null
    isActive: boolean | null
    departmentId: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    name: string | null
    pinyin: string | null
    email: string | null
    gender: number | null
    avatar: string | null
    birthDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    lastLoginAt: Date | null
    isVerified: boolean | null
    isActive: boolean | null
    departmentId: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    name: number
    pinyin: number
    email: number
    gender: number
    avatar: number
    birthDate: number
    createdAt: number
    updatedAt: number
    lastLoginAt: number
    isVerified: number
    isActive: number
    departmentId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    gender?: true
    departmentId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    gender?: true
    departmentId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
    pinyin?: true
    email?: true
    gender?: true
    avatar?: true
    birthDate?: true
    createdAt?: true
    updatedAt?: true
    lastLoginAt?: true
    isVerified?: true
    isActive?: true
    departmentId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
    pinyin?: true
    email?: true
    gender?: true
    avatar?: true
    birthDate?: true
    createdAt?: true
    updatedAt?: true
    lastLoginAt?: true
    isVerified?: true
    isActive?: true
    departmentId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
    pinyin?: true
    email?: true
    gender?: true
    avatar?: true
    birthDate?: true
    createdAt?: true
    updatedAt?: true
    lastLoginAt?: true
    isVerified?: true
    isActive?: true
    departmentId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    password: string
    name: string | null
    pinyin: string | null
    email: string | null
    gender: number | null
    avatar: string | null
    birthDate: Date | null
    createdAt: Date
    updatedAt: Date | null
    lastLoginAt: Date | null
    isVerified: boolean
    isActive: boolean
    departmentId: number | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    pinyin?: boolean
    email?: boolean
    gender?: boolean
    avatar?: boolean
    birthDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLoginAt?: boolean
    isVerified?: boolean
    isActive?: boolean
    departmentId?: boolean
    roles?: boolean | User$rolesArgs<ExtArgs>
    Department?: boolean | User$DepartmentArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    pinyin?: boolean
    email?: boolean
    gender?: boolean
    avatar?: boolean
    birthDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLoginAt?: boolean
    isVerified?: boolean
    isActive?: boolean
    departmentId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "name" | "pinyin" | "email" | "gender" | "avatar" | "birthDate" | "createdAt" | "updatedAt" | "lastLoginAt" | "isVerified" | "isActive" | "departmentId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | User$rolesArgs<ExtArgs>
    Department?: boolean | User$DepartmentArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      roles: Prisma.$RolePayload<ExtArgs>[]
      Department: Prisma.$DepartmentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      name: string | null
      pinyin: string | null
      email: string | null
      gender: number | null
      avatar: string | null
      birthDate: Date | null
      createdAt: Date
      updatedAt: Date | null
      lastLoginAt: Date | null
      isVerified: boolean
      isActive: boolean
      departmentId: number | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roles<T extends User$rolesArgs<ExtArgs> = {}>(args?: Subset<T, User$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Department<T extends User$DepartmentArgs<ExtArgs> = {}>(args?: Subset<T, User$DepartmentArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly pinyin: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'Int'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly birthDate: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly lastLoginAt: FieldRef<"User", 'DateTime'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly departmentId: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.roles
   */
  export type User$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    cursor?: RoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * User.Department
   */
  export type User$DepartmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    where?: DepartmentWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Department
   */

  export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null
    _avg: DepartmentAvgAggregateOutputType | null
    _sum: DepartmentSumAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  export type DepartmentAvgAggregateOutputType = {
    id: number | null
    parentId: number | null
  }

  export type DepartmentSumAggregateOutputType = {
    id: number | null
    parentId: number | null
  }

  export type DepartmentMinAggregateOutputType = {
    id: number | null
    name: string | null
    desc: string | null
    parentId: number | null
    createdAt: Date | null
  }

  export type DepartmentMaxAggregateOutputType = {
    id: number | null
    name: string | null
    desc: string | null
    parentId: number | null
    createdAt: Date | null
  }

  export type DepartmentCountAggregateOutputType = {
    id: number
    name: number
    desc: number
    parentId: number
    createdAt: number
    _all: number
  }


  export type DepartmentAvgAggregateInputType = {
    id?: true
    parentId?: true
  }

  export type DepartmentSumAggregateInputType = {
    id?: true
    parentId?: true
  }

  export type DepartmentMinAggregateInputType = {
    id?: true
    name?: true
    desc?: true
    parentId?: true
    createdAt?: true
  }

  export type DepartmentMaxAggregateInputType = {
    id?: true
    name?: true
    desc?: true
    parentId?: true
    createdAt?: true
  }

  export type DepartmentCountAggregateInputType = {
    id?: true
    name?: true
    desc?: true
    parentId?: true
    createdAt?: true
    _all?: true
  }

  export type DepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Department to aggregate.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departments
    **/
    _count?: true | DepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepartmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepartmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentMaxAggregateInputType
  }

  export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartment[P]>
      : GetScalarType<T[P], AggregateDepartment[P]>
  }




  export type DepartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithAggregationInput | DepartmentOrderByWithAggregationInput[]
    by: DepartmentScalarFieldEnum[] | DepartmentScalarFieldEnum
    having?: DepartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentCountAggregateInputType | true
    _avg?: DepartmentAvgAggregateInputType
    _sum?: DepartmentSumAggregateInputType
    _min?: DepartmentMinAggregateInputType
    _max?: DepartmentMaxAggregateInputType
  }

  export type DepartmentGroupByOutputType = {
    id: number
    name: string
    desc: string | null
    parentId: number | null
    createdAt: Date
    _count: DepartmentCountAggregateOutputType | null
    _avg: DepartmentAvgAggregateOutputType | null
    _sum: DepartmentSumAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  type GetDepartmentGroupByPayload<T extends DepartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    desc?: boolean
    parentId?: boolean
    createdAt?: boolean
    users?: boolean | Department$usersArgs<ExtArgs>
    parent?: boolean | Department$parentArgs<ExtArgs>
    children?: boolean | Department$childrenArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>



  export type DepartmentSelectScalar = {
    id?: boolean
    name?: boolean
    desc?: boolean
    parentId?: boolean
    createdAt?: boolean
  }

  export type DepartmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "desc" | "parentId" | "createdAt", ExtArgs["result"]["department"]>
  export type DepartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Department$usersArgs<ExtArgs>
    parent?: boolean | Department$parentArgs<ExtArgs>
    children?: boolean | Department$childrenArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DepartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Department"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      parent: Prisma.$DepartmentPayload<ExtArgs> | null
      children: Prisma.$DepartmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      desc: string | null
      parentId: number | null
      createdAt: Date
    }, ExtArgs["result"]["department"]>
    composites: {}
  }

  type DepartmentGetPayload<S extends boolean | null | undefined | DepartmentDefaultArgs> = $Result.GetResult<Prisma.$DepartmentPayload, S>

  type DepartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartmentCountAggregateInputType | true
    }

  export interface DepartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Department'], meta: { name: 'Department' } }
    /**
     * Find zero or one Department that matches the filter.
     * @param {DepartmentFindUniqueArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartmentFindUniqueArgs>(args: SelectSubset<T, DepartmentFindUniqueArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Department that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepartmentFindUniqueOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartmentFindFirstArgs>(args?: SelectSubset<T, DepartmentFindFirstArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.department.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.department.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departmentWithIdOnly = await prisma.department.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepartmentFindManyArgs>(args?: SelectSubset<T, DepartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Department.
     * @param {DepartmentCreateArgs} args - Arguments to create a Department.
     * @example
     * // Create one Department
     * const Department = await prisma.department.create({
     *   data: {
     *     // ... data to create a Department
     *   }
     * })
     * 
     */
    create<T extends DepartmentCreateArgs>(args: SelectSubset<T, DepartmentCreateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departments.
     * @param {DepartmentCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartmentCreateManyArgs>(args?: SelectSubset<T, DepartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Department.
     * @param {DepartmentDeleteArgs} args - Arguments to delete one Department.
     * @example
     * // Delete one Department
     * const Department = await prisma.department.delete({
     *   where: {
     *     // ... filter to delete one Department
     *   }
     * })
     * 
     */
    delete<T extends DepartmentDeleteArgs>(args: SelectSubset<T, DepartmentDeleteArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Department.
     * @param {DepartmentUpdateArgs} args - Arguments to update one Department.
     * @example
     * // Update one Department
     * const department = await prisma.department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartmentUpdateArgs>(args: SelectSubset<T, DepartmentUpdateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departments.
     * @param {DepartmentDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartmentDeleteManyArgs>(args?: SelectSubset<T, DepartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartmentUpdateManyArgs>(args: SelectSubset<T, DepartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Department.
     * @param {DepartmentUpsertArgs} args - Arguments to update or create a Department.
     * @example
     * // Update or create a Department
     * const department = await prisma.department.upsert({
     *   create: {
     *     // ... data to create a Department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Department we want to update
     *   }
     * })
     */
    upsert<T extends DepartmentUpsertArgs>(args: SelectSubset<T, DepartmentUpsertArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.department.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends DepartmentCountArgs>(
      args?: Subset<T, DepartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepartmentAggregateArgs>(args: Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>

    /**
     * Group by Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DepartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Department model
   */
  readonly fields: DepartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Department$usersArgs<ExtArgs> = {}>(args?: Subset<T, Department$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    parent<T extends Department$parentArgs<ExtArgs> = {}>(args?: Subset<T, Department$parentArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    children<T extends Department$childrenArgs<ExtArgs> = {}>(args?: Subset<T, Department$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Department model
   */
  interface DepartmentFieldRefs {
    readonly id: FieldRef<"Department", 'Int'>
    readonly name: FieldRef<"Department", 'String'>
    readonly desc: FieldRef<"Department", 'String'>
    readonly parentId: FieldRef<"Department", 'Int'>
    readonly createdAt: FieldRef<"Department", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Department findUnique
   */
  export type DepartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findUniqueOrThrow
   */
  export type DepartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findFirst
   */
  export type DepartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findFirstOrThrow
   */
  export type DepartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findMany
   */
  export type DepartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department create
   */
  export type DepartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Department.
     */
    data: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
  }

  /**
   * Department createMany
   */
  export type DepartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department update
   */
  export type DepartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Department.
     */
    data: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
    /**
     * Choose, which Department to update.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department updateMany
   */
  export type DepartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Department upsert
   */
  export type DepartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Department to update in case it exists.
     */
    where: DepartmentWhereUniqueInput
    /**
     * In case the Department found by the `where` argument doesn't exist, create a new Department with this data.
     */
    create: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
    /**
     * In case the Department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
  }

  /**
   * Department delete
   */
  export type DepartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter which Department to delete.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department deleteMany
   */
  export type DepartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to delete
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to delete.
     */
    limit?: number
  }

  /**
   * Department.users
   */
  export type Department$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Department.parent
   */
  export type Department$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    where?: DepartmentWhereInput
  }

  /**
   * Department.children
   */
  export type Department$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    cursor?: DepartmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department without action
   */
  export type DepartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
  }


  /**
   * Model LogReq
   */

  export type AggregateLogReq = {
    _count: LogReqCountAggregateOutputType | null
    _avg: LogReqAvgAggregateOutputType | null
    _sum: LogReqSumAggregateOutputType | null
    _min: LogReqMinAggregateOutputType | null
    _max: LogReqMaxAggregateOutputType | null
  }

  export type LogReqAvgAggregateOutputType = {
    id: number | null
    code: number | null
    status: number | null
  }

  export type LogReqSumAggregateOutputType = {
    id: number | null
    code: number | null
    status: number | null
  }

  export type LogReqMinAggregateOutputType = {
    id: number | null
    code: number | null
    level: string | null
    method: string | null
    path: string | null
    query: string | null
    body: string | null
    message: string | null
    duration: string | null
    status: number | null
    timestamp: Date | null
  }

  export type LogReqMaxAggregateOutputType = {
    id: number | null
    code: number | null
    level: string | null
    method: string | null
    path: string | null
    query: string | null
    body: string | null
    message: string | null
    duration: string | null
    status: number | null
    timestamp: Date | null
  }

  export type LogReqCountAggregateOutputType = {
    id: number
    code: number
    level: number
    method: number
    path: number
    query: number
    body: number
    message: number
    duration: number
    status: number
    timestamp: number
    _all: number
  }


  export type LogReqAvgAggregateInputType = {
    id?: true
    code?: true
    status?: true
  }

  export type LogReqSumAggregateInputType = {
    id?: true
    code?: true
    status?: true
  }

  export type LogReqMinAggregateInputType = {
    id?: true
    code?: true
    level?: true
    method?: true
    path?: true
    query?: true
    body?: true
    message?: true
    duration?: true
    status?: true
    timestamp?: true
  }

  export type LogReqMaxAggregateInputType = {
    id?: true
    code?: true
    level?: true
    method?: true
    path?: true
    query?: true
    body?: true
    message?: true
    duration?: true
    status?: true
    timestamp?: true
  }

  export type LogReqCountAggregateInputType = {
    id?: true
    code?: true
    level?: true
    method?: true
    path?: true
    query?: true
    body?: true
    message?: true
    duration?: true
    status?: true
    timestamp?: true
    _all?: true
  }

  export type LogReqAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogReq to aggregate.
     */
    where?: LogReqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogReqs to fetch.
     */
    orderBy?: LogReqOrderByWithRelationInput | LogReqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogReqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogReqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogReqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LogReqs
    **/
    _count?: true | LogReqCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LogReqAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LogReqSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogReqMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogReqMaxAggregateInputType
  }

  export type GetLogReqAggregateType<T extends LogReqAggregateArgs> = {
        [P in keyof T & keyof AggregateLogReq]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogReq[P]>
      : GetScalarType<T[P], AggregateLogReq[P]>
  }




  export type LogReqGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogReqWhereInput
    orderBy?: LogReqOrderByWithAggregationInput | LogReqOrderByWithAggregationInput[]
    by: LogReqScalarFieldEnum[] | LogReqScalarFieldEnum
    having?: LogReqScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogReqCountAggregateInputType | true
    _avg?: LogReqAvgAggregateInputType
    _sum?: LogReqSumAggregateInputType
    _min?: LogReqMinAggregateInputType
    _max?: LogReqMaxAggregateInputType
  }

  export type LogReqGroupByOutputType = {
    id: number
    code: number
    level: string | null
    method: string | null
    path: string | null
    query: string | null
    body: string | null
    message: string
    duration: string | null
    status: number | null
    timestamp: Date
    _count: LogReqCountAggregateOutputType | null
    _avg: LogReqAvgAggregateOutputType | null
    _sum: LogReqSumAggregateOutputType | null
    _min: LogReqMinAggregateOutputType | null
    _max: LogReqMaxAggregateOutputType | null
  }

  type GetLogReqGroupByPayload<T extends LogReqGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogReqGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogReqGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogReqGroupByOutputType[P]>
            : GetScalarType<T[P], LogReqGroupByOutputType[P]>
        }
      >
    >


  export type LogReqSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    level?: boolean
    method?: boolean
    path?: boolean
    query?: boolean
    body?: boolean
    message?: boolean
    duration?: boolean
    status?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["logReq"]>



  export type LogReqSelectScalar = {
    id?: boolean
    code?: boolean
    level?: boolean
    method?: boolean
    path?: boolean
    query?: boolean
    body?: boolean
    message?: boolean
    duration?: boolean
    status?: boolean
    timestamp?: boolean
  }

  export type LogReqOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "level" | "method" | "path" | "query" | "body" | "message" | "duration" | "status" | "timestamp", ExtArgs["result"]["logReq"]>

  export type $LogReqPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LogReq"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: number
      level: string | null
      method: string | null
      path: string | null
      query: string | null
      body: string | null
      message: string
      duration: string | null
      status: number | null
      timestamp: Date
    }, ExtArgs["result"]["logReq"]>
    composites: {}
  }

  type LogReqGetPayload<S extends boolean | null | undefined | LogReqDefaultArgs> = $Result.GetResult<Prisma.$LogReqPayload, S>

  type LogReqCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LogReqFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogReqCountAggregateInputType | true
    }

  export interface LogReqDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LogReq'], meta: { name: 'LogReq' } }
    /**
     * Find zero or one LogReq that matches the filter.
     * @param {LogReqFindUniqueArgs} args - Arguments to find a LogReq
     * @example
     * // Get one LogReq
     * const logReq = await prisma.logReq.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogReqFindUniqueArgs>(args: SelectSubset<T, LogReqFindUniqueArgs<ExtArgs>>): Prisma__LogReqClient<$Result.GetResult<Prisma.$LogReqPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LogReq that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LogReqFindUniqueOrThrowArgs} args - Arguments to find a LogReq
     * @example
     * // Get one LogReq
     * const logReq = await prisma.logReq.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogReqFindUniqueOrThrowArgs>(args: SelectSubset<T, LogReqFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LogReqClient<$Result.GetResult<Prisma.$LogReqPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogReq that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogReqFindFirstArgs} args - Arguments to find a LogReq
     * @example
     * // Get one LogReq
     * const logReq = await prisma.logReq.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogReqFindFirstArgs>(args?: SelectSubset<T, LogReqFindFirstArgs<ExtArgs>>): Prisma__LogReqClient<$Result.GetResult<Prisma.$LogReqPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogReq that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogReqFindFirstOrThrowArgs} args - Arguments to find a LogReq
     * @example
     * // Get one LogReq
     * const logReq = await prisma.logReq.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogReqFindFirstOrThrowArgs>(args?: SelectSubset<T, LogReqFindFirstOrThrowArgs<ExtArgs>>): Prisma__LogReqClient<$Result.GetResult<Prisma.$LogReqPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LogReqs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogReqFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LogReqs
     * const logReqs = await prisma.logReq.findMany()
     * 
     * // Get first 10 LogReqs
     * const logReqs = await prisma.logReq.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logReqWithIdOnly = await prisma.logReq.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LogReqFindManyArgs>(args?: SelectSubset<T, LogReqFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogReqPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LogReq.
     * @param {LogReqCreateArgs} args - Arguments to create a LogReq.
     * @example
     * // Create one LogReq
     * const LogReq = await prisma.logReq.create({
     *   data: {
     *     // ... data to create a LogReq
     *   }
     * })
     * 
     */
    create<T extends LogReqCreateArgs>(args: SelectSubset<T, LogReqCreateArgs<ExtArgs>>): Prisma__LogReqClient<$Result.GetResult<Prisma.$LogReqPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LogReqs.
     * @param {LogReqCreateManyArgs} args - Arguments to create many LogReqs.
     * @example
     * // Create many LogReqs
     * const logReq = await prisma.logReq.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LogReqCreateManyArgs>(args?: SelectSubset<T, LogReqCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LogReq.
     * @param {LogReqDeleteArgs} args - Arguments to delete one LogReq.
     * @example
     * // Delete one LogReq
     * const LogReq = await prisma.logReq.delete({
     *   where: {
     *     // ... filter to delete one LogReq
     *   }
     * })
     * 
     */
    delete<T extends LogReqDeleteArgs>(args: SelectSubset<T, LogReqDeleteArgs<ExtArgs>>): Prisma__LogReqClient<$Result.GetResult<Prisma.$LogReqPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LogReq.
     * @param {LogReqUpdateArgs} args - Arguments to update one LogReq.
     * @example
     * // Update one LogReq
     * const logReq = await prisma.logReq.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LogReqUpdateArgs>(args: SelectSubset<T, LogReqUpdateArgs<ExtArgs>>): Prisma__LogReqClient<$Result.GetResult<Prisma.$LogReqPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LogReqs.
     * @param {LogReqDeleteManyArgs} args - Arguments to filter LogReqs to delete.
     * @example
     * // Delete a few LogReqs
     * const { count } = await prisma.logReq.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LogReqDeleteManyArgs>(args?: SelectSubset<T, LogReqDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogReqs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogReqUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LogReqs
     * const logReq = await prisma.logReq.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LogReqUpdateManyArgs>(args: SelectSubset<T, LogReqUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LogReq.
     * @param {LogReqUpsertArgs} args - Arguments to update or create a LogReq.
     * @example
     * // Update or create a LogReq
     * const logReq = await prisma.logReq.upsert({
     *   create: {
     *     // ... data to create a LogReq
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LogReq we want to update
     *   }
     * })
     */
    upsert<T extends LogReqUpsertArgs>(args: SelectSubset<T, LogReqUpsertArgs<ExtArgs>>): Prisma__LogReqClient<$Result.GetResult<Prisma.$LogReqPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LogReqs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogReqCountArgs} args - Arguments to filter LogReqs to count.
     * @example
     * // Count the number of LogReqs
     * const count = await prisma.logReq.count({
     *   where: {
     *     // ... the filter for the LogReqs we want to count
     *   }
     * })
    **/
    count<T extends LogReqCountArgs>(
      args?: Subset<T, LogReqCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogReqCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LogReq.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogReqAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LogReqAggregateArgs>(args: Subset<T, LogReqAggregateArgs>): Prisma.PrismaPromise<GetLogReqAggregateType<T>>

    /**
     * Group by LogReq.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogReqGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LogReqGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogReqGroupByArgs['orderBy'] }
        : { orderBy?: LogReqGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LogReqGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogReqGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LogReq model
   */
  readonly fields: LogReqFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LogReq.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogReqClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LogReq model
   */
  interface LogReqFieldRefs {
    readonly id: FieldRef<"LogReq", 'Int'>
    readonly code: FieldRef<"LogReq", 'Int'>
    readonly level: FieldRef<"LogReq", 'String'>
    readonly method: FieldRef<"LogReq", 'String'>
    readonly path: FieldRef<"LogReq", 'String'>
    readonly query: FieldRef<"LogReq", 'String'>
    readonly body: FieldRef<"LogReq", 'String'>
    readonly message: FieldRef<"LogReq", 'String'>
    readonly duration: FieldRef<"LogReq", 'String'>
    readonly status: FieldRef<"LogReq", 'Int'>
    readonly timestamp: FieldRef<"LogReq", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LogReq findUnique
   */
  export type LogReqFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogReq
     */
    select?: LogReqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogReq
     */
    omit?: LogReqOmit<ExtArgs> | null
    /**
     * Filter, which LogReq to fetch.
     */
    where: LogReqWhereUniqueInput
  }

  /**
   * LogReq findUniqueOrThrow
   */
  export type LogReqFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogReq
     */
    select?: LogReqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogReq
     */
    omit?: LogReqOmit<ExtArgs> | null
    /**
     * Filter, which LogReq to fetch.
     */
    where: LogReqWhereUniqueInput
  }

  /**
   * LogReq findFirst
   */
  export type LogReqFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogReq
     */
    select?: LogReqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogReq
     */
    omit?: LogReqOmit<ExtArgs> | null
    /**
     * Filter, which LogReq to fetch.
     */
    where?: LogReqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogReqs to fetch.
     */
    orderBy?: LogReqOrderByWithRelationInput | LogReqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogReqs.
     */
    cursor?: LogReqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogReqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogReqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogReqs.
     */
    distinct?: LogReqScalarFieldEnum | LogReqScalarFieldEnum[]
  }

  /**
   * LogReq findFirstOrThrow
   */
  export type LogReqFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogReq
     */
    select?: LogReqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogReq
     */
    omit?: LogReqOmit<ExtArgs> | null
    /**
     * Filter, which LogReq to fetch.
     */
    where?: LogReqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogReqs to fetch.
     */
    orderBy?: LogReqOrderByWithRelationInput | LogReqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogReqs.
     */
    cursor?: LogReqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogReqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogReqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogReqs.
     */
    distinct?: LogReqScalarFieldEnum | LogReqScalarFieldEnum[]
  }

  /**
   * LogReq findMany
   */
  export type LogReqFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogReq
     */
    select?: LogReqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogReq
     */
    omit?: LogReqOmit<ExtArgs> | null
    /**
     * Filter, which LogReqs to fetch.
     */
    where?: LogReqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogReqs to fetch.
     */
    orderBy?: LogReqOrderByWithRelationInput | LogReqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LogReqs.
     */
    cursor?: LogReqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogReqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogReqs.
     */
    skip?: number
    distinct?: LogReqScalarFieldEnum | LogReqScalarFieldEnum[]
  }

  /**
   * LogReq create
   */
  export type LogReqCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogReq
     */
    select?: LogReqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogReq
     */
    omit?: LogReqOmit<ExtArgs> | null
    /**
     * The data needed to create a LogReq.
     */
    data: XOR<LogReqCreateInput, LogReqUncheckedCreateInput>
  }

  /**
   * LogReq createMany
   */
  export type LogReqCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LogReqs.
     */
    data: LogReqCreateManyInput | LogReqCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LogReq update
   */
  export type LogReqUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogReq
     */
    select?: LogReqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogReq
     */
    omit?: LogReqOmit<ExtArgs> | null
    /**
     * The data needed to update a LogReq.
     */
    data: XOR<LogReqUpdateInput, LogReqUncheckedUpdateInput>
    /**
     * Choose, which LogReq to update.
     */
    where: LogReqWhereUniqueInput
  }

  /**
   * LogReq updateMany
   */
  export type LogReqUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LogReqs.
     */
    data: XOR<LogReqUpdateManyMutationInput, LogReqUncheckedUpdateManyInput>
    /**
     * Filter which LogReqs to update
     */
    where?: LogReqWhereInput
    /**
     * Limit how many LogReqs to update.
     */
    limit?: number
  }

  /**
   * LogReq upsert
   */
  export type LogReqUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogReq
     */
    select?: LogReqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogReq
     */
    omit?: LogReqOmit<ExtArgs> | null
    /**
     * The filter to search for the LogReq to update in case it exists.
     */
    where: LogReqWhereUniqueInput
    /**
     * In case the LogReq found by the `where` argument doesn't exist, create a new LogReq with this data.
     */
    create: XOR<LogReqCreateInput, LogReqUncheckedCreateInput>
    /**
     * In case the LogReq was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogReqUpdateInput, LogReqUncheckedUpdateInput>
  }

  /**
   * LogReq delete
   */
  export type LogReqDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogReq
     */
    select?: LogReqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogReq
     */
    omit?: LogReqOmit<ExtArgs> | null
    /**
     * Filter which LogReq to delete.
     */
    where: LogReqWhereUniqueInput
  }

  /**
   * LogReq deleteMany
   */
  export type LogReqDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogReqs to delete
     */
    where?: LogReqWhereInput
    /**
     * Limit how many LogReqs to delete.
     */
    limit?: number
  }

  /**
   * LogReq without action
   */
  export type LogReqDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogReq
     */
    select?: LogReqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogReq
     */
    omit?: LogReqOmit<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    name: string | null
    desc: string | null
    createTime: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    name: string | null
    desc: string | null
    createTime: Date | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    desc: number
    createTime: number
    permissions: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    desc?: true
    createTime?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    desc?: true
    createTime?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    desc?: true
    createTime?: true
    permissions?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: number
    name: string
    desc: string | null
    createTime: Date
    permissions: JsonValue | null
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    desc?: boolean
    createTime?: boolean
    permissions?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>



  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
    desc?: boolean
    createTime?: boolean
    permissions?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "desc" | "createTime" | "permissions", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      desc: string | null
      createTime: Date
      permissions: Prisma.JsonValue | null
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'Int'>
    readonly name: FieldRef<"Role", 'String'>
    readonly desc: FieldRef<"Role", 'String'>
    readonly createTime: FieldRef<"Role", 'DateTime'>
    readonly permissions: FieldRef<"Role", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model Board
   */

  export type AggregateBoard = {
    _count: BoardCountAggregateOutputType | null
    _avg: BoardAvgAggregateOutputType | null
    _sum: BoardSumAggregateOutputType | null
    _min: BoardMinAggregateOutputType | null
    _max: BoardMaxAggregateOutputType | null
  }

  export type BoardAvgAggregateOutputType = {
    id: number | null
    indicatorCount: number | null
  }

  export type BoardSumAggregateOutputType = {
    id: number | null
    indicatorCount: number | null
  }

  export type BoardMinAggregateOutputType = {
    id: number | null
    title: string | null
    desc: string | null
    createTime: Date | null
    creator: string | null
    indicatorCount: number | null
  }

  export type BoardMaxAggregateOutputType = {
    id: number | null
    title: string | null
    desc: string | null
    createTime: Date | null
    creator: string | null
    indicatorCount: number | null
  }

  export type BoardCountAggregateOutputType = {
    id: number
    title: number
    desc: number
    createTime: number
    creator: number
    indicatorCount: number
    _all: number
  }


  export type BoardAvgAggregateInputType = {
    id?: true
    indicatorCount?: true
  }

  export type BoardSumAggregateInputType = {
    id?: true
    indicatorCount?: true
  }

  export type BoardMinAggregateInputType = {
    id?: true
    title?: true
    desc?: true
    createTime?: true
    creator?: true
    indicatorCount?: true
  }

  export type BoardMaxAggregateInputType = {
    id?: true
    title?: true
    desc?: true
    createTime?: true
    creator?: true
    indicatorCount?: true
  }

  export type BoardCountAggregateInputType = {
    id?: true
    title?: true
    desc?: true
    createTime?: true
    creator?: true
    indicatorCount?: true
    _all?: true
  }

  export type BoardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Board to aggregate.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Boards
    **/
    _count?: true | BoardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BoardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BoardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoardMaxAggregateInputType
  }

  export type GetBoardAggregateType<T extends BoardAggregateArgs> = {
        [P in keyof T & keyof AggregateBoard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoard[P]>
      : GetScalarType<T[P], AggregateBoard[P]>
  }




  export type BoardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoardWhereInput
    orderBy?: BoardOrderByWithAggregationInput | BoardOrderByWithAggregationInput[]
    by: BoardScalarFieldEnum[] | BoardScalarFieldEnum
    having?: BoardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoardCountAggregateInputType | true
    _avg?: BoardAvgAggregateInputType
    _sum?: BoardSumAggregateInputType
    _min?: BoardMinAggregateInputType
    _max?: BoardMaxAggregateInputType
  }

  export type BoardGroupByOutputType = {
    id: number
    title: string
    desc: string | null
    createTime: Date
    creator: string | null
    indicatorCount: number | null
    _count: BoardCountAggregateOutputType | null
    _avg: BoardAvgAggregateOutputType | null
    _sum: BoardSumAggregateOutputType | null
    _min: BoardMinAggregateOutputType | null
    _max: BoardMaxAggregateOutputType | null
  }

  type GetBoardGroupByPayload<T extends BoardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BoardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoardGroupByOutputType[P]>
            : GetScalarType<T[P], BoardGroupByOutputType[P]>
        }
      >
    >


  export type BoardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    desc?: boolean
    createTime?: boolean
    creator?: boolean
    indicatorCount?: boolean
    cards?: boolean | Board$cardsArgs<ExtArgs>
    _count?: boolean | BoardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["board"]>



  export type BoardSelectScalar = {
    id?: boolean
    title?: boolean
    desc?: boolean
    createTime?: boolean
    creator?: boolean
    indicatorCount?: boolean
  }

  export type BoardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "desc" | "createTime" | "creator" | "indicatorCount", ExtArgs["result"]["board"]>
  export type BoardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cards?: boolean | Board$cardsArgs<ExtArgs>
    _count?: boolean | BoardCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BoardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Board"
    objects: {
      cards: Prisma.$CardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      desc: string | null
      createTime: Date
      creator: string | null
      indicatorCount: number | null
    }, ExtArgs["result"]["board"]>
    composites: {}
  }

  type BoardGetPayload<S extends boolean | null | undefined | BoardDefaultArgs> = $Result.GetResult<Prisma.$BoardPayload, S>

  type BoardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BoardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BoardCountAggregateInputType | true
    }

  export interface BoardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Board'], meta: { name: 'Board' } }
    /**
     * Find zero or one Board that matches the filter.
     * @param {BoardFindUniqueArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BoardFindUniqueArgs>(args: SelectSubset<T, BoardFindUniqueArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Board that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BoardFindUniqueOrThrowArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BoardFindUniqueOrThrowArgs>(args: SelectSubset<T, BoardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Board that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFindFirstArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BoardFindFirstArgs>(args?: SelectSubset<T, BoardFindFirstArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Board that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFindFirstOrThrowArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BoardFindFirstOrThrowArgs>(args?: SelectSubset<T, BoardFindFirstOrThrowArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Boards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Boards
     * const boards = await prisma.board.findMany()
     * 
     * // Get first 10 Boards
     * const boards = await prisma.board.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boardWithIdOnly = await prisma.board.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BoardFindManyArgs>(args?: SelectSubset<T, BoardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Board.
     * @param {BoardCreateArgs} args - Arguments to create a Board.
     * @example
     * // Create one Board
     * const Board = await prisma.board.create({
     *   data: {
     *     // ... data to create a Board
     *   }
     * })
     * 
     */
    create<T extends BoardCreateArgs>(args: SelectSubset<T, BoardCreateArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Boards.
     * @param {BoardCreateManyArgs} args - Arguments to create many Boards.
     * @example
     * // Create many Boards
     * const board = await prisma.board.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BoardCreateManyArgs>(args?: SelectSubset<T, BoardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Board.
     * @param {BoardDeleteArgs} args - Arguments to delete one Board.
     * @example
     * // Delete one Board
     * const Board = await prisma.board.delete({
     *   where: {
     *     // ... filter to delete one Board
     *   }
     * })
     * 
     */
    delete<T extends BoardDeleteArgs>(args: SelectSubset<T, BoardDeleteArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Board.
     * @param {BoardUpdateArgs} args - Arguments to update one Board.
     * @example
     * // Update one Board
     * const board = await prisma.board.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BoardUpdateArgs>(args: SelectSubset<T, BoardUpdateArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Boards.
     * @param {BoardDeleteManyArgs} args - Arguments to filter Boards to delete.
     * @example
     * // Delete a few Boards
     * const { count } = await prisma.board.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BoardDeleteManyArgs>(args?: SelectSubset<T, BoardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Boards
     * const board = await prisma.board.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BoardUpdateManyArgs>(args: SelectSubset<T, BoardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Board.
     * @param {BoardUpsertArgs} args - Arguments to update or create a Board.
     * @example
     * // Update or create a Board
     * const board = await prisma.board.upsert({
     *   create: {
     *     // ... data to create a Board
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Board we want to update
     *   }
     * })
     */
    upsert<T extends BoardUpsertArgs>(args: SelectSubset<T, BoardUpsertArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardCountArgs} args - Arguments to filter Boards to count.
     * @example
     * // Count the number of Boards
     * const count = await prisma.board.count({
     *   where: {
     *     // ... the filter for the Boards we want to count
     *   }
     * })
    **/
    count<T extends BoardCountArgs>(
      args?: Subset<T, BoardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Board.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BoardAggregateArgs>(args: Subset<T, BoardAggregateArgs>): Prisma.PrismaPromise<GetBoardAggregateType<T>>

    /**
     * Group by Board.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BoardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoardGroupByArgs['orderBy'] }
        : { orderBy?: BoardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BoardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Board model
   */
  readonly fields: BoardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Board.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BoardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cards<T extends Board$cardsArgs<ExtArgs> = {}>(args?: Subset<T, Board$cardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Board model
   */
  interface BoardFieldRefs {
    readonly id: FieldRef<"Board", 'Int'>
    readonly title: FieldRef<"Board", 'String'>
    readonly desc: FieldRef<"Board", 'String'>
    readonly createTime: FieldRef<"Board", 'DateTime'>
    readonly creator: FieldRef<"Board", 'String'>
    readonly indicatorCount: FieldRef<"Board", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Board findUnique
   */
  export type BoardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Board to fetch.
     */
    where: BoardWhereUniqueInput
  }

  /**
   * Board findUniqueOrThrow
   */
  export type BoardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Board to fetch.
     */
    where: BoardWhereUniqueInput
  }

  /**
   * Board findFirst
   */
  export type BoardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Board to fetch.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Boards.
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Boards.
     */
    distinct?: BoardScalarFieldEnum | BoardScalarFieldEnum[]
  }

  /**
   * Board findFirstOrThrow
   */
  export type BoardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Board to fetch.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Boards.
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Boards.
     */
    distinct?: BoardScalarFieldEnum | BoardScalarFieldEnum[]
  }

  /**
   * Board findMany
   */
  export type BoardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Boards to fetch.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Boards.
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    distinct?: BoardScalarFieldEnum | BoardScalarFieldEnum[]
  }

  /**
   * Board create
   */
  export type BoardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * The data needed to create a Board.
     */
    data: XOR<BoardCreateInput, BoardUncheckedCreateInput>
  }

  /**
   * Board createMany
   */
  export type BoardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Boards.
     */
    data: BoardCreateManyInput | BoardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Board update
   */
  export type BoardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * The data needed to update a Board.
     */
    data: XOR<BoardUpdateInput, BoardUncheckedUpdateInput>
    /**
     * Choose, which Board to update.
     */
    where: BoardWhereUniqueInput
  }

  /**
   * Board updateMany
   */
  export type BoardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Boards.
     */
    data: XOR<BoardUpdateManyMutationInput, BoardUncheckedUpdateManyInput>
    /**
     * Filter which Boards to update
     */
    where?: BoardWhereInput
    /**
     * Limit how many Boards to update.
     */
    limit?: number
  }

  /**
   * Board upsert
   */
  export type BoardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * The filter to search for the Board to update in case it exists.
     */
    where: BoardWhereUniqueInput
    /**
     * In case the Board found by the `where` argument doesn't exist, create a new Board with this data.
     */
    create: XOR<BoardCreateInput, BoardUncheckedCreateInput>
    /**
     * In case the Board was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BoardUpdateInput, BoardUncheckedUpdateInput>
  }

  /**
   * Board delete
   */
  export type BoardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter which Board to delete.
     */
    where: BoardWhereUniqueInput
  }

  /**
   * Board deleteMany
   */
  export type BoardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Boards to delete
     */
    where?: BoardWhereInput
    /**
     * Limit how many Boards to delete.
     */
    limit?: number
  }

  /**
   * Board.cards
   */
  export type Board$cardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    where?: CardWhereInput
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    cursor?: CardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Board without action
   */
  export type BoardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
  }


  /**
   * Model Card
   */

  export type AggregateCard = {
    _count: CardCountAggregateOutputType | null
    _avg: CardAvgAggregateOutputType | null
    _sum: CardSumAggregateOutputType | null
    _min: CardMinAggregateOutputType | null
    _max: CardMaxAggregateOutputType | null
  }

  export type CardAvgAggregateOutputType = {
    id: number | null
    x: number | null
    y: number | null
    w: number | null
    h: number | null
    boardId: number | null
  }

  export type CardSumAggregateOutputType = {
    id: number | null
    x: number | null
    y: number | null
    w: number | null
    h: number | null
    boardId: number | null
  }

  export type CardMinAggregateOutputType = {
    id: number | null
    title: string | null
    createTime: Date | null
    type: string | null
    value: string | null
    x: number | null
    y: number | null
    w: number | null
    h: number | null
    i: string | null
    boardId: number | null
  }

  export type CardMaxAggregateOutputType = {
    id: number | null
    title: string | null
    createTime: Date | null
    type: string | null
    value: string | null
    x: number | null
    y: number | null
    w: number | null
    h: number | null
    i: string | null
    boardId: number | null
  }

  export type CardCountAggregateOutputType = {
    id: number
    title: number
    createTime: number
    type: number
    value: number
    x: number
    y: number
    w: number
    h: number
    i: number
    config: number
    data: number
    boardId: number
    _all: number
  }


  export type CardAvgAggregateInputType = {
    id?: true
    x?: true
    y?: true
    w?: true
    h?: true
    boardId?: true
  }

  export type CardSumAggregateInputType = {
    id?: true
    x?: true
    y?: true
    w?: true
    h?: true
    boardId?: true
  }

  export type CardMinAggregateInputType = {
    id?: true
    title?: true
    createTime?: true
    type?: true
    value?: true
    x?: true
    y?: true
    w?: true
    h?: true
    i?: true
    boardId?: true
  }

  export type CardMaxAggregateInputType = {
    id?: true
    title?: true
    createTime?: true
    type?: true
    value?: true
    x?: true
    y?: true
    w?: true
    h?: true
    i?: true
    boardId?: true
  }

  export type CardCountAggregateInputType = {
    id?: true
    title?: true
    createTime?: true
    type?: true
    value?: true
    x?: true
    y?: true
    w?: true
    h?: true
    i?: true
    config?: true
    data?: true
    boardId?: true
    _all?: true
  }

  export type CardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Card to aggregate.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cards
    **/
    _count?: true | CardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CardMaxAggregateInputType
  }

  export type GetCardAggregateType<T extends CardAggregateArgs> = {
        [P in keyof T & keyof AggregateCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCard[P]>
      : GetScalarType<T[P], AggregateCard[P]>
  }




  export type CardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardWhereInput
    orderBy?: CardOrderByWithAggregationInput | CardOrderByWithAggregationInput[]
    by: CardScalarFieldEnum[] | CardScalarFieldEnum
    having?: CardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CardCountAggregateInputType | true
    _avg?: CardAvgAggregateInputType
    _sum?: CardSumAggregateInputType
    _min?: CardMinAggregateInputType
    _max?: CardMaxAggregateInputType
  }

  export type CardGroupByOutputType = {
    id: number
    title: string
    createTime: Date
    type: string
    value: string
    x: number
    y: number
    w: number
    h: number
    i: string
    config: JsonValue | null
    data: JsonValue | null
    boardId: number | null
    _count: CardCountAggregateOutputType | null
    _avg: CardAvgAggregateOutputType | null
    _sum: CardSumAggregateOutputType | null
    _min: CardMinAggregateOutputType | null
    _max: CardMaxAggregateOutputType | null
  }

  type GetCardGroupByPayload<T extends CardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CardGroupByOutputType[P]>
            : GetScalarType<T[P], CardGroupByOutputType[P]>
        }
      >
    >


  export type CardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createTime?: boolean
    type?: boolean
    value?: boolean
    x?: boolean
    y?: boolean
    w?: boolean
    h?: boolean
    i?: boolean
    config?: boolean
    data?: boolean
    boardId?: boolean
    Board?: boolean | Card$BoardArgs<ExtArgs>
  }, ExtArgs["result"]["card"]>



  export type CardSelectScalar = {
    id?: boolean
    title?: boolean
    createTime?: boolean
    type?: boolean
    value?: boolean
    x?: boolean
    y?: boolean
    w?: boolean
    h?: boolean
    i?: boolean
    config?: boolean
    data?: boolean
    boardId?: boolean
  }

  export type CardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "createTime" | "type" | "value" | "x" | "y" | "w" | "h" | "i" | "config" | "data" | "boardId", ExtArgs["result"]["card"]>
  export type CardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Board?: boolean | Card$BoardArgs<ExtArgs>
  }

  export type $CardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Card"
    objects: {
      Board: Prisma.$BoardPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      createTime: Date
      type: string
      value: string
      x: number
      y: number
      w: number
      h: number
      i: string
      config: Prisma.JsonValue | null
      data: Prisma.JsonValue | null
      boardId: number | null
    }, ExtArgs["result"]["card"]>
    composites: {}
  }

  type CardGetPayload<S extends boolean | null | undefined | CardDefaultArgs> = $Result.GetResult<Prisma.$CardPayload, S>

  type CardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CardCountAggregateInputType | true
    }

  export interface CardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Card'], meta: { name: 'Card' } }
    /**
     * Find zero or one Card that matches the filter.
     * @param {CardFindUniqueArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CardFindUniqueArgs>(args: SelectSubset<T, CardFindUniqueArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Card that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CardFindUniqueOrThrowArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CardFindUniqueOrThrowArgs>(args: SelectSubset<T, CardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Card that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindFirstArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CardFindFirstArgs>(args?: SelectSubset<T, CardFindFirstArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Card that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindFirstOrThrowArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CardFindFirstOrThrowArgs>(args?: SelectSubset<T, CardFindFirstOrThrowArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cards
     * const cards = await prisma.card.findMany()
     * 
     * // Get first 10 Cards
     * const cards = await prisma.card.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cardWithIdOnly = await prisma.card.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CardFindManyArgs>(args?: SelectSubset<T, CardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Card.
     * @param {CardCreateArgs} args - Arguments to create a Card.
     * @example
     * // Create one Card
     * const Card = await prisma.card.create({
     *   data: {
     *     // ... data to create a Card
     *   }
     * })
     * 
     */
    create<T extends CardCreateArgs>(args: SelectSubset<T, CardCreateArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cards.
     * @param {CardCreateManyArgs} args - Arguments to create many Cards.
     * @example
     * // Create many Cards
     * const card = await prisma.card.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CardCreateManyArgs>(args?: SelectSubset<T, CardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Card.
     * @param {CardDeleteArgs} args - Arguments to delete one Card.
     * @example
     * // Delete one Card
     * const Card = await prisma.card.delete({
     *   where: {
     *     // ... filter to delete one Card
     *   }
     * })
     * 
     */
    delete<T extends CardDeleteArgs>(args: SelectSubset<T, CardDeleteArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Card.
     * @param {CardUpdateArgs} args - Arguments to update one Card.
     * @example
     * // Update one Card
     * const card = await prisma.card.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CardUpdateArgs>(args: SelectSubset<T, CardUpdateArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cards.
     * @param {CardDeleteManyArgs} args - Arguments to filter Cards to delete.
     * @example
     * // Delete a few Cards
     * const { count } = await prisma.card.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CardDeleteManyArgs>(args?: SelectSubset<T, CardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cards
     * const card = await prisma.card.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CardUpdateManyArgs>(args: SelectSubset<T, CardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Card.
     * @param {CardUpsertArgs} args - Arguments to update or create a Card.
     * @example
     * // Update or create a Card
     * const card = await prisma.card.upsert({
     *   create: {
     *     // ... data to create a Card
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Card we want to update
     *   }
     * })
     */
    upsert<T extends CardUpsertArgs>(args: SelectSubset<T, CardUpsertArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardCountArgs} args - Arguments to filter Cards to count.
     * @example
     * // Count the number of Cards
     * const count = await prisma.card.count({
     *   where: {
     *     // ... the filter for the Cards we want to count
     *   }
     * })
    **/
    count<T extends CardCountArgs>(
      args?: Subset<T, CardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Card.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CardAggregateArgs>(args: Subset<T, CardAggregateArgs>): Prisma.PrismaPromise<GetCardAggregateType<T>>

    /**
     * Group by Card.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CardGroupByArgs['orderBy'] }
        : { orderBy?: CardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Card model
   */
  readonly fields: CardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Card.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Board<T extends Card$BoardArgs<ExtArgs> = {}>(args?: Subset<T, Card$BoardArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Card model
   */
  interface CardFieldRefs {
    readonly id: FieldRef<"Card", 'Int'>
    readonly title: FieldRef<"Card", 'String'>
    readonly createTime: FieldRef<"Card", 'DateTime'>
    readonly type: FieldRef<"Card", 'String'>
    readonly value: FieldRef<"Card", 'String'>
    readonly x: FieldRef<"Card", 'Int'>
    readonly y: FieldRef<"Card", 'Int'>
    readonly w: FieldRef<"Card", 'Int'>
    readonly h: FieldRef<"Card", 'Int'>
    readonly i: FieldRef<"Card", 'String'>
    readonly config: FieldRef<"Card", 'Json'>
    readonly data: FieldRef<"Card", 'Json'>
    readonly boardId: FieldRef<"Card", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Card findUnique
   */
  export type CardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card findUniqueOrThrow
   */
  export type CardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card findFirst
   */
  export type CardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cards.
     */
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card findFirstOrThrow
   */
  export type CardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cards.
     */
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card findMany
   */
  export type CardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Cards to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card create
   */
  export type CardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The data needed to create a Card.
     */
    data: XOR<CardCreateInput, CardUncheckedCreateInput>
  }

  /**
   * Card createMany
   */
  export type CardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cards.
     */
    data: CardCreateManyInput | CardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Card update
   */
  export type CardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The data needed to update a Card.
     */
    data: XOR<CardUpdateInput, CardUncheckedUpdateInput>
    /**
     * Choose, which Card to update.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card updateMany
   */
  export type CardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cards.
     */
    data: XOR<CardUpdateManyMutationInput, CardUncheckedUpdateManyInput>
    /**
     * Filter which Cards to update
     */
    where?: CardWhereInput
    /**
     * Limit how many Cards to update.
     */
    limit?: number
  }

  /**
   * Card upsert
   */
  export type CardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The filter to search for the Card to update in case it exists.
     */
    where: CardWhereUniqueInput
    /**
     * In case the Card found by the `where` argument doesn't exist, create a new Card with this data.
     */
    create: XOR<CardCreateInput, CardUncheckedCreateInput>
    /**
     * In case the Card was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CardUpdateInput, CardUncheckedUpdateInput>
  }

  /**
   * Card delete
   */
  export type CardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter which Card to delete.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card deleteMany
   */
  export type CardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cards to delete
     */
    where?: CardWhereInput
    /**
     * Limit how many Cards to delete.
     */
    limit?: number
  }

  /**
   * Card.Board
   */
  export type Card$BoardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    where?: BoardWhereInput
  }

  /**
   * Card without action
   */
  export type CardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
  }


  /**
   * Model Tenant
   */

  export type AggregateTenant = {
    _count: TenantCountAggregateOutputType | null
    _avg: TenantAvgAggregateOutputType | null
    _sum: TenantSumAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  export type TenantAvgAggregateOutputType = {
    id: number | null
  }

  export type TenantSumAggregateOutputType = {
    id: number | null
  }

  export type TenantMinAggregateOutputType = {
    id: number | null
    idCardNumber: string | null
    username: string | null
    tel: string | null
    blacklisted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantMaxAggregateOutputType = {
    id: number | null
    idCardNumber: string | null
    username: string | null
    tel: string | null
    blacklisted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantCountAggregateOutputType = {
    id: number
    idCardNumber: number
    username: number
    tel: number
    blacklisted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TenantAvgAggregateInputType = {
    id?: true
  }

  export type TenantSumAggregateInputType = {
    id?: true
  }

  export type TenantMinAggregateInputType = {
    id?: true
    idCardNumber?: true
    username?: true
    tel?: true
    blacklisted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantMaxAggregateInputType = {
    id?: true
    idCardNumber?: true
    username?: true
    tel?: true
    blacklisted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantCountAggregateInputType = {
    id?: true
    idCardNumber?: true
    username?: true
    tel?: true
    blacklisted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TenantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenant to aggregate.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tenants
    **/
    _count?: true | TenantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TenantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TenantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenantMaxAggregateInputType
  }

  export type GetTenantAggregateType<T extends TenantAggregateArgs> = {
        [P in keyof T & keyof AggregateTenant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenant[P]>
      : GetScalarType<T[P], AggregateTenant[P]>
  }




  export type TenantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantWhereInput
    orderBy?: TenantOrderByWithAggregationInput | TenantOrderByWithAggregationInput[]
    by: TenantScalarFieldEnum[] | TenantScalarFieldEnum
    having?: TenantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenantCountAggregateInputType | true
    _avg?: TenantAvgAggregateInputType
    _sum?: TenantSumAggregateInputType
    _min?: TenantMinAggregateInputType
    _max?: TenantMaxAggregateInputType
  }

  export type TenantGroupByOutputType = {
    id: number
    idCardNumber: string | null
    username: string
    tel: string | null
    blacklisted: boolean
    createdAt: Date
    updatedAt: Date
    _count: TenantCountAggregateOutputType | null
    _avg: TenantAvgAggregateOutputType | null
    _sum: TenantSumAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  type GetTenantGroupByPayload<T extends TenantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenantGroupByOutputType[P]>
            : GetScalarType<T[P], TenantGroupByOutputType[P]>
        }
      >
    >


  export type TenantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idCardNumber?: boolean
    username?: boolean
    tel?: boolean
    blacklisted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    houses?: boolean | Tenant$housesArgs<ExtArgs>
    rooms?: boolean | Tenant$roomsArgs<ExtArgs>
    contracts?: boolean | Tenant$contractsArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenant"]>



  export type TenantSelectScalar = {
    id?: boolean
    idCardNumber?: boolean
    username?: boolean
    tel?: boolean
    blacklisted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TenantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idCardNumber" | "username" | "tel" | "blacklisted" | "createdAt" | "updatedAt", ExtArgs["result"]["tenant"]>
  export type TenantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    houses?: boolean | Tenant$housesArgs<ExtArgs>
    rooms?: boolean | Tenant$roomsArgs<ExtArgs>
    contracts?: boolean | Tenant$contractsArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TenantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tenant"
    objects: {
      houses: Prisma.$HousePayload<ExtArgs>[]
      rooms: Prisma.$RoomPayload<ExtArgs>[]
      contracts: Prisma.$ContractPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idCardNumber: string | null
      username: string
      tel: string | null
      blacklisted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tenant"]>
    composites: {}
  }

  type TenantGetPayload<S extends boolean | null | undefined | TenantDefaultArgs> = $Result.GetResult<Prisma.$TenantPayload, S>

  type TenantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TenantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TenantCountAggregateInputType | true
    }

  export interface TenantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tenant'], meta: { name: 'Tenant' } }
    /**
     * Find zero or one Tenant that matches the filter.
     * @param {TenantFindUniqueArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TenantFindUniqueArgs>(args: SelectSubset<T, TenantFindUniqueArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tenant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TenantFindUniqueOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TenantFindUniqueOrThrowArgs>(args: SelectSubset<T, TenantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TenantFindFirstArgs>(args?: SelectSubset<T, TenantFindFirstArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TenantFindFirstOrThrowArgs>(args?: SelectSubset<T, TenantFindFirstOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tenants
     * const tenants = await prisma.tenant.findMany()
     * 
     * // Get first 10 Tenants
     * const tenants = await prisma.tenant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tenantWithIdOnly = await prisma.tenant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TenantFindManyArgs>(args?: SelectSubset<T, TenantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tenant.
     * @param {TenantCreateArgs} args - Arguments to create a Tenant.
     * @example
     * // Create one Tenant
     * const Tenant = await prisma.tenant.create({
     *   data: {
     *     // ... data to create a Tenant
     *   }
     * })
     * 
     */
    create<T extends TenantCreateArgs>(args: SelectSubset<T, TenantCreateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tenants.
     * @param {TenantCreateManyArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TenantCreateManyArgs>(args?: SelectSubset<T, TenantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tenant.
     * @param {TenantDeleteArgs} args - Arguments to delete one Tenant.
     * @example
     * // Delete one Tenant
     * const Tenant = await prisma.tenant.delete({
     *   where: {
     *     // ... filter to delete one Tenant
     *   }
     * })
     * 
     */
    delete<T extends TenantDeleteArgs>(args: SelectSubset<T, TenantDeleteArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tenant.
     * @param {TenantUpdateArgs} args - Arguments to update one Tenant.
     * @example
     * // Update one Tenant
     * const tenant = await prisma.tenant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TenantUpdateArgs>(args: SelectSubset<T, TenantUpdateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tenants.
     * @param {TenantDeleteManyArgs} args - Arguments to filter Tenants to delete.
     * @example
     * // Delete a few Tenants
     * const { count } = await prisma.tenant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TenantDeleteManyArgs>(args?: SelectSubset<T, TenantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TenantUpdateManyArgs>(args: SelectSubset<T, TenantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tenant.
     * @param {TenantUpsertArgs} args - Arguments to update or create a Tenant.
     * @example
     * // Update or create a Tenant
     * const tenant = await prisma.tenant.upsert({
     *   create: {
     *     // ... data to create a Tenant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tenant we want to update
     *   }
     * })
     */
    upsert<T extends TenantUpsertArgs>(args: SelectSubset<T, TenantUpsertArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantCountArgs} args - Arguments to filter Tenants to count.
     * @example
     * // Count the number of Tenants
     * const count = await prisma.tenant.count({
     *   where: {
     *     // ... the filter for the Tenants we want to count
     *   }
     * })
    **/
    count<T extends TenantCountArgs>(
      args?: Subset<T, TenantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TenantAggregateArgs>(args: Subset<T, TenantAggregateArgs>): Prisma.PrismaPromise<GetTenantAggregateType<T>>

    /**
     * Group by Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TenantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenantGroupByArgs['orderBy'] }
        : { orderBy?: TenantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TenantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tenant model
   */
  readonly fields: TenantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tenant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TenantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    houses<T extends Tenant$housesArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$housesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rooms<T extends Tenant$roomsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$roomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contracts<T extends Tenant$contractsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$contractsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tenant model
   */
  interface TenantFieldRefs {
    readonly id: FieldRef<"Tenant", 'Int'>
    readonly idCardNumber: FieldRef<"Tenant", 'String'>
    readonly username: FieldRef<"Tenant", 'String'>
    readonly tel: FieldRef<"Tenant", 'String'>
    readonly blacklisted: FieldRef<"Tenant", 'Boolean'>
    readonly createdAt: FieldRef<"Tenant", 'DateTime'>
    readonly updatedAt: FieldRef<"Tenant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tenant findUnique
   */
  export type TenantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findUniqueOrThrow
   */
  export type TenantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findFirst
   */
  export type TenantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findFirstOrThrow
   */
  export type TenantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findMany
   */
  export type TenantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenants to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant create
   */
  export type TenantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to create a Tenant.
     */
    data: XOR<TenantCreateInput, TenantUncheckedCreateInput>
  }

  /**
   * Tenant createMany
   */
  export type TenantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant update
   */
  export type TenantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to update a Tenant.
     */
    data: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
    /**
     * Choose, which Tenant to update.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant updateMany
   */
  export type TenantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to update.
     */
    limit?: number
  }

  /**
   * Tenant upsert
   */
  export type TenantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The filter to search for the Tenant to update in case it exists.
     */
    where: TenantWhereUniqueInput
    /**
     * In case the Tenant found by the `where` argument doesn't exist, create a new Tenant with this data.
     */
    create: XOR<TenantCreateInput, TenantUncheckedCreateInput>
    /**
     * In case the Tenant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
  }

  /**
   * Tenant delete
   */
  export type TenantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter which Tenant to delete.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant deleteMany
   */
  export type TenantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenants to delete
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to delete.
     */
    limit?: number
  }

  /**
   * Tenant.houses
   */
  export type Tenant$housesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInclude<ExtArgs> | null
    where?: HouseWhereInput
    orderBy?: HouseOrderByWithRelationInput | HouseOrderByWithRelationInput[]
    cursor?: HouseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HouseScalarFieldEnum | HouseScalarFieldEnum[]
  }

  /**
   * Tenant.rooms
   */
  export type Tenant$roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    cursor?: RoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Tenant.contracts
   */
  export type Tenant$contractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    where?: ContractWhereInput
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    cursor?: ContractWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Tenant without action
   */
  export type TenantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
  }


  /**
   * Model House
   */

  export type AggregateHouse = {
    _count: HouseCountAggregateOutputType | null
    _avg: HouseAvgAggregateOutputType | null
    _sum: HouseSumAggregateOutputType | null
    _min: HouseMinAggregateOutputType | null
    _max: HouseMaxAggregateOutputType | null
  }

  export type HouseAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
    deposit: Decimal | null
    area: Decimal | null
    longitude: Decimal | null
    latitude: Decimal | null
    bedrooms: number | null
    livingRooms: number | null
    kitchens: number | null
    bathrooms: number | null
    washingCount: number | null
    floor: number | null
    totalFloors: number | null
    builtYear: number | null
    tenantId: number | null
  }

  export type HouseSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
    deposit: Decimal | null
    area: Decimal | null
    longitude: Decimal | null
    latitude: Decimal | null
    bedrooms: number | null
    livingRooms: number | null
    kitchens: number | null
    bathrooms: number | null
    washingCount: number | null
    floor: number | null
    totalFloors: number | null
    builtYear: number | null
    tenantId: number | null
  }

  export type HouseMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    type: $Enums.HouseType | null
    isWholeRent: boolean | null
    price: Decimal | null
    priceUnit: $Enums.PriceUnit | null
    deposit: Decimal | null
    area: Decimal | null
    areaUnit: $Enums.AreaUnit | null
    address: string | null
    city: string | null
    district: string | null
    longitude: Decimal | null
    latitude: Decimal | null
    bedrooms: number | null
    livingRooms: number | null
    kitchens: number | null
    bathrooms: number | null
    washingCount: number | null
    floor: number | null
    totalFloors: number | null
    builtYear: number | null
    orientation: $Enums.Direction | null
    status: $Enums.HouseStatus | null
    featured: boolean | null
    isDeleted: boolean | null
    tenantId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type HouseMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    type: $Enums.HouseType | null
    isWholeRent: boolean | null
    price: Decimal | null
    priceUnit: $Enums.PriceUnit | null
    deposit: Decimal | null
    area: Decimal | null
    areaUnit: $Enums.AreaUnit | null
    address: string | null
    city: string | null
    district: string | null
    longitude: Decimal | null
    latitude: Decimal | null
    bedrooms: number | null
    livingRooms: number | null
    kitchens: number | null
    bathrooms: number | null
    washingCount: number | null
    floor: number | null
    totalFloors: number | null
    builtYear: number | null
    orientation: $Enums.Direction | null
    status: $Enums.HouseStatus | null
    featured: boolean | null
    isDeleted: boolean | null
    tenantId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type HouseCountAggregateOutputType = {
    id: number
    title: number
    description: number
    type: number
    isWholeRent: number
    price: number
    priceUnit: number
    deposit: number
    area: number
    areaUnit: number
    address: number
    city: number
    district: number
    longitude: number
    latitude: number
    bedrooms: number
    livingRooms: number
    kitchens: number
    bathrooms: number
    washingCount: number
    floor: number
    totalFloors: number
    builtYear: number
    orientation: number
    status: number
    featured: number
    isDeleted: number
    tenantId: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type HouseAvgAggregateInputType = {
    id?: true
    price?: true
    deposit?: true
    area?: true
    longitude?: true
    latitude?: true
    bedrooms?: true
    livingRooms?: true
    kitchens?: true
    bathrooms?: true
    washingCount?: true
    floor?: true
    totalFloors?: true
    builtYear?: true
    tenantId?: true
  }

  export type HouseSumAggregateInputType = {
    id?: true
    price?: true
    deposit?: true
    area?: true
    longitude?: true
    latitude?: true
    bedrooms?: true
    livingRooms?: true
    kitchens?: true
    bathrooms?: true
    washingCount?: true
    floor?: true
    totalFloors?: true
    builtYear?: true
    tenantId?: true
  }

  export type HouseMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    isWholeRent?: true
    price?: true
    priceUnit?: true
    deposit?: true
    area?: true
    areaUnit?: true
    address?: true
    city?: true
    district?: true
    longitude?: true
    latitude?: true
    bedrooms?: true
    livingRooms?: true
    kitchens?: true
    bathrooms?: true
    washingCount?: true
    floor?: true
    totalFloors?: true
    builtYear?: true
    orientation?: true
    status?: true
    featured?: true
    isDeleted?: true
    tenantId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type HouseMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    isWholeRent?: true
    price?: true
    priceUnit?: true
    deposit?: true
    area?: true
    areaUnit?: true
    address?: true
    city?: true
    district?: true
    longitude?: true
    latitude?: true
    bedrooms?: true
    livingRooms?: true
    kitchens?: true
    bathrooms?: true
    washingCount?: true
    floor?: true
    totalFloors?: true
    builtYear?: true
    orientation?: true
    status?: true
    featured?: true
    isDeleted?: true
    tenantId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type HouseCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    isWholeRent?: true
    price?: true
    priceUnit?: true
    deposit?: true
    area?: true
    areaUnit?: true
    address?: true
    city?: true
    district?: true
    longitude?: true
    latitude?: true
    bedrooms?: true
    livingRooms?: true
    kitchens?: true
    bathrooms?: true
    washingCount?: true
    floor?: true
    totalFloors?: true
    builtYear?: true
    orientation?: true
    status?: true
    featured?: true
    isDeleted?: true
    tenantId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type HouseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which House to aggregate.
     */
    where?: HouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Houses to fetch.
     */
    orderBy?: HouseOrderByWithRelationInput | HouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Houses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Houses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Houses
    **/
    _count?: true | HouseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HouseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HouseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HouseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HouseMaxAggregateInputType
  }

  export type GetHouseAggregateType<T extends HouseAggregateArgs> = {
        [P in keyof T & keyof AggregateHouse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHouse[P]>
      : GetScalarType<T[P], AggregateHouse[P]>
  }




  export type HouseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HouseWhereInput
    orderBy?: HouseOrderByWithAggregationInput | HouseOrderByWithAggregationInput[]
    by: HouseScalarFieldEnum[] | HouseScalarFieldEnum
    having?: HouseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HouseCountAggregateInputType | true
    _avg?: HouseAvgAggregateInputType
    _sum?: HouseSumAggregateInputType
    _min?: HouseMinAggregateInputType
    _max?: HouseMaxAggregateInputType
  }

  export type HouseGroupByOutputType = {
    id: number
    title: string
    description: string | null
    type: $Enums.HouseType
    isWholeRent: boolean
    price: Decimal
    priceUnit: $Enums.PriceUnit
    deposit: Decimal | null
    area: Decimal | null
    areaUnit: $Enums.AreaUnit
    address: string
    city: string | null
    district: string | null
    longitude: Decimal | null
    latitude: Decimal | null
    bedrooms: number
    livingRooms: number
    kitchens: number
    bathrooms: number
    washingCount: number
    floor: number | null
    totalFloors: number | null
    builtYear: number | null
    orientation: $Enums.Direction | null
    status: $Enums.HouseStatus
    featured: boolean
    isDeleted: boolean
    tenantId: number
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: HouseCountAggregateOutputType | null
    _avg: HouseAvgAggregateOutputType | null
    _sum: HouseSumAggregateOutputType | null
    _min: HouseMinAggregateOutputType | null
    _max: HouseMaxAggregateOutputType | null
  }

  type GetHouseGroupByPayload<T extends HouseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HouseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HouseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HouseGroupByOutputType[P]>
            : GetScalarType<T[P], HouseGroupByOutputType[P]>
        }
      >
    >


  export type HouseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    isWholeRent?: boolean
    price?: boolean
    priceUnit?: boolean
    deposit?: boolean
    area?: boolean
    areaUnit?: boolean
    address?: boolean
    city?: boolean
    district?: boolean
    longitude?: boolean
    latitude?: boolean
    bedrooms?: boolean
    livingRooms?: boolean
    kitchens?: boolean
    bathrooms?: boolean
    washingCount?: boolean
    floor?: boolean
    totalFloors?: boolean
    builtYear?: boolean
    orientation?: boolean
    status?: boolean
    featured?: boolean
    isDeleted?: boolean
    tenantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    images?: boolean | House$imagesArgs<ExtArgs>
    rooms?: boolean | House$roomsArgs<ExtArgs>
    contracts?: boolean | House$contractsArgs<ExtArgs>
    _count?: boolean | HouseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["house"]>



  export type HouseSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    isWholeRent?: boolean
    price?: boolean
    priceUnit?: boolean
    deposit?: boolean
    area?: boolean
    areaUnit?: boolean
    address?: boolean
    city?: boolean
    district?: boolean
    longitude?: boolean
    latitude?: boolean
    bedrooms?: boolean
    livingRooms?: boolean
    kitchens?: boolean
    bathrooms?: boolean
    washingCount?: boolean
    floor?: boolean
    totalFloors?: boolean
    builtYear?: boolean
    orientation?: boolean
    status?: boolean
    featured?: boolean
    isDeleted?: boolean
    tenantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type HouseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "type" | "isWholeRent" | "price" | "priceUnit" | "deposit" | "area" | "areaUnit" | "address" | "city" | "district" | "longitude" | "latitude" | "bedrooms" | "livingRooms" | "kitchens" | "bathrooms" | "washingCount" | "floor" | "totalFloors" | "builtYear" | "orientation" | "status" | "featured" | "isDeleted" | "tenantId" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["house"]>
  export type HouseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    images?: boolean | House$imagesArgs<ExtArgs>
    rooms?: boolean | House$roomsArgs<ExtArgs>
    contracts?: boolean | House$contractsArgs<ExtArgs>
    _count?: boolean | HouseCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $HousePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "House"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      images: Prisma.$HouseImagePayload<ExtArgs>[]
      rooms: Prisma.$RoomPayload<ExtArgs>[]
      contracts: Prisma.$ContractPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      type: $Enums.HouseType
      isWholeRent: boolean
      price: Prisma.Decimal
      priceUnit: $Enums.PriceUnit
      deposit: Prisma.Decimal | null
      area: Prisma.Decimal | null
      areaUnit: $Enums.AreaUnit
      address: string
      city: string | null
      district: string | null
      longitude: Prisma.Decimal | null
      latitude: Prisma.Decimal | null
      bedrooms: number
      livingRooms: number
      kitchens: number
      bathrooms: number
      washingCount: number
      floor: number | null
      totalFloors: number | null
      builtYear: number | null
      orientation: $Enums.Direction | null
      status: $Enums.HouseStatus
      featured: boolean
      isDeleted: boolean
      tenantId: number
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["house"]>
    composites: {}
  }

  type HouseGetPayload<S extends boolean | null | undefined | HouseDefaultArgs> = $Result.GetResult<Prisma.$HousePayload, S>

  type HouseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HouseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HouseCountAggregateInputType | true
    }

  export interface HouseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['House'], meta: { name: 'House' } }
    /**
     * Find zero or one House that matches the filter.
     * @param {HouseFindUniqueArgs} args - Arguments to find a House
     * @example
     * // Get one House
     * const house = await prisma.house.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HouseFindUniqueArgs>(args: SelectSubset<T, HouseFindUniqueArgs<ExtArgs>>): Prisma__HouseClient<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one House that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HouseFindUniqueOrThrowArgs} args - Arguments to find a House
     * @example
     * // Get one House
     * const house = await prisma.house.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HouseFindUniqueOrThrowArgs>(args: SelectSubset<T, HouseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HouseClient<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first House that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseFindFirstArgs} args - Arguments to find a House
     * @example
     * // Get one House
     * const house = await prisma.house.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HouseFindFirstArgs>(args?: SelectSubset<T, HouseFindFirstArgs<ExtArgs>>): Prisma__HouseClient<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first House that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseFindFirstOrThrowArgs} args - Arguments to find a House
     * @example
     * // Get one House
     * const house = await prisma.house.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HouseFindFirstOrThrowArgs>(args?: SelectSubset<T, HouseFindFirstOrThrowArgs<ExtArgs>>): Prisma__HouseClient<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Houses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Houses
     * const houses = await prisma.house.findMany()
     * 
     * // Get first 10 Houses
     * const houses = await prisma.house.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const houseWithIdOnly = await prisma.house.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HouseFindManyArgs>(args?: SelectSubset<T, HouseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a House.
     * @param {HouseCreateArgs} args - Arguments to create a House.
     * @example
     * // Create one House
     * const House = await prisma.house.create({
     *   data: {
     *     // ... data to create a House
     *   }
     * })
     * 
     */
    create<T extends HouseCreateArgs>(args: SelectSubset<T, HouseCreateArgs<ExtArgs>>): Prisma__HouseClient<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Houses.
     * @param {HouseCreateManyArgs} args - Arguments to create many Houses.
     * @example
     * // Create many Houses
     * const house = await prisma.house.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HouseCreateManyArgs>(args?: SelectSubset<T, HouseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a House.
     * @param {HouseDeleteArgs} args - Arguments to delete one House.
     * @example
     * // Delete one House
     * const House = await prisma.house.delete({
     *   where: {
     *     // ... filter to delete one House
     *   }
     * })
     * 
     */
    delete<T extends HouseDeleteArgs>(args: SelectSubset<T, HouseDeleteArgs<ExtArgs>>): Prisma__HouseClient<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one House.
     * @param {HouseUpdateArgs} args - Arguments to update one House.
     * @example
     * // Update one House
     * const house = await prisma.house.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HouseUpdateArgs>(args: SelectSubset<T, HouseUpdateArgs<ExtArgs>>): Prisma__HouseClient<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Houses.
     * @param {HouseDeleteManyArgs} args - Arguments to filter Houses to delete.
     * @example
     * // Delete a few Houses
     * const { count } = await prisma.house.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HouseDeleteManyArgs>(args?: SelectSubset<T, HouseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Houses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Houses
     * const house = await prisma.house.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HouseUpdateManyArgs>(args: SelectSubset<T, HouseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one House.
     * @param {HouseUpsertArgs} args - Arguments to update or create a House.
     * @example
     * // Update or create a House
     * const house = await prisma.house.upsert({
     *   create: {
     *     // ... data to create a House
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the House we want to update
     *   }
     * })
     */
    upsert<T extends HouseUpsertArgs>(args: SelectSubset<T, HouseUpsertArgs<ExtArgs>>): Prisma__HouseClient<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Houses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseCountArgs} args - Arguments to filter Houses to count.
     * @example
     * // Count the number of Houses
     * const count = await prisma.house.count({
     *   where: {
     *     // ... the filter for the Houses we want to count
     *   }
     * })
    **/
    count<T extends HouseCountArgs>(
      args?: Subset<T, HouseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HouseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a House.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HouseAggregateArgs>(args: Subset<T, HouseAggregateArgs>): Prisma.PrismaPromise<GetHouseAggregateType<T>>

    /**
     * Group by House.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HouseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HouseGroupByArgs['orderBy'] }
        : { orderBy?: HouseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HouseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHouseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the House model
   */
  readonly fields: HouseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for House.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HouseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    images<T extends House$imagesArgs<ExtArgs> = {}>(args?: Subset<T, House$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HouseImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rooms<T extends House$roomsArgs<ExtArgs> = {}>(args?: Subset<T, House$roomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contracts<T extends House$contractsArgs<ExtArgs> = {}>(args?: Subset<T, House$contractsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the House model
   */
  interface HouseFieldRefs {
    readonly id: FieldRef<"House", 'Int'>
    readonly title: FieldRef<"House", 'String'>
    readonly description: FieldRef<"House", 'String'>
    readonly type: FieldRef<"House", 'HouseType'>
    readonly isWholeRent: FieldRef<"House", 'Boolean'>
    readonly price: FieldRef<"House", 'Decimal'>
    readonly priceUnit: FieldRef<"House", 'PriceUnit'>
    readonly deposit: FieldRef<"House", 'Decimal'>
    readonly area: FieldRef<"House", 'Decimal'>
    readonly areaUnit: FieldRef<"House", 'AreaUnit'>
    readonly address: FieldRef<"House", 'String'>
    readonly city: FieldRef<"House", 'String'>
    readonly district: FieldRef<"House", 'String'>
    readonly longitude: FieldRef<"House", 'Decimal'>
    readonly latitude: FieldRef<"House", 'Decimal'>
    readonly bedrooms: FieldRef<"House", 'Int'>
    readonly livingRooms: FieldRef<"House", 'Int'>
    readonly kitchens: FieldRef<"House", 'Int'>
    readonly bathrooms: FieldRef<"House", 'Int'>
    readonly washingCount: FieldRef<"House", 'Int'>
    readonly floor: FieldRef<"House", 'Int'>
    readonly totalFloors: FieldRef<"House", 'Int'>
    readonly builtYear: FieldRef<"House", 'Int'>
    readonly orientation: FieldRef<"House", 'Direction'>
    readonly status: FieldRef<"House", 'HouseStatus'>
    readonly featured: FieldRef<"House", 'Boolean'>
    readonly isDeleted: FieldRef<"House", 'Boolean'>
    readonly tenantId: FieldRef<"House", 'Int'>
    readonly createdAt: FieldRef<"House", 'DateTime'>
    readonly updatedAt: FieldRef<"House", 'DateTime'>
    readonly deletedAt: FieldRef<"House", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * House findUnique
   */
  export type HouseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInclude<ExtArgs> | null
    /**
     * Filter, which House to fetch.
     */
    where: HouseWhereUniqueInput
  }

  /**
   * House findUniqueOrThrow
   */
  export type HouseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInclude<ExtArgs> | null
    /**
     * Filter, which House to fetch.
     */
    where: HouseWhereUniqueInput
  }

  /**
   * House findFirst
   */
  export type HouseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInclude<ExtArgs> | null
    /**
     * Filter, which House to fetch.
     */
    where?: HouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Houses to fetch.
     */
    orderBy?: HouseOrderByWithRelationInput | HouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Houses.
     */
    cursor?: HouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Houses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Houses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Houses.
     */
    distinct?: HouseScalarFieldEnum | HouseScalarFieldEnum[]
  }

  /**
   * House findFirstOrThrow
   */
  export type HouseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInclude<ExtArgs> | null
    /**
     * Filter, which House to fetch.
     */
    where?: HouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Houses to fetch.
     */
    orderBy?: HouseOrderByWithRelationInput | HouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Houses.
     */
    cursor?: HouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Houses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Houses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Houses.
     */
    distinct?: HouseScalarFieldEnum | HouseScalarFieldEnum[]
  }

  /**
   * House findMany
   */
  export type HouseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInclude<ExtArgs> | null
    /**
     * Filter, which Houses to fetch.
     */
    where?: HouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Houses to fetch.
     */
    orderBy?: HouseOrderByWithRelationInput | HouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Houses.
     */
    cursor?: HouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Houses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Houses.
     */
    skip?: number
    distinct?: HouseScalarFieldEnum | HouseScalarFieldEnum[]
  }

  /**
   * House create
   */
  export type HouseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInclude<ExtArgs> | null
    /**
     * The data needed to create a House.
     */
    data: XOR<HouseCreateInput, HouseUncheckedCreateInput>
  }

  /**
   * House createMany
   */
  export type HouseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Houses.
     */
    data: HouseCreateManyInput | HouseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * House update
   */
  export type HouseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInclude<ExtArgs> | null
    /**
     * The data needed to update a House.
     */
    data: XOR<HouseUpdateInput, HouseUncheckedUpdateInput>
    /**
     * Choose, which House to update.
     */
    where: HouseWhereUniqueInput
  }

  /**
   * House updateMany
   */
  export type HouseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Houses.
     */
    data: XOR<HouseUpdateManyMutationInput, HouseUncheckedUpdateManyInput>
    /**
     * Filter which Houses to update
     */
    where?: HouseWhereInput
    /**
     * Limit how many Houses to update.
     */
    limit?: number
  }

  /**
   * House upsert
   */
  export type HouseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInclude<ExtArgs> | null
    /**
     * The filter to search for the House to update in case it exists.
     */
    where: HouseWhereUniqueInput
    /**
     * In case the House found by the `where` argument doesn't exist, create a new House with this data.
     */
    create: XOR<HouseCreateInput, HouseUncheckedCreateInput>
    /**
     * In case the House was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HouseUpdateInput, HouseUncheckedUpdateInput>
  }

  /**
   * House delete
   */
  export type HouseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInclude<ExtArgs> | null
    /**
     * Filter which House to delete.
     */
    where: HouseWhereUniqueInput
  }

  /**
   * House deleteMany
   */
  export type HouseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Houses to delete
     */
    where?: HouseWhereInput
    /**
     * Limit how many Houses to delete.
     */
    limit?: number
  }

  /**
   * House.images
   */
  export type House$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseImage
     */
    select?: HouseImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseImage
     */
    omit?: HouseImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseImageInclude<ExtArgs> | null
    where?: HouseImageWhereInput
    orderBy?: HouseImageOrderByWithRelationInput | HouseImageOrderByWithRelationInput[]
    cursor?: HouseImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HouseImageScalarFieldEnum | HouseImageScalarFieldEnum[]
  }

  /**
   * House.rooms
   */
  export type House$roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    cursor?: RoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * House.contracts
   */
  export type House$contractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    where?: ContractWhereInput
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    cursor?: ContractWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * House without action
   */
  export type HouseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInclude<ExtArgs> | null
  }


  /**
   * Model Room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomAvgAggregateOutputType = {
    id: number | null
    houseId: number | null
    price: Decimal | null
    deposit: Decimal | null
    area: Decimal | null
    tenantId: number | null
  }

  export type RoomSumAggregateOutputType = {
    id: number | null
    houseId: number | null
    price: Decimal | null
    deposit: Decimal | null
    area: Decimal | null
    tenantId: number | null
  }

  export type RoomMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    houseId: number | null
    price: Decimal | null
    priceUnit: $Enums.PriceUnit | null
    deposit: Decimal | null
    area: Decimal | null
    areaUnit: $Enums.AreaUnit | null
    orientation: $Enums.Direction | null
    status: $Enums.HouseStatus | null
    featured: boolean | null
    isDeleted: boolean | null
    tenantId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type RoomMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    houseId: number | null
    price: Decimal | null
    priceUnit: $Enums.PriceUnit | null
    deposit: Decimal | null
    area: Decimal | null
    areaUnit: $Enums.AreaUnit | null
    orientation: $Enums.Direction | null
    status: $Enums.HouseStatus | null
    featured: boolean | null
    isDeleted: boolean | null
    tenantId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    title: number
    description: number
    houseId: number
    price: number
    priceUnit: number
    deposit: number
    area: number
    areaUnit: number
    orientation: number
    status: number
    featured: number
    isDeleted: number
    tenantId: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type RoomAvgAggregateInputType = {
    id?: true
    houseId?: true
    price?: true
    deposit?: true
    area?: true
    tenantId?: true
  }

  export type RoomSumAggregateInputType = {
    id?: true
    houseId?: true
    price?: true
    deposit?: true
    area?: true
    tenantId?: true
  }

  export type RoomMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    houseId?: true
    price?: true
    priceUnit?: true
    deposit?: true
    area?: true
    areaUnit?: true
    orientation?: true
    status?: true
    featured?: true
    isDeleted?: true
    tenantId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    houseId?: true
    price?: true
    priceUnit?: true
    deposit?: true
    area?: true
    areaUnit?: true
    orientation?: true
    status?: true
    featured?: true
    isDeleted?: true
    tenantId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    houseId?: true
    price?: true
    priceUnit?: true
    deposit?: true
    area?: true
    areaUnit?: true
    orientation?: true
    status?: true
    featured?: true
    isDeleted?: true
    tenantId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithAggregationInput | RoomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _avg?: RoomAvgAggregateInputType
    _sum?: RoomSumAggregateInputType
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    id: number
    title: string
    description: string | null
    houseId: number
    price: Decimal
    priceUnit: $Enums.PriceUnit
    deposit: Decimal | null
    area: Decimal
    areaUnit: $Enums.AreaUnit
    orientation: $Enums.Direction | null
    status: $Enums.HouseStatus
    featured: boolean
    isDeleted: boolean
    tenantId: number
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    houseId?: boolean
    price?: boolean
    priceUnit?: boolean
    deposit?: boolean
    area?: boolean
    areaUnit?: boolean
    orientation?: boolean
    status?: boolean
    featured?: boolean
    isDeleted?: boolean
    tenantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    house?: boolean | HouseDefaultArgs<ExtArgs>
    images?: boolean | Room$imagesArgs<ExtArgs>
    contracts?: boolean | Room$contractsArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>



  export type RoomSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    houseId?: boolean
    price?: boolean
    priceUnit?: boolean
    deposit?: boolean
    area?: boolean
    areaUnit?: boolean
    orientation?: boolean
    status?: boolean
    featured?: boolean
    isDeleted?: boolean
    tenantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type RoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "houseId" | "price" | "priceUnit" | "deposit" | "area" | "areaUnit" | "orientation" | "status" | "featured" | "isDeleted" | "tenantId" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["room"]>
  export type RoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    house?: boolean | HouseDefaultArgs<ExtArgs>
    images?: boolean | Room$imagesArgs<ExtArgs>
    contracts?: boolean | Room$contractsArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      house: Prisma.$HousePayload<ExtArgs>
      images: Prisma.$RoomImagePayload<ExtArgs>[]
      contracts: Prisma.$ContractPayload<ExtArgs>[]
      tenant: Prisma.$TenantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      houseId: number
      price: Prisma.Decimal
      priceUnit: $Enums.PriceUnit
      deposit: Prisma.Decimal | null
      area: Prisma.Decimal
      areaUnit: $Enums.AreaUnit
      orientation: $Enums.Direction | null
      status: $Enums.HouseStatus
      featured: boolean
      isDeleted: boolean
      tenantId: number
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = $Result.GetResult<Prisma.$RoomPayload, S>

  type RoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Room'], meta: { name: 'Room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomFindUniqueArgs>(args: SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomFindFirstArgs>(args?: SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomFindManyArgs>(args?: SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends RoomCreateArgs>(args: SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomCreateManyArgs>(args?: SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends RoomDeleteArgs>(args: SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomUpdateArgs>(args: SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomDeleteManyArgs>(args?: SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomUpdateManyArgs>(args: SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends RoomUpsertArgs>(args: SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Room model
   */
  readonly fields: RoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    house<T extends HouseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HouseDefaultArgs<ExtArgs>>): Prisma__HouseClient<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    images<T extends Room$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Room$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contracts<T extends Room$contractsArgs<ExtArgs> = {}>(args?: Subset<T, Room$contractsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Room model
   */
  interface RoomFieldRefs {
    readonly id: FieldRef<"Room", 'Int'>
    readonly title: FieldRef<"Room", 'String'>
    readonly description: FieldRef<"Room", 'String'>
    readonly houseId: FieldRef<"Room", 'Int'>
    readonly price: FieldRef<"Room", 'Decimal'>
    readonly priceUnit: FieldRef<"Room", 'PriceUnit'>
    readonly deposit: FieldRef<"Room", 'Decimal'>
    readonly area: FieldRef<"Room", 'Decimal'>
    readonly areaUnit: FieldRef<"Room", 'AreaUnit'>
    readonly orientation: FieldRef<"Room", 'Direction'>
    readonly status: FieldRef<"Room", 'HouseStatus'>
    readonly featured: FieldRef<"Room", 'Boolean'>
    readonly isDeleted: FieldRef<"Room", 'Boolean'>
    readonly tenantId: FieldRef<"Room", 'Int'>
    readonly createdAt: FieldRef<"Room", 'DateTime'>
    readonly updatedAt: FieldRef<"Room", 'DateTime'>
    readonly deletedAt: FieldRef<"Room", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Room findUnique
   */
  export type RoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findFirst
   */
  export type RoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findMany
   */
  export type RoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room create
   */
  export type RoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }

  /**
   * Room createMany
   */
  export type RoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Room update
   */
  export type RoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room upsert
   */
  export type RoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }

  /**
   * Room delete
   */
  export type RoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to delete.
     */
    limit?: number
  }

  /**
   * Room.images
   */
  export type Room$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImage
     */
    select?: RoomImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomImage
     */
    omit?: RoomImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImageInclude<ExtArgs> | null
    where?: RoomImageWhereInput
    orderBy?: RoomImageOrderByWithRelationInput | RoomImageOrderByWithRelationInput[]
    cursor?: RoomImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomImageScalarFieldEnum | RoomImageScalarFieldEnum[]
  }

  /**
   * Room.contracts
   */
  export type Room$contractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    where?: ContractWhereInput
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    cursor?: ContractWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Room without action
   */
  export type RoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
  }


  /**
   * Model HouseImage
   */

  export type AggregateHouseImage = {
    _count: HouseImageCountAggregateOutputType | null
    _avg: HouseImageAvgAggregateOutputType | null
    _sum: HouseImageSumAggregateOutputType | null
    _min: HouseImageMinAggregateOutputType | null
    _max: HouseImageMaxAggregateOutputType | null
  }

  export type HouseImageAvgAggregateOutputType = {
    id: number | null
    houseId: number | null
  }

  export type HouseImageSumAggregateOutputType = {
    id: number | null
    houseId: number | null
  }

  export type HouseImageMinAggregateOutputType = {
    id: number | null
    url: string | null
    isPrimary: boolean | null
    description: string | null
    houseId: number | null
    createdAt: Date | null
  }

  export type HouseImageMaxAggregateOutputType = {
    id: number | null
    url: string | null
    isPrimary: boolean | null
    description: string | null
    houseId: number | null
    createdAt: Date | null
  }

  export type HouseImageCountAggregateOutputType = {
    id: number
    url: number
    isPrimary: number
    description: number
    houseId: number
    createdAt: number
    _all: number
  }


  export type HouseImageAvgAggregateInputType = {
    id?: true
    houseId?: true
  }

  export type HouseImageSumAggregateInputType = {
    id?: true
    houseId?: true
  }

  export type HouseImageMinAggregateInputType = {
    id?: true
    url?: true
    isPrimary?: true
    description?: true
    houseId?: true
    createdAt?: true
  }

  export type HouseImageMaxAggregateInputType = {
    id?: true
    url?: true
    isPrimary?: true
    description?: true
    houseId?: true
    createdAt?: true
  }

  export type HouseImageCountAggregateInputType = {
    id?: true
    url?: true
    isPrimary?: true
    description?: true
    houseId?: true
    createdAt?: true
    _all?: true
  }

  export type HouseImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HouseImage to aggregate.
     */
    where?: HouseImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HouseImages to fetch.
     */
    orderBy?: HouseImageOrderByWithRelationInput | HouseImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HouseImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HouseImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HouseImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HouseImages
    **/
    _count?: true | HouseImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HouseImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HouseImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HouseImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HouseImageMaxAggregateInputType
  }

  export type GetHouseImageAggregateType<T extends HouseImageAggregateArgs> = {
        [P in keyof T & keyof AggregateHouseImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHouseImage[P]>
      : GetScalarType<T[P], AggregateHouseImage[P]>
  }




  export type HouseImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HouseImageWhereInput
    orderBy?: HouseImageOrderByWithAggregationInput | HouseImageOrderByWithAggregationInput[]
    by: HouseImageScalarFieldEnum[] | HouseImageScalarFieldEnum
    having?: HouseImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HouseImageCountAggregateInputType | true
    _avg?: HouseImageAvgAggregateInputType
    _sum?: HouseImageSumAggregateInputType
    _min?: HouseImageMinAggregateInputType
    _max?: HouseImageMaxAggregateInputType
  }

  export type HouseImageGroupByOutputType = {
    id: number
    url: string
    isPrimary: boolean
    description: string | null
    houseId: number
    createdAt: Date
    _count: HouseImageCountAggregateOutputType | null
    _avg: HouseImageAvgAggregateOutputType | null
    _sum: HouseImageSumAggregateOutputType | null
    _min: HouseImageMinAggregateOutputType | null
    _max: HouseImageMaxAggregateOutputType | null
  }

  type GetHouseImageGroupByPayload<T extends HouseImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HouseImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HouseImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HouseImageGroupByOutputType[P]>
            : GetScalarType<T[P], HouseImageGroupByOutputType[P]>
        }
      >
    >


  export type HouseImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    isPrimary?: boolean
    description?: boolean
    houseId?: boolean
    createdAt?: boolean
    house?: boolean | HouseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["houseImage"]>



  export type HouseImageSelectScalar = {
    id?: boolean
    url?: boolean
    isPrimary?: boolean
    description?: boolean
    houseId?: boolean
    createdAt?: boolean
  }

  export type HouseImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "isPrimary" | "description" | "houseId" | "createdAt", ExtArgs["result"]["houseImage"]>
  export type HouseImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    house?: boolean | HouseDefaultArgs<ExtArgs>
  }

  export type $HouseImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HouseImage"
    objects: {
      house: Prisma.$HousePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      isPrimary: boolean
      description: string | null
      houseId: number
      createdAt: Date
    }, ExtArgs["result"]["houseImage"]>
    composites: {}
  }

  type HouseImageGetPayload<S extends boolean | null | undefined | HouseImageDefaultArgs> = $Result.GetResult<Prisma.$HouseImagePayload, S>

  type HouseImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HouseImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HouseImageCountAggregateInputType | true
    }

  export interface HouseImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HouseImage'], meta: { name: 'HouseImage' } }
    /**
     * Find zero or one HouseImage that matches the filter.
     * @param {HouseImageFindUniqueArgs} args - Arguments to find a HouseImage
     * @example
     * // Get one HouseImage
     * const houseImage = await prisma.houseImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HouseImageFindUniqueArgs>(args: SelectSubset<T, HouseImageFindUniqueArgs<ExtArgs>>): Prisma__HouseImageClient<$Result.GetResult<Prisma.$HouseImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HouseImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HouseImageFindUniqueOrThrowArgs} args - Arguments to find a HouseImage
     * @example
     * // Get one HouseImage
     * const houseImage = await prisma.houseImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HouseImageFindUniqueOrThrowArgs>(args: SelectSubset<T, HouseImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HouseImageClient<$Result.GetResult<Prisma.$HouseImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HouseImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseImageFindFirstArgs} args - Arguments to find a HouseImage
     * @example
     * // Get one HouseImage
     * const houseImage = await prisma.houseImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HouseImageFindFirstArgs>(args?: SelectSubset<T, HouseImageFindFirstArgs<ExtArgs>>): Prisma__HouseImageClient<$Result.GetResult<Prisma.$HouseImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HouseImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseImageFindFirstOrThrowArgs} args - Arguments to find a HouseImage
     * @example
     * // Get one HouseImage
     * const houseImage = await prisma.houseImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HouseImageFindFirstOrThrowArgs>(args?: SelectSubset<T, HouseImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__HouseImageClient<$Result.GetResult<Prisma.$HouseImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HouseImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HouseImages
     * const houseImages = await prisma.houseImage.findMany()
     * 
     * // Get first 10 HouseImages
     * const houseImages = await prisma.houseImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const houseImageWithIdOnly = await prisma.houseImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HouseImageFindManyArgs>(args?: SelectSubset<T, HouseImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HouseImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HouseImage.
     * @param {HouseImageCreateArgs} args - Arguments to create a HouseImage.
     * @example
     * // Create one HouseImage
     * const HouseImage = await prisma.houseImage.create({
     *   data: {
     *     // ... data to create a HouseImage
     *   }
     * })
     * 
     */
    create<T extends HouseImageCreateArgs>(args: SelectSubset<T, HouseImageCreateArgs<ExtArgs>>): Prisma__HouseImageClient<$Result.GetResult<Prisma.$HouseImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HouseImages.
     * @param {HouseImageCreateManyArgs} args - Arguments to create many HouseImages.
     * @example
     * // Create many HouseImages
     * const houseImage = await prisma.houseImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HouseImageCreateManyArgs>(args?: SelectSubset<T, HouseImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HouseImage.
     * @param {HouseImageDeleteArgs} args - Arguments to delete one HouseImage.
     * @example
     * // Delete one HouseImage
     * const HouseImage = await prisma.houseImage.delete({
     *   where: {
     *     // ... filter to delete one HouseImage
     *   }
     * })
     * 
     */
    delete<T extends HouseImageDeleteArgs>(args: SelectSubset<T, HouseImageDeleteArgs<ExtArgs>>): Prisma__HouseImageClient<$Result.GetResult<Prisma.$HouseImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HouseImage.
     * @param {HouseImageUpdateArgs} args - Arguments to update one HouseImage.
     * @example
     * // Update one HouseImage
     * const houseImage = await prisma.houseImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HouseImageUpdateArgs>(args: SelectSubset<T, HouseImageUpdateArgs<ExtArgs>>): Prisma__HouseImageClient<$Result.GetResult<Prisma.$HouseImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HouseImages.
     * @param {HouseImageDeleteManyArgs} args - Arguments to filter HouseImages to delete.
     * @example
     * // Delete a few HouseImages
     * const { count } = await prisma.houseImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HouseImageDeleteManyArgs>(args?: SelectSubset<T, HouseImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HouseImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HouseImages
     * const houseImage = await prisma.houseImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HouseImageUpdateManyArgs>(args: SelectSubset<T, HouseImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HouseImage.
     * @param {HouseImageUpsertArgs} args - Arguments to update or create a HouseImage.
     * @example
     * // Update or create a HouseImage
     * const houseImage = await prisma.houseImage.upsert({
     *   create: {
     *     // ... data to create a HouseImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HouseImage we want to update
     *   }
     * })
     */
    upsert<T extends HouseImageUpsertArgs>(args: SelectSubset<T, HouseImageUpsertArgs<ExtArgs>>): Prisma__HouseImageClient<$Result.GetResult<Prisma.$HouseImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HouseImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseImageCountArgs} args - Arguments to filter HouseImages to count.
     * @example
     * // Count the number of HouseImages
     * const count = await prisma.houseImage.count({
     *   where: {
     *     // ... the filter for the HouseImages we want to count
     *   }
     * })
    **/
    count<T extends HouseImageCountArgs>(
      args?: Subset<T, HouseImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HouseImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HouseImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HouseImageAggregateArgs>(args: Subset<T, HouseImageAggregateArgs>): Prisma.PrismaPromise<GetHouseImageAggregateType<T>>

    /**
     * Group by HouseImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HouseImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HouseImageGroupByArgs['orderBy'] }
        : { orderBy?: HouseImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HouseImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHouseImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HouseImage model
   */
  readonly fields: HouseImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HouseImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HouseImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    house<T extends HouseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HouseDefaultArgs<ExtArgs>>): Prisma__HouseClient<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HouseImage model
   */
  interface HouseImageFieldRefs {
    readonly id: FieldRef<"HouseImage", 'Int'>
    readonly url: FieldRef<"HouseImage", 'String'>
    readonly isPrimary: FieldRef<"HouseImage", 'Boolean'>
    readonly description: FieldRef<"HouseImage", 'String'>
    readonly houseId: FieldRef<"HouseImage", 'Int'>
    readonly createdAt: FieldRef<"HouseImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HouseImage findUnique
   */
  export type HouseImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseImage
     */
    select?: HouseImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseImage
     */
    omit?: HouseImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseImageInclude<ExtArgs> | null
    /**
     * Filter, which HouseImage to fetch.
     */
    where: HouseImageWhereUniqueInput
  }

  /**
   * HouseImage findUniqueOrThrow
   */
  export type HouseImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseImage
     */
    select?: HouseImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseImage
     */
    omit?: HouseImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseImageInclude<ExtArgs> | null
    /**
     * Filter, which HouseImage to fetch.
     */
    where: HouseImageWhereUniqueInput
  }

  /**
   * HouseImage findFirst
   */
  export type HouseImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseImage
     */
    select?: HouseImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseImage
     */
    omit?: HouseImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseImageInclude<ExtArgs> | null
    /**
     * Filter, which HouseImage to fetch.
     */
    where?: HouseImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HouseImages to fetch.
     */
    orderBy?: HouseImageOrderByWithRelationInput | HouseImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HouseImages.
     */
    cursor?: HouseImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HouseImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HouseImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HouseImages.
     */
    distinct?: HouseImageScalarFieldEnum | HouseImageScalarFieldEnum[]
  }

  /**
   * HouseImage findFirstOrThrow
   */
  export type HouseImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseImage
     */
    select?: HouseImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseImage
     */
    omit?: HouseImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseImageInclude<ExtArgs> | null
    /**
     * Filter, which HouseImage to fetch.
     */
    where?: HouseImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HouseImages to fetch.
     */
    orderBy?: HouseImageOrderByWithRelationInput | HouseImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HouseImages.
     */
    cursor?: HouseImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HouseImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HouseImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HouseImages.
     */
    distinct?: HouseImageScalarFieldEnum | HouseImageScalarFieldEnum[]
  }

  /**
   * HouseImage findMany
   */
  export type HouseImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseImage
     */
    select?: HouseImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseImage
     */
    omit?: HouseImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseImageInclude<ExtArgs> | null
    /**
     * Filter, which HouseImages to fetch.
     */
    where?: HouseImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HouseImages to fetch.
     */
    orderBy?: HouseImageOrderByWithRelationInput | HouseImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HouseImages.
     */
    cursor?: HouseImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HouseImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HouseImages.
     */
    skip?: number
    distinct?: HouseImageScalarFieldEnum | HouseImageScalarFieldEnum[]
  }

  /**
   * HouseImage create
   */
  export type HouseImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseImage
     */
    select?: HouseImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseImage
     */
    omit?: HouseImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseImageInclude<ExtArgs> | null
    /**
     * The data needed to create a HouseImage.
     */
    data: XOR<HouseImageCreateInput, HouseImageUncheckedCreateInput>
  }

  /**
   * HouseImage createMany
   */
  export type HouseImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HouseImages.
     */
    data: HouseImageCreateManyInput | HouseImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HouseImage update
   */
  export type HouseImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseImage
     */
    select?: HouseImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseImage
     */
    omit?: HouseImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseImageInclude<ExtArgs> | null
    /**
     * The data needed to update a HouseImage.
     */
    data: XOR<HouseImageUpdateInput, HouseImageUncheckedUpdateInput>
    /**
     * Choose, which HouseImage to update.
     */
    where: HouseImageWhereUniqueInput
  }

  /**
   * HouseImage updateMany
   */
  export type HouseImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HouseImages.
     */
    data: XOR<HouseImageUpdateManyMutationInput, HouseImageUncheckedUpdateManyInput>
    /**
     * Filter which HouseImages to update
     */
    where?: HouseImageWhereInput
    /**
     * Limit how many HouseImages to update.
     */
    limit?: number
  }

  /**
   * HouseImage upsert
   */
  export type HouseImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseImage
     */
    select?: HouseImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseImage
     */
    omit?: HouseImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseImageInclude<ExtArgs> | null
    /**
     * The filter to search for the HouseImage to update in case it exists.
     */
    where: HouseImageWhereUniqueInput
    /**
     * In case the HouseImage found by the `where` argument doesn't exist, create a new HouseImage with this data.
     */
    create: XOR<HouseImageCreateInput, HouseImageUncheckedCreateInput>
    /**
     * In case the HouseImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HouseImageUpdateInput, HouseImageUncheckedUpdateInput>
  }

  /**
   * HouseImage delete
   */
  export type HouseImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseImage
     */
    select?: HouseImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseImage
     */
    omit?: HouseImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseImageInclude<ExtArgs> | null
    /**
     * Filter which HouseImage to delete.
     */
    where: HouseImageWhereUniqueInput
  }

  /**
   * HouseImage deleteMany
   */
  export type HouseImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HouseImages to delete
     */
    where?: HouseImageWhereInput
    /**
     * Limit how many HouseImages to delete.
     */
    limit?: number
  }

  /**
   * HouseImage without action
   */
  export type HouseImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseImage
     */
    select?: HouseImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HouseImage
     */
    omit?: HouseImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseImageInclude<ExtArgs> | null
  }


  /**
   * Model RoomImage
   */

  export type AggregateRoomImage = {
    _count: RoomImageCountAggregateOutputType | null
    _avg: RoomImageAvgAggregateOutputType | null
    _sum: RoomImageSumAggregateOutputType | null
    _min: RoomImageMinAggregateOutputType | null
    _max: RoomImageMaxAggregateOutputType | null
  }

  export type RoomImageAvgAggregateOutputType = {
    id: number | null
    roomId: number | null
  }

  export type RoomImageSumAggregateOutputType = {
    id: number | null
    roomId: number | null
  }

  export type RoomImageMinAggregateOutputType = {
    id: number | null
    url: string | null
    isPrimary: boolean | null
    description: string | null
    roomId: number | null
    createdAt: Date | null
  }

  export type RoomImageMaxAggregateOutputType = {
    id: number | null
    url: string | null
    isPrimary: boolean | null
    description: string | null
    roomId: number | null
    createdAt: Date | null
  }

  export type RoomImageCountAggregateOutputType = {
    id: number
    url: number
    isPrimary: number
    description: number
    roomId: number
    createdAt: number
    _all: number
  }


  export type RoomImageAvgAggregateInputType = {
    id?: true
    roomId?: true
  }

  export type RoomImageSumAggregateInputType = {
    id?: true
    roomId?: true
  }

  export type RoomImageMinAggregateInputType = {
    id?: true
    url?: true
    isPrimary?: true
    description?: true
    roomId?: true
    createdAt?: true
  }

  export type RoomImageMaxAggregateInputType = {
    id?: true
    url?: true
    isPrimary?: true
    description?: true
    roomId?: true
    createdAt?: true
  }

  export type RoomImageCountAggregateInputType = {
    id?: true
    url?: true
    isPrimary?: true
    description?: true
    roomId?: true
    createdAt?: true
    _all?: true
  }

  export type RoomImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomImage to aggregate.
     */
    where?: RoomImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomImages to fetch.
     */
    orderBy?: RoomImageOrderByWithRelationInput | RoomImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoomImages
    **/
    _count?: true | RoomImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomImageMaxAggregateInputType
  }

  export type GetRoomImageAggregateType<T extends RoomImageAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomImage[P]>
      : GetScalarType<T[P], AggregateRoomImage[P]>
  }




  export type RoomImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomImageWhereInput
    orderBy?: RoomImageOrderByWithAggregationInput | RoomImageOrderByWithAggregationInput[]
    by: RoomImageScalarFieldEnum[] | RoomImageScalarFieldEnum
    having?: RoomImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomImageCountAggregateInputType | true
    _avg?: RoomImageAvgAggregateInputType
    _sum?: RoomImageSumAggregateInputType
    _min?: RoomImageMinAggregateInputType
    _max?: RoomImageMaxAggregateInputType
  }

  export type RoomImageGroupByOutputType = {
    id: number
    url: string
    isPrimary: boolean
    description: string | null
    roomId: number
    createdAt: Date
    _count: RoomImageCountAggregateOutputType | null
    _avg: RoomImageAvgAggregateOutputType | null
    _sum: RoomImageSumAggregateOutputType | null
    _min: RoomImageMinAggregateOutputType | null
    _max: RoomImageMaxAggregateOutputType | null
  }

  type GetRoomImageGroupByPayload<T extends RoomImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomImageGroupByOutputType[P]>
            : GetScalarType<T[P], RoomImageGroupByOutputType[P]>
        }
      >
    >


  export type RoomImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    isPrimary?: boolean
    description?: boolean
    roomId?: boolean
    createdAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomImage"]>



  export type RoomImageSelectScalar = {
    id?: boolean
    url?: boolean
    isPrimary?: boolean
    description?: boolean
    roomId?: boolean
    createdAt?: boolean
  }

  export type RoomImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "isPrimary" | "description" | "roomId" | "createdAt", ExtArgs["result"]["roomImage"]>
  export type RoomImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }

  export type $RoomImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoomImage"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      isPrimary: boolean
      description: string | null
      roomId: number
      createdAt: Date
    }, ExtArgs["result"]["roomImage"]>
    composites: {}
  }

  type RoomImageGetPayload<S extends boolean | null | undefined | RoomImageDefaultArgs> = $Result.GetResult<Prisma.$RoomImagePayload, S>

  type RoomImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomImageCountAggregateInputType | true
    }

  export interface RoomImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoomImage'], meta: { name: 'RoomImage' } }
    /**
     * Find zero or one RoomImage that matches the filter.
     * @param {RoomImageFindUniqueArgs} args - Arguments to find a RoomImage
     * @example
     * // Get one RoomImage
     * const roomImage = await prisma.roomImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomImageFindUniqueArgs>(args: SelectSubset<T, RoomImageFindUniqueArgs<ExtArgs>>): Prisma__RoomImageClient<$Result.GetResult<Prisma.$RoomImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoomImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomImageFindUniqueOrThrowArgs} args - Arguments to find a RoomImage
     * @example
     * // Get one RoomImage
     * const roomImage = await prisma.roomImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomImageFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomImageClient<$Result.GetResult<Prisma.$RoomImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomImageFindFirstArgs} args - Arguments to find a RoomImage
     * @example
     * // Get one RoomImage
     * const roomImage = await prisma.roomImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomImageFindFirstArgs>(args?: SelectSubset<T, RoomImageFindFirstArgs<ExtArgs>>): Prisma__RoomImageClient<$Result.GetResult<Prisma.$RoomImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomImageFindFirstOrThrowArgs} args - Arguments to find a RoomImage
     * @example
     * // Get one RoomImage
     * const roomImage = await prisma.roomImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomImageFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomImageClient<$Result.GetResult<Prisma.$RoomImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoomImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomImages
     * const roomImages = await prisma.roomImage.findMany()
     * 
     * // Get first 10 RoomImages
     * const roomImages = await prisma.roomImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomImageWithIdOnly = await prisma.roomImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomImageFindManyArgs>(args?: SelectSubset<T, RoomImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoomImage.
     * @param {RoomImageCreateArgs} args - Arguments to create a RoomImage.
     * @example
     * // Create one RoomImage
     * const RoomImage = await prisma.roomImage.create({
     *   data: {
     *     // ... data to create a RoomImage
     *   }
     * })
     * 
     */
    create<T extends RoomImageCreateArgs>(args: SelectSubset<T, RoomImageCreateArgs<ExtArgs>>): Prisma__RoomImageClient<$Result.GetResult<Prisma.$RoomImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoomImages.
     * @param {RoomImageCreateManyArgs} args - Arguments to create many RoomImages.
     * @example
     * // Create many RoomImages
     * const roomImage = await prisma.roomImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomImageCreateManyArgs>(args?: SelectSubset<T, RoomImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RoomImage.
     * @param {RoomImageDeleteArgs} args - Arguments to delete one RoomImage.
     * @example
     * // Delete one RoomImage
     * const RoomImage = await prisma.roomImage.delete({
     *   where: {
     *     // ... filter to delete one RoomImage
     *   }
     * })
     * 
     */
    delete<T extends RoomImageDeleteArgs>(args: SelectSubset<T, RoomImageDeleteArgs<ExtArgs>>): Prisma__RoomImageClient<$Result.GetResult<Prisma.$RoomImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoomImage.
     * @param {RoomImageUpdateArgs} args - Arguments to update one RoomImage.
     * @example
     * // Update one RoomImage
     * const roomImage = await prisma.roomImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomImageUpdateArgs>(args: SelectSubset<T, RoomImageUpdateArgs<ExtArgs>>): Prisma__RoomImageClient<$Result.GetResult<Prisma.$RoomImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoomImages.
     * @param {RoomImageDeleteManyArgs} args - Arguments to filter RoomImages to delete.
     * @example
     * // Delete a few RoomImages
     * const { count } = await prisma.roomImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomImageDeleteManyArgs>(args?: SelectSubset<T, RoomImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomImages
     * const roomImage = await prisma.roomImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomImageUpdateManyArgs>(args: SelectSubset<T, RoomImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RoomImage.
     * @param {RoomImageUpsertArgs} args - Arguments to update or create a RoomImage.
     * @example
     * // Update or create a RoomImage
     * const roomImage = await prisma.roomImage.upsert({
     *   create: {
     *     // ... data to create a RoomImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomImage we want to update
     *   }
     * })
     */
    upsert<T extends RoomImageUpsertArgs>(args: SelectSubset<T, RoomImageUpsertArgs<ExtArgs>>): Prisma__RoomImageClient<$Result.GetResult<Prisma.$RoomImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RoomImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomImageCountArgs} args - Arguments to filter RoomImages to count.
     * @example
     * // Count the number of RoomImages
     * const count = await prisma.roomImage.count({
     *   where: {
     *     // ... the filter for the RoomImages we want to count
     *   }
     * })
    **/
    count<T extends RoomImageCountArgs>(
      args?: Subset<T, RoomImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomImageAggregateArgs>(args: Subset<T, RoomImageAggregateArgs>): Prisma.PrismaPromise<GetRoomImageAggregateType<T>>

    /**
     * Group by RoomImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomImageGroupByArgs['orderBy'] }
        : { orderBy?: RoomImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoomImage model
   */
  readonly fields: RoomImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RoomImage model
   */
  interface RoomImageFieldRefs {
    readonly id: FieldRef<"RoomImage", 'Int'>
    readonly url: FieldRef<"RoomImage", 'String'>
    readonly isPrimary: FieldRef<"RoomImage", 'Boolean'>
    readonly description: FieldRef<"RoomImage", 'String'>
    readonly roomId: FieldRef<"RoomImage", 'Int'>
    readonly createdAt: FieldRef<"RoomImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RoomImage findUnique
   */
  export type RoomImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImage
     */
    select?: RoomImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomImage
     */
    omit?: RoomImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImageInclude<ExtArgs> | null
    /**
     * Filter, which RoomImage to fetch.
     */
    where: RoomImageWhereUniqueInput
  }

  /**
   * RoomImage findUniqueOrThrow
   */
  export type RoomImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImage
     */
    select?: RoomImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomImage
     */
    omit?: RoomImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImageInclude<ExtArgs> | null
    /**
     * Filter, which RoomImage to fetch.
     */
    where: RoomImageWhereUniqueInput
  }

  /**
   * RoomImage findFirst
   */
  export type RoomImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImage
     */
    select?: RoomImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomImage
     */
    omit?: RoomImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImageInclude<ExtArgs> | null
    /**
     * Filter, which RoomImage to fetch.
     */
    where?: RoomImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomImages to fetch.
     */
    orderBy?: RoomImageOrderByWithRelationInput | RoomImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomImages.
     */
    cursor?: RoomImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomImages.
     */
    distinct?: RoomImageScalarFieldEnum | RoomImageScalarFieldEnum[]
  }

  /**
   * RoomImage findFirstOrThrow
   */
  export type RoomImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImage
     */
    select?: RoomImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomImage
     */
    omit?: RoomImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImageInclude<ExtArgs> | null
    /**
     * Filter, which RoomImage to fetch.
     */
    where?: RoomImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomImages to fetch.
     */
    orderBy?: RoomImageOrderByWithRelationInput | RoomImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomImages.
     */
    cursor?: RoomImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomImages.
     */
    distinct?: RoomImageScalarFieldEnum | RoomImageScalarFieldEnum[]
  }

  /**
   * RoomImage findMany
   */
  export type RoomImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImage
     */
    select?: RoomImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomImage
     */
    omit?: RoomImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImageInclude<ExtArgs> | null
    /**
     * Filter, which RoomImages to fetch.
     */
    where?: RoomImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomImages to fetch.
     */
    orderBy?: RoomImageOrderByWithRelationInput | RoomImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoomImages.
     */
    cursor?: RoomImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomImages.
     */
    skip?: number
    distinct?: RoomImageScalarFieldEnum | RoomImageScalarFieldEnum[]
  }

  /**
   * RoomImage create
   */
  export type RoomImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImage
     */
    select?: RoomImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomImage
     */
    omit?: RoomImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImageInclude<ExtArgs> | null
    /**
     * The data needed to create a RoomImage.
     */
    data: XOR<RoomImageCreateInput, RoomImageUncheckedCreateInput>
  }

  /**
   * RoomImage createMany
   */
  export type RoomImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoomImages.
     */
    data: RoomImageCreateManyInput | RoomImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoomImage update
   */
  export type RoomImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImage
     */
    select?: RoomImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomImage
     */
    omit?: RoomImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImageInclude<ExtArgs> | null
    /**
     * The data needed to update a RoomImage.
     */
    data: XOR<RoomImageUpdateInput, RoomImageUncheckedUpdateInput>
    /**
     * Choose, which RoomImage to update.
     */
    where: RoomImageWhereUniqueInput
  }

  /**
   * RoomImage updateMany
   */
  export type RoomImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoomImages.
     */
    data: XOR<RoomImageUpdateManyMutationInput, RoomImageUncheckedUpdateManyInput>
    /**
     * Filter which RoomImages to update
     */
    where?: RoomImageWhereInput
    /**
     * Limit how many RoomImages to update.
     */
    limit?: number
  }

  /**
   * RoomImage upsert
   */
  export type RoomImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImage
     */
    select?: RoomImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomImage
     */
    omit?: RoomImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImageInclude<ExtArgs> | null
    /**
     * The filter to search for the RoomImage to update in case it exists.
     */
    where: RoomImageWhereUniqueInput
    /**
     * In case the RoomImage found by the `where` argument doesn't exist, create a new RoomImage with this data.
     */
    create: XOR<RoomImageCreateInput, RoomImageUncheckedCreateInput>
    /**
     * In case the RoomImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomImageUpdateInput, RoomImageUncheckedUpdateInput>
  }

  /**
   * RoomImage delete
   */
  export type RoomImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImage
     */
    select?: RoomImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomImage
     */
    omit?: RoomImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImageInclude<ExtArgs> | null
    /**
     * Filter which RoomImage to delete.
     */
    where: RoomImageWhereUniqueInput
  }

  /**
   * RoomImage deleteMany
   */
  export type RoomImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomImages to delete
     */
    where?: RoomImageWhereInput
    /**
     * Limit how many RoomImages to delete.
     */
    limit?: number
  }

  /**
   * RoomImage without action
   */
  export type RoomImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImage
     */
    select?: RoomImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomImage
     */
    omit?: RoomImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImageInclude<ExtArgs> | null
  }


  /**
   * Model Contract
   */

  export type AggregateContract = {
    _count: ContractCountAggregateOutputType | null
    _avg: ContractAvgAggregateOutputType | null
    _sum: ContractSumAggregateOutputType | null
    _min: ContractMinAggregateOutputType | null
    _max: ContractMaxAggregateOutputType | null
  }

  export type ContractAvgAggregateOutputType = {
    id: number | null
    monthlyRent: Decimal | null
    deposit: Decimal | null
    houseId: number | null
    roomId: number | null
    tenantId: number | null
  }

  export type ContractSumAggregateOutputType = {
    id: number | null
    monthlyRent: Decimal | null
    deposit: Decimal | null
    houseId: number | null
    roomId: number | null
    tenantId: number | null
  }

  export type ContractMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    monthlyRent: Decimal | null
    deposit: Decimal | null
    status: $Enums.ContractStatus | null
    houseId: number | null
    roomId: number | null
    tenantId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContractMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    monthlyRent: Decimal | null
    deposit: Decimal | null
    status: $Enums.ContractStatus | null
    houseId: number | null
    roomId: number | null
    tenantId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContractCountAggregateOutputType = {
    id: number
    title: number
    description: number
    startDate: number
    endDate: number
    monthlyRent: number
    deposit: number
    status: number
    houseId: number
    roomId: number
    tenantId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContractAvgAggregateInputType = {
    id?: true
    monthlyRent?: true
    deposit?: true
    houseId?: true
    roomId?: true
    tenantId?: true
  }

  export type ContractSumAggregateInputType = {
    id?: true
    monthlyRent?: true
    deposit?: true
    houseId?: true
    roomId?: true
    tenantId?: true
  }

  export type ContractMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startDate?: true
    endDate?: true
    monthlyRent?: true
    deposit?: true
    status?: true
    houseId?: true
    roomId?: true
    tenantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContractMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startDate?: true
    endDate?: true
    monthlyRent?: true
    deposit?: true
    status?: true
    houseId?: true
    roomId?: true
    tenantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContractCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startDate?: true
    endDate?: true
    monthlyRent?: true
    deposit?: true
    status?: true
    houseId?: true
    roomId?: true
    tenantId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContractAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contract to aggregate.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contracts
    **/
    _count?: true | ContractCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContractAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContractSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContractMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContractMaxAggregateInputType
  }

  export type GetContractAggregateType<T extends ContractAggregateArgs> = {
        [P in keyof T & keyof AggregateContract]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContract[P]>
      : GetScalarType<T[P], AggregateContract[P]>
  }




  export type ContractGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractWhereInput
    orderBy?: ContractOrderByWithAggregationInput | ContractOrderByWithAggregationInput[]
    by: ContractScalarFieldEnum[] | ContractScalarFieldEnum
    having?: ContractScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContractCountAggregateInputType | true
    _avg?: ContractAvgAggregateInputType
    _sum?: ContractSumAggregateInputType
    _min?: ContractMinAggregateInputType
    _max?: ContractMaxAggregateInputType
  }

  export type ContractGroupByOutputType = {
    id: number
    title: string
    description: string | null
    startDate: Date
    endDate: Date
    monthlyRent: Decimal
    deposit: Decimal
    status: $Enums.ContractStatus
    houseId: number | null
    roomId: number | null
    tenantId: number
    createdAt: Date
    updatedAt: Date
    _count: ContractCountAggregateOutputType | null
    _avg: ContractAvgAggregateOutputType | null
    _sum: ContractSumAggregateOutputType | null
    _min: ContractMinAggregateOutputType | null
    _max: ContractMaxAggregateOutputType | null
  }

  type GetContractGroupByPayload<T extends ContractGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContractGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContractGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContractGroupByOutputType[P]>
            : GetScalarType<T[P], ContractGroupByOutputType[P]>
        }
      >
    >


  export type ContractSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    monthlyRent?: boolean
    deposit?: boolean
    status?: boolean
    houseId?: boolean
    roomId?: boolean
    tenantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    house?: boolean | Contract$houseArgs<ExtArgs>
    room?: boolean | Contract$roomArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    documents?: boolean | Contract$documentsArgs<ExtArgs>
    _count?: boolean | ContractCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contract"]>



  export type ContractSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    monthlyRent?: boolean
    deposit?: boolean
    status?: boolean
    houseId?: boolean
    roomId?: boolean
    tenantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContractOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "startDate" | "endDate" | "monthlyRent" | "deposit" | "status" | "houseId" | "roomId" | "tenantId" | "createdAt" | "updatedAt", ExtArgs["result"]["contract"]>
  export type ContractInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    house?: boolean | Contract$houseArgs<ExtArgs>
    room?: boolean | Contract$roomArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    documents?: boolean | Contract$documentsArgs<ExtArgs>
    _count?: boolean | ContractCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ContractPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contract"
    objects: {
      house: Prisma.$HousePayload<ExtArgs> | null
      room: Prisma.$RoomPayload<ExtArgs> | null
      tenant: Prisma.$TenantPayload<ExtArgs>
      documents: Prisma.$ContractDocumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      startDate: Date
      endDate: Date
      monthlyRent: Prisma.Decimal
      deposit: Prisma.Decimal
      status: $Enums.ContractStatus
      houseId: number | null
      roomId: number | null
      tenantId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contract"]>
    composites: {}
  }

  type ContractGetPayload<S extends boolean | null | undefined | ContractDefaultArgs> = $Result.GetResult<Prisma.$ContractPayload, S>

  type ContractCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContractFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContractCountAggregateInputType | true
    }

  export interface ContractDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contract'], meta: { name: 'Contract' } }
    /**
     * Find zero or one Contract that matches the filter.
     * @param {ContractFindUniqueArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContractFindUniqueArgs>(args: SelectSubset<T, ContractFindUniqueArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contract that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContractFindUniqueOrThrowArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContractFindUniqueOrThrowArgs>(args: SelectSubset<T, ContractFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contract that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindFirstArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContractFindFirstArgs>(args?: SelectSubset<T, ContractFindFirstArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contract that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindFirstOrThrowArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContractFindFirstOrThrowArgs>(args?: SelectSubset<T, ContractFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contracts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contracts
     * const contracts = await prisma.contract.findMany()
     * 
     * // Get first 10 Contracts
     * const contracts = await prisma.contract.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contractWithIdOnly = await prisma.contract.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContractFindManyArgs>(args?: SelectSubset<T, ContractFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contract.
     * @param {ContractCreateArgs} args - Arguments to create a Contract.
     * @example
     * // Create one Contract
     * const Contract = await prisma.contract.create({
     *   data: {
     *     // ... data to create a Contract
     *   }
     * })
     * 
     */
    create<T extends ContractCreateArgs>(args: SelectSubset<T, ContractCreateArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contracts.
     * @param {ContractCreateManyArgs} args - Arguments to create many Contracts.
     * @example
     * // Create many Contracts
     * const contract = await prisma.contract.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContractCreateManyArgs>(args?: SelectSubset<T, ContractCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Contract.
     * @param {ContractDeleteArgs} args - Arguments to delete one Contract.
     * @example
     * // Delete one Contract
     * const Contract = await prisma.contract.delete({
     *   where: {
     *     // ... filter to delete one Contract
     *   }
     * })
     * 
     */
    delete<T extends ContractDeleteArgs>(args: SelectSubset<T, ContractDeleteArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contract.
     * @param {ContractUpdateArgs} args - Arguments to update one Contract.
     * @example
     * // Update one Contract
     * const contract = await prisma.contract.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContractUpdateArgs>(args: SelectSubset<T, ContractUpdateArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contracts.
     * @param {ContractDeleteManyArgs} args - Arguments to filter Contracts to delete.
     * @example
     * // Delete a few Contracts
     * const { count } = await prisma.contract.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContractDeleteManyArgs>(args?: SelectSubset<T, ContractDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contracts
     * const contract = await prisma.contract.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContractUpdateManyArgs>(args: SelectSubset<T, ContractUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contract.
     * @param {ContractUpsertArgs} args - Arguments to update or create a Contract.
     * @example
     * // Update or create a Contract
     * const contract = await prisma.contract.upsert({
     *   create: {
     *     // ... data to create a Contract
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contract we want to update
     *   }
     * })
     */
    upsert<T extends ContractUpsertArgs>(args: SelectSubset<T, ContractUpsertArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractCountArgs} args - Arguments to filter Contracts to count.
     * @example
     * // Count the number of Contracts
     * const count = await prisma.contract.count({
     *   where: {
     *     // ... the filter for the Contracts we want to count
     *   }
     * })
    **/
    count<T extends ContractCountArgs>(
      args?: Subset<T, ContractCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContractCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContractAggregateArgs>(args: Subset<T, ContractAggregateArgs>): Prisma.PrismaPromise<GetContractAggregateType<T>>

    /**
     * Group by Contract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContractGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContractGroupByArgs['orderBy'] }
        : { orderBy?: ContractGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContractGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContractGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contract model
   */
  readonly fields: ContractFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contract.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContractClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    house<T extends Contract$houseArgs<ExtArgs> = {}>(args?: Subset<T, Contract$houseArgs<ExtArgs>>): Prisma__HouseClient<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    room<T extends Contract$roomArgs<ExtArgs> = {}>(args?: Subset<T, Contract$roomArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    documents<T extends Contract$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Contract$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contract model
   */
  interface ContractFieldRefs {
    readonly id: FieldRef<"Contract", 'Int'>
    readonly title: FieldRef<"Contract", 'String'>
    readonly description: FieldRef<"Contract", 'String'>
    readonly startDate: FieldRef<"Contract", 'DateTime'>
    readonly endDate: FieldRef<"Contract", 'DateTime'>
    readonly monthlyRent: FieldRef<"Contract", 'Decimal'>
    readonly deposit: FieldRef<"Contract", 'Decimal'>
    readonly status: FieldRef<"Contract", 'ContractStatus'>
    readonly houseId: FieldRef<"Contract", 'Int'>
    readonly roomId: FieldRef<"Contract", 'Int'>
    readonly tenantId: FieldRef<"Contract", 'Int'>
    readonly createdAt: FieldRef<"Contract", 'DateTime'>
    readonly updatedAt: FieldRef<"Contract", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contract findUnique
   */
  export type ContractFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract findUniqueOrThrow
   */
  export type ContractFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract findFirst
   */
  export type ContractFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contracts.
     */
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Contract findFirstOrThrow
   */
  export type ContractFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contracts.
     */
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Contract findMany
   */
  export type ContractFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contracts to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Contract create
   */
  export type ContractCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The data needed to create a Contract.
     */
    data: XOR<ContractCreateInput, ContractUncheckedCreateInput>
  }

  /**
   * Contract createMany
   */
  export type ContractCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contracts.
     */
    data: ContractCreateManyInput | ContractCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contract update
   */
  export type ContractUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The data needed to update a Contract.
     */
    data: XOR<ContractUpdateInput, ContractUncheckedUpdateInput>
    /**
     * Choose, which Contract to update.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract updateMany
   */
  export type ContractUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contracts.
     */
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyInput>
    /**
     * Filter which Contracts to update
     */
    where?: ContractWhereInput
    /**
     * Limit how many Contracts to update.
     */
    limit?: number
  }

  /**
   * Contract upsert
   */
  export type ContractUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The filter to search for the Contract to update in case it exists.
     */
    where: ContractWhereUniqueInput
    /**
     * In case the Contract found by the `where` argument doesn't exist, create a new Contract with this data.
     */
    create: XOR<ContractCreateInput, ContractUncheckedCreateInput>
    /**
     * In case the Contract was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContractUpdateInput, ContractUncheckedUpdateInput>
  }

  /**
   * Contract delete
   */
  export type ContractDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter which Contract to delete.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract deleteMany
   */
  export type ContractDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contracts to delete
     */
    where?: ContractWhereInput
    /**
     * Limit how many Contracts to delete.
     */
    limit?: number
  }

  /**
   * Contract.house
   */
  export type Contract$houseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInclude<ExtArgs> | null
    where?: HouseWhereInput
  }

  /**
   * Contract.room
   */
  export type Contract$roomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
  }

  /**
   * Contract.documents
   */
  export type Contract$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractDocument
     */
    select?: ContractDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractDocument
     */
    omit?: ContractDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractDocumentInclude<ExtArgs> | null
    where?: ContractDocumentWhereInput
    orderBy?: ContractDocumentOrderByWithRelationInput | ContractDocumentOrderByWithRelationInput[]
    cursor?: ContractDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContractDocumentScalarFieldEnum | ContractDocumentScalarFieldEnum[]
  }

  /**
   * Contract without action
   */
  export type ContractDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
  }


  /**
   * Model ContractDocument
   */

  export type AggregateContractDocument = {
    _count: ContractDocumentCountAggregateOutputType | null
    _avg: ContractDocumentAvgAggregateOutputType | null
    _sum: ContractDocumentSumAggregateOutputType | null
    _min: ContractDocumentMinAggregateOutputType | null
    _max: ContractDocumentMaxAggregateOutputType | null
  }

  export type ContractDocumentAvgAggregateOutputType = {
    id: number | null
    contractId: number | null
  }

  export type ContractDocumentSumAggregateOutputType = {
    id: number | null
    contractId: number | null
  }

  export type ContractDocumentMinAggregateOutputType = {
    id: number | null
    url: string | null
    description: string | null
    contractId: number | null
    createdAt: Date | null
  }

  export type ContractDocumentMaxAggregateOutputType = {
    id: number | null
    url: string | null
    description: string | null
    contractId: number | null
    createdAt: Date | null
  }

  export type ContractDocumentCountAggregateOutputType = {
    id: number
    url: number
    description: number
    contractId: number
    createdAt: number
    _all: number
  }


  export type ContractDocumentAvgAggregateInputType = {
    id?: true
    contractId?: true
  }

  export type ContractDocumentSumAggregateInputType = {
    id?: true
    contractId?: true
  }

  export type ContractDocumentMinAggregateInputType = {
    id?: true
    url?: true
    description?: true
    contractId?: true
    createdAt?: true
  }

  export type ContractDocumentMaxAggregateInputType = {
    id?: true
    url?: true
    description?: true
    contractId?: true
    createdAt?: true
  }

  export type ContractDocumentCountAggregateInputType = {
    id?: true
    url?: true
    description?: true
    contractId?: true
    createdAt?: true
    _all?: true
  }

  export type ContractDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContractDocument to aggregate.
     */
    where?: ContractDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractDocuments to fetch.
     */
    orderBy?: ContractDocumentOrderByWithRelationInput | ContractDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContractDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContractDocuments
    **/
    _count?: true | ContractDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContractDocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContractDocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContractDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContractDocumentMaxAggregateInputType
  }

  export type GetContractDocumentAggregateType<T extends ContractDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateContractDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContractDocument[P]>
      : GetScalarType<T[P], AggregateContractDocument[P]>
  }




  export type ContractDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractDocumentWhereInput
    orderBy?: ContractDocumentOrderByWithAggregationInput | ContractDocumentOrderByWithAggregationInput[]
    by: ContractDocumentScalarFieldEnum[] | ContractDocumentScalarFieldEnum
    having?: ContractDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContractDocumentCountAggregateInputType | true
    _avg?: ContractDocumentAvgAggregateInputType
    _sum?: ContractDocumentSumAggregateInputType
    _min?: ContractDocumentMinAggregateInputType
    _max?: ContractDocumentMaxAggregateInputType
  }

  export type ContractDocumentGroupByOutputType = {
    id: number
    url: string
    description: string | null
    contractId: number
    createdAt: Date
    _count: ContractDocumentCountAggregateOutputType | null
    _avg: ContractDocumentAvgAggregateOutputType | null
    _sum: ContractDocumentSumAggregateOutputType | null
    _min: ContractDocumentMinAggregateOutputType | null
    _max: ContractDocumentMaxAggregateOutputType | null
  }

  type GetContractDocumentGroupByPayload<T extends ContractDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContractDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContractDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContractDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], ContractDocumentGroupByOutputType[P]>
        }
      >
    >


  export type ContractDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    description?: boolean
    contractId?: boolean
    createdAt?: boolean
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contractDocument"]>



  export type ContractDocumentSelectScalar = {
    id?: boolean
    url?: boolean
    description?: boolean
    contractId?: boolean
    createdAt?: boolean
  }

  export type ContractDocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "description" | "contractId" | "createdAt", ExtArgs["result"]["contractDocument"]>
  export type ContractDocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }

  export type $ContractDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContractDocument"
    objects: {
      contract: Prisma.$ContractPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      description: string | null
      contractId: number
      createdAt: Date
    }, ExtArgs["result"]["contractDocument"]>
    composites: {}
  }

  type ContractDocumentGetPayload<S extends boolean | null | undefined | ContractDocumentDefaultArgs> = $Result.GetResult<Prisma.$ContractDocumentPayload, S>

  type ContractDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContractDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContractDocumentCountAggregateInputType | true
    }

  export interface ContractDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContractDocument'], meta: { name: 'ContractDocument' } }
    /**
     * Find zero or one ContractDocument that matches the filter.
     * @param {ContractDocumentFindUniqueArgs} args - Arguments to find a ContractDocument
     * @example
     * // Get one ContractDocument
     * const contractDocument = await prisma.contractDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContractDocumentFindUniqueArgs>(args: SelectSubset<T, ContractDocumentFindUniqueArgs<ExtArgs>>): Prisma__ContractDocumentClient<$Result.GetResult<Prisma.$ContractDocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContractDocument that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContractDocumentFindUniqueOrThrowArgs} args - Arguments to find a ContractDocument
     * @example
     * // Get one ContractDocument
     * const contractDocument = await prisma.contractDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContractDocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, ContractDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContractDocumentClient<$Result.GetResult<Prisma.$ContractDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContractDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractDocumentFindFirstArgs} args - Arguments to find a ContractDocument
     * @example
     * // Get one ContractDocument
     * const contractDocument = await prisma.contractDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContractDocumentFindFirstArgs>(args?: SelectSubset<T, ContractDocumentFindFirstArgs<ExtArgs>>): Prisma__ContractDocumentClient<$Result.GetResult<Prisma.$ContractDocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContractDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractDocumentFindFirstOrThrowArgs} args - Arguments to find a ContractDocument
     * @example
     * // Get one ContractDocument
     * const contractDocument = await prisma.contractDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContractDocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, ContractDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContractDocumentClient<$Result.GetResult<Prisma.$ContractDocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContractDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContractDocuments
     * const contractDocuments = await prisma.contractDocument.findMany()
     * 
     * // Get first 10 ContractDocuments
     * const contractDocuments = await prisma.contractDocument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contractDocumentWithIdOnly = await prisma.contractDocument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContractDocumentFindManyArgs>(args?: SelectSubset<T, ContractDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContractDocument.
     * @param {ContractDocumentCreateArgs} args - Arguments to create a ContractDocument.
     * @example
     * // Create one ContractDocument
     * const ContractDocument = await prisma.contractDocument.create({
     *   data: {
     *     // ... data to create a ContractDocument
     *   }
     * })
     * 
     */
    create<T extends ContractDocumentCreateArgs>(args: SelectSubset<T, ContractDocumentCreateArgs<ExtArgs>>): Prisma__ContractDocumentClient<$Result.GetResult<Prisma.$ContractDocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContractDocuments.
     * @param {ContractDocumentCreateManyArgs} args - Arguments to create many ContractDocuments.
     * @example
     * // Create many ContractDocuments
     * const contractDocument = await prisma.contractDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContractDocumentCreateManyArgs>(args?: SelectSubset<T, ContractDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ContractDocument.
     * @param {ContractDocumentDeleteArgs} args - Arguments to delete one ContractDocument.
     * @example
     * // Delete one ContractDocument
     * const ContractDocument = await prisma.contractDocument.delete({
     *   where: {
     *     // ... filter to delete one ContractDocument
     *   }
     * })
     * 
     */
    delete<T extends ContractDocumentDeleteArgs>(args: SelectSubset<T, ContractDocumentDeleteArgs<ExtArgs>>): Prisma__ContractDocumentClient<$Result.GetResult<Prisma.$ContractDocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContractDocument.
     * @param {ContractDocumentUpdateArgs} args - Arguments to update one ContractDocument.
     * @example
     * // Update one ContractDocument
     * const contractDocument = await prisma.contractDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContractDocumentUpdateArgs>(args: SelectSubset<T, ContractDocumentUpdateArgs<ExtArgs>>): Prisma__ContractDocumentClient<$Result.GetResult<Prisma.$ContractDocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContractDocuments.
     * @param {ContractDocumentDeleteManyArgs} args - Arguments to filter ContractDocuments to delete.
     * @example
     * // Delete a few ContractDocuments
     * const { count } = await prisma.contractDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContractDocumentDeleteManyArgs>(args?: SelectSubset<T, ContractDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContractDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContractDocuments
     * const contractDocument = await prisma.contractDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContractDocumentUpdateManyArgs>(args: SelectSubset<T, ContractDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ContractDocument.
     * @param {ContractDocumentUpsertArgs} args - Arguments to update or create a ContractDocument.
     * @example
     * // Update or create a ContractDocument
     * const contractDocument = await prisma.contractDocument.upsert({
     *   create: {
     *     // ... data to create a ContractDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContractDocument we want to update
     *   }
     * })
     */
    upsert<T extends ContractDocumentUpsertArgs>(args: SelectSubset<T, ContractDocumentUpsertArgs<ExtArgs>>): Prisma__ContractDocumentClient<$Result.GetResult<Prisma.$ContractDocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContractDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractDocumentCountArgs} args - Arguments to filter ContractDocuments to count.
     * @example
     * // Count the number of ContractDocuments
     * const count = await prisma.contractDocument.count({
     *   where: {
     *     // ... the filter for the ContractDocuments we want to count
     *   }
     * })
    **/
    count<T extends ContractDocumentCountArgs>(
      args?: Subset<T, ContractDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContractDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContractDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContractDocumentAggregateArgs>(args: Subset<T, ContractDocumentAggregateArgs>): Prisma.PrismaPromise<GetContractDocumentAggregateType<T>>

    /**
     * Group by ContractDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractDocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContractDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContractDocumentGroupByArgs['orderBy'] }
        : { orderBy?: ContractDocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContractDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContractDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContractDocument model
   */
  readonly fields: ContractDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContractDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContractDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contract<T extends ContractDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContractDefaultArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContractDocument model
   */
  interface ContractDocumentFieldRefs {
    readonly id: FieldRef<"ContractDocument", 'Int'>
    readonly url: FieldRef<"ContractDocument", 'String'>
    readonly description: FieldRef<"ContractDocument", 'String'>
    readonly contractId: FieldRef<"ContractDocument", 'Int'>
    readonly createdAt: FieldRef<"ContractDocument", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContractDocument findUnique
   */
  export type ContractDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractDocument
     */
    select?: ContractDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractDocument
     */
    omit?: ContractDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractDocumentInclude<ExtArgs> | null
    /**
     * Filter, which ContractDocument to fetch.
     */
    where: ContractDocumentWhereUniqueInput
  }

  /**
   * ContractDocument findUniqueOrThrow
   */
  export type ContractDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractDocument
     */
    select?: ContractDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractDocument
     */
    omit?: ContractDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractDocumentInclude<ExtArgs> | null
    /**
     * Filter, which ContractDocument to fetch.
     */
    where: ContractDocumentWhereUniqueInput
  }

  /**
   * ContractDocument findFirst
   */
  export type ContractDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractDocument
     */
    select?: ContractDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractDocument
     */
    omit?: ContractDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractDocumentInclude<ExtArgs> | null
    /**
     * Filter, which ContractDocument to fetch.
     */
    where?: ContractDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractDocuments to fetch.
     */
    orderBy?: ContractDocumentOrderByWithRelationInput | ContractDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContractDocuments.
     */
    cursor?: ContractDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContractDocuments.
     */
    distinct?: ContractDocumentScalarFieldEnum | ContractDocumentScalarFieldEnum[]
  }

  /**
   * ContractDocument findFirstOrThrow
   */
  export type ContractDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractDocument
     */
    select?: ContractDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractDocument
     */
    omit?: ContractDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractDocumentInclude<ExtArgs> | null
    /**
     * Filter, which ContractDocument to fetch.
     */
    where?: ContractDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractDocuments to fetch.
     */
    orderBy?: ContractDocumentOrderByWithRelationInput | ContractDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContractDocuments.
     */
    cursor?: ContractDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContractDocuments.
     */
    distinct?: ContractDocumentScalarFieldEnum | ContractDocumentScalarFieldEnum[]
  }

  /**
   * ContractDocument findMany
   */
  export type ContractDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractDocument
     */
    select?: ContractDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractDocument
     */
    omit?: ContractDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractDocumentInclude<ExtArgs> | null
    /**
     * Filter, which ContractDocuments to fetch.
     */
    where?: ContractDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractDocuments to fetch.
     */
    orderBy?: ContractDocumentOrderByWithRelationInput | ContractDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContractDocuments.
     */
    cursor?: ContractDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractDocuments.
     */
    skip?: number
    distinct?: ContractDocumentScalarFieldEnum | ContractDocumentScalarFieldEnum[]
  }

  /**
   * ContractDocument create
   */
  export type ContractDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractDocument
     */
    select?: ContractDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractDocument
     */
    omit?: ContractDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractDocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a ContractDocument.
     */
    data: XOR<ContractDocumentCreateInput, ContractDocumentUncheckedCreateInput>
  }

  /**
   * ContractDocument createMany
   */
  export type ContractDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContractDocuments.
     */
    data: ContractDocumentCreateManyInput | ContractDocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContractDocument update
   */
  export type ContractDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractDocument
     */
    select?: ContractDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractDocument
     */
    omit?: ContractDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractDocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a ContractDocument.
     */
    data: XOR<ContractDocumentUpdateInput, ContractDocumentUncheckedUpdateInput>
    /**
     * Choose, which ContractDocument to update.
     */
    where: ContractDocumentWhereUniqueInput
  }

  /**
   * ContractDocument updateMany
   */
  export type ContractDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContractDocuments.
     */
    data: XOR<ContractDocumentUpdateManyMutationInput, ContractDocumentUncheckedUpdateManyInput>
    /**
     * Filter which ContractDocuments to update
     */
    where?: ContractDocumentWhereInput
    /**
     * Limit how many ContractDocuments to update.
     */
    limit?: number
  }

  /**
   * ContractDocument upsert
   */
  export type ContractDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractDocument
     */
    select?: ContractDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractDocument
     */
    omit?: ContractDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractDocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the ContractDocument to update in case it exists.
     */
    where: ContractDocumentWhereUniqueInput
    /**
     * In case the ContractDocument found by the `where` argument doesn't exist, create a new ContractDocument with this data.
     */
    create: XOR<ContractDocumentCreateInput, ContractDocumentUncheckedCreateInput>
    /**
     * In case the ContractDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContractDocumentUpdateInput, ContractDocumentUncheckedUpdateInput>
  }

  /**
   * ContractDocument delete
   */
  export type ContractDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractDocument
     */
    select?: ContractDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractDocument
     */
    omit?: ContractDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractDocumentInclude<ExtArgs> | null
    /**
     * Filter which ContractDocument to delete.
     */
    where: ContractDocumentWhereUniqueInput
  }

  /**
   * ContractDocument deleteMany
   */
  export type ContractDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContractDocuments to delete
     */
    where?: ContractDocumentWhereInput
    /**
     * Limit how many ContractDocuments to delete.
     */
    limit?: number
  }

  /**
   * ContractDocument without action
   */
  export type ContractDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractDocument
     */
    select?: ContractDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractDocument
     */
    omit?: ContractDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractDocumentInclude<ExtArgs> | null
  }


  /**
   * Model Enum
   */

  export type AggregateEnum = {
    _count: EnumCountAggregateOutputType | null
    _avg: EnumAvgAggregateOutputType | null
    _sum: EnumSumAggregateOutputType | null
    _min: EnumMinAggregateOutputType | null
    _max: EnumMaxAggregateOutputType | null
  }

  export type EnumAvgAggregateOutputType = {
    id: number | null
  }

  export type EnumSumAggregateOutputType = {
    id: number | null
  }

  export type EnumMinAggregateOutputType = {
    id: number | null
    type: $Enums.EnumType | null
    code: string | null
    name: string | null
    label: string | null
    value: string | null
    desc: string | null
    enable: boolean | null
  }

  export type EnumMaxAggregateOutputType = {
    id: number | null
    type: $Enums.EnumType | null
    code: string | null
    name: string | null
    label: string | null
    value: string | null
    desc: string | null
    enable: boolean | null
  }

  export type EnumCountAggregateOutputType = {
    id: number
    type: number
    code: number
    name: number
    label: number
    value: number
    desc: number
    enable: number
    _all: number
  }


  export type EnumAvgAggregateInputType = {
    id?: true
  }

  export type EnumSumAggregateInputType = {
    id?: true
  }

  export type EnumMinAggregateInputType = {
    id?: true
    type?: true
    code?: true
    name?: true
    label?: true
    value?: true
    desc?: true
    enable?: true
  }

  export type EnumMaxAggregateInputType = {
    id?: true
    type?: true
    code?: true
    name?: true
    label?: true
    value?: true
    desc?: true
    enable?: true
  }

  export type EnumCountAggregateInputType = {
    id?: true
    type?: true
    code?: true
    name?: true
    label?: true
    value?: true
    desc?: true
    enable?: true
    _all?: true
  }

  export type EnumAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enum to aggregate.
     */
    where?: EnumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enums to fetch.
     */
    orderBy?: EnumOrderByWithRelationInput | EnumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Enums
    **/
    _count?: true | EnumCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnumAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnumSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnumMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnumMaxAggregateInputType
  }

  export type GetEnumAggregateType<T extends EnumAggregateArgs> = {
        [P in keyof T & keyof AggregateEnum]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnum[P]>
      : GetScalarType<T[P], AggregateEnum[P]>
  }




  export type EnumGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnumWhereInput
    orderBy?: EnumOrderByWithAggregationInput | EnumOrderByWithAggregationInput[]
    by: EnumScalarFieldEnum[] | EnumScalarFieldEnum
    having?: EnumScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnumCountAggregateInputType | true
    _avg?: EnumAvgAggregateInputType
    _sum?: EnumSumAggregateInputType
    _min?: EnumMinAggregateInputType
    _max?: EnumMaxAggregateInputType
  }

  export type EnumGroupByOutputType = {
    id: number
    type: $Enums.EnumType
    code: string
    name: string | null
    label: string
    value: string
    desc: string | null
    enable: boolean
    _count: EnumCountAggregateOutputType | null
    _avg: EnumAvgAggregateOutputType | null
    _sum: EnumSumAggregateOutputType | null
    _min: EnumMinAggregateOutputType | null
    _max: EnumMaxAggregateOutputType | null
  }

  type GetEnumGroupByPayload<T extends EnumGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnumGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnumGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnumGroupByOutputType[P]>
            : GetScalarType<T[P], EnumGroupByOutputType[P]>
        }
      >
    >


  export type EnumSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    code?: boolean
    name?: boolean
    label?: boolean
    value?: boolean
    desc?: boolean
    enable?: boolean
  }, ExtArgs["result"]["enum"]>



  export type EnumSelectScalar = {
    id?: boolean
    type?: boolean
    code?: boolean
    name?: boolean
    label?: boolean
    value?: boolean
    desc?: boolean
    enable?: boolean
  }

  export type EnumOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "code" | "name" | "label" | "value" | "desc" | "enable", ExtArgs["result"]["enum"]>

  export type $EnumPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Enum"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: $Enums.EnumType
      code: string
      name: string | null
      label: string
      value: string
      desc: string | null
      enable: boolean
    }, ExtArgs["result"]["enum"]>
    composites: {}
  }

  type EnumGetPayload<S extends boolean | null | undefined | EnumDefaultArgs> = $Result.GetResult<Prisma.$EnumPayload, S>

  type EnumCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnumFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnumCountAggregateInputType | true
    }

  export interface EnumDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Enum'], meta: { name: 'Enum' } }
    /**
     * Find zero or one Enum that matches the filter.
     * @param {EnumFindUniqueArgs} args - Arguments to find a Enum
     * @example
     * // Get one Enum
     * const enum = await prisma.enum.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnumFindUniqueArgs>(args: SelectSubset<T, EnumFindUniqueArgs<ExtArgs>>): Prisma__EnumClient<$Result.GetResult<Prisma.$EnumPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Enum that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnumFindUniqueOrThrowArgs} args - Arguments to find a Enum
     * @example
     * // Get one Enum
     * const enum = await prisma.enum.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnumFindUniqueOrThrowArgs>(args: SelectSubset<T, EnumFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnumClient<$Result.GetResult<Prisma.$EnumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enum that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnumFindFirstArgs} args - Arguments to find a Enum
     * @example
     * // Get one Enum
     * const enum = await prisma.enum.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnumFindFirstArgs>(args?: SelectSubset<T, EnumFindFirstArgs<ExtArgs>>): Prisma__EnumClient<$Result.GetResult<Prisma.$EnumPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enum that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnumFindFirstOrThrowArgs} args - Arguments to find a Enum
     * @example
     * // Get one Enum
     * const enum = await prisma.enum.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnumFindFirstOrThrowArgs>(args?: SelectSubset<T, EnumFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnumClient<$Result.GetResult<Prisma.$EnumPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnumFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enums
     * const enums = await prisma.enum.findMany()
     * 
     * // Get first 10 Enums
     * const enums = await prisma.enum.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enumWithIdOnly = await prisma.enum.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnumFindManyArgs>(args?: SelectSubset<T, EnumFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Enum.
     * @param {EnumCreateArgs} args - Arguments to create a Enum.
     * @example
     * // Create one Enum
     * const Enum = await prisma.enum.create({
     *   data: {
     *     // ... data to create a Enum
     *   }
     * })
     * 
     */
    create<T extends EnumCreateArgs>(args: SelectSubset<T, EnumCreateArgs<ExtArgs>>): Prisma__EnumClient<$Result.GetResult<Prisma.$EnumPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enums.
     * @param {EnumCreateManyArgs} args - Arguments to create many Enums.
     * @example
     * // Create many Enums
     * const enum = await prisma.enum.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnumCreateManyArgs>(args?: SelectSubset<T, EnumCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Enum.
     * @param {EnumDeleteArgs} args - Arguments to delete one Enum.
     * @example
     * // Delete one Enum
     * const Enum = await prisma.enum.delete({
     *   where: {
     *     // ... filter to delete one Enum
     *   }
     * })
     * 
     */
    delete<T extends EnumDeleteArgs>(args: SelectSubset<T, EnumDeleteArgs<ExtArgs>>): Prisma__EnumClient<$Result.GetResult<Prisma.$EnumPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Enum.
     * @param {EnumUpdateArgs} args - Arguments to update one Enum.
     * @example
     * // Update one Enum
     * const enum = await prisma.enum.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnumUpdateArgs>(args: SelectSubset<T, EnumUpdateArgs<ExtArgs>>): Prisma__EnumClient<$Result.GetResult<Prisma.$EnumPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enums.
     * @param {EnumDeleteManyArgs} args - Arguments to filter Enums to delete.
     * @example
     * // Delete a few Enums
     * const { count } = await prisma.enum.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnumDeleteManyArgs>(args?: SelectSubset<T, EnumDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnumUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enums
     * const enum = await prisma.enum.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnumUpdateManyArgs>(args: SelectSubset<T, EnumUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Enum.
     * @param {EnumUpsertArgs} args - Arguments to update or create a Enum.
     * @example
     * // Update or create a Enum
     * const enum = await prisma.enum.upsert({
     *   create: {
     *     // ... data to create a Enum
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enum we want to update
     *   }
     * })
     */
    upsert<T extends EnumUpsertArgs>(args: SelectSubset<T, EnumUpsertArgs<ExtArgs>>): Prisma__EnumClient<$Result.GetResult<Prisma.$EnumPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Enums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnumCountArgs} args - Arguments to filter Enums to count.
     * @example
     * // Count the number of Enums
     * const count = await prisma.enum.count({
     *   where: {
     *     // ... the filter for the Enums we want to count
     *   }
     * })
    **/
    count<T extends EnumCountArgs>(
      args?: Subset<T, EnumCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnumCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Enum.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnumAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EnumAggregateArgs>(args: Subset<T, EnumAggregateArgs>): Prisma.PrismaPromise<GetEnumAggregateType<T>>

    /**
     * Group by Enum.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnumGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EnumGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnumGroupByArgs['orderBy'] }
        : { orderBy?: EnumGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EnumGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnumGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Enum model
   */
  readonly fields: EnumFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Enum.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnumClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Enum model
   */
  interface EnumFieldRefs {
    readonly id: FieldRef<"Enum", 'Int'>
    readonly type: FieldRef<"Enum", 'EnumType'>
    readonly code: FieldRef<"Enum", 'String'>
    readonly name: FieldRef<"Enum", 'String'>
    readonly label: FieldRef<"Enum", 'String'>
    readonly value: FieldRef<"Enum", 'String'>
    readonly desc: FieldRef<"Enum", 'String'>
    readonly enable: FieldRef<"Enum", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Enum findUnique
   */
  export type EnumFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enum
     */
    select?: EnumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enum
     */
    omit?: EnumOmit<ExtArgs> | null
    /**
     * Filter, which Enum to fetch.
     */
    where: EnumWhereUniqueInput
  }

  /**
   * Enum findUniqueOrThrow
   */
  export type EnumFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enum
     */
    select?: EnumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enum
     */
    omit?: EnumOmit<ExtArgs> | null
    /**
     * Filter, which Enum to fetch.
     */
    where: EnumWhereUniqueInput
  }

  /**
   * Enum findFirst
   */
  export type EnumFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enum
     */
    select?: EnumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enum
     */
    omit?: EnumOmit<ExtArgs> | null
    /**
     * Filter, which Enum to fetch.
     */
    where?: EnumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enums to fetch.
     */
    orderBy?: EnumOrderByWithRelationInput | EnumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enums.
     */
    cursor?: EnumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enums.
     */
    distinct?: EnumScalarFieldEnum | EnumScalarFieldEnum[]
  }

  /**
   * Enum findFirstOrThrow
   */
  export type EnumFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enum
     */
    select?: EnumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enum
     */
    omit?: EnumOmit<ExtArgs> | null
    /**
     * Filter, which Enum to fetch.
     */
    where?: EnumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enums to fetch.
     */
    orderBy?: EnumOrderByWithRelationInput | EnumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enums.
     */
    cursor?: EnumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enums.
     */
    distinct?: EnumScalarFieldEnum | EnumScalarFieldEnum[]
  }

  /**
   * Enum findMany
   */
  export type EnumFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enum
     */
    select?: EnumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enum
     */
    omit?: EnumOmit<ExtArgs> | null
    /**
     * Filter, which Enums to fetch.
     */
    where?: EnumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enums to fetch.
     */
    orderBy?: EnumOrderByWithRelationInput | EnumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Enums.
     */
    cursor?: EnumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enums.
     */
    skip?: number
    distinct?: EnumScalarFieldEnum | EnumScalarFieldEnum[]
  }

  /**
   * Enum create
   */
  export type EnumCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enum
     */
    select?: EnumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enum
     */
    omit?: EnumOmit<ExtArgs> | null
    /**
     * The data needed to create a Enum.
     */
    data: XOR<EnumCreateInput, EnumUncheckedCreateInput>
  }

  /**
   * Enum createMany
   */
  export type EnumCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Enums.
     */
    data: EnumCreateManyInput | EnumCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Enum update
   */
  export type EnumUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enum
     */
    select?: EnumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enum
     */
    omit?: EnumOmit<ExtArgs> | null
    /**
     * The data needed to update a Enum.
     */
    data: XOR<EnumUpdateInput, EnumUncheckedUpdateInput>
    /**
     * Choose, which Enum to update.
     */
    where: EnumWhereUniqueInput
  }

  /**
   * Enum updateMany
   */
  export type EnumUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Enums.
     */
    data: XOR<EnumUpdateManyMutationInput, EnumUncheckedUpdateManyInput>
    /**
     * Filter which Enums to update
     */
    where?: EnumWhereInput
    /**
     * Limit how many Enums to update.
     */
    limit?: number
  }

  /**
   * Enum upsert
   */
  export type EnumUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enum
     */
    select?: EnumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enum
     */
    omit?: EnumOmit<ExtArgs> | null
    /**
     * The filter to search for the Enum to update in case it exists.
     */
    where: EnumWhereUniqueInput
    /**
     * In case the Enum found by the `where` argument doesn't exist, create a new Enum with this data.
     */
    create: XOR<EnumCreateInput, EnumUncheckedCreateInput>
    /**
     * In case the Enum was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnumUpdateInput, EnumUncheckedUpdateInput>
  }

  /**
   * Enum delete
   */
  export type EnumDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enum
     */
    select?: EnumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enum
     */
    omit?: EnumOmit<ExtArgs> | null
    /**
     * Filter which Enum to delete.
     */
    where: EnumWhereUniqueInput
  }

  /**
   * Enum deleteMany
   */
  export type EnumDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enums to delete
     */
    where?: EnumWhereInput
    /**
     * Limit how many Enums to delete.
     */
    limit?: number
  }

  /**
   * Enum without action
   */
  export type EnumDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enum
     */
    select?: EnumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enum
     */
    omit?: EnumOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    name: 'name',
    pinyin: 'pinyin',
    email: 'email',
    gender: 'gender',
    avatar: 'avatar',
    birthDate: 'birthDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    lastLoginAt: 'lastLoginAt',
    isVerified: 'isVerified',
    isActive: 'isActive',
    departmentId: 'departmentId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DepartmentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    desc: 'desc',
    parentId: 'parentId',
    createdAt: 'createdAt'
  };

  export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum]


  export const LogReqScalarFieldEnum: {
    id: 'id',
    code: 'code',
    level: 'level',
    method: 'method',
    path: 'path',
    query: 'query',
    body: 'body',
    message: 'message',
    duration: 'duration',
    status: 'status',
    timestamp: 'timestamp'
  };

  export type LogReqScalarFieldEnum = (typeof LogReqScalarFieldEnum)[keyof typeof LogReqScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    desc: 'desc',
    createTime: 'createTime',
    permissions: 'permissions'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const BoardScalarFieldEnum: {
    id: 'id',
    title: 'title',
    desc: 'desc',
    createTime: 'createTime',
    creator: 'creator',
    indicatorCount: 'indicatorCount'
  };

  export type BoardScalarFieldEnum = (typeof BoardScalarFieldEnum)[keyof typeof BoardScalarFieldEnum]


  export const CardScalarFieldEnum: {
    id: 'id',
    title: 'title',
    createTime: 'createTime',
    type: 'type',
    value: 'value',
    x: 'x',
    y: 'y',
    w: 'w',
    h: 'h',
    i: 'i',
    config: 'config',
    data: 'data',
    boardId: 'boardId'
  };

  export type CardScalarFieldEnum = (typeof CardScalarFieldEnum)[keyof typeof CardScalarFieldEnum]


  export const TenantScalarFieldEnum: {
    id: 'id',
    idCardNumber: 'idCardNumber',
    username: 'username',
    tel: 'tel',
    blacklisted: 'blacklisted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TenantScalarFieldEnum = (typeof TenantScalarFieldEnum)[keyof typeof TenantScalarFieldEnum]


  export const HouseScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    type: 'type',
    isWholeRent: 'isWholeRent',
    price: 'price',
    priceUnit: 'priceUnit',
    deposit: 'deposit',
    area: 'area',
    areaUnit: 'areaUnit',
    address: 'address',
    city: 'city',
    district: 'district',
    longitude: 'longitude',
    latitude: 'latitude',
    bedrooms: 'bedrooms',
    livingRooms: 'livingRooms',
    kitchens: 'kitchens',
    bathrooms: 'bathrooms',
    washingCount: 'washingCount',
    floor: 'floor',
    totalFloors: 'totalFloors',
    builtYear: 'builtYear',
    orientation: 'orientation',
    status: 'status',
    featured: 'featured',
    isDeleted: 'isDeleted',
    tenantId: 'tenantId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type HouseScalarFieldEnum = (typeof HouseScalarFieldEnum)[keyof typeof HouseScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    houseId: 'houseId',
    price: 'price',
    priceUnit: 'priceUnit',
    deposit: 'deposit',
    area: 'area',
    areaUnit: 'areaUnit',
    orientation: 'orientation',
    status: 'status',
    featured: 'featured',
    isDeleted: 'isDeleted',
    tenantId: 'tenantId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const HouseImageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    isPrimary: 'isPrimary',
    description: 'description',
    houseId: 'houseId',
    createdAt: 'createdAt'
  };

  export type HouseImageScalarFieldEnum = (typeof HouseImageScalarFieldEnum)[keyof typeof HouseImageScalarFieldEnum]


  export const RoomImageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    isPrimary: 'isPrimary',
    description: 'description',
    roomId: 'roomId',
    createdAt: 'createdAt'
  };

  export type RoomImageScalarFieldEnum = (typeof RoomImageScalarFieldEnum)[keyof typeof RoomImageScalarFieldEnum]


  export const ContractScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    startDate: 'startDate',
    endDate: 'endDate',
    monthlyRent: 'monthlyRent',
    deposit: 'deposit',
    status: 'status',
    houseId: 'houseId',
    roomId: 'roomId',
    tenantId: 'tenantId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContractScalarFieldEnum = (typeof ContractScalarFieldEnum)[keyof typeof ContractScalarFieldEnum]


  export const ContractDocumentScalarFieldEnum: {
    id: 'id',
    url: 'url',
    description: 'description',
    contractId: 'contractId',
    createdAt: 'createdAt'
  };

  export type ContractDocumentScalarFieldEnum = (typeof ContractDocumentScalarFieldEnum)[keyof typeof ContractDocumentScalarFieldEnum]


  export const EnumScalarFieldEnum: {
    id: 'id',
    type: 'type',
    code: 'code',
    name: 'name',
    label: 'label',
    value: 'value',
    desc: 'desc',
    enable: 'enable'
  };

  export type EnumScalarFieldEnum = (typeof EnumScalarFieldEnum)[keyof typeof EnumScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    username: 'username',
    password: 'password',
    name: 'name',
    pinyin: 'pinyin',
    email: 'email',
    avatar: 'avatar'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const DepartmentOrderByRelevanceFieldEnum: {
    name: 'name',
    desc: 'desc'
  };

  export type DepartmentOrderByRelevanceFieldEnum = (typeof DepartmentOrderByRelevanceFieldEnum)[keyof typeof DepartmentOrderByRelevanceFieldEnum]


  export const LogReqOrderByRelevanceFieldEnum: {
    level: 'level',
    method: 'method',
    path: 'path',
    query: 'query',
    body: 'body',
    message: 'message',
    duration: 'duration'
  };

  export type LogReqOrderByRelevanceFieldEnum = (typeof LogReqOrderByRelevanceFieldEnum)[keyof typeof LogReqOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const RoleOrderByRelevanceFieldEnum: {
    name: 'name',
    desc: 'desc'
  };

  export type RoleOrderByRelevanceFieldEnum = (typeof RoleOrderByRelevanceFieldEnum)[keyof typeof RoleOrderByRelevanceFieldEnum]


  export const BoardOrderByRelevanceFieldEnum: {
    title: 'title',
    desc: 'desc',
    creator: 'creator'
  };

  export type BoardOrderByRelevanceFieldEnum = (typeof BoardOrderByRelevanceFieldEnum)[keyof typeof BoardOrderByRelevanceFieldEnum]


  export const CardOrderByRelevanceFieldEnum: {
    title: 'title',
    type: 'type',
    value: 'value',
    i: 'i'
  };

  export type CardOrderByRelevanceFieldEnum = (typeof CardOrderByRelevanceFieldEnum)[keyof typeof CardOrderByRelevanceFieldEnum]


  export const TenantOrderByRelevanceFieldEnum: {
    idCardNumber: 'idCardNumber',
    username: 'username',
    tel: 'tel'
  };

  export type TenantOrderByRelevanceFieldEnum = (typeof TenantOrderByRelevanceFieldEnum)[keyof typeof TenantOrderByRelevanceFieldEnum]


  export const HouseOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description',
    address: 'address',
    city: 'city',
    district: 'district'
  };

  export type HouseOrderByRelevanceFieldEnum = (typeof HouseOrderByRelevanceFieldEnum)[keyof typeof HouseOrderByRelevanceFieldEnum]


  export const RoomOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description'
  };

  export type RoomOrderByRelevanceFieldEnum = (typeof RoomOrderByRelevanceFieldEnum)[keyof typeof RoomOrderByRelevanceFieldEnum]


  export const HouseImageOrderByRelevanceFieldEnum: {
    url: 'url',
    description: 'description'
  };

  export type HouseImageOrderByRelevanceFieldEnum = (typeof HouseImageOrderByRelevanceFieldEnum)[keyof typeof HouseImageOrderByRelevanceFieldEnum]


  export const RoomImageOrderByRelevanceFieldEnum: {
    url: 'url',
    description: 'description'
  };

  export type RoomImageOrderByRelevanceFieldEnum = (typeof RoomImageOrderByRelevanceFieldEnum)[keyof typeof RoomImageOrderByRelevanceFieldEnum]


  export const ContractOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description'
  };

  export type ContractOrderByRelevanceFieldEnum = (typeof ContractOrderByRelevanceFieldEnum)[keyof typeof ContractOrderByRelevanceFieldEnum]


  export const ContractDocumentOrderByRelevanceFieldEnum: {
    url: 'url',
    description: 'description'
  };

  export type ContractDocumentOrderByRelevanceFieldEnum = (typeof ContractDocumentOrderByRelevanceFieldEnum)[keyof typeof ContractDocumentOrderByRelevanceFieldEnum]


  export const EnumOrderByRelevanceFieldEnum: {
    code: 'code',
    name: 'name',
    label: 'label',
    value: 'value',
    desc: 'desc'
  };

  export type EnumOrderByRelevanceFieldEnum = (typeof EnumOrderByRelevanceFieldEnum)[keyof typeof EnumOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'HouseType'
   */
  export type EnumHouseTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HouseType'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'PriceUnit'
   */
  export type EnumPriceUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PriceUnit'>
    


  /**
   * Reference to a field of type 'AreaUnit'
   */
  export type EnumAreaUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AreaUnit'>
    


  /**
   * Reference to a field of type 'Direction'
   */
  export type EnumDirectionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Direction'>
    


  /**
   * Reference to a field of type 'HouseStatus'
   */
  export type EnumHouseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HouseStatus'>
    


  /**
   * Reference to a field of type 'ContractStatus'
   */
  export type EnumContractStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContractStatus'>
    


  /**
   * Reference to a field of type 'EnumType'
   */
  export type EnumEnumTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EnumType'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    pinyin?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    gender?: IntNullableFilter<"User"> | number | null
    avatar?: StringNullableFilter<"User"> | string | null
    birthDate?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    isVerified?: BoolFilter<"User"> | boolean
    isActive?: BoolFilter<"User"> | boolean
    departmentId?: IntNullableFilter<"User"> | number | null
    roles?: RoleListRelationFilter
    Department?: XOR<DepartmentNullableScalarRelationFilter, DepartmentWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    pinyin?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    isActive?: SortOrder
    departmentId?: SortOrderInput | SortOrder
    roles?: RoleOrderByRelationAggregateInput
    Department?: DepartmentOrderByWithRelationInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    pinyin?: StringNullableFilter<"User"> | string | null
    gender?: IntNullableFilter<"User"> | number | null
    avatar?: StringNullableFilter<"User"> | string | null
    birthDate?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    isVerified?: BoolFilter<"User"> | boolean
    isActive?: BoolFilter<"User"> | boolean
    departmentId?: IntNullableFilter<"User"> | number | null
    roles?: RoleListRelationFilter
    Department?: XOR<DepartmentNullableScalarRelationFilter, DepartmentWhereInput> | null
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    pinyin?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    isActive?: SortOrder
    departmentId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    pinyin?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    gender?: IntNullableWithAggregatesFilter<"User"> | number | null
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    birthDate?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    departmentId?: IntNullableWithAggregatesFilter<"User"> | number | null
  }

  export type DepartmentWhereInput = {
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    id?: IntFilter<"Department"> | number
    name?: StringFilter<"Department"> | string
    desc?: StringNullableFilter<"Department"> | string | null
    parentId?: IntNullableFilter<"Department"> | number | null
    createdAt?: DateTimeFilter<"Department"> | Date | string
    users?: UserListRelationFilter
    parent?: XOR<DepartmentNullableScalarRelationFilter, DepartmentWhereInput> | null
    children?: DepartmentListRelationFilter
  }

  export type DepartmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrderInput | SortOrder
    parentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    parent?: DepartmentOrderByWithRelationInput
    children?: DepartmentOrderByRelationAggregateInput
    _relevance?: DepartmentOrderByRelevanceInput
  }

  export type DepartmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    desc?: StringNullableFilter<"Department"> | string | null
    parentId?: IntNullableFilter<"Department"> | number | null
    createdAt?: DateTimeFilter<"Department"> | Date | string
    users?: UserListRelationFilter
    parent?: XOR<DepartmentNullableScalarRelationFilter, DepartmentWhereInput> | null
    children?: DepartmentListRelationFilter
  }, "id" | "name">

  export type DepartmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrderInput | SortOrder
    parentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: DepartmentCountOrderByAggregateInput
    _avg?: DepartmentAvgOrderByAggregateInput
    _max?: DepartmentMaxOrderByAggregateInput
    _min?: DepartmentMinOrderByAggregateInput
    _sum?: DepartmentSumOrderByAggregateInput
  }

  export type DepartmentScalarWhereWithAggregatesInput = {
    AND?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    OR?: DepartmentScalarWhereWithAggregatesInput[]
    NOT?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Department"> | number
    name?: StringWithAggregatesFilter<"Department"> | string
    desc?: StringNullableWithAggregatesFilter<"Department"> | string | null
    parentId?: IntNullableWithAggregatesFilter<"Department"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Department"> | Date | string
  }

  export type LogReqWhereInput = {
    AND?: LogReqWhereInput | LogReqWhereInput[]
    OR?: LogReqWhereInput[]
    NOT?: LogReqWhereInput | LogReqWhereInput[]
    id?: IntFilter<"LogReq"> | number
    code?: IntFilter<"LogReq"> | number
    level?: StringNullableFilter<"LogReq"> | string | null
    method?: StringNullableFilter<"LogReq"> | string | null
    path?: StringNullableFilter<"LogReq"> | string | null
    query?: StringNullableFilter<"LogReq"> | string | null
    body?: StringNullableFilter<"LogReq"> | string | null
    message?: StringFilter<"LogReq"> | string
    duration?: StringNullableFilter<"LogReq"> | string | null
    status?: IntNullableFilter<"LogReq"> | number | null
    timestamp?: DateTimeFilter<"LogReq"> | Date | string
  }

  export type LogReqOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    level?: SortOrderInput | SortOrder
    method?: SortOrderInput | SortOrder
    path?: SortOrderInput | SortOrder
    query?: SortOrderInput | SortOrder
    body?: SortOrderInput | SortOrder
    message?: SortOrder
    duration?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    _relevance?: LogReqOrderByRelevanceInput
  }

  export type LogReqWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LogReqWhereInput | LogReqWhereInput[]
    OR?: LogReqWhereInput[]
    NOT?: LogReqWhereInput | LogReqWhereInput[]
    code?: IntFilter<"LogReq"> | number
    level?: StringNullableFilter<"LogReq"> | string | null
    method?: StringNullableFilter<"LogReq"> | string | null
    path?: StringNullableFilter<"LogReq"> | string | null
    query?: StringNullableFilter<"LogReq"> | string | null
    body?: StringNullableFilter<"LogReq"> | string | null
    message?: StringFilter<"LogReq"> | string
    duration?: StringNullableFilter<"LogReq"> | string | null
    status?: IntNullableFilter<"LogReq"> | number | null
    timestamp?: DateTimeFilter<"LogReq"> | Date | string
  }, "id">

  export type LogReqOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    level?: SortOrderInput | SortOrder
    method?: SortOrderInput | SortOrder
    path?: SortOrderInput | SortOrder
    query?: SortOrderInput | SortOrder
    body?: SortOrderInput | SortOrder
    message?: SortOrder
    duration?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    _count?: LogReqCountOrderByAggregateInput
    _avg?: LogReqAvgOrderByAggregateInput
    _max?: LogReqMaxOrderByAggregateInput
    _min?: LogReqMinOrderByAggregateInput
    _sum?: LogReqSumOrderByAggregateInput
  }

  export type LogReqScalarWhereWithAggregatesInput = {
    AND?: LogReqScalarWhereWithAggregatesInput | LogReqScalarWhereWithAggregatesInput[]
    OR?: LogReqScalarWhereWithAggregatesInput[]
    NOT?: LogReqScalarWhereWithAggregatesInput | LogReqScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LogReq"> | number
    code?: IntWithAggregatesFilter<"LogReq"> | number
    level?: StringNullableWithAggregatesFilter<"LogReq"> | string | null
    method?: StringNullableWithAggregatesFilter<"LogReq"> | string | null
    path?: StringNullableWithAggregatesFilter<"LogReq"> | string | null
    query?: StringNullableWithAggregatesFilter<"LogReq"> | string | null
    body?: StringNullableWithAggregatesFilter<"LogReq"> | string | null
    message?: StringWithAggregatesFilter<"LogReq"> | string
    duration?: StringNullableWithAggregatesFilter<"LogReq"> | string | null
    status?: IntNullableWithAggregatesFilter<"LogReq"> | number | null
    timestamp?: DateTimeWithAggregatesFilter<"LogReq"> | Date | string
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: IntFilter<"Role"> | number
    name?: StringFilter<"Role"> | string
    desc?: StringNullableFilter<"Role"> | string | null
    createTime?: DateTimeFilter<"Role"> | Date | string
    permissions?: JsonNullableFilter<"Role">
    users?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrderInput | SortOrder
    createTime?: SortOrder
    permissions?: SortOrderInput | SortOrder
    users?: UserOrderByRelationAggregateInput
    _relevance?: RoleOrderByRelevanceInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    desc?: StringNullableFilter<"Role"> | string | null
    createTime?: DateTimeFilter<"Role"> | Date | string
    permissions?: JsonNullableFilter<"Role">
    users?: UserListRelationFilter
  }, "id" | "name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrderInput | SortOrder
    createTime?: SortOrder
    permissions?: SortOrderInput | SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Role"> | number
    name?: StringWithAggregatesFilter<"Role"> | string
    desc?: StringNullableWithAggregatesFilter<"Role"> | string | null
    createTime?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    permissions?: JsonNullableWithAggregatesFilter<"Role">
  }

  export type BoardWhereInput = {
    AND?: BoardWhereInput | BoardWhereInput[]
    OR?: BoardWhereInput[]
    NOT?: BoardWhereInput | BoardWhereInput[]
    id?: IntFilter<"Board"> | number
    title?: StringFilter<"Board"> | string
    desc?: StringNullableFilter<"Board"> | string | null
    createTime?: DateTimeFilter<"Board"> | Date | string
    creator?: StringNullableFilter<"Board"> | string | null
    indicatorCount?: IntNullableFilter<"Board"> | number | null
    cards?: CardListRelationFilter
  }

  export type BoardOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    desc?: SortOrderInput | SortOrder
    createTime?: SortOrder
    creator?: SortOrderInput | SortOrder
    indicatorCount?: SortOrderInput | SortOrder
    cards?: CardOrderByRelationAggregateInput
    _relevance?: BoardOrderByRelevanceInput
  }

  export type BoardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    title?: string
    AND?: BoardWhereInput | BoardWhereInput[]
    OR?: BoardWhereInput[]
    NOT?: BoardWhereInput | BoardWhereInput[]
    desc?: StringNullableFilter<"Board"> | string | null
    createTime?: DateTimeFilter<"Board"> | Date | string
    creator?: StringNullableFilter<"Board"> | string | null
    indicatorCount?: IntNullableFilter<"Board"> | number | null
    cards?: CardListRelationFilter
  }, "id" | "title">

  export type BoardOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    desc?: SortOrderInput | SortOrder
    createTime?: SortOrder
    creator?: SortOrderInput | SortOrder
    indicatorCount?: SortOrderInput | SortOrder
    _count?: BoardCountOrderByAggregateInput
    _avg?: BoardAvgOrderByAggregateInput
    _max?: BoardMaxOrderByAggregateInput
    _min?: BoardMinOrderByAggregateInput
    _sum?: BoardSumOrderByAggregateInput
  }

  export type BoardScalarWhereWithAggregatesInput = {
    AND?: BoardScalarWhereWithAggregatesInput | BoardScalarWhereWithAggregatesInput[]
    OR?: BoardScalarWhereWithAggregatesInput[]
    NOT?: BoardScalarWhereWithAggregatesInput | BoardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Board"> | number
    title?: StringWithAggregatesFilter<"Board"> | string
    desc?: StringNullableWithAggregatesFilter<"Board"> | string | null
    createTime?: DateTimeWithAggregatesFilter<"Board"> | Date | string
    creator?: StringNullableWithAggregatesFilter<"Board"> | string | null
    indicatorCount?: IntNullableWithAggregatesFilter<"Board"> | number | null
  }

  export type CardWhereInput = {
    AND?: CardWhereInput | CardWhereInput[]
    OR?: CardWhereInput[]
    NOT?: CardWhereInput | CardWhereInput[]
    id?: IntFilter<"Card"> | number
    title?: StringFilter<"Card"> | string
    createTime?: DateTimeFilter<"Card"> | Date | string
    type?: StringFilter<"Card"> | string
    value?: StringFilter<"Card"> | string
    x?: IntFilter<"Card"> | number
    y?: IntFilter<"Card"> | number
    w?: IntFilter<"Card"> | number
    h?: IntFilter<"Card"> | number
    i?: StringFilter<"Card"> | string
    config?: JsonNullableFilter<"Card">
    data?: JsonNullableFilter<"Card">
    boardId?: IntNullableFilter<"Card"> | number | null
    Board?: XOR<BoardNullableScalarRelationFilter, BoardWhereInput> | null
  }

  export type CardOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    createTime?: SortOrder
    type?: SortOrder
    value?: SortOrder
    x?: SortOrder
    y?: SortOrder
    w?: SortOrder
    h?: SortOrder
    i?: SortOrder
    config?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
    boardId?: SortOrderInput | SortOrder
    Board?: BoardOrderByWithRelationInput
    _relevance?: CardOrderByRelevanceInput
  }

  export type CardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CardWhereInput | CardWhereInput[]
    OR?: CardWhereInput[]
    NOT?: CardWhereInput | CardWhereInput[]
    title?: StringFilter<"Card"> | string
    createTime?: DateTimeFilter<"Card"> | Date | string
    type?: StringFilter<"Card"> | string
    value?: StringFilter<"Card"> | string
    x?: IntFilter<"Card"> | number
    y?: IntFilter<"Card"> | number
    w?: IntFilter<"Card"> | number
    h?: IntFilter<"Card"> | number
    i?: StringFilter<"Card"> | string
    config?: JsonNullableFilter<"Card">
    data?: JsonNullableFilter<"Card">
    boardId?: IntNullableFilter<"Card"> | number | null
    Board?: XOR<BoardNullableScalarRelationFilter, BoardWhereInput> | null
  }, "id">

  export type CardOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    createTime?: SortOrder
    type?: SortOrder
    value?: SortOrder
    x?: SortOrder
    y?: SortOrder
    w?: SortOrder
    h?: SortOrder
    i?: SortOrder
    config?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
    boardId?: SortOrderInput | SortOrder
    _count?: CardCountOrderByAggregateInput
    _avg?: CardAvgOrderByAggregateInput
    _max?: CardMaxOrderByAggregateInput
    _min?: CardMinOrderByAggregateInput
    _sum?: CardSumOrderByAggregateInput
  }

  export type CardScalarWhereWithAggregatesInput = {
    AND?: CardScalarWhereWithAggregatesInput | CardScalarWhereWithAggregatesInput[]
    OR?: CardScalarWhereWithAggregatesInput[]
    NOT?: CardScalarWhereWithAggregatesInput | CardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Card"> | number
    title?: StringWithAggregatesFilter<"Card"> | string
    createTime?: DateTimeWithAggregatesFilter<"Card"> | Date | string
    type?: StringWithAggregatesFilter<"Card"> | string
    value?: StringWithAggregatesFilter<"Card"> | string
    x?: IntWithAggregatesFilter<"Card"> | number
    y?: IntWithAggregatesFilter<"Card"> | number
    w?: IntWithAggregatesFilter<"Card"> | number
    h?: IntWithAggregatesFilter<"Card"> | number
    i?: StringWithAggregatesFilter<"Card"> | string
    config?: JsonNullableWithAggregatesFilter<"Card">
    data?: JsonNullableWithAggregatesFilter<"Card">
    boardId?: IntNullableWithAggregatesFilter<"Card"> | number | null
  }

  export type TenantWhereInput = {
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    id?: IntFilter<"Tenant"> | number
    idCardNumber?: StringNullableFilter<"Tenant"> | string | null
    username?: StringFilter<"Tenant"> | string
    tel?: StringNullableFilter<"Tenant"> | string | null
    blacklisted?: BoolFilter<"Tenant"> | boolean
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    houses?: HouseListRelationFilter
    rooms?: RoomListRelationFilter
    contracts?: ContractListRelationFilter
  }

  export type TenantOrderByWithRelationInput = {
    id?: SortOrder
    idCardNumber?: SortOrderInput | SortOrder
    username?: SortOrder
    tel?: SortOrderInput | SortOrder
    blacklisted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    houses?: HouseOrderByRelationAggregateInput
    rooms?: RoomOrderByRelationAggregateInput
    contracts?: ContractOrderByRelationAggregateInput
    _relevance?: TenantOrderByRelevanceInput
  }

  export type TenantWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    idCardNumber?: StringNullableFilter<"Tenant"> | string | null
    username?: StringFilter<"Tenant"> | string
    tel?: StringNullableFilter<"Tenant"> | string | null
    blacklisted?: BoolFilter<"Tenant"> | boolean
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    houses?: HouseListRelationFilter
    rooms?: RoomListRelationFilter
    contracts?: ContractListRelationFilter
  }, "id">

  export type TenantOrderByWithAggregationInput = {
    id?: SortOrder
    idCardNumber?: SortOrderInput | SortOrder
    username?: SortOrder
    tel?: SortOrderInput | SortOrder
    blacklisted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TenantCountOrderByAggregateInput
    _avg?: TenantAvgOrderByAggregateInput
    _max?: TenantMaxOrderByAggregateInput
    _min?: TenantMinOrderByAggregateInput
    _sum?: TenantSumOrderByAggregateInput
  }

  export type TenantScalarWhereWithAggregatesInput = {
    AND?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    OR?: TenantScalarWhereWithAggregatesInput[]
    NOT?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tenant"> | number
    idCardNumber?: StringNullableWithAggregatesFilter<"Tenant"> | string | null
    username?: StringWithAggregatesFilter<"Tenant"> | string
    tel?: StringNullableWithAggregatesFilter<"Tenant"> | string | null
    blacklisted?: BoolWithAggregatesFilter<"Tenant"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
  }

  export type HouseWhereInput = {
    AND?: HouseWhereInput | HouseWhereInput[]
    OR?: HouseWhereInput[]
    NOT?: HouseWhereInput | HouseWhereInput[]
    id?: IntFilter<"House"> | number
    title?: StringFilter<"House"> | string
    description?: StringNullableFilter<"House"> | string | null
    type?: EnumHouseTypeFilter<"House"> | $Enums.HouseType
    isWholeRent?: BoolFilter<"House"> | boolean
    price?: DecimalFilter<"House"> | Decimal | DecimalJsLike | number | string
    priceUnit?: EnumPriceUnitFilter<"House"> | $Enums.PriceUnit
    deposit?: DecimalNullableFilter<"House"> | Decimal | DecimalJsLike | number | string | null
    area?: DecimalNullableFilter<"House"> | Decimal | DecimalJsLike | number | string | null
    areaUnit?: EnumAreaUnitFilter<"House"> | $Enums.AreaUnit
    address?: StringFilter<"House"> | string
    city?: StringNullableFilter<"House"> | string | null
    district?: StringNullableFilter<"House"> | string | null
    longitude?: DecimalNullableFilter<"House"> | Decimal | DecimalJsLike | number | string | null
    latitude?: DecimalNullableFilter<"House"> | Decimal | DecimalJsLike | number | string | null
    bedrooms?: IntFilter<"House"> | number
    livingRooms?: IntFilter<"House"> | number
    kitchens?: IntFilter<"House"> | number
    bathrooms?: IntFilter<"House"> | number
    washingCount?: IntFilter<"House"> | number
    floor?: IntNullableFilter<"House"> | number | null
    totalFloors?: IntNullableFilter<"House"> | number | null
    builtYear?: IntNullableFilter<"House"> | number | null
    orientation?: EnumDirectionNullableFilter<"House"> | $Enums.Direction | null
    status?: EnumHouseStatusFilter<"House"> | $Enums.HouseStatus
    featured?: BoolFilter<"House"> | boolean
    isDeleted?: BoolFilter<"House"> | boolean
    tenantId?: IntFilter<"House"> | number
    createdAt?: DateTimeFilter<"House"> | Date | string
    updatedAt?: DateTimeFilter<"House"> | Date | string
    deletedAt?: DateTimeNullableFilter<"House"> | Date | string | null
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    images?: HouseImageListRelationFilter
    rooms?: RoomListRelationFilter
    contracts?: ContractListRelationFilter
  }

  export type HouseOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    isWholeRent?: SortOrder
    price?: SortOrder
    priceUnit?: SortOrder
    deposit?: SortOrderInput | SortOrder
    area?: SortOrderInput | SortOrder
    areaUnit?: SortOrder
    address?: SortOrder
    city?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    bedrooms?: SortOrder
    livingRooms?: SortOrder
    kitchens?: SortOrder
    bathrooms?: SortOrder
    washingCount?: SortOrder
    floor?: SortOrderInput | SortOrder
    totalFloors?: SortOrderInput | SortOrder
    builtYear?: SortOrderInput | SortOrder
    orientation?: SortOrderInput | SortOrder
    status?: SortOrder
    featured?: SortOrder
    isDeleted?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    tenant?: TenantOrderByWithRelationInput
    images?: HouseImageOrderByRelationAggregateInput
    rooms?: RoomOrderByRelationAggregateInput
    contracts?: ContractOrderByRelationAggregateInput
    _relevance?: HouseOrderByRelevanceInput
  }

  export type HouseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HouseWhereInput | HouseWhereInput[]
    OR?: HouseWhereInput[]
    NOT?: HouseWhereInput | HouseWhereInput[]
    title?: StringFilter<"House"> | string
    description?: StringNullableFilter<"House"> | string | null
    type?: EnumHouseTypeFilter<"House"> | $Enums.HouseType
    isWholeRent?: BoolFilter<"House"> | boolean
    price?: DecimalFilter<"House"> | Decimal | DecimalJsLike | number | string
    priceUnit?: EnumPriceUnitFilter<"House"> | $Enums.PriceUnit
    deposit?: DecimalNullableFilter<"House"> | Decimal | DecimalJsLike | number | string | null
    area?: DecimalNullableFilter<"House"> | Decimal | DecimalJsLike | number | string | null
    areaUnit?: EnumAreaUnitFilter<"House"> | $Enums.AreaUnit
    address?: StringFilter<"House"> | string
    city?: StringNullableFilter<"House"> | string | null
    district?: StringNullableFilter<"House"> | string | null
    longitude?: DecimalNullableFilter<"House"> | Decimal | DecimalJsLike | number | string | null
    latitude?: DecimalNullableFilter<"House"> | Decimal | DecimalJsLike | number | string | null
    bedrooms?: IntFilter<"House"> | number
    livingRooms?: IntFilter<"House"> | number
    kitchens?: IntFilter<"House"> | number
    bathrooms?: IntFilter<"House"> | number
    washingCount?: IntFilter<"House"> | number
    floor?: IntNullableFilter<"House"> | number | null
    totalFloors?: IntNullableFilter<"House"> | number | null
    builtYear?: IntNullableFilter<"House"> | number | null
    orientation?: EnumDirectionNullableFilter<"House"> | $Enums.Direction | null
    status?: EnumHouseStatusFilter<"House"> | $Enums.HouseStatus
    featured?: BoolFilter<"House"> | boolean
    isDeleted?: BoolFilter<"House"> | boolean
    tenantId?: IntFilter<"House"> | number
    createdAt?: DateTimeFilter<"House"> | Date | string
    updatedAt?: DateTimeFilter<"House"> | Date | string
    deletedAt?: DateTimeNullableFilter<"House"> | Date | string | null
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    images?: HouseImageListRelationFilter
    rooms?: RoomListRelationFilter
    contracts?: ContractListRelationFilter
  }, "id">

  export type HouseOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    isWholeRent?: SortOrder
    price?: SortOrder
    priceUnit?: SortOrder
    deposit?: SortOrderInput | SortOrder
    area?: SortOrderInput | SortOrder
    areaUnit?: SortOrder
    address?: SortOrder
    city?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    bedrooms?: SortOrder
    livingRooms?: SortOrder
    kitchens?: SortOrder
    bathrooms?: SortOrder
    washingCount?: SortOrder
    floor?: SortOrderInput | SortOrder
    totalFloors?: SortOrderInput | SortOrder
    builtYear?: SortOrderInput | SortOrder
    orientation?: SortOrderInput | SortOrder
    status?: SortOrder
    featured?: SortOrder
    isDeleted?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: HouseCountOrderByAggregateInput
    _avg?: HouseAvgOrderByAggregateInput
    _max?: HouseMaxOrderByAggregateInput
    _min?: HouseMinOrderByAggregateInput
    _sum?: HouseSumOrderByAggregateInput
  }

  export type HouseScalarWhereWithAggregatesInput = {
    AND?: HouseScalarWhereWithAggregatesInput | HouseScalarWhereWithAggregatesInput[]
    OR?: HouseScalarWhereWithAggregatesInput[]
    NOT?: HouseScalarWhereWithAggregatesInput | HouseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"House"> | number
    title?: StringWithAggregatesFilter<"House"> | string
    description?: StringNullableWithAggregatesFilter<"House"> | string | null
    type?: EnumHouseTypeWithAggregatesFilter<"House"> | $Enums.HouseType
    isWholeRent?: BoolWithAggregatesFilter<"House"> | boolean
    price?: DecimalWithAggregatesFilter<"House"> | Decimal | DecimalJsLike | number | string
    priceUnit?: EnumPriceUnitWithAggregatesFilter<"House"> | $Enums.PriceUnit
    deposit?: DecimalNullableWithAggregatesFilter<"House"> | Decimal | DecimalJsLike | number | string | null
    area?: DecimalNullableWithAggregatesFilter<"House"> | Decimal | DecimalJsLike | number | string | null
    areaUnit?: EnumAreaUnitWithAggregatesFilter<"House"> | $Enums.AreaUnit
    address?: StringWithAggregatesFilter<"House"> | string
    city?: StringNullableWithAggregatesFilter<"House"> | string | null
    district?: StringNullableWithAggregatesFilter<"House"> | string | null
    longitude?: DecimalNullableWithAggregatesFilter<"House"> | Decimal | DecimalJsLike | number | string | null
    latitude?: DecimalNullableWithAggregatesFilter<"House"> | Decimal | DecimalJsLike | number | string | null
    bedrooms?: IntWithAggregatesFilter<"House"> | number
    livingRooms?: IntWithAggregatesFilter<"House"> | number
    kitchens?: IntWithAggregatesFilter<"House"> | number
    bathrooms?: IntWithAggregatesFilter<"House"> | number
    washingCount?: IntWithAggregatesFilter<"House"> | number
    floor?: IntNullableWithAggregatesFilter<"House"> | number | null
    totalFloors?: IntNullableWithAggregatesFilter<"House"> | number | null
    builtYear?: IntNullableWithAggregatesFilter<"House"> | number | null
    orientation?: EnumDirectionNullableWithAggregatesFilter<"House"> | $Enums.Direction | null
    status?: EnumHouseStatusWithAggregatesFilter<"House"> | $Enums.HouseStatus
    featured?: BoolWithAggregatesFilter<"House"> | boolean
    isDeleted?: BoolWithAggregatesFilter<"House"> | boolean
    tenantId?: IntWithAggregatesFilter<"House"> | number
    createdAt?: DateTimeWithAggregatesFilter<"House"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"House"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"House"> | Date | string | null
  }

  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    id?: IntFilter<"Room"> | number
    title?: StringFilter<"Room"> | string
    description?: StringNullableFilter<"Room"> | string | null
    houseId?: IntFilter<"Room"> | number
    price?: DecimalFilter<"Room"> | Decimal | DecimalJsLike | number | string
    priceUnit?: EnumPriceUnitFilter<"Room"> | $Enums.PriceUnit
    deposit?: DecimalNullableFilter<"Room"> | Decimal | DecimalJsLike | number | string | null
    area?: DecimalFilter<"Room"> | Decimal | DecimalJsLike | number | string
    areaUnit?: EnumAreaUnitFilter<"Room"> | $Enums.AreaUnit
    orientation?: EnumDirectionNullableFilter<"Room"> | $Enums.Direction | null
    status?: EnumHouseStatusFilter<"Room"> | $Enums.HouseStatus
    featured?: BoolFilter<"Room"> | boolean
    isDeleted?: BoolFilter<"Room"> | boolean
    tenantId?: IntFilter<"Room"> | number
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Room"> | Date | string | null
    house?: XOR<HouseScalarRelationFilter, HouseWhereInput>
    images?: RoomImageListRelationFilter
    contracts?: ContractListRelationFilter
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
  }

  export type RoomOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    houseId?: SortOrder
    price?: SortOrder
    priceUnit?: SortOrder
    deposit?: SortOrderInput | SortOrder
    area?: SortOrder
    areaUnit?: SortOrder
    orientation?: SortOrderInput | SortOrder
    status?: SortOrder
    featured?: SortOrder
    isDeleted?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    house?: HouseOrderByWithRelationInput
    images?: RoomImageOrderByRelationAggregateInput
    contracts?: ContractOrderByRelationAggregateInput
    tenant?: TenantOrderByWithRelationInput
    _relevance?: RoomOrderByRelevanceInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    title?: StringFilter<"Room"> | string
    description?: StringNullableFilter<"Room"> | string | null
    houseId?: IntFilter<"Room"> | number
    price?: DecimalFilter<"Room"> | Decimal | DecimalJsLike | number | string
    priceUnit?: EnumPriceUnitFilter<"Room"> | $Enums.PriceUnit
    deposit?: DecimalNullableFilter<"Room"> | Decimal | DecimalJsLike | number | string | null
    area?: DecimalFilter<"Room"> | Decimal | DecimalJsLike | number | string
    areaUnit?: EnumAreaUnitFilter<"Room"> | $Enums.AreaUnit
    orientation?: EnumDirectionNullableFilter<"Room"> | $Enums.Direction | null
    status?: EnumHouseStatusFilter<"Room"> | $Enums.HouseStatus
    featured?: BoolFilter<"Room"> | boolean
    isDeleted?: BoolFilter<"Room"> | boolean
    tenantId?: IntFilter<"Room"> | number
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Room"> | Date | string | null
    house?: XOR<HouseScalarRelationFilter, HouseWhereInput>
    images?: RoomImageListRelationFilter
    contracts?: ContractListRelationFilter
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
  }, "id">

  export type RoomOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    houseId?: SortOrder
    price?: SortOrder
    priceUnit?: SortOrder
    deposit?: SortOrderInput | SortOrder
    area?: SortOrder
    areaUnit?: SortOrder
    orientation?: SortOrderInput | SortOrder
    status?: SortOrder
    featured?: SortOrder
    isDeleted?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: RoomCountOrderByAggregateInput
    _avg?: RoomAvgOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
    _sum?: RoomSumOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    OR?: RoomScalarWhereWithAggregatesInput[]
    NOT?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Room"> | number
    title?: StringWithAggregatesFilter<"Room"> | string
    description?: StringNullableWithAggregatesFilter<"Room"> | string | null
    houseId?: IntWithAggregatesFilter<"Room"> | number
    price?: DecimalWithAggregatesFilter<"Room"> | Decimal | DecimalJsLike | number | string
    priceUnit?: EnumPriceUnitWithAggregatesFilter<"Room"> | $Enums.PriceUnit
    deposit?: DecimalNullableWithAggregatesFilter<"Room"> | Decimal | DecimalJsLike | number | string | null
    area?: DecimalWithAggregatesFilter<"Room"> | Decimal | DecimalJsLike | number | string
    areaUnit?: EnumAreaUnitWithAggregatesFilter<"Room"> | $Enums.AreaUnit
    orientation?: EnumDirectionNullableWithAggregatesFilter<"Room"> | $Enums.Direction | null
    status?: EnumHouseStatusWithAggregatesFilter<"Room"> | $Enums.HouseStatus
    featured?: BoolWithAggregatesFilter<"Room"> | boolean
    isDeleted?: BoolWithAggregatesFilter<"Room"> | boolean
    tenantId?: IntWithAggregatesFilter<"Room"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Room"> | Date | string | null
  }

  export type HouseImageWhereInput = {
    AND?: HouseImageWhereInput | HouseImageWhereInput[]
    OR?: HouseImageWhereInput[]
    NOT?: HouseImageWhereInput | HouseImageWhereInput[]
    id?: IntFilter<"HouseImage"> | number
    url?: StringFilter<"HouseImage"> | string
    isPrimary?: BoolFilter<"HouseImage"> | boolean
    description?: StringNullableFilter<"HouseImage"> | string | null
    houseId?: IntFilter<"HouseImage"> | number
    createdAt?: DateTimeFilter<"HouseImage"> | Date | string
    house?: XOR<HouseScalarRelationFilter, HouseWhereInput>
  }

  export type HouseImageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    isPrimary?: SortOrder
    description?: SortOrderInput | SortOrder
    houseId?: SortOrder
    createdAt?: SortOrder
    house?: HouseOrderByWithRelationInput
    _relevance?: HouseImageOrderByRelevanceInput
  }

  export type HouseImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HouseImageWhereInput | HouseImageWhereInput[]
    OR?: HouseImageWhereInput[]
    NOT?: HouseImageWhereInput | HouseImageWhereInput[]
    url?: StringFilter<"HouseImage"> | string
    isPrimary?: BoolFilter<"HouseImage"> | boolean
    description?: StringNullableFilter<"HouseImage"> | string | null
    houseId?: IntFilter<"HouseImage"> | number
    createdAt?: DateTimeFilter<"HouseImage"> | Date | string
    house?: XOR<HouseScalarRelationFilter, HouseWhereInput>
  }, "id">

  export type HouseImageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    isPrimary?: SortOrder
    description?: SortOrderInput | SortOrder
    houseId?: SortOrder
    createdAt?: SortOrder
    _count?: HouseImageCountOrderByAggregateInput
    _avg?: HouseImageAvgOrderByAggregateInput
    _max?: HouseImageMaxOrderByAggregateInput
    _min?: HouseImageMinOrderByAggregateInput
    _sum?: HouseImageSumOrderByAggregateInput
  }

  export type HouseImageScalarWhereWithAggregatesInput = {
    AND?: HouseImageScalarWhereWithAggregatesInput | HouseImageScalarWhereWithAggregatesInput[]
    OR?: HouseImageScalarWhereWithAggregatesInput[]
    NOT?: HouseImageScalarWhereWithAggregatesInput | HouseImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"HouseImage"> | number
    url?: StringWithAggregatesFilter<"HouseImage"> | string
    isPrimary?: BoolWithAggregatesFilter<"HouseImage"> | boolean
    description?: StringNullableWithAggregatesFilter<"HouseImage"> | string | null
    houseId?: IntWithAggregatesFilter<"HouseImage"> | number
    createdAt?: DateTimeWithAggregatesFilter<"HouseImage"> | Date | string
  }

  export type RoomImageWhereInput = {
    AND?: RoomImageWhereInput | RoomImageWhereInput[]
    OR?: RoomImageWhereInput[]
    NOT?: RoomImageWhereInput | RoomImageWhereInput[]
    id?: IntFilter<"RoomImage"> | number
    url?: StringFilter<"RoomImage"> | string
    isPrimary?: BoolFilter<"RoomImage"> | boolean
    description?: StringNullableFilter<"RoomImage"> | string | null
    roomId?: IntFilter<"RoomImage"> | number
    createdAt?: DateTimeFilter<"RoomImage"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }

  export type RoomImageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    isPrimary?: SortOrder
    description?: SortOrderInput | SortOrder
    roomId?: SortOrder
    createdAt?: SortOrder
    room?: RoomOrderByWithRelationInput
    _relevance?: RoomImageOrderByRelevanceInput
  }

  export type RoomImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RoomImageWhereInput | RoomImageWhereInput[]
    OR?: RoomImageWhereInput[]
    NOT?: RoomImageWhereInput | RoomImageWhereInput[]
    url?: StringFilter<"RoomImage"> | string
    isPrimary?: BoolFilter<"RoomImage"> | boolean
    description?: StringNullableFilter<"RoomImage"> | string | null
    roomId?: IntFilter<"RoomImage"> | number
    createdAt?: DateTimeFilter<"RoomImage"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }, "id">

  export type RoomImageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    isPrimary?: SortOrder
    description?: SortOrderInput | SortOrder
    roomId?: SortOrder
    createdAt?: SortOrder
    _count?: RoomImageCountOrderByAggregateInput
    _avg?: RoomImageAvgOrderByAggregateInput
    _max?: RoomImageMaxOrderByAggregateInput
    _min?: RoomImageMinOrderByAggregateInput
    _sum?: RoomImageSumOrderByAggregateInput
  }

  export type RoomImageScalarWhereWithAggregatesInput = {
    AND?: RoomImageScalarWhereWithAggregatesInput | RoomImageScalarWhereWithAggregatesInput[]
    OR?: RoomImageScalarWhereWithAggregatesInput[]
    NOT?: RoomImageScalarWhereWithAggregatesInput | RoomImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RoomImage"> | number
    url?: StringWithAggregatesFilter<"RoomImage"> | string
    isPrimary?: BoolWithAggregatesFilter<"RoomImage"> | boolean
    description?: StringNullableWithAggregatesFilter<"RoomImage"> | string | null
    roomId?: IntWithAggregatesFilter<"RoomImage"> | number
    createdAt?: DateTimeWithAggregatesFilter<"RoomImage"> | Date | string
  }

  export type ContractWhereInput = {
    AND?: ContractWhereInput | ContractWhereInput[]
    OR?: ContractWhereInput[]
    NOT?: ContractWhereInput | ContractWhereInput[]
    id?: IntFilter<"Contract"> | number
    title?: StringFilter<"Contract"> | string
    description?: StringNullableFilter<"Contract"> | string | null
    startDate?: DateTimeFilter<"Contract"> | Date | string
    endDate?: DateTimeFilter<"Contract"> | Date | string
    monthlyRent?: DecimalFilter<"Contract"> | Decimal | DecimalJsLike | number | string
    deposit?: DecimalFilter<"Contract"> | Decimal | DecimalJsLike | number | string
    status?: EnumContractStatusFilter<"Contract"> | $Enums.ContractStatus
    houseId?: IntNullableFilter<"Contract"> | number | null
    roomId?: IntNullableFilter<"Contract"> | number | null
    tenantId?: IntFilter<"Contract"> | number
    createdAt?: DateTimeFilter<"Contract"> | Date | string
    updatedAt?: DateTimeFilter<"Contract"> | Date | string
    house?: XOR<HouseNullableScalarRelationFilter, HouseWhereInput> | null
    room?: XOR<RoomNullableScalarRelationFilter, RoomWhereInput> | null
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    documents?: ContractDocumentListRelationFilter
  }

  export type ContractOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    monthlyRent?: SortOrder
    deposit?: SortOrder
    status?: SortOrder
    houseId?: SortOrderInput | SortOrder
    roomId?: SortOrderInput | SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    house?: HouseOrderByWithRelationInput
    room?: RoomOrderByWithRelationInput
    tenant?: TenantOrderByWithRelationInput
    documents?: ContractDocumentOrderByRelationAggregateInput
    _relevance?: ContractOrderByRelevanceInput
  }

  export type ContractWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContractWhereInput | ContractWhereInput[]
    OR?: ContractWhereInput[]
    NOT?: ContractWhereInput | ContractWhereInput[]
    title?: StringFilter<"Contract"> | string
    description?: StringNullableFilter<"Contract"> | string | null
    startDate?: DateTimeFilter<"Contract"> | Date | string
    endDate?: DateTimeFilter<"Contract"> | Date | string
    monthlyRent?: DecimalFilter<"Contract"> | Decimal | DecimalJsLike | number | string
    deposit?: DecimalFilter<"Contract"> | Decimal | DecimalJsLike | number | string
    status?: EnumContractStatusFilter<"Contract"> | $Enums.ContractStatus
    houseId?: IntNullableFilter<"Contract"> | number | null
    roomId?: IntNullableFilter<"Contract"> | number | null
    tenantId?: IntFilter<"Contract"> | number
    createdAt?: DateTimeFilter<"Contract"> | Date | string
    updatedAt?: DateTimeFilter<"Contract"> | Date | string
    house?: XOR<HouseNullableScalarRelationFilter, HouseWhereInput> | null
    room?: XOR<RoomNullableScalarRelationFilter, RoomWhereInput> | null
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    documents?: ContractDocumentListRelationFilter
  }, "id">

  export type ContractOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    monthlyRent?: SortOrder
    deposit?: SortOrder
    status?: SortOrder
    houseId?: SortOrderInput | SortOrder
    roomId?: SortOrderInput | SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContractCountOrderByAggregateInput
    _avg?: ContractAvgOrderByAggregateInput
    _max?: ContractMaxOrderByAggregateInput
    _min?: ContractMinOrderByAggregateInput
    _sum?: ContractSumOrderByAggregateInput
  }

  export type ContractScalarWhereWithAggregatesInput = {
    AND?: ContractScalarWhereWithAggregatesInput | ContractScalarWhereWithAggregatesInput[]
    OR?: ContractScalarWhereWithAggregatesInput[]
    NOT?: ContractScalarWhereWithAggregatesInput | ContractScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Contract"> | number
    title?: StringWithAggregatesFilter<"Contract"> | string
    description?: StringNullableWithAggregatesFilter<"Contract"> | string | null
    startDate?: DateTimeWithAggregatesFilter<"Contract"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Contract"> | Date | string
    monthlyRent?: DecimalWithAggregatesFilter<"Contract"> | Decimal | DecimalJsLike | number | string
    deposit?: DecimalWithAggregatesFilter<"Contract"> | Decimal | DecimalJsLike | number | string
    status?: EnumContractStatusWithAggregatesFilter<"Contract"> | $Enums.ContractStatus
    houseId?: IntNullableWithAggregatesFilter<"Contract"> | number | null
    roomId?: IntNullableWithAggregatesFilter<"Contract"> | number | null
    tenantId?: IntWithAggregatesFilter<"Contract"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Contract"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Contract"> | Date | string
  }

  export type ContractDocumentWhereInput = {
    AND?: ContractDocumentWhereInput | ContractDocumentWhereInput[]
    OR?: ContractDocumentWhereInput[]
    NOT?: ContractDocumentWhereInput | ContractDocumentWhereInput[]
    id?: IntFilter<"ContractDocument"> | number
    url?: StringFilter<"ContractDocument"> | string
    description?: StringNullableFilter<"ContractDocument"> | string | null
    contractId?: IntFilter<"ContractDocument"> | number
    createdAt?: DateTimeFilter<"ContractDocument"> | Date | string
    contract?: XOR<ContractScalarRelationFilter, ContractWhereInput>
  }

  export type ContractDocumentOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    description?: SortOrderInput | SortOrder
    contractId?: SortOrder
    createdAt?: SortOrder
    contract?: ContractOrderByWithRelationInput
    _relevance?: ContractDocumentOrderByRelevanceInput
  }

  export type ContractDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContractDocumentWhereInput | ContractDocumentWhereInput[]
    OR?: ContractDocumentWhereInput[]
    NOT?: ContractDocumentWhereInput | ContractDocumentWhereInput[]
    url?: StringFilter<"ContractDocument"> | string
    description?: StringNullableFilter<"ContractDocument"> | string | null
    contractId?: IntFilter<"ContractDocument"> | number
    createdAt?: DateTimeFilter<"ContractDocument"> | Date | string
    contract?: XOR<ContractScalarRelationFilter, ContractWhereInput>
  }, "id">

  export type ContractDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    description?: SortOrderInput | SortOrder
    contractId?: SortOrder
    createdAt?: SortOrder
    _count?: ContractDocumentCountOrderByAggregateInput
    _avg?: ContractDocumentAvgOrderByAggregateInput
    _max?: ContractDocumentMaxOrderByAggregateInput
    _min?: ContractDocumentMinOrderByAggregateInput
    _sum?: ContractDocumentSumOrderByAggregateInput
  }

  export type ContractDocumentScalarWhereWithAggregatesInput = {
    AND?: ContractDocumentScalarWhereWithAggregatesInput | ContractDocumentScalarWhereWithAggregatesInput[]
    OR?: ContractDocumentScalarWhereWithAggregatesInput[]
    NOT?: ContractDocumentScalarWhereWithAggregatesInput | ContractDocumentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ContractDocument"> | number
    url?: StringWithAggregatesFilter<"ContractDocument"> | string
    description?: StringNullableWithAggregatesFilter<"ContractDocument"> | string | null
    contractId?: IntWithAggregatesFilter<"ContractDocument"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ContractDocument"> | Date | string
  }

  export type EnumWhereInput = {
    AND?: EnumWhereInput | EnumWhereInput[]
    OR?: EnumWhereInput[]
    NOT?: EnumWhereInput | EnumWhereInput[]
    id?: IntFilter<"Enum"> | number
    type?: EnumEnumTypeFilter<"Enum"> | $Enums.EnumType
    code?: StringFilter<"Enum"> | string
    name?: StringNullableFilter<"Enum"> | string | null
    label?: StringFilter<"Enum"> | string
    value?: StringFilter<"Enum"> | string
    desc?: StringNullableFilter<"Enum"> | string | null
    enable?: BoolFilter<"Enum"> | boolean
  }

  export type EnumOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    code?: SortOrder
    name?: SortOrderInput | SortOrder
    label?: SortOrder
    value?: SortOrder
    desc?: SortOrderInput | SortOrder
    enable?: SortOrder
    _relevance?: EnumOrderByRelevanceInput
  }

  export type EnumWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: EnumWhereInput | EnumWhereInput[]
    OR?: EnumWhereInput[]
    NOT?: EnumWhereInput | EnumWhereInput[]
    type?: EnumEnumTypeFilter<"Enum"> | $Enums.EnumType
    name?: StringNullableFilter<"Enum"> | string | null
    label?: StringFilter<"Enum"> | string
    value?: StringFilter<"Enum"> | string
    desc?: StringNullableFilter<"Enum"> | string | null
    enable?: BoolFilter<"Enum"> | boolean
  }, "id" | "code">

  export type EnumOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    code?: SortOrder
    name?: SortOrderInput | SortOrder
    label?: SortOrder
    value?: SortOrder
    desc?: SortOrderInput | SortOrder
    enable?: SortOrder
    _count?: EnumCountOrderByAggregateInput
    _avg?: EnumAvgOrderByAggregateInput
    _max?: EnumMaxOrderByAggregateInput
    _min?: EnumMinOrderByAggregateInput
    _sum?: EnumSumOrderByAggregateInput
  }

  export type EnumScalarWhereWithAggregatesInput = {
    AND?: EnumScalarWhereWithAggregatesInput | EnumScalarWhereWithAggregatesInput[]
    OR?: EnumScalarWhereWithAggregatesInput[]
    NOT?: EnumScalarWhereWithAggregatesInput | EnumScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Enum"> | number
    type?: EnumEnumTypeWithAggregatesFilter<"Enum"> | $Enums.EnumType
    code?: StringWithAggregatesFilter<"Enum"> | string
    name?: StringNullableWithAggregatesFilter<"Enum"> | string | null
    label?: StringWithAggregatesFilter<"Enum"> | string
    value?: StringWithAggregatesFilter<"Enum"> | string
    desc?: StringNullableWithAggregatesFilter<"Enum"> | string | null
    enable?: BoolWithAggregatesFilter<"Enum"> | boolean
  }

  export type UserCreateInput = {
    username: string
    password?: string
    name?: string | null
    pinyin?: string | null
    email?: string | null
    gender?: number | null
    avatar?: string | null
    birthDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    isVerified?: boolean
    isActive?: boolean
    roles?: RoleCreateNestedManyWithoutUsersInput
    Department?: DepartmentCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    password?: string
    name?: string | null
    pinyin?: string | null
    email?: string | null
    gender?: number | null
    avatar?: string | null
    birthDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    isVerified?: boolean
    isActive?: boolean
    departmentId?: number | null
    roles?: RoleUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    pinyin?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    roles?: RoleUpdateManyWithoutUsersNestedInput
    Department?: DepartmentUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    pinyin?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    departmentId?: NullableIntFieldUpdateOperationsInput | number | null
    roles?: RoleUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    password?: string
    name?: string | null
    pinyin?: string | null
    email?: string | null
    gender?: number | null
    avatar?: string | null
    birthDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    isVerified?: boolean
    isActive?: boolean
    departmentId?: number | null
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    pinyin?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    pinyin?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    departmentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DepartmentCreateInput = {
    name: string
    desc?: string | null
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutDepartmentInput
    parent?: DepartmentCreateNestedOneWithoutChildrenInput
    children?: DepartmentCreateNestedManyWithoutParentInput
  }

  export type DepartmentUncheckedCreateInput = {
    id?: number
    name: string
    desc?: string | null
    parentId?: number | null
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutDepartmentInput
    children?: DepartmentUncheckedCreateNestedManyWithoutParentInput
  }

  export type DepartmentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutDepartmentNestedInput
    parent?: DepartmentUpdateOneWithoutChildrenNestedInput
    children?: DepartmentUpdateManyWithoutParentNestedInput
  }

  export type DepartmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutDepartmentNestedInput
    children?: DepartmentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type DepartmentCreateManyInput = {
    id?: number
    name: string
    desc?: string | null
    parentId?: number | null
    createdAt?: Date | string
  }

  export type DepartmentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogReqCreateInput = {
    code?: number
    level?: string | null
    method?: string | null
    path?: string | null
    query?: string | null
    body?: string | null
    message: string
    duration?: string | null
    status?: number | null
    timestamp?: Date | string
  }

  export type LogReqUncheckedCreateInput = {
    id?: number
    code?: number
    level?: string | null
    method?: string | null
    path?: string | null
    query?: string | null
    body?: string | null
    message: string
    duration?: string | null
    status?: number | null
    timestamp?: Date | string
  }

  export type LogReqUpdateInput = {
    code?: IntFieldUpdateOperationsInput | number
    level?: NullableStringFieldUpdateOperationsInput | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    query?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogReqUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: IntFieldUpdateOperationsInput | number
    level?: NullableStringFieldUpdateOperationsInput | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    query?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogReqCreateManyInput = {
    id?: number
    code?: number
    level?: string | null
    method?: string | null
    path?: string | null
    query?: string | null
    body?: string | null
    message: string
    duration?: string | null
    status?: number | null
    timestamp?: Date | string
  }

  export type LogReqUpdateManyMutationInput = {
    code?: IntFieldUpdateOperationsInput | number
    level?: NullableStringFieldUpdateOperationsInput | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    query?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogReqUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: IntFieldUpdateOperationsInput | number
    level?: NullableStringFieldUpdateOperationsInput | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    query?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleCreateInput = {
    name: string
    desc?: string | null
    createTime?: Date | string
    permissions?: NullableJsonNullValueInput | InputJsonValue
    users?: UserCreateNestedManyWithoutRolesInput
  }

  export type RoleUncheckedCreateInput = {
    id?: number
    name: string
    desc?: string | null
    createTime?: Date | string
    permissions?: NullableJsonNullValueInput | InputJsonValue
    users?: UserUncheckedCreateNestedManyWithoutRolesInput
  }

  export type RoleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: NullableJsonNullValueInput | InputJsonValue
    users?: UserUpdateManyWithoutRolesNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: NullableJsonNullValueInput | InputJsonValue
    users?: UserUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type RoleCreateManyInput = {
    id?: number
    name: string
    desc?: string | null
    createTime?: Date | string
    permissions?: NullableJsonNullValueInput | InputJsonValue
  }

  export type RoleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: NullableJsonNullValueInput | InputJsonValue
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: NullableJsonNullValueInput | InputJsonValue
  }

  export type BoardCreateInput = {
    title: string
    desc?: string | null
    createTime?: Date | string
    creator?: string | null
    indicatorCount?: number | null
    cards?: CardCreateNestedManyWithoutBoardInput
  }

  export type BoardUncheckedCreateInput = {
    id?: number
    title: string
    desc?: string | null
    createTime?: Date | string
    creator?: string | null
    indicatorCount?: number | null
    cards?: CardUncheckedCreateNestedManyWithoutBoardInput
  }

  export type BoardUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: NullableStringFieldUpdateOperationsInput | string | null
    indicatorCount?: NullableIntFieldUpdateOperationsInput | number | null
    cards?: CardUpdateManyWithoutBoardNestedInput
  }

  export type BoardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: NullableStringFieldUpdateOperationsInput | string | null
    indicatorCount?: NullableIntFieldUpdateOperationsInput | number | null
    cards?: CardUncheckedUpdateManyWithoutBoardNestedInput
  }

  export type BoardCreateManyInput = {
    id?: number
    title: string
    desc?: string | null
    createTime?: Date | string
    creator?: string | null
    indicatorCount?: number | null
  }

  export type BoardUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: NullableStringFieldUpdateOperationsInput | string | null
    indicatorCount?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BoardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: NullableStringFieldUpdateOperationsInput | string | null
    indicatorCount?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CardCreateInput = {
    title: string
    createTime?: Date | string
    type?: string
    value: string
    x: number
    y: number
    w: number
    h: number
    i: string
    config?: NullableJsonNullValueInput | InputJsonValue
    data?: NullableJsonNullValueInput | InputJsonValue
    Board?: BoardCreateNestedOneWithoutCardsInput
  }

  export type CardUncheckedCreateInput = {
    id?: number
    title: string
    createTime?: Date | string
    type?: string
    value: string
    x: number
    y: number
    w: number
    h: number
    i: string
    config?: NullableJsonNullValueInput | InputJsonValue
    data?: NullableJsonNullValueInput | InputJsonValue
    boardId?: number | null
  }

  export type CardUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    w?: IntFieldUpdateOperationsInput | number
    h?: IntFieldUpdateOperationsInput | number
    i?: StringFieldUpdateOperationsInput | string
    config?: NullableJsonNullValueInput | InputJsonValue
    data?: NullableJsonNullValueInput | InputJsonValue
    Board?: BoardUpdateOneWithoutCardsNestedInput
  }

  export type CardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    w?: IntFieldUpdateOperationsInput | number
    h?: IntFieldUpdateOperationsInput | number
    i?: StringFieldUpdateOperationsInput | string
    config?: NullableJsonNullValueInput | InputJsonValue
    data?: NullableJsonNullValueInput | InputJsonValue
    boardId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CardCreateManyInput = {
    id?: number
    title: string
    createTime?: Date | string
    type?: string
    value: string
    x: number
    y: number
    w: number
    h: number
    i: string
    config?: NullableJsonNullValueInput | InputJsonValue
    data?: NullableJsonNullValueInput | InputJsonValue
    boardId?: number | null
  }

  export type CardUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    w?: IntFieldUpdateOperationsInput | number
    h?: IntFieldUpdateOperationsInput | number
    i?: StringFieldUpdateOperationsInput | string
    config?: NullableJsonNullValueInput | InputJsonValue
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type CardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    w?: IntFieldUpdateOperationsInput | number
    h?: IntFieldUpdateOperationsInput | number
    i?: StringFieldUpdateOperationsInput | string
    config?: NullableJsonNullValueInput | InputJsonValue
    data?: NullableJsonNullValueInput | InputJsonValue
    boardId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TenantCreateInput = {
    idCardNumber?: string | null
    username: string
    tel?: string | null
    blacklisted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    houses?: HouseCreateNestedManyWithoutTenantInput
    rooms?: RoomCreateNestedManyWithoutTenantInput
    contracts?: ContractCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateInput = {
    id?: number
    idCardNumber?: string | null
    username: string
    tel?: string | null
    blacklisted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    houses?: HouseUncheckedCreateNestedManyWithoutTenantInput
    rooms?: RoomUncheckedCreateNestedManyWithoutTenantInput
    contracts?: ContractUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantUpdateInput = {
    idCardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    houses?: HouseUpdateManyWithoutTenantNestedInput
    rooms?: RoomUpdateManyWithoutTenantNestedInput
    contracts?: ContractUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idCardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    houses?: HouseUncheckedUpdateManyWithoutTenantNestedInput
    rooms?: RoomUncheckedUpdateManyWithoutTenantNestedInput
    contracts?: ContractUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantCreateManyInput = {
    id?: number
    idCardNumber?: string | null
    username: string
    tel?: string | null
    blacklisted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantUpdateManyMutationInput = {
    idCardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idCardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HouseCreateInput = {
    title: string
    description?: string | null
    type?: $Enums.HouseType
    isWholeRent?: boolean
    price: Decimal | DecimalJsLike | number | string
    priceUnit?: $Enums.PriceUnit
    deposit?: Decimal | DecimalJsLike | number | string | null
    area?: Decimal | DecimalJsLike | number | string | null
    areaUnit?: $Enums.AreaUnit
    address: string
    city?: string | null
    district?: string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    bedrooms?: number
    livingRooms?: number
    kitchens?: number
    bathrooms?: number
    washingCount?: number
    floor?: number | null
    totalFloors?: number | null
    builtYear?: number | null
    orientation?: $Enums.Direction | null
    status?: $Enums.HouseStatus
    featured?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    tenant: TenantCreateNestedOneWithoutHousesInput
    images?: HouseImageCreateNestedManyWithoutHouseInput
    rooms?: RoomCreateNestedManyWithoutHouseInput
    contracts?: ContractCreateNestedManyWithoutHouseInput
  }

  export type HouseUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    type?: $Enums.HouseType
    isWholeRent?: boolean
    price: Decimal | DecimalJsLike | number | string
    priceUnit?: $Enums.PriceUnit
    deposit?: Decimal | DecimalJsLike | number | string | null
    area?: Decimal | DecimalJsLike | number | string | null
    areaUnit?: $Enums.AreaUnit
    address: string
    city?: string | null
    district?: string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    bedrooms?: number
    livingRooms?: number
    kitchens?: number
    bathrooms?: number
    washingCount?: number
    floor?: number | null
    totalFloors?: number | null
    builtYear?: number | null
    orientation?: $Enums.Direction | null
    status?: $Enums.HouseStatus
    featured?: boolean
    isDeleted?: boolean
    tenantId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    images?: HouseImageUncheckedCreateNestedManyWithoutHouseInput
    rooms?: RoomUncheckedCreateNestedManyWithoutHouseInput
    contracts?: ContractUncheckedCreateNestedManyWithoutHouseInput
  }

  export type HouseUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumHouseTypeFieldUpdateOperationsInput | $Enums.HouseType
    isWholeRent?: BoolFieldUpdateOperationsInput | boolean
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUnit?: EnumPriceUnitFieldUpdateOperationsInput | $Enums.PriceUnit
    deposit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    areaUnit?: EnumAreaUnitFieldUpdateOperationsInput | $Enums.AreaUnit
    address?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bedrooms?: IntFieldUpdateOperationsInput | number
    livingRooms?: IntFieldUpdateOperationsInput | number
    kitchens?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    washingCount?: IntFieldUpdateOperationsInput | number
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    totalFloors?: NullableIntFieldUpdateOperationsInput | number | null
    builtYear?: NullableIntFieldUpdateOperationsInput | number | null
    orientation?: NullableEnumDirectionFieldUpdateOperationsInput | $Enums.Direction | null
    status?: EnumHouseStatusFieldUpdateOperationsInput | $Enums.HouseStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenant?: TenantUpdateOneRequiredWithoutHousesNestedInput
    images?: HouseImageUpdateManyWithoutHouseNestedInput
    rooms?: RoomUpdateManyWithoutHouseNestedInput
    contracts?: ContractUpdateManyWithoutHouseNestedInput
  }

  export type HouseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumHouseTypeFieldUpdateOperationsInput | $Enums.HouseType
    isWholeRent?: BoolFieldUpdateOperationsInput | boolean
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUnit?: EnumPriceUnitFieldUpdateOperationsInput | $Enums.PriceUnit
    deposit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    areaUnit?: EnumAreaUnitFieldUpdateOperationsInput | $Enums.AreaUnit
    address?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bedrooms?: IntFieldUpdateOperationsInput | number
    livingRooms?: IntFieldUpdateOperationsInput | number
    kitchens?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    washingCount?: IntFieldUpdateOperationsInput | number
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    totalFloors?: NullableIntFieldUpdateOperationsInput | number | null
    builtYear?: NullableIntFieldUpdateOperationsInput | number | null
    orientation?: NullableEnumDirectionFieldUpdateOperationsInput | $Enums.Direction | null
    status?: EnumHouseStatusFieldUpdateOperationsInput | $Enums.HouseStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    tenantId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: HouseImageUncheckedUpdateManyWithoutHouseNestedInput
    rooms?: RoomUncheckedUpdateManyWithoutHouseNestedInput
    contracts?: ContractUncheckedUpdateManyWithoutHouseNestedInput
  }

  export type HouseCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    type?: $Enums.HouseType
    isWholeRent?: boolean
    price: Decimal | DecimalJsLike | number | string
    priceUnit?: $Enums.PriceUnit
    deposit?: Decimal | DecimalJsLike | number | string | null
    area?: Decimal | DecimalJsLike | number | string | null
    areaUnit?: $Enums.AreaUnit
    address: string
    city?: string | null
    district?: string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    bedrooms?: number
    livingRooms?: number
    kitchens?: number
    bathrooms?: number
    washingCount?: number
    floor?: number | null
    totalFloors?: number | null
    builtYear?: number | null
    orientation?: $Enums.Direction | null
    status?: $Enums.HouseStatus
    featured?: boolean
    isDeleted?: boolean
    tenantId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type HouseUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumHouseTypeFieldUpdateOperationsInput | $Enums.HouseType
    isWholeRent?: BoolFieldUpdateOperationsInput | boolean
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUnit?: EnumPriceUnitFieldUpdateOperationsInput | $Enums.PriceUnit
    deposit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    areaUnit?: EnumAreaUnitFieldUpdateOperationsInput | $Enums.AreaUnit
    address?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bedrooms?: IntFieldUpdateOperationsInput | number
    livingRooms?: IntFieldUpdateOperationsInput | number
    kitchens?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    washingCount?: IntFieldUpdateOperationsInput | number
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    totalFloors?: NullableIntFieldUpdateOperationsInput | number | null
    builtYear?: NullableIntFieldUpdateOperationsInput | number | null
    orientation?: NullableEnumDirectionFieldUpdateOperationsInput | $Enums.Direction | null
    status?: EnumHouseStatusFieldUpdateOperationsInput | $Enums.HouseStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HouseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumHouseTypeFieldUpdateOperationsInput | $Enums.HouseType
    isWholeRent?: BoolFieldUpdateOperationsInput | boolean
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUnit?: EnumPriceUnitFieldUpdateOperationsInput | $Enums.PriceUnit
    deposit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    areaUnit?: EnumAreaUnitFieldUpdateOperationsInput | $Enums.AreaUnit
    address?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bedrooms?: IntFieldUpdateOperationsInput | number
    livingRooms?: IntFieldUpdateOperationsInput | number
    kitchens?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    washingCount?: IntFieldUpdateOperationsInput | number
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    totalFloors?: NullableIntFieldUpdateOperationsInput | number | null
    builtYear?: NullableIntFieldUpdateOperationsInput | number | null
    orientation?: NullableEnumDirectionFieldUpdateOperationsInput | $Enums.Direction | null
    status?: EnumHouseStatusFieldUpdateOperationsInput | $Enums.HouseStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    tenantId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoomCreateInput = {
    title: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    priceUnit?: $Enums.PriceUnit
    deposit?: Decimal | DecimalJsLike | number | string | null
    area: Decimal | DecimalJsLike | number | string
    areaUnit?: $Enums.AreaUnit
    orientation?: $Enums.Direction | null
    status?: $Enums.HouseStatus
    featured?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    house: HouseCreateNestedOneWithoutRoomsInput
    images?: RoomImageCreateNestedManyWithoutRoomInput
    contracts?: ContractCreateNestedManyWithoutRoomInput
    tenant: TenantCreateNestedOneWithoutRoomsInput
  }

  export type RoomUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    houseId: number
    price: Decimal | DecimalJsLike | number | string
    priceUnit?: $Enums.PriceUnit
    deposit?: Decimal | DecimalJsLike | number | string | null
    area: Decimal | DecimalJsLike | number | string
    areaUnit?: $Enums.AreaUnit
    orientation?: $Enums.Direction | null
    status?: $Enums.HouseStatus
    featured?: boolean
    isDeleted?: boolean
    tenantId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    images?: RoomImageUncheckedCreateNestedManyWithoutRoomInput
    contracts?: ContractUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUnit?: EnumPriceUnitFieldUpdateOperationsInput | $Enums.PriceUnit
    deposit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    areaUnit?: EnumAreaUnitFieldUpdateOperationsInput | $Enums.AreaUnit
    orientation?: NullableEnumDirectionFieldUpdateOperationsInput | $Enums.Direction | null
    status?: EnumHouseStatusFieldUpdateOperationsInput | $Enums.HouseStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    house?: HouseUpdateOneRequiredWithoutRoomsNestedInput
    images?: RoomImageUpdateManyWithoutRoomNestedInput
    contracts?: ContractUpdateManyWithoutRoomNestedInput
    tenant?: TenantUpdateOneRequiredWithoutRoomsNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    houseId?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUnit?: EnumPriceUnitFieldUpdateOperationsInput | $Enums.PriceUnit
    deposit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    areaUnit?: EnumAreaUnitFieldUpdateOperationsInput | $Enums.AreaUnit
    orientation?: NullableEnumDirectionFieldUpdateOperationsInput | $Enums.Direction | null
    status?: EnumHouseStatusFieldUpdateOperationsInput | $Enums.HouseStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    tenantId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: RoomImageUncheckedUpdateManyWithoutRoomNestedInput
    contracts?: ContractUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    houseId: number
    price: Decimal | DecimalJsLike | number | string
    priceUnit?: $Enums.PriceUnit
    deposit?: Decimal | DecimalJsLike | number | string | null
    area: Decimal | DecimalJsLike | number | string
    areaUnit?: $Enums.AreaUnit
    orientation?: $Enums.Direction | null
    status?: $Enums.HouseStatus
    featured?: boolean
    isDeleted?: boolean
    tenantId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type RoomUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUnit?: EnumPriceUnitFieldUpdateOperationsInput | $Enums.PriceUnit
    deposit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    areaUnit?: EnumAreaUnitFieldUpdateOperationsInput | $Enums.AreaUnit
    orientation?: NullableEnumDirectionFieldUpdateOperationsInput | $Enums.Direction | null
    status?: EnumHouseStatusFieldUpdateOperationsInput | $Enums.HouseStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoomUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    houseId?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUnit?: EnumPriceUnitFieldUpdateOperationsInput | $Enums.PriceUnit
    deposit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    areaUnit?: EnumAreaUnitFieldUpdateOperationsInput | $Enums.AreaUnit
    orientation?: NullableEnumDirectionFieldUpdateOperationsInput | $Enums.Direction | null
    status?: EnumHouseStatusFieldUpdateOperationsInput | $Enums.HouseStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    tenantId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HouseImageCreateInput = {
    url: string
    isPrimary?: boolean
    description?: string | null
    createdAt?: Date | string
    house: HouseCreateNestedOneWithoutImagesInput
  }

  export type HouseImageUncheckedCreateInput = {
    id?: number
    url: string
    isPrimary?: boolean
    description?: string | null
    houseId: number
    createdAt?: Date | string
  }

  export type HouseImageUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    house?: HouseUpdateOneRequiredWithoutImagesNestedInput
  }

  export type HouseImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    houseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HouseImageCreateManyInput = {
    id?: number
    url: string
    isPrimary?: boolean
    description?: string | null
    houseId: number
    createdAt?: Date | string
  }

  export type HouseImageUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HouseImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    houseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomImageCreateInput = {
    url: string
    isPrimary?: boolean
    description?: string | null
    createdAt?: Date | string
    room: RoomCreateNestedOneWithoutImagesInput
  }

  export type RoomImageUncheckedCreateInput = {
    id?: number
    url: string
    isPrimary?: boolean
    description?: string | null
    roomId: number
    createdAt?: Date | string
  }

  export type RoomImageUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutImagesNestedInput
  }

  export type RoomImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    roomId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomImageCreateManyInput = {
    id?: number
    url: string
    isPrimary?: boolean
    description?: string | null
    roomId: number
    createdAt?: Date | string
  }

  export type RoomImageUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    roomId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractCreateInput = {
    title: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    monthlyRent: Decimal | DecimalJsLike | number | string
    deposit: Decimal | DecimalJsLike | number | string
    status?: $Enums.ContractStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    house?: HouseCreateNestedOneWithoutContractsInput
    room?: RoomCreateNestedOneWithoutContractsInput
    tenant: TenantCreateNestedOneWithoutContractsInput
    documents?: ContractDocumentCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    monthlyRent: Decimal | DecimalJsLike | number | string
    deposit: Decimal | DecimalJsLike | number | string
    status?: $Enums.ContractStatus
    houseId?: number | null
    roomId?: number | null
    tenantId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: ContractDocumentUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deposit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    house?: HouseUpdateOneWithoutContractsNestedInput
    room?: RoomUpdateOneWithoutContractsNestedInput
    tenant?: TenantUpdateOneRequiredWithoutContractsNestedInput
    documents?: ContractDocumentUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deposit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    houseId?: NullableIntFieldUpdateOperationsInput | number | null
    roomId?: NullableIntFieldUpdateOperationsInput | number | null
    tenantId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: ContractDocumentUncheckedUpdateManyWithoutContractNestedInput
  }

  export type ContractCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    monthlyRent: Decimal | DecimalJsLike | number | string
    deposit: Decimal | DecimalJsLike | number | string
    status?: $Enums.ContractStatus
    houseId?: number | null
    roomId?: number | null
    tenantId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deposit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deposit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    houseId?: NullableIntFieldUpdateOperationsInput | number | null
    roomId?: NullableIntFieldUpdateOperationsInput | number | null
    tenantId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractDocumentCreateInput = {
    url: string
    description?: string | null
    createdAt?: Date | string
    contract: ContractCreateNestedOneWithoutDocumentsInput
  }

  export type ContractDocumentUncheckedCreateInput = {
    id?: number
    url: string
    description?: string | null
    contractId: number
    createdAt?: Date | string
  }

  export type ContractDocumentUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contract?: ContractUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type ContractDocumentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contractId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractDocumentCreateManyInput = {
    id?: number
    url: string
    description?: string | null
    contractId: number
    createdAt?: Date | string
  }

  export type ContractDocumentUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractDocumentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contractId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnumCreateInput = {
    type?: $Enums.EnumType
    code: string
    name?: string | null
    label: string
    value: string
    desc?: string | null
    enable?: boolean
  }

  export type EnumUncheckedCreateInput = {
    id?: number
    type?: $Enums.EnumType
    code: string
    name?: string | null
    label: string
    value: string
    desc?: string | null
    enable?: boolean
  }

  export type EnumUpdateInput = {
    type?: EnumEnumTypeFieldUpdateOperationsInput | $Enums.EnumType
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    enable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EnumUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumEnumTypeFieldUpdateOperationsInput | $Enums.EnumType
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    enable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EnumCreateManyInput = {
    id?: number
    type?: $Enums.EnumType
    code: string
    name?: string | null
    label: string
    value: string
    desc?: string | null
    enable?: boolean
  }

  export type EnumUpdateManyMutationInput = {
    type?: EnumEnumTypeFieldUpdateOperationsInput | $Enums.EnumType
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    enable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EnumUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumEnumTypeFieldUpdateOperationsInput | $Enums.EnumType
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    enable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type RoleListRelationFilter = {
    every?: RoleWhereInput
    some?: RoleWhereInput
    none?: RoleWhereInput
  }

  export type DepartmentNullableScalarRelationFilter = {
    is?: DepartmentWhereInput | null
    isNot?: DepartmentWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    pinyin?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    avatar?: SortOrder
    birthDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginAt?: SortOrder
    isVerified?: SortOrder
    isActive?: SortOrder
    departmentId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    gender?: SortOrder
    departmentId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    pinyin?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    avatar?: SortOrder
    birthDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginAt?: SortOrder
    isVerified?: SortOrder
    isActive?: SortOrder
    departmentId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    pinyin?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    avatar?: SortOrder
    birthDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginAt?: SortOrder
    isVerified?: SortOrder
    isActive?: SortOrder
    departmentId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    gender?: SortOrder
    departmentId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type DepartmentListRelationFilter = {
    every?: DepartmentWhereInput
    some?: DepartmentWhereInput
    none?: DepartmentWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepartmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepartmentOrderByRelevanceInput = {
    fields: DepartmentOrderByRelevanceFieldEnum | DepartmentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DepartmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
  }

  export type DepartmentAvgOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
  }

  export type DepartmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
  }

  export type DepartmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
  }

  export type DepartmentSumOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
  }

  export type LogReqOrderByRelevanceInput = {
    fields: LogReqOrderByRelevanceFieldEnum | LogReqOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LogReqCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    level?: SortOrder
    method?: SortOrder
    path?: SortOrder
    query?: SortOrder
    body?: SortOrder
    message?: SortOrder
    duration?: SortOrder
    status?: SortOrder
    timestamp?: SortOrder
  }

  export type LogReqAvgOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    status?: SortOrder
  }

  export type LogReqMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    level?: SortOrder
    method?: SortOrder
    path?: SortOrder
    query?: SortOrder
    body?: SortOrder
    message?: SortOrder
    duration?: SortOrder
    status?: SortOrder
    timestamp?: SortOrder
  }

  export type LogReqMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    level?: SortOrder
    method?: SortOrder
    path?: SortOrder
    query?: SortOrder
    body?: SortOrder
    message?: SortOrder
    duration?: SortOrder
    status?: SortOrder
    timestamp?: SortOrder
  }

  export type LogReqSumOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    status?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type RoleOrderByRelevanceInput = {
    fields: RoleOrderByRelevanceFieldEnum | RoleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    createTime?: SortOrder
    permissions?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    createTime?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    createTime?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type CardListRelationFilter = {
    every?: CardWhereInput
    some?: CardWhereInput
    none?: CardWhereInput
  }

  export type CardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BoardOrderByRelevanceInput = {
    fields: BoardOrderByRelevanceFieldEnum | BoardOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BoardCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    createTime?: SortOrder
    creator?: SortOrder
    indicatorCount?: SortOrder
  }

  export type BoardAvgOrderByAggregateInput = {
    id?: SortOrder
    indicatorCount?: SortOrder
  }

  export type BoardMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    createTime?: SortOrder
    creator?: SortOrder
    indicatorCount?: SortOrder
  }

  export type BoardMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    createTime?: SortOrder
    creator?: SortOrder
    indicatorCount?: SortOrder
  }

  export type BoardSumOrderByAggregateInput = {
    id?: SortOrder
    indicatorCount?: SortOrder
  }

  export type BoardNullableScalarRelationFilter = {
    is?: BoardWhereInput | null
    isNot?: BoardWhereInput | null
  }

  export type CardOrderByRelevanceInput = {
    fields: CardOrderByRelevanceFieldEnum | CardOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CardCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createTime?: SortOrder
    type?: SortOrder
    value?: SortOrder
    x?: SortOrder
    y?: SortOrder
    w?: SortOrder
    h?: SortOrder
    i?: SortOrder
    config?: SortOrder
    data?: SortOrder
    boardId?: SortOrder
  }

  export type CardAvgOrderByAggregateInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    w?: SortOrder
    h?: SortOrder
    boardId?: SortOrder
  }

  export type CardMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createTime?: SortOrder
    type?: SortOrder
    value?: SortOrder
    x?: SortOrder
    y?: SortOrder
    w?: SortOrder
    h?: SortOrder
    i?: SortOrder
    boardId?: SortOrder
  }

  export type CardMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createTime?: SortOrder
    type?: SortOrder
    value?: SortOrder
    x?: SortOrder
    y?: SortOrder
    w?: SortOrder
    h?: SortOrder
    i?: SortOrder
    boardId?: SortOrder
  }

  export type CardSumOrderByAggregateInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    w?: SortOrder
    h?: SortOrder
    boardId?: SortOrder
  }

  export type HouseListRelationFilter = {
    every?: HouseWhereInput
    some?: HouseWhereInput
    none?: HouseWhereInput
  }

  export type RoomListRelationFilter = {
    every?: RoomWhereInput
    some?: RoomWhereInput
    none?: RoomWhereInput
  }

  export type ContractListRelationFilter = {
    every?: ContractWhereInput
    some?: ContractWhereInput
    none?: ContractWhereInput
  }

  export type HouseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContractOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TenantOrderByRelevanceInput = {
    fields: TenantOrderByRelevanceFieldEnum | TenantOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TenantCountOrderByAggregateInput = {
    id?: SortOrder
    idCardNumber?: SortOrder
    username?: SortOrder
    tel?: SortOrder
    blacklisted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TenantMaxOrderByAggregateInput = {
    id?: SortOrder
    idCardNumber?: SortOrder
    username?: SortOrder
    tel?: SortOrder
    blacklisted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantMinOrderByAggregateInput = {
    id?: SortOrder
    idCardNumber?: SortOrder
    username?: SortOrder
    tel?: SortOrder
    blacklisted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumHouseTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.HouseType | EnumHouseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HouseType[]
    notIn?: $Enums.HouseType[]
    not?: NestedEnumHouseTypeFilter<$PrismaModel> | $Enums.HouseType
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumPriceUnitFilter<$PrismaModel = never> = {
    equals?: $Enums.PriceUnit | EnumPriceUnitFieldRefInput<$PrismaModel>
    in?: $Enums.PriceUnit[]
    notIn?: $Enums.PriceUnit[]
    not?: NestedEnumPriceUnitFilter<$PrismaModel> | $Enums.PriceUnit
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type EnumAreaUnitFilter<$PrismaModel = never> = {
    equals?: $Enums.AreaUnit | EnumAreaUnitFieldRefInput<$PrismaModel>
    in?: $Enums.AreaUnit[]
    notIn?: $Enums.AreaUnit[]
    not?: NestedEnumAreaUnitFilter<$PrismaModel> | $Enums.AreaUnit
  }

  export type EnumDirectionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Direction | EnumDirectionFieldRefInput<$PrismaModel> | null
    in?: $Enums.Direction[] | null
    notIn?: $Enums.Direction[] | null
    not?: NestedEnumDirectionNullableFilter<$PrismaModel> | $Enums.Direction | null
  }

  export type EnumHouseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.HouseStatus | EnumHouseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.HouseStatus[]
    notIn?: $Enums.HouseStatus[]
    not?: NestedEnumHouseStatusFilter<$PrismaModel> | $Enums.HouseStatus
  }

  export type TenantScalarRelationFilter = {
    is?: TenantWhereInput
    isNot?: TenantWhereInput
  }

  export type HouseImageListRelationFilter = {
    every?: HouseImageWhereInput
    some?: HouseImageWhereInput
    none?: HouseImageWhereInput
  }

  export type HouseImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HouseOrderByRelevanceInput = {
    fields: HouseOrderByRelevanceFieldEnum | HouseOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type HouseCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    isWholeRent?: SortOrder
    price?: SortOrder
    priceUnit?: SortOrder
    deposit?: SortOrder
    area?: SortOrder
    areaUnit?: SortOrder
    address?: SortOrder
    city?: SortOrder
    district?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    bedrooms?: SortOrder
    livingRooms?: SortOrder
    kitchens?: SortOrder
    bathrooms?: SortOrder
    washingCount?: SortOrder
    floor?: SortOrder
    totalFloors?: SortOrder
    builtYear?: SortOrder
    orientation?: SortOrder
    status?: SortOrder
    featured?: SortOrder
    isDeleted?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type HouseAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    deposit?: SortOrder
    area?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    bedrooms?: SortOrder
    livingRooms?: SortOrder
    kitchens?: SortOrder
    bathrooms?: SortOrder
    washingCount?: SortOrder
    floor?: SortOrder
    totalFloors?: SortOrder
    builtYear?: SortOrder
    tenantId?: SortOrder
  }

  export type HouseMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    isWholeRent?: SortOrder
    price?: SortOrder
    priceUnit?: SortOrder
    deposit?: SortOrder
    area?: SortOrder
    areaUnit?: SortOrder
    address?: SortOrder
    city?: SortOrder
    district?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    bedrooms?: SortOrder
    livingRooms?: SortOrder
    kitchens?: SortOrder
    bathrooms?: SortOrder
    washingCount?: SortOrder
    floor?: SortOrder
    totalFloors?: SortOrder
    builtYear?: SortOrder
    orientation?: SortOrder
    status?: SortOrder
    featured?: SortOrder
    isDeleted?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type HouseMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    isWholeRent?: SortOrder
    price?: SortOrder
    priceUnit?: SortOrder
    deposit?: SortOrder
    area?: SortOrder
    areaUnit?: SortOrder
    address?: SortOrder
    city?: SortOrder
    district?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    bedrooms?: SortOrder
    livingRooms?: SortOrder
    kitchens?: SortOrder
    bathrooms?: SortOrder
    washingCount?: SortOrder
    floor?: SortOrder
    totalFloors?: SortOrder
    builtYear?: SortOrder
    orientation?: SortOrder
    status?: SortOrder
    featured?: SortOrder
    isDeleted?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type HouseSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    deposit?: SortOrder
    area?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    bedrooms?: SortOrder
    livingRooms?: SortOrder
    kitchens?: SortOrder
    bathrooms?: SortOrder
    washingCount?: SortOrder
    floor?: SortOrder
    totalFloors?: SortOrder
    builtYear?: SortOrder
    tenantId?: SortOrder
  }

  export type EnumHouseTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HouseType | EnumHouseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HouseType[]
    notIn?: $Enums.HouseType[]
    not?: NestedEnumHouseTypeWithAggregatesFilter<$PrismaModel> | $Enums.HouseType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHouseTypeFilter<$PrismaModel>
    _max?: NestedEnumHouseTypeFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumPriceUnitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PriceUnit | EnumPriceUnitFieldRefInput<$PrismaModel>
    in?: $Enums.PriceUnit[]
    notIn?: $Enums.PriceUnit[]
    not?: NestedEnumPriceUnitWithAggregatesFilter<$PrismaModel> | $Enums.PriceUnit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriceUnitFilter<$PrismaModel>
    _max?: NestedEnumPriceUnitFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type EnumAreaUnitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AreaUnit | EnumAreaUnitFieldRefInput<$PrismaModel>
    in?: $Enums.AreaUnit[]
    notIn?: $Enums.AreaUnit[]
    not?: NestedEnumAreaUnitWithAggregatesFilter<$PrismaModel> | $Enums.AreaUnit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAreaUnitFilter<$PrismaModel>
    _max?: NestedEnumAreaUnitFilter<$PrismaModel>
  }

  export type EnumDirectionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Direction | EnumDirectionFieldRefInput<$PrismaModel> | null
    in?: $Enums.Direction[] | null
    notIn?: $Enums.Direction[] | null
    not?: NestedEnumDirectionNullableWithAggregatesFilter<$PrismaModel> | $Enums.Direction | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDirectionNullableFilter<$PrismaModel>
    _max?: NestedEnumDirectionNullableFilter<$PrismaModel>
  }

  export type EnumHouseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HouseStatus | EnumHouseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.HouseStatus[]
    notIn?: $Enums.HouseStatus[]
    not?: NestedEnumHouseStatusWithAggregatesFilter<$PrismaModel> | $Enums.HouseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHouseStatusFilter<$PrismaModel>
    _max?: NestedEnumHouseStatusFilter<$PrismaModel>
  }

  export type HouseScalarRelationFilter = {
    is?: HouseWhereInput
    isNot?: HouseWhereInput
  }

  export type RoomImageListRelationFilter = {
    every?: RoomImageWhereInput
    some?: RoomImageWhereInput
    none?: RoomImageWhereInput
  }

  export type RoomImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomOrderByRelevanceInput = {
    fields: RoomOrderByRelevanceFieldEnum | RoomOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RoomCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    houseId?: SortOrder
    price?: SortOrder
    priceUnit?: SortOrder
    deposit?: SortOrder
    area?: SortOrder
    areaUnit?: SortOrder
    orientation?: SortOrder
    status?: SortOrder
    featured?: SortOrder
    isDeleted?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type RoomAvgOrderByAggregateInput = {
    id?: SortOrder
    houseId?: SortOrder
    price?: SortOrder
    deposit?: SortOrder
    area?: SortOrder
    tenantId?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    houseId?: SortOrder
    price?: SortOrder
    priceUnit?: SortOrder
    deposit?: SortOrder
    area?: SortOrder
    areaUnit?: SortOrder
    orientation?: SortOrder
    status?: SortOrder
    featured?: SortOrder
    isDeleted?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    houseId?: SortOrder
    price?: SortOrder
    priceUnit?: SortOrder
    deposit?: SortOrder
    area?: SortOrder
    areaUnit?: SortOrder
    orientation?: SortOrder
    status?: SortOrder
    featured?: SortOrder
    isDeleted?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type RoomSumOrderByAggregateInput = {
    id?: SortOrder
    houseId?: SortOrder
    price?: SortOrder
    deposit?: SortOrder
    area?: SortOrder
    tenantId?: SortOrder
  }

  export type HouseImageOrderByRelevanceInput = {
    fields: HouseImageOrderByRelevanceFieldEnum | HouseImageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type HouseImageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    isPrimary?: SortOrder
    description?: SortOrder
    houseId?: SortOrder
    createdAt?: SortOrder
  }

  export type HouseImageAvgOrderByAggregateInput = {
    id?: SortOrder
    houseId?: SortOrder
  }

  export type HouseImageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    isPrimary?: SortOrder
    description?: SortOrder
    houseId?: SortOrder
    createdAt?: SortOrder
  }

  export type HouseImageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    isPrimary?: SortOrder
    description?: SortOrder
    houseId?: SortOrder
    createdAt?: SortOrder
  }

  export type HouseImageSumOrderByAggregateInput = {
    id?: SortOrder
    houseId?: SortOrder
  }

  export type RoomScalarRelationFilter = {
    is?: RoomWhereInput
    isNot?: RoomWhereInput
  }

  export type RoomImageOrderByRelevanceInput = {
    fields: RoomImageOrderByRelevanceFieldEnum | RoomImageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RoomImageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    isPrimary?: SortOrder
    description?: SortOrder
    roomId?: SortOrder
    createdAt?: SortOrder
  }

  export type RoomImageAvgOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
  }

  export type RoomImageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    isPrimary?: SortOrder
    description?: SortOrder
    roomId?: SortOrder
    createdAt?: SortOrder
  }

  export type RoomImageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    isPrimary?: SortOrder
    description?: SortOrder
    roomId?: SortOrder
    createdAt?: SortOrder
  }

  export type RoomImageSumOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
  }

  export type EnumContractStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractStatus | EnumContractStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ContractStatus[]
    notIn?: $Enums.ContractStatus[]
    not?: NestedEnumContractStatusFilter<$PrismaModel> | $Enums.ContractStatus
  }

  export type HouseNullableScalarRelationFilter = {
    is?: HouseWhereInput | null
    isNot?: HouseWhereInput | null
  }

  export type RoomNullableScalarRelationFilter = {
    is?: RoomWhereInput | null
    isNot?: RoomWhereInput | null
  }

  export type ContractDocumentListRelationFilter = {
    every?: ContractDocumentWhereInput
    some?: ContractDocumentWhereInput
    none?: ContractDocumentWhereInput
  }

  export type ContractDocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContractOrderByRelevanceInput = {
    fields: ContractOrderByRelevanceFieldEnum | ContractOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ContractCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    monthlyRent?: SortOrder
    deposit?: SortOrder
    status?: SortOrder
    houseId?: SortOrder
    roomId?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContractAvgOrderByAggregateInput = {
    id?: SortOrder
    monthlyRent?: SortOrder
    deposit?: SortOrder
    houseId?: SortOrder
    roomId?: SortOrder
    tenantId?: SortOrder
  }

  export type ContractMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    monthlyRent?: SortOrder
    deposit?: SortOrder
    status?: SortOrder
    houseId?: SortOrder
    roomId?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContractMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    monthlyRent?: SortOrder
    deposit?: SortOrder
    status?: SortOrder
    houseId?: SortOrder
    roomId?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContractSumOrderByAggregateInput = {
    id?: SortOrder
    monthlyRent?: SortOrder
    deposit?: SortOrder
    houseId?: SortOrder
    roomId?: SortOrder
    tenantId?: SortOrder
  }

  export type EnumContractStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractStatus | EnumContractStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ContractStatus[]
    notIn?: $Enums.ContractStatus[]
    not?: NestedEnumContractStatusWithAggregatesFilter<$PrismaModel> | $Enums.ContractStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContractStatusFilter<$PrismaModel>
    _max?: NestedEnumContractStatusFilter<$PrismaModel>
  }

  export type ContractScalarRelationFilter = {
    is?: ContractWhereInput
    isNot?: ContractWhereInput
  }

  export type ContractDocumentOrderByRelevanceInput = {
    fields: ContractDocumentOrderByRelevanceFieldEnum | ContractDocumentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ContractDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    description?: SortOrder
    contractId?: SortOrder
    createdAt?: SortOrder
  }

  export type ContractDocumentAvgOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
  }

  export type ContractDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    description?: SortOrder
    contractId?: SortOrder
    createdAt?: SortOrder
  }

  export type ContractDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    description?: SortOrder
    contractId?: SortOrder
    createdAt?: SortOrder
  }

  export type ContractDocumentSumOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
  }

  export type EnumEnumTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EnumType | EnumEnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EnumType[]
    notIn?: $Enums.EnumType[]
    not?: NestedEnumEnumTypeFilter<$PrismaModel> | $Enums.EnumType
  }

  export type EnumOrderByRelevanceInput = {
    fields: EnumOrderByRelevanceFieldEnum | EnumOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EnumCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    code?: SortOrder
    name?: SortOrder
    label?: SortOrder
    value?: SortOrder
    desc?: SortOrder
    enable?: SortOrder
  }

  export type EnumAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    code?: SortOrder
    name?: SortOrder
    label?: SortOrder
    value?: SortOrder
    desc?: SortOrder
    enable?: SortOrder
  }

  export type EnumMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    code?: SortOrder
    name?: SortOrder
    label?: SortOrder
    value?: SortOrder
    desc?: SortOrder
    enable?: SortOrder
  }

  export type EnumSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumEnumTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EnumType | EnumEnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EnumType[]
    notIn?: $Enums.EnumType[]
    not?: NestedEnumEnumTypeWithAggregatesFilter<$PrismaModel> | $Enums.EnumType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEnumTypeFilter<$PrismaModel>
    _max?: NestedEnumEnumTypeFilter<$PrismaModel>
  }

  export type RoleCreateNestedManyWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput> | RoleCreateWithoutUsersInput[] | RoleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput | RoleCreateOrConnectWithoutUsersInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type DepartmentCreateNestedOneWithoutUsersInput = {
    create?: XOR<DepartmentCreateWithoutUsersInput, DepartmentUncheckedCreateWithoutUsersInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutUsersInput
    connect?: DepartmentWhereUniqueInput
  }

  export type RoleUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput> | RoleCreateWithoutUsersInput[] | RoleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput | RoleCreateOrConnectWithoutUsersInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type RoleUpdateManyWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput> | RoleCreateWithoutUsersInput[] | RoleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput | RoleCreateOrConnectWithoutUsersInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutUsersInput | RoleUpsertWithWhereUniqueWithoutUsersInput[]
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutUsersInput | RoleUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutUsersInput | RoleUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type DepartmentUpdateOneWithoutUsersNestedInput = {
    create?: XOR<DepartmentCreateWithoutUsersInput, DepartmentUncheckedCreateWithoutUsersInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutUsersInput
    upsert?: DepartmentUpsertWithoutUsersInput
    disconnect?: DepartmentWhereInput | boolean
    delete?: DepartmentWhereInput | boolean
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutUsersInput, DepartmentUpdateWithoutUsersInput>, DepartmentUncheckedUpdateWithoutUsersInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RoleUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput> | RoleCreateWithoutUsersInput[] | RoleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput | RoleCreateOrConnectWithoutUsersInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutUsersInput | RoleUpsertWithWhereUniqueWithoutUsersInput[]
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutUsersInput | RoleUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutUsersInput | RoleUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput> | UserCreateWithoutDepartmentInput[] | UserUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentInput | UserCreateOrConnectWithoutDepartmentInput[]
    createMany?: UserCreateManyDepartmentInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type DepartmentCreateNestedOneWithoutChildrenInput = {
    create?: XOR<DepartmentCreateWithoutChildrenInput, DepartmentUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutChildrenInput
    connect?: DepartmentWhereUniqueInput
  }

  export type DepartmentCreateNestedManyWithoutParentInput = {
    create?: XOR<DepartmentCreateWithoutParentInput, DepartmentUncheckedCreateWithoutParentInput> | DepartmentCreateWithoutParentInput[] | DepartmentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutParentInput | DepartmentCreateOrConnectWithoutParentInput[]
    createMany?: DepartmentCreateManyParentInputEnvelope
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput> | UserCreateWithoutDepartmentInput[] | UserUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentInput | UserCreateOrConnectWithoutDepartmentInput[]
    createMany?: UserCreateManyDepartmentInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type DepartmentUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<DepartmentCreateWithoutParentInput, DepartmentUncheckedCreateWithoutParentInput> | DepartmentCreateWithoutParentInput[] | DepartmentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutParentInput | DepartmentCreateOrConnectWithoutParentInput[]
    createMany?: DepartmentCreateManyParentInputEnvelope
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput> | UserCreateWithoutDepartmentInput[] | UserUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentInput | UserCreateOrConnectWithoutDepartmentInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDepartmentInput | UserUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: UserCreateManyDepartmentInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDepartmentInput | UserUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDepartmentInput | UserUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type DepartmentUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<DepartmentCreateWithoutChildrenInput, DepartmentUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutChildrenInput
    upsert?: DepartmentUpsertWithoutChildrenInput
    disconnect?: DepartmentWhereInput | boolean
    delete?: DepartmentWhereInput | boolean
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutChildrenInput, DepartmentUpdateWithoutChildrenInput>, DepartmentUncheckedUpdateWithoutChildrenInput>
  }

  export type DepartmentUpdateManyWithoutParentNestedInput = {
    create?: XOR<DepartmentCreateWithoutParentInput, DepartmentUncheckedCreateWithoutParentInput> | DepartmentCreateWithoutParentInput[] | DepartmentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutParentInput | DepartmentCreateOrConnectWithoutParentInput[]
    upsert?: DepartmentUpsertWithWhereUniqueWithoutParentInput | DepartmentUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: DepartmentCreateManyParentInputEnvelope
    set?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    disconnect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    delete?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    update?: DepartmentUpdateWithWhereUniqueWithoutParentInput | DepartmentUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: DepartmentUpdateManyWithWhereWithoutParentInput | DepartmentUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput> | UserCreateWithoutDepartmentInput[] | UserUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentInput | UserCreateOrConnectWithoutDepartmentInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDepartmentInput | UserUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: UserCreateManyDepartmentInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDepartmentInput | UserUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDepartmentInput | UserUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type DepartmentUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<DepartmentCreateWithoutParentInput, DepartmentUncheckedCreateWithoutParentInput> | DepartmentCreateWithoutParentInput[] | DepartmentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutParentInput | DepartmentCreateOrConnectWithoutParentInput[]
    upsert?: DepartmentUpsertWithWhereUniqueWithoutParentInput | DepartmentUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: DepartmentCreateManyParentInputEnvelope
    set?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    disconnect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    delete?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    update?: DepartmentUpdateWithWhereUniqueWithoutParentInput | DepartmentUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: DepartmentUpdateManyWithWhereWithoutParentInput | DepartmentUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutRolesInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput> | UserCreateWithoutRolesInput[] | UserUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput | UserCreateOrConnectWithoutRolesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRolesInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput> | UserCreateWithoutRolesInput[] | UserUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput | UserCreateOrConnectWithoutRolesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutRolesNestedInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput> | UserCreateWithoutRolesInput[] | UserUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput | UserCreateOrConnectWithoutRolesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRolesInput | UserUpsertWithWhereUniqueWithoutRolesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRolesInput | UserUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRolesInput | UserUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput> | UserCreateWithoutRolesInput[] | UserUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput | UserCreateOrConnectWithoutRolesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRolesInput | UserUpsertWithWhereUniqueWithoutRolesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRolesInput | UserUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRolesInput | UserUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CardCreateNestedManyWithoutBoardInput = {
    create?: XOR<CardCreateWithoutBoardInput, CardUncheckedCreateWithoutBoardInput> | CardCreateWithoutBoardInput[] | CardUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: CardCreateOrConnectWithoutBoardInput | CardCreateOrConnectWithoutBoardInput[]
    createMany?: CardCreateManyBoardInputEnvelope
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
  }

  export type CardUncheckedCreateNestedManyWithoutBoardInput = {
    create?: XOR<CardCreateWithoutBoardInput, CardUncheckedCreateWithoutBoardInput> | CardCreateWithoutBoardInput[] | CardUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: CardCreateOrConnectWithoutBoardInput | CardCreateOrConnectWithoutBoardInput[]
    createMany?: CardCreateManyBoardInputEnvelope
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
  }

  export type CardUpdateManyWithoutBoardNestedInput = {
    create?: XOR<CardCreateWithoutBoardInput, CardUncheckedCreateWithoutBoardInput> | CardCreateWithoutBoardInput[] | CardUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: CardCreateOrConnectWithoutBoardInput | CardCreateOrConnectWithoutBoardInput[]
    upsert?: CardUpsertWithWhereUniqueWithoutBoardInput | CardUpsertWithWhereUniqueWithoutBoardInput[]
    createMany?: CardCreateManyBoardInputEnvelope
    set?: CardWhereUniqueInput | CardWhereUniqueInput[]
    disconnect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    delete?: CardWhereUniqueInput | CardWhereUniqueInput[]
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    update?: CardUpdateWithWhereUniqueWithoutBoardInput | CardUpdateWithWhereUniqueWithoutBoardInput[]
    updateMany?: CardUpdateManyWithWhereWithoutBoardInput | CardUpdateManyWithWhereWithoutBoardInput[]
    deleteMany?: CardScalarWhereInput | CardScalarWhereInput[]
  }

  export type CardUncheckedUpdateManyWithoutBoardNestedInput = {
    create?: XOR<CardCreateWithoutBoardInput, CardUncheckedCreateWithoutBoardInput> | CardCreateWithoutBoardInput[] | CardUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: CardCreateOrConnectWithoutBoardInput | CardCreateOrConnectWithoutBoardInput[]
    upsert?: CardUpsertWithWhereUniqueWithoutBoardInput | CardUpsertWithWhereUniqueWithoutBoardInput[]
    createMany?: CardCreateManyBoardInputEnvelope
    set?: CardWhereUniqueInput | CardWhereUniqueInput[]
    disconnect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    delete?: CardWhereUniqueInput | CardWhereUniqueInput[]
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    update?: CardUpdateWithWhereUniqueWithoutBoardInput | CardUpdateWithWhereUniqueWithoutBoardInput[]
    updateMany?: CardUpdateManyWithWhereWithoutBoardInput | CardUpdateManyWithWhereWithoutBoardInput[]
    deleteMany?: CardScalarWhereInput | CardScalarWhereInput[]
  }

  export type BoardCreateNestedOneWithoutCardsInput = {
    create?: XOR<BoardCreateWithoutCardsInput, BoardUncheckedCreateWithoutCardsInput>
    connectOrCreate?: BoardCreateOrConnectWithoutCardsInput
    connect?: BoardWhereUniqueInput
  }

  export type BoardUpdateOneWithoutCardsNestedInput = {
    create?: XOR<BoardCreateWithoutCardsInput, BoardUncheckedCreateWithoutCardsInput>
    connectOrCreate?: BoardCreateOrConnectWithoutCardsInput
    upsert?: BoardUpsertWithoutCardsInput
    disconnect?: BoardWhereInput | boolean
    delete?: BoardWhereInput | boolean
    connect?: BoardWhereUniqueInput
    update?: XOR<XOR<BoardUpdateToOneWithWhereWithoutCardsInput, BoardUpdateWithoutCardsInput>, BoardUncheckedUpdateWithoutCardsInput>
  }

  export type HouseCreateNestedManyWithoutTenantInput = {
    create?: XOR<HouseCreateWithoutTenantInput, HouseUncheckedCreateWithoutTenantInput> | HouseCreateWithoutTenantInput[] | HouseUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: HouseCreateOrConnectWithoutTenantInput | HouseCreateOrConnectWithoutTenantInput[]
    createMany?: HouseCreateManyTenantInputEnvelope
    connect?: HouseWhereUniqueInput | HouseWhereUniqueInput[]
  }

  export type RoomCreateNestedManyWithoutTenantInput = {
    create?: XOR<RoomCreateWithoutTenantInput, RoomUncheckedCreateWithoutTenantInput> | RoomCreateWithoutTenantInput[] | RoomUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutTenantInput | RoomCreateOrConnectWithoutTenantInput[]
    createMany?: RoomCreateManyTenantInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type ContractCreateNestedManyWithoutTenantInput = {
    create?: XOR<ContractCreateWithoutTenantInput, ContractUncheckedCreateWithoutTenantInput> | ContractCreateWithoutTenantInput[] | ContractUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutTenantInput | ContractCreateOrConnectWithoutTenantInput[]
    createMany?: ContractCreateManyTenantInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type HouseUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<HouseCreateWithoutTenantInput, HouseUncheckedCreateWithoutTenantInput> | HouseCreateWithoutTenantInput[] | HouseUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: HouseCreateOrConnectWithoutTenantInput | HouseCreateOrConnectWithoutTenantInput[]
    createMany?: HouseCreateManyTenantInputEnvelope
    connect?: HouseWhereUniqueInput | HouseWhereUniqueInput[]
  }

  export type RoomUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<RoomCreateWithoutTenantInput, RoomUncheckedCreateWithoutTenantInput> | RoomCreateWithoutTenantInput[] | RoomUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutTenantInput | RoomCreateOrConnectWithoutTenantInput[]
    createMany?: RoomCreateManyTenantInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type ContractUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<ContractCreateWithoutTenantInput, ContractUncheckedCreateWithoutTenantInput> | ContractCreateWithoutTenantInput[] | ContractUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutTenantInput | ContractCreateOrConnectWithoutTenantInput[]
    createMany?: ContractCreateManyTenantInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type HouseUpdateManyWithoutTenantNestedInput = {
    create?: XOR<HouseCreateWithoutTenantInput, HouseUncheckedCreateWithoutTenantInput> | HouseCreateWithoutTenantInput[] | HouseUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: HouseCreateOrConnectWithoutTenantInput | HouseCreateOrConnectWithoutTenantInput[]
    upsert?: HouseUpsertWithWhereUniqueWithoutTenantInput | HouseUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: HouseCreateManyTenantInputEnvelope
    set?: HouseWhereUniqueInput | HouseWhereUniqueInput[]
    disconnect?: HouseWhereUniqueInput | HouseWhereUniqueInput[]
    delete?: HouseWhereUniqueInput | HouseWhereUniqueInput[]
    connect?: HouseWhereUniqueInput | HouseWhereUniqueInput[]
    update?: HouseUpdateWithWhereUniqueWithoutTenantInput | HouseUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: HouseUpdateManyWithWhereWithoutTenantInput | HouseUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: HouseScalarWhereInput | HouseScalarWhereInput[]
  }

  export type RoomUpdateManyWithoutTenantNestedInput = {
    create?: XOR<RoomCreateWithoutTenantInput, RoomUncheckedCreateWithoutTenantInput> | RoomCreateWithoutTenantInput[] | RoomUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutTenantInput | RoomCreateOrConnectWithoutTenantInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutTenantInput | RoomUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: RoomCreateManyTenantInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutTenantInput | RoomUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutTenantInput | RoomUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type ContractUpdateManyWithoutTenantNestedInput = {
    create?: XOR<ContractCreateWithoutTenantInput, ContractUncheckedCreateWithoutTenantInput> | ContractCreateWithoutTenantInput[] | ContractUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutTenantInput | ContractCreateOrConnectWithoutTenantInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutTenantInput | ContractUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: ContractCreateManyTenantInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutTenantInput | ContractUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutTenantInput | ContractUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type HouseUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<HouseCreateWithoutTenantInput, HouseUncheckedCreateWithoutTenantInput> | HouseCreateWithoutTenantInput[] | HouseUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: HouseCreateOrConnectWithoutTenantInput | HouseCreateOrConnectWithoutTenantInput[]
    upsert?: HouseUpsertWithWhereUniqueWithoutTenantInput | HouseUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: HouseCreateManyTenantInputEnvelope
    set?: HouseWhereUniqueInput | HouseWhereUniqueInput[]
    disconnect?: HouseWhereUniqueInput | HouseWhereUniqueInput[]
    delete?: HouseWhereUniqueInput | HouseWhereUniqueInput[]
    connect?: HouseWhereUniqueInput | HouseWhereUniqueInput[]
    update?: HouseUpdateWithWhereUniqueWithoutTenantInput | HouseUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: HouseUpdateManyWithWhereWithoutTenantInput | HouseUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: HouseScalarWhereInput | HouseScalarWhereInput[]
  }

  export type RoomUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<RoomCreateWithoutTenantInput, RoomUncheckedCreateWithoutTenantInput> | RoomCreateWithoutTenantInput[] | RoomUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutTenantInput | RoomCreateOrConnectWithoutTenantInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutTenantInput | RoomUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: RoomCreateManyTenantInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutTenantInput | RoomUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutTenantInput | RoomUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type ContractUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<ContractCreateWithoutTenantInput, ContractUncheckedCreateWithoutTenantInput> | ContractCreateWithoutTenantInput[] | ContractUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutTenantInput | ContractCreateOrConnectWithoutTenantInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutTenantInput | ContractUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: ContractCreateManyTenantInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutTenantInput | ContractUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutTenantInput | ContractUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutHousesInput = {
    create?: XOR<TenantCreateWithoutHousesInput, TenantUncheckedCreateWithoutHousesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutHousesInput
    connect?: TenantWhereUniqueInput
  }

  export type HouseImageCreateNestedManyWithoutHouseInput = {
    create?: XOR<HouseImageCreateWithoutHouseInput, HouseImageUncheckedCreateWithoutHouseInput> | HouseImageCreateWithoutHouseInput[] | HouseImageUncheckedCreateWithoutHouseInput[]
    connectOrCreate?: HouseImageCreateOrConnectWithoutHouseInput | HouseImageCreateOrConnectWithoutHouseInput[]
    createMany?: HouseImageCreateManyHouseInputEnvelope
    connect?: HouseImageWhereUniqueInput | HouseImageWhereUniqueInput[]
  }

  export type RoomCreateNestedManyWithoutHouseInput = {
    create?: XOR<RoomCreateWithoutHouseInput, RoomUncheckedCreateWithoutHouseInput> | RoomCreateWithoutHouseInput[] | RoomUncheckedCreateWithoutHouseInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutHouseInput | RoomCreateOrConnectWithoutHouseInput[]
    createMany?: RoomCreateManyHouseInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type ContractCreateNestedManyWithoutHouseInput = {
    create?: XOR<ContractCreateWithoutHouseInput, ContractUncheckedCreateWithoutHouseInput> | ContractCreateWithoutHouseInput[] | ContractUncheckedCreateWithoutHouseInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutHouseInput | ContractCreateOrConnectWithoutHouseInput[]
    createMany?: ContractCreateManyHouseInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type HouseImageUncheckedCreateNestedManyWithoutHouseInput = {
    create?: XOR<HouseImageCreateWithoutHouseInput, HouseImageUncheckedCreateWithoutHouseInput> | HouseImageCreateWithoutHouseInput[] | HouseImageUncheckedCreateWithoutHouseInput[]
    connectOrCreate?: HouseImageCreateOrConnectWithoutHouseInput | HouseImageCreateOrConnectWithoutHouseInput[]
    createMany?: HouseImageCreateManyHouseInputEnvelope
    connect?: HouseImageWhereUniqueInput | HouseImageWhereUniqueInput[]
  }

  export type RoomUncheckedCreateNestedManyWithoutHouseInput = {
    create?: XOR<RoomCreateWithoutHouseInput, RoomUncheckedCreateWithoutHouseInput> | RoomCreateWithoutHouseInput[] | RoomUncheckedCreateWithoutHouseInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutHouseInput | RoomCreateOrConnectWithoutHouseInput[]
    createMany?: RoomCreateManyHouseInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type ContractUncheckedCreateNestedManyWithoutHouseInput = {
    create?: XOR<ContractCreateWithoutHouseInput, ContractUncheckedCreateWithoutHouseInput> | ContractCreateWithoutHouseInput[] | ContractUncheckedCreateWithoutHouseInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutHouseInput | ContractCreateOrConnectWithoutHouseInput[]
    createMany?: ContractCreateManyHouseInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type EnumHouseTypeFieldUpdateOperationsInput = {
    set?: $Enums.HouseType
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumPriceUnitFieldUpdateOperationsInput = {
    set?: $Enums.PriceUnit
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumAreaUnitFieldUpdateOperationsInput = {
    set?: $Enums.AreaUnit
  }

  export type NullableEnumDirectionFieldUpdateOperationsInput = {
    set?: $Enums.Direction | null
  }

  export type EnumHouseStatusFieldUpdateOperationsInput = {
    set?: $Enums.HouseStatus
  }

  export type TenantUpdateOneRequiredWithoutHousesNestedInput = {
    create?: XOR<TenantCreateWithoutHousesInput, TenantUncheckedCreateWithoutHousesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutHousesInput
    upsert?: TenantUpsertWithoutHousesInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutHousesInput, TenantUpdateWithoutHousesInput>, TenantUncheckedUpdateWithoutHousesInput>
  }

  export type HouseImageUpdateManyWithoutHouseNestedInput = {
    create?: XOR<HouseImageCreateWithoutHouseInput, HouseImageUncheckedCreateWithoutHouseInput> | HouseImageCreateWithoutHouseInput[] | HouseImageUncheckedCreateWithoutHouseInput[]
    connectOrCreate?: HouseImageCreateOrConnectWithoutHouseInput | HouseImageCreateOrConnectWithoutHouseInput[]
    upsert?: HouseImageUpsertWithWhereUniqueWithoutHouseInput | HouseImageUpsertWithWhereUniqueWithoutHouseInput[]
    createMany?: HouseImageCreateManyHouseInputEnvelope
    set?: HouseImageWhereUniqueInput | HouseImageWhereUniqueInput[]
    disconnect?: HouseImageWhereUniqueInput | HouseImageWhereUniqueInput[]
    delete?: HouseImageWhereUniqueInput | HouseImageWhereUniqueInput[]
    connect?: HouseImageWhereUniqueInput | HouseImageWhereUniqueInput[]
    update?: HouseImageUpdateWithWhereUniqueWithoutHouseInput | HouseImageUpdateWithWhereUniqueWithoutHouseInput[]
    updateMany?: HouseImageUpdateManyWithWhereWithoutHouseInput | HouseImageUpdateManyWithWhereWithoutHouseInput[]
    deleteMany?: HouseImageScalarWhereInput | HouseImageScalarWhereInput[]
  }

  export type RoomUpdateManyWithoutHouseNestedInput = {
    create?: XOR<RoomCreateWithoutHouseInput, RoomUncheckedCreateWithoutHouseInput> | RoomCreateWithoutHouseInput[] | RoomUncheckedCreateWithoutHouseInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutHouseInput | RoomCreateOrConnectWithoutHouseInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutHouseInput | RoomUpsertWithWhereUniqueWithoutHouseInput[]
    createMany?: RoomCreateManyHouseInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutHouseInput | RoomUpdateWithWhereUniqueWithoutHouseInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutHouseInput | RoomUpdateManyWithWhereWithoutHouseInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type ContractUpdateManyWithoutHouseNestedInput = {
    create?: XOR<ContractCreateWithoutHouseInput, ContractUncheckedCreateWithoutHouseInput> | ContractCreateWithoutHouseInput[] | ContractUncheckedCreateWithoutHouseInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutHouseInput | ContractCreateOrConnectWithoutHouseInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutHouseInput | ContractUpsertWithWhereUniqueWithoutHouseInput[]
    createMany?: ContractCreateManyHouseInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutHouseInput | ContractUpdateWithWhereUniqueWithoutHouseInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutHouseInput | ContractUpdateManyWithWhereWithoutHouseInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type HouseImageUncheckedUpdateManyWithoutHouseNestedInput = {
    create?: XOR<HouseImageCreateWithoutHouseInput, HouseImageUncheckedCreateWithoutHouseInput> | HouseImageCreateWithoutHouseInput[] | HouseImageUncheckedCreateWithoutHouseInput[]
    connectOrCreate?: HouseImageCreateOrConnectWithoutHouseInput | HouseImageCreateOrConnectWithoutHouseInput[]
    upsert?: HouseImageUpsertWithWhereUniqueWithoutHouseInput | HouseImageUpsertWithWhereUniqueWithoutHouseInput[]
    createMany?: HouseImageCreateManyHouseInputEnvelope
    set?: HouseImageWhereUniqueInput | HouseImageWhereUniqueInput[]
    disconnect?: HouseImageWhereUniqueInput | HouseImageWhereUniqueInput[]
    delete?: HouseImageWhereUniqueInput | HouseImageWhereUniqueInput[]
    connect?: HouseImageWhereUniqueInput | HouseImageWhereUniqueInput[]
    update?: HouseImageUpdateWithWhereUniqueWithoutHouseInput | HouseImageUpdateWithWhereUniqueWithoutHouseInput[]
    updateMany?: HouseImageUpdateManyWithWhereWithoutHouseInput | HouseImageUpdateManyWithWhereWithoutHouseInput[]
    deleteMany?: HouseImageScalarWhereInput | HouseImageScalarWhereInput[]
  }

  export type RoomUncheckedUpdateManyWithoutHouseNestedInput = {
    create?: XOR<RoomCreateWithoutHouseInput, RoomUncheckedCreateWithoutHouseInput> | RoomCreateWithoutHouseInput[] | RoomUncheckedCreateWithoutHouseInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutHouseInput | RoomCreateOrConnectWithoutHouseInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutHouseInput | RoomUpsertWithWhereUniqueWithoutHouseInput[]
    createMany?: RoomCreateManyHouseInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutHouseInput | RoomUpdateWithWhereUniqueWithoutHouseInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutHouseInput | RoomUpdateManyWithWhereWithoutHouseInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type ContractUncheckedUpdateManyWithoutHouseNestedInput = {
    create?: XOR<ContractCreateWithoutHouseInput, ContractUncheckedCreateWithoutHouseInput> | ContractCreateWithoutHouseInput[] | ContractUncheckedCreateWithoutHouseInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutHouseInput | ContractCreateOrConnectWithoutHouseInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutHouseInput | ContractUpsertWithWhereUniqueWithoutHouseInput[]
    createMany?: ContractCreateManyHouseInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutHouseInput | ContractUpdateWithWhereUniqueWithoutHouseInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutHouseInput | ContractUpdateManyWithWhereWithoutHouseInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type HouseCreateNestedOneWithoutRoomsInput = {
    create?: XOR<HouseCreateWithoutRoomsInput, HouseUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: HouseCreateOrConnectWithoutRoomsInput
    connect?: HouseWhereUniqueInput
  }

  export type RoomImageCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomImageCreateWithoutRoomInput, RoomImageUncheckedCreateWithoutRoomInput> | RoomImageCreateWithoutRoomInput[] | RoomImageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomImageCreateOrConnectWithoutRoomInput | RoomImageCreateOrConnectWithoutRoomInput[]
    createMany?: RoomImageCreateManyRoomInputEnvelope
    connect?: RoomImageWhereUniqueInput | RoomImageWhereUniqueInput[]
  }

  export type ContractCreateNestedManyWithoutRoomInput = {
    create?: XOR<ContractCreateWithoutRoomInput, ContractUncheckedCreateWithoutRoomInput> | ContractCreateWithoutRoomInput[] | ContractUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutRoomInput | ContractCreateOrConnectWithoutRoomInput[]
    createMany?: ContractCreateManyRoomInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type TenantCreateNestedOneWithoutRoomsInput = {
    create?: XOR<TenantCreateWithoutRoomsInput, TenantUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutRoomsInput
    connect?: TenantWhereUniqueInput
  }

  export type RoomImageUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomImageCreateWithoutRoomInput, RoomImageUncheckedCreateWithoutRoomInput> | RoomImageCreateWithoutRoomInput[] | RoomImageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomImageCreateOrConnectWithoutRoomInput | RoomImageCreateOrConnectWithoutRoomInput[]
    createMany?: RoomImageCreateManyRoomInputEnvelope
    connect?: RoomImageWhereUniqueInput | RoomImageWhereUniqueInput[]
  }

  export type ContractUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<ContractCreateWithoutRoomInput, ContractUncheckedCreateWithoutRoomInput> | ContractCreateWithoutRoomInput[] | ContractUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutRoomInput | ContractCreateOrConnectWithoutRoomInput[]
    createMany?: ContractCreateManyRoomInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type HouseUpdateOneRequiredWithoutRoomsNestedInput = {
    create?: XOR<HouseCreateWithoutRoomsInput, HouseUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: HouseCreateOrConnectWithoutRoomsInput
    upsert?: HouseUpsertWithoutRoomsInput
    connect?: HouseWhereUniqueInput
    update?: XOR<XOR<HouseUpdateToOneWithWhereWithoutRoomsInput, HouseUpdateWithoutRoomsInput>, HouseUncheckedUpdateWithoutRoomsInput>
  }

  export type RoomImageUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomImageCreateWithoutRoomInput, RoomImageUncheckedCreateWithoutRoomInput> | RoomImageCreateWithoutRoomInput[] | RoomImageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomImageCreateOrConnectWithoutRoomInput | RoomImageCreateOrConnectWithoutRoomInput[]
    upsert?: RoomImageUpsertWithWhereUniqueWithoutRoomInput | RoomImageUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomImageCreateManyRoomInputEnvelope
    set?: RoomImageWhereUniqueInput | RoomImageWhereUniqueInput[]
    disconnect?: RoomImageWhereUniqueInput | RoomImageWhereUniqueInput[]
    delete?: RoomImageWhereUniqueInput | RoomImageWhereUniqueInput[]
    connect?: RoomImageWhereUniqueInput | RoomImageWhereUniqueInput[]
    update?: RoomImageUpdateWithWhereUniqueWithoutRoomInput | RoomImageUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomImageUpdateManyWithWhereWithoutRoomInput | RoomImageUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomImageScalarWhereInput | RoomImageScalarWhereInput[]
  }

  export type ContractUpdateManyWithoutRoomNestedInput = {
    create?: XOR<ContractCreateWithoutRoomInput, ContractUncheckedCreateWithoutRoomInput> | ContractCreateWithoutRoomInput[] | ContractUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutRoomInput | ContractCreateOrConnectWithoutRoomInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutRoomInput | ContractUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: ContractCreateManyRoomInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutRoomInput | ContractUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutRoomInput | ContractUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type TenantUpdateOneRequiredWithoutRoomsNestedInput = {
    create?: XOR<TenantCreateWithoutRoomsInput, TenantUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutRoomsInput
    upsert?: TenantUpsertWithoutRoomsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutRoomsInput, TenantUpdateWithoutRoomsInput>, TenantUncheckedUpdateWithoutRoomsInput>
  }

  export type RoomImageUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomImageCreateWithoutRoomInput, RoomImageUncheckedCreateWithoutRoomInput> | RoomImageCreateWithoutRoomInput[] | RoomImageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomImageCreateOrConnectWithoutRoomInput | RoomImageCreateOrConnectWithoutRoomInput[]
    upsert?: RoomImageUpsertWithWhereUniqueWithoutRoomInput | RoomImageUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomImageCreateManyRoomInputEnvelope
    set?: RoomImageWhereUniqueInput | RoomImageWhereUniqueInput[]
    disconnect?: RoomImageWhereUniqueInput | RoomImageWhereUniqueInput[]
    delete?: RoomImageWhereUniqueInput | RoomImageWhereUniqueInput[]
    connect?: RoomImageWhereUniqueInput | RoomImageWhereUniqueInput[]
    update?: RoomImageUpdateWithWhereUniqueWithoutRoomInput | RoomImageUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomImageUpdateManyWithWhereWithoutRoomInput | RoomImageUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomImageScalarWhereInput | RoomImageScalarWhereInput[]
  }

  export type ContractUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<ContractCreateWithoutRoomInput, ContractUncheckedCreateWithoutRoomInput> | ContractCreateWithoutRoomInput[] | ContractUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutRoomInput | ContractCreateOrConnectWithoutRoomInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutRoomInput | ContractUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: ContractCreateManyRoomInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutRoomInput | ContractUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutRoomInput | ContractUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type HouseCreateNestedOneWithoutImagesInput = {
    create?: XOR<HouseCreateWithoutImagesInput, HouseUncheckedCreateWithoutImagesInput>
    connectOrCreate?: HouseCreateOrConnectWithoutImagesInput
    connect?: HouseWhereUniqueInput
  }

  export type HouseUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<HouseCreateWithoutImagesInput, HouseUncheckedCreateWithoutImagesInput>
    connectOrCreate?: HouseCreateOrConnectWithoutImagesInput
    upsert?: HouseUpsertWithoutImagesInput
    connect?: HouseWhereUniqueInput
    update?: XOR<XOR<HouseUpdateToOneWithWhereWithoutImagesInput, HouseUpdateWithoutImagesInput>, HouseUncheckedUpdateWithoutImagesInput>
  }

  export type RoomCreateNestedOneWithoutImagesInput = {
    create?: XOR<RoomCreateWithoutImagesInput, RoomUncheckedCreateWithoutImagesInput>
    connectOrCreate?: RoomCreateOrConnectWithoutImagesInput
    connect?: RoomWhereUniqueInput
  }

  export type RoomUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<RoomCreateWithoutImagesInput, RoomUncheckedCreateWithoutImagesInput>
    connectOrCreate?: RoomCreateOrConnectWithoutImagesInput
    upsert?: RoomUpsertWithoutImagesInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutImagesInput, RoomUpdateWithoutImagesInput>, RoomUncheckedUpdateWithoutImagesInput>
  }

  export type HouseCreateNestedOneWithoutContractsInput = {
    create?: XOR<HouseCreateWithoutContractsInput, HouseUncheckedCreateWithoutContractsInput>
    connectOrCreate?: HouseCreateOrConnectWithoutContractsInput
    connect?: HouseWhereUniqueInput
  }

  export type RoomCreateNestedOneWithoutContractsInput = {
    create?: XOR<RoomCreateWithoutContractsInput, RoomUncheckedCreateWithoutContractsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutContractsInput
    connect?: RoomWhereUniqueInput
  }

  export type TenantCreateNestedOneWithoutContractsInput = {
    create?: XOR<TenantCreateWithoutContractsInput, TenantUncheckedCreateWithoutContractsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutContractsInput
    connect?: TenantWhereUniqueInput
  }

  export type ContractDocumentCreateNestedManyWithoutContractInput = {
    create?: XOR<ContractDocumentCreateWithoutContractInput, ContractDocumentUncheckedCreateWithoutContractInput> | ContractDocumentCreateWithoutContractInput[] | ContractDocumentUncheckedCreateWithoutContractInput[]
    connectOrCreate?: ContractDocumentCreateOrConnectWithoutContractInput | ContractDocumentCreateOrConnectWithoutContractInput[]
    createMany?: ContractDocumentCreateManyContractInputEnvelope
    connect?: ContractDocumentWhereUniqueInput | ContractDocumentWhereUniqueInput[]
  }

  export type ContractDocumentUncheckedCreateNestedManyWithoutContractInput = {
    create?: XOR<ContractDocumentCreateWithoutContractInput, ContractDocumentUncheckedCreateWithoutContractInput> | ContractDocumentCreateWithoutContractInput[] | ContractDocumentUncheckedCreateWithoutContractInput[]
    connectOrCreate?: ContractDocumentCreateOrConnectWithoutContractInput | ContractDocumentCreateOrConnectWithoutContractInput[]
    createMany?: ContractDocumentCreateManyContractInputEnvelope
    connect?: ContractDocumentWhereUniqueInput | ContractDocumentWhereUniqueInput[]
  }

  export type EnumContractStatusFieldUpdateOperationsInput = {
    set?: $Enums.ContractStatus
  }

  export type HouseUpdateOneWithoutContractsNestedInput = {
    create?: XOR<HouseCreateWithoutContractsInput, HouseUncheckedCreateWithoutContractsInput>
    connectOrCreate?: HouseCreateOrConnectWithoutContractsInput
    upsert?: HouseUpsertWithoutContractsInput
    disconnect?: HouseWhereInput | boolean
    delete?: HouseWhereInput | boolean
    connect?: HouseWhereUniqueInput
    update?: XOR<XOR<HouseUpdateToOneWithWhereWithoutContractsInput, HouseUpdateWithoutContractsInput>, HouseUncheckedUpdateWithoutContractsInput>
  }

  export type RoomUpdateOneWithoutContractsNestedInput = {
    create?: XOR<RoomCreateWithoutContractsInput, RoomUncheckedCreateWithoutContractsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutContractsInput
    upsert?: RoomUpsertWithoutContractsInput
    disconnect?: RoomWhereInput | boolean
    delete?: RoomWhereInput | boolean
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutContractsInput, RoomUpdateWithoutContractsInput>, RoomUncheckedUpdateWithoutContractsInput>
  }

  export type TenantUpdateOneRequiredWithoutContractsNestedInput = {
    create?: XOR<TenantCreateWithoutContractsInput, TenantUncheckedCreateWithoutContractsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutContractsInput
    upsert?: TenantUpsertWithoutContractsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutContractsInput, TenantUpdateWithoutContractsInput>, TenantUncheckedUpdateWithoutContractsInput>
  }

  export type ContractDocumentUpdateManyWithoutContractNestedInput = {
    create?: XOR<ContractDocumentCreateWithoutContractInput, ContractDocumentUncheckedCreateWithoutContractInput> | ContractDocumentCreateWithoutContractInput[] | ContractDocumentUncheckedCreateWithoutContractInput[]
    connectOrCreate?: ContractDocumentCreateOrConnectWithoutContractInput | ContractDocumentCreateOrConnectWithoutContractInput[]
    upsert?: ContractDocumentUpsertWithWhereUniqueWithoutContractInput | ContractDocumentUpsertWithWhereUniqueWithoutContractInput[]
    createMany?: ContractDocumentCreateManyContractInputEnvelope
    set?: ContractDocumentWhereUniqueInput | ContractDocumentWhereUniqueInput[]
    disconnect?: ContractDocumentWhereUniqueInput | ContractDocumentWhereUniqueInput[]
    delete?: ContractDocumentWhereUniqueInput | ContractDocumentWhereUniqueInput[]
    connect?: ContractDocumentWhereUniqueInput | ContractDocumentWhereUniqueInput[]
    update?: ContractDocumentUpdateWithWhereUniqueWithoutContractInput | ContractDocumentUpdateWithWhereUniqueWithoutContractInput[]
    updateMany?: ContractDocumentUpdateManyWithWhereWithoutContractInput | ContractDocumentUpdateManyWithWhereWithoutContractInput[]
    deleteMany?: ContractDocumentScalarWhereInput | ContractDocumentScalarWhereInput[]
  }

  export type ContractDocumentUncheckedUpdateManyWithoutContractNestedInput = {
    create?: XOR<ContractDocumentCreateWithoutContractInput, ContractDocumentUncheckedCreateWithoutContractInput> | ContractDocumentCreateWithoutContractInput[] | ContractDocumentUncheckedCreateWithoutContractInput[]
    connectOrCreate?: ContractDocumentCreateOrConnectWithoutContractInput | ContractDocumentCreateOrConnectWithoutContractInput[]
    upsert?: ContractDocumentUpsertWithWhereUniqueWithoutContractInput | ContractDocumentUpsertWithWhereUniqueWithoutContractInput[]
    createMany?: ContractDocumentCreateManyContractInputEnvelope
    set?: ContractDocumentWhereUniqueInput | ContractDocumentWhereUniqueInput[]
    disconnect?: ContractDocumentWhereUniqueInput | ContractDocumentWhereUniqueInput[]
    delete?: ContractDocumentWhereUniqueInput | ContractDocumentWhereUniqueInput[]
    connect?: ContractDocumentWhereUniqueInput | ContractDocumentWhereUniqueInput[]
    update?: ContractDocumentUpdateWithWhereUniqueWithoutContractInput | ContractDocumentUpdateWithWhereUniqueWithoutContractInput[]
    updateMany?: ContractDocumentUpdateManyWithWhereWithoutContractInput | ContractDocumentUpdateManyWithWhereWithoutContractInput[]
    deleteMany?: ContractDocumentScalarWhereInput | ContractDocumentScalarWhereInput[]
  }

  export type ContractCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<ContractCreateWithoutDocumentsInput, ContractUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: ContractCreateOrConnectWithoutDocumentsInput
    connect?: ContractWhereUniqueInput
  }

  export type ContractUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<ContractCreateWithoutDocumentsInput, ContractUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: ContractCreateOrConnectWithoutDocumentsInput
    upsert?: ContractUpsertWithoutDocumentsInput
    connect?: ContractWhereUniqueInput
    update?: XOR<XOR<ContractUpdateToOneWithWhereWithoutDocumentsInput, ContractUpdateWithoutDocumentsInput>, ContractUncheckedUpdateWithoutDocumentsInput>
  }

  export type EnumEnumTypeFieldUpdateOperationsInput = {
    set?: $Enums.EnumType
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumHouseTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.HouseType | EnumHouseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HouseType[]
    notIn?: $Enums.HouseType[]
    not?: NestedEnumHouseTypeFilter<$PrismaModel> | $Enums.HouseType
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumPriceUnitFilter<$PrismaModel = never> = {
    equals?: $Enums.PriceUnit | EnumPriceUnitFieldRefInput<$PrismaModel>
    in?: $Enums.PriceUnit[]
    notIn?: $Enums.PriceUnit[]
    not?: NestedEnumPriceUnitFilter<$PrismaModel> | $Enums.PriceUnit
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumAreaUnitFilter<$PrismaModel = never> = {
    equals?: $Enums.AreaUnit | EnumAreaUnitFieldRefInput<$PrismaModel>
    in?: $Enums.AreaUnit[]
    notIn?: $Enums.AreaUnit[]
    not?: NestedEnumAreaUnitFilter<$PrismaModel> | $Enums.AreaUnit
  }

  export type NestedEnumDirectionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Direction | EnumDirectionFieldRefInput<$PrismaModel> | null
    in?: $Enums.Direction[] | null
    notIn?: $Enums.Direction[] | null
    not?: NestedEnumDirectionNullableFilter<$PrismaModel> | $Enums.Direction | null
  }

  export type NestedEnumHouseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.HouseStatus | EnumHouseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.HouseStatus[]
    notIn?: $Enums.HouseStatus[]
    not?: NestedEnumHouseStatusFilter<$PrismaModel> | $Enums.HouseStatus
  }

  export type NestedEnumHouseTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HouseType | EnumHouseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HouseType[]
    notIn?: $Enums.HouseType[]
    not?: NestedEnumHouseTypeWithAggregatesFilter<$PrismaModel> | $Enums.HouseType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHouseTypeFilter<$PrismaModel>
    _max?: NestedEnumHouseTypeFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumPriceUnitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PriceUnit | EnumPriceUnitFieldRefInput<$PrismaModel>
    in?: $Enums.PriceUnit[]
    notIn?: $Enums.PriceUnit[]
    not?: NestedEnumPriceUnitWithAggregatesFilter<$PrismaModel> | $Enums.PriceUnit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriceUnitFilter<$PrismaModel>
    _max?: NestedEnumPriceUnitFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumAreaUnitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AreaUnit | EnumAreaUnitFieldRefInput<$PrismaModel>
    in?: $Enums.AreaUnit[]
    notIn?: $Enums.AreaUnit[]
    not?: NestedEnumAreaUnitWithAggregatesFilter<$PrismaModel> | $Enums.AreaUnit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAreaUnitFilter<$PrismaModel>
    _max?: NestedEnumAreaUnitFilter<$PrismaModel>
  }

  export type NestedEnumDirectionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Direction | EnumDirectionFieldRefInput<$PrismaModel> | null
    in?: $Enums.Direction[] | null
    notIn?: $Enums.Direction[] | null
    not?: NestedEnumDirectionNullableWithAggregatesFilter<$PrismaModel> | $Enums.Direction | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDirectionNullableFilter<$PrismaModel>
    _max?: NestedEnumDirectionNullableFilter<$PrismaModel>
  }

  export type NestedEnumHouseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HouseStatus | EnumHouseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.HouseStatus[]
    notIn?: $Enums.HouseStatus[]
    not?: NestedEnumHouseStatusWithAggregatesFilter<$PrismaModel> | $Enums.HouseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHouseStatusFilter<$PrismaModel>
    _max?: NestedEnumHouseStatusFilter<$PrismaModel>
  }

  export type NestedEnumContractStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractStatus | EnumContractStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ContractStatus[]
    notIn?: $Enums.ContractStatus[]
    not?: NestedEnumContractStatusFilter<$PrismaModel> | $Enums.ContractStatus
  }

  export type NestedEnumContractStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractStatus | EnumContractStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ContractStatus[]
    notIn?: $Enums.ContractStatus[]
    not?: NestedEnumContractStatusWithAggregatesFilter<$PrismaModel> | $Enums.ContractStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContractStatusFilter<$PrismaModel>
    _max?: NestedEnumContractStatusFilter<$PrismaModel>
  }

  export type NestedEnumEnumTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EnumType | EnumEnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EnumType[]
    notIn?: $Enums.EnumType[]
    not?: NestedEnumEnumTypeFilter<$PrismaModel> | $Enums.EnumType
  }

  export type NestedEnumEnumTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EnumType | EnumEnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EnumType[]
    notIn?: $Enums.EnumType[]
    not?: NestedEnumEnumTypeWithAggregatesFilter<$PrismaModel> | $Enums.EnumType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEnumTypeFilter<$PrismaModel>
    _max?: NestedEnumEnumTypeFilter<$PrismaModel>
  }

  export type RoleCreateWithoutUsersInput = {
    name: string
    desc?: string | null
    createTime?: Date | string
    permissions?: NullableJsonNullValueInput | InputJsonValue
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    desc?: string | null
    createTime?: Date | string
    permissions?: NullableJsonNullValueInput | InputJsonValue
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type DepartmentCreateWithoutUsersInput = {
    name: string
    desc?: string | null
    createdAt?: Date | string
    parent?: DepartmentCreateNestedOneWithoutChildrenInput
    children?: DepartmentCreateNestedManyWithoutParentInput
  }

  export type DepartmentUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    desc?: string | null
    parentId?: number | null
    createdAt?: Date | string
    children?: DepartmentUncheckedCreateNestedManyWithoutParentInput
  }

  export type DepartmentCreateOrConnectWithoutUsersInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutUsersInput, DepartmentUncheckedCreateWithoutUsersInput>
  }

  export type RoleUpsertWithWhereUniqueWithoutUsersInput = {
    where: RoleWhereUniqueInput
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type RoleUpdateWithWhereUniqueWithoutUsersInput = {
    where: RoleWhereUniqueInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateManyWithWhereWithoutUsersInput = {
    where: RoleScalarWhereInput
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyWithoutUsersInput>
  }

  export type RoleScalarWhereInput = {
    AND?: RoleScalarWhereInput | RoleScalarWhereInput[]
    OR?: RoleScalarWhereInput[]
    NOT?: RoleScalarWhereInput | RoleScalarWhereInput[]
    id?: IntFilter<"Role"> | number
    name?: StringFilter<"Role"> | string
    desc?: StringNullableFilter<"Role"> | string | null
    createTime?: DateTimeFilter<"Role"> | Date | string
    permissions?: JsonNullableFilter<"Role">
  }

  export type DepartmentUpsertWithoutUsersInput = {
    update: XOR<DepartmentUpdateWithoutUsersInput, DepartmentUncheckedUpdateWithoutUsersInput>
    create: XOR<DepartmentCreateWithoutUsersInput, DepartmentUncheckedCreateWithoutUsersInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutUsersInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutUsersInput, DepartmentUncheckedUpdateWithoutUsersInput>
  }

  export type DepartmentUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: DepartmentUpdateOneWithoutChildrenNestedInput
    children?: DepartmentUpdateManyWithoutParentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: DepartmentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type UserCreateWithoutDepartmentInput = {
    username: string
    password?: string
    name?: string | null
    pinyin?: string | null
    email?: string | null
    gender?: number | null
    avatar?: string | null
    birthDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    isVerified?: boolean
    isActive?: boolean
    roles?: RoleCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutDepartmentInput = {
    id?: number
    username: string
    password?: string
    name?: string | null
    pinyin?: string | null
    email?: string | null
    gender?: number | null
    avatar?: string | null
    birthDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    isVerified?: boolean
    isActive?: boolean
    roles?: RoleUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserCreateOrConnectWithoutDepartmentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput>
  }

  export type UserCreateManyDepartmentInputEnvelope = {
    data: UserCreateManyDepartmentInput | UserCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type DepartmentCreateWithoutChildrenInput = {
    name: string
    desc?: string | null
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutDepartmentInput
    parent?: DepartmentCreateNestedOneWithoutChildrenInput
  }

  export type DepartmentUncheckedCreateWithoutChildrenInput = {
    id?: number
    name: string
    desc?: string | null
    parentId?: number | null
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutChildrenInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutChildrenInput, DepartmentUncheckedCreateWithoutChildrenInput>
  }

  export type DepartmentCreateWithoutParentInput = {
    name: string
    desc?: string | null
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutDepartmentInput
    children?: DepartmentCreateNestedManyWithoutParentInput
  }

  export type DepartmentUncheckedCreateWithoutParentInput = {
    id?: number
    name: string
    desc?: string | null
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutDepartmentInput
    children?: DepartmentUncheckedCreateNestedManyWithoutParentInput
  }

  export type DepartmentCreateOrConnectWithoutParentInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutParentInput, DepartmentUncheckedCreateWithoutParentInput>
  }

  export type DepartmentCreateManyParentInputEnvelope = {
    data: DepartmentCreateManyParentInput | DepartmentCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutDepartmentInput, UserUncheckedUpdateWithoutDepartmentInput>
    create: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput>
  }

  export type UserUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutDepartmentInput, UserUncheckedUpdateWithoutDepartmentInput>
  }

  export type UserUpdateManyWithWhereWithoutDepartmentInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    pinyin?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    gender?: IntNullableFilter<"User"> | number | null
    avatar?: StringNullableFilter<"User"> | string | null
    birthDate?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    isVerified?: BoolFilter<"User"> | boolean
    isActive?: BoolFilter<"User"> | boolean
    departmentId?: IntNullableFilter<"User"> | number | null
  }

  export type DepartmentUpsertWithoutChildrenInput = {
    update: XOR<DepartmentUpdateWithoutChildrenInput, DepartmentUncheckedUpdateWithoutChildrenInput>
    create: XOR<DepartmentCreateWithoutChildrenInput, DepartmentUncheckedCreateWithoutChildrenInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutChildrenInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutChildrenInput, DepartmentUncheckedUpdateWithoutChildrenInput>
  }

  export type DepartmentUpdateWithoutChildrenInput = {
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutDepartmentNestedInput
    parent?: DepartmentUpdateOneWithoutChildrenNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutChildrenInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUpsertWithWhereUniqueWithoutParentInput = {
    where: DepartmentWhereUniqueInput
    update: XOR<DepartmentUpdateWithoutParentInput, DepartmentUncheckedUpdateWithoutParentInput>
    create: XOR<DepartmentCreateWithoutParentInput, DepartmentUncheckedCreateWithoutParentInput>
  }

  export type DepartmentUpdateWithWhereUniqueWithoutParentInput = {
    where: DepartmentWhereUniqueInput
    data: XOR<DepartmentUpdateWithoutParentInput, DepartmentUncheckedUpdateWithoutParentInput>
  }

  export type DepartmentUpdateManyWithWhereWithoutParentInput = {
    where: DepartmentScalarWhereInput
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyWithoutParentInput>
  }

  export type DepartmentScalarWhereInput = {
    AND?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
    OR?: DepartmentScalarWhereInput[]
    NOT?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
    id?: IntFilter<"Department"> | number
    name?: StringFilter<"Department"> | string
    desc?: StringNullableFilter<"Department"> | string | null
    parentId?: IntNullableFilter<"Department"> | number | null
    createdAt?: DateTimeFilter<"Department"> | Date | string
  }

  export type UserCreateWithoutRolesInput = {
    username: string
    password?: string
    name?: string | null
    pinyin?: string | null
    email?: string | null
    gender?: number | null
    avatar?: string | null
    birthDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    isVerified?: boolean
    isActive?: boolean
    Department?: DepartmentCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutRolesInput = {
    id?: number
    username: string
    password?: string
    name?: string | null
    pinyin?: string | null
    email?: string | null
    gender?: number | null
    avatar?: string | null
    birthDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    isVerified?: boolean
    isActive?: boolean
    departmentId?: number | null
  }

  export type UserCreateOrConnectWithoutRolesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
  }

  export type UserUpsertWithWhereUniqueWithoutRolesInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRolesInput, UserUncheckedUpdateWithoutRolesInput>
    create: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRolesInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRolesInput, UserUncheckedUpdateWithoutRolesInput>
  }

  export type UserUpdateManyWithWhereWithoutRolesInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRolesInput>
  }

  export type CardCreateWithoutBoardInput = {
    title: string
    createTime?: Date | string
    type?: string
    value: string
    x: number
    y: number
    w: number
    h: number
    i: string
    config?: NullableJsonNullValueInput | InputJsonValue
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type CardUncheckedCreateWithoutBoardInput = {
    id?: number
    title: string
    createTime?: Date | string
    type?: string
    value: string
    x: number
    y: number
    w: number
    h: number
    i: string
    config?: NullableJsonNullValueInput | InputJsonValue
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type CardCreateOrConnectWithoutBoardInput = {
    where: CardWhereUniqueInput
    create: XOR<CardCreateWithoutBoardInput, CardUncheckedCreateWithoutBoardInput>
  }

  export type CardCreateManyBoardInputEnvelope = {
    data: CardCreateManyBoardInput | CardCreateManyBoardInput[]
    skipDuplicates?: boolean
  }

  export type CardUpsertWithWhereUniqueWithoutBoardInput = {
    where: CardWhereUniqueInput
    update: XOR<CardUpdateWithoutBoardInput, CardUncheckedUpdateWithoutBoardInput>
    create: XOR<CardCreateWithoutBoardInput, CardUncheckedCreateWithoutBoardInput>
  }

  export type CardUpdateWithWhereUniqueWithoutBoardInput = {
    where: CardWhereUniqueInput
    data: XOR<CardUpdateWithoutBoardInput, CardUncheckedUpdateWithoutBoardInput>
  }

  export type CardUpdateManyWithWhereWithoutBoardInput = {
    where: CardScalarWhereInput
    data: XOR<CardUpdateManyMutationInput, CardUncheckedUpdateManyWithoutBoardInput>
  }

  export type CardScalarWhereInput = {
    AND?: CardScalarWhereInput | CardScalarWhereInput[]
    OR?: CardScalarWhereInput[]
    NOT?: CardScalarWhereInput | CardScalarWhereInput[]
    id?: IntFilter<"Card"> | number
    title?: StringFilter<"Card"> | string
    createTime?: DateTimeFilter<"Card"> | Date | string
    type?: StringFilter<"Card"> | string
    value?: StringFilter<"Card"> | string
    x?: IntFilter<"Card"> | number
    y?: IntFilter<"Card"> | number
    w?: IntFilter<"Card"> | number
    h?: IntFilter<"Card"> | number
    i?: StringFilter<"Card"> | string
    config?: JsonNullableFilter<"Card">
    data?: JsonNullableFilter<"Card">
    boardId?: IntNullableFilter<"Card"> | number | null
  }

  export type BoardCreateWithoutCardsInput = {
    title: string
    desc?: string | null
    createTime?: Date | string
    creator?: string | null
    indicatorCount?: number | null
  }

  export type BoardUncheckedCreateWithoutCardsInput = {
    id?: number
    title: string
    desc?: string | null
    createTime?: Date | string
    creator?: string | null
    indicatorCount?: number | null
  }

  export type BoardCreateOrConnectWithoutCardsInput = {
    where: BoardWhereUniqueInput
    create: XOR<BoardCreateWithoutCardsInput, BoardUncheckedCreateWithoutCardsInput>
  }

  export type BoardUpsertWithoutCardsInput = {
    update: XOR<BoardUpdateWithoutCardsInput, BoardUncheckedUpdateWithoutCardsInput>
    create: XOR<BoardCreateWithoutCardsInput, BoardUncheckedCreateWithoutCardsInput>
    where?: BoardWhereInput
  }

  export type BoardUpdateToOneWithWhereWithoutCardsInput = {
    where?: BoardWhereInput
    data: XOR<BoardUpdateWithoutCardsInput, BoardUncheckedUpdateWithoutCardsInput>
  }

  export type BoardUpdateWithoutCardsInput = {
    title?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: NullableStringFieldUpdateOperationsInput | string | null
    indicatorCount?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BoardUncheckedUpdateWithoutCardsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: NullableStringFieldUpdateOperationsInput | string | null
    indicatorCount?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type HouseCreateWithoutTenantInput = {
    title: string
    description?: string | null
    type?: $Enums.HouseType
    isWholeRent?: boolean
    price: Decimal | DecimalJsLike | number | string
    priceUnit?: $Enums.PriceUnit
    deposit?: Decimal | DecimalJsLike | number | string | null
    area?: Decimal | DecimalJsLike | number | string | null
    areaUnit?: $Enums.AreaUnit
    address: string
    city?: string | null
    district?: string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    bedrooms?: number
    livingRooms?: number
    kitchens?: number
    bathrooms?: number
    washingCount?: number
    floor?: number | null
    totalFloors?: number | null
    builtYear?: number | null
    orientation?: $Enums.Direction | null
    status?: $Enums.HouseStatus
    featured?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    images?: HouseImageCreateNestedManyWithoutHouseInput
    rooms?: RoomCreateNestedManyWithoutHouseInput
    contracts?: ContractCreateNestedManyWithoutHouseInput
  }

  export type HouseUncheckedCreateWithoutTenantInput = {
    id?: number
    title: string
    description?: string | null
    type?: $Enums.HouseType
    isWholeRent?: boolean
    price: Decimal | DecimalJsLike | number | string
    priceUnit?: $Enums.PriceUnit
    deposit?: Decimal | DecimalJsLike | number | string | null
    area?: Decimal | DecimalJsLike | number | string | null
    areaUnit?: $Enums.AreaUnit
    address: string
    city?: string | null
    district?: string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    bedrooms?: number
    livingRooms?: number
    kitchens?: number
    bathrooms?: number
    washingCount?: number
    floor?: number | null
    totalFloors?: number | null
    builtYear?: number | null
    orientation?: $Enums.Direction | null
    status?: $Enums.HouseStatus
    featured?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    images?: HouseImageUncheckedCreateNestedManyWithoutHouseInput
    rooms?: RoomUncheckedCreateNestedManyWithoutHouseInput
    contracts?: ContractUncheckedCreateNestedManyWithoutHouseInput
  }

  export type HouseCreateOrConnectWithoutTenantInput = {
    where: HouseWhereUniqueInput
    create: XOR<HouseCreateWithoutTenantInput, HouseUncheckedCreateWithoutTenantInput>
  }

  export type HouseCreateManyTenantInputEnvelope = {
    data: HouseCreateManyTenantInput | HouseCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type RoomCreateWithoutTenantInput = {
    title: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    priceUnit?: $Enums.PriceUnit
    deposit?: Decimal | DecimalJsLike | number | string | null
    area: Decimal | DecimalJsLike | number | string
    areaUnit?: $Enums.AreaUnit
    orientation?: $Enums.Direction | null
    status?: $Enums.HouseStatus
    featured?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    house: HouseCreateNestedOneWithoutRoomsInput
    images?: RoomImageCreateNestedManyWithoutRoomInput
    contracts?: ContractCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutTenantInput = {
    id?: number
    title: string
    description?: string | null
    houseId: number
    price: Decimal | DecimalJsLike | number | string
    priceUnit?: $Enums.PriceUnit
    deposit?: Decimal | DecimalJsLike | number | string | null
    area: Decimal | DecimalJsLike | number | string
    areaUnit?: $Enums.AreaUnit
    orientation?: $Enums.Direction | null
    status?: $Enums.HouseStatus
    featured?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    images?: RoomImageUncheckedCreateNestedManyWithoutRoomInput
    contracts?: ContractUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutTenantInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutTenantInput, RoomUncheckedCreateWithoutTenantInput>
  }

  export type RoomCreateManyTenantInputEnvelope = {
    data: RoomCreateManyTenantInput | RoomCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type ContractCreateWithoutTenantInput = {
    title: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    monthlyRent: Decimal | DecimalJsLike | number | string
    deposit: Decimal | DecimalJsLike | number | string
    status?: $Enums.ContractStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    house?: HouseCreateNestedOneWithoutContractsInput
    room?: RoomCreateNestedOneWithoutContractsInput
    documents?: ContractDocumentCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateWithoutTenantInput = {
    id?: number
    title: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    monthlyRent: Decimal | DecimalJsLike | number | string
    deposit: Decimal | DecimalJsLike | number | string
    status?: $Enums.ContractStatus
    houseId?: number | null
    roomId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: ContractDocumentUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractCreateOrConnectWithoutTenantInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutTenantInput, ContractUncheckedCreateWithoutTenantInput>
  }

  export type ContractCreateManyTenantInputEnvelope = {
    data: ContractCreateManyTenantInput | ContractCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type HouseUpsertWithWhereUniqueWithoutTenantInput = {
    where: HouseWhereUniqueInput
    update: XOR<HouseUpdateWithoutTenantInput, HouseUncheckedUpdateWithoutTenantInput>
    create: XOR<HouseCreateWithoutTenantInput, HouseUncheckedCreateWithoutTenantInput>
  }

  export type HouseUpdateWithWhereUniqueWithoutTenantInput = {
    where: HouseWhereUniqueInput
    data: XOR<HouseUpdateWithoutTenantInput, HouseUncheckedUpdateWithoutTenantInput>
  }

  export type HouseUpdateManyWithWhereWithoutTenantInput = {
    where: HouseScalarWhereInput
    data: XOR<HouseUpdateManyMutationInput, HouseUncheckedUpdateManyWithoutTenantInput>
  }

  export type HouseScalarWhereInput = {
    AND?: HouseScalarWhereInput | HouseScalarWhereInput[]
    OR?: HouseScalarWhereInput[]
    NOT?: HouseScalarWhereInput | HouseScalarWhereInput[]
    id?: IntFilter<"House"> | number
    title?: StringFilter<"House"> | string
    description?: StringNullableFilter<"House"> | string | null
    type?: EnumHouseTypeFilter<"House"> | $Enums.HouseType
    isWholeRent?: BoolFilter<"House"> | boolean
    price?: DecimalFilter<"House"> | Decimal | DecimalJsLike | number | string
    priceUnit?: EnumPriceUnitFilter<"House"> | $Enums.PriceUnit
    deposit?: DecimalNullableFilter<"House"> | Decimal | DecimalJsLike | number | string | null
    area?: DecimalNullableFilter<"House"> | Decimal | DecimalJsLike | number | string | null
    areaUnit?: EnumAreaUnitFilter<"House"> | $Enums.AreaUnit
    address?: StringFilter<"House"> | string
    city?: StringNullableFilter<"House"> | string | null
    district?: StringNullableFilter<"House"> | string | null
    longitude?: DecimalNullableFilter<"House"> | Decimal | DecimalJsLike | number | string | null
    latitude?: DecimalNullableFilter<"House"> | Decimal | DecimalJsLike | number | string | null
    bedrooms?: IntFilter<"House"> | number
    livingRooms?: IntFilter<"House"> | number
    kitchens?: IntFilter<"House"> | number
    bathrooms?: IntFilter<"House"> | number
    washingCount?: IntFilter<"House"> | number
    floor?: IntNullableFilter<"House"> | number | null
    totalFloors?: IntNullableFilter<"House"> | number | null
    builtYear?: IntNullableFilter<"House"> | number | null
    orientation?: EnumDirectionNullableFilter<"House"> | $Enums.Direction | null
    status?: EnumHouseStatusFilter<"House"> | $Enums.HouseStatus
    featured?: BoolFilter<"House"> | boolean
    isDeleted?: BoolFilter<"House"> | boolean
    tenantId?: IntFilter<"House"> | number
    createdAt?: DateTimeFilter<"House"> | Date | string
    updatedAt?: DateTimeFilter<"House"> | Date | string
    deletedAt?: DateTimeNullableFilter<"House"> | Date | string | null
  }

  export type RoomUpsertWithWhereUniqueWithoutTenantInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutTenantInput, RoomUncheckedUpdateWithoutTenantInput>
    create: XOR<RoomCreateWithoutTenantInput, RoomUncheckedCreateWithoutTenantInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutTenantInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutTenantInput, RoomUncheckedUpdateWithoutTenantInput>
  }

  export type RoomUpdateManyWithWhereWithoutTenantInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutTenantInput>
  }

  export type RoomScalarWhereInput = {
    AND?: RoomScalarWhereInput | RoomScalarWhereInput[]
    OR?: RoomScalarWhereInput[]
    NOT?: RoomScalarWhereInput | RoomScalarWhereInput[]
    id?: IntFilter<"Room"> | number
    title?: StringFilter<"Room"> | string
    description?: StringNullableFilter<"Room"> | string | null
    houseId?: IntFilter<"Room"> | number
    price?: DecimalFilter<"Room"> | Decimal | DecimalJsLike | number | string
    priceUnit?: EnumPriceUnitFilter<"Room"> | $Enums.PriceUnit
    deposit?: DecimalNullableFilter<"Room"> | Decimal | DecimalJsLike | number | string | null
    area?: DecimalFilter<"Room"> | Decimal | DecimalJsLike | number | string
    areaUnit?: EnumAreaUnitFilter<"Room"> | $Enums.AreaUnit
    orientation?: EnumDirectionNullableFilter<"Room"> | $Enums.Direction | null
    status?: EnumHouseStatusFilter<"Room"> | $Enums.HouseStatus
    featured?: BoolFilter<"Room"> | boolean
    isDeleted?: BoolFilter<"Room"> | boolean
    tenantId?: IntFilter<"Room"> | number
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Room"> | Date | string | null
  }

  export type ContractUpsertWithWhereUniqueWithoutTenantInput = {
    where: ContractWhereUniqueInput
    update: XOR<ContractUpdateWithoutTenantInput, ContractUncheckedUpdateWithoutTenantInput>
    create: XOR<ContractCreateWithoutTenantInput, ContractUncheckedCreateWithoutTenantInput>
  }

  export type ContractUpdateWithWhereUniqueWithoutTenantInput = {
    where: ContractWhereUniqueInput
    data: XOR<ContractUpdateWithoutTenantInput, ContractUncheckedUpdateWithoutTenantInput>
  }

  export type ContractUpdateManyWithWhereWithoutTenantInput = {
    where: ContractScalarWhereInput
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyWithoutTenantInput>
  }

  export type ContractScalarWhereInput = {
    AND?: ContractScalarWhereInput | ContractScalarWhereInput[]
    OR?: ContractScalarWhereInput[]
    NOT?: ContractScalarWhereInput | ContractScalarWhereInput[]
    id?: IntFilter<"Contract"> | number
    title?: StringFilter<"Contract"> | string
    description?: StringNullableFilter<"Contract"> | string | null
    startDate?: DateTimeFilter<"Contract"> | Date | string
    endDate?: DateTimeFilter<"Contract"> | Date | string
    monthlyRent?: DecimalFilter<"Contract"> | Decimal | DecimalJsLike | number | string
    deposit?: DecimalFilter<"Contract"> | Decimal | DecimalJsLike | number | string
    status?: EnumContractStatusFilter<"Contract"> | $Enums.ContractStatus
    houseId?: IntNullableFilter<"Contract"> | number | null
    roomId?: IntNullableFilter<"Contract"> | number | null
    tenantId?: IntFilter<"Contract"> | number
    createdAt?: DateTimeFilter<"Contract"> | Date | string
    updatedAt?: DateTimeFilter<"Contract"> | Date | string
  }

  export type TenantCreateWithoutHousesInput = {
    idCardNumber?: string | null
    username: string
    tel?: string | null
    blacklisted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomCreateNestedManyWithoutTenantInput
    contracts?: ContractCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutHousesInput = {
    id?: number
    idCardNumber?: string | null
    username: string
    tel?: string | null
    blacklisted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomUncheckedCreateNestedManyWithoutTenantInput
    contracts?: ContractUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutHousesInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutHousesInput, TenantUncheckedCreateWithoutHousesInput>
  }

  export type HouseImageCreateWithoutHouseInput = {
    url: string
    isPrimary?: boolean
    description?: string | null
    createdAt?: Date | string
  }

  export type HouseImageUncheckedCreateWithoutHouseInput = {
    id?: number
    url: string
    isPrimary?: boolean
    description?: string | null
    createdAt?: Date | string
  }

  export type HouseImageCreateOrConnectWithoutHouseInput = {
    where: HouseImageWhereUniqueInput
    create: XOR<HouseImageCreateWithoutHouseInput, HouseImageUncheckedCreateWithoutHouseInput>
  }

  export type HouseImageCreateManyHouseInputEnvelope = {
    data: HouseImageCreateManyHouseInput | HouseImageCreateManyHouseInput[]
    skipDuplicates?: boolean
  }

  export type RoomCreateWithoutHouseInput = {
    title: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    priceUnit?: $Enums.PriceUnit
    deposit?: Decimal | DecimalJsLike | number | string | null
    area: Decimal | DecimalJsLike | number | string
    areaUnit?: $Enums.AreaUnit
    orientation?: $Enums.Direction | null
    status?: $Enums.HouseStatus
    featured?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    images?: RoomImageCreateNestedManyWithoutRoomInput
    contracts?: ContractCreateNestedManyWithoutRoomInput
    tenant: TenantCreateNestedOneWithoutRoomsInput
  }

  export type RoomUncheckedCreateWithoutHouseInput = {
    id?: number
    title: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    priceUnit?: $Enums.PriceUnit
    deposit?: Decimal | DecimalJsLike | number | string | null
    area: Decimal | DecimalJsLike | number | string
    areaUnit?: $Enums.AreaUnit
    orientation?: $Enums.Direction | null
    status?: $Enums.HouseStatus
    featured?: boolean
    isDeleted?: boolean
    tenantId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    images?: RoomImageUncheckedCreateNestedManyWithoutRoomInput
    contracts?: ContractUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutHouseInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutHouseInput, RoomUncheckedCreateWithoutHouseInput>
  }

  export type RoomCreateManyHouseInputEnvelope = {
    data: RoomCreateManyHouseInput | RoomCreateManyHouseInput[]
    skipDuplicates?: boolean
  }

  export type ContractCreateWithoutHouseInput = {
    title: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    monthlyRent: Decimal | DecimalJsLike | number | string
    deposit: Decimal | DecimalJsLike | number | string
    status?: $Enums.ContractStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    room?: RoomCreateNestedOneWithoutContractsInput
    tenant: TenantCreateNestedOneWithoutContractsInput
    documents?: ContractDocumentCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateWithoutHouseInput = {
    id?: number
    title: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    monthlyRent: Decimal | DecimalJsLike | number | string
    deposit: Decimal | DecimalJsLike | number | string
    status?: $Enums.ContractStatus
    roomId?: number | null
    tenantId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: ContractDocumentUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractCreateOrConnectWithoutHouseInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutHouseInput, ContractUncheckedCreateWithoutHouseInput>
  }

  export type ContractCreateManyHouseInputEnvelope = {
    data: ContractCreateManyHouseInput | ContractCreateManyHouseInput[]
    skipDuplicates?: boolean
  }

  export type TenantUpsertWithoutHousesInput = {
    update: XOR<TenantUpdateWithoutHousesInput, TenantUncheckedUpdateWithoutHousesInput>
    create: XOR<TenantCreateWithoutHousesInput, TenantUncheckedCreateWithoutHousesInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutHousesInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutHousesInput, TenantUncheckedUpdateWithoutHousesInput>
  }

  export type TenantUpdateWithoutHousesInput = {
    idCardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUpdateManyWithoutTenantNestedInput
    contracts?: ContractUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutHousesInput = {
    id?: IntFieldUpdateOperationsInput | number
    idCardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUncheckedUpdateManyWithoutTenantNestedInput
    contracts?: ContractUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type HouseImageUpsertWithWhereUniqueWithoutHouseInput = {
    where: HouseImageWhereUniqueInput
    update: XOR<HouseImageUpdateWithoutHouseInput, HouseImageUncheckedUpdateWithoutHouseInput>
    create: XOR<HouseImageCreateWithoutHouseInput, HouseImageUncheckedCreateWithoutHouseInput>
  }

  export type HouseImageUpdateWithWhereUniqueWithoutHouseInput = {
    where: HouseImageWhereUniqueInput
    data: XOR<HouseImageUpdateWithoutHouseInput, HouseImageUncheckedUpdateWithoutHouseInput>
  }

  export type HouseImageUpdateManyWithWhereWithoutHouseInput = {
    where: HouseImageScalarWhereInput
    data: XOR<HouseImageUpdateManyMutationInput, HouseImageUncheckedUpdateManyWithoutHouseInput>
  }

  export type HouseImageScalarWhereInput = {
    AND?: HouseImageScalarWhereInput | HouseImageScalarWhereInput[]
    OR?: HouseImageScalarWhereInput[]
    NOT?: HouseImageScalarWhereInput | HouseImageScalarWhereInput[]
    id?: IntFilter<"HouseImage"> | number
    url?: StringFilter<"HouseImage"> | string
    isPrimary?: BoolFilter<"HouseImage"> | boolean
    description?: StringNullableFilter<"HouseImage"> | string | null
    houseId?: IntFilter<"HouseImage"> | number
    createdAt?: DateTimeFilter<"HouseImage"> | Date | string
  }

  export type RoomUpsertWithWhereUniqueWithoutHouseInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutHouseInput, RoomUncheckedUpdateWithoutHouseInput>
    create: XOR<RoomCreateWithoutHouseInput, RoomUncheckedCreateWithoutHouseInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutHouseInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutHouseInput, RoomUncheckedUpdateWithoutHouseInput>
  }

  export type RoomUpdateManyWithWhereWithoutHouseInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutHouseInput>
  }

  export type ContractUpsertWithWhereUniqueWithoutHouseInput = {
    where: ContractWhereUniqueInput
    update: XOR<ContractUpdateWithoutHouseInput, ContractUncheckedUpdateWithoutHouseInput>
    create: XOR<ContractCreateWithoutHouseInput, ContractUncheckedCreateWithoutHouseInput>
  }

  export type ContractUpdateWithWhereUniqueWithoutHouseInput = {
    where: ContractWhereUniqueInput
    data: XOR<ContractUpdateWithoutHouseInput, ContractUncheckedUpdateWithoutHouseInput>
  }

  export type ContractUpdateManyWithWhereWithoutHouseInput = {
    where: ContractScalarWhereInput
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyWithoutHouseInput>
  }

  export type HouseCreateWithoutRoomsInput = {
    title: string
    description?: string | null
    type?: $Enums.HouseType
    isWholeRent?: boolean
    price: Decimal | DecimalJsLike | number | string
    priceUnit?: $Enums.PriceUnit
    deposit?: Decimal | DecimalJsLike | number | string | null
    area?: Decimal | DecimalJsLike | number | string | null
    areaUnit?: $Enums.AreaUnit
    address: string
    city?: string | null
    district?: string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    bedrooms?: number
    livingRooms?: number
    kitchens?: number
    bathrooms?: number
    washingCount?: number
    floor?: number | null
    totalFloors?: number | null
    builtYear?: number | null
    orientation?: $Enums.Direction | null
    status?: $Enums.HouseStatus
    featured?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    tenant: TenantCreateNestedOneWithoutHousesInput
    images?: HouseImageCreateNestedManyWithoutHouseInput
    contracts?: ContractCreateNestedManyWithoutHouseInput
  }

  export type HouseUncheckedCreateWithoutRoomsInput = {
    id?: number
    title: string
    description?: string | null
    type?: $Enums.HouseType
    isWholeRent?: boolean
    price: Decimal | DecimalJsLike | number | string
    priceUnit?: $Enums.PriceUnit
    deposit?: Decimal | DecimalJsLike | number | string | null
    area?: Decimal | DecimalJsLike | number | string | null
    areaUnit?: $Enums.AreaUnit
    address: string
    city?: string | null
    district?: string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    bedrooms?: number
    livingRooms?: number
    kitchens?: number
    bathrooms?: number
    washingCount?: number
    floor?: number | null
    totalFloors?: number | null
    builtYear?: number | null
    orientation?: $Enums.Direction | null
    status?: $Enums.HouseStatus
    featured?: boolean
    isDeleted?: boolean
    tenantId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    images?: HouseImageUncheckedCreateNestedManyWithoutHouseInput
    contracts?: ContractUncheckedCreateNestedManyWithoutHouseInput
  }

  export type HouseCreateOrConnectWithoutRoomsInput = {
    where: HouseWhereUniqueInput
    create: XOR<HouseCreateWithoutRoomsInput, HouseUncheckedCreateWithoutRoomsInput>
  }

  export type RoomImageCreateWithoutRoomInput = {
    url: string
    isPrimary?: boolean
    description?: string | null
    createdAt?: Date | string
  }

  export type RoomImageUncheckedCreateWithoutRoomInput = {
    id?: number
    url: string
    isPrimary?: boolean
    description?: string | null
    createdAt?: Date | string
  }

  export type RoomImageCreateOrConnectWithoutRoomInput = {
    where: RoomImageWhereUniqueInput
    create: XOR<RoomImageCreateWithoutRoomInput, RoomImageUncheckedCreateWithoutRoomInput>
  }

  export type RoomImageCreateManyRoomInputEnvelope = {
    data: RoomImageCreateManyRoomInput | RoomImageCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type ContractCreateWithoutRoomInput = {
    title: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    monthlyRent: Decimal | DecimalJsLike | number | string
    deposit: Decimal | DecimalJsLike | number | string
    status?: $Enums.ContractStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    house?: HouseCreateNestedOneWithoutContractsInput
    tenant: TenantCreateNestedOneWithoutContractsInput
    documents?: ContractDocumentCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateWithoutRoomInput = {
    id?: number
    title: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    monthlyRent: Decimal | DecimalJsLike | number | string
    deposit: Decimal | DecimalJsLike | number | string
    status?: $Enums.ContractStatus
    houseId?: number | null
    tenantId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: ContractDocumentUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractCreateOrConnectWithoutRoomInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutRoomInput, ContractUncheckedCreateWithoutRoomInput>
  }

  export type ContractCreateManyRoomInputEnvelope = {
    data: ContractCreateManyRoomInput | ContractCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type TenantCreateWithoutRoomsInput = {
    idCardNumber?: string | null
    username: string
    tel?: string | null
    blacklisted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    houses?: HouseCreateNestedManyWithoutTenantInput
    contracts?: ContractCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutRoomsInput = {
    id?: number
    idCardNumber?: string | null
    username: string
    tel?: string | null
    blacklisted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    houses?: HouseUncheckedCreateNestedManyWithoutTenantInput
    contracts?: ContractUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutRoomsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutRoomsInput, TenantUncheckedCreateWithoutRoomsInput>
  }

  export type HouseUpsertWithoutRoomsInput = {
    update: XOR<HouseUpdateWithoutRoomsInput, HouseUncheckedUpdateWithoutRoomsInput>
    create: XOR<HouseCreateWithoutRoomsInput, HouseUncheckedCreateWithoutRoomsInput>
    where?: HouseWhereInput
  }

  export type HouseUpdateToOneWithWhereWithoutRoomsInput = {
    where?: HouseWhereInput
    data: XOR<HouseUpdateWithoutRoomsInput, HouseUncheckedUpdateWithoutRoomsInput>
  }

  export type HouseUpdateWithoutRoomsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumHouseTypeFieldUpdateOperationsInput | $Enums.HouseType
    isWholeRent?: BoolFieldUpdateOperationsInput | boolean
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUnit?: EnumPriceUnitFieldUpdateOperationsInput | $Enums.PriceUnit
    deposit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    areaUnit?: EnumAreaUnitFieldUpdateOperationsInput | $Enums.AreaUnit
    address?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bedrooms?: IntFieldUpdateOperationsInput | number
    livingRooms?: IntFieldUpdateOperationsInput | number
    kitchens?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    washingCount?: IntFieldUpdateOperationsInput | number
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    totalFloors?: NullableIntFieldUpdateOperationsInput | number | null
    builtYear?: NullableIntFieldUpdateOperationsInput | number | null
    orientation?: NullableEnumDirectionFieldUpdateOperationsInput | $Enums.Direction | null
    status?: EnumHouseStatusFieldUpdateOperationsInput | $Enums.HouseStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenant?: TenantUpdateOneRequiredWithoutHousesNestedInput
    images?: HouseImageUpdateManyWithoutHouseNestedInput
    contracts?: ContractUpdateManyWithoutHouseNestedInput
  }

  export type HouseUncheckedUpdateWithoutRoomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumHouseTypeFieldUpdateOperationsInput | $Enums.HouseType
    isWholeRent?: BoolFieldUpdateOperationsInput | boolean
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUnit?: EnumPriceUnitFieldUpdateOperationsInput | $Enums.PriceUnit
    deposit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    areaUnit?: EnumAreaUnitFieldUpdateOperationsInput | $Enums.AreaUnit
    address?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bedrooms?: IntFieldUpdateOperationsInput | number
    livingRooms?: IntFieldUpdateOperationsInput | number
    kitchens?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    washingCount?: IntFieldUpdateOperationsInput | number
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    totalFloors?: NullableIntFieldUpdateOperationsInput | number | null
    builtYear?: NullableIntFieldUpdateOperationsInput | number | null
    orientation?: NullableEnumDirectionFieldUpdateOperationsInput | $Enums.Direction | null
    status?: EnumHouseStatusFieldUpdateOperationsInput | $Enums.HouseStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    tenantId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: HouseImageUncheckedUpdateManyWithoutHouseNestedInput
    contracts?: ContractUncheckedUpdateManyWithoutHouseNestedInput
  }

  export type RoomImageUpsertWithWhereUniqueWithoutRoomInput = {
    where: RoomImageWhereUniqueInput
    update: XOR<RoomImageUpdateWithoutRoomInput, RoomImageUncheckedUpdateWithoutRoomInput>
    create: XOR<RoomImageCreateWithoutRoomInput, RoomImageUncheckedCreateWithoutRoomInput>
  }

  export type RoomImageUpdateWithWhereUniqueWithoutRoomInput = {
    where: RoomImageWhereUniqueInput
    data: XOR<RoomImageUpdateWithoutRoomInput, RoomImageUncheckedUpdateWithoutRoomInput>
  }

  export type RoomImageUpdateManyWithWhereWithoutRoomInput = {
    where: RoomImageScalarWhereInput
    data: XOR<RoomImageUpdateManyMutationInput, RoomImageUncheckedUpdateManyWithoutRoomInput>
  }

  export type RoomImageScalarWhereInput = {
    AND?: RoomImageScalarWhereInput | RoomImageScalarWhereInput[]
    OR?: RoomImageScalarWhereInput[]
    NOT?: RoomImageScalarWhereInput | RoomImageScalarWhereInput[]
    id?: IntFilter<"RoomImage"> | number
    url?: StringFilter<"RoomImage"> | string
    isPrimary?: BoolFilter<"RoomImage"> | boolean
    description?: StringNullableFilter<"RoomImage"> | string | null
    roomId?: IntFilter<"RoomImage"> | number
    createdAt?: DateTimeFilter<"RoomImage"> | Date | string
  }

  export type ContractUpsertWithWhereUniqueWithoutRoomInput = {
    where: ContractWhereUniqueInput
    update: XOR<ContractUpdateWithoutRoomInput, ContractUncheckedUpdateWithoutRoomInput>
    create: XOR<ContractCreateWithoutRoomInput, ContractUncheckedCreateWithoutRoomInput>
  }

  export type ContractUpdateWithWhereUniqueWithoutRoomInput = {
    where: ContractWhereUniqueInput
    data: XOR<ContractUpdateWithoutRoomInput, ContractUncheckedUpdateWithoutRoomInput>
  }

  export type ContractUpdateManyWithWhereWithoutRoomInput = {
    where: ContractScalarWhereInput
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyWithoutRoomInput>
  }

  export type TenantUpsertWithoutRoomsInput = {
    update: XOR<TenantUpdateWithoutRoomsInput, TenantUncheckedUpdateWithoutRoomsInput>
    create: XOR<TenantCreateWithoutRoomsInput, TenantUncheckedCreateWithoutRoomsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutRoomsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutRoomsInput, TenantUncheckedUpdateWithoutRoomsInput>
  }

  export type TenantUpdateWithoutRoomsInput = {
    idCardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    houses?: HouseUpdateManyWithoutTenantNestedInput
    contracts?: ContractUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutRoomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    idCardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    houses?: HouseUncheckedUpdateManyWithoutTenantNestedInput
    contracts?: ContractUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type HouseCreateWithoutImagesInput = {
    title: string
    description?: string | null
    type?: $Enums.HouseType
    isWholeRent?: boolean
    price: Decimal | DecimalJsLike | number | string
    priceUnit?: $Enums.PriceUnit
    deposit?: Decimal | DecimalJsLike | number | string | null
    area?: Decimal | DecimalJsLike | number | string | null
    areaUnit?: $Enums.AreaUnit
    address: string
    city?: string | null
    district?: string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    bedrooms?: number
    livingRooms?: number
    kitchens?: number
    bathrooms?: number
    washingCount?: number
    floor?: number | null
    totalFloors?: number | null
    builtYear?: number | null
    orientation?: $Enums.Direction | null
    status?: $Enums.HouseStatus
    featured?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    tenant: TenantCreateNestedOneWithoutHousesInput
    rooms?: RoomCreateNestedManyWithoutHouseInput
    contracts?: ContractCreateNestedManyWithoutHouseInput
  }

  export type HouseUncheckedCreateWithoutImagesInput = {
    id?: number
    title: string
    description?: string | null
    type?: $Enums.HouseType
    isWholeRent?: boolean
    price: Decimal | DecimalJsLike | number | string
    priceUnit?: $Enums.PriceUnit
    deposit?: Decimal | DecimalJsLike | number | string | null
    area?: Decimal | DecimalJsLike | number | string | null
    areaUnit?: $Enums.AreaUnit
    address: string
    city?: string | null
    district?: string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    bedrooms?: number
    livingRooms?: number
    kitchens?: number
    bathrooms?: number
    washingCount?: number
    floor?: number | null
    totalFloors?: number | null
    builtYear?: number | null
    orientation?: $Enums.Direction | null
    status?: $Enums.HouseStatus
    featured?: boolean
    isDeleted?: boolean
    tenantId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    rooms?: RoomUncheckedCreateNestedManyWithoutHouseInput
    contracts?: ContractUncheckedCreateNestedManyWithoutHouseInput
  }

  export type HouseCreateOrConnectWithoutImagesInput = {
    where: HouseWhereUniqueInput
    create: XOR<HouseCreateWithoutImagesInput, HouseUncheckedCreateWithoutImagesInput>
  }

  export type HouseUpsertWithoutImagesInput = {
    update: XOR<HouseUpdateWithoutImagesInput, HouseUncheckedUpdateWithoutImagesInput>
    create: XOR<HouseCreateWithoutImagesInput, HouseUncheckedCreateWithoutImagesInput>
    where?: HouseWhereInput
  }

  export type HouseUpdateToOneWithWhereWithoutImagesInput = {
    where?: HouseWhereInput
    data: XOR<HouseUpdateWithoutImagesInput, HouseUncheckedUpdateWithoutImagesInput>
  }

  export type HouseUpdateWithoutImagesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumHouseTypeFieldUpdateOperationsInput | $Enums.HouseType
    isWholeRent?: BoolFieldUpdateOperationsInput | boolean
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUnit?: EnumPriceUnitFieldUpdateOperationsInput | $Enums.PriceUnit
    deposit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    areaUnit?: EnumAreaUnitFieldUpdateOperationsInput | $Enums.AreaUnit
    address?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bedrooms?: IntFieldUpdateOperationsInput | number
    livingRooms?: IntFieldUpdateOperationsInput | number
    kitchens?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    washingCount?: IntFieldUpdateOperationsInput | number
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    totalFloors?: NullableIntFieldUpdateOperationsInput | number | null
    builtYear?: NullableIntFieldUpdateOperationsInput | number | null
    orientation?: NullableEnumDirectionFieldUpdateOperationsInput | $Enums.Direction | null
    status?: EnumHouseStatusFieldUpdateOperationsInput | $Enums.HouseStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenant?: TenantUpdateOneRequiredWithoutHousesNestedInput
    rooms?: RoomUpdateManyWithoutHouseNestedInput
    contracts?: ContractUpdateManyWithoutHouseNestedInput
  }

  export type HouseUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumHouseTypeFieldUpdateOperationsInput | $Enums.HouseType
    isWholeRent?: BoolFieldUpdateOperationsInput | boolean
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUnit?: EnumPriceUnitFieldUpdateOperationsInput | $Enums.PriceUnit
    deposit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    areaUnit?: EnumAreaUnitFieldUpdateOperationsInput | $Enums.AreaUnit
    address?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bedrooms?: IntFieldUpdateOperationsInput | number
    livingRooms?: IntFieldUpdateOperationsInput | number
    kitchens?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    washingCount?: IntFieldUpdateOperationsInput | number
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    totalFloors?: NullableIntFieldUpdateOperationsInput | number | null
    builtYear?: NullableIntFieldUpdateOperationsInput | number | null
    orientation?: NullableEnumDirectionFieldUpdateOperationsInput | $Enums.Direction | null
    status?: EnumHouseStatusFieldUpdateOperationsInput | $Enums.HouseStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    tenantId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rooms?: RoomUncheckedUpdateManyWithoutHouseNestedInput
    contracts?: ContractUncheckedUpdateManyWithoutHouseNestedInput
  }

  export type RoomCreateWithoutImagesInput = {
    title: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    priceUnit?: $Enums.PriceUnit
    deposit?: Decimal | DecimalJsLike | number | string | null
    area: Decimal | DecimalJsLike | number | string
    areaUnit?: $Enums.AreaUnit
    orientation?: $Enums.Direction | null
    status?: $Enums.HouseStatus
    featured?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    house: HouseCreateNestedOneWithoutRoomsInput
    contracts?: ContractCreateNestedManyWithoutRoomInput
    tenant: TenantCreateNestedOneWithoutRoomsInput
  }

  export type RoomUncheckedCreateWithoutImagesInput = {
    id?: number
    title: string
    description?: string | null
    houseId: number
    price: Decimal | DecimalJsLike | number | string
    priceUnit?: $Enums.PriceUnit
    deposit?: Decimal | DecimalJsLike | number | string | null
    area: Decimal | DecimalJsLike | number | string
    areaUnit?: $Enums.AreaUnit
    orientation?: $Enums.Direction | null
    status?: $Enums.HouseStatus
    featured?: boolean
    isDeleted?: boolean
    tenantId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    contracts?: ContractUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutImagesInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutImagesInput, RoomUncheckedCreateWithoutImagesInput>
  }

  export type RoomUpsertWithoutImagesInput = {
    update: XOR<RoomUpdateWithoutImagesInput, RoomUncheckedUpdateWithoutImagesInput>
    create: XOR<RoomCreateWithoutImagesInput, RoomUncheckedCreateWithoutImagesInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutImagesInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutImagesInput, RoomUncheckedUpdateWithoutImagesInput>
  }

  export type RoomUpdateWithoutImagesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUnit?: EnumPriceUnitFieldUpdateOperationsInput | $Enums.PriceUnit
    deposit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    areaUnit?: EnumAreaUnitFieldUpdateOperationsInput | $Enums.AreaUnit
    orientation?: NullableEnumDirectionFieldUpdateOperationsInput | $Enums.Direction | null
    status?: EnumHouseStatusFieldUpdateOperationsInput | $Enums.HouseStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    house?: HouseUpdateOneRequiredWithoutRoomsNestedInput
    contracts?: ContractUpdateManyWithoutRoomNestedInput
    tenant?: TenantUpdateOneRequiredWithoutRoomsNestedInput
  }

  export type RoomUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    houseId?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUnit?: EnumPriceUnitFieldUpdateOperationsInput | $Enums.PriceUnit
    deposit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    areaUnit?: EnumAreaUnitFieldUpdateOperationsInput | $Enums.AreaUnit
    orientation?: NullableEnumDirectionFieldUpdateOperationsInput | $Enums.Direction | null
    status?: EnumHouseStatusFieldUpdateOperationsInput | $Enums.HouseStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    tenantId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    contracts?: ContractUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type HouseCreateWithoutContractsInput = {
    title: string
    description?: string | null
    type?: $Enums.HouseType
    isWholeRent?: boolean
    price: Decimal | DecimalJsLike | number | string
    priceUnit?: $Enums.PriceUnit
    deposit?: Decimal | DecimalJsLike | number | string | null
    area?: Decimal | DecimalJsLike | number | string | null
    areaUnit?: $Enums.AreaUnit
    address: string
    city?: string | null
    district?: string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    bedrooms?: number
    livingRooms?: number
    kitchens?: number
    bathrooms?: number
    washingCount?: number
    floor?: number | null
    totalFloors?: number | null
    builtYear?: number | null
    orientation?: $Enums.Direction | null
    status?: $Enums.HouseStatus
    featured?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    tenant: TenantCreateNestedOneWithoutHousesInput
    images?: HouseImageCreateNestedManyWithoutHouseInput
    rooms?: RoomCreateNestedManyWithoutHouseInput
  }

  export type HouseUncheckedCreateWithoutContractsInput = {
    id?: number
    title: string
    description?: string | null
    type?: $Enums.HouseType
    isWholeRent?: boolean
    price: Decimal | DecimalJsLike | number | string
    priceUnit?: $Enums.PriceUnit
    deposit?: Decimal | DecimalJsLike | number | string | null
    area?: Decimal | DecimalJsLike | number | string | null
    areaUnit?: $Enums.AreaUnit
    address: string
    city?: string | null
    district?: string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    bedrooms?: number
    livingRooms?: number
    kitchens?: number
    bathrooms?: number
    washingCount?: number
    floor?: number | null
    totalFloors?: number | null
    builtYear?: number | null
    orientation?: $Enums.Direction | null
    status?: $Enums.HouseStatus
    featured?: boolean
    isDeleted?: boolean
    tenantId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    images?: HouseImageUncheckedCreateNestedManyWithoutHouseInput
    rooms?: RoomUncheckedCreateNestedManyWithoutHouseInput
  }

  export type HouseCreateOrConnectWithoutContractsInput = {
    where: HouseWhereUniqueInput
    create: XOR<HouseCreateWithoutContractsInput, HouseUncheckedCreateWithoutContractsInput>
  }

  export type RoomCreateWithoutContractsInput = {
    title: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    priceUnit?: $Enums.PriceUnit
    deposit?: Decimal | DecimalJsLike | number | string | null
    area: Decimal | DecimalJsLike | number | string
    areaUnit?: $Enums.AreaUnit
    orientation?: $Enums.Direction | null
    status?: $Enums.HouseStatus
    featured?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    house: HouseCreateNestedOneWithoutRoomsInput
    images?: RoomImageCreateNestedManyWithoutRoomInput
    tenant: TenantCreateNestedOneWithoutRoomsInput
  }

  export type RoomUncheckedCreateWithoutContractsInput = {
    id?: number
    title: string
    description?: string | null
    houseId: number
    price: Decimal | DecimalJsLike | number | string
    priceUnit?: $Enums.PriceUnit
    deposit?: Decimal | DecimalJsLike | number | string | null
    area: Decimal | DecimalJsLike | number | string
    areaUnit?: $Enums.AreaUnit
    orientation?: $Enums.Direction | null
    status?: $Enums.HouseStatus
    featured?: boolean
    isDeleted?: boolean
    tenantId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    images?: RoomImageUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutContractsInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutContractsInput, RoomUncheckedCreateWithoutContractsInput>
  }

  export type TenantCreateWithoutContractsInput = {
    idCardNumber?: string | null
    username: string
    tel?: string | null
    blacklisted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    houses?: HouseCreateNestedManyWithoutTenantInput
    rooms?: RoomCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutContractsInput = {
    id?: number
    idCardNumber?: string | null
    username: string
    tel?: string | null
    blacklisted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    houses?: HouseUncheckedCreateNestedManyWithoutTenantInput
    rooms?: RoomUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutContractsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutContractsInput, TenantUncheckedCreateWithoutContractsInput>
  }

  export type ContractDocumentCreateWithoutContractInput = {
    url: string
    description?: string | null
    createdAt?: Date | string
  }

  export type ContractDocumentUncheckedCreateWithoutContractInput = {
    id?: number
    url: string
    description?: string | null
    createdAt?: Date | string
  }

  export type ContractDocumentCreateOrConnectWithoutContractInput = {
    where: ContractDocumentWhereUniqueInput
    create: XOR<ContractDocumentCreateWithoutContractInput, ContractDocumentUncheckedCreateWithoutContractInput>
  }

  export type ContractDocumentCreateManyContractInputEnvelope = {
    data: ContractDocumentCreateManyContractInput | ContractDocumentCreateManyContractInput[]
    skipDuplicates?: boolean
  }

  export type HouseUpsertWithoutContractsInput = {
    update: XOR<HouseUpdateWithoutContractsInput, HouseUncheckedUpdateWithoutContractsInput>
    create: XOR<HouseCreateWithoutContractsInput, HouseUncheckedCreateWithoutContractsInput>
    where?: HouseWhereInput
  }

  export type HouseUpdateToOneWithWhereWithoutContractsInput = {
    where?: HouseWhereInput
    data: XOR<HouseUpdateWithoutContractsInput, HouseUncheckedUpdateWithoutContractsInput>
  }

  export type HouseUpdateWithoutContractsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumHouseTypeFieldUpdateOperationsInput | $Enums.HouseType
    isWholeRent?: BoolFieldUpdateOperationsInput | boolean
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUnit?: EnumPriceUnitFieldUpdateOperationsInput | $Enums.PriceUnit
    deposit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    areaUnit?: EnumAreaUnitFieldUpdateOperationsInput | $Enums.AreaUnit
    address?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bedrooms?: IntFieldUpdateOperationsInput | number
    livingRooms?: IntFieldUpdateOperationsInput | number
    kitchens?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    washingCount?: IntFieldUpdateOperationsInput | number
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    totalFloors?: NullableIntFieldUpdateOperationsInput | number | null
    builtYear?: NullableIntFieldUpdateOperationsInput | number | null
    orientation?: NullableEnumDirectionFieldUpdateOperationsInput | $Enums.Direction | null
    status?: EnumHouseStatusFieldUpdateOperationsInput | $Enums.HouseStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenant?: TenantUpdateOneRequiredWithoutHousesNestedInput
    images?: HouseImageUpdateManyWithoutHouseNestedInput
    rooms?: RoomUpdateManyWithoutHouseNestedInput
  }

  export type HouseUncheckedUpdateWithoutContractsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumHouseTypeFieldUpdateOperationsInput | $Enums.HouseType
    isWholeRent?: BoolFieldUpdateOperationsInput | boolean
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUnit?: EnumPriceUnitFieldUpdateOperationsInput | $Enums.PriceUnit
    deposit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    areaUnit?: EnumAreaUnitFieldUpdateOperationsInput | $Enums.AreaUnit
    address?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bedrooms?: IntFieldUpdateOperationsInput | number
    livingRooms?: IntFieldUpdateOperationsInput | number
    kitchens?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    washingCount?: IntFieldUpdateOperationsInput | number
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    totalFloors?: NullableIntFieldUpdateOperationsInput | number | null
    builtYear?: NullableIntFieldUpdateOperationsInput | number | null
    orientation?: NullableEnumDirectionFieldUpdateOperationsInput | $Enums.Direction | null
    status?: EnumHouseStatusFieldUpdateOperationsInput | $Enums.HouseStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    tenantId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: HouseImageUncheckedUpdateManyWithoutHouseNestedInput
    rooms?: RoomUncheckedUpdateManyWithoutHouseNestedInput
  }

  export type RoomUpsertWithoutContractsInput = {
    update: XOR<RoomUpdateWithoutContractsInput, RoomUncheckedUpdateWithoutContractsInput>
    create: XOR<RoomCreateWithoutContractsInput, RoomUncheckedCreateWithoutContractsInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutContractsInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutContractsInput, RoomUncheckedUpdateWithoutContractsInput>
  }

  export type RoomUpdateWithoutContractsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUnit?: EnumPriceUnitFieldUpdateOperationsInput | $Enums.PriceUnit
    deposit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    areaUnit?: EnumAreaUnitFieldUpdateOperationsInput | $Enums.AreaUnit
    orientation?: NullableEnumDirectionFieldUpdateOperationsInput | $Enums.Direction | null
    status?: EnumHouseStatusFieldUpdateOperationsInput | $Enums.HouseStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    house?: HouseUpdateOneRequiredWithoutRoomsNestedInput
    images?: RoomImageUpdateManyWithoutRoomNestedInput
    tenant?: TenantUpdateOneRequiredWithoutRoomsNestedInput
  }

  export type RoomUncheckedUpdateWithoutContractsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    houseId?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUnit?: EnumPriceUnitFieldUpdateOperationsInput | $Enums.PriceUnit
    deposit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    areaUnit?: EnumAreaUnitFieldUpdateOperationsInput | $Enums.AreaUnit
    orientation?: NullableEnumDirectionFieldUpdateOperationsInput | $Enums.Direction | null
    status?: EnumHouseStatusFieldUpdateOperationsInput | $Enums.HouseStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    tenantId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: RoomImageUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type TenantUpsertWithoutContractsInput = {
    update: XOR<TenantUpdateWithoutContractsInput, TenantUncheckedUpdateWithoutContractsInput>
    create: XOR<TenantCreateWithoutContractsInput, TenantUncheckedCreateWithoutContractsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutContractsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutContractsInput, TenantUncheckedUpdateWithoutContractsInput>
  }

  export type TenantUpdateWithoutContractsInput = {
    idCardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    houses?: HouseUpdateManyWithoutTenantNestedInput
    rooms?: RoomUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutContractsInput = {
    id?: IntFieldUpdateOperationsInput | number
    idCardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    houses?: HouseUncheckedUpdateManyWithoutTenantNestedInput
    rooms?: RoomUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type ContractDocumentUpsertWithWhereUniqueWithoutContractInput = {
    where: ContractDocumentWhereUniqueInput
    update: XOR<ContractDocumentUpdateWithoutContractInput, ContractDocumentUncheckedUpdateWithoutContractInput>
    create: XOR<ContractDocumentCreateWithoutContractInput, ContractDocumentUncheckedCreateWithoutContractInput>
  }

  export type ContractDocumentUpdateWithWhereUniqueWithoutContractInput = {
    where: ContractDocumentWhereUniqueInput
    data: XOR<ContractDocumentUpdateWithoutContractInput, ContractDocumentUncheckedUpdateWithoutContractInput>
  }

  export type ContractDocumentUpdateManyWithWhereWithoutContractInput = {
    where: ContractDocumentScalarWhereInput
    data: XOR<ContractDocumentUpdateManyMutationInput, ContractDocumentUncheckedUpdateManyWithoutContractInput>
  }

  export type ContractDocumentScalarWhereInput = {
    AND?: ContractDocumentScalarWhereInput | ContractDocumentScalarWhereInput[]
    OR?: ContractDocumentScalarWhereInput[]
    NOT?: ContractDocumentScalarWhereInput | ContractDocumentScalarWhereInput[]
    id?: IntFilter<"ContractDocument"> | number
    url?: StringFilter<"ContractDocument"> | string
    description?: StringNullableFilter<"ContractDocument"> | string | null
    contractId?: IntFilter<"ContractDocument"> | number
    createdAt?: DateTimeFilter<"ContractDocument"> | Date | string
  }

  export type ContractCreateWithoutDocumentsInput = {
    title: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    monthlyRent: Decimal | DecimalJsLike | number | string
    deposit: Decimal | DecimalJsLike | number | string
    status?: $Enums.ContractStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    house?: HouseCreateNestedOneWithoutContractsInput
    room?: RoomCreateNestedOneWithoutContractsInput
    tenant: TenantCreateNestedOneWithoutContractsInput
  }

  export type ContractUncheckedCreateWithoutDocumentsInput = {
    id?: number
    title: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    monthlyRent: Decimal | DecimalJsLike | number | string
    deposit: Decimal | DecimalJsLike | number | string
    status?: $Enums.ContractStatus
    houseId?: number | null
    roomId?: number | null
    tenantId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractCreateOrConnectWithoutDocumentsInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutDocumentsInput, ContractUncheckedCreateWithoutDocumentsInput>
  }

  export type ContractUpsertWithoutDocumentsInput = {
    update: XOR<ContractUpdateWithoutDocumentsInput, ContractUncheckedUpdateWithoutDocumentsInput>
    create: XOR<ContractCreateWithoutDocumentsInput, ContractUncheckedCreateWithoutDocumentsInput>
    where?: ContractWhereInput
  }

  export type ContractUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: ContractWhereInput
    data: XOR<ContractUpdateWithoutDocumentsInput, ContractUncheckedUpdateWithoutDocumentsInput>
  }

  export type ContractUpdateWithoutDocumentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deposit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    house?: HouseUpdateOneWithoutContractsNestedInput
    room?: RoomUpdateOneWithoutContractsNestedInput
    tenant?: TenantUpdateOneRequiredWithoutContractsNestedInput
  }

  export type ContractUncheckedUpdateWithoutDocumentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deposit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    houseId?: NullableIntFieldUpdateOperationsInput | number | null
    roomId?: NullableIntFieldUpdateOperationsInput | number | null
    tenantId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: NullableJsonNullValueInput | InputJsonValue
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: NullableJsonNullValueInput | InputJsonValue
  }

  export type RoleUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserCreateManyDepartmentInput = {
    id?: number
    username: string
    password?: string
    name?: string | null
    pinyin?: string | null
    email?: string | null
    gender?: number | null
    avatar?: string | null
    birthDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    isVerified?: boolean
    isActive?: boolean
  }

  export type DepartmentCreateManyParentInput = {
    id?: number
    name: string
    desc?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateWithoutDepartmentInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    pinyin?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    roles?: RoleUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutDepartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    pinyin?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    roles?: RoleUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateManyWithoutDepartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    pinyin?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DepartmentUpdateWithoutParentInput = {
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutDepartmentNestedInput
    children?: DepartmentUpdateManyWithoutParentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutDepartmentNestedInput
    children?: DepartmentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type DepartmentUncheckedUpdateManyWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutRolesInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    pinyin?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    Department?: DepartmentUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    pinyin?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    departmentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserUncheckedUpdateManyWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    pinyin?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableIntFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    departmentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CardCreateManyBoardInput = {
    id?: number
    title: string
    createTime?: Date | string
    type?: string
    value: string
    x: number
    y: number
    w: number
    h: number
    i: string
    config?: NullableJsonNullValueInput | InputJsonValue
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type CardUpdateWithoutBoardInput = {
    title?: StringFieldUpdateOperationsInput | string
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    w?: IntFieldUpdateOperationsInput | number
    h?: IntFieldUpdateOperationsInput | number
    i?: StringFieldUpdateOperationsInput | string
    config?: NullableJsonNullValueInput | InputJsonValue
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type CardUncheckedUpdateWithoutBoardInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    w?: IntFieldUpdateOperationsInput | number
    h?: IntFieldUpdateOperationsInput | number
    i?: StringFieldUpdateOperationsInput | string
    config?: NullableJsonNullValueInput | InputJsonValue
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type CardUncheckedUpdateManyWithoutBoardInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    w?: IntFieldUpdateOperationsInput | number
    h?: IntFieldUpdateOperationsInput | number
    i?: StringFieldUpdateOperationsInput | string
    config?: NullableJsonNullValueInput | InputJsonValue
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type HouseCreateManyTenantInput = {
    id?: number
    title: string
    description?: string | null
    type?: $Enums.HouseType
    isWholeRent?: boolean
    price: Decimal | DecimalJsLike | number | string
    priceUnit?: $Enums.PriceUnit
    deposit?: Decimal | DecimalJsLike | number | string | null
    area?: Decimal | DecimalJsLike | number | string | null
    areaUnit?: $Enums.AreaUnit
    address: string
    city?: string | null
    district?: string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    bedrooms?: number
    livingRooms?: number
    kitchens?: number
    bathrooms?: number
    washingCount?: number
    floor?: number | null
    totalFloors?: number | null
    builtYear?: number | null
    orientation?: $Enums.Direction | null
    status?: $Enums.HouseStatus
    featured?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type RoomCreateManyTenantInput = {
    id?: number
    title: string
    description?: string | null
    houseId: number
    price: Decimal | DecimalJsLike | number | string
    priceUnit?: $Enums.PriceUnit
    deposit?: Decimal | DecimalJsLike | number | string | null
    area: Decimal | DecimalJsLike | number | string
    areaUnit?: $Enums.AreaUnit
    orientation?: $Enums.Direction | null
    status?: $Enums.HouseStatus
    featured?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ContractCreateManyTenantInput = {
    id?: number
    title: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    monthlyRent: Decimal | DecimalJsLike | number | string
    deposit: Decimal | DecimalJsLike | number | string
    status?: $Enums.ContractStatus
    houseId?: number | null
    roomId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HouseUpdateWithoutTenantInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumHouseTypeFieldUpdateOperationsInput | $Enums.HouseType
    isWholeRent?: BoolFieldUpdateOperationsInput | boolean
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUnit?: EnumPriceUnitFieldUpdateOperationsInput | $Enums.PriceUnit
    deposit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    areaUnit?: EnumAreaUnitFieldUpdateOperationsInput | $Enums.AreaUnit
    address?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bedrooms?: IntFieldUpdateOperationsInput | number
    livingRooms?: IntFieldUpdateOperationsInput | number
    kitchens?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    washingCount?: IntFieldUpdateOperationsInput | number
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    totalFloors?: NullableIntFieldUpdateOperationsInput | number | null
    builtYear?: NullableIntFieldUpdateOperationsInput | number | null
    orientation?: NullableEnumDirectionFieldUpdateOperationsInput | $Enums.Direction | null
    status?: EnumHouseStatusFieldUpdateOperationsInput | $Enums.HouseStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: HouseImageUpdateManyWithoutHouseNestedInput
    rooms?: RoomUpdateManyWithoutHouseNestedInput
    contracts?: ContractUpdateManyWithoutHouseNestedInput
  }

  export type HouseUncheckedUpdateWithoutTenantInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumHouseTypeFieldUpdateOperationsInput | $Enums.HouseType
    isWholeRent?: BoolFieldUpdateOperationsInput | boolean
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUnit?: EnumPriceUnitFieldUpdateOperationsInput | $Enums.PriceUnit
    deposit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    areaUnit?: EnumAreaUnitFieldUpdateOperationsInput | $Enums.AreaUnit
    address?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bedrooms?: IntFieldUpdateOperationsInput | number
    livingRooms?: IntFieldUpdateOperationsInput | number
    kitchens?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    washingCount?: IntFieldUpdateOperationsInput | number
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    totalFloors?: NullableIntFieldUpdateOperationsInput | number | null
    builtYear?: NullableIntFieldUpdateOperationsInput | number | null
    orientation?: NullableEnumDirectionFieldUpdateOperationsInput | $Enums.Direction | null
    status?: EnumHouseStatusFieldUpdateOperationsInput | $Enums.HouseStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: HouseImageUncheckedUpdateManyWithoutHouseNestedInput
    rooms?: RoomUncheckedUpdateManyWithoutHouseNestedInput
    contracts?: ContractUncheckedUpdateManyWithoutHouseNestedInput
  }

  export type HouseUncheckedUpdateManyWithoutTenantInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumHouseTypeFieldUpdateOperationsInput | $Enums.HouseType
    isWholeRent?: BoolFieldUpdateOperationsInput | boolean
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUnit?: EnumPriceUnitFieldUpdateOperationsInput | $Enums.PriceUnit
    deposit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    areaUnit?: EnumAreaUnitFieldUpdateOperationsInput | $Enums.AreaUnit
    address?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bedrooms?: IntFieldUpdateOperationsInput | number
    livingRooms?: IntFieldUpdateOperationsInput | number
    kitchens?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    washingCount?: IntFieldUpdateOperationsInput | number
    floor?: NullableIntFieldUpdateOperationsInput | number | null
    totalFloors?: NullableIntFieldUpdateOperationsInput | number | null
    builtYear?: NullableIntFieldUpdateOperationsInput | number | null
    orientation?: NullableEnumDirectionFieldUpdateOperationsInput | $Enums.Direction | null
    status?: EnumHouseStatusFieldUpdateOperationsInput | $Enums.HouseStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoomUpdateWithoutTenantInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUnit?: EnumPriceUnitFieldUpdateOperationsInput | $Enums.PriceUnit
    deposit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    areaUnit?: EnumAreaUnitFieldUpdateOperationsInput | $Enums.AreaUnit
    orientation?: NullableEnumDirectionFieldUpdateOperationsInput | $Enums.Direction | null
    status?: EnumHouseStatusFieldUpdateOperationsInput | $Enums.HouseStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    house?: HouseUpdateOneRequiredWithoutRoomsNestedInput
    images?: RoomImageUpdateManyWithoutRoomNestedInput
    contracts?: ContractUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutTenantInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    houseId?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUnit?: EnumPriceUnitFieldUpdateOperationsInput | $Enums.PriceUnit
    deposit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    areaUnit?: EnumAreaUnitFieldUpdateOperationsInput | $Enums.AreaUnit
    orientation?: NullableEnumDirectionFieldUpdateOperationsInput | $Enums.Direction | null
    status?: EnumHouseStatusFieldUpdateOperationsInput | $Enums.HouseStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: RoomImageUncheckedUpdateManyWithoutRoomNestedInput
    contracts?: ContractUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateManyWithoutTenantInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    houseId?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUnit?: EnumPriceUnitFieldUpdateOperationsInput | $Enums.PriceUnit
    deposit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    areaUnit?: EnumAreaUnitFieldUpdateOperationsInput | $Enums.AreaUnit
    orientation?: NullableEnumDirectionFieldUpdateOperationsInput | $Enums.Direction | null
    status?: EnumHouseStatusFieldUpdateOperationsInput | $Enums.HouseStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContractUpdateWithoutTenantInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deposit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    house?: HouseUpdateOneWithoutContractsNestedInput
    room?: RoomUpdateOneWithoutContractsNestedInput
    documents?: ContractDocumentUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateWithoutTenantInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deposit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    houseId?: NullableIntFieldUpdateOperationsInput | number | null
    roomId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: ContractDocumentUncheckedUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateManyWithoutTenantInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deposit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    houseId?: NullableIntFieldUpdateOperationsInput | number | null
    roomId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HouseImageCreateManyHouseInput = {
    id?: number
    url: string
    isPrimary?: boolean
    description?: string | null
    createdAt?: Date | string
  }

  export type RoomCreateManyHouseInput = {
    id?: number
    title: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    priceUnit?: $Enums.PriceUnit
    deposit?: Decimal | DecimalJsLike | number | string | null
    area: Decimal | DecimalJsLike | number | string
    areaUnit?: $Enums.AreaUnit
    orientation?: $Enums.Direction | null
    status?: $Enums.HouseStatus
    featured?: boolean
    isDeleted?: boolean
    tenantId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ContractCreateManyHouseInput = {
    id?: number
    title: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    monthlyRent: Decimal | DecimalJsLike | number | string
    deposit: Decimal | DecimalJsLike | number | string
    status?: $Enums.ContractStatus
    roomId?: number | null
    tenantId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HouseImageUpdateWithoutHouseInput = {
    url?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HouseImageUncheckedUpdateWithoutHouseInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HouseImageUncheckedUpdateManyWithoutHouseInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUpdateWithoutHouseInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUnit?: EnumPriceUnitFieldUpdateOperationsInput | $Enums.PriceUnit
    deposit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    areaUnit?: EnumAreaUnitFieldUpdateOperationsInput | $Enums.AreaUnit
    orientation?: NullableEnumDirectionFieldUpdateOperationsInput | $Enums.Direction | null
    status?: EnumHouseStatusFieldUpdateOperationsInput | $Enums.HouseStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: RoomImageUpdateManyWithoutRoomNestedInput
    contracts?: ContractUpdateManyWithoutRoomNestedInput
    tenant?: TenantUpdateOneRequiredWithoutRoomsNestedInput
  }

  export type RoomUncheckedUpdateWithoutHouseInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUnit?: EnumPriceUnitFieldUpdateOperationsInput | $Enums.PriceUnit
    deposit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    areaUnit?: EnumAreaUnitFieldUpdateOperationsInput | $Enums.AreaUnit
    orientation?: NullableEnumDirectionFieldUpdateOperationsInput | $Enums.Direction | null
    status?: EnumHouseStatusFieldUpdateOperationsInput | $Enums.HouseStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    tenantId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: RoomImageUncheckedUpdateManyWithoutRoomNestedInput
    contracts?: ContractUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateManyWithoutHouseInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUnit?: EnumPriceUnitFieldUpdateOperationsInput | $Enums.PriceUnit
    deposit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    areaUnit?: EnumAreaUnitFieldUpdateOperationsInput | $Enums.AreaUnit
    orientation?: NullableEnumDirectionFieldUpdateOperationsInput | $Enums.Direction | null
    status?: EnumHouseStatusFieldUpdateOperationsInput | $Enums.HouseStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    tenantId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContractUpdateWithoutHouseInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deposit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneWithoutContractsNestedInput
    tenant?: TenantUpdateOneRequiredWithoutContractsNestedInput
    documents?: ContractDocumentUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateWithoutHouseInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deposit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    roomId?: NullableIntFieldUpdateOperationsInput | number | null
    tenantId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: ContractDocumentUncheckedUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateManyWithoutHouseInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deposit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    roomId?: NullableIntFieldUpdateOperationsInput | number | null
    tenantId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomImageCreateManyRoomInput = {
    id?: number
    url: string
    isPrimary?: boolean
    description?: string | null
    createdAt?: Date | string
  }

  export type ContractCreateManyRoomInput = {
    id?: number
    title: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    monthlyRent: Decimal | DecimalJsLike | number | string
    deposit: Decimal | DecimalJsLike | number | string
    status?: $Enums.ContractStatus
    houseId?: number | null
    tenantId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomImageUpdateWithoutRoomInput = {
    url?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomImageUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomImageUncheckedUpdateManyWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractUpdateWithoutRoomInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deposit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    house?: HouseUpdateOneWithoutContractsNestedInput
    tenant?: TenantUpdateOneRequiredWithoutContractsNestedInput
    documents?: ContractDocumentUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deposit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    houseId?: NullableIntFieldUpdateOperationsInput | number | null
    tenantId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: ContractDocumentUncheckedUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateManyWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deposit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    houseId?: NullableIntFieldUpdateOperationsInput | number | null
    tenantId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractDocumentCreateManyContractInput = {
    id?: number
    url: string
    description?: string | null
    createdAt?: Date | string
  }

  export type ContractDocumentUpdateWithoutContractInput = {
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractDocumentUncheckedUpdateWithoutContractInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractDocumentUncheckedUpdateManyWithoutContractInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}