export interface UAAItem {
  title: string;
  version: string;
  code: string;
  icon: string;
}

export interface UAAResult {
  browser: UAAItem;
  device: UAAItem | undefined;
  os: UAAItem;
}
