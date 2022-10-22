import { vi } from 'vitest';

export default {
  exists: vi.fn(() => false),
  write: vi.fn(),
  getHistory: vi.fn(() => []),
  allExist: vi.fn(() => false),
  empty: vi.fn(),
};
