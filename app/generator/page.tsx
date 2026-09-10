import { GeneratorWithCodegen } from '@/components/generator/GeneratorWithCodegen';
import { loadFactoryCatalog } from '@/lib/catalog';

export const dynamic = 'force-static';

export default async function GeneratorPage() {
  const catalog = await loadFactoryCatalog();
  return <GeneratorWithCodegen catalog={catalog} />;
}
