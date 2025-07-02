
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
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

exports.Prisma.DepartmentScalarFieldEnum = {
  id: 'id',
  name: 'name',
  desc: 'desc',
  parentId: 'parentId',
  createdAt: 'createdAt'
};

exports.Prisma.LogReqScalarFieldEnum = {
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

exports.Prisma.RoleScalarFieldEnum = {
  id: 'id',
  name: 'name',
  desc: 'desc',
  createTime: 'createTime',
  permissions: 'permissions'
};

exports.Prisma.BoardScalarFieldEnum = {
  id: 'id',
  title: 'title',
  desc: 'desc',
  createTime: 'createTime',
  creator: 'creator',
  indicatorCount: 'indicatorCount'
};

exports.Prisma.CardScalarFieldEnum = {
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

exports.Prisma.TenantScalarFieldEnum = {
  id: 'id',
  idCardNumber: 'idCardNumber',
  username: 'username',
  tel: 'tel',
  blacklisted: 'blacklisted',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.HouseScalarFieldEnum = {
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

exports.Prisma.RoomScalarFieldEnum = {
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

exports.Prisma.HouseImageScalarFieldEnum = {
  id: 'id',
  url: 'url',
  isPrimary: 'isPrimary',
  description: 'description',
  houseId: 'houseId',
  createdAt: 'createdAt'
};

exports.Prisma.RoomImageScalarFieldEnum = {
  id: 'id',
  url: 'url',
  isPrimary: 'isPrimary',
  description: 'description',
  roomId: 'roomId',
  createdAt: 'createdAt'
};

exports.Prisma.ContractScalarFieldEnum = {
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

exports.Prisma.ContractDocumentScalarFieldEnum = {
  id: 'id',
  url: 'url',
  description: 'description',
  contractId: 'contractId',
  createdAt: 'createdAt'
};

exports.Prisma.EnumScalarFieldEnum = {
  id: 'id',
  type: 'type',
  code: 'code',
  name: 'name',
  label: 'label',
  value: 'value',
  desc: 'desc',
  enable: 'enable'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.UserOrderByRelevanceFieldEnum = {
  username: 'username',
  password: 'password',
  name: 'name',
  pinyin: 'pinyin',
  email: 'email',
  avatar: 'avatar'
};

exports.Prisma.DepartmentOrderByRelevanceFieldEnum = {
  name: 'name',
  desc: 'desc'
};

exports.Prisma.LogReqOrderByRelevanceFieldEnum = {
  level: 'level',
  method: 'method',
  path: 'path',
  query: 'query',
  body: 'body',
  message: 'message',
  duration: 'duration'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.RoleOrderByRelevanceFieldEnum = {
  name: 'name',
  desc: 'desc'
};

exports.Prisma.BoardOrderByRelevanceFieldEnum = {
  title: 'title',
  desc: 'desc',
  creator: 'creator'
};

exports.Prisma.CardOrderByRelevanceFieldEnum = {
  title: 'title',
  type: 'type',
  value: 'value',
  i: 'i'
};

exports.Prisma.TenantOrderByRelevanceFieldEnum = {
  idCardNumber: 'idCardNumber',
  username: 'username',
  tel: 'tel'
};

exports.Prisma.HouseOrderByRelevanceFieldEnum = {
  title: 'title',
  description: 'description',
  address: 'address',
  city: 'city',
  district: 'district'
};

exports.Prisma.RoomOrderByRelevanceFieldEnum = {
  title: 'title',
  description: 'description'
};

exports.Prisma.HouseImageOrderByRelevanceFieldEnum = {
  url: 'url',
  description: 'description'
};

exports.Prisma.RoomImageOrderByRelevanceFieldEnum = {
  url: 'url',
  description: 'description'
};

exports.Prisma.ContractOrderByRelevanceFieldEnum = {
  title: 'title',
  description: 'description'
};

exports.Prisma.ContractDocumentOrderByRelevanceFieldEnum = {
  url: 'url',
  description: 'description'
};

exports.Prisma.EnumOrderByRelevanceFieldEnum = {
  code: 'code',
  name: 'name',
  label: 'label',
  value: 'value',
  desc: 'desc'
};
exports.HouseType = exports.$Enums.HouseType = {
  COMMUNITY: 'COMMUNITY',
  APARTMENT: 'APARTMENT',
  VILLA: 'VILLA',
  TOWNHOUSE: 'TOWNHOUSE',
  COMMERCIAL: 'COMMERCIAL'
};

exports.PriceUnit = exports.$Enums.PriceUnit = {
  PER_MONTH: 'PER_MONTH',
  PER_DAY: 'PER_DAY',
  PER_YEAR: 'PER_YEAR'
};

exports.AreaUnit = exports.$Enums.AreaUnit = {
  SQUARE_METER: 'SQUARE_METER',
  SQUARE_FOOT: 'SQUARE_FOOT'
};

exports.Direction = exports.$Enums.Direction = {
  EAST: 'EAST',
  SOUTH_EAST: 'SOUTH_EAST',
  SOUTH: 'SOUTH',
  SOUTH_WEST: 'SOUTH_WEST',
  WEST: 'WEST',
  NORTH_WEST: 'NORTH_WEST',
  NORTH: 'NORTH',
  NORTH_EAST: 'NORTH_EAST'
};

exports.HouseStatus = exports.$Enums.HouseStatus = {
  AVAILABLE: 'AVAILABLE',
  RENTED: 'RENTED',
  UNDER_REPAIR: 'UNDER_REPAIR',
  UNAVAILABLE: 'UNAVAILABLE'
};

exports.ContractStatus = exports.$Enums.ContractStatus = {
  DRAFT: 'DRAFT',
  ACTIVE: 'ACTIVE',
  EXPIRED: 'EXPIRED',
  TERMINATED: 'TERMINATED'
};

exports.EnumType = exports.$Enums.EnumType = {
  SYSTEM: 'SYSTEM',
  BUSINESS: 'BUSINESS',
  NORMAL: 'NORMAL',
  FIELD: 'FIELD'
};

exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
