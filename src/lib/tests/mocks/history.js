import { vi } from 'vitest';

export default {
  exists: vi.fn(() => false),
  write: vi.fn(),
};
