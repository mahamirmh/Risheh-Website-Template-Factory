import { NextResponse } from 'next/server';
import { validateBuildSpec } from '@/lib/validation';

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const result = validateBuildSpec(payload);
    return NextResponse.json(result, { status: result.valid ? 200 : 422 });
  } catch {
    return NextResponse.json(
      { valid: false, errors: [{ path: '/', message: 'Request body must be valid JSON.' }] },
      { status: 400 },
    );
  }
}
