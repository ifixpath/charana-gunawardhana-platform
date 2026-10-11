import { authorizeAdmin } from '../_lib/admin-auth.js'

export async function GET(request: Request): Promise<Response> {
  const result = await authorizeAdmin(request)

  return Response.json(result.body, {
    status: result.status,
    headers: { 'cache-control': 'no-store' },
  })
}
