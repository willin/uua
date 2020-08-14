import detectBrowser from './browser';
import detectDevice from './device';
import detectOs from './os';
import { UAAResult } from './types';

export default function uua(ua = ''): UAAResult {
  return {
    browser: detectBrowser(ua),
    device: detectDevice(ua),
    os: detectOs(ua)
  };
}
