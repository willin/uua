export default function detectDevice(ua) {
  let version = null;
  let title = '';
  let code = '';
  // Apple
  if (/iPad/i.test(ua)) {
    title = 'iPad';

    if (/CPU\sOS\s([._0-9a-zA-Z]+)/i.test(ua)) {
      const [, matched] = ua.match(/CPU\sOS\s([._0-9a-zA-Z]+)/i);

      version = `iOS ${matched.replace(/_/g, '.')}`;
    }

    code = 'ipad';
  } else if (/iPod/i.test(ua)) {
    title = 'iPod';

    if (/iPhone\sOS\s([._0-9a-zA-Z]+)/i.test(ua)) {
      const [, matched] = ua.match(/iPhone\sOS\s([._0-9a-zA-Z]+)/i);
      version = `iOS ${matched.replace(/_/g, '.')}`;
    }

    code = 'iphone';
  } else if (/iPhone/i.test(ua) && !/Windows Phone/i.test(ua)) {
    title = 'iPhone';

    if (/iPhone\sOS\s([._0-9a-zA-Z]+)/i.test(ua)) {
      const [, matched] = ua.match(/iPhone\sOS\s([._0-9a-zA-Z]+)/i);
      version = `iOS ${matched.replace(/_/g, '.')}`;
    }

    code = 'iphone';
  }

  // BenQ-Siemens (Openwave)
  else if (/[^M]SIE/i.test(ua)) {
    title = 'BenQ-Siemens';

    if (/[^M]SIE-([.0-9a-zA-Z]+)\//i.test(ua)) {
      const [, matched] = ua.match(/[^M]SIE-([.0-9a-zA-Z]+)\//i);
      version = matched;
    }

    code = 'benq-siemens';
  }

  // BlackBerry
  else if (/BlackBerry/i.test(ua)) {
    title = 'BlackBerry';

    if (/blackberry([.0-9a-zA-Z]+)\//i.test(ua)) {
      const [, matched] = ua.match(/blackberry([.0-9a-zA-Z]+)\//i);
      version = matched;
    }

    code = 'blackberry';
  }

  // Dell
  else if (/Dell Mini 5/i.test(ua)) {
    title = 'Dell Mini 5';
    code = 'dell';
  } else if (/Dell Streak/i.test(ua)) {
    title = 'Dell Streak';
    code = 'dell';
  } else if (/Dell/i.test(ua)) {
    title = 'Dell';
    code = 'dell';
  }

  // Google
  else if (/Nexus One/i.test(ua)) {
    title = 'Nexus One';
    code = 'google-nexusone';
  }

  // HTC
  else if (/Desire/i.test(ua)) {
    title = 'HTC Desire';
    code = 'htc';
  } else if (/Rhodium/i.test(ua) || /HTC[_|\s]Touch[_|\s]Pro2/i.test(ua) || /WMD-50433/i.test(ua)) {
    title = 'HTC Touch Pro2';
    code = 'htc';
  } else if (/HTC[_|\s]Touch[_|\s]Pro/i.test(ua)) {
    title = 'HTC Touch Pro';
    code = 'htc';
  } else if (/HTC/i.test(ua)) {
    title = 'HTC';

    if (/HTC[\s|_|-]8500/i.test(ua)) {
      title += ' Startrek';
    } else if (/HTC[\s|_|-]Hero/i.test(ua)) {
      title += ' Hero';
    } else if (/HTC[\s|_|-]Legend/i.test(ua)) {
      title += ' Legend';
    } else if (/HTC[\s|_|-]Magic/i.test(ua)) {
      title += ' Magic';
    } else if (/HTC[\s|_|-]P3450/i.test(ua)) {
      title += ' Touch';
    } else if (/HTC[\s|_|-]P3650/i.test(ua)) {
      title += ' Polaris';
    } else if (/HTC[\s|_|-]S710/i.test(ua)) {
      title += ' S710';
    } else if (/HTC[\s|_|-]Tattoo/i.test(ua)) {
      title += ' Tattoo';
    } else if (/HTC[\s|_|-]?([.0-9a-zA-Z]+)/i.test(ua)) {
      const [, matched] = ua.match(/HTC[\s|_|-]?([.0-9a-zA-Z]+)/i);
      title += ` ${matched}`; // Matche other HTC product names (possibly versions?)
    } else if (/HTC([._0-9a-zA-Z]+)/i.test(ua)) {
      const [, matched] = ua.match(/HTC([._0-9a-zA-Z]+)/i);
      title += matched.replace(/_/g, '.');
    }

    code = 'htc';
  }

  // Kindle
  else if (/Kindle/i.test(ua)) {
    title = 'Kindle';
    if (/Kindle\/([.0-9a-zA-Z]+)/i.test(ua)) {
      const [, matched] = ua.match(/Kindle\/([.0-9a-zA-Z]+)/i);
      version = matched;
    }

    code = 'kindle';
  }

  // LG
  else if (/LG/i.test(ua)) {
    title = 'LG';

    if (/LG[E]?[\s|-|/]([.0-9a-zA-Z]+)/i.test(ua)) {
      const [, matched] = ua.match(/LG[E]?[\s|-|/]([.0-9a-zA-Z]+)/i);
      version = matched;
    }

    code = 'lg';
  }

  // Microsoft
  else if (/Windows Phone OS 7/i.test(ua) || /ZuneWP7/i.test(ua) || /WP7/i.test(ua)) {
    title = 'Windows Phone';
    version = '7';
    code = 'wp7';
  } else if (/Windows Phone OS 8\.1/i.test(ua) || /Windows Phone 8\.1/i.test(ua) || /WP8\.1/i.test(ua)) {
    title = 'Windows Phone';
    version = '8.1';
    code = 'wp7';
  } else if (/Windows Phone OS 8/i.test(ua) || /Windows Phone 8/i.test(ua) || /WP8/i.test(ua)) {
    title = 'Windows Phone';
    version = '8';
    code = 'wp7';
  } else if (/Windows Phone 10/i.test(ua) || /WP10/i.test(ua)) {
    title = 'Windows Phone';
    version = '10';
    code = 'wp10';
  } else if (/Xbox/i.test(ua)) {
    title = 'Xbox';
    code = 'xbox';

    if (/Xbox\s?360/i.test(ua)) {
      title += ' 360';
      code = 'xbox';
    } else if (/XboxOne/i.test(ua)) {
      title += ' One';
      code = 'xboxone';
    }
  }

  // Motorola
  else if (/\sDroid/i.test(ua)) {
    title = 'Motorola Droid';
    code = 'motorola';
  } else if (/XT720/i.test(ua)) {
    title = 'Motorola Motoroi (XT720)';
    code = 'motorola';
  } else if (/MOT-/i.test(ua) || /MIB/i.test(ua)) {
    title = 'Motorola';

    if (/MOT[O-]([.0-9a-zA-Z]+)/i.test(ua)) {
      const [, matched] = ua.match(/MOTO([.0-9a-zA-Z]+)/i);
      version = matched;
    }

    code = 'motorola';
  } else if (/XOOM/i.test(ua)) {
    title = 'Motorola Xoom';
    code = 'motorola';
  }

  // Nintendo
  else if (/Nintendo/i.test(ua)) {
    title = 'Nintendo';

    if (/Nintendo 3DS/i.test(ua)) {
      title += ' 3DS';
      code = 'nintendods';
    } else if (/Nintendo DSi/i.test(ua)) {
      title += ' DSi';
      code = 'nintendodsi';
    } else if (/Nintendo DS/i.test(ua)) {
      title += ' DS';
      code = 'nintendods';
    } else if (/Nintendo WiiU/i.test(ua)) {
      title += ' Wii U';
      code = 'nintendowiiu';
    } else if (/Nintendo Wii/i.test(ua)) {
      title += ' Wii';
      code = 'nintendowii';
    } else {
      code = 'nintendo';
    }
  }

  // Nokia
  else if (/Nokia/i.test(ua) && !/S(eries)?60/i.test(ua)) {
    title = 'Nokia';
    if (/Nokia(E|N)?([0-9]+)/i.test(ua)) {
      const [, m1, m2] = ua.match(/Nokia(E|N)?([0-9]+)/i);
      title += ` ${m1}${m2}`;
    }
    code = 'nokia';
  } else if (/S(eries)?60/i.test(ua)) {
    title = 'Nokia Series60';
    code = 'nokia';
  }

  // OLPC (One Laptop Per Child)
  else if (/OLPC/i.test(ua)) {
    title = 'OLPC (XO)';
    code = 'olpc';
  }

  // Palm
  else if (/\sPixi\//i.test(ua)) {
    title = 'Palm Pixi';
    code = 'palm';
  } else if (/\sPre\//i.test(ua)) {
    title = 'Palm Pre';
    code = 'palm';
  } else if (/Palm/i.test(ua)) {
    title = 'Palm';
    code = 'palm';
  } else if (/wp-webos/i.test(ua)) {
    title = 'Palm';
    code = 'palm';
  }

  // Playstation
  else if (/PlayStation/i.test(ua)) {
    title = 'PlayStation';

    if (/[PS|PlayStation\s]3/i.test(ua)) {
      title += ' 3';
    } else if (/[PS|PlayStation\s]4/i.test(ua)) {
      title += ' 4';
    } else if (/[PlayStation Portable|PSP]/i.test(ua)) {
      title += ' Portable';
    } else if (/[PlayStation Vita|PSVita]/i.test(ua)) {
      title += ' Vita';
    }

    code = 'playstation';
  }

  // Samsung
  else if (/Galaxy Nexus/i.test(ua)) {
    title = 'Galaxy Nexus';
    code = 'samsung';
  } else if (/SmartTV/i.test(ua)) {
    title = 'Samsung Smart TV';
    code = 'samsung';
  } else if (/Samsung/i.test(ua)) {
    title = 'Samsung';

    if (/Samsung-([.\-0-9a-zA-Z]+)/i.test(ua)) {
      const [, matched] = ua.match(/Samsung-([.\-0-9a-zA-Z]+)/i);
      title += ` ${matched}`;
    }

    code = 'samsung';
  }

  // Sony Ericsson
  else if (/SonyEricsson/i.test(ua)) {
    title = 'Sony Ericsson';

    if (/SonyEricsson([.0-9a-zA-Z]+)/i.test(ua)) {
      const [, matched] = ua.match(/SonyEricsson([.0-9a-zA-Z]+)/i);
      if (matched.toLowerCase() === 'u20i') {
        title += ' Xperia X10 Mini Pro';
      } else {
        title += ` ${matched}`;
      }
    }

    code = 'sonyericsson';
  }

  // Ubuntu Phone/Tablet
  else if (/Ubuntu;\sMobile/i.test(ua)) {
    title = 'Ubuntu Phone';
    code = 'ubuntutouch';
  } else if (/Ubuntu;\sTablet/i.test(ua)) {
    title = 'Ubuntu Tablet';
    code = 'ubuntutouch';
  }

  // Windows Phone
  else if (/wp-windowsphone/i.test(ua)) {
    title = 'Windows Phone';
    code = 'windowsphone';
  }

  // No Device match
  else {
    return undefined;
  }

  return {
    title,
    version,
    code,
    icon: `/net/${code}.png`
  };
}
