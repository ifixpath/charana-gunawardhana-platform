import { authorizeAdmin } from '../../_lib/admin-auth.js'
import { getAdminProgram } from '../../_lib/admin-programs.js'

const noStore = { 'cache-control': 'no-store' }

export async function GET(request: Request): Promise<Response> {
  const auth = await authorizeAdmin(request)

  if (auth.status !== 200) {
    return Response.json(auth.body, { status: auth.status, headers: noStore })
  }

  const result = await getAdminProgram(request)

  return Response.json(result.body, {
    status: result.status,
    headers: noStore,
  })
}
