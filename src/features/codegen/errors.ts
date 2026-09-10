export type CodegenStage =
  | 'validate-input'
  | 'resolve'
  | 'file-plan'
  | 'emit'
  | 'quality'
  | 'agent';

export class CodegenError extends Error {
  stage: CodegenStage;
  code: string;
  file?: string;
  details?: unknown;

  constructor(stage: CodegenStage, code: string, message: string, options?: { file?: string; details?: unknown }) {
    super(message);
    this.name = 'CodegenError';
    this.stage = stage;
    this.code = code;
    this.file = options?.file;
    this.details = options?.details;
  }
}

export const CODES = {
  INVALID_BUILD_SPEC: 'INVALID_BUILD_SPEC',
  UNKNOWN_DESIGN_DNA: 'UNKNOWN_DESIGN_DNA',
  UNKNOWN_PATTERN: 'UNKNOWN_PATTERN',
  UNSAFE_ROUTE: 'UNSAFE_ROUTE',
  DUPLICATE_FILE_PATH: 'DUPLICATE_FILE_PATH',
  UNSUPPORTED_INTERACTION: 'UNSUPPORTED_INTERACTION',
  QUALITY_GATE_FAILED: 'QUALITY_GATE_FAILED',
  AGENT_POLICY_VIOLATION: 'AGENT_POLICY_VIOLATION',
} as const;
