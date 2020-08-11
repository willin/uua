import detectBrowser from './browser';
import detectDevice from './device';
import detectOs from './os';
import detectCountry from './ip2c';
import { UAAResult } from './types';

export default function uua(ua = ''): UAAResult {
  return {
    browser: detectBrowser(ua),
    device: detectDevice(ua),
    os: detectOs(ua)
  };
}
export const ip2c = detectCountry;
