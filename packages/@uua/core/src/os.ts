/* eslint-disable @typescript-eslint/prefer-regexp-exec */
import { UAAItem } from './types';

export default function detectOs(ua: string): UAAItem {
  let version: string | null = null;
  let title = '';
  let code = '';

  if (/AmigaOS/i.test(ua)) {
    title = 'AmigaOS';

    if (/AmigaOS ([.0-9a-zA-Z]+)/i.test(ua)) {
      const [matched = ''] = /AmigaOS ([.0-9a-zA-Z]+)/i.exec(ua) || [];
      version = matched;
    }

    code = 'amigaos';
  } else if (/Android/i.test(ua)) {
    title = 'Android';
    code = 'android';

    if (/Android[ |/]?([.0-9a-zA-Z]+)/i.test(ua)) {
      const [matched = ''] = /Android[ |/]?([.0-9a-zA-Z]+)/i.exec(ua) || [];
      version = matched;
    }
  } else if (/[^A-Za-z]Arch/i.test(ua)) {
    title = 'Arch Linux';
    code = 'archlinux';
  } else if (/BeOS/i.test(ua)) {
    title = 'BeOS';
    code = 'beos';
  } else if (/CentOS/i.test(ua)) {
    title = 'CentOS';

    if (/.el([.0-9a-zA-Z]+).centos/i.test(ua)) {
      const [, matched = ''] = ua.match(/.el([.0-9a-zA-Z]+).centos/i) || [];
      version = matched;
    }

    code = 'centos';
  } else if (/Chakra/i.test(ua)) {
    title = 'Chakra Linux';
    code = 'chakra';
  } else if (/CrOS/i.test(ua)) {
    title = 'Google Chrome OS';
    code = 'chromeos';
  } else if (/Crunchbang/i.test(ua)) {
    title = 'Crunchbang';
    code = 'crunchbang';
  } else if (/Debian/i.test(ua)) {
    title = 'Debian GNU/Linux';
    code = 'debian';
  } else if (/DragonFly/i.test(ua)) {
    title = 'DragonFly BSD';
    code = 'dragonflybsd';
  } else if (/Edubuntu/i.test(ua)) {
    title = 'Edubuntu';

    if (/Edubuntu[/| ]([.0-9a-zA-Z]+)/i.test(ua)) {
      const [, matched = ''] = ua.match(/Edubuntu[/| ]([.0-9a-zA-Z]+)/i) || [];
      version = matched;
      if (Number(matched) < 10) {
        code = 'edubuntu-1';
      } else {
        code = 'edubuntu-2';
      }
    }
  } else if (/Fedora/i.test(ua)) {
    title = 'Fedora';

    if (/\.fc([.0-9a-zA-Z]+)/i.test(ua)) {
      const [, matched = ''] = ua.match(/\.fc([.0-9a-zA-Z]+)/i) || [];
      version = matched;
    }

    code = 'fedora';
  } else if (/Foresight Linux/i.test(ua)) {
    title = 'Foresight Linux';

    if (/Foresight Linux\/([.0-9a-zA-Z]+)/i.test(ua)) {
      const [, matched = ''] = ua.match(/Foresight Linux\/([.0-9a-zA-Z]+)/i) || [];
      version = matched;
    }

    code = 'foresight';
  } else if (/FreeBSD/i.test(ua)) {
    title = 'FreeBSD';
    code = 'freebsd';
  } else if (/Gentoo/i.test(ua)) {
    title = 'Gentoo';
    code = 'gentoo';
  } else if (/Inferno/i.test(ua)) {
    title = 'Inferno';
    code = 'inferno';
  } else if (/IRIX/i.test(ua)) {
    title = 'IRIX Linux';

    if (/IRIX(64)? ([.0-9a-zA-Z]+)/i.test(ua)) {
      const [, m1, m2] = ua.match(/IRIX(64)? ([.0-9a-zA-Z]+)/i) || [];
      if (m2) {
        version = m2;
      }
      if (m1) {
        version = `x64 ${version || ''}`;
      }
    }

    code = 'irix';
  } else if (/Kanotix/i.test(ua)) {
    title = 'Kanotix';
    code = 'kanotix';
  } else if (/Knoppix/i.test(ua)) {
    title = 'Knoppix';
    code = 'knoppix';
  } else if (/Kubuntu/i.test(ua)) {
    title = 'Kubuntu';

    if (/Kubuntu[/| ]([.0-9a-zA-Z]+)/i.test(ua)) {
      const [, matched = ''] = ua.match(/Kubuntu[/| ]([.0-9a-zA-Z]+)/i) || [];
      version = matched;
      if (Number(matched) < 10) {
        code = 'kubuntu-1';
      } else {
        code = 'kubuntu-2';
      }
    }
  } else if (/LindowsOS/i.test(ua)) {
    title = 'LindowsOS';
    code = 'lindowsos';
  } else if (/Linspire/i.test(ua)) {
    title = 'Linspire';
    code = 'lindowsos';
  } else if (/Linux Mint/i.test(ua)) {
    title = 'Linux Mint';

    if (/Linux Mint\/([.0-9a-zA-Z]+)/i.test(ua)) {
      const [, matched = ''] = ua.match(/Linux Mint\/([.0-9a-zA-Z]+)/i) || [];
      version = matched;
    }

    code = 'linuxmint';
  } else if (/Lubuntu/i.test(ua)) {
    title = 'Lubuntu';

    if (/Lubuntu[/| ]([.0-9a-zA-Z]+)/i.test(ua)) {
      const [, matched = ''] = ua.match(/Lubuntu[/| ]([.0-9a-zA-Z]+)/i) || [];
      version = matched;
      if (Number(matched) < 10) {
        code = 'lubuntu-1';
      } else {
        code = 'lubuntu-2';
      }
    }
  } else if (/Mac/i.test(ua) || /Darwin/i.test(ua)) {
    title = 'Mac';

    if (/Mac OS X/i.test(ua) || /Mac OSX/i.test(ua)) {
      const temp = ua.toLowerCase();
      if (/Mac OS X/i.test(ua)) {
        const [matched = ''] = temp.substr(temp.indexOf('os x') + 5).split(';');
        version = matched;
        code = 'mac-3';
      } else {
        const [matched = ''] = temp.substr(temp.indexOf('osx') + 4).split(';');
        version = matched;
        code = 'mac-2';
      }
      version = `OS X ${(version || '').replace(/_/g, '.')}`;
    } else if (/Darwin/i.test(ua)) {
      version = 'OS Darwin';
      code = 'mac-1';
    } else {
      title = 'Macintosh';
      code = 'mac-1';
    }
  } else if (/Mageia/i.test(ua)) {
    title = 'Mageia';
    code = 'mageia';
  } else if (/Mandriva/i.test(ua)) {
    title = 'Mandriva';

    if (/mdv([.0-9a-zA-Z]+)/i.test(ua)) {
      const [, matched = ''] = ua.match(/mdv([.0-9a-zA-Z]+)/i) || [];
      version = matched;
    }

    code = 'mandriva';
  } else if (/moonOS/i.test(ua)) {
    title = 'moonOS';

    if (/moonOS\/([.0-9a-zA-Z]+)/i.test(ua)) {
      const [, matched = ''] = ua.match(/moonOS\/([.0-9a-zA-Z]+)/i) || [];
      version = matched;
    }

    code = 'moonos';
  } else if (/MorphOS/i.test(ua)) {
    title = 'MorphOS';
    code = 'morphos';
  } else if (/NetBSD/i.test(ua)) {
    title = 'NetBSD';
    code = 'netbsd';
  } else if (/Nova/i.test(ua)) {
    title = 'Nova';

    if (/Nova[/| ]([.0-9a-zA-Z]+)/i.test(ua)) {
      const [, matched = ''] = ua.match(/Nova[/| ]([.0-9a-zA-Z]+)/i) || [];
      version = matched;
    }

    code = 'nova';
  } else if (/OpenBSD/i.test(ua)) {
    title = 'OpenBSD';
    code = 'openbsd';
  } else if (/Oracle/i.test(ua)) {
    title = 'Oracle';

    if (/.el([._0-9a-zA-Z]+)/i.test(ua)) {
      const [, matched = ''] = ua.match(/.el([._0-9a-zA-Z]+)/i) || [];
      title += ' Enterprise Linux';
      version = matched.replace(/_/g, '.');
    } else {
      title += ' Linux';
    }

    code = 'oracle';
  } else if (/Pardus/i.test(ua)) {
    title = 'Pardus';
    code = 'pardus';
  } else if (/PCLinuxOS/i.test(ua)) {
    title = 'PCLinuxOS';

    if (/PCLinuxOS\/[.-0-9a-zA-Z]+pclos([.-0-9a-zA-Z]+)/i.test(ua)) {
      const [, matched = ''] = ua.match(/PCLinuxOS\/[.-0-9a-zA-Z]+pclos([.-0-9a-zA-Z]+)/i) || [];
      version = matched.replace(/_/g, '.');
    }

    code = 'pclinuxos';
  } else if (/Red Hat/i.test(ua) || /RedHat/i.test(ua)) {
    title = 'Red Hat';

    if (/.el([._0-9a-zA-Z]+)/i.test(ua)) {
      title += ' Enterprise Linux';
      const [, matched = ''] = ua.match(/.el([._0-9a-zA-Z]+)/i) || [];
      version = matched.replace(/_/g, '.');
    }

    code = 'red-hat';
  } else if (/Rosa/i.test(ua)) {
    title = 'Rosa Linux';
    code = 'rosa';
  } else if (/Sabayon/i.test(ua)) {
    title = 'Sabayon Linux';
    code = 'sabayon';
  } else if (/Slackware/i.test(ua)) {
    title = 'Slackware';
    code = 'slackware';
  } else if (/Solaris/i.test(ua)) {
    title = 'Solaris';
    code = 'solaris';
  } else if (/SunOS/i.test(ua)) {
    title = 'Solaris';
    code = 'solaris';
  } else if (/Suse/i.test(ua)) {
    title = 'openSUSE';
    code = 'suse';
  } else if (/Symb[ian]?[OS]?/i.test(ua)) {
    title = 'SymbianOS';

    if (/Symb[ian]?[OS]?\/([.0-9a-zA-Z]+)/i.test(ua)) {
      const [, matched = ''] = ua.match(/Symb[ian]?[OS]?\/([.0-9a-zA-Z]+)/i) || [];
      version = matched;
    }

    code = 'symbianos';
  } else if (/Unix/i.test(ua)) {
    title = 'Unix';
    code = 'unix';
  } else if (/VectorLinux/i.test(ua)) {
    title = 'VectorLinux';
    code = 'vectorlinux';
  } else if (/Venenux/i.test(ua)) {
    title = 'Venenux GNU Linux';
    code = 'venenux';
  } else if (/webOS/i.test(ua)) {
    title = 'Palm webOS';
    code = 'palm';
  } else if (/Windows/i.test(ua) || /WinNT/i.test(ua) || /Win32/i.test(ua)) {
    title = 'Windows';

    if (/Windows NT 10.0/i.test(ua) || /Windows NT 6.4/i.test(ua)) {
      version = '10';
      code = 'win-6';
    } else if (/Windows NT 6.3/i.test(ua)) {
      version = '8.1';
      code = 'win-5';
    } else if (/Windows NT 6.2/i.test(ua)) {
      version = '8';
      code = 'win-5';
    } else if (/Windows NT 6.1/i.test(ua)) {
      version = '7';
      code = 'win-4';
    } else if (/Windows NT 6.0/i.test(ua)) {
      version = 'Vista';
      code = 'win-3';
    } else if (/Windows NT 5.2 x64/i.test(ua)) {
      version = 'XP'; // x64 Edition very similar to Win 2003
      code = 'win-2';
    } else if (/Windows NT 5.2/i.test(ua)) {
      version = 'Server 2003';
      code = 'win-2';
    } else if (/Windows NT 5.1/i.test(ua) || /Windows XP/i.test(ua)) {
      version = 'XP';
      code = 'win-2';
    } else if (/Windows NT 5.01/i.test(ua)) {
      version = '2000, Service Pack 1 (SP1)';
      code = 'win-1';
    } else if (/Windows NT 5.0/i.test(ua) || /Windows NT5/i.test(ua) || /Windows 2000/i.test(ua)) {
      version = '2000';
      code = 'win-1';
    } else if (/Windows NT 4.0/i.test(ua) || /WinNT4.0/i.test(ua)) {
      version = 'NT 4.0';
      code = 'win-1';
    } else if (/Windows NT 3.51/i.test(ua) || /WinNT3.51/i.test(ua)) {
      version = 'NT 3.11';
      code = 'win-1';
    } else if (/Windows NT/i.test(ua) || /WinNT/i.test(ua)) {
      version = 'NT';
      code = 'win-1';
    } else if (/Windows 3.11/i.test(ua) || /Win3.11/i.test(ua) || /Win16/i.test(ua)) {
      version = '3.11';
      code = 'win-1';
    } else if (/Windows 3.1/i.test(ua)) {
      version = '3.1';
      code = 'win-1';
    } else if (/Windows 98; Win 9x 4.90/i.test(ua) || /Win 9x 4.90/i.test(ua) || /Windows ME/i.test(ua)) {
      version = 'Millennium Edition (Windows Me)';
      code = 'win-1';
    } else if (/Win98/i.test(ua)) {
      version = '98 SE';
      code = 'win-1';
    } else if (/Windows 98/i.test(ua) || /Windows 4.10/i.test(ua)) {
      version = '98';
      code = 'win-1';
    } else if (/Windows 95/i.test(ua) || /Win95/i.test(ua)) {
      version = '95';
      code = 'win-1';
    } else if (/Windows CE/i.test(ua)) {
      version = 'CE';
      code = 'win-2';
    } else if (/WM5/i.test(ua)) {
      version = 'Mobile 5';
      code = 'win-phone';
    } else if (/WindowsMobile/i.test(ua)) {
      version = 'Mobile';
      code = 'win-phone';
    } else {
      code = 'win-2';
    }
  } else if (/Xandros/i.test(ua)) {
    title = 'Xandros';
    code = 'xandros';
  } else if (/Xubuntu/i.test(ua)) {
    title = 'Xubuntu';

    if (/Xubuntu[/| ]([.0-9a-zA-Z]+)/i.test(ua)) {
      const [, matched = ''] = ua.match(/Xubuntu[/| ]([.0-9a-zA-Z]+)/i) || [];
      version = matched;
      if (Number(matched) < 10) {
        code = 'xubuntu-1';
      } else {
        code = 'xubuntu-2';
      }
    }
  } else if (/Zenwalk/i.test(ua)) {
    title = 'Zenwalk GNU Linux';
    code = 'zenwalk';
  }

  // Pulled out of order to help ensure better detection for above platforms
  else if (/Ubuntu/i.test(ua)) {
    title = 'Ubuntu';

    if (/Ubuntu[/| ]([.0-9]+[.0-9a-zA-Z]+)/i.test(ua)) {
      const [, matched = ''] = ua.match(/Ubuntu[/| ]([.0-9]+[.0-9a-zA-Z]+)/i) || [];
      version = matched;
      if (Number(matched) < 10) {
        code = 'ubuntu-1';
      } else {
        code = 'ubuntu-2';
      }
    }
  } else if (/Linux/i.test(ua)) {
    title = 'GNU/Linux';
    code = 'linux';
  } else if (/J2ME\/DIMP /i.test(ua)) {
    title = 'J2ME/MIDP Device';
    code = 'java';
  }

  // No OS match
  else {
    return {
      title: 'Unknown',
      version: version || '',
      code: 'null',
      icon: `/os/null.png`
    };
  }

  // Check x64 architecture
  if (/x86_64/i.test(ua)) {
    // If version isn't null append 64 bit, otherwise set it to x64
    version = `${version || ''} x64`;
  } else if (
    (/Windows/i.test(ua) || // is Windows?
      /WinNT/i.test(ua) ||
      /Win32/i.test(ua)) &&
    (/Win64/i.test(ua) || // is x64?
      /x64/i.test(ua) ||
      /WOW64/i.test(ua))
  ) {
    version += ' x64 Edition';
  }

  return {
    title,
    version: version || '',
    code,
    icon: `/os/${code}.png`
  };
}
