import { GeneratorWorkspace } from '@/components/generator/GeneratorWorkspace';
import { loadFactoryCatalog } from '@/lib/catalog';

export const dynamic = 'force-static';

export default async function GeneratorPage() {
  const catalog = await loadFactoryCatalog();
  return <GeneratorWorkspace catalog={catalog} />;
}
