import { vi } from 'vitest';

export default {
  exist: vi.fn(() => false),
  write: vi.fn(),
};
