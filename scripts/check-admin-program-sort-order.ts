import { parseAdminProgramDetail } from '../api/_lib/admin-programs.js'
import { parseAdminProgramDetailResponse } from '../src/admin/adminProgramDetail.js'

const id = '20dd00a2-8ba6-4782-8596-c77d521a71c9'

function storedProgram(sortOrder: unknown) {
  return {
    id,
    slug: 'paradigm-shifting-for-abundance',
    official_name: 'Paradigm Shifting for Abundance',
    format_id: 'recordedCourse',
    path: '/programs/paradigm-shifting-for-abundance',
    status: 'published',
    sort_order: sortOrder,
    updated_at: '2026-10-05T00:00:00.000Z',
  }
}

function responseBody(sortOrder: unknown) {
  return {
    program: {
      id,
      slug: 'paradigm-shifting-for-abundance',
      officialName: 'Paradigm Shifting for Abundance',
      formatId: 'recordedCourse',
      path: '/programs/paradigm-shifting-for-abundance',
      status: 'published',
      sortOrder,
      updatedAt: '2026-10-05T00:00:00.000Z',
      translations: [],
    },
  }
}

function expectInteger(sortOrder: number) {
  const stored = parseAdminProgramDetail(storedProgram(sortOrder), [])
  const response = parseAdminProgramDetailResponse(responseBody(sortOrder))

  if (stored?.sortOrder !== sortOrder || response?.sortOrder !== sortOrder) {
    throw new Error(`Integer sort_order ${sortOrder} was rejected`)
  }
}

function expectNonInteger(sortOrder: unknown) {
  if (parseAdminProgramDetail(storedProgram(sortOrder), []) !== null) {
    throw new Error('API parser accepted a non-integer sort_order')
  }

  if (parseAdminProgramDetailResponse(responseBody(sortOrder)) !== null) {
    throw new Error('Client parser accepted a non-integer sort_order')
  }
}

expectInteger(-1)
expectInteger(0)

for (const sortOrder of [1.5, -1.5, Number.NaN, '-1']) {
  expectNonInteger(sortOrder)
}

console.log('SORT_ORDER_CHECKS_OK')
