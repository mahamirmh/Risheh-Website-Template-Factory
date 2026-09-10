import { readFile } from 'node:fs/promises';
import path from 'node:path';
import YAML from 'yaml';
import type { FactoryCatalog } from '@/types/factory';

type IndustryCatalogFile = { version: string; industries: FactoryCatalog['industries'] };
type DesignCatalogFile = { profiles: FactoryCatalog['designDna'] };
type PatternCatalogFile = { patterns: FactoryCatalog['patterns'] };

async function readYaml<T>(relativePath: string): Promise<T> {
  const absolutePath = path.join(process.cwd(), relativePath);
  const raw = await readFile(absolutePath, 'utf8');
  return YAML.parse(raw) as T;
}

export async function loadFactoryCatalog(): Promise<FactoryCatalog> {
  const [industryFile, designFile, patternFile] = await Promise.all([
    readYaml<IndustryCatalogFile>('industries/catalog.yaml'),
    readYaml<DesignCatalogFile>('design-dna/catalog.yaml'),
    readYaml<PatternCatalogFile>('patterns/catalog.yaml'),
  ]);

  return {
    version: industryFile.version,
    industries: industryFile.industries,
    designDna: designFile.profiles,
    patterns: patternFile.patterns,
  };
}
