// Code generated by Prisma (prisma@1.28.3). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateCourse {
  count: Int!
}

type AggregateDegree {
  count: Int!
}

type AggregateDepartment {
  count: Int!
}

type AggregateStudent {
  count: Int!
}

type AggregateSubject {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Course {
  id: ID!
  name: String!
  number: String!
  level: Int!
  credits: Int!
  subject: Subject
  degree: Degree
  department: Department
  prerequisite: Course
}

type CourseConnection {
  pageInfo: PageInfo!
  edges: [CourseEdge]!
  aggregate: AggregateCourse!
}

input CourseCreateInput {
  name: String!
  number: String!
  level: Int!
  credits: Int!
  subject: SubjectCreateOneInput
  degree: DegreeCreateOneInput
  department: DepartmentCreateOneInput
  prerequisite: CourseCreateOneInput
}

input CourseCreateManyInput {
  create: [CourseCreateInput!]
  connect: [CourseWhereUniqueInput!]
}

input CourseCreateOneInput {
  create: CourseCreateInput
  connect: CourseWhereUniqueInput
}

type CourseEdge {
  node: Course!
  cursor: String!
}

enum CourseOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  number_ASC
  number_DESC
  level_ASC
  level_DESC
  credits_ASC
  credits_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CoursePreviousValues {
  id: ID!
  name: String!
  number: String!
  level: Int!
  credits: Int!
}

input CourseScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  number: String
  number_not: String
  number_in: [String!]
  number_not_in: [String!]
  number_lt: String
  number_lte: String
  number_gt: String
  number_gte: String
  number_contains: String
  number_not_contains: String
  number_starts_with: String
  number_not_starts_with: String
  number_ends_with: String
  number_not_ends_with: String
  level: Int
  level_not: Int
  level_in: [Int!]
  level_not_in: [Int!]
  level_lt: Int
  level_lte: Int
  level_gt: Int
  level_gte: Int
  credits: Int
  credits_not: Int
  credits_in: [Int!]
  credits_not_in: [Int!]
  credits_lt: Int
  credits_lte: Int
  credits_gt: Int
  credits_gte: Int
  AND: [CourseScalarWhereInput!]
  OR: [CourseScalarWhereInput!]
  NOT: [CourseScalarWhereInput!]
}

type CourseSubscriptionPayload {
  mutation: MutationType!
  node: Course
  updatedFields: [String!]
  previousValues: CoursePreviousValues
}

input CourseSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CourseWhereInput
  AND: [CourseSubscriptionWhereInput!]
  OR: [CourseSubscriptionWhereInput!]
  NOT: [CourseSubscriptionWhereInput!]
}

input CourseUpdateDataInput {
  name: String
  number: String
  level: Int
  credits: Int
  subject: SubjectUpdateOneInput
  degree: DegreeUpdateOneInput
  department: DepartmentUpdateOneInput
  prerequisite: CourseUpdateOneInput
}

input CourseUpdateInput {
  name: String
  number: String
  level: Int
  credits: Int
  subject: SubjectUpdateOneInput
  degree: DegreeUpdateOneInput
  department: DepartmentUpdateOneInput
  prerequisite: CourseUpdateOneInput
}

input CourseUpdateManyDataInput {
  name: String
  number: String
  level: Int
  credits: Int
}

input CourseUpdateManyInput {
  create: [CourseCreateInput!]
  update: [CourseUpdateWithWhereUniqueNestedInput!]
  upsert: [CourseUpsertWithWhereUniqueNestedInput!]
  delete: [CourseWhereUniqueInput!]
  connect: [CourseWhereUniqueInput!]
  set: [CourseWhereUniqueInput!]
  disconnect: [CourseWhereUniqueInput!]
  deleteMany: [CourseScalarWhereInput!]
  updateMany: [CourseUpdateManyWithWhereNestedInput!]
}

input CourseUpdateManyMutationInput {
  name: String
  number: String
  level: Int
  credits: Int
}

input CourseUpdateManyWithWhereNestedInput {
  where: CourseScalarWhereInput!
  data: CourseUpdateManyDataInput!
}

input CourseUpdateOneInput {
  create: CourseCreateInput
  update: CourseUpdateDataInput
  upsert: CourseUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: CourseWhereUniqueInput
}

input CourseUpdateWithWhereUniqueNestedInput {
  where: CourseWhereUniqueInput!
  data: CourseUpdateDataInput!
}

input CourseUpsertNestedInput {
  update: CourseUpdateDataInput!
  create: CourseCreateInput!
}

input CourseUpsertWithWhereUniqueNestedInput {
  where: CourseWhereUniqueInput!
  update: CourseUpdateDataInput!
  create: CourseCreateInput!
}

input CourseWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  number: String
  number_not: String
  number_in: [String!]
  number_not_in: [String!]
  number_lt: String
  number_lte: String
  number_gt: String
  number_gte: String
  number_contains: String
  number_not_contains: String
  number_starts_with: String
  number_not_starts_with: String
  number_ends_with: String
  number_not_ends_with: String
  level: Int
  level_not: Int
  level_in: [Int!]
  level_not_in: [Int!]
  level_lt: Int
  level_lte: Int
  level_gt: Int
  level_gte: Int
  credits: Int
  credits_not: Int
  credits_in: [Int!]
  credits_not_in: [Int!]
  credits_lt: Int
  credits_lte: Int
  credits_gt: Int
  credits_gte: Int
  subject: SubjectWhereInput
  degree: DegreeWhereInput
  department: DepartmentWhereInput
  prerequisite: CourseWhereInput
  AND: [CourseWhereInput!]
  OR: [CourseWhereInput!]
  NOT: [CourseWhereInput!]
}

input CourseWhereUniqueInput {
  id: ID
}

type Degree {
  id: ID!
  name: String!
  requiredCredits: Int!
}

type DegreeConnection {
  pageInfo: PageInfo!
  edges: [DegreeEdge]!
  aggregate: AggregateDegree!
}

input DegreeCreateInput {
  name: String!
  requiredCredits: Int!
}

input DegreeCreateOneInput {
  create: DegreeCreateInput
  connect: DegreeWhereUniqueInput
}

type DegreeEdge {
  node: Degree!
  cursor: String!
}

enum DegreeOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  requiredCredits_ASC
  requiredCredits_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type DegreePreviousValues {
  id: ID!
  name: String!
  requiredCredits: Int!
}

type DegreeSubscriptionPayload {
  mutation: MutationType!
  node: Degree
  updatedFields: [String!]
  previousValues: DegreePreviousValues
}

input DegreeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: DegreeWhereInput
  AND: [DegreeSubscriptionWhereInput!]
  OR: [DegreeSubscriptionWhereInput!]
  NOT: [DegreeSubscriptionWhereInput!]
}

input DegreeUpdateDataInput {
  name: String
  requiredCredits: Int
}

input DegreeUpdateInput {
  name: String
  requiredCredits: Int
}

input DegreeUpdateManyMutationInput {
  name: String
  requiredCredits: Int
}

input DegreeUpdateOneInput {
  create: DegreeCreateInput
  update: DegreeUpdateDataInput
  upsert: DegreeUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: DegreeWhereUniqueInput
}

input DegreeUpsertNestedInput {
  update: DegreeUpdateDataInput!
  create: DegreeCreateInput!
}

input DegreeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  requiredCredits: Int
  requiredCredits_not: Int
  requiredCredits_in: [Int!]
  requiredCredits_not_in: [Int!]
  requiredCredits_lt: Int
  requiredCredits_lte: Int
  requiredCredits_gt: Int
  requiredCredits_gte: Int
  AND: [DegreeWhereInput!]
  OR: [DegreeWhereInput!]
  NOT: [DegreeWhereInput!]
}

input DegreeWhereUniqueInput {
  id: ID
}

type Department {
  id: ID!
  name: String!
}

type DepartmentConnection {
  pageInfo: PageInfo!
  edges: [DepartmentEdge]!
  aggregate: AggregateDepartment!
}

input DepartmentCreateInput {
  name: String!
}

input DepartmentCreateOneInput {
  create: DepartmentCreateInput
  connect: DepartmentWhereUniqueInput
}

type DepartmentEdge {
  node: Department!
  cursor: String!
}

enum DepartmentOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type DepartmentPreviousValues {
  id: ID!
  name: String!
}

type DepartmentSubscriptionPayload {
  mutation: MutationType!
  node: Department
  updatedFields: [String!]
  previousValues: DepartmentPreviousValues
}

input DepartmentSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: DepartmentWhereInput
  AND: [DepartmentSubscriptionWhereInput!]
  OR: [DepartmentSubscriptionWhereInput!]
  NOT: [DepartmentSubscriptionWhereInput!]
}

input DepartmentUpdateDataInput {
  name: String
}

input DepartmentUpdateInput {
  name: String
}

input DepartmentUpdateManyMutationInput {
  name: String
}

input DepartmentUpdateOneInput {
  create: DepartmentCreateInput
  update: DepartmentUpdateDataInput
  upsert: DepartmentUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: DepartmentWhereUniqueInput
}

input DepartmentUpsertNestedInput {
  update: DepartmentUpdateDataInput!
  create: DepartmentCreateInput!
}

input DepartmentWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [DepartmentWhereInput!]
  OR: [DepartmentWhereInput!]
  NOT: [DepartmentWhereInput!]
}

input DepartmentWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createCourse(data: CourseCreateInput!): Course!
  updateCourse(data: CourseUpdateInput!, where: CourseWhereUniqueInput!): Course
  updateManyCourses(data: CourseUpdateManyMutationInput!, where: CourseWhereInput): BatchPayload!
  upsertCourse(where: CourseWhereUniqueInput!, create: CourseCreateInput!, update: CourseUpdateInput!): Course!
  deleteCourse(where: CourseWhereUniqueInput!): Course
  deleteManyCourses(where: CourseWhereInput): BatchPayload!
  createDegree(data: DegreeCreateInput!): Degree!
  updateDegree(data: DegreeUpdateInput!, where: DegreeWhereUniqueInput!): Degree
  updateManyDegrees(data: DegreeUpdateManyMutationInput!, where: DegreeWhereInput): BatchPayload!
  upsertDegree(where: DegreeWhereUniqueInput!, create: DegreeCreateInput!, update: DegreeUpdateInput!): Degree!
  deleteDegree(where: DegreeWhereUniqueInput!): Degree
  deleteManyDegrees(where: DegreeWhereInput): BatchPayload!
  createDepartment(data: DepartmentCreateInput!): Department!
  updateDepartment(data: DepartmentUpdateInput!, where: DepartmentWhereUniqueInput!): Department
  updateManyDepartments(data: DepartmentUpdateManyMutationInput!, where: DepartmentWhereInput): BatchPayload!
  upsertDepartment(where: DepartmentWhereUniqueInput!, create: DepartmentCreateInput!, update: DepartmentUpdateInput!): Department!
  deleteDepartment(where: DepartmentWhereUniqueInput!): Department
  deleteManyDepartments(where: DepartmentWhereInput): BatchPayload!
  createStudent(data: StudentCreateInput!): Student!
  updateStudent(data: StudentUpdateInput!, where: StudentWhereUniqueInput!): Student
  updateManyStudents(data: StudentUpdateManyMutationInput!, where: StudentWhereInput): BatchPayload!
  upsertStudent(where: StudentWhereUniqueInput!, create: StudentCreateInput!, update: StudentUpdateInput!): Student!
  deleteStudent(where: StudentWhereUniqueInput!): Student
  deleteManyStudents(where: StudentWhereInput): BatchPayload!
  createSubject(data: SubjectCreateInput!): Subject!
  updateSubject(data: SubjectUpdateInput!, where: SubjectWhereUniqueInput!): Subject
  updateManySubjects(data: SubjectUpdateManyMutationInput!, where: SubjectWhereInput): BatchPayload!
  upsertSubject(where: SubjectWhereUniqueInput!, create: SubjectCreateInput!, update: SubjectUpdateInput!): Subject!
  deleteSubject(where: SubjectWhereUniqueInput!): Subject
  deleteManySubjects(where: SubjectWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  course(where: CourseWhereUniqueInput!): Course
  courses(where: CourseWhereInput, orderBy: CourseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Course]!
  coursesConnection(where: CourseWhereInput, orderBy: CourseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CourseConnection!
  degree(where: DegreeWhereUniqueInput!): Degree
  degrees(where: DegreeWhereInput, orderBy: DegreeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Degree]!
  degreesConnection(where: DegreeWhereInput, orderBy: DegreeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DegreeConnection!
  department(where: DepartmentWhereUniqueInput!): Department
  departments(where: DepartmentWhereInput, orderBy: DepartmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Department]!
  departmentsConnection(where: DepartmentWhereInput, orderBy: DepartmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DepartmentConnection!
  student(where: StudentWhereUniqueInput!): Student
  students(where: StudentWhereInput, orderBy: StudentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Student]!
  studentsConnection(where: StudentWhereInput, orderBy: StudentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StudentConnection!
  subject(where: SubjectWhereUniqueInput!): Subject
  subjects(where: SubjectWhereInput, orderBy: SubjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Subject]!
  subjectsConnection(where: SubjectWhereInput, orderBy: SubjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SubjectConnection!
  node(id: ID!): Node
}

type Student {
  id: ID!
  name: String
  coursesPassed(where: CourseWhereInput, orderBy: CourseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Course!]
  enrolledDegree: Degree
}

type StudentConnection {
  pageInfo: PageInfo!
  edges: [StudentEdge]!
  aggregate: AggregateStudent!
}

input StudentCreateInput {
  name: String
  coursesPassed: CourseCreateManyInput
  enrolledDegree: DegreeCreateOneInput
}

type StudentEdge {
  node: Student!
  cursor: String!
}

enum StudentOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type StudentPreviousValues {
  id: ID!
  name: String
}

type StudentSubscriptionPayload {
  mutation: MutationType!
  node: Student
  updatedFields: [String!]
  previousValues: StudentPreviousValues
}

input StudentSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: StudentWhereInput
  AND: [StudentSubscriptionWhereInput!]
  OR: [StudentSubscriptionWhereInput!]
  NOT: [StudentSubscriptionWhereInput!]
}

input StudentUpdateInput {
  name: String
  coursesPassed: CourseUpdateManyInput
  enrolledDegree: DegreeUpdateOneInput
}

input StudentUpdateManyMutationInput {
  name: String
}

input StudentWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  coursesPassed_every: CourseWhereInput
  coursesPassed_some: CourseWhereInput
  coursesPassed_none: CourseWhereInput
  enrolledDegree: DegreeWhereInput
  AND: [StudentWhereInput!]
  OR: [StudentWhereInput!]
  NOT: [StudentWhereInput!]
}

input StudentWhereUniqueInput {
  id: ID
}

type Subject {
  id: ID!
  name: String!
}

type SubjectConnection {
  pageInfo: PageInfo!
  edges: [SubjectEdge]!
  aggregate: AggregateSubject!
}

input SubjectCreateInput {
  name: String!
}

input SubjectCreateOneInput {
  create: SubjectCreateInput
  connect: SubjectWhereUniqueInput
}

type SubjectEdge {
  node: Subject!
  cursor: String!
}

enum SubjectOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SubjectPreviousValues {
  id: ID!
  name: String!
}

type SubjectSubscriptionPayload {
  mutation: MutationType!
  node: Subject
  updatedFields: [String!]
  previousValues: SubjectPreviousValues
}

input SubjectSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SubjectWhereInput
  AND: [SubjectSubscriptionWhereInput!]
  OR: [SubjectSubscriptionWhereInput!]
  NOT: [SubjectSubscriptionWhereInput!]
}

input SubjectUpdateDataInput {
  name: String
}

input SubjectUpdateInput {
  name: String
}

input SubjectUpdateManyMutationInput {
  name: String
}

input SubjectUpdateOneInput {
  create: SubjectCreateInput
  update: SubjectUpdateDataInput
  upsert: SubjectUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: SubjectWhereUniqueInput
}

input SubjectUpsertNestedInput {
  update: SubjectUpdateDataInput!
  create: SubjectCreateInput!
}

input SubjectWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [SubjectWhereInput!]
  OR: [SubjectWhereInput!]
  NOT: [SubjectWhereInput!]
}

input SubjectWhereUniqueInput {
  id: ID
}

type Subscription {
  course(where: CourseSubscriptionWhereInput): CourseSubscriptionPayload
  degree(where: DegreeSubscriptionWhereInput): DegreeSubscriptionPayload
  department(where: DepartmentSubscriptionWhereInput): DepartmentSubscriptionPayload
  student(where: StudentSubscriptionWhereInput): StudentSubscriptionPayload
  subject(where: SubjectSubscriptionWhereInput): SubjectSubscriptionPayload
}
`