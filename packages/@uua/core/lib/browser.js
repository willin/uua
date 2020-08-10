export function detectBrowserVersion(ptr, ua) {
  const regexp = new RegExp(`${ptr}[\\s|/|:]?([.0-9a-zA-Z]+)`, 'i');
  const [, matched] = ua.match(regexp);
  return matched;
}

export default function detectBrowser(ua) {
  let title = '';
  let version = null;
  let code = '';
  if (/360se/i.test(ua)) {
    title = '360Safe Explorer';
    version = '';
    code = '360se';
  } else if (/Abolimba/i.test(ua)) {
    title = 'Abolimba';
    version = '';
    code = 'abolimba';
  } else if (/Acoo\sBrowser/i.test(ua)) {
    title = 'Acoo Browser';
    version = detectBrowserVersion('Browser');
    code = 'acoobrowser';
  } else if (/Alienforce/i.test(ua)) {
    title = 'Alienforce';
    code = 'alienforce';
  } else if (/Amaya/i.test(ua)) {
    title = 'Amaya';
    code = 'amaya';
  } else if (/Amiga-AWeb/i.test(ua)) {
    title = 'Amiga AWeb';
    version = detectBrowserVersion('AWeb');
    code = 'amiga-aweb';
  } else if (/MRCHROME/i.test(ua)) {
    title = 'Amigo';
    version = '';
    code = 'amigo';
  } else if (/America\sOnline\sBrowser/i.test(ua)) {
    title = 'America Online Browser';
    version = detectBrowserVersion('Browser');
    code = 'aol';
  } else if (/AmigaVoyager/i.test(ua)) {
    title = 'Amiga Voyager';
    version = detectBrowserVersion('Voyager');
    code = 'amigavoyager';
  } else if (/ANTFresco/i.test(ua)) {
    title = 'ANT Fresco';
    version = detectBrowserVersion('Fresco');
    code = 'antfresco';
  } else if (/AOL/i.test(ua)) {
    title = 'AOL';
    code = 'aol';
  } else if (/Arora/i.test(ua)) {
    title = 'Arora';
    code = 'arora';
  } else if (/AtomicBrowser/i.test(ua)) {
    title = 'Atomic Web Browser';
    version = detectBrowserVersion('AtomicBrowser');
    code = 'atomicwebbrowser';
  } else if (/Avant\sBrowser/i.test(ua)) {
    title = 'Avant Browser';
    version = detectBrowserVersion('Browser');
    code = 'avantbrowser';
  } else if (/WhiteHat\sAviator/i.test(ua)) {
    title = 'Aviator';
    code = 'aviator';
  } else if (/baidubrowser/i.test(ua)) {
    title = 'Baidu Browser';
    version = detectBrowserVersion('Browser');
    code = 'baidubrowser';
  } else if (/\sSpark/i.test(ua)) {
    title = 'Baidu Spark';
    version = detectBrowserVersion('Spark');
    code = 'baiduspark';
  } else if (/BarcaPro/i.test(ua)) {
    title = 'Barca Pro';
    version = detectBrowserVersion('BarcaPro');
    code = 'barca';
  } else if (/Barca/i.test(ua)) {
    title = 'Barca';
    code = 'barca';
  } else if (/Beamrise/i.test(ua)) {
    title = 'Beamrise';
    code = 'beamrise';
  } else if (/Beonex/i.test(ua)) {
    title = 'Beonex';
    code = 'beonex';
  } else if (/BlackBerry/i.test(ua)) {
    title = 'BlackBerry';
    code = 'blackberry';
  } else if (/Blackbird/i.test(ua)) {
    title = 'Blackbird';
    code = 'blackbird';
  } else if (/BlackHawk/i.test(ua)) {
    title = 'BlackHawk';
    code = 'blackhawk';
  } else if (/Blazer/i.test(ua)) {
    title = 'Blazer';
    code = 'blazer';
  } else if (/Bolt/i.test(ua)) {
    title = 'Bolt';
    code = 'bolt';
  } else if (/BonEcho/i.test(ua)) {
    title = 'BonEcho';
    code = 'firefoxdevpre';
  } else if (/BrowseX/i.test(ua)) {
    title = 'BrowseX';
    version = '';
    code = 'browsex';
  } else if (/Browzar/i.test(ua)) {
    title = 'Browzar';
    code = 'browzar';
  } else if (/Bunjalloo/i.test(ua)) {
    title = 'Bunjalloo';
    code = 'bunjalloo';
  } else if (/Camino/i.test(ua)) {
    title = 'Camino';
    code = 'camino';
  } else if (/Cayman\sBrowser/i.test(ua)) {
    title = 'Cayman Browser';
    version = detectBrowserVersion('Browser');
    code = 'caymanbrowser';
  } else if (/Charon/i.test(ua)) {
    title = 'Charon';
    code = 'null';
  } else if (/Cheshire/i.test(ua)) {
    title = 'Cheshire';
    code = 'aol';
  } else if (/Chimera/i.test(ua)) {
    title = 'Chimera';
    code = 'null';
  } else if (/chromeframe/i.test(ua)) {
    title = 'Google Chrome Frame';
    version = detectBrowserVersion('chromeframe');
    code = 'google';
  } else if (/ChromePlus/i.test(ua)) {
    title = 'ChromePlus';
    code = 'chromeplus';
  } else if (/Iron/i.test(ua)) {
    title = 'SRWare Iron';
    version = detectBrowserVersion('Iron');
    code = 'srwareiron';
  } else if (/Chromium/i.test(ua)) {
    title = 'Chromium';
    code = 'chromium';
  } else if (/Classilla/i.test(ua)) {
    title = 'Classilla';
    version = detectBrowserVersion(' rv');
    code = 'classilla';
  } else if (/Coast/i.test(ua)) {
    title = 'Coast';
    code = 'coast';
  } else if (/coc_coc_browser/i.test(ua)) {
    title = 'Coc Coc';
    version = detectBrowserVersion('coc_coc_browser');
    code = 'coccoc';
  } else if (/Columbus/i.test(ua)) {
    title = 'Columbus';
    code = 'columbus';
  } else if (/CometBird/i.test(ua)) {
    title = 'CometBird';
    code = 'cometbird';
  } else if (/Comodo_Dragon/i.test(ua)) {
    title = 'Comodo Dragon';
    version = detectBrowserVersion('Dragon');
    code = 'comodo-dragon';
  } else if (/Conkeror/i.test(ua)) {
    title = 'Conkeror';
    code = 'conkeror';
  } else if (/CoolNovo/i.test(ua)) {
    title = 'CoolNovo';
    code = 'coolnovo';
  } else if (/CoRom/i.test(ua)) {
    title = 'CoRom';
    code = 'corom';
  } else if (/Crazy\sBrowser/i.test(ua)) {
    title = 'Crazy Browser';
    version = detectBrowserVersion('Browser');
    code = 'crazybrowser';
  } else if (/CrMo/i.test(ua)) {
    title = 'Chrome Mobile';
    version = detectBrowserVersion('CrMo');
    code = 'chrome';
  } else if (/CriOS/i.test(ua)) {
    title = 'Chrome';
    version = detectBrowserVersion('CriOS');
    code = 'chrome';
  } else if (/Cruz/i.test(ua)) {
    title = 'Cruz';
    code = 'cruz';
  } else if (/Cyberdog/i.test(ua)) {
    title = 'Cyberdog';
    code = 'cyberdog';
  } else if (/Deepnet\sExplorer/i.test(ua)) {
    title = 'Deepnet Explorer';
    code = 'deepnetexplorer';
  } else if (/Demeter/i.test(ua)) {
    title = 'Demeter';
    code = 'demeter';
  } else if (/DeskBrowse/i.test(ua)) {
    title = 'DeskBrowse';
    code = 'deskbrowse';
  } else if (/Dillo/i.test(ua)) {
    title = 'Dillo';
    code = 'dillo';
  } else if (/DoCoMo/i.test(ua)) {
    title = 'DoCoMo';
    code = 'null';
  } else if (/DocZilla/i.test(ua)) {
    title = 'DocZilla';
    code = 'doczilla';
  } else if (/Dolfin/i.test(ua)) {
    title = 'Dolfin';
    code = 'samsung';
  } else if (/Dooble/i.test(ua)) {
    title = 'Dooble';
    code = 'dooble';
  } else if (/Doris/i.test(ua)) {
    title = 'Doris';
    code = 'doris';
  } else if (/Dorothy/i.test(ua)) {
    title = 'Dorothy';
    code = 'dorothybrowser';
  } else if (/DPlus/i.test(ua)) {
    version = detectBrowserVersion('DPlus');
    title = 'D+';
    code = 'dillo';
  } else if (/Edbrowse/i.test(ua)) {
    title = 'Edbrowse';
    code = 'edbrowse';
  } else if (/Element\sBrowser/i.test(ua)) {
    title = 'Element Browser';
    version = detectBrowserVersion('Browser');
    code = 'elementbrowser';
  } else if (/Elinks/i.test(ua)) {
    title = 'Elinks';
    code = 'elinks';
  } else if (/Enigma\sBrowser/i.test(ua)) {
    title = 'Enigma Browser';
    version = detectBrowserVersion('Browser');
    code = 'enigmabrowser';
  } else if (/EnigmaFox/i.test(ua)) {
    title = 'EnigmaFox';
    code = 'null';
  } else if (/Epic/i.test(ua)) {
    title = 'Epic';
    code = 'epicbrowser';
  } else if (/Epiphany/i.test(ua)) {
    title = 'Epiphany';
    code = 'epiphany';
  } else if (/Escape/i.test(ua)) {
    title = 'Espial TV Browser';
    code = 'espialtvbrowser';
  } else if (/Espial/i.test(ua)) {
    title = 'Espial TV Browser';
    code = 'espialtvbrowser';
  } else if (/Fennec/i.test(ua)) {
    title = 'Fennec';
    code = 'fennec';
  } else if (/Firebird/i.test(ua)) {
    title = 'Firebird';
    code = 'firebird';
  } else if (/Fireweb\sNavigator/i.test(ua)) {
    title = 'Fireweb Navigator';
    code = 'firewebnavigator';
  } else if (/Flock/i.test(ua)) {
    title = 'Flock';
    code = 'flock';
  } else if (/Fluid/i.test(ua)) {
    title = 'Fluid';
    code = 'fluid';
  } else if (/Galaxy/i.test(ua) && !/Chrome/i.test(ua)) {
    title = 'Galaxy';
    code = 'galaxy';
  } else if (/Galeon/i.test(ua)) {
    title = 'Galeon';
    code = 'galeon';
  } else if (/GlobalMojo/i.test(ua)) {
    title = 'GlobalMojo';
    code = 'globalmojo';
  } else if (/GoBrowser/i.test(ua)) {
    title = 'GO Browser';
    version = detectBrowserVersion('Browser');
    code = 'gobrowser';
  } else if (/Google\sWireless\sTranscoder/i.test(ua)) {
    title = 'Google Wireless Transcoder';
    version = '';
    code = 'google';
  } else if (/GoSurf/i.test(ua)) {
    title = 'GoSurf';
    code = 'gosurf';
  } else if (/GranParadiso/i.test(ua)) {
    title = 'GranParadiso';
    code = 'firefoxdevpre';
  } else if (/GreenBrowser/i.test(ua)) {
    title = 'GreenBrowser';
    code = 'greenbrowser';
  } else if (/GSA/i.test(ua) && /Mobile/i.test(ua)) {
    title = 'Google Search App';
    version = detectBrowserVersion('GSA');
    code = 'google';
  } else if (/Hana/i.test(ua)) {
    title = 'Hana';
    code = 'hana';
  } else if (/HotJava/i.test(ua)) {
    title = 'HotJava';
    code = 'hotjava';
  } else if (/Hv3/i.test(ua)) {
    title = 'Hv3';
    code = 'hv3';
  } else if (/Hydra\sBrowser/i.test(ua)) {
    title = 'Hydra Browser';
    version = '';
    code = 'hydrabrowser';
  } else if (/Iris/i.test(ua)) {
    title = 'Iris';
    code = 'iris';
  } else if (/IBM\sWebExplorer/i.test(ua)) {
    title = 'IBM WebExplorer';
    version = detectBrowserVersion('WebExplorer');
    code = 'ibmwebexplorer';
  } else if (/IBrowse/i.test(ua) && !/MiuiBrowser/i.test(ua)) {
    title = 'IBrowse';
    code = 'ibrowse';
  } else if (/iCab/i.test(ua)) {
    title = 'iCab';
    code = 'icab';
  } else if (/Ice Browser/i.test(ua)) {
    title = 'Ice Browser';
    code = 'icebrowser';
  } else if (/Iceape/i.test(ua)) {
    title = 'Iceape';
    code = 'iceape';
  } else if (/IceCat/i.test(ua)) {
    title = 'GNU IceCat';
    version = detectBrowserVersion('IceCat');
    code = 'icecat';
  } else if (/IceDragon/i.test(ua)) {
    title = 'IceDragon';
    code = 'icedragon';
  } else if (/IceWeasel/i.test(ua)) {
    title = 'IceWeasel';
    code = 'iceweasel';
  } else if (/IEMobile/i.test(ua)) {
    title = 'IEMobile';
    code = 'msie-mobile';
  } else if (/iNet\sBrowser/i.test(ua)) {
    title = 'iNet Browser';
    version = detectBrowserVersion('Browser');
    code = 'null';
  } else if (/iRider/i.test(ua)) {
    title = 'iRider';
    code = 'irider';
  } else if (/Iron/i.test(ua)) {
    title = 'Iron';
    code = 'iron';
  } else if (/InternetSurfboard/i.test(ua)) {
    title = 'InternetSurfboard';
    code = 'internetsurfboard';
  } else if (/Jasmine/i.test(ua)) {
    title = 'Jasmine';
    code = 'samsung';
  } else if (/K-Meleon/i.test(ua)) {
    title = 'K-Meleon';
    code = 'kmeleon';
  } else if (/K-Ninja/i.test(ua)) {
    title = 'K-Ninja';
    code = 'kninja';
  } else if (/Kapiko/i.test(ua)) {
    title = 'Kapiko';
    code = 'kapiko';
  } else if (/Kazehakase/i.test(ua)) {
    title = 'Kazehakase';
    code = 'kazehakase';
  } else if (/Kinza/i.test(ua)) {
    title = 'Kinza';
    code = 'kinza';
  } else if (/Strata/i.test(ua)) {
    title = 'Kirix Strata';
    version = detectBrowserVersion('Strata');
    code = 'kirix-strata';
  } else if (/KKman/i.test(ua)) {
    title = 'KKman';
    code = 'kkman';
  } else if (/KMail/i.test(ua)) {
    title = 'KMail';
    code = 'kmail';
  } else if (/KMLite/i.test(ua)) {
    title = 'KMLite';
    code = 'kmeleon';
  } else if (/Konqueror/i.test(ua)) {
    title = 'Konqueror';
    code = 'konqueror';
  } else if (/Kylo/i.test(ua)) {
    title = 'Kylo';
    code = 'kylo';
  } else if (/LBrowser/i.test(ua)) {
    title = 'LBrowser';
    code = 'lbrowser';
  } else if (/LG Browser/i.test(ua)) {
    title = 'LG Web Browser';
    version = detectBrowserVersion('Browser');
    code = 'lgbrowser';
  } else if (/LeechCraft/i.test(ua)) {
    title = 'LeechCraft';
    version = '';
    code = 'null';
  } else if (/Links/i.test(ua) && !/online\slink\svalidator/i.test(ua)) {
    version = detectBrowserVersion('Links \\(');
    title = 'Links';
    code = 'links';
  } else if (/Lobo/i.test(ua)) {
    title = 'Lobo';
    code = 'lobo';
  } else if (/lolifox/i.test(ua)) {
    title = 'lolifox';
    code = 'lolifox';
  } else if (/Lorentz/i.test(ua)) {
    title = 'Lorentz';
    code = 'firefoxdevpre';
  } else if (/luakit/i.test(ua)) {
    title = 'luakit';
    version = '';
    code = 'luakit';
  } else if (/Lunascape/i.test(ua)) {
    title = 'Lunascape';
    code = 'lunascape';
  } else if (/Lynx/i.test(ua)) {
    title = 'Lynx';
    code = 'lynx';
  } else if (/Madfox/i.test(ua)) {
    title = 'Madfox';
    code = 'madfox';
  } else if (/Maemo\sBrowser/i.test(ua)) {
    title = 'Maemo Browser';
    code = 'maemo';
  } else if (/Maxthon/i.test(ua)) {
    title = 'Maxthon';
    code = 'maxthon';
  } else if (/\sMIB\//i.test(ua)) {
    title = 'MIB';
    code = 'mib';
  } else if (/Tablet\sbrowser/i.test(ua)) {
    title = 'MicroB';
    version = detectBrowserVersion('Tablet browser');
    code = 'microb';
  } else if (/Midori/i.test(ua)) {
    title = 'Midori';
    code = 'midori';
  } else if (/ min\//i.test(ua)) {
    title = 'Min Browser';
    version = detectBrowserVersion('min');
    code = 'min';
  } else if (/Minefield/i.test(ua)) {
    title = 'Minefield';
    code = 'minefield';
  } else if (/MiniBrowser/i.test(ua)) {
    title = 'MiniBrowser';
    code = 'minibrowser';
  } else if (/Minimo/i.test(ua)) {
    title = 'Minimo';
    code = 'minimo';
  } else if (/MiuiBrowser/i.test(ua)) {
    title = 'MIUI Browser';
    version = detectBrowserVersion('MiuiBrowser');
    code = 'miuibrowser';
  } else if (/Mosaic/i.test(ua)) {
    title = 'Mosaic';
    code = 'mosaic';
  } else if (/MozillaDeveloperPreview/i.test(ua)) {
    title = 'Mozilla Developer Preview';
    version = detectBrowserVersion('MozillaDeveloperPreview');
    code = 'firefoxdevpre';
  } else if (/MQQBrowser/i.test(ua) || /QQBrowser/i.test(ua)) {
    title = 'QQbrowser';
    if (/MQQBrowser/i.test(ua)) {
      version = '';
    }
    code = 'qqbrowser';
  } else if (/Multi-Browser/i.test(ua)) {
    title = 'Multi-Browser XP';
    version = detectBrowserVersion('Multi-Browser');
    code = 'multi-browserxp';
  } else if (/MultiZilla/i.test(ua)) {
    title = 'MultiZilla';
    code = 'mozilla';
  } else if (/MxNitro/i.test(ua)) {
    title = 'MxNitro';
    code = 'mxnitro';
  } else if (/myibrow/i.test(ua) && /My\sInternet\sBrowser/i.test(ua)) {
    title = 'myibrow';
    code = 'my-internet-browser';
  } else if (/MyIE2/i.test(ua)) {
    title = 'MyIE2';
    code = 'myie2';
  } else if (/Namoroka/i.test(ua)) {
    title = 'Namoroka';
    code = 'firefoxdevpre';
  } else if (/Navigator/i.test(ua)) {
    title = 'Netscape Navigator';
    version = detectBrowserVersion('Navigator');
    code = 'netscape';
  } else if (/NetBox/i.test(ua)) {
    title = 'NetBox';
    code = 'netbox';
  } else if (/NetCaptor/i.test(ua)) {
    title = 'NetCaptor';
    code = 'netcaptor';
  } else if (/NetFrontLifeBrowser/i.test(ua)) {
    title = 'NetFront Life';
    version = detectBrowserVersion('NetFrontLifeBrowser');
    code = 'netfrontlife';
  } else if (/NetFront/i.test(ua)) {
    title = 'NetFront';
    code = 'netfront';
  } else if (/NetNewsWire/i.test(ua)) {
    title = 'NetNewsWire';
    code = 'netnewswire';
  } else if (/NetPositive/i.test(ua)) {
    title = 'NetPositive';
    code = 'netpositive';
  } else if (/Netscape/i.test(ua)) {
    title = 'Netscape';
    code = 'netscape';
  } else if (/NetSurf/i.test(ua)) {
    title = 'NetSurf';
    code = 'netsurf';
  } else if (/NF-Browser/i.test(ua)) {
    title = 'NetFront';
    version = detectBrowserVersion('NF-Browser');
    code = 'netfront';
  } else if (/Ninesky-android-mobile/i.test(ua)) {
    title = 'Ninesky';
    version = detectBrowserVersion('Ninesky-android-mobile');
    code = 'ninesky';
  } else if (/Nintendo 3DS/i.test(ua)) {
    title = 'Nintendo 3DS';
    version = '';
    code = 'nintendo3dsbrowser';
  } else if (/NintendoBrowser/i.test(ua)) {
    title = 'Nintendo Browser';
    version = detectBrowserVersion('Browser');
    code = 'nintendobrowser';
  } else if (/NokiaBrowser/i.test(ua)) {
    title = 'Nokia Browser';
    version = detectBrowserVersion('Browser');
    code = 'nokia';
  } else if (/Novarra-Vision/i.test(ua)) {
    title = 'Novarra Vision';
    version = detectBrowserVersion('Vision');
    code = 'novarra';
  } else if (/Obigo/i.test(ua)) {
    title = 'Obigo';
    code = 'obigo';
  } else if (/OffByOne/i.test(ua)) {
    title = 'Off By One';
    version = '';
    code = 'offbyone';
  } else if (/OmniWeb/i.test(ua)) {
    title = 'OmniWeb';
    code = 'omniweb';
  } else if (/OneBrowser/i.test(ua)) {
    title = 'OneBrowser';
    code = 'onebrowser';
  } else if (/Opera Mini/i.test(ua)) {
    title = 'Opera Mini';
    code = 'opera-2';
  } else if (/Opera Mobi/i.test(ua)) {
    if (/Version/i.test(ua)) {
      version = detectBrowserVersion('Version');
    } else {
      version = detectBrowserVersion('Opera Mobi');
    }
    title = 'Opera Mobile';
    code = 'opera-2';
  } else if (/Opera/i.test(ua) || /OPR/i.test(ua)) {
    title = 'Opera';
    code = 'opera-1';

    // How is version stored on this Opera ua?
    if (/Version/i.test(ua)) {
      code = 'opera-2';
      version = detectBrowserVersion('Version');
    } else if (/OPR/i.test(ua)) {
      code = 'opera-2';
      version = detectBrowserVersion('OPR');
    } else {
      // Use Opera as fallback since full title may change (Next, Developer, etc.)
      version = detectBrowserVersion('Opera');
    }

    // Is this one with a known alternate icon?
    if (/Opera Labs/i.test(ua) || /Edition Labs/i.test(ua)) {
      code = 'opera-2-next';
    } else if (/Opera Next/i.test(ua) || /Edition Next/i.test(ua)) {
      code = 'opera-2-next';
    } else if (/Opera Developer/i.test(ua) || /Edition Developer/i.test(ua)) {
      code = 'opera-2-developer';
    }

    // Parse full edition name, ex: Opera/9.80 (X11; Linux x86_64; U; Edition Labs Camera and Pages; Ubuntu/11.10; en) Presto/2.9.220 Version/12.00
    if (/Edition ([\s._0-9a-zA-Z]+)/i.test(ua)) {
      const [, matched] = ua.match(/Edition ([\s._0-9a-zA-Z]+)/i);
      title += ` ${matched}`;
    } else if (/Opera ([\s._0-9a-zA-Z]+)/i.test(ua)) {
      const [, matched] = ua.match(/Edition ([\s._0-9a-zA-Z]+)/i);
      title += ` ${matched}`;
    }

    // Use the newest icon?
    if (Number(version.split('.')[0]) > 13) {
      code = 'opera-3';
    }
  } else if (/Orca/i.test(ua)) {
    title = 'Orca';
    code = 'orca';
  } else if (/Oregano/i.test(ua)) {
    title = 'Oregano';
    code = 'oregano';
  } else if (/Origyn\sWeb\sBrowser/i.test(ua)) {
    title = 'Oregano Web Browser';
    version = '';
    code = 'owb';
  } else if (/osb-browser/i.test(ua)) {
    version = detectBrowserVersion('osb-browser');
    title = 'Gtk+ WebCore';
    code = 'null';
  } else if (/Otter/i.test(ua)) {
    title = 'Otter';
    code = 'otter';
  } else if (/\sPre\//i.test(ua)) {
    if (/Version/i.test(ua)) {
      version = detectBrowserVersion('Version');
    } else {
      version = detectBrowserVersion('Pre');
    }
    title = 'Palm';
    code = 'palmpre';
  } else if (/\sWebPro\//i.test(ua)) {
    title = 'Palm WebPro';
    version = detectBrowserVersion('WebPro');
    code = 'palmwebpro';
  } else if (/Palemoon/i.test(ua)) {
    title = 'Pale Moon';
    version = detectBrowserVersion('Moon');
    code = 'palemoon';
  } else if (/Patriott::Browser/i.test(ua)) {
    title = 'Patriott Browser';
    version = detectBrowserVersion('Browser');
    code = 'patriott';
  } else if (/Perk/i.test(ua)) {
    title = 'Perk';
    code = 'perk';
  } else if (/Phaseout/i.test(ua)) {
    title = 'Phaseout';
    version = '';
    code = 'phaseout';
  } else if (/Phoenix/i.test(ua)) {
    title = 'Phoenix';
    code = 'phoenix';
  } else if (/PlayStation\s4/i.test(ua)) {
    title = 'PS4 Web Browser';
    version = '';
    code = 'webkit';
  } else if (/Podkicker/i.test(ua)) {
    title = 'Podkicker';
    code = 'podkicker';
  } else if (/Podkicker\sPro/i.test(ua)) {
    title = 'Podkicker Pro';
    code = 'podkicker';
  } else if (/Pogo/i.test(ua)) {
    title = 'Pogo';
    code = 'pogo';
  } else if (/Polaris/i.test(ua)) {
    title = 'Polaris';
    code = 'polaris';
  } else if (/Polarity/i.test(ua)) {
    title = 'Polarity';
    code = 'polarity';
  } else if (/Prism/i.test(ua)) {
    title = 'Prism';
    code = 'prism';
  } else if (/Puffin/i.test(ua)) {
    title = 'Puffin';
    code = 'puffin';
  } else if (/QtWeb\sInternet\sBrowser/i.test(ua)) {
    title = 'QtWeb Internet Browser';
    version = detectBrowserVersion('Browser');
    code = 'qtwebinternetbrowser';
  } else if (/QupZilla/i.test(ua)) {
    title = 'QupZilla';
    code = 'qupzilla';
  } else if (/Nichrome\/self/i.test(ua)) {
    version = detectBrowserVersion('Nichrome/self');
    title = 'Rambler browser';
    code = 'ramblerbrowser';
  } else if (/rekonq/i.test(ua)) {
    title = 'rekonq';
    version = '';
    code = 'rekonq';
  } else if (/retawq/i.test(ua)) {
    title = 'retawq';
    code = 'terminal';
  } else if (/Roccat/i.test(ua)) {
    title = 'Roccat';
    code = 'roccatbrowser';
  } else if (/RockMelt/i.test(ua)) {
    title = 'RockMelt';
    code = 'rockmelt';
  } else if (/Ryouko/i.test(ua)) {
    title = 'Ryouko';
    code = 'ryouko';
  } else if (/SaaYaa/i.test(ua)) {
    title = 'SaaYaa Explorer';
    version = '';
    code = 'saayaa';
  } else if (/SeaMonkey/i.test(ua)) {
    title = 'SeaMonkey';
    code = 'seamonkey';
  } else if (/SEMC-Browser/i.test(ua)) {
    title = 'SEMC Browser';
    version = detectBrowserVersion('SEMC-Browser');
    code = 'semcbrowser';
  } else if (/SEMC-java/i.test(ua)) {
    title = 'SEMC-java';
    code = 'semcbrowser';
  } else if (/Series60/i.test(ua) && !/Symbian/i.test(ua)) {
    title = 'Nokia Series60';
    version = detectBrowserVersion('Series60');
    code = 's60';
  } else if (/S60/i.test(ua) && !/Symbian/i.test(ua)) {
    title = 'Nokia S60';
    version = detectBrowserVersion('S60');
    code = 's60';
  } else if (/SE\s/i.test(ua) && /MetaSr/i.test(ua)) {
    title = 'Sogou Explorer';
    version = '';
    code = 'sogou';
  } else if (/Seznam\.cz/i.test(ua)) {
    title = 'Seznam.cz';
    version = detectBrowserVersion('cz');
    code = 'seznam-cz';
  } else if (/Shiira/i.test(ua)) {
    title = 'Shiira';
    code = 'shiira';
  } else if (/Shiretoko/i.test(ua)) {
    title = 'Shiretoko';
    code = 'firefoxdevpre';
  } else if (/Silk/i.test(ua) && !/PlayStation/i.test(ua)) {
    title = 'Amazon Silk';
    version = detectBrowserVersion('Silk');
    code = 'silk';
  } else if (/SiteKiosk/i.test(ua)) {
    title = 'SiteKiosk';
    code = 'sitekiosk';
  } else if (/SkipStone/i.test(ua)) {
    title = 'SkipStone';
    code = 'skipstone';
  } else if (/Skyfire/i.test(ua)) {
    title = 'Skyfire';
    code = 'skyfire';
  } else if (/Sleipnir/i.test(ua)) {
    title = 'Sleipnir';
    code = 'sleipnir';
  } else if (/SlimBoat/i.test(ua)) {
    title = 'SlimBoat';
    code = 'slimboat';
  } else if (/SlimBrowser/i.test(ua)) {
    title = 'SlimBrowser';
    code = 'slimbrowser';
  } else if (/SmartTV/i.test(ua)) {
    title = 'Maple Browser';
    version = detectBrowserVersion('WebBrowser');
    code = 'maplebrowser';
  } else if (/Songbird/i.test(ua)) {
    title = 'Songbird';
    code = 'songbird';
  } else if (/Stainless/i.test(ua)) {
    title = 'Stainless';
    code = 'stainless';
  } else if (/SubStream/i.test(ua)) {
    title = 'SubStream';
    code = 'substream';
  } else if (/Sulfur/i.test(ua)) {
    title = 'Flock Sulfur';
    version = detectBrowserVersion('Sulfur');
    code = 'flock';
  } else if (/Sundance/i.test(ua)) {
    title = 'Sundance';
    code = 'sundance';
  } else if (/Sundial/i.test(ua)) {
    title = 'Sundial';
    code = 'sundial';
  } else if (/Sunrise/i.test(ua)) {
    title = 'Sunrise';
    code = 'sunrise';
  } else if (/Superbird/i.test(ua)) {
    title = 'Superbird';
    code = 'superbird';
  } else if (/Surf/i.test(ua)) {
    title = 'Surf';
    code = 'surf';
  } else if (/Swiftfox/i.test(ua)) {
    title = 'Swiftfox';
    code = 'swiftfox';
  } else if (/Swiftweasel/i.test(ua)) {
    title = 'Swiftweasel';
    code = 'swiftweasel';
  } else if (/Sylera/i.test(ua)) {
    title = 'Sylera';
    code = 'null';
  } else if (/tear/i.test(ua)) {
    title = 'Tear';
    version = '';
    code = 'tear';
  } else if (/TeaShark/i.test(ua)) {
    title = 'TeaShark';
    code = 'teashark';
  } else if (/Teleca/i.test(ua)) {
    title = ' Teleca';
    code = 'obigo';
  } else if (/TenFourFox/i.test(ua)) {
    title = 'TenFourFox';
    version = detectBrowserVersion(' rv');
    code = 'tenfourfox';
  } else if (/QtCarBrowser/i.test(ua)) {
    title = 'Tesla Car Browser';
    version = '';
    code = 'teslacarbrowser';
  } else if (/TheWorld/i.test(ua)) {
    title = 'TheWorld Browser';
    version = '';
    code = 'theworld';
  } else if (/Thunderbird/i.test(ua)) {
    title = 'Thunderbird';
    code = 'thunderbird';
  } else if (/Tizen/i.test(ua)) {
    title = 'Tizen';
    code = 'tizen';
  } else if (/Tjusig/i.test(ua)) {
    title = 'Tjusig';
    code = 'tjusig';
  } else if (/TencentTraveler/i.test(ua)) {
    title = 'TT Explorer';
    version = detectBrowserVersion('TencentTraveler');
    code = 'tt-explorer';
  } else if (/uBrowser/i.test(ua) && !/Chrome/i.test(ua)) {
    title = 'uBrowser';
    code = 'ubrowser';
  } else if (/Ubuntu;\sMobile/i.test(ua) || (/Ubuntu;\sTablet/i.test(ua) && /WebKit/i.test(ua))) {
    title = 'Ubuntu Web Browser';
    version = '';
    code = 'ubuntuwebbrowser';
  } else if (/UBrowser/i.test(ua)) {
    title = 'UC Browser';
    version = detectBrowserVersion('UBrowser');
    code = 'ucbrowser';
  } else if (/UCBrowser/i.test(ua)) {
    title = 'UC Browser';
    version = detectBrowserVersion('UCBrowser');
    code = 'ucbrowser';
  } else if (/UC\sBrowser/i.test(ua)) {
    title = 'UC Browser';
    version = detectBrowserVersion('UC Browser');
    code = 'ucbrowser';
  } else if (/UCWEB/i.test(ua)) {
    title = 'UC Browser';
    version = detectBrowserVersion('UCWEB');
    code = 'ucweb';
  } else if (/UltraBrowser/i.test(ua)) {
    title = 'UltraBrowser';
    code = 'ultrabrowser';
  } else if (/UP.Browser/i.test(ua)) {
    title = 'Openwave Mobile Browser';
    version = detectBrowserVersion('UP.Browser');
    code = 'openwave';
  } else if (/UP.Link/i.test(ua)) {
    title = 'Openwave Mobile Browser';
    version = detectBrowserVersion('UP.Link');
    code = 'openwave';
  } else if (/Usejump/i.test(ua)) {
    title = 'Usejump';
    code = 'usejump';
  } else if (/uZardWeb/i.test(ua)) {
    title = 'uZardWeb';
    code = 'uzardweb';
  } else if (/uZard/i.test(ua)) {
    title = 'uZard';
    code = 'uzardweb';
  } else if (/uzbl/i.test(ua)) {
    title = 'uzbl';
    code = 'uzbl';
  } else if (/Vivaldi/i.test(ua)) {
    title = 'Vivaldi';
    code = 'vivaldi';
  } else if (/Vimprobable/i.test(ua)) {
    title = 'Vimprobable';
    code = 'null';
  } else if (/Vonkeror/i.test(ua)) {
    title = 'Vonkeror';
    code = 'null';
  } else if (/w3m/i.test(ua)) {
    title = 'W3M';
    code = 'w3m';
  } else if (/AppleWebkit/i.test(ua) && /WebPositive/i.test(ua)) {
    title = 'WebPositive';
    code = 'webpositive';
  } else if (/AppleWebkit/i.test(ua) && /Android/i.test(ua) && !/Chrome/i.test(ua)) {
    title = 'Android Webkit';
    version = detectBrowserVersion('Version');
    code = 'android-webkit';
  } else if (/Waterfox/i.test(ua)) {
    title = 'Waterfox';
    code = 'waterfox';
  } else if (/WebExplorer/i.test(ua)) {
    title = 'Web Explorer';
    version = detectBrowserVersion('Explorer');
    code = 'webexplorer';
  } else if (/WebianShell/i.test(ua)) {
    title = 'Webian Shell';
    version = detectBrowserVersion('Shell');
    code = 'webianshell';
  } else if (/Webrender/i.test(ua)) {
    title = 'Webrender';
    version = '';
    code = 'webrender';
  } else if (/Chrome/i.test(ua) && /Mobile/i.test(ua) && (/Version/i.test(ua) || /wv/i.test(ua))) {
    // https://developer.chrome.com/multidevice/user-agent

    title = 'WebView';
    version = detectBrowserVersion('Version');
    code = 'android-webkit';
  } else if (/WeltweitimnetzBrowser/i.test(ua)) {
    title = 'Weltweitimnetz Browser';
    version = detectBrowserVersion('Browser');
    code = 'weltweitimnetzbrowser';
  } else if (/wKiosk/i.test(ua)) {
    title = 'wKiosk';
    version = '';
    code = 'wkiosk';
  } else if (/WorldWideWeb/i.test(ua)) {
    title = 'WorldWideWeb';
    code = 'worldwideweb';
  } else if (/wOSBrowser/i.test(ua) || /webOSBrowser/i.test(ua)) {
    title = 'wOSBrowser';
    version = detectBrowserVersion('OSBrowser');
    code = 'webos';
  } else if (/wp-android/i.test(ua)) {
    version = detectBrowserVersion('wp-android'); // TODO check into Android version being returned
    title = 'Wordpress App';
    code = 'wordpress';
  } else if (/wp-blackberry/i.test(ua)) {
    title = 'wp-blackberry';
    code = 'wordpress';
  } else if (/wp-iphone/i.test(ua)) {
    title = 'Wordpress App';
    version = detectBrowserVersion('wp-iphone');
    code = 'wordpress';
  } else if (/wp-nokia/i.test(ua)) {
    title = 'wp-nokia';
    code = 'wordpress';
  } else if (/wp-webos/i.test(ua)) {
    title = 'wp-webos';
    code = 'wordpress';
  } else if (/wp-windowsphone/i.test(ua)) {
    title = 'wp-windowsphone';
    code = 'wordpress';
  } else if (/Wyzo/i.test(ua)) {
    title = 'Wyzo';
    code = 'Wyzo';
  } else if (/X-Smiles/i.test(ua)) {
    title = 'X-Smiles';
    code = 'x-smiles';
  } else if (/Xiino/i.test(ua)) {
    title = 'Xiino';
    code = 'null';
  } else if (/YaBrowser/i.test(ua)) {
    title = 'Yandex Browser';
    version = detectBrowserVersion('Browser');
    code = 'yandex';
  } else if (/YRCWeblink/i.test(ua)) {
    title = 'YRC Weblink';
    version = detectBrowserVersion('Weblink');
    code = 'yrcweblink';
  } else if (/zBrowser/i.test(ua)) {
    title = 'zBrowser';
    code = 'zbrowser';
  } else if (/ZipZap/i.test(ua)) {
    title = 'ZipZap';
    code = 'zipzap';
  }

  // Pulled out of order to help ensure better detection for above browsers
  else if (/ABrowse/i.test(ua)) {
    title = 'ABrowse';
    code = 'abrowse';
  } else if (/Edge/i.test(ua) && /Chrome/i.test(ua) && /Safari/i.test(ua)) {
    title = 'Microsoft Edge';
    version = detectBrowserVersion('Edge');
    code = 'msedge12';
  } else if (/Edge\//i.test(ua) || /Edg\//i.test(ua) || /EdgiOS\//i.test(ua) || /EdgA\//i.test(ua)) {
    title = 'Microsoft Edge';

    if (/Edge\//i.test(ua)) {
      // Edge (MSIE rebrand and rewrite)
      version = detectBrowserVersion('Edge');
      code = 'edge-1';
    } else {
      if (/EdgiOS\//i.test(ua)) {
        // Edge for iOS
        version = detectBrowserVersion('EdgiOS');
      } else if (/EdgA\//i.test(ua)) {
        // Edge for Android
        version = detectBrowserVersion('EdgA');
      } else {
        // Edge (Chromium)
        version = detectBrowserVersion('Edg');
      }
      code = 'edge-2';
    }
  } else if (/Chrome/i.test(ua)) {
    title = 'Google Chrome';
    version = detectBrowserVersion('Chrome');
    code = 'chrome';
  } else if (/Safari/i.test(ua) && !/Nokia/i.test(ua)) {
    title = 'Safari';

    if (/Version/i.test(ua)) {
      version = detectBrowserVersion('Version');
    }

    if (/Mobile Safari/i.test(ua)) {
      title = 'Mobile '.title;
    }

    code = 'safari';
  } else if (/Nokia/i.test(ua)) {
    title = 'Nokia Web Browser';
    version = '';
    code = 'maemo';
  } else if (/Firefox/i.test(ua)) {
    title = 'Firefox';
    code = 'firefox';
  } else if (/MSIE/i.test(ua) || /Trident/i.test(ua)) {
    title = 'Internet Explorer';

    if (/\srv:([.0-9a-zA-Z]+)/i.test(ua)) {
      // IE11 or newer
      version = detectBrowserVersion(' rv');
    } else {
      // IE10 or older, regex: '/MSIE[\s|\/]?([.0-9a-zA-Z]+)/i'
      version = detectBrowserVersion('MSIE');
    }

    if (Number(version) >= 10) {
      code = 'msie10';
    } else if (Number(version) >= 9) {
      code = 'msie9';
    } else if (Number(version) >= 7) {
      // also ie8
      code = 'msie7';

      // Detect compatibility mode for IE
      if (version === '7.0' && /Trident\/4.0/i.test(ua)) {
        version = '8.0 (Compatibility Mode)'; // Fix for IE8 quirky UA string with Compatibility Mode enabled
      }
    } else if (Number(version) >= 6) {
      code = 'msie6';
    } else if (Number(version) >= 4) {
      // also ie5
      code = 'msie4';
    } else if (Number(version) >= 3) {
      code = 'msie3';
    } else if (Number(version) >= 2) {
      code = 'msie2';
    } else if (Number(version) >= 1) {
      code = 'msie1';
    } else {
      code = 'msie';
    }
  } else if (/Mozilla/i.test(ua)) {
    title = 'Mozilla';
    version = detectBrowserVersion(' rv');

    if (version === null) {
      title += ' Compatible';
    }

    code = 'mozilla';
  }

  // No Web browser match
  else {
    title = 'Unknown';
    version = '';
    code = 'null';
  }

  // Set version if it hasn't been parsed yet (generic structure)...
  if (version === null) {
    version = detectBrowserVersion(title);
  }

  return {
    title,
    version,
    code,
    icon: `/device/${code}.png`
  };
}
