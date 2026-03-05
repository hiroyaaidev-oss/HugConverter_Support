(() => {
  const EMAIL = "hugconverter.developer@gmail.com";
  const CONTACT_LINK = `<a href="mailto:${EMAIL}">${EMAIL}</a>`;
  const contactButton = (label) =>
    `<a href="mailto:${EMAIL}" class="contact-btn">${label}</a>`;

  const locales = [
    { code: "ja", key: "ja", label: "日本語", htmlLang: "ja" },
    { code: "en-US", key: "en", label: "English (US)", htmlLang: "en" },
    { code: "de-DE", key: "de", label: "Deutsch", htmlLang: "de" },
    { code: "es-ES", key: "es", label: "Español (España)", htmlLang: "es" },
    { code: "es-MX", key: "es", label: "Español (México)", htmlLang: "es-MX" },
    { code: "fr-FR", key: "fr", label: "Français (France)", htmlLang: "fr" },
    { code: "fr-CA", key: "fr", label: "Français (Canada)", htmlLang: "fr-CA" },
    { code: "id", key: "id", label: "Bahasa Indonesia", htmlLang: "id" },
    { code: "it", key: "it", label: "Italiano", htmlLang: "it" },
    { code: "ko", key: "ko", label: "한국어", htmlLang: "ko" },
    { code: "pt-BR", key: "pt", label: "Português (Brasil)", htmlLang: "pt-BR" },
    { code: "ru", key: "ru", label: "Русский", htmlLang: "ru" },
    { code: "th", key: "th", label: "ไทย", htmlLang: "th" },
    { code: "tr", key: "tr", label: "Türkçe", htmlLang: "tr" },
    { code: "vi", key: "vi", label: "Tiếng Việt", htmlLang: "vi" },
    { code: "zh-Hans", key: "zhHans", label: "简体中文", htmlLang: "zh-Hans" },
    { code: "zh-Hant", key: "zhHant", label: "繁體中文", htmlLang: "zh-Hant" },
  ];

  const localeMap = new Map(locales.map((locale) => [locale.code, locale]));
  const normalizedAliases = {
    en: "en-US",
    "en-us": "en-US",
    de: "de-DE",
    "de-de": "de-DE",
    es: "es-ES",
    "es-es": "es-ES",
    "es-mx": "es-MX",
    fr: "fr-FR",
    "fr-fr": "fr-FR",
    "fr-ca": "fr-CA",
    pt: "pt-BR",
    "pt-br": "pt-BR",
    zh: "zh-Hans",
    "zh-cn": "zh-Hans",
    "zh-sg": "zh-Hans",
    "zh-hans": "zh-Hans",
    "zh-tw": "zh-Hant",
    "zh-hk": "zh-Hant",
    "zh-hant": "zh-Hant",
  };

  const translations = {
    ja: {
      switchLabel: "言語",
      backLabel: "トップに戻る",
      index: {
        subtitle: "撮ることを、もう迷わない。",
        privacyTitle: "プライバシーポリシー",
        privacyDescription: "個人情報の取り扱いについて",
        termsTitle: "利用規約",
        termsDescription: "現在は日本語と英語でご覧いただけます",
        supportTitle: "サポート",
        supportDescription: "よくある質問・お問い合わせ",
      },
      privacy: {
        title: "プライバシーポリシー - HugConverter",
        body: `<h1>プライバシーポリシー</h1>
<p class="last-updated">最終更新日: 2026年3月3日</p>
<p>Hiroya Ishihara（以下「当方」）は、HugConverter（以下「本アプリ」）におけるユーザーのプライバシーを尊重し、個人情報の保護に努めます。本ポリシーは、本アプリで取り扱う情報の概要を説明するものです。</p>
<h2>1. 取り扱う情報</h2>
<h3>写真ライブラリへのアクセス</h3>
<p>動画圧縮とタイムラプス変換を行うために、写真ライブラリへのアクセスを求めます。選択された動画はデバイス上でローカル処理され、外部サーバーへ送信されません。</p>
<h3>ローカル保存データ</h3>
<p>変換履歴、保存回数、設定などの利用データはデバイス内に保存されます。これらのデータを当方が取得することはありません。</p>
<h3>利用分析とクラッシュ情報</h3>
<p>品質改善のために Firebase Analytics と Firebase Crashlytics を利用します。収集される情報は匿名の利用傾向やクラッシュ情報であり、個人を直接特定するものではありません。</p>
<h2>2. アプリ内課金</h2>
<p>本アプリの課金処理には Apple StoreKit を使用します。決済情報は Apple が管理し、当方がクレジットカード情報を直接取得することはありません。</p>
<h2>3. 利用する外部サービス</h2>
<p>本アプリでは、次のサービスを利用しています。</p>
<ul>
  <li><strong>Firebase Analytics</strong> - 匿名の利用状況分析</li>
  <li><strong>Firebase Crashlytics</strong> - クラッシュレポートの収集</li>
  <li><strong>Apple StoreKit</strong> - アプリ内課金の処理</li>
</ul>
<h2>4. データの削除</h2>
<p>本アプリのデータは、アプリを削除するとデバイス上から削除されます。自動的なクラウド同期は行っていません。</p>
<h2>5. お子様のプライバシー</h2>
<p>本アプリは、13歳未満のお子様から意図的に個人情報を収集することはありません。</p>
<h2>6. ポリシーの変更</h2>
<p>本ポリシーは、必要に応じて更新される場合があります。重要な変更がある場合は、本アプリまたは本ページでお知らせします。</p>
<h2>7. お問い合わせ</h2>
<p>本ポリシーに関するご質問は、以下までご連絡ください。</p>
<p>${CONTACT_LINK}</p>`,
      },
      support: {
        title: "サポート - HugConverter",
        body: `<h1>サポート</h1>
<h2>よくある質問</h2>
<dl>
  <div class="faq-item">
    <dt>Q. 無料版に保存回数の制限はありますか？</dt>
    <dd>無料版では1日5回まで保存できます。Pro版では保存回数の制限がなくなります。</dd>
  </div>
  <div class="faq-item">
    <dt>Q. Pro版では何が使えますか？</dt>
    <dd>全プリセット、マニュアル設定、一括変換、無制限保存をご利用いただけます。Pro版は買い切りです。</dd>
  </div>
  <div class="faq-item">
    <dt>Q. 購入を復元するには？</dt>
    <dd>アプリ内の設定画面で「購入を復元」をタップしてください。同じApple IDでの購入が復元されます。</dd>
  </div>
  <div class="faq-item">
    <dt>Q. 対応する動画形式は？</dt>
    <dd>iPhoneで撮影した MOV と MP4 に対応しています。変換後は MP4 で保存されます。</dd>
  </div>
  <div class="faq-item">
    <dt>Q. 変換した動画はどこに保存されますか？</dt>
    <dd>変換後の動画は、デバイスの写真ライブラリに保存されます。</dd>
  </div>
  <div class="faq-item">
    <dt>Q. 動画が外部に送信されることはありますか？</dt>
    <dd>ありません。変換処理はすべてデバイス上で行われ、動画データはサーバーへ送信されません。</dd>
  </div>
</dl>
<h2>お問い合わせ</h2>
<p>上記で解決しない場合は、メールでご連絡ください。</p>
<p class="contact-wrap">${contactButton("メールで問い合わせる")}</p>
<h2>アプリ情報</h2>
<ul>
  <li><strong>アプリ名</strong>: HugConverter</li>
  <li><strong>対応OS</strong>: iOS 17.0以降</li>
  <li><strong>開発者</strong>: Hiroya Ishihara</li>
</ul>`,
      },
    },
    en: {
      switchLabel: "Language",
      backLabel: "Back to Top",
      index: {
        subtitle: "Never hesitate to record.",
        privacyTitle: "Privacy Policy",
        privacyDescription: "How we handle your information",
        termsTitle: "Terms of Service",
        termsDescription: "Currently available in Japanese and English",
        supportTitle: "Support",
        supportDescription: "FAQ and contact information",
      },
      privacy: {
        title: "Privacy Policy - HugConverter",
        body: `<h1>Privacy Policy</h1>
<p class="last-updated">Last updated: March 3, 2026</p>
<p>Hiroya Ishihara ("we", "us", or "our") respects your privacy and is committed to protecting personal information when you use HugConverter (the "App"). This policy summarizes how the App handles information.</p>
<h2>1. Information We Handle</h2>
<h3>Photo Library Access</h3>
<p>The App requests access to your photo library so it can compress videos and create timelapses. Selected videos are processed locally on your device and are not uploaded to external servers.</p>
<h3>Data Stored on Your Device</h3>
<p>Conversion history, save counts, and settings are stored on your device. We do not directly collect that local data.</p>
<h3>Analytics and Crash Reports</h3>
<p>We use Firebase Analytics and Firebase Crashlytics to improve reliability. The collected data is limited to anonymous usage trends and crash information, and is not used to directly identify you.</p>
<h2>2. In-App Purchases</h2>
<p>The App uses Apple StoreKit for in-app purchases. Apple manages payment details, and we do not directly receive credit card information.</p>
<h2>3. Third-Party Services</h2>
<p>The App uses the following services:</p>
<ul>
  <li><strong>Firebase Analytics</strong> - Anonymous usage analytics</li>
  <li><strong>Firebase Crashlytics</strong> - Crash report collection</li>
  <li><strong>Apple StoreKit</strong> - In-app purchase processing</li>
</ul>
<h2>4. Data Deletion</h2>
<p>App data is removed from your device when you uninstall the App. The App does not automatically sync your data to cloud services.</p>
<h2>5. Children's Privacy</h2>
<p>The App does not knowingly collect personal information from children under 13.</p>
<h2>6. Policy Changes</h2>
<p>We may update this policy when needed. If we make a material change, we will notify you in the App or on this page.</p>
<h2>7. Contact</h2>
<p>If you have questions about this policy, please contact us at:</p>
<p>${CONTACT_LINK}</p>`,
      },
      support: {
        title: "Support - HugConverter",
        body: `<h1>Support</h1>
<h2>Frequently Asked Questions</h2>
<dl>
  <div class="faq-item">
    <dt>Q. Is there a free save limit?</dt>
    <dd>The free version allows up to 5 saves per day. Pro removes the save limit.</dd>
  </div>
  <div class="faq-item">
    <dt>Q. What is included in Pro?</dt>
    <dd>Pro unlocks all presets, manual controls, batch conversion, and unlimited saves. Pro is offered as a one-time purchase.</dd>
  </div>
  <div class="faq-item">
    <dt>Q. How do I restore my purchase?</dt>
    <dd>Open the settings screen in the App and tap "Restore Purchases." Purchases made with the same Apple ID will be restored.</dd>
  </div>
  <div class="faq-item">
    <dt>Q. Which video formats are supported?</dt>
    <dd>The App supports MOV and MP4 videos recorded on iPhone. Converted files are saved as MP4.</dd>
  </div>
  <div class="faq-item">
    <dt>Q. Where are converted videos saved?</dt>
    <dd>Converted videos are saved to your device's photo library.</dd>
  </div>
  <div class="faq-item">
    <dt>Q. Are my videos uploaded anywhere?</dt>
    <dd>No. All processing happens on your device, and video files are not sent to external servers.</dd>
  </div>
</dl>
<h2>Contact</h2>
<p>If the FAQ does not solve your issue, please email us.</p>
<p class="contact-wrap">${contactButton("Contact via Email")}</p>
<h2>App Information</h2>
<ul>
  <li><strong>App Name</strong>: HugConverter</li>
  <li><strong>Supported OS</strong>: iOS 17.0 or later</li>
  <li><strong>Developer</strong>: Hiroya Ishihara</li>
</ul>`,
      },
    },
    de: {
      switchLabel: "Sprache",
      backLabel: "Zurück zur Startseite",
      index: {
        subtitle: "Verpasse keinen Moment mehr beim Aufnehmen.",
        privacyTitle: "Datenschutz",
        privacyDescription: "So gehen wir mit deinen Daten um",
        termsTitle: "Nutzungsbedingungen",
        termsDescription: "Derzeit auf Japanisch und Englisch verfügbar",
        supportTitle: "Support",
        supportDescription: "FAQ und Kontaktinformationen",
      },
      privacy: {
        title: "Datenschutz - HugConverter",
        body: `<h1>Datenschutz</h1>
<p class="last-updated">Zuletzt aktualisiert: 3. März 2026</p>
<p>Hiroya Ishihara respektiert deine Privatsphäre und schützt personenbezogene Daten bei der Nutzung von HugConverter. Diese Richtlinie fasst zusammen, wie die App Informationen verarbeitet.</p>
<h2>1. Welche Informationen verarbeitet werden</h2>
<h3>Zugriff auf die Fotomediathek</h3>
<p>Die App benötigt Zugriff auf deine Fotomediathek, um Videos zu komprimieren und Zeitraffer zu erstellen. Ausgewählte Videos werden lokal auf deinem Gerät verarbeitet und nicht an externe Server gesendet.</p>
<h3>Lokal gespeicherte Daten</h3>
<p>Konvertierungsverlauf, Speicheranzahl und Einstellungen werden auf deinem Gerät gespeichert. Wir erfassen diese lokalen Daten nicht direkt.</p>
<h3>Analyse- und Absturzberichte</h3>
<p>Zur Verbesserung der Stabilität verwenden wir Firebase Analytics und Firebase Crashlytics. Erfasst werden nur anonyme Nutzungsdaten und Absturzinformationen, nicht direkt identifizierende personenbezogene Daten.</p>
<h2>2. In-App-Käufe</h2>
<p>Für In-App-Käufe verwendet die App Apple StoreKit. Zahlungsdaten werden von Apple verwaltet; wir erhalten keine Kreditkarteninformationen direkt.</p>
<h2>3. Verwendete Drittanbieterdienste</h2>
<p>Die App nutzt folgende Dienste:</p>
<ul>
  <li><strong>Firebase Analytics</strong> - Anonyme Nutzungsanalyse</li>
  <li><strong>Firebase Crashlytics</strong> - Erfassung von Absturzberichten</li>
  <li><strong>Apple StoreKit</strong> - Abwicklung von In-App-Käufen</li>
</ul>
<h2>4. Löschung von Daten</h2>
<p>App-Daten werden von deinem Gerät entfernt, wenn du die App löschst. Eine automatische Synchronisierung mit Cloud-Diensten findet nicht statt.</p>
<h2>5. Datenschutz von Kindern</h2>
<p>Die App sammelt wissentlich keine personenbezogenen Daten von Kindern unter 13 Jahren.</p>
<h2>6. Änderungen dieser Richtlinie</h2>
<p>Wir können diese Richtlinie bei Bedarf aktualisieren. Wesentliche Änderungen teilen wir in der App oder auf dieser Seite mit.</p>
<h2>7. Kontakt</h2>
<p>Bei Fragen zu dieser Richtlinie kontaktiere uns bitte unter:</p>
<p>${CONTACT_LINK}</p>`,
      },
      support: {
        title: "Support - HugConverter",
        body: `<h1>Support</h1>
<h2>Häufige Fragen</h2>
<dl>
  <div class="faq-item">
    <dt>Q. Gibt es ein Limit in der kostenlosen Version?</dt>
    <dd>In der kostenlosen Version sind bis zu 5 Speicherungen pro Tag möglich. Mit Pro entfällt dieses Limit.</dd>
  </div>
  <div class="faq-item">
    <dt>Q. Was ist in Pro enthalten?</dt>
    <dd>Pro schaltet alle Presets, manuelle Einstellungen, Stapelverarbeitung und unbegrenztes Speichern frei. Pro ist ein Einmalkauf.</dd>
  </div>
  <div class="faq-item">
    <dt>Q. Wie stelle ich einen Kauf wieder her?</dt>
    <dd>Öffne die Einstellungen in der App und tippe auf "Käufe wiederherstellen". Käufe mit derselben Apple-ID werden erneut aktiviert.</dd>
  </div>
  <div class="faq-item">
    <dt>Q. Welche Videoformate werden unterstützt?</dt>
    <dd>Unterstützt werden MOV- und MP4-Videos vom iPhone. Konvertierte Dateien werden als MP4 gespeichert.</dd>
  </div>
  <div class="faq-item">
    <dt>Q. Wo werden konvertierte Videos gespeichert?</dt>
    <dd>Konvertierte Videos werden in deiner Fotomediathek gespeichert.</dd>
  </div>
  <div class="faq-item">
    <dt>Q. Werden meine Videos hochgeladen?</dt>
    <dd>Nein. Die gesamte Verarbeitung erfolgt auf deinem Gerät, und Videodateien werden nicht an externe Server gesendet.</dd>
  </div>
</dl>
<h2>Kontakt</h2>
<p>Wenn dir die FAQ nicht weiterhilft, schreib uns bitte eine E-Mail.</p>
<p class="contact-wrap">${contactButton("Per E-Mail kontaktieren")}</p>
<h2>App-Informationen</h2>
<ul>
  <li><strong>App-Name</strong>: HugConverter</li>
  <li><strong>Unterstütztes OS</strong>: iOS 17.0 oder neuer</li>
  <li><strong>Entwickler</strong>: Hiroya Ishihara</li>
</ul>`,
      },
    },
    es: {
      switchLabel: "Idioma",
      backLabel: "Volver al inicio",
      index: {
        subtitle: "Sigue grabando sin pensarlo dos veces.",
        privacyTitle: "Política de privacidad",
        privacyDescription: "Cómo tratamos tu información",
        termsTitle: "Términos del servicio",
        termsDescription: "Disponible actualmente en japonés e inglés",
        supportTitle: "Soporte",
        supportDescription: "Preguntas frecuentes y contacto",
      },
      privacy: {
        title: "Política de privacidad - HugConverter",
        body: `<h1>Política de privacidad</h1>
<p class="last-updated">Última actualización: 3 de marzo de 2026</p>
<p>Hiroya Ishihara respeta tu privacidad y se compromete a proteger la información personal cuando usas HugConverter. Esta política resume cómo maneja la app la información.</p>
<h2>1. Información que tratamos</h2>
<h3>Acceso a la fototeca</h3>
<p>La app solicita acceso a tu fototeca para comprimir videos y crear timelapses. Los videos seleccionados se procesan localmente en tu dispositivo y no se envían a servidores externos.</p>
<h3>Datos almacenados en tu dispositivo</h3>
<p>El historial de conversiones, el número de guardados y la configuración se almacenan en tu dispositivo. No recopilamos directamente esos datos locales.</p>
<h3>Analíticas e informes de fallos</h3>
<p>Usamos Firebase Analytics y Firebase Crashlytics para mejorar la estabilidad. La información recopilada se limita a tendencias de uso anónimas y datos de fallos, y no se usa para identificarte directamente.</p>
<h2>2. Compras dentro de la app</h2>
<p>La app usa Apple StoreKit para las compras dentro de la app. Apple gestiona los datos de pago y nosotros no recibimos directamente la información de tu tarjeta.</p>
<h2>3. Servicios de terceros</h2>
<p>La app utiliza los siguientes servicios:</p>
<ul>
  <li><strong>Firebase Analytics</strong> - Analítica anónima de uso</li>
  <li><strong>Firebase Crashlytics</strong> - Recopilación de informes de fallos</li>
  <li><strong>Apple StoreKit</strong> - Procesamiento de compras dentro de la app</li>
</ul>
<h2>4. Eliminación de datos</h2>
<p>Los datos de la app se eliminan de tu dispositivo cuando desinstalas la app. La app no sincroniza automáticamente tus datos con servicios en la nube.</p>
<h2>5. Privacidad infantil</h2>
<p>La app no recopila conscientemente información personal de menores de 13 años.</p>
<h2>6. Cambios en esta política</h2>
<p>Podemos actualizar esta política cuando sea necesario. Si hay un cambio importante, te lo notificaremos en la app o en esta página.</p>
<h2>7. Contacto</h2>
<p>Si tienes preguntas sobre esta política, contáctanos en:</p>
<p>${CONTACT_LINK}</p>`,
      },
      support: {
        title: "Soporte - HugConverter",
        body: `<h1>Soporte</h1>
<h2>Preguntas frecuentes</h2>
<dl>
  <div class="faq-item">
    <dt>Q. ¿Hay un límite gratuito de guardado?</dt>
    <dd>La versión gratuita permite hasta 5 guardados al día. Pro elimina ese límite.</dd>
  </div>
  <div class="faq-item">
    <dt>Q. ¿Qué incluye Pro?</dt>
    <dd>Pro desbloquea todos los ajustes preestablecidos, controles manuales, conversión por lotes y guardados ilimitados. Pro se ofrece como compra única.</dd>
  </div>
  <div class="faq-item">
    <dt>Q. ¿Cómo restauro mi compra?</dt>
    <dd>Abre la pantalla de ajustes en la app y pulsa "Restaurar compras". Se restaurarán las compras hechas con el mismo Apple ID.</dd>
  </div>
  <div class="faq-item">
    <dt>Q. ¿Qué formatos de video son compatibles?</dt>
    <dd>La app admite videos MOV y MP4 grabados en iPhone. Los archivos convertidos se guardan como MP4.</dd>
  </div>
  <div class="faq-item">
    <dt>Q. ¿Dónde se guardan los videos convertidos?</dt>
    <dd>Los videos convertidos se guardan en la fototeca de tu dispositivo.</dd>
  </div>
  <div class="faq-item">
    <dt>Q. ¿Mis videos se suben a algún servidor?</dt>
    <dd>No. Todo el procesamiento se realiza en tu dispositivo y los archivos no se envían a servidores externos.</dd>
  </div>
</dl>
<h2>Contacto</h2>
<p>Si las preguntas frecuentes no resuelven tu problema, escríbenos por correo electrónico.</p>
<p class="contact-wrap">${contactButton("Contactar por correo")}</p>
<h2>Información de la app</h2>
<ul>
  <li><strong>Nombre de la app</strong>: HugConverter</li>
  <li><strong>Sistema compatible</strong>: iOS 17.0 o posterior</li>
  <li><strong>Desarrollador</strong>: Hiroya Ishihara</li>
</ul>`,
      },
    },
    fr: {
      switchLabel: "Langue",
      backLabel: "Retour à l'accueil",
      index: {
        subtitle: "Continuez à filmer sans hésiter.",
        privacyTitle: "Politique de confidentialité",
        privacyDescription: "Comment nous traitons vos informations",
        termsTitle: "Conditions d'utilisation",
        termsDescription: "Disponible actuellement en japonais et en anglais",
        supportTitle: "Assistance",
        supportDescription: "FAQ et coordonnées",
      },
      privacy: {
        title: "Politique de confidentialité - HugConverter",
        body: `<h1>Politique de confidentialité</h1>
<p class="last-updated">Dernière mise à jour : 3 mars 2026</p>
<p>Hiroya Ishihara respecte votre vie privée et s'engage à protéger les informations personnelles lorsque vous utilisez HugConverter. Cette politique résume la manière dont l'app traite les informations.</p>
<h2>1. Informations traitées</h2>
<h3>Accès à la photothèque</h3>
<p>L'app demande l'accès à votre photothèque pour compresser des vidéos et créer des timelapses. Les vidéos sélectionnées sont traitées localement sur votre appareil et ne sont pas envoyées vers des serveurs externes.</p>
<h3>Données stockées sur votre appareil</h3>
<p>L'historique des conversions, le nombre d'enregistrements et les réglages sont stockés sur votre appareil. Nous ne collectons pas directement ces données locales.</p>
<h3>Analyses et rapports de plantage</h3>
<p>Nous utilisons Firebase Analytics et Firebase Crashlytics pour améliorer la fiabilité. Les données collectées se limitent à des tendances d'usage anonymes et à des informations de plantage, sans identification directe.</p>
<h2>2. Achats intégrés</h2>
<p>L'app utilise Apple StoreKit pour les achats intégrés. Apple gère les données de paiement, et nous ne recevons pas directement les informations de carte bancaire.</p>
<h2>3. Services tiers</h2>
<p>L'app utilise les services suivants :</p>
<ul>
  <li><strong>Firebase Analytics</strong> - Analyse d'usage anonyme</li>
  <li><strong>Firebase Crashlytics</strong> - Collecte des rapports de plantage</li>
  <li><strong>Apple StoreKit</strong> - Traitement des achats intégrés</li>
</ul>
<h2>4. Suppression des données</h2>
<p>Les données de l'app sont supprimées de votre appareil lorsque vous désinstallez l'app. L'app ne synchronise pas automatiquement vos données vers le cloud.</p>
<h2>5. Confidentialité des enfants</h2>
<p>L'app ne collecte pas sciemment d'informations personnelles auprès d'enfants de moins de 13 ans.</p>
<h2>6. Modifications de cette politique</h2>
<p>Nous pouvons mettre à jour cette politique si nécessaire. En cas de changement important, nous vous informerons dans l'app ou sur cette page.</p>
<h2>7. Contact</h2>
<p>Si vous avez des questions sur cette politique, contactez-nous à l'adresse suivante :</p>
<p>${CONTACT_LINK}</p>`,
      },
      support: {
        title: "Assistance - HugConverter",
        body: `<h1>Assistance</h1>
<h2>Questions fréquentes</h2>
<dl>
  <div class="faq-item">
    <dt>Q. Y a-t-il une limite gratuite d'enregistrement ?</dt>
    <dd>La version gratuite permet jusqu'à 5 enregistrements par jour. Pro supprime cette limite.</dd>
  </div>
  <div class="faq-item">
    <dt>Q. Que contient Pro ?</dt>
    <dd>Pro débloque tous les préréglages, les réglages manuels, la conversion par lot et les enregistrements illimités. Pro est proposé en achat unique.</dd>
  </div>
  <div class="faq-item">
    <dt>Q. Comment restaurer mon achat ?</dt>
    <dd>Ouvrez l'écran Réglages dans l'app et touchez "Restaurer les achats". Les achats effectués avec le même identifiant Apple seront restaurés.</dd>
  </div>
  <div class="faq-item">
    <dt>Q. Quels formats vidéo sont pris en charge ?</dt>
    <dd>L'app prend en charge les vidéos MOV et MP4 enregistrées sur iPhone. Les fichiers convertis sont sauvegardés en MP4.</dd>
  </div>
  <div class="faq-item">
    <dt>Q. Où sont enregistrées les vidéos converties ?</dt>
    <dd>Les vidéos converties sont enregistrées dans la photothèque de votre appareil.</dd>
  </div>
  <div class="faq-item">
    <dt>Q. Mes vidéos sont-elles envoyées sur un serveur ?</dt>
    <dd>Non. Tout le traitement se fait sur votre appareil et les fichiers vidéo ne sont pas envoyés vers des serveurs externes.</dd>
  </div>
</dl>
<h2>Contact</h2>
<p>Si la FAQ ne résout pas votre problème, contactez-nous par e-mail.</p>
<p class="contact-wrap">${contactButton("Contacter par e-mail")}</p>
<h2>Informations sur l'app</h2>
<ul>
  <li><strong>Nom de l'app</strong> : HugConverter</li>
  <li><strong>OS pris en charge</strong> : iOS 17.0 ou version ultérieure</li>
  <li><strong>Développeur</strong> : Hiroya Ishihara</li>
</ul>`,
      },
    },
    id: {
      switchLabel: "Bahasa",
      backLabel: "Kembali ke Beranda",
      index: {
        subtitle: "Tetap siap merekam tanpa ragu.",
        privacyTitle: "Kebijakan Privasi",
        privacyDescription: "Cara kami menangani informasi Anda",
        termsTitle: "Ketentuan Layanan",
        termsDescription: "Saat ini tersedia dalam bahasa Jepang dan Inggris",
        supportTitle: "Bantuan",
        supportDescription: "FAQ dan informasi kontak",
      },
      privacy: {
        title: "Kebijakan Privasi - HugConverter",
        body: `<h1>Kebijakan Privasi</h1>
<p class="last-updated">Terakhir diperbarui: 3 Maret 2026</p>
<p>Hiroya Ishihara menghormati privasi Anda dan berkomitmen melindungi informasi pribadi saat Anda menggunakan HugConverter. Kebijakan ini merangkum cara aplikasi menangani informasi.</p>
<h2>1. Informasi yang Kami Tangani</h2>
<h3>Akses ke Pustaka Foto</h3>
<p>Aplikasi meminta akses ke pustaka foto Anda untuk mengompresi video dan membuat timelapse. Video yang dipilih diproses secara lokal di perangkat Anda dan tidak dikirim ke server eksternal.</p>
<h3>Data yang Disimpan di Perangkat</h3>
<p>Riwayat konversi, jumlah penyimpanan, dan pengaturan disimpan di perangkat Anda. Kami tidak mengumpulkan data lokal tersebut secara langsung.</p>
<h3>Analitik dan Laporan Crash</h3>
<p>Kami menggunakan Firebase Analytics dan Firebase Crashlytics untuk meningkatkan keandalan. Data yang dikumpulkan terbatas pada tren penggunaan anonim dan informasi crash, serta tidak digunakan untuk mengidentifikasi Anda secara langsung.</p>
<h2>2. Pembelian Dalam Aplikasi</h2>
<p>Aplikasi menggunakan Apple StoreKit untuk pembelian dalam aplikasi. Apple mengelola detail pembayaran, dan kami tidak menerima informasi kartu kredit secara langsung.</p>
<h2>3. Layanan Pihak Ketiga</h2>
<p>Aplikasi menggunakan layanan berikut:</p>
<ul>
  <li><strong>Firebase Analytics</strong> - Analitik penggunaan anonim</li>
  <li><strong>Firebase Crashlytics</strong> - Pengumpulan laporan crash</li>
  <li><strong>Apple StoreKit</strong> - Pemrosesan pembelian dalam aplikasi</li>
</ul>
<h2>4. Penghapusan Data</h2>
<p>Data aplikasi dihapus dari perangkat Anda saat Anda menghapus aplikasi. Aplikasi tidak menyinkronkan data Anda ke layanan cloud secara otomatis.</p>
<h2>5. Privasi Anak</h2>
<p>Aplikasi tidak dengan sengaja mengumpulkan informasi pribadi dari anak-anak di bawah usia 13 tahun.</p>
<h2>6. Perubahan Kebijakan</h2>
<p>Kami dapat memperbarui kebijakan ini bila diperlukan. Jika ada perubahan penting, kami akan memberi tahu Anda di aplikasi atau di halaman ini.</p>
<h2>7. Kontak</h2>
<p>Jika Anda memiliki pertanyaan tentang kebijakan ini, hubungi kami di:</p>
<p>${CONTACT_LINK}</p>`,
      },
      support: {
        title: "Bantuan - HugConverter",
        body: `<h1>Bantuan</h1>
<h2>Pertanyaan yang Sering Diajukan</h2>
<dl>
  <div class="faq-item">
    <dt>Q. Apakah ada batas simpan gratis?</dt>
    <dd>Versi gratis memungkinkan hingga 5 penyimpanan per hari. Pro menghapus batas tersebut.</dd>
  </div>
  <div class="faq-item">
    <dt>Q. Apa saja yang termasuk dalam Pro?</dt>
    <dd>Pro membuka semua preset, kontrol manual, konversi batch, dan penyimpanan tanpa batas. Pro tersedia sebagai pembelian satu kali.</dd>
  </div>
  <div class="faq-item">
    <dt>Q. Bagaimana cara memulihkan pembelian saya?</dt>
    <dd>Buka layar pengaturan di aplikasi lalu ketuk "Restore Purchases". Pembelian dengan Apple ID yang sama akan dipulihkan.</dd>
  </div>
  <div class="faq-item">
    <dt>Q. Format video apa yang didukung?</dt>
    <dd>Aplikasi mendukung video MOV dan MP4 yang direkam di iPhone. File hasil konversi disimpan sebagai MP4.</dd>
  </div>
  <div class="faq-item">
    <dt>Q. Di mana video hasil konversi disimpan?</dt>
    <dd>Video hasil konversi disimpan ke pustaka foto perangkat Anda.</dd>
  </div>
  <div class="faq-item">
    <dt>Q. Apakah video saya diunggah ke server?</dt>
    <dd>Tidak. Semua proses dilakukan di perangkat Anda, dan file video tidak dikirim ke server eksternal.</dd>
  </div>
</dl>
<h2>Kontak</h2>
<p>Jika FAQ belum menyelesaikan masalah Anda, silakan hubungi kami melalui email.</p>
<p class="contact-wrap">${contactButton("Hubungi via Email")}</p>
<h2>Informasi Aplikasi</h2>
<ul>
  <li><strong>Nama Aplikasi</strong>: HugConverter</li>
  <li><strong>OS yang Didukung</strong>: iOS 17.0 atau lebih baru</li>
  <li><strong>Pengembang</strong>: Hiroya Ishihara</li>
</ul>`,
      },
    },
    it: {
      switchLabel: "Lingua",
      backLabel: "Torna all'inizio",
      index: {
        subtitle: "Continua a registrare senza esitazioni.",
        privacyTitle: "Informativa sulla privacy",
        privacyDescription: "Come trattiamo le tue informazioni",
        termsTitle: "Termini di servizio",
        termsDescription: "Attualmente disponibile in giapponese e inglese",
        supportTitle: "Supporto",
        supportDescription: "FAQ e informazioni di contatto",
      },
      privacy: {
        title: "Informativa sulla privacy - HugConverter",
        body: `<h1>Informativa sulla privacy</h1>
<p class="last-updated">Ultimo aggiornamento: 3 marzo 2026</p>
<p>Hiroya Ishihara rispetta la tua privacy e si impegna a proteggere i dati personali quando usi HugConverter. Questa informativa riassume come l'app gestisce le informazioni.</p>
<h2>1. Informazioni trattate</h2>
<h3>Accesso alla libreria foto</h3>
<p>L'app richiede l'accesso alla tua libreria foto per comprimere video e creare timelapse. I video selezionati vengono elaborati localmente sul tuo dispositivo e non vengono inviati a server esterni.</p>
<h3>Dati memorizzati sul dispositivo</h3>
<p>Cronologia delle conversioni, numero di salvataggi e impostazioni vengono memorizzati sul tuo dispositivo. Non raccogliamo direttamente questi dati locali.</p>
<h3>Analisi e segnalazioni di arresto anomalo</h3>
<p>Usiamo Firebase Analytics e Firebase Crashlytics per migliorare l'affidabilità. I dati raccolti sono limitati a tendenze d'uso anonime e informazioni sui crash e non vengono usati per identificarti direttamente.</p>
<h2>2. Acquisti in-app</h2>
<p>L'app usa Apple StoreKit per gli acquisti in-app. Apple gestisce i dettagli di pagamento e noi non riceviamo direttamente i dati della carta di credito.</p>
<h2>3. Servizi di terze parti</h2>
<p>L'app utilizza i seguenti servizi:</p>
<ul>
  <li><strong>Firebase Analytics</strong> - Analisi anonima dell'utilizzo</li>
  <li><strong>Firebase Crashlytics</strong> - Raccolta dei report di crash</li>
  <li><strong>Apple StoreKit</strong> - Gestione degli acquisti in-app</li>
</ul>
<h2>4. Eliminazione dei dati</h2>
<p>I dati dell'app vengono rimossi dal dispositivo quando disinstalli l'app. L'app non sincronizza automaticamente i dati con servizi cloud.</p>
<h2>5. Privacy dei minori</h2>
<p>L'app non raccoglie consapevolmente informazioni personali da minori di 13 anni.</p>
<h2>6. Modifiche a questa informativa</h2>
<p>Potremmo aggiornare questa informativa quando necessario. In caso di modifiche rilevanti, ti informeremo nell'app o in questa pagina.</p>
<h2>7. Contatti</h2>
<p>Se hai domande su questa informativa, contattaci a:</p>
<p>${CONTACT_LINK}</p>`,
      },
      support: {
        title: "Supporto - HugConverter",
        body: `<h1>Supporto</h1>
<h2>Domande frequenti</h2>
<dl>
  <div class="faq-item">
    <dt>Q. Esiste un limite gratuito di salvataggio?</dt>
    <dd>La versione gratuita consente fino a 5 salvataggi al giorno. Pro rimuove questo limite.</dd>
  </div>
  <div class="faq-item">
    <dt>Q. Cosa include Pro?</dt>
    <dd>Pro sblocca tutti i preset, i controlli manuali, la conversione batch e i salvataggi illimitati. Pro è disponibile come acquisto una tantum.</dd>
  </div>
  <div class="faq-item">
    <dt>Q. Come posso ripristinare il mio acquisto?</dt>
    <dd>Apri la schermata impostazioni dell'app e tocca "Restore Purchases". Gli acquisti effettuati con lo stesso Apple ID verranno ripristinati.</dd>
  </div>
  <div class="faq-item">
    <dt>Q. Quali formati video sono supportati?</dt>
    <dd>L'app supporta i video MOV e MP4 registrati su iPhone. I file convertiti vengono salvati in formato MP4.</dd>
  </div>
  <div class="faq-item">
    <dt>Q. Dove vengono salvati i video convertiti?</dt>
    <dd>I video convertiti vengono salvati nella libreria foto del dispositivo.</dd>
  </div>
  <div class="faq-item">
    <dt>Q. I miei video vengono caricati su un server?</dt>
    <dd>No. Tutta l'elaborazione avviene sul dispositivo e i file video non vengono inviati a server esterni.</dd>
  </div>
</dl>
<h2>Contatti</h2>
<p>Se le FAQ non risolvono il problema, contattaci via email.</p>
<p class="contact-wrap">${contactButton("Contatta via email")}</p>
<h2>Informazioni sull'app</h2>
<ul>
  <li><strong>Nome app</strong>: HugConverter</li>
  <li><strong>Sistema supportato</strong>: iOS 17.0 o successivo</li>
  <li><strong>Sviluppatore</strong>: Hiroya Ishihara</li>
</ul>`,
      },
    },
    ko: {
      switchLabel: "언어",
      backLabel: "홈으로 돌아가기",
      index: {
        subtitle: "망설이지 말고 바로 기록하세요.",
        privacyTitle: "개인정보 처리방침",
        privacyDescription: "정보를 처리하는 방법",
        termsTitle: "이용 약관",
        termsDescription: "현재 일본어와 영어로 제공됩니다",
        supportTitle: "지원",
        supportDescription: "자주 묻는 질문과 문의 방법",
      },
      privacy: {
        title: "개인정보 처리방침 - HugConverter",
        body: `<h1>개인정보 처리방침</h1>
<p class="last-updated">최종 업데이트: 2026년 3월 3일</p>
<p>Hiroya Ishihara는 HugConverter 사용 시 사용자의 개인정보를 존중하며 개인 정보를 보호하기 위해 노력합니다. 이 정책은 앱이 정보를 처리하는 방식을 요약합니다.</p>
<h2>1. 처리하는 정보</h2>
<h3>사진 보관함 접근</h3>
<p>앱은 동영상 압축 및 타임랩스 변환을 위해 사진 보관함 접근 권한을 요청합니다. 선택한 동영상은 기기에서 로컬로 처리되며 외부 서버로 업로드되지 않습니다.</p>
<h3>기기에 저장되는 데이터</h3>
<p>변환 기록, 저장 횟수, 설정은 사용자의 기기에 저장됩니다. 당사는 이 로컬 데이터를 직접 수집하지 않습니다.</p>
<h3>분석 및 충돌 보고서</h3>
<p>안정성 향상을 위해 Firebase Analytics와 Firebase Crashlytics를 사용합니다. 수집되는 정보는 익명 사용 추세와 충돌 정보로 제한되며 사용자를 직접 식별하는 데 사용되지 않습니다.</p>
<h2>2. 앱 내 구매</h2>
<p>앱은 앱 내 구매를 위해 Apple StoreKit을 사용합니다. 결제 정보는 Apple이 관리하며 당사가 신용카드 정보를 직접 받지 않습니다.</p>
<h2>3. 제3자 서비스</h2>
<p>앱은 다음 서비스를 사용합니다.</p>
<ul>
  <li><strong>Firebase Analytics</strong> - 익명 사용 분석</li>
  <li><strong>Firebase Crashlytics</strong> - 충돌 보고 수집</li>
  <li><strong>Apple StoreKit</strong> - 앱 내 구매 처리</li>
</ul>
<h2>4. 데이터 삭제</h2>
<p>앱을 삭제하면 앱 데이터도 기기에서 제거됩니다. 앱은 데이터를 클라우드 서비스에 자동 동기화하지 않습니다.</p>
<h2>5. 아동의 개인정보</h2>
<p>앱은 13세 미만 아동의 개인정보를 의도적으로 수집하지 않습니다.</p>
<h2>6. 정책 변경</h2>
<p>필요한 경우 이 정책을 업데이트할 수 있습니다. 중요한 변경 사항이 있으면 앱 또는 이 페이지에서 안내합니다.</p>
<h2>7. 문의</h2>
<p>이 정책에 관한 문의는 아래로 연락해 주세요.</p>
<p>${CONTACT_LINK}</p>`,
      },
      support: {
        title: "지원 - HugConverter",
        body: `<h1>지원</h1>
<h2>자주 묻는 질문</h2>
<dl>
  <div class="faq-item">
    <dt>Q. 무료 저장 횟수 제한이 있나요?</dt>
    <dd>무료 버전은 하루 최대 5회 저장할 수 있습니다. Pro에서는 이 제한이 사라집니다.</dd>
  </div>
  <div class="faq-item">
    <dt>Q. Pro에는 무엇이 포함되나요?</dt>
    <dd>Pro에서는 모든 프리셋, 수동 설정, 일괄 변환, 무제한 저장을 사용할 수 있습니다. Pro는 일회성 구매입니다.</dd>
  </div>
  <div class="faq-item">
    <dt>Q. 구매를 복원하려면 어떻게 하나요?</dt>
    <dd>앱 설정 화면에서 "Restore Purchases"를 탭하세요. 같은 Apple ID로 구매한 항목이 복원됩니다.</dd>
  </div>
  <div class="faq-item">
    <dt>Q. 어떤 동영상 형식을 지원하나요?</dt>
    <dd>iPhone에서 촬영한 MOV 및 MP4 동영상을 지원합니다. 변환된 파일은 MP4로 저장됩니다.</dd>
  </div>
  <div class="faq-item">
    <dt>Q. 변환한 동영상은 어디에 저장되나요?</dt>
    <dd>변환된 동영상은 기기의 사진 보관함에 저장됩니다.</dd>
  </div>
  <div class="faq-item">
    <dt>Q. 동영상이 서버로 업로드되나요?</dt>
    <dd>아니요. 모든 처리는 기기에서 이루어지며 동영상 파일은 외부 서버로 전송되지 않습니다.</dd>
  </div>
</dl>
<h2>문의</h2>
<p>FAQ로 해결되지 않으면 이메일로 문의해 주세요.</p>
<p class="contact-wrap">${contactButton("이메일로 문의하기")}</p>
<h2>앱 정보</h2>
<ul>
  <li><strong>앱 이름</strong>: HugConverter</li>
  <li><strong>지원 OS</strong>: iOS 17.0 이상</li>
  <li><strong>개발자</strong>: Hiroya Ishihara</li>
</ul>`,
      },
    },
    pt: {
      switchLabel: "Idioma",
      backLabel: "Voltar ao início",
      index: {
        subtitle: "Continue gravando sem hesitar.",
        privacyTitle: "Política de privacidade",
        privacyDescription: "Como tratamos suas informações",
        termsTitle: "Termos de serviço",
        termsDescription: "Atualmente disponível em japonês e inglês",
        supportTitle: "Suporte",
        supportDescription: "FAQ e informações de contato",
      },
      privacy: {
        title: "Política de privacidade - HugConverter",
        body: `<h1>Política de privacidade</h1>
<p class="last-updated">Última atualização: 3 de março de 2026</p>
<p>Hiroya Ishihara respeita sua privacidade e se compromete a proteger informações pessoais quando você usa o HugConverter. Esta política resume como o app trata as informações.</p>
<h2>1. Informações que tratamos</h2>
<h3>Acesso à fototeca</h3>
<p>O app solicita acesso à sua fototeca para comprimir vídeos e criar timelapses. Os vídeos selecionados são processados localmente no seu dispositivo e não são enviados para servidores externos.</p>
<h3>Dados armazenados no dispositivo</h3>
<p>Histórico de conversão, número de salvamentos e configurações são armazenados no seu dispositivo. Não coletamos diretamente esses dados locais.</p>
<h3>Análises e relatórios de falha</h3>
<p>Usamos Firebase Analytics e Firebase Crashlytics para melhorar a confiabilidade. Os dados coletados se limitam a tendências anônimas de uso e informações de falha, e não são usados para identificar você diretamente.</p>
<h2>2. Compras no app</h2>
<p>O app usa Apple StoreKit para compras no app. A Apple gerencia os dados de pagamento, e nós não recebemos diretamente informações do cartão de crédito.</p>
<h2>3. Serviços de terceiros</h2>
<p>O app usa os seguintes serviços:</p>
<ul>
  <li><strong>Firebase Analytics</strong> - Análise anônima de uso</li>
  <li><strong>Firebase Crashlytics</strong> - Coleta de relatórios de falha</li>
  <li><strong>Apple StoreKit</strong> - Processamento de compras no app</li>
</ul>
<h2>4. Exclusão de dados</h2>
<p>Os dados do app são removidos do seu dispositivo quando você desinstala o app. O app não sincroniza automaticamente seus dados com serviços em nuvem.</p>
<h2>5. Privacidade infantil</h2>
<p>O app não coleta conscientemente informações pessoais de crianças menores de 13 anos.</p>
<h2>6. Alterações nesta política</h2>
<p>Podemos atualizar esta política quando necessário. Se houver uma mudança relevante, avisaremos você no app ou nesta página.</p>
<h2>7. Contato</h2>
<p>Se você tiver dúvidas sobre esta política, entre em contato em:</p>
<p>${CONTACT_LINK}</p>`,
      },
      support: {
        title: "Suporte - HugConverter",
        body: `<h1>Suporte</h1>
<h2>Perguntas frequentes</h2>
<dl>
  <div class="faq-item">
    <dt>Q. Existe um limite gratuito de salvamento?</dt>
    <dd>A versão gratuita permite até 5 salvamentos por dia. Pro remove esse limite.</dd>
  </div>
  <div class="faq-item">
    <dt>Q. O que está incluído no Pro?</dt>
    <dd>O Pro libera todos os presets, controles manuais, conversão em lote e salvamentos ilimitados. O Pro é oferecido como compra única.</dd>
  </div>
  <div class="faq-item">
    <dt>Q. Como restauro minha compra?</dt>
    <dd>Abra a tela de ajustes do app e toque em "Restore Purchases". As compras feitas com o mesmo Apple ID serão restauradas.</dd>
  </div>
  <div class="faq-item">
    <dt>Q. Quais formatos de vídeo são compatíveis?</dt>
    <dd>O app é compatível com vídeos MOV e MP4 gravados no iPhone. Os arquivos convertidos são salvos em MP4.</dd>
  </div>
  <div class="faq-item">
    <dt>Q. Onde os vídeos convertidos são salvos?</dt>
    <dd>Os vídeos convertidos são salvos na fototeca do seu dispositivo.</dd>
  </div>
  <div class="faq-item">
    <dt>Q. Meus vídeos são enviados para algum servidor?</dt>
    <dd>Não. Todo o processamento acontece no seu dispositivo, e os arquivos de vídeo não são enviados para servidores externos.</dd>
  </div>
</dl>
<h2>Contato</h2>
<p>Se o FAQ não resolver seu problema, envie um e-mail para nós.</p>
<p class="contact-wrap">${contactButton("Falar por e-mail")}</p>
<h2>Informações do app</h2>
<ul>
  <li><strong>Nome do app</strong>: HugConverter</li>
  <li><strong>Sistema compatível</strong>: iOS 17.0 ou posterior</li>
  <li><strong>Desenvolvedor</strong>: Hiroya Ishihara</li>
</ul>`,
      },
    },
    ru: {
      switchLabel: "Язык",
      backLabel: "Вернуться на главную",
      index: {
        subtitle: "Записывайте без лишних сомнений.",
        privacyTitle: "Политика конфиденциальности",
        privacyDescription: "Как мы обрабатываем ваши данные",
        termsTitle: "Условия использования",
        termsDescription: "Сейчас доступно на японском и английском",
        supportTitle: "Поддержка",
        supportDescription: "FAQ и контактная информация",
      },
      privacy: {
        title: "Политика конфиденциальности - HugConverter",
        body: `<h1>Политика конфиденциальности</h1>
<p class="last-updated">Последнее обновление: 3 марта 2026 г.</p>
<p>Hiroya Ishihara уважает вашу конфиденциальность и стремится защищать персональные данные при использовании HugConverter. Эта политика кратко описывает, как приложение обрабатывает информацию.</p>
<h2>1. Какие данные мы обрабатываем</h2>
<h3>Доступ к медиатеке</h3>
<p>Приложению нужен доступ к вашей медиатеке, чтобы сжимать видео и создавать таймлапсы. Выбранные видео обрабатываются локально на вашем устройстве и не отправляются на внешние серверы.</p>
<h3>Данные, хранящиеся на устройстве</h3>
<p>История конвертации, количество сохранений и настройки сохраняются на вашем устройстве. Мы не собираем эти локальные данные напрямую.</p>
<h3>Аналитика и отчеты о сбоях</h3>
<p>Мы используем Firebase Analytics и Firebase Crashlytics для повышения надежности. Собираются только анонимные данные об использовании и сведения о сбоях, которые не используются для прямой идентификации пользователя.</p>
<h2>2. Встроенные покупки</h2>
<p>Для встроенных покупок приложение использует Apple StoreKit. Платежные данные обрабатываются Apple, и мы не получаем данные банковской карты напрямую.</p>
<h2>3. Сторонние сервисы</h2>
<p>Приложение использует следующие сервисы:</p>
<ul>
  <li><strong>Firebase Analytics</strong> - Анонимная аналитика использования</li>
  <li><strong>Firebase Crashlytics</strong> - Сбор отчетов о сбоях</li>
  <li><strong>Apple StoreKit</strong> - Обработка встроенных покупок</li>
</ul>
<h2>4. Удаление данных</h2>
<p>Данные приложения удаляются с устройства при удалении приложения. Приложение не синхронизирует ваши данные с облачными сервисами автоматически.</p>
<h2>5. Конфиденциальность детей</h2>
<p>Приложение не собирает намеренно персональные данные детей младше 13 лет.</p>
<h2>6. Изменения политики</h2>
<p>Мы можем обновлять эту политику при необходимости. Если произойдет существенное изменение, мы сообщим об этом в приложении или на этой странице.</p>
<h2>7. Контакты</h2>
<p>Если у вас есть вопросы по этой политике, свяжитесь с нами:</p>
<p>${CONTACT_LINK}</p>`,
      },
      support: {
        title: "Поддержка - HugConverter",
        body: `<h1>Поддержка</h1>
<h2>Часто задаваемые вопросы</h2>
<dl>
  <div class="faq-item">
    <dt>Q. Есть ли бесплатный лимит сохранений?</dt>
    <dd>Бесплатная версия позволяет сохранять до 5 раз в день. Pro снимает это ограничение.</dd>
  </div>
  <div class="faq-item">
    <dt>Q. Что входит в Pro?</dt>
    <dd>Pro открывает все пресеты, ручные настройки, пакетную конвертацию и неограниченные сохранения. Pro доступен как разовая покупка.</dd>
  </div>
  <div class="faq-item">
    <dt>Q. Как восстановить покупку?</dt>
    <dd>Откройте экран настроек в приложении и нажмите "Restore Purchases". Покупки, сделанные с тем же Apple ID, будут восстановлены.</dd>
  </div>
  <div class="faq-item">
    <dt>Q. Какие форматы видео поддерживаются?</dt>
    <dd>Приложение поддерживает видео MOV и MP4, снятые на iPhone. Конвертированные файлы сохраняются в формате MP4.</dd>
  </div>
  <div class="faq-item">
    <dt>Q. Где сохраняются конвертированные видео?</dt>
    <dd>Конвертированные видео сохраняются в медиатеку вашего устройства.</dd>
  </div>
  <div class="faq-item">
    <dt>Q. Загружаются ли мои видео на сервер?</dt>
    <dd>Нет. Вся обработка выполняется на устройстве, и видеофайлы не отправляются на внешние серверы.</dd>
  </div>
</dl>
<h2>Контакты</h2>
<p>Если FAQ не помог, напишите нам по электронной почте.</p>
<p class="contact-wrap">${contactButton("Связаться по email")}</p>
<h2>Информация о приложении</h2>
<ul>
  <li><strong>Название приложения</strong>: HugConverter</li>
  <li><strong>Поддерживаемая ОС</strong>: iOS 17.0 и новее</li>
  <li><strong>Разработчик</strong>: Hiroya Ishihara</li>
</ul>`,
      },
    },
    th: {
      switchLabel: "ภาษา",
      backLabel: "กลับไปหน้าแรก",
      index: {
        subtitle: "พร้อมบันทึกทุกช่วงเวลาโดยไม่ต้องลังเล",
        privacyTitle: "นโยบายความเป็นส่วนตัว",
        privacyDescription: "วิธีที่เราจัดการข้อมูลของคุณ",
        termsTitle: "ข้อกำหนดการใช้งาน",
        termsDescription: "ขณะนี้มีให้บริการเป็นภาษาญี่ปุ่นและภาษาอังกฤษ",
        supportTitle: "การสนับสนุน",
        supportDescription: "คำถามที่พบบ่อยและข้อมูลติดต่อ",
      },
      privacy: {
        title: "นโยบายความเป็นส่วนตัว - HugConverter",
        body: `<h1>นโยบายความเป็นส่วนตัว</h1>
<p class="last-updated">อัปเดตล่าสุด: 3 มีนาคม 2026</p>
<p>Hiroya Ishihara เคารพความเป็นส่วนตัวของคุณและมุ่งมั่นในการปกป้องข้อมูลส่วนบุคคลเมื่อคุณใช้ HugConverter นโยบายนี้สรุปวิธีที่แอปจัดการข้อมูล</p>
<h2>1. ข้อมูลที่เราใช้งาน</h2>
<h3>การเข้าถึงคลังรูปภาพ</h3>
<p>แอปจะขอเข้าถึงคลังรูปภาพเพื่อบีบอัดวิดีโอและสร้างไทม์แลปส์ วิดีโอที่เลือกจะถูกประมวลผลภายในอุปกรณ์และจะไม่ถูกส่งไปยังเซิร์ฟเวอร์ภายนอก</p>
<h3>ข้อมูลที่เก็บไว้ในอุปกรณ์</h3>
<p>ประวัติการแปลง จำนวนครั้งที่บันทึก และการตั้งค่าจะถูกเก็บไว้ในอุปกรณ์ของคุณ เราไม่ได้เก็บข้อมูลภายในเครื่องเหล่านี้โดยตรง</p>
<h3>การวิเคราะห์และรายงานการขัดข้อง</h3>
<p>เราใช้ Firebase Analytics และ Firebase Crashlytics เพื่อปรับปรุงความเสถียร ข้อมูลที่เก็บรวบรวมจำกัดอยู่ที่แนวโน้มการใช้งานแบบไม่ระบุตัวตนและข้อมูลการขัดข้อง และไม่ได้ใช้เพื่อระบุตัวตนของคุณโดยตรง</p>
<h2>2. การซื้อภายในแอป</h2>
<p>แอปใช้ Apple StoreKit สำหรับการซื้อภายในแอป Apple เป็นผู้จัดการรายละเอียดการชำระเงิน และเราไม่ได้รับข้อมูลบัตรเครดิตของคุณโดยตรง</p>
<h2>3. บริการจากบุคคลที่สาม</h2>
<p>แอปใช้บริการดังต่อไปนี้:</p>
<ul>
  <li><strong>Firebase Analytics</strong> - การวิเคราะห์การใช้งานแบบไม่ระบุตัวตน</li>
  <li><strong>Firebase Crashlytics</strong> - การเก็บรายงานการขัดข้อง</li>
  <li><strong>Apple StoreKit</strong> - การประมวลผลการซื้อภายในแอป</li>
</ul>
<h2>4. การลบข้อมูล</h2>
<p>ข้อมูลของแอปจะถูกลบออกจากอุปกรณ์ของคุณเมื่อคุณลบแอป แอปจะไม่ซิงก์ข้อมูลของคุณไปยังบริการคลาวด์โดยอัตโนมัติ</p>
<h2>5. ความเป็นส่วนตัวของเด็ก</h2>
<p>แอปจะไม่เก็บข้อมูลส่วนบุคคลของเด็กอายุต่ำกว่า 13 ปีโดยเจตนา</p>
<h2>6. การเปลี่ยนแปลงนโยบาย</h2>
<p>เราอาจอัปเดตนโยบายนี้เมื่อจำเป็น หากมีการเปลี่ยนแปลงที่สำคัญ เราจะแจ้งให้คุณทราบในแอปหรือบนหน้านี้</p>
<h2>7. ติดต่อ</h2>
<p>หากคุณมีคำถามเกี่ยวกับนโยบายนี้ โปรดติดต่อเราที่:</p>
<p>${CONTACT_LINK}</p>`,
      },
      support: {
        title: "การสนับสนุน - HugConverter",
        body: `<h1>การสนับสนุน</h1>
<h2>คำถามที่พบบ่อย</h2>
<dl>
  <div class="faq-item">
    <dt>Q. มีการจำกัดจำนวนการบันทึกฟรีหรือไม่?</dt>
    <dd>เวอร์ชันฟรีบันทึกได้สูงสุด 5 ครั้งต่อวัน ส่วน Pro จะไม่มีข้อจำกัดนี้</dd>
  </div>
  <div class="faq-item">
    <dt>Q. Pro มีอะไรบ้าง?</dt>
    <dd>Pro ปลดล็อกพรีเซ็ตทั้งหมด การตั้งค่าแบบกำหนดเอง การแปลงแบบกลุ่ม และการบันทึกไม่จำกัด Pro เป็นการซื้อครั้งเดียว</dd>
  </div>
  <div class="faq-item">
    <dt>Q. จะกู้คืนการซื้อได้อย่างไร?</dt>
    <dd>เปิดหน้าการตั้งค่าในแอปแล้วแตะ "Restore Purchases" รายการที่ซื้อด้วย Apple ID เดียวกันจะถูกกู้คืน</dd>
  </div>
  <div class="faq-item">
    <dt>Q. รองรับไฟล์วิดีโอรูปแบบใด?</dt>
    <dd>แอปรองรับวิดีโอ MOV และ MP4 ที่บันทึกด้วย iPhone และไฟล์ที่แปลงแล้วจะถูกบันทึกเป็น MP4</dd>
  </div>
  <div class="faq-item">
    <dt>Q. วิดีโอที่แปลงแล้วจะถูกบันทึกไว้ที่ไหน?</dt>
    <dd>วิดีโอที่แปลงแล้วจะถูกบันทึกไปยังคลังรูปภาพของอุปกรณ์</dd>
  </div>
  <div class="faq-item">
    <dt>Q. วิดีโอของฉันถูกอัปโหลดไปที่เซิร์ฟเวอร์หรือไม่?</dt>
    <dd>ไม่ การประมวลผลทั้งหมดเกิดขึ้นบนอุปกรณ์ของคุณ และไฟล์วิดีโอจะไม่ถูกส่งไปยังเซิร์ฟเวอร์ภายนอก</dd>
  </div>
</dl>
<h2>ติดต่อ</h2>
<p>หาก FAQ ไม่สามารถแก้ปัญหาได้ โปรดติดต่อเราทางอีเมล</p>
<p class="contact-wrap">${contactButton("ติดต่อทางอีเมล")}</p>
<h2>ข้อมูลแอป</h2>
<ul>
  <li><strong>ชื่อแอป</strong>: HugConverter</li>
  <li><strong>ระบบที่รองรับ</strong>: iOS 17.0 ขึ้นไป</li>
  <li><strong>ผู้พัฒนา</strong>: Hiroya Ishihara</li>
</ul>`,
      },
    },
    tr: {
      switchLabel: "Dil",
      backLabel: "Ana sayfaya dön",
      index: {
        subtitle: "Kaydetmek için bir an bile tereddüt etmeyin.",
        privacyTitle: "Gizlilik Politikası",
        privacyDescription: "Bilgilerinizi nasıl işlediğimiz",
        termsTitle: "Hizmet Koşulları",
        termsDescription: "Şu anda Japonca ve İngilizce olarak sunuluyor",
        supportTitle: "Destek",
        supportDescription: "SSS ve iletişim bilgileri",
      },
      privacy: {
        title: "Gizlilik Politikası - HugConverter",
        body: `<h1>Gizlilik Politikası</h1>
<p class="last-updated">Son güncelleme: 3 Mart 2026</p>
<p>Hiroya Ishihara gizliliğinize saygı duyar ve HugConverter kullanırken kişisel bilgilerinizi korumayı taahhüt eder. Bu politika, uygulamanın bilgileri nasıl işlediğini özetler.</p>
<h2>1. İşlediğimiz Bilgiler</h2>
<h3>Fotoğraf Arşivine Erişim</h3>
<p>Uygulama videoları sıkıştırmak ve timelapse oluşturmak için fotoğraf arşivinize erişim ister. Seçilen videolar cihazınızda yerel olarak işlenir ve harici sunuculara gönderilmez.</p>
<h3>Cihazda Saklanan Veriler</h3>
<p>Dönüştürme geçmişi, kaydetme sayısı ve ayarlar cihazınızda saklanır. Bu yerel verileri doğrudan toplamıyoruz.</p>
<h3>Analitik ve Çökme Raporları</h3>
<p>Güvenilirliği artırmak için Firebase Analytics ve Firebase Crashlytics kullanıyoruz. Toplanan veriler anonim kullanım eğilimleri ve çökme bilgileriyle sınırlıdır ve sizi doğrudan tanımlamak için kullanılmaz.</p>
<h2>2. Uygulama İçi Satın Alımlar</h2>
<p>Uygulama içi satın alımlar için Apple StoreKit kullanılır. Ödeme bilgileri Apple tarafından yönetilir ve kredi kartı bilgilerinizi doğrudan almayız.</p>
<h2>3. Üçüncü Taraf Hizmetleri</h2>
<p>Uygulama aşağıdaki hizmetleri kullanır:</p>
<ul>
  <li><strong>Firebase Analytics</strong> - Anonim kullanım analizi</li>
  <li><strong>Firebase Crashlytics</strong> - Çökme raporu toplama</li>
  <li><strong>Apple StoreKit</strong> - Uygulama içi satın alma işlemleri</li>
</ul>
<h2>4. Veri Silme</h2>
<p>Uygulamayı kaldırdığınızda uygulama verileri cihazınızdan silinir. Uygulama verilerinizi bulut hizmetleriyle otomatik olarak senkronize etmez.</p>
<h2>5. Çocukların Gizliliği</h2>
<p>Uygulama 13 yaşın altındaki çocuklardan bilerek kişisel bilgi toplamaz.</p>
<h2>6. Politika Değişiklikleri</h2>
<p>Gerektiğinde bu politikayı güncelleyebiliriz. Önemli bir değişiklik olursa sizi uygulama içinde veya bu sayfada bilgilendiririz.</p>
<h2>7. İletişim</h2>
<p>Bu politika hakkında sorularınız varsa bizimle şu adresten iletişime geçin:</p>
<p>${CONTACT_LINK}</p>`,
      },
      support: {
        title: "Destek - HugConverter",
        body: `<h1>Destek</h1>
<h2>Sık Sorulan Sorular</h2>
<dl>
  <div class="faq-item">
    <dt>Q. Ücretsiz kaydetme sınırı var mı?</dt>
    <dd>Ücretsiz sürüm günde en fazla 5 kaydetmeye izin verir. Pro bu sınırı kaldırır.</dd>
  </div>
  <div class="faq-item">
    <dt>Q. Pro neleri içerir?</dt>
    <dd>Pro tüm hazır ayarları, manuel kontrolleri, toplu dönüştürmeyi ve sınırsız kaydetmeyi açar. Pro tek seferlik satın alma olarak sunulur.</dd>
  </div>
  <div class="faq-item">
    <dt>Q. Satın alımımı nasıl geri yüklerim?</dt>
    <dd>Uygulamadaki ayarlar ekranını açın ve "Restore Purchases" seçeneğine dokunun. Aynı Apple ID ile yapılan satın alımlar geri yüklenir.</dd>
  </div>
  <div class="faq-item">
    <dt>Q. Hangi video formatları destekleniyor?</dt>
    <dd>Uygulama iPhone'da kaydedilen MOV ve MP4 videolarını destekler. Dönüştürülen dosyalar MP4 olarak kaydedilir.</dd>
  </div>
  <div class="faq-item">
    <dt>Q. Dönüştürülen videolar nereye kaydedilir?</dt>
    <dd>Dönüştürülen videolar cihazınızın fotoğraf arşivine kaydedilir.</dd>
  </div>
  <div class="faq-item">
    <dt>Q. Videolarım bir sunucuya yükleniyor mu?</dt>
    <dd>Hayır. Tüm işlem cihazınızda yapılır ve video dosyaları harici sunuculara gönderilmez.</dd>
  </div>
</dl>
<h2>İletişim</h2>
<p>SSS sorununuzu çözmezse lütfen bize e-posta gönderin.</p>
<p class="contact-wrap">${contactButton("E-posta ile iletişime geç")}</p>
<h2>Uygulama Bilgileri</h2>
<ul>
  <li><strong>Uygulama Adı</strong>: HugConverter</li>
  <li><strong>Desteklenen OS</strong>: iOS 17.0 ve üzeri</li>
  <li><strong>Geliştirici</strong>: Hiroya Ishihara</li>
</ul>`,
      },
    },
    vi: {
      switchLabel: "Ngôn ngữ",
      backLabel: "Quay lại trang đầu",
      index: {
        subtitle: "Luôn sẵn sàng ghi lại khoảnh khắc tiếp theo.",
        privacyTitle: "Chính sách quyền riêng tư",
        privacyDescription: "Cách chúng tôi xử lý thông tin của bạn",
        termsTitle: "Điều khoản dịch vụ",
        termsDescription: "Hiện chỉ có bằng tiếng Nhật và tiếng Anh",
        supportTitle: "Hỗ trợ",
        supportDescription: "Câu hỏi thường gặp và thông tin liên hệ",
      },
      privacy: {
        title: "Chính sách quyền riêng tư - HugConverter",
        body: `<h1>Chính sách quyền riêng tư</h1>
<p class="last-updated">Cập nhật lần cuối: 3 tháng 3, 2026</p>
<p>Hiroya Ishihara tôn trọng quyền riêng tư của bạn và cam kết bảo vệ thông tin cá nhân khi bạn sử dụng HugConverter. Chính sách này tóm tắt cách ứng dụng xử lý thông tin.</p>
<h2>1. Thông tin chúng tôi xử lý</h2>
<h3>Quyền truy cập thư viện ảnh</h3>
<p>Ứng dụng yêu cầu quyền truy cập thư viện ảnh để nén video và tạo timelapse. Các video được chọn được xử lý cục bộ trên thiết bị và không được gửi đến máy chủ bên ngoài.</p>
<h3>Dữ liệu lưu trên thiết bị</h3>
<p>Lịch sử chuyển đổi, số lần lưu và cài đặt được lưu trên thiết bị của bạn. Chúng tôi không trực tiếp thu thập dữ liệu cục bộ đó.</p>
<h3>Phân tích và báo cáo sự cố</h3>
<p>Chúng tôi sử dụng Firebase Analytics và Firebase Crashlytics để cải thiện độ ổn định. Dữ liệu thu thập chỉ gồm xu hướng sử dụng ẩn danh và thông tin sự cố, không dùng để nhận diện trực tiếp bạn.</p>
<h2>2. Mua hàng trong ứng dụng</h2>
<p>Ứng dụng sử dụng Apple StoreKit cho mua hàng trong ứng dụng. Apple quản lý thông tin thanh toán và chúng tôi không trực tiếp nhận thông tin thẻ tín dụng.</p>
<h2>3. Dịch vụ bên thứ ba</h2>
<p>Ứng dụng sử dụng các dịch vụ sau:</p>
<ul>
  <li><strong>Firebase Analytics</strong> - Phân tích sử dụng ẩn danh</li>
  <li><strong>Firebase Crashlytics</strong> - Thu thập báo cáo sự cố</li>
  <li><strong>Apple StoreKit</strong> - Xử lý mua hàng trong ứng dụng</li>
</ul>
<h2>4. Xóa dữ liệu</h2>
<p>Dữ liệu ứng dụng sẽ được xóa khỏi thiết bị khi bạn gỡ cài đặt ứng dụng. Ứng dụng không tự động đồng bộ dữ liệu của bạn lên dịch vụ đám mây.</p>
<h2>5. Quyền riêng tư của trẻ em</h2>
<p>Ứng dụng không cố ý thu thập thông tin cá nhân của trẻ em dưới 13 tuổi.</p>
<h2>6. Thay đổi chính sách</h2>
<p>Chúng tôi có thể cập nhật chính sách này khi cần. Nếu có thay đổi quan trọng, chúng tôi sẽ thông báo trong ứng dụng hoặc trên trang này.</p>
<h2>7. Liên hệ</h2>
<p>Nếu bạn có câu hỏi về chính sách này, vui lòng liên hệ:</p>
<p>${CONTACT_LINK}</p>`,
      },
      support: {
        title: "Hỗ trợ - HugConverter",
        body: `<h1>Hỗ trợ</h1>
<h2>Câu hỏi thường gặp</h2>
<dl>
  <div class="faq-item">
    <dt>Q. Có giới hạn lưu miễn phí không?</dt>
    <dd>Phiên bản miễn phí cho phép lưu tối đa 5 lần mỗi ngày. Pro sẽ bỏ giới hạn này.</dd>
  </div>
  <div class="faq-item">
    <dt>Q. Pro bao gồm những gì?</dt>
    <dd>Pro mở khóa tất cả preset, điều khiển thủ công, chuyển đổi hàng loạt và lưu không giới hạn. Pro là gói mua một lần.</dd>
  </div>
  <div class="faq-item">
    <dt>Q. Làm sao để khôi phục giao dịch?</dt>
    <dd>Mở màn hình cài đặt trong ứng dụng và nhấn "Restore Purchases". Các giao dịch bằng cùng Apple ID sẽ được khôi phục.</dd>
  </div>
  <div class="faq-item">
    <dt>Q. Hỗ trợ định dạng video nào?</dt>
    <dd>Ứng dụng hỗ trợ video MOV và MP4 quay bằng iPhone. Tệp đã chuyển đổi được lưu ở định dạng MP4.</dd>
  </div>
  <div class="faq-item">
    <dt>Q. Video đã chuyển đổi được lưu ở đâu?</dt>
    <dd>Video đã chuyển đổi được lưu vào thư viện ảnh của thiết bị.</dd>
  </div>
  <div class="faq-item">
    <dt>Q. Video của tôi có được tải lên máy chủ không?</dt>
    <dd>Không. Mọi xử lý đều diễn ra trên thiết bị và tệp video không được gửi đến máy chủ bên ngoài.</dd>
  </div>
</dl>
<h2>Liên hệ</h2>
<p>Nếu FAQ chưa giải quyết được vấn đề của bạn, vui lòng gửi email cho chúng tôi.</p>
<p class="contact-wrap">${contactButton("Liên hệ qua email")}</p>
<h2>Thông tin ứng dụng</h2>
<ul>
  <li><strong>Tên ứng dụng</strong>: HugConverter</li>
  <li><strong>Hệ điều hành hỗ trợ</strong>: iOS 17.0 trở lên</li>
  <li><strong>Nhà phát triển</strong>: Hiroya Ishihara</li>
</ul>`,
      },
    },
    zhHans: {
      switchLabel: "语言",
      backLabel: "返回首页",
      index: {
        subtitle: "不再犹豫，随时记录下一刻。",
        privacyTitle: "隐私政策",
        privacyDescription: "我们如何处理你的信息",
        termsTitle: "服务条款",
        termsDescription: "目前提供日语和英语版本",
        supportTitle: "支持",
        supportDescription: "常见问题与联系方式",
      },
      privacy: {
        title: "隐私政策 - HugConverter",
        body: `<h1>隐私政策</h1>
<p class="last-updated">最后更新：2026年3月3日</p>
<p>Hiroya Ishihara 尊重你的隐私，并致力于在你使用 HugConverter 时保护个人信息。本政策概述了应用如何处理信息。</p>
<h2>1. 我们处理的信息</h2>
<h3>访问照片图库</h3>
<p>应用需要访问你的照片图库，以便压缩视频和创建延时视频。所选视频仅在你的设备上本地处理，不会上传到外部服务器。</p>
<h3>存储在设备上的数据</h3>
<p>转换历史、保存次数和设置会保存在你的设备上。我们不会直接收集这些本地数据。</p>
<h3>分析与崩溃报告</h3>
<p>我们使用 Firebase Analytics 和 Firebase Crashlytics 来提升稳定性。收集的数据仅限匿名使用趋势和崩溃信息，不会直接识别你的身份。</p>
<h2>2. 应用内购买</h2>
<p>应用使用 Apple StoreKit 处理应用内购买。支付信息由 Apple 管理，我们不会直接接收你的信用卡信息。</p>
<h2>3. 第三方服务</h2>
<p>应用使用以下服务：</p>
<ul>
  <li><strong>Firebase Analytics</strong> - 匿名使用分析</li>
  <li><strong>Firebase Crashlytics</strong> - 崩溃报告收集</li>
  <li><strong>Apple StoreKit</strong> - 应用内购买处理</li>
</ul>
<h2>4. 数据删除</h2>
<p>当你卸载应用时，应用数据会从设备中删除。应用不会自动将数据同步到云服务。</p>
<h2>5. 儿童隐私</h2>
<p>应用不会故意收集 13 岁以下儿童的个人信息。</p>
<h2>6. 政策变更</h2>
<p>我们可能会在需要时更新本政策。如有重大变更，我们会在应用内或本页面通知你。</p>
<h2>7. 联系方式</h2>
<p>如果你对本政策有任何疑问，请通过以下方式联系：</p>
<p>${CONTACT_LINK}</p>`,
      },
      support: {
        title: "支持 - HugConverter",
        body: `<h1>支持</h1>
<h2>常见问题</h2>
<dl>
  <div class="faq-item">
    <dt>Q. 免费版有保存次数限制吗？</dt>
    <dd>免费版每天最多可保存 5 次。Pro 版会取消该限制。</dd>
  </div>
  <div class="faq-item">
    <dt>Q. Pro 版包含哪些功能？</dt>
    <dd>Pro 版可解锁全部预设、手动控制、批量转换以及无限保存。Pro 为一次性购买。</dd>
  </div>
  <div class="faq-item">
    <dt>Q. 如何恢复购买？</dt>
    <dd>打开应用中的设置页面并点击“Restore Purchases”。使用同一 Apple ID 的购买记录将被恢复。</dd>
  </div>
  <div class="faq-item">
    <dt>Q. 支持哪些视频格式？</dt>
    <dd>应用支持在 iPhone 上拍摄的 MOV 和 MP4 视频。转换后的文件会保存为 MP4。</dd>
  </div>
  <div class="faq-item">
    <dt>Q. 转换后的视频保存在哪里？</dt>
    <dd>转换后的视频会保存到设备的照片图库中。</dd>
  </div>
  <div class="faq-item">
    <dt>Q. 视频会被上传到服务器吗？</dt>
    <dd>不会。所有处理都在你的设备上完成，视频文件不会发送到外部服务器。</dd>
  </div>
</dl>
<h2>联系</h2>
<p>如果常见问题无法解决你的问题，请通过电子邮件联系我们。</p>
<p class="contact-wrap">${contactButton("通过电子邮件联系")}</p>
<h2>应用信息</h2>
<ul>
  <li><strong>应用名称</strong>: HugConverter</li>
  <li><strong>支持系统</strong>: iOS 17.0 及以上</li>
  <li><strong>开发者</strong>: Hiroya Ishihara</li>
</ul>`,
      },
    },
    zhHant: {
      switchLabel: "語言",
      backLabel: "返回首頁",
      index: {
        subtitle: "不再猶豫，隨時記錄下一刻。",
        privacyTitle: "隱私權政策",
        privacyDescription: "我們如何處理你的資訊",
        termsTitle: "服務條款",
        termsDescription: "目前提供日文與英文版本",
        supportTitle: "支援",
        supportDescription: "常見問題與聯絡方式",
      },
      privacy: {
        title: "隱私權政策 - HugConverter",
        body: `<h1>隱私權政策</h1>
<p class="last-updated">最後更新：2026年3月3日</p>
<p>Hiroya Ishihara 尊重你的隱私，並致力於在你使用 HugConverter 時保護個人資訊。本政策概述應用程式如何處理資訊。</p>
<h2>1. 我們處理的資訊</h2>
<h3>存取照片圖庫</h3>
<p>應用程式需要存取你的照片圖庫，以便壓縮影片並建立縮時影片。所選影片只會在你的裝置上本機處理，不會上傳到外部伺服器。</p>
<h3>儲存在裝置上的資料</h3>
<p>轉換紀錄、儲存次數與設定會保存在你的裝置上。我們不會直接收集這些本機資料。</p>
<h3>分析與當機報告</h3>
<p>我們使用 Firebase Analytics 與 Firebase Crashlytics 來提升穩定性。收集的資料僅限匿名使用趨勢與當機資訊，不會直接識別你的身分。</p>
<h2>2. App 內購買</h2>
<p>應用程式使用 Apple StoreKit 處理 App 內購買。付款資訊由 Apple 管理，我們不會直接取得你的信用卡資訊。</p>
<h2>3. 第三方服務</h2>
<p>應用程式使用以下服務：</p>
<ul>
  <li><strong>Firebase Analytics</strong> - 匿名使用分析</li>
  <li><strong>Firebase Crashlytics</strong> - 收集當機報告</li>
  <li><strong>Apple StoreKit</strong> - 處理 App 內購買</li>
</ul>
<h2>4. 資料刪除</h2>
<p>當你刪除應用程式時，應用程式資料也會從裝置中移除。應用程式不會自動將資料同步到雲端服務。</p>
<h2>5. 兒童隱私</h2>
<p>應用程式不會故意收集 13 歲以下兒童的個人資訊。</p>
<h2>6. 政策變更</h2>
<p>我們可能會在需要時更新本政策。如有重大變更，我們會在應用程式內或本頁面通知你。</p>
<h2>7. 聯絡方式</h2>
<p>如果你對本政策有任何疑問，請透過以下方式聯絡：</p>
<p>${CONTACT_LINK}</p>`,
      },
      support: {
        title: "支援 - HugConverter",
        body: `<h1>支援</h1>
<h2>常見問題</h2>
<dl>
  <div class="faq-item">
    <dt>Q. 免費版有儲存次數限制嗎？</dt>
    <dd>免費版每天最多可儲存 5 次。Pro 版會移除此限制。</dd>
  </div>
  <div class="faq-item">
    <dt>Q. Pro 版包含哪些功能？</dt>
    <dd>Pro 版可解鎖所有預設、手動控制、批次轉換與無限制儲存。Pro 為一次性購買。</dd>
  </div>
  <div class="faq-item">
    <dt>Q. 如何還原購買？</dt>
    <dd>請打開 App 內的設定頁面並點選「Restore Purchases」。使用相同 Apple ID 的購買紀錄會被還原。</dd>
  </div>
  <div class="faq-item">
    <dt>Q. 支援哪些影片格式？</dt>
    <dd>應用程式支援在 iPhone 上拍攝的 MOV 與 MP4 影片。轉換後的檔案會儲存為 MP4。</dd>
  </div>
  <div class="faq-item">
    <dt>Q. 轉換後的影片會儲存在哪裡？</dt>
    <dd>轉換後的影片會儲存到裝置的照片圖庫。</dd>
  </div>
  <div class="faq-item">
    <dt>Q. 影片會被上傳到伺服器嗎？</dt>
    <dd>不會。所有處理都在你的裝置上完成，影片檔案不會傳送到外部伺服器。</dd>
  </div>
</dl>
<h2>聯絡方式</h2>
<p>如果常見問題無法解決你的問題，請透過電子郵件聯絡我們。</p>
<p class="contact-wrap">${contactButton("透過電子郵件聯絡")}</p>
<h2>App 資訊</h2>
<ul>
  <li><strong>App 名稱</strong>: HugConverter</li>
  <li><strong>支援系統</strong>: iOS 17.0 以上</li>
  <li><strong>開發者</strong>: Hiroya Ishihara</li>
</ul>`,
      },
    },
  };

  const termsTranslations = {
    ja: {
      title: "利用規約 - HugConverter",
      body: `<h1>利用規約</h1>
<p class="last-updated">最終更新日: 2026年3月4日</p>
<p>本利用規約（以下「本規約」）は、Hiroya Ishihara（以下「当方」）が提供する HugConverter（以下「本アプリ」）の利用条件を定めるものです。ユーザーは、本アプリを利用することにより、本規約に同意したものとみなされます。</p>
<h2>1. サービス内容</h2>
<p>本アプリは、動画圧縮およびタイムラプス変換機能を提供します。変換処理は、原則としてユーザーのデバイス上で実行されます。</p>
<h2>2. 利用料金</h2>
<p>無料版では1日5回まで保存できます。Pro版では、無制限保存、全プリセット、マニュアル設定、一括変換等の機能が利用できます。アプリ内課金の決済は Apple StoreKit を通じて処理されます。</p>
<h2>3. 購入の復元</h2>
<p>以前の購入は、アプリ内の「購入を復元」機能から復元できる場合があります。ただし、Apple ID、ストアの状態その他の条件により、常に復元できることを保証するものではありません。</p>
<h2>4. 上書き保存およびデータ管理</h2>
<p>本アプリには、変換後の動画を元の動画に上書きして保存する機能が含まれます。ユーザーが上書き保存を選択した場合、元の動画データは変換後の動画に置き換えられ、元の動画を復元できない場合があります。</p>
<p>ユーザーは、上書き保存その他の不可逆な操作を行う前に、必要に応じて自らの責任で元データのバックアップを行うものとします。当方は、ユーザーによる上書き保存、削除その他の操作により失われたデータについて、復元、再取得、再生成その他の原状回復を保証しません。</p>
<h2>5. ユーザーコンテンツおよび権利</h2>
<p>ユーザーは、本アプリで変換、保存その他の処理を行う動画その他のコンテンツについて、適法に利用する権利を有していることを保証するものとします。第三者の著作権、肖像権、プライバシー権その他の権利を侵害したことにより生じた紛争は、ユーザーの責任と費用において解決するものとします。</p>
<h2>6. 禁止事項</h2>
<ul>
  <li>本アプリのリバースエンジニアリング、逆コンパイル、逆アセンブル</li>
  <li>本アプリの不正な改変、セキュリティ機能の回避または妨害</li>
  <li>第三者の権利を侵害する目的または態様で本アプリを利用すること</li>
  <li>法令または公序良俗に反する目的で本アプリを利用すること</li>
  <li>本アプリの運営または提供を妨害する行為</li>
</ul>
<h2>7. 知的財産権</h2>
<p>本アプリに関する著作権、商標権その他一切の知的財産権は、当方または正当な権利者に帰属します。変換対象となる元動画その他のコンテンツに関する権利は、それぞれの権利者に帰属します。</p>
<h2>8. 免責事項</h2>
<p>当方は、本アプリによる変換結果について、画質、音質、ファイルサイズ、再生互換性、保存成功、完全性、正確性その他一切の結果を保証しません。変換により、画質劣化、音声欠落、メタデータ消失、再生不能、保存失敗等が生じる場合があります。</p>
<p>また、端末の空き容量不足、OSまたは写真ライブラリの制限、権限設定、端末性能差、不具合、クラッシュその他の事由により、変換または保存が正常に完了しない場合があります。</p>
<p>前各項に関連してユーザーに損害が生じた場合であっても、当方は、当方の故意または重過失による場合を除き、法令上認められる範囲で責任を負わないものとします。</p>
<h2>9. 課金および返金</h2>
<p>本アプリ内課金の決済、請求、返金、支払方法その他決済に関する取扱いは、Apple の定める条件および手続に従うものとします。返金の可否については、当方ではなく Apple の判断およびポリシーが適用されます。</p>
<h2>10. サービスの変更・終了</h2>
<p>当方は、本アプリの内容の全部または一部を変更、停止または終了することがあります。</p>
<h2>11. 規約の変更</h2>
<p>当方は、必要に応じて本規約を変更することがあります。変更後の規約は、本ページに掲載された時点または別途定める効力発生日から効力を生じるものとします。</p>
<h2>12. 準拠法・管轄</h2>
<p>本規約は日本法に準拠し、本規約または本アプリに関して生じた紛争については、当方所在地を管轄する裁判所を第一審の専属的合意管轄裁判所とします。</p>
<h2>13. お問い合わせ</h2>
<p>本規約に関するお問い合わせは、以下までご連絡ください。</p>
<p>${CONTACT_LINK}</p>`,
    },
    en: {
      title: "Terms of Service - HugConverter",
      body: `<h1>Terms of Service</h1>
<p class="last-updated">Last updated: March 4, 2026</p>
<p>These Terms of Service ("Terms") govern your use of HugConverter (the "App") provided by Hiroya Ishihara. By using the App, you agree to these Terms.</p>
<h2>1. Service</h2>
<p>The App provides video compression and timelapse conversion features. Processing is generally performed on your device.</p>
<h2>2. Pricing</h2>
<p>The free version allows up to 5 saves per day. Pro unlocks unlimited saves, all presets, manual controls, batch conversion, and other features. In-app purchase payments are processed through Apple StoreKit.</p>
<h2>3. Restoring Purchases</h2>
<p>Previous purchases may be restored using the "Restore Purchases" feature in the App. However, restoration is not guaranteed in every case and may depend on your Apple ID, store status, or other conditions.</p>
<h2>4. Overwrite Saving and Data Management</h2>
<p>The App includes a feature that allows a converted video to be saved by overwriting the original video. If you choose overwrite saving, the original video data may be replaced by the converted file and may not be recoverable.</p>
<p>Before using overwrite saving or any other irreversible action, you are responsible for making your own backup of the original data if needed. We do not guarantee restoration, re-download, regeneration, or any other recovery of data lost due to overwrite saving, deletion, or other user actions.</p>
<h2>5. User Content and Rights</h2>
<p>You represent that you have the legal right to use any videos or other content processed through the App. Any dispute arising from infringement of copyright, publicity rights, privacy rights, or any other third-party rights is your responsibility to resolve at your own cost.</p>
<h2>6. Prohibited Conduct</h2>
<ul>
  <li>Reverse engineering, decompiling, or disassembling the App</li>
  <li>Unauthorized modification of the App, or bypassing or interfering with security features</li>
  <li>Using the App in a manner that infringes third-party rights</li>
  <li>Using the App for unlawful, abusive, or improper purposes</li>
  <li>Interfering with the operation or provision of the App</li>
</ul>
<h2>7. Intellectual Property</h2>
<p>All copyrights, trademarks, and other intellectual property rights in the App belong to us or the rightful owners. Rights in original videos and other source content remain with their respective owners.</p>
<h2>8. Disclaimer</h2>
<p>We do not guarantee any aspect of the conversion results, including image quality, sound quality, file size, playback compatibility, successful saving, completeness, or accuracy. Conversion may result in quality loss, missing audio, lost metadata, playback failure, or save failure.</p>
<p>Conversion or saving may also fail due to insufficient device storage, OS or photo library restrictions, permission settings, device performance differences, bugs, crashes, or other factors.</p>
<p>To the fullest extent permitted by applicable law, we are not liable for damages related to the matters above, except where caused by our intentional misconduct or gross negligence.</p>
<h2>9. Billing and Refunds</h2>
<p>Billing, charges, refunds, payment methods, and other payment handling for in-app purchases are subject to Apple's terms and procedures. Refund eligibility is determined by Apple, not by us.</p>
<h2>10. Changes and Termination</h2>
<p>We may change, suspend, or discontinue all or part of the App at any time.</p>
<h2>11. Updates to These Terms</h2>
<p>We may update these Terms as needed. Updated Terms become effective when posted on this page or on any separately specified effective date.</p>
<h2>12. Governing Law and Jurisdiction</h2>
<p>These Terms are governed by the laws of Japan. Any dispute related to these Terms or the App shall be subject to the exclusive jurisdiction of the court with jurisdiction over our principal place of business as the court of first instance.</p>
<h2>13. Contact</h2>
<p>If you have questions about these Terms, please contact us at:</p>
<p>${CONTACT_LINK}</p>`,
    },
    de: {
      title: "Nutzungsbedingungen - HugConverter",
      body: `<h1>Nutzungsbedingungen</h1>
<p class="last-updated">Zuletzt aktualisiert: 3. März 2026</p>
<p>Diese Nutzungsbedingungen regeln die Nutzung von HugConverter durch Hiroya Ishihara. Mit der Nutzung der App stimmst du diesen Bedingungen zu.</p>
<h2>1. Dienst</h2>
<p>Die App bietet Videokomprimierung und Zeitraffer-Konvertierung. Die gesamte Verarbeitung erfolgt auf deinem Gerät.</p>
<h2>2. Preise</h2>
<p>Die kostenlose Version erlaubt bis zu 5 Speicherungen pro Tag. Pro schaltet unbegrenztes Speichern, alle Presets, manuelle Einstellungen und Stapelverarbeitung frei. Zahlungen werden über Apple StoreKit abgewickelt.</p>
<h2>3. Wiederherstellung von Käufen</h2>
<p>Frühere Käufe können über "Käufe wiederherstellen" in der App wiederhergestellt werden.</p>
<h2>4. Unzulässige Nutzung</h2>
<ul>
  <li>Reverse Engineering, Dekompilierung oder Disassemblierung der App</li>
  <li>Unbefugte Änderungen oder Umgehung von Sicherheitsfunktionen</li>
  <li>Nutzung der App unter Verletzung von Rechten Dritter</li>
  <li>Rechtswidrige oder missbräuchliche Nutzung</li>
</ul>
<h2>5. Geistiges Eigentum</h2>
<p>Die Rechte an der App liegen bei uns oder den jeweiligen Rechteinhabern. Rechte an Originalvideos verbleiben bei ihren Eigentümern.</p>
<h2>6. Haftungsausschluss</h2>
<p>Wir übernehmen keine Gewähr für Konvertierungsergebnisse, Kompatibilität oder ununterbrochene Verfügbarkeit. Soweit gesetzlich zulässig, haften wir nicht für Schäden aus der Nutzung der App.</p>
<h2>7. Änderungen und Beendigung</h2>
<p>Wir können die App jederzeit ändern, aussetzen oder einstellen.</p>
<h2>8. Änderungen dieser Bedingungen</h2>
<p>Wir können diese Bedingungen bei Bedarf aktualisieren. Die aktualisierte Fassung gilt ab Veröffentlichung auf dieser Seite.</p>
<h2>9. Geltendes Recht</h2>
<p>Es gilt japanisches Recht. Streitigkeiten unterliegen der ausschließlichen Zuständigkeit der Gerichte an unserem Geschäftssitz.</p>
<h2>10. Kontakt</h2>
<p>Bei Fragen zu diesen Bedingungen kontaktiere uns bitte unter:</p>
<p>${CONTACT_LINK}</p>`,
    },
    es: {
      title: "Términos del servicio - HugConverter",
      body: `<h1>Términos del servicio</h1>
<p class="last-updated">Última actualización: 3 de marzo de 2026</p>
<p>Estos Términos del servicio regulan el uso de HugConverter proporcionado por Hiroya Ishihara. Al usar la app, aceptas estos términos.</p>
<h2>1. Servicio</h2>
<p>La app ofrece compresión de video y conversión a timelapse. Todo el procesamiento se realiza en tu dispositivo.</p>
<h2>2. Precios</h2>
<p>La versión gratuita permite hasta 5 guardados por día. Pro desbloquea guardados ilimitados, todos los ajustes preestablecidos, controles manuales y conversión por lotes. Los pagos se procesan mediante Apple StoreKit.</p>
<h2>3. Restaurar compras</h2>
<p>Puedes restaurar compras anteriores con la función "Restore Purchases" dentro de la app.</p>
<h2>4. Conducta prohibida</h2>
<ul>
  <li>Ingeniería inversa, descompilación o desmontaje de la app</li>
  <li>Modificación no autorizada o evasión de funciones de seguridad</li>
  <li>Uso de la app de forma que infrinja derechos de terceros</li>
  <li>Uso ilícito o abusivo de la app</li>
</ul>
<h2>5. Propiedad intelectual</h2>
<p>Los derechos de propiedad intelectual de la app pertenecen a nosotros o a los titulares correspondientes. Los derechos sobre los videos originales siguen perteneciendo a sus propietarios.</p>
<h2>6. Descargo de responsabilidad</h2>
<p>No garantizamos los resultados de conversión, la compatibilidad ni la disponibilidad ininterrumpida de la app. En la medida permitida por la ley, no somos responsables por daños derivados del uso de la app.</p>
<h2>7. Cambios y finalización</h2>
<p>Podemos modificar, suspender o finalizar la app en cualquier momento.</p>
<h2>8. Cambios de estos términos</h2>
<p>Podemos actualizar estos términos cuando sea necesario. La versión actualizada entra en vigor al publicarse en esta página.</p>
<h2>9. Ley aplicable</h2>
<p>Estos términos se rigen por las leyes de Japón y cualquier disputa estará sujeta a la jurisdicción exclusiva de los tribunales de nuestra sede principal.</p>
<h2>10. Contacto</h2>
<p>Si tienes preguntas sobre estos términos, contáctanos en:</p>
<p>${CONTACT_LINK}</p>`,
    },
    fr: {
      title: "Conditions d'utilisation - HugConverter",
      body: `<h1>Conditions d'utilisation</h1>
<p class="last-updated">Dernière mise à jour : 3 mars 2026</p>
<p>Ces conditions d'utilisation régissent l'utilisation de HugConverter fourni par Hiroya Ishihara. En utilisant l'app, vous acceptez ces conditions.</p>
<h2>1. Service</h2>
<p>L'app propose la compression vidéo et la conversion en timelapse. Tout le traitement est effectué sur votre appareil.</p>
<h2>2. Tarification</h2>
<p>La version gratuite permet jusqu'à 5 enregistrements par jour. Pro débloque les enregistrements illimités, tous les préréglages, les réglages manuels et la conversion par lot. Les paiements sont traités via Apple StoreKit.</p>
<h2>3. Restauration des achats</h2>
<p>Vous pouvez restaurer vos achats précédents avec la fonction "Restore Purchases" dans l'app.</p>
<h2>4. Utilisation interdite</h2>
<ul>
  <li>Ingénierie inverse, décompilation ou désassemblage de l'app</li>
  <li>Modification non autorisée ou contournement des fonctions de sécurité</li>
  <li>Utilisation de l'app d'une manière qui porte atteinte aux droits de tiers</li>
  <li>Utilisation illégale ou abusive</li>
</ul>
<h2>5. Propriété intellectuelle</h2>
<p>Les droits de propriété intellectuelle de l'app appartiennent à nous ou aux titulaires concernés. Les droits sur les vidéos d'origine restent à leurs propriétaires respectifs.</p>
<h2>6. Clause de non-responsabilité</h2>
<p>Nous ne garantissons pas les résultats de conversion, la compatibilité ni la disponibilité continue de l'app. Dans la mesure permise par la loi, nous ne sommes pas responsables des dommages liés à son utilisation.</p>
<h2>7. Modifications et interruption</h2>
<p>Nous pouvons modifier, suspendre ou interrompre l'app à tout moment.</p>
<h2>8. Mise à jour des conditions</h2>
<p>Nous pouvons mettre à jour ces conditions si nécessaire. La version mise à jour prend effet lorsqu'elle est publiée sur cette page.</p>
<h2>9. Droit applicable</h2>
<p>Ces conditions sont régies par le droit japonais et tout litige relève de la compétence exclusive des tribunaux de notre siège principal.</p>
<h2>10. Contact</h2>
<p>Si vous avez des questions sur ces conditions, contactez-nous à :</p>
<p>${CONTACT_LINK}</p>`,
    },
    id: {
      title: "Ketentuan Layanan - HugConverter",
      body: `<h1>Ketentuan Layanan</h1>
<p class="last-updated">Terakhir diperbarui: 3 Maret 2026</p>
<p>Ketentuan Layanan ini mengatur penggunaan HugConverter yang disediakan oleh Hiroya Ishihara. Dengan menggunakan aplikasi, Anda menyetujui ketentuan ini.</p>
<h2>1. Layanan</h2>
<p>Aplikasi menyediakan kompresi video dan konversi timelapse. Semua pemrosesan dilakukan di perangkat Anda.</p>
<h2>2. Harga</h2>
<p>Versi gratis memungkinkan hingga 5 penyimpanan per hari. Pro membuka penyimpanan tanpa batas, semua preset, kontrol manual, dan konversi batch. Pembayaran diproses melalui Apple StoreKit.</p>
<h2>3. Pemulihan Pembelian</h2>
<p>Anda dapat memulihkan pembelian sebelumnya melalui fitur "Restore Purchases" di aplikasi.</p>
<h2>4. Penggunaan yang Dilarang</h2>
<ul>
  <li>Rekayasa balik, dekompilasi, atau disassembly aplikasi</li>
  <li>Modifikasi tanpa izin atau melewati fitur keamanan</li>
  <li>Menggunakan aplikasi dengan cara yang melanggar hak pihak ketiga</li>
  <li>Penggunaan yang melanggar hukum atau bersifat menyalahgunakan</li>
</ul>
<h2>5. Hak Kekayaan Intelektual</h2>
<p>Hak kekayaan intelektual atas aplikasi dimiliki oleh kami atau pemegang hak terkait. Hak atas video asli tetap dimiliki pemiliknya masing-masing.</p>
<h2>6. Penafian</h2>
<p>Kami tidak menjamin hasil konversi, kompatibilitas, atau ketersediaan aplikasi tanpa gangguan. Sejauh diizinkan hukum, kami tidak bertanggung jawab atas kerugian akibat penggunaan aplikasi.</p>
<h2>7. Perubahan dan Penghentian</h2>
<p>Kami dapat mengubah, menangguhkan, atau menghentikan aplikasi kapan saja.</p>
<h2>8. Perubahan Ketentuan</h2>
<p>Kami dapat memperbarui ketentuan ini bila diperlukan. Versi yang diperbarui berlaku saat dipublikasikan di halaman ini.</p>
<h2>9. Hukum yang Berlaku</h2>
<p>Ketentuan ini diatur oleh hukum Jepang, dan sengketa tunduk pada yurisdiksi eksklusif pengadilan di lokasi utama usaha kami.</p>
<h2>10. Kontak</h2>
<p>Jika Anda memiliki pertanyaan tentang ketentuan ini, hubungi kami di:</p>
<p>${CONTACT_LINK}</p>`,
    },
    it: {
      title: "Termini di servizio - HugConverter",
      body: `<h1>Termini di servizio</h1>
<p class="last-updated">Ultimo aggiornamento: 3 marzo 2026</p>
<p>Questi Termini di servizio regolano l'uso di HugConverter fornito da Hiroya Ishihara. Utilizzando l'app, accetti questi termini.</p>
<h2>1. Servizio</h2>
<p>L'app offre compressione video e conversione timelapse. Tutta l'elaborazione avviene sul tuo dispositivo.</p>
<h2>2. Prezzi</h2>
<p>La versione gratuita consente fino a 5 salvataggi al giorno. Pro sblocca salvataggi illimitati, tutti i preset, i controlli manuali e la conversione batch. I pagamenti sono gestiti tramite Apple StoreKit.</p>
<h2>3. Ripristino acquisti</h2>
<p>Puoi ripristinare gli acquisti precedenti tramite la funzione "Restore Purchases" nell'app.</p>
<h2>4. Condotte vietate</h2>
<ul>
  <li>Reverse engineering, decompilazione o disassemblaggio dell'app</li>
  <li>Modifiche non autorizzate o aggiramento delle funzioni di sicurezza</li>
  <li>Uso dell'app in modo da violare diritti di terzi</li>
  <li>Uso illecito o abusivo</li>
</ul>
<h2>5. Proprietà intellettuale</h2>
<p>I diritti di proprietà intellettuale dell'app appartengono a noi o ai rispettivi titolari. I diritti sui video originali restano ai rispettivi proprietari.</p>
<h2>6. Esclusione di responsabilità</h2>
<p>Non garantiamo i risultati della conversione, la compatibilità o la disponibilità continua dell'app. Nei limiti consentiti dalla legge, non siamo responsabili dei danni derivanti dall'uso dell'app.</p>
<h2>7. Modifiche e cessazione</h2>
<p>Possiamo modificare, sospendere o interrompere l'app in qualsiasi momento.</p>
<h2>8. Aggiornamenti dei termini</h2>
<p>Possiamo aggiornare questi termini quando necessario. La versione aggiornata entra in vigore quando viene pubblicata su questa pagina.</p>
<h2>9. Legge applicabile</h2>
<p>Questi termini sono regolati dalle leggi del Giappone e qualsiasi controversia sarà soggetta alla giurisdizione esclusiva dei tribunali della nostra sede principale.</p>
<h2>10. Contatti</h2>
<p>Per domande su questi termini, contattaci a:</p>
<p>${CONTACT_LINK}</p>`,
    },
    ko: {
      title: "이용 약관 - HugConverter",
      body: `<h1>이용 약관</h1>
<p class="last-updated">최종 업데이트: 2026년 3월 3일</p>
<p>본 이용 약관은 Hiroya Ishihara가 제공하는 HugConverter의 이용 조건을 규정합니다. 앱을 사용하면 본 약관에 동의한 것으로 간주됩니다.</p>
<h2>1. 서비스</h2>
<p>앱은 동영상 압축과 타임랩스 변환 기능을 제공합니다. 모든 처리는 기기에서 이루어집니다.</p>
<h2>2. 요금</h2>
<p>무료 버전은 하루 최대 5회 저장할 수 있습니다. Pro는 무제한 저장, 모든 프리셋, 수동 설정, 일괄 변환을 제공합니다. 결제는 Apple StoreKit을 통해 처리됩니다.</p>
<h2>3. 구매 복원</h2>
<p>앱 내 "Restore Purchases" 기능을 통해 이전 구매를 복원할 수 있습니다.</p>
<h2>4. 금지 행위</h2>
<ul>
  <li>앱의 리버스 엔지니어링, 디컴파일, 디스어셈블</li>
  <li>무단 수정 또는 보안 기능 우회</li>
  <li>제3자의 권리를 침해하는 방식으로 앱 사용</li>
  <li>불법적이거나 남용적인 목적의 사용</li>
</ul>
<h2>5. 지적 재산권</h2>
<p>앱에 대한 지적 재산권은 당사 또는 해당 권리자에게 있습니다. 원본 동영상에 대한 권리는 각 소유자에게 있습니다.</p>
<h2>6. 면책</h2>
<p>당사는 변환 결과, 호환성, 앱의 지속적 제공을 보장하지 않습니다. 법이 허용하는 범위에서 앱 사용으로 인한 손해에 대해 책임지지 않습니다.</p>
<h2>7. 변경 및 종료</h2>
<p>당사는 언제든지 앱을 변경, 중단 또는 종료할 수 있습니다.</p>
<h2>8. 약관 변경</h2>
<p>필요한 경우 본 약관을 업데이트할 수 있습니다. 업데이트된 약관은 이 페이지에 게시되는 시점부터 효력이 발생합니다.</p>
<h2>9. 준거법</h2>
<p>본 약관은 일본법의 적용을 받으며, 분쟁은 당사 주요 사업장 소재지의 법원을 전속 관할로 합니다.</p>
<h2>10. 문의</h2>
<p>본 약관에 관한 문의는 아래로 연락해 주세요.</p>
<p>${CONTACT_LINK}</p>`,
    },
    pt: {
      title: "Termos de serviço - HugConverter",
      body: `<h1>Termos de serviço</h1>
<p class="last-updated">Última atualização: 3 de março de 2026</p>
<p>Estes Termos de serviço regem o uso do HugConverter fornecido por Hiroya Ishihara. Ao usar o app, você concorda com estes termos.</p>
<h2>1. Serviço</h2>
<p>O app oferece compressão de vídeo e conversão para timelapse. Todo o processamento é feito no seu dispositivo.</p>
<h2>2. Preços</h2>
<p>A versão gratuita permite até 5 salvamentos por dia. Pro desbloqueia salvamentos ilimitados, todos os presets, controles manuais e conversão em lote. Os pagamentos são processados pelo Apple StoreKit.</p>
<h2>3. Restaurar compras</h2>
<p>Você pode restaurar compras anteriores usando a função "Restore Purchases" no app.</p>
<h2>4. Condutas proibidas</h2>
<ul>
  <li>Engenharia reversa, descompilação ou desmontagem do app</li>
  <li>Modificação não autorizada ou desvio de recursos de segurança</li>
  <li>Uso do app de modo que viole direitos de terceiros</li>
  <li>Uso ilegal ou abusivo</li>
</ul>
<h2>5. Propriedade intelectual</h2>
<p>Os direitos de propriedade intelectual do app pertencem a nós ou aos respectivos titulares. Os direitos sobre os vídeos originais permanecem com seus proprietários.</p>
<h2>6. Isenção de responsabilidade</h2>
<p>Não garantimos os resultados de conversão, a compatibilidade ou a disponibilidade contínua do app. Na medida permitida por lei, não somos responsáveis por danos decorrentes do uso do app.</p>
<h2>7. Alterações e encerramento</h2>
<p>Podemos alterar, suspender ou encerrar o app a qualquer momento.</p>
<h2>8. Atualizações destes termos</h2>
<p>Podemos atualizar estes termos quando necessário. A versão atualizada entra em vigor quando publicada nesta página.</p>
<h2>9. Lei aplicável</h2>
<p>Estes termos são regidos pelas leis do Japão, e disputas ficam sujeitas à jurisdição exclusiva dos tribunais de nossa principal sede.</p>
<h2>10. Contato</h2>
<p>Se você tiver dúvidas sobre estes termos, entre em contato em:</p>
<p>${CONTACT_LINK}</p>`,
    },
    ru: {
      title: "Условия использования - HugConverter",
      body: `<h1>Условия использования</h1>
<p class="last-updated">Последнее обновление: 3 марта 2026 г.</p>
<p>Эти Условия использования регулируют использование HugConverter, предоставляемого Hiroya Ishihara. Используя приложение, вы соглашаетесь с этими условиями.</p>
<h2>1. Сервис</h2>
<p>Приложение предоставляет сжатие видео и преобразование в таймлапс. Вся обработка выполняется на вашем устройстве.</p>
<h2>2. Стоимость</h2>
<p>Бесплатная версия позволяет сохранять до 5 раз в день. Pro открывает неограниченные сохранения, все пресеты, ручные настройки и пакетную обработку. Платежи обрабатываются через Apple StoreKit.</p>
<h2>3. Восстановление покупок</h2>
<p>Вы можете восстановить предыдущие покупки через функцию "Restore Purchases" в приложении.</p>
<h2>4. Запрещенные действия</h2>
<ul>
  <li>Обратная разработка, декомпиляция или дизассемблирование приложения</li>
  <li>Несанкционированное изменение или обход функций безопасности</li>
  <li>Использование приложения с нарушением прав третьих лиц</li>
  <li>Незаконное или злоупотребляющее использование</li>
</ul>
<h2>5. Интеллектуальная собственность</h2>
<p>Права интеллектуальной собственности на приложение принадлежат нам или соответствующим правообладателям. Права на исходные видео остаются у их владельцев.</p>
<h2>6. Отказ от ответственности</h2>
<p>Мы не гарантируем результаты конвертации, совместимость или бесперебойную доступность приложения. В пределах, допускаемых законом, мы не несем ответственности за ущерб, связанный с использованием приложения.</p>
<h2>7. Изменения и прекращение</h2>
<p>Мы можем изменить, приостановить или прекратить работу приложения в любое время.</p>
<h2>8. Обновление условий</h2>
<p>Мы можем обновлять эти условия при необходимости. Обновленная версия вступает в силу после публикации на этой странице.</p>
<h2>9. Применимое право</h2>
<p>Эти условия регулируются законодательством Японии, а споры подлежат исключительной юрисдикции судов по месту нашей основной деятельности.</p>
<h2>10. Контакты</h2>
<p>Если у вас есть вопросы по этим условиям, свяжитесь с нами:</p>
<p>${CONTACT_LINK}</p>`,
    },
    th: {
      title: "ข้อกำหนดการใช้งาน - HugConverter",
      body: `<h1>ข้อกำหนดการใช้งาน</h1>
<p class="last-updated">อัปเดตล่าสุด: 3 มีนาคม 2026</p>
<p>ข้อกำหนดการใช้งานนี้กำหนดเงื่อนไขการใช้ HugConverter ที่ให้บริการโดย Hiroya Ishihara เมื่อคุณใช้แอป ถือว่าคุณยอมรับข้อกำหนดเหล่านี้</p>
<h2>1. บริการ</h2>
<p>แอปมีฟีเจอร์บีบอัดวิดีโอและแปลงเป็นไทม์แลปส์ การประมวลผลทั้งหมดเกิดขึ้นบนอุปกรณ์ของคุณ</p>
<h2>2. ราคา</h2>
<p>เวอร์ชันฟรีบันทึกได้สูงสุด 5 ครั้งต่อวัน Pro ปลดล็อกการบันทึกไม่จำกัด พรีเซ็ตทั้งหมด การตั้งค่าแบบกำหนดเอง และการแปลงแบบกลุ่ม การชำระเงินดำเนินการผ่าน Apple StoreKit</p>
<h2>3. การกู้คืนการซื้อ</h2>
<p>คุณสามารถกู้คืนการซื้อก่อนหน้าได้ผ่านฟีเจอร์ "Restore Purchases" ในแอป</p>
<h2>4. การใช้งานที่ต้องห้าม</h2>
<ul>
  <li>การทำวิศวกรรมย้อนกลับ ถอดคอมไพล์ หรือแยกส่วนแอป</li>
  <li>การแก้ไขโดยไม่ได้รับอนุญาตหรือการหลีกเลี่ยงระบบความปลอดภัย</li>
  <li>การใช้แอปในลักษณะที่ละเมิดสิทธิของบุคคลที่สาม</li>
  <li>การใช้งานที่ผิดกฎหมายหรือเป็นการละเมิด</li>
</ul>
<h2>5. ทรัพย์สินทางปัญญา</h2>
<p>สิทธิในทรัพย์สินทางปัญญาของแอปเป็นของเราหรือเจ้าของสิทธิที่เกี่ยวข้อง สิทธิในวิดีโอต้นฉบับยังคงเป็นของเจ้าของเดิม</p>
<h2>6. ข้อจำกัดความรับผิดชอบ</h2>
<p>เราไม่รับประกันผลลัพธ์การแปลง ความเข้ากันได้ หรือการให้บริการอย่างต่อเนื่องของแอป ในขอบเขตที่กฎหมายอนุญาต เราไม่รับผิดชอบต่อความเสียหายที่เกิดจากการใช้แอป</p>
<h2>7. การเปลี่ยนแปลงและการยุติ</h2>
<p>เราอาจเปลี่ยนแปลง ระงับ หรือยุติแอปได้ทุกเมื่อ</p>
<h2>8. การอัปเดตข้อกำหนด</h2>
<p>เราอาจอัปเดตข้อกำหนดเหล่านี้เมื่อจำเป็น เวอร์ชันที่อัปเดตจะมีผลเมื่อเผยแพร่บนหน้านี้</p>
<h2>9. กฎหมายที่ใช้บังคับ</h2>
<p>ข้อกำหนดเหล่านี้อยู่ภายใต้กฎหมายญี่ปุ่น และข้อพิพาทจะอยู่ภายใต้เขตอำนาจศาลแต่เพียงผู้เดียวของศาลในที่ตั้งสำนักงานใหญ่ของเรา</p>
<h2>10. ติดต่อ</h2>
<p>หากคุณมีคำถามเกี่ยวกับข้อกำหนดเหล่านี้ โปรดติดต่อเราที่:</p>
<p>${CONTACT_LINK}</p>`,
    },
    tr: {
      title: "Hizmet Koşulları - HugConverter",
      body: `<h1>Hizmet Koşulları</h1>
<p class="last-updated">Son güncelleme: 3 Mart 2026</p>
<p>Bu Hizmet Koşulları, Hiroya Ishihara tarafından sunulan HugConverter kullanımını düzenler. Uygulamayı kullanarak bu koşulları kabul etmiş olursunuz.</p>
<h2>1. Hizmet</h2>
<p>Uygulama video sıkıştırma ve timelapse dönüştürme sunar. Tüm işlem cihazınızda gerçekleştirilir.</p>
<h2>2. Fiyatlandırma</h2>
<p>Ücretsiz sürüm günde en fazla 5 kaydetmeye izin verir. Pro, sınırsız kaydetme, tüm hazır ayarlar, manuel kontroller ve toplu dönüştürmeyi açar. Ödemeler Apple StoreKit üzerinden işlenir.</p>
<h2>3. Satın Alımları Geri Yükleme</h2>
<p>Önceki satın alımlarınızı uygulamadaki "Restore Purchases" özelliği ile geri yükleyebilirsiniz.</p>
<h2>4. Yasaklı Kullanım</h2>
<ul>
  <li>Uygulamanın tersine mühendisliği, derlemesinin çözülmesi veya ayrıştırılması</li>
  <li>Yetkisiz değişiklik yapılması veya güvenlik özelliklerinin aşılması</li>
  <li>Uygulamanın üçüncü taraf haklarını ihlal edecek şekilde kullanılması</li>
  <li>Yasa dışı veya kötüye kullanıma yönelik kullanım</li>
</ul>
<h2>5. Fikri Mülkiyet</h2>
<p>Uygulamaya ilişkin fikri mülkiyet hakları bize veya ilgili hak sahiplerine aittir. Orijinal videolara ilişkin haklar sahiplerinde kalır.</p>
<h2>6. Sorumluluk Reddi</h2>
<p>Dönüştürme sonuçları, uyumluluk veya uygulamanın kesintisiz kullanılabilirliği konusunda garanti vermiyoruz. Yasanın izin verdiği ölçüde, uygulamanın kullanımından doğan zararlardan sorumlu değiliz.</p>
<h2>7. Değişiklik ve Sonlandırma</h2>
<p>Uygulamayı istediğimiz zaman değiştirebilir, askıya alabilir veya sonlandırabiliriz.</p>
<h2>8. Koşulların Güncellenmesi</h2>
<p>Gerektiğinde bu koşulları güncelleyebiliriz. Güncellenmiş sürüm bu sayfada yayımlandığında yürürlüğe girer.</p>
<h2>9. Uygulanacak Hukuk</h2>
<p>Bu koşullar Japonya yasalarına tabidir ve uyuşmazlıklar ana iş yerimizdeki mahkemelerin münhasır yargı yetkisine tabidir.</p>
<h2>10. İletişim</h2>
<p>Bu koşullar hakkında sorularınız varsa bizimle şu adresten iletişime geçin:</p>
<p>${CONTACT_LINK}</p>`,
    },
    vi: {
      title: "Điều khoản dịch vụ - HugConverter",
      body: `<h1>Điều khoản dịch vụ</h1>
<p class="last-updated">Cập nhật lần cuối: 3 tháng 3, 2026</p>
<p>Các Điều khoản dịch vụ này điều chỉnh việc sử dụng HugConverter do Hiroya Ishihara cung cấp. Khi sử dụng ứng dụng, bạn đồng ý với các điều khoản này.</p>
<h2>1. Dịch vụ</h2>
<p>Ứng dụng cung cấp tính năng nén video và chuyển đổi timelapse. Mọi xử lý đều được thực hiện trên thiết bị của bạn.</p>
<h2>2. Giá</h2>
<p>Phiên bản miễn phí cho phép lưu tối đa 5 lần mỗi ngày. Pro mở khóa lưu không giới hạn, tất cả preset, điều khiển thủ công và chuyển đổi hàng loạt. Thanh toán được xử lý qua Apple StoreKit.</p>
<h2>3. Khôi phục giao dịch</h2>
<p>Bạn có thể khôi phục các giao dịch trước đó bằng tính năng "Restore Purchases" trong ứng dụng.</p>
<h2>4. Hành vi bị cấm</h2>
<ul>
  <li>Đảo ngược kỹ thuật, dịch ngược hoặc tháo rời ứng dụng</li>
  <li>Sửa đổi trái phép hoặc vượt qua các tính năng bảo mật</li>
  <li>Sử dụng ứng dụng theo cách xâm phạm quyền của bên thứ ba</li>
  <li>Sử dụng trái pháp luật hoặc lạm dụng</li>
</ul>
<h2>5. Sở hữu trí tuệ</h2>
<p>Quyền sở hữu trí tuệ của ứng dụng thuộc về chúng tôi hoặc các chủ sở hữu liên quan. Quyền đối với video gốc vẫn thuộc về chủ sở hữu tương ứng.</p>
<h2>6. Tuyên bố miễn trừ</h2>
<p>Chúng tôi không đảm bảo kết quả chuyển đổi, khả năng tương thích hoặc việc cung cấp ứng dụng không gián đoạn. Trong phạm vi pháp luật cho phép, chúng tôi không chịu trách nhiệm về thiệt hại phát sinh từ việc sử dụng ứng dụng.</p>
<h2>7. Thay đổi và chấm dứt</h2>
<p>Chúng tôi có thể thay đổi, tạm ngưng hoặc chấm dứt ứng dụng bất cứ lúc nào.</p>
<h2>8. Cập nhật điều khoản</h2>
<p>Chúng tôi có thể cập nhật các điều khoản này khi cần. Phiên bản cập nhật có hiệu lực khi được đăng trên trang này.</p>
<h2>9. Luật áp dụng</h2>
<p>Các điều khoản này được điều chỉnh bởi pháp luật Nhật Bản và mọi tranh chấp thuộc thẩm quyền riêng của tòa án tại địa điểm kinh doanh chính của chúng tôi.</p>
<h2>10. Liên hệ</h2>
<p>Nếu bạn có câu hỏi về các điều khoản này, vui lòng liên hệ:</p>
<p>${CONTACT_LINK}</p>`,
    },
    zhHans: {
      title: "服务条款 - HugConverter",
      body: `<h1>服务条款</h1>
<p class="last-updated">最后更新：2026年3月3日</p>
<p>本服务条款适用于由 Hiroya Ishihara 提供的 HugConverter。使用本应用即表示你同意这些条款。</p>
<h2>1. 服务</h2>
<p>应用提供视频压缩和延时视频转换功能。所有处理均在你的设备上完成。</p>
<h2>2. 价格</h2>
<p>免费版每天最多可保存 5 次。Pro 可解锁无限保存、全部预设、手动控制和批量转换。付款通过 Apple StoreKit 处理。</p>
<h2>3. 恢复购买</h2>
<p>你可以通过应用中的“Restore Purchases”功能恢复此前的购买。</p>
<h2>4. 禁止行为</h2>
<ul>
  <li>对应用进行逆向工程、反编译或反汇编</li>
  <li>未经授权修改应用或绕过安全功能</li>
  <li>以侵犯第三方权利的方式使用应用</li>
  <li>将应用用于违法或滥用目的</li>
</ul>
<h2>5. 知识产权</h2>
<p>应用的知识产权归我们或相关权利人所有。原始视频的权利仍归其各自所有者所有。</p>
<h2>6. 免责声明</h2>
<p>我们不保证转换结果、兼容性或应用的持续可用性。在法律允许的范围内，我们不对因使用应用而产生的损害承担责任。</p>
<h2>7. 变更与终止</h2>
<p>我们可随时变更、暂停或终止应用。</p>
<h2>8. 条款更新</h2>
<p>我们可能会在需要时更新这些条款。更新后的条款在发布到本页面时生效。</p>
<h2>9. 适用法律</h2>
<p>本条款受日本法律管辖，争议由我们主要营业地所在地法院专属管辖。</p>
<h2>10. 联系方式</h2>
<p>如果你对这些条款有任何疑问，请通过以下方式联系：</p>
<p>${CONTACT_LINK}</p>`,
    },
    zhHant: {
      title: "服務條款 - HugConverter",
      body: `<h1>服務條款</h1>
<p class="last-updated">最後更新：2026年3月3日</p>
<p>本服務條款適用於由 Hiroya Ishihara 提供的 HugConverter。使用本 App 即表示你同意這些條款。</p>
<h2>1. 服務</h2>
<p>App 提供影片壓縮與縮時影片轉換功能。所有處理都在你的裝置上完成。</p>
<h2>2. 價格</h2>
<p>免費版每天最多可儲存 5 次。Pro 可解鎖無限制儲存、全部預設、手動控制與批次轉換。付款透過 Apple StoreKit 處理。</p>
<h2>3. 還原購買</h2>
<p>你可以透過 App 內的「Restore Purchases」功能還原先前的購買。</p>
<h2>4. 禁止行為</h2>
<ul>
  <li>對 App 進行逆向工程、反編譯或反組譯</li>
  <li>未經授權修改 App 或繞過安全功能</li>
  <li>以侵犯第三方權利的方式使用 App</li>
  <li>將 App 用於違法或濫用目的</li>
</ul>
<h2>5. 智慧財產權</h2>
<p>App 的智慧財產權歸我們或相關權利人所有。原始影片的權利仍屬於其各自所有人。</p>
<h2>6. 免責聲明</h2>
<p>我們不保證轉換結果、相容性或 App 的持續可用性。在法律允許的範圍內，我們不對因使用 App 而產生的損害負責。</p>
<h2>7. 變更與終止</h2>
<p>我們可隨時變更、暫停或終止 App。</p>
<h2>8. 條款更新</h2>
<p>我們可能會在需要時更新這些條款。更新後的條款在本頁面發布時生效。</p>
<h2>9. 準據法</h2>
<p>本條款受日本法律管轄，爭議由我們主要營業所在地法院專屬管轄。</p>
<h2>10. 聯絡方式</h2>
<p>如果你對這些條款有任何疑問，請透過以下方式聯絡：</p>
<p>${CONTACT_LINK}</p>`,
    },
  };

  for (const locale of locales) {
    if (locale.key !== "ja" && locale.key !== "en") {
      termsTranslations[locale.key] = {
        ...termsTranslations[locale.key],
        body: termsTranslations.en.body,
      };
    }
  }

  const localizedTermsBodies = {
    de: `<h1>Nutzungsbedingungen</h1>
<p class="last-updated">Zuletzt aktualisiert: 4. März 2026</p>
<p>Diese Nutzungsbedingungen ("Bedingungen") regeln die Nutzung von HugConverter (die "App"), die von Hiroya Ishihara bereitgestellt wird. Durch die Nutzung der App stimmen Sie diesen Bedingungen zu.</p>
<h2>1. Dienst</h2>
<p>Die App bietet Funktionen zur Videokomprimierung und Zeitraffer-Konvertierung. Die Verarbeitung erfolgt in der Regel auf Ihrem Gerät.</p>
<h2>2. Preise</h2>
<p>Die kostenlose Version erlaubt bis zu 5 Speicherungen pro Tag. Pro schaltet unbegrenzte Speicherungen, alle Presets, manuelle Steuerungen, Stapelkonvertierung und weitere Funktionen frei. Zahlungen fur In-App-Kaufe werden uber Apple StoreKit abgewickelt.</p>
<h2>3. Wiederherstellung von Käufen</h2>
<p>Frühere Käufe können über die Funktion "Restore Purchases" in der App wiederhergestellt werden. Eine Wiederherstellung ist jedoch nicht in jedem Fall garantiert und kann von Ihrer Apple-ID, dem Status des Stores oder anderen Bedingungen abhängen.</p>
<h2>4. Überschreibendes Speichern und Datenverwaltung</h2>
<p>Die App enthält eine Funktion, mit der ein konvertiertes Video gespeichert werden kann, indem das Originalvideo überschrieben wird. Wenn Sie das überschreibende Speichern wählen, können die ursprünglichen Videodaten durch die konvertierte Datei ersetzt werden und möglicherweise nicht wiederherstellbar sein.</p>
<p>Bevor Sie das überschreibende Speichern oder eine andere irreversible Aktion verwenden, sind Sie dafür verantwortlich, bei Bedarf selbst eine Sicherung der Originaldaten anzulegen. Wir garantieren keine Wiederherstellung, keinen erneuten Download, keine Neuerstellung und keine sonstige Wiederbeschaffung von Daten, die durch überschreibendes Speichern, Löschen oder andere Handlungen des Nutzers verloren gehen.</p>
<h2>5. Nutzerinhalte und Rechte</h2>
<p>Sie sichern zu, dass Sie das Recht haben, alle Videos oder sonstigen Inhalte rechtmäßig zu nutzen, die über die App verarbeitet werden. Streitigkeiten aufgrund einer Verletzung von Urheberrechten, Persönlichkeitsrechten, Datenschutzrechten oder sonstigen Rechten Dritter sind von Ihnen auf eigene Kosten zu lösen.</p>
<h2>6. Verbotene Handlungen</h2>
<ul>
  <li>Reverse Engineering, Dekompilierung oder Disassemblierung der App</li>
  <li>Unbefugte Änderungen an der App oder das Umgehen oder Stören von Sicherheitsfunktionen</li>
  <li>Die Nutzung der App in einer Weise, die Rechte Dritter verletzt</li>
  <li>Die Nutzung der App für rechtswidrige, missbräuchliche oder unangemessene Zwecke</li>
  <li>Die Beeinträchtigung des Betriebs oder der Bereitstellung der App</li>
</ul>
<h2>7. Geistiges Eigentum</h2>
<p>Alle Urheberrechte, Markenrechte und sonstigen Rechte am geistigen Eigentum an der App gehören uns oder den jeweiligen Rechteinhabern. Rechte an Originalvideos und anderen Ausgangsinhalten verbleiben bei deren jeweiligen Inhabern.</p>
<h2>8. Haftungsausschluss</h2>
<p>Wir übernehmen keine Gewähr für irgendwelche Aspekte der Konvertierungsergebnisse, einschließlich Bildqualität, Tonqualität, Dateigröße, Wiedergabekompatibilität, erfolgreiches Speichern, Vollständigkeit oder Richtigkeit. Die Konvertierung kann zu Qualitätsverlust, fehlendem Ton, verloren gegangenen Metadaten, Wiedergabefehlern oder Speicherfehlern führen.</p>
<p>Die Konvertierung oder Speicherung kann auch aufgrund von unzureichendem Gerätespeicher, Einschränkungen des Betriebssystems oder der Fotomediathek, Berechtigungseinstellungen, Leistungsunterschieden von Geräten, Fehlern, Abstürzen oder anderen Faktoren fehlschlagen.</p>
<p>Soweit nach anwendbarem Recht zulässig, haften wir nicht für Schäden im Zusammenhang mit den vorstehenden Punkten, es sei denn, diese wurden durch unser vorsätzliches Verhalten oder grobe Fahrlässigkeit verursacht.</p>
<h2>9. Abrechnung und Rückerstattungen</h2>
<p>Abrechnung, Belastungen, Rückerstattungen, Zahlungsmethoden und die sonstige Zahlungsabwicklung für In-App-Käufe unterliegen den Bedingungen und Verfahren von Apple. Ob eine Rückerstattung gewährt wird, wird von Apple und nicht von uns entschieden.</p>
<h2>10. Änderungen und Einstellung</h2>
<p>Wir können die App jederzeit ganz oder teilweise ändern, aussetzen oder einstellen.</p>
<h2>11. Aktualisierungen dieser Bedingungen</h2>
<p>Wir können diese Bedingungen bei Bedarf aktualisieren. Aktualisierte Bedingungen werden wirksam, sobald sie auf dieser Seite veröffentlicht werden oder zu einem gesondert angegebenen Zeitpunkt.</p>
<h2>12. Anwendbares Recht und Gerichtsstand</h2>
<p>Diese Bedingungen unterliegen dem Recht Japans. Für Streitigkeiten im Zusammenhang mit diesen Bedingungen oder der App sind in erster Instanz ausschließlich die Gerichte zuständig, die fur unseren Hauptgeschaftssitz zustandig sind.</p>
<h2>13. Kontakt</h2>
<p>Wenn Sie Fragen zu diesen Bedingungen haben, kontaktieren Sie uns bitte unter:</p>
<p>${CONTACT_LINK}</p>`,
    es: `<h1>Términos del servicio</h1>
<p class="last-updated">Última actualización: 4 de marzo de 2026</p>
<p>Estos Términos del servicio ("Términos") regulan el uso de HugConverter (la "App") proporcionada por Hiroya Ishihara. Al usar la App, aceptas estos Términos.</p>
<h2>1. Servicio</h2>
<p>La App ofrece funciones de compresión de video y conversión a timelapse. El procesamiento se realiza, por lo general, en tu dispositivo.</p>
<h2>2. Precios</h2>
<p>La versión gratuita permite hasta 5 guardados por día. Pro desbloquea guardados ilimitados, todos los ajustes preestablecidos, controles manuales, conversión por lotes y otras funciones. Los pagos de compras dentro de la app se procesan a través de Apple StoreKit.</p>
<h2>3. Restauración de compras</h2>
<p>Las compras anteriores pueden restaurarse mediante la función "Restore Purchases" dentro de la App. Sin embargo, la restauración no está garantizada en todos los casos y puede depender de tu Apple ID, del estado de la tienda u otras condiciones.</p>
<h2>4. Guardado con sobrescritura y gestión de datos</h2>
<p>La App incluye una función que permite guardar un video convertido sobrescribiendo el video original. Si eliges guardar con sobrescritura, los datos del video original pueden ser reemplazados por el archivo convertido y pueden no poder recuperarse.</p>
<p>Antes de usar el guardado con sobrescritura o cualquier otra acción irreversible, eres responsable de hacer tu propia copia de seguridad de los datos originales si es necesario. No garantizamos la restauración, la nueva descarga, la regeneración ni ninguna otra forma de recuperación de datos perdidos debido a sobrescritura, eliminación u otras acciones del usuario.</p>
<h2>5. Contenido del usuario y derechos</h2>
<p>Declaras que tienes el derecho legal de usar cualquier video u otro contenido procesado a través de la App. Cualquier disputa derivada de una infracción de derechos de autor, derechos de imagen, privacidad u otros derechos de terceros será tu responsabilidad y deberás resolverla por tu cuenta y costo.</p>
<h2>6. Conductas prohibidas</h2>
<ul>
  <li>Ingeniería inversa, descompilación o desmontaje de la App</li>
  <li>Modificación no autorizada de la App, o eludir o interferir con funciones de seguridad</li>
  <li>Usar la App de una manera que infrinja derechos de terceros</li>
  <li>Usar la App con fines ilegales, abusivos o indebidos</li>
  <li>Interferir con el funcionamiento o la prestación de la App</li>
</ul>
<h2>7. Propiedad intelectual</h2>
<p>Todos los derechos de autor, marcas y demás derechos de propiedad intelectual sobre la App nos pertenecen a nosotros o a los titulares correspondientes. Los derechos sobre los videos originales y otros contenidos fuente permanecen con sus respectivos propietarios.</p>
<h2>8. Descargo de responsabilidad</h2>
<p>No garantizamos ningún aspecto de los resultados de conversión, incluida la calidad de imagen, calidad de sonido, tamaño de archivo, compatibilidad de reproducción, guardado exitoso, integridad o exactitud. La conversión puede causar pérdida de calidad, ausencia de audio, pérdida de metadatos, fallos de reproducción o fallos de guardado.</p>
<p>La conversión o el guardado también pueden fallar debido a falta de espacio en el dispositivo, restricciones del sistema operativo o de la fototeca, ajustes de permisos, diferencias de rendimiento entre dispositivos, errores, cierres inesperados u otros factores.</p>
<p>En la máxima medida permitida por la ley aplicable, no seremos responsables por daños relacionados con lo anterior, excepto cuando hayan sido causados por nuestra conducta dolosa o negligencia grave.</p>
<h2>9. Cobros y reembolsos</h2>
<p>La facturación, los cargos, los reembolsos, los métodos de pago y demás gestión de pagos de las compras dentro de la app están sujetos a los términos y procedimientos de Apple. La elegibilidad para un reembolso la determina Apple, no nosotros.</p>
<h2>10. Cambios y terminación</h2>
<p>Podemos cambiar, suspender o discontinuar total o parcialmente la App en cualquier momento.</p>
<h2>11. Actualizaciones de estos Términos</h2>
<p>Podemos actualizar estos Términos cuando sea necesario. Los Términos actualizados entran en vigor cuando se publiquen en esta página o en cualquier fecha de entrada en vigor que se especifique por separado.</p>
<h2>12. Ley aplicable y jurisdicción</h2>
<p>Estos Términos se rigen por las leyes de Japón. Cualquier disputa relacionada con estos Términos o con la App estará sujeta a la jurisdicción exclusiva, en primera instancia, del tribunal competente sobre nuestro lugar principal de negocio.</p>
<h2>13. Contacto</h2>
<p>Si tienes preguntas sobre estos Términos, contáctanos en:</p>
<p>${CONTACT_LINK}</p>`,
    fr: `<h1>Conditions d'utilisation</h1>
<p class="last-updated">Dernière mise à jour : 4 mars 2026</p>
<p>Les présentes Conditions d'utilisation ("Conditions") régissent votre utilisation de HugConverter (l'"App") fournie par Hiroya Ishihara. En utilisant l'App, vous acceptez ces Conditions.</p>
<h2>1. Service</h2>
<p>L'App fournit des fonctions de compression vidéo et de conversion en timelapse. Le traitement est généralement effectué sur votre appareil.</p>
<h2>2. Tarification</h2>
<p>La version gratuite permet jusqu'à 5 enregistrements par jour. Pro débloque les enregistrements illimités, tous les préréglages, les commandes manuelles, la conversion par lot et d'autres fonctions. Les paiements des achats intégrés sont traités via Apple StoreKit.</p>
<h2>3. Restauration des achats</h2>
<p>Les achats précédents peuvent être restaurés à l'aide de la fonction "Restore Purchases" dans l'App. Toutefois, la restauration n'est pas garantie dans tous les cas et peut dépendre de votre identifiant Apple, de l'état de l'App Store ou d'autres conditions.</p>
<h2>4. Enregistrement par écrasement et gestion des données</h2>
<p>L'App inclut une fonction permettant d'enregistrer une vidéo convertie en écrasant la vidéo d'origine. Si vous choisissez cet enregistrement par écrasement, les données de la vidéo d'origine peuvent être remplacées par le fichier converti et devenir irrécupérables.</p>
<p>Avant d'utiliser l'enregistrement par écrasement ou toute autre action irréversible, il vous appartient d'effectuer votre propre sauvegarde des données d'origine si nécessaire. Nous ne garantissons pas la restauration, le retéléchargement, la régénération ni toute autre récupération des données perdues à la suite d'un écrasement, d'une suppression ou d'autres actions de l'utilisateur.</p>
<h2>5. Contenu utilisateur et droits</h2>
<p>Vous déclarez disposer du droit légal d'utiliser toute vidéo ou tout autre contenu traité via l'App. Tout litige résultant d'une atteinte au droit d'auteur, au droit à l'image, à la vie privée ou à tout autre droit de tiers relève de votre responsabilité et doit être réglé à vos frais.</p>
<h2>6. Utilisations interdites</h2>
<ul>
  <li>Ingénierie inverse, décompilation ou désassemblage de l'App</li>
  <li>Modification non autorisée de l'App, ou contournement ou perturbation des fonctions de sécurité</li>
  <li>Utilisation de l'App d'une manière portant atteinte aux droits de tiers</li>
  <li>Utilisation de l'App à des fins illégales, abusives ou inappropriées</li>
  <li>Interférence avec le fonctionnement ou la fourniture de l'App</li>
</ul>
<h2>7. Propriété intellectuelle</h2>
<p>Tous les droits d'auteur, marques et autres droits de propriété intellectuelle relatifs à l'App nous appartiennent ou appartiennent à leurs titulaires respectifs. Les droits sur les vidéos d'origine et autres contenus sources restent la propriété de leurs titulaires respectifs.</p>
<h2>8. Clause de non-responsabilité</h2>
<p>Nous ne garantissons aucun aspect des résultats de conversion, y compris la qualité d'image, la qualité sonore, la taille du fichier, la compatibilité de lecture, la réussite de l'enregistrement, l'exhaustivité ou l'exactitude. La conversion peut entraîner une perte de qualité, l'absence de son, la perte de métadonnées, un échec de lecture ou un échec d'enregistrement.</p>
<p>La conversion ou l'enregistrement peuvent également échouer en raison d'un espace de stockage insuffisant sur l'appareil, de restrictions du systeme d'exploitation ou de la photothèque, des réglages d'autorisation, de différences de performance entre appareils, de bogues, de plantages ou d'autres facteurs.</p>
<p>Dans toute la mesure permise par le droit applicable, nous ne sommes pas responsables des dommages liés à ce qui précède, sauf s'ils résultent de notre faute intentionnelle ou de notre négligence grave.</p>
<h2>9. Facturation et remboursements</h2>
<p>La facturation, les prélèvements, les remboursements, les moyens de paiement et toute autre gestion des paiements pour les achats intégrés sont soumis aux conditions et procédures d'Apple. L'éligibilité à un remboursement est déterminée par Apple, et non par nous.</p>
<h2>10. Modifications et interruption</h2>
<p>Nous pouvons modifier, suspendre ou interrompre tout ou partie de l'App à tout moment.</p>
<h2>11. Mises à jour des Conditions</h2>
<p>Nous pouvons mettre à jour les présentes Conditions si nécessaire. Les Conditions mises à jour prennent effet lorsqu'elles sont publiées sur cette page ou à toute autre date d'entrée en vigueur indiquée séparément.</p>
<h2>12. Droit applicable et juridiction</h2>
<p>Les présentes Conditions sont régies par le droit japonais. Tout litige lié à ces Conditions ou à l'App relève de la compétence exclusive, en première instance, du tribunal compétent pour notre principal établissement.</p>
<h2>13. Contact</h2>
<p>Si vous avez des questions concernant ces Conditions, veuillez nous contacter à :</p>
<p>${CONTACT_LINK}</p>`,
    id: `<h1>Ketentuan Layanan</h1>
<p class="last-updated">Terakhir diperbarui: 4 Maret 2026</p>
<p>Ketentuan Layanan ini ("Ketentuan") mengatur penggunaan HugConverter ("Aplikasi") yang disediakan oleh Hiroya Ishihara. Dengan menggunakan Aplikasi, Anda menyetujui Ketentuan ini.</p>
<h2>1. Layanan</h2>
<p>Aplikasi menyediakan fitur kompresi video dan konversi timelapse. Pemrosesan pada umumnya dilakukan di perangkat Anda.</p>
<h2>2. Harga</h2>
<p>Versi gratis memungkinkan hingga 5 kali penyimpanan per hari. Pro membuka penyimpanan tanpa batas, semua preset, kontrol manual, konversi batch, dan fitur lainnya. Pembayaran pembelian dalam aplikasi diproses melalui Apple StoreKit.</p>
<h2>3. Pemulihan Pembelian</h2>
<p>Pembelian sebelumnya dapat dipulihkan menggunakan fitur "Restore Purchases" di dalam Aplikasi. Namun, pemulihan tidak dijamin dalam setiap kasus dan dapat bergantung pada Apple ID Anda, status toko, atau kondisi lainnya.</p>
<h2>4. Penyimpanan Timpa dan Pengelolaan Data</h2>
<p>Aplikasi mencakup fitur yang memungkinkan video hasil konversi disimpan dengan menimpa video asli. Jika Anda memilih penyimpanan timpa, data video asli dapat digantikan oleh file hasil konversi dan mungkin tidak dapat dipulihkan.</p>
<p>Sebelum menggunakan penyimpanan timpa atau tindakan irreversibel lainnya, Anda bertanggung jawab untuk membuat cadangan data asli Anda sendiri bila diperlukan. Kami tidak menjamin pemulihan, pengunduhan ulang, pembuatan ulang, atau bentuk pemulihan lain atas data yang hilang karena penimpaan, penghapusan, atau tindakan pengguna lainnya.</p>
<h2>5. Konten Pengguna dan Hak</h2>
<p>Anda menyatakan bahwa Anda memiliki hak yang sah untuk menggunakan video atau konten lain apa pun yang diproses melalui Aplikasi. Setiap sengketa yang timbul akibat pelanggaran hak cipta, hak publisitas, hak privasi, atau hak pihak ketiga lainnya menjadi tanggung jawab Anda untuk diselesaikan dengan biaya Anda sendiri.</p>
<h2>6. Tindakan yang Dilarang</h2>
<ul>
  <li>Rekayasa balik, dekompilasi, atau disassembly Aplikasi</li>
  <li>Modifikasi Aplikasi tanpa izin, atau melewati atau mengganggu fitur keamanan</li>
  <li>Menggunakan Aplikasi dengan cara yang melanggar hak pihak ketiga</li>
  <li>Menggunakan Aplikasi untuk tujuan yang melanggar hukum, abusif, atau tidak semestinya</li>
  <li>Mengganggu pengoperasian atau penyediaan Aplikasi</li>
</ul>
<h2>7. Kekayaan Intelektual</h2>
<p>Semua hak cipta, merek dagang, dan hak kekayaan intelektual lainnya dalam Aplikasi adalah milik kami atau pemegang hak yang sah. Hak atas video asli dan konten sumber lainnya tetap berada pada pemiliknya masing-masing.</p>
<h2>8. Penafian</h2>
<p>Kami tidak menjamin aspek apa pun dari hasil konversi, termasuk kualitas gambar, kualitas suara, ukuran file, kompatibilitas pemutaran, keberhasilan penyimpanan, kelengkapan, atau akurasi. Konversi dapat menyebabkan penurunan kualitas, hilangnya audio, hilangnya metadata, kegagalan pemutaran, atau kegagalan penyimpanan.</p>
<p>Konversi atau penyimpanan juga dapat gagal karena ruang penyimpanan perangkat yang tidak mencukupi, pembatasan sistem operasi atau pustaka foto, pengaturan izin, perbedaan performa perangkat, bug, crash, atau faktor lainnya.</p>
<p>Sejauh diizinkan oleh hukum yang berlaku, kami tidak bertanggung jawab atas kerugian yang terkait dengan hal-hal di atas, kecuali apabila disebabkan oleh kesengajaan atau kelalaian berat dari kami.</p>
<h2>9. Penagihan dan Pengembalian Dana</h2>
<p>Penagihan, biaya, pengembalian dana, metode pembayaran, dan penanganan pembayaran lainnya untuk pembelian dalam aplikasi tunduk pada syarat dan prosedur Apple. Kelayakan pengembalian dana ditentukan oleh Apple, bukan oleh kami.</p>
<h2>10. Perubahan dan Penghentian</h2>
<p>Kami dapat mengubah, menangguhkan, atau menghentikan seluruh atau sebagian Aplikasi kapan saja.</p>
<h2>11. Pembaruan Ketentuan Ini</h2>
<p>Kami dapat memperbarui Ketentuan ini bila diperlukan. Ketentuan yang diperbarui berlaku saat dipublikasikan di halaman ini atau pada tanggal berlaku lain yang ditentukan secara terpisah.</p>
<h2>12. Hukum yang Berlaku dan Yurisdiksi</h2>
<p>Ketentuan ini diatur oleh hukum Jepang. Setiap sengketa yang berkaitan dengan Ketentuan ini atau Aplikasi tunduk pada yurisdiksi eksklusif, pada tingkat pertama, pengadilan yang berwenang atas tempat usaha utama kami.</p>
<h2>13. Kontak</h2>
<p>Jika Anda memiliki pertanyaan tentang Ketentuan ini, silakan hubungi kami di:</p>
<p>${CONTACT_LINK}</p>`,
    it: `<h1>Termini di servizio</h1>
<p class="last-updated">Ultimo aggiornamento: 4 marzo 2026</p>
<p>I presenti Termini di servizio ("Termini") regolano l'uso di HugConverter (l'"App") fornita da Hiroya Ishihara. Utilizzando l'App, accetti i presenti Termini.</p>
<h2>1. Servizio</h2>
<p>L'App fornisce funzioni di compressione video e conversione timelapse. L'elaborazione viene generalmente eseguita sul tuo dispositivo.</p>
<h2>2. Prezzi</h2>
<p>La versione gratuita consente fino a 5 salvataggi al giorno. Pro sblocca salvataggi illimitati, tutti i preset, i controlli manuali, la conversione batch e altre funzioni. I pagamenti degli acquisti in-app vengono elaborati tramite Apple StoreKit.</p>
<h2>3. Ripristino degli acquisti</h2>
<p>Gli acquisti precedenti possono essere ripristinati utilizzando la funzione "Restore Purchases" nell'App. Tuttavia, il ripristino non è garantito in ogni caso e può dipendere dal tuo ID Apple, dallo stato dello store o da altre condizioni.</p>
<h2>4. Salvataggio con sovrascrittura e gestione dei dati</h2>
<p>L'App include una funzione che consente di salvare un video convertito sovrascrivendo il video originale. Se scegli il salvataggio con sovrascrittura, i dati del video originale possono essere sostituiti dal file convertito e potrebbero non essere recuperabili.</p>
<p>Prima di usare il salvataggio con sovrascrittura o qualsiasi altra azione irreversibile, sei responsabile di eseguire una tua copia di backup dei dati originali, se necessario. Non garantiamo il ripristino, il nuovo download, la rigenerazione o qualsiasi altra forma di recupero dei dati persi a causa di sovrascrittura, eliminazione o altre azioni dell'utente.</p>
<h2>5. Contenuti dell'utente e diritti</h2>
<p>Dichiari di avere il diritto legale di utilizzare qualsiasi video o altro contenuto elaborato tramite l'App. Qualsiasi controversia derivante dalla violazione di copyright, diritti di immagine, diritti alla privacy o altri diritti di terzi è di tua responsabilità e deve essere risolta a tue spese.</p>
<h2>6. Condotte vietate</h2>
<ul>
  <li>Reverse engineering, decompilazione o disassemblaggio dell'App</li>
  <li>Modifica non autorizzata dell'App, o elusione o interferenza con le funzioni di sicurezza</li>
  <li>Uso dell'App in modo da violare i diritti di terzi</li>
  <li>Uso dell'App per finalità illegali, abusive o improprie</li>
  <li>Interferire con il funzionamento o la fornitura dell'App</li>
</ul>
<h2>7. Proprietà intellettuale</h2>
<p>Tutti i diritti d'autore, i marchi e gli altri diritti di proprietà intellettuale relativi all'App appartengono a noi o ai legittimi titolari. I diritti sui video originali e sugli altri contenuti di origine restano ai rispettivi proprietari.</p>
<h2>8. Esclusione di responsabilità</h2>
<p>Non garantiamo alcun aspetto dei risultati della conversione, inclusi qualità dell'immagine, qualità del suono, dimensione del file, compatibilità di riproduzione, corretto salvataggio, completezza o accuratezza. La conversione può causare perdita di qualità, audio mancante, perdita di metadati, mancata riproduzione o salvataggio non riuscito.</p>
<p>La conversione o il salvataggio possono inoltre non riuscire a causa di spazio insufficiente sul dispositivo, restrizioni del sistema operativo o della libreria foto, impostazioni dei permessi, differenze di prestazioni del dispositivo, bug, arresti anomali o altri fattori.</p>
<p>Nella misura massima consentita dalla legge applicabile, non siamo responsabili per danni relativi a quanto sopra, salvo che siano causati da nostro dolo o colpa grave.</p>
<h2>9. Fatturazione e rimborsi</h2>
<p>Fatturazione, addebiti, rimborsi, metodi di pagamento e qualsiasi altra gestione dei pagamenti per gli acquisti in-app sono soggetti ai termini e alle procedure di Apple. L'idoneità a un rimborso è determinata da Apple, non da noi.</p>
<h2>10. Modifiche e cessazione</h2>
<p>Possiamo modificare, sospendere o interrompere in qualsiasi momento l'App, in tutto o in parte.</p>
<h2>11. Aggiornamenti dei presenti Termini</h2>
<p>Possiamo aggiornare i presenti Termini quando necessario. I Termini aggiornati diventano efficaci quando vengono pubblicati su questa pagina o in qualsiasi altra data di efficacia specificata separatamente.</p>
<h2>12. Legge applicabile e foro competente</h2>
<p>I presenti Termini sono disciplinati dalle leggi del Giappone. Qualsiasi controversia relativa ai presenti Termini o all'App sarà soggetta alla giurisdizione esclusiva, in primo grado, del tribunale competente per la nostra sede principale.</p>
<h2>13. Contatti</h2>
<p>Se hai domande sui presenti Termini, contattaci a:</p>
<p>${CONTACT_LINK}</p>`,
    ko: `<h1>이용 약관</h1>
<p class="last-updated">최종 업데이트: 2026년 3월 4일</p>
<p>본 이용 약관("약관")은 Hiroya Ishihara가 제공하는 HugConverter("앱")의 이용에 적용됩니다. 앱을 사용하면 본 약관에 동의한 것으로 간주됩니다.</p>
<h2>1. 서비스</h2>
<p>앱은 동영상 압축 및 타임랩스 변환 기능을 제공합니다. 처리는 일반적으로 사용자의 기기에서 수행됩니다.</p>
<h2>2. 요금</h2>
<p>무료 버전은 하루 최대 5회 저장할 수 있습니다. Pro는 무제한 저장, 모든 프리셋, 수동 제어, 일괄 변환 및 기타 기능을 제공합니다. 앱 내 구입 결제는 Apple StoreKit을 통해 처리됩니다.</p>
<h2>3. 구매 복원</h2>
<p>이전 구매 내역은 앱 내 "Restore Purchases" 기능을 통해 복원할 수 있습니다. 다만, 복원은 모든 경우에 보장되지 않으며 Apple ID, 스토어 상태 또는 기타 조건에 따라 달라질 수 있습니다.</p>
<h2>4. 덮어쓰기 저장 및 데이터 관리</h2>
<p>앱에는 변환된 동영상을 원본 동영상을 덮어써서 저장하는 기능이 포함되어 있습니다. 덮어쓰기 저장을 선택하면 원본 동영상 데이터가 변환된 파일로 대체될 수 있으며, 다시 복구하지 못할 수 있습니다.</p>
<p>덮어쓰기 저장 또는 기타 되돌릴 수 없는 작업을 사용하기 전에, 필요한 경우 원본 데이터를 직접 백업할 책임은 사용자에게 있습니다. 당사는 덮어쓰기 저장, 삭제 또는 기타 사용자 조작으로 인해 손실된 데이터의 복원, 재다운로드, 재생성 또는 기타 어떠한 복구도 보장하지 않습니다.</p>
<h2>5. 사용자 콘텐츠 및 권리</h2>
<p>사용자는 앱을 통해 처리되는 모든 동영상 또는 기타 콘텐츠를 적법하게 사용할 권리가 있음을 진술하고 보장합니다. 저작권, 퍼블리시티권, 프라이버시권 또는 기타 제3자의 권리 침해로 인해 발생하는 분쟁은 사용자가 자신의 비용으로 해결해야 합니다.</p>
<h2>6. 금지 행위</h2>
<ul>
  <li>앱의 리버스 엔지니어링, 디컴파일 또는 디스어셈블</li>
  <li>앱의 무단 수정, 또는 보안 기능의 우회 또는 방해</li>
  <li>제3자의 권리를 침해하는 방식으로 앱을 사용하는 행위</li>
  <li>불법적이거나 남용적이거나 부적절한 목적으로 앱을 사용하는 행위</li>
  <li>앱의 운영 또는 제공을 방해하는 행위</li>
</ul>
<h2>7. 지식재산권</h2>
<p>앱에 관한 모든 저작권, 상표권 및 기타 지식재산권은 당사 또는 정당한 권리자에게 귀속됩니다. 원본 동영상 및 기타 원천 콘텐츠에 대한 권리는 각 권리자에게 그대로 귀속됩니다.</p>
<h2>8. 면책</h2>
<p>당사는 화질, 음질, 파일 크기, 재생 호환성, 저장 성공 여부, 완전성 또는 정확성을 포함하여 변환 결과의 어떠한 측면도 보장하지 않습니다. 변환 과정에서 화질 저하, 오디오 누락, 메타데이터 손실, 재생 실패 또는 저장 실패가 발생할 수 있습니다.</p>
<p>또한 기기 저장 공간 부족, 운영체제 또는 사진 보관함 제한, 권한 설정, 기기 성능 차이, 버그, 충돌 또는 기타 요인으로 인해 변환 또는 저장이 실패할 수 있습니다.</p>
<p>적용 법률이 허용하는 최대 한도 내에서, 위 사항과 관련된 손해에 대해 당사는 책임을 지지 않습니다. 다만, 당사의 고의 또는 중대한 과실로 발생한 경우는 예외로 합니다.</p>
<h2>9. 청구 및 환불</h2>
<p>앱 내 구입의 청구, 결제, 환불, 결제 수단 및 기타 결제 처리는 Apple의 조건 및 절차를 따릅니다. 환불 가능 여부는 당사가 아니라 Apple이 판단합니다.</p>
<h2>10. 변경 및 종료</h2>
<p>당사는 언제든지 앱의 전부 또는 일부를 변경, 중단 또는 종료할 수 있습니다.</p>
<h2>11. 약관의 업데이트</h2>
<p>당사는 필요에 따라 본 약관을 업데이트할 수 있습니다. 업데이트된 약관은 이 페이지에 게시되는 시점 또는 별도로 명시된 효력 발생일에 효력이 발생합니다.</p>
<h2>12. 준거법 및 관할</h2>
<p>본 약관은 일본법의 적용을 받습니다. 본 약관 또는 앱과 관련된 분쟁은 당사 주된 영업소 소재지를 관할하는 법원을 제1심 전속 관할 법원으로 합니다.</p>
<h2>13. 문의</h2>
<p>본 약관에 관한 문의가 있으시면 아래로 연락해 주세요.</p>
<p>${CONTACT_LINK}</p>`,
    pt: `<h1>Termos de serviço</h1>
<p class="last-updated">Última atualização: 4 de março de 2026</p>
<p>Estes Termos de serviço ("Termos") regem o uso do HugConverter (o "App") fornecido por Hiroya Ishihara. Ao usar o App, você concorda com estes Termos.</p>
<h2>1. Serviço</h2>
<p>O App oferece recursos de compressão de vídeo e conversão para timelapse. O processamento geralmente é realizado no seu dispositivo.</p>
<h2>2. Preços</h2>
<p>A versão gratuita permite até 5 salvamentos por dia. Pro desbloqueia salvamentos ilimitados, todos os presets, controles manuais, conversão em lote e outros recursos. Os pagamentos de compras dentro do app são processados pelo Apple StoreKit.</p>
<h2>3. Restauração de compras</h2>
<p>Compras anteriores podem ser restauradas usando a função "Restore Purchases" no App. No entanto, a restauração não é garantida em todos os casos e pode depender do seu Apple ID, do status da loja ou de outras condições.</p>
<h2>4. Salvamento com sobrescrita e gerenciamento de dados</h2>
<p>O App inclui um recurso que permite salvar um vídeo convertido sobrescrevendo o vídeo original. Se você optar pelo salvamento com sobrescrita, os dados do vídeo original podem ser substituídos pelo arquivo convertido e talvez não possam ser recuperados.</p>
<p>Antes de usar o salvamento com sobrescrita ou qualquer outra ação irreversível, você é responsável por fazer seu próprio backup dos dados originais, se necessário. Não garantimos restauração, novo download, regeneração ou qualquer outra forma de recuperação de dados perdidos devido a sobrescrita, exclusão ou outras ações do usuário.</p>
<h2>5. Conteúdo do usuário e direitos</h2>
<p>Você declara que tem o direito legal de usar quaisquer vídeos ou outros conteúdos processados pelo App. Qualquer disputa decorrente de violação de direitos autorais, direitos de imagem, direitos de privacidade ou quaisquer outros direitos de terceiros é de sua responsabilidade e deve ser resolvida por sua conta e custo.</p>
<h2>6. Condutas proibidas</h2>
<ul>
  <li>Engenharia reversa, descompilação ou desmontagem do App</li>
  <li>Modificação não autorizada do App, ou burlar ou interferir em recursos de segurança</li>
  <li>Usar o App de forma que infrinja direitos de terceiros</li>
  <li>Usar o App para fins ilegais, abusivos ou inadequados</li>
  <li>Interferir na operação ou no fornecimento do App</li>
</ul>
<h2>7. Propriedade intelectual</h2>
<p>Todos os direitos autorais, marcas e outros direitos de propriedade intelectual do App pertencem a nós ou aos legítimos titulares. Os direitos sobre vídeos originais e outros conteúdos de origem permanecem com seus respectivos proprietários.</p>
<h2>8. Isenção de responsabilidade</h2>
<p>Não garantimos nenhum aspecto dos resultados de conversão, incluindo qualidade de imagem, qualidade de som, tamanho do arquivo, compatibilidade de reprodução, êxito no salvamento, integridade ou precisão. A conversão pode resultar em perda de qualidade, ausência de áudio, perda de metadados, falha de reprodução ou falha ao salvar.</p>
<p>A conversão ou o salvamento também podem falhar devido a falta de armazenamento no dispositivo, restrições do sistema operacional ou da biblioteca de fotos, configurações de permissão, diferenças de desempenho entre dispositivos, bugs, falhas ou outros fatores.</p>
<p>Na máxima medida permitida pela lei aplicável, não somos responsáveis por danos relacionados ao exposto acima, exceto quando causados por dolo ou negligência grave de nossa parte.</p>
<h2>9. Cobrança e reembolsos</h2>
<p>Cobrança, encargos, reembolsos, formas de pagamento e demais operações de pagamento para compras dentro do app estão sujeitos aos termos e procedimentos da Apple. A elegibilidade para reembolso é determinada pela Apple, e não por nós.</p>
<h2>10. Alterações e encerramento</h2>
<p>Podemos alterar, suspender ou descontinuar todo ou parte do App a qualquer momento.</p>
<h2>11. Atualizações destes Termos</h2>
<p>Podemos atualizar estes Termos quando necessário. Os Termos atualizados entram em vigor quando publicados nesta página ou em qualquer data de vigência especificada separadamente.</p>
<h2>12. Lei aplicável e foro</h2>
<p>Estes Termos são regidos pelas leis do Japão. Qualquer disputa relacionada a estes Termos ou ao App estará sujeita à jurisdição exclusiva, em primeira instância, do tribunal competente sobre nosso principal local de negócios.</p>
<h2>13. Contato</h2>
<p>Se você tiver dúvidas sobre estes Termos, entre em contato em:</p>
<p>${CONTACT_LINK}</p>`,
    ru: `<h1>Условия использования</h1>
<p class="last-updated">Последнее обновление: 4 марта 2026 г.</p>
<p>Настоящие Условия использования ("Условия") регулируют использование HugConverter ("Приложение"), предоставляемого Hiroya Ishihara. Используя Приложение, вы соглашаетесь с настоящими Условиями.</p>
<h2>1. Сервис</h2>
<p>Приложение предоставляет функции сжатия видео и преобразования в таймлапс. Обработка, как правило, выполняется на вашем устройстве.</p>
<h2>2. Стоимость</h2>
<p>Бесплатная версия позволяет сохранять до 5 раз в день. Pro открывает неограниченные сохранения, все пресеты, ручные настройки, пакетную обработку и другие функции. Оплата встроенных покупок обрабатывается через Apple StoreKit.</p>
<h2>3. Восстановление покупок</h2>
<p>Предыдущие покупки можно восстановить с помощью функции "Restore Purchases" в Приложении. Однако восстановление не гарантируется во всех случаях и может зависеть от вашего Apple ID, состояния магазина или иных условий.</p>
<h2>4. Сохранение с перезаписью и управление данными</h2>
<p>Приложение включает функцию, позволяющую сохранить преобразованное видео с перезаписью исходного видео. Если вы выбираете сохранение с перезаписью, данные исходного видео могут быть заменены преобразованным файлом и могут оказаться невосстановимыми.</p>
<p>Перед использованием сохранения с перезаписью или любого другого необратимого действия вы обязаны при необходимости самостоятельно создать резервную копию исходных данных. Мы не гарантируем восстановление, повторную загрузку, повторное создание или любой иной способ возврата данных, утраченных из-за перезаписи, удаления или иных действий пользователя.</p>
<h2>5. Пользовательский контент и права</h2>
<p>Вы заявляете, что обладаете законным правом использовать любые видео или иной контент, обрабатываемые через Приложение. Любые споры, возникающие из-за нарушения авторских прав, прав на изображение, права на неприкосновенность частной жизни или иных прав третьих лиц, являются вашей ответственностью и должны разрешаться вами за свой счет.</p>
<h2>6. Запрещенные действия</h2>
<ul>
  <li>Обратная разработка, декомпиляция или дизассемблирование Приложения</li>
  <li>Несанкционированное изменение Приложения либо обход или вмешательство в функции безопасности</li>
  <li>Использование Приложения способом, нарушающим права третьих лиц</li>
  <li>Использование Приложения в незаконных, злоупотребляющих или ненадлежащих целях</li>
  <li>Вмешательство в работу или предоставление Приложения</li>
</ul>
<h2>7. Интеллектуальная собственность</h2>
<p>Все авторские права, товарные знаки и иные права интеллектуальной собственности на Приложение принадлежат нам или законным правообладателям. Права на исходные видео и иной исходный контент остаются за соответствующими владельцами.</p>
<h2>8. Отказ от ответственности</h2>
<p>Мы не гарантируем никакие аспекты результатов конвертации, включая качество изображения, качество звука, размер файла, совместимость воспроизведения, успешное сохранение, полноту или точность. Конвертация может привести к ухудшению качества, отсутствию звука, потере метаданных, сбою воспроизведения или ошибке сохранения.</p>
<p>Конвертация или сохранение также могут завершиться неудачно из-за недостатка места на устройстве, ограничений операционной системы или медиатеки, настроек разрешений, различий в производительности устройств, ошибок, сбоев приложения или иных факторов.</p>
<p>В максимально допустимой применимым законодательством степени мы не несем ответственности за убытки, связанные с вышеуказанным, за исключением случаев, когда они вызваны нашим умышленным поведением или грубой неосторожностью.</p>
<h2>9. Оплата и возвраты</h2>
<p>Оплата, списания, возвраты, способы оплаты и иная обработка платежей для встроенных покупок регулируются условиями и процедурами Apple. Возможность возврата определяется Apple, а не нами.</p>
<h2>10. Изменения и прекращение</h2>
<p>Мы можем в любое время изменить, приостановить или прекратить полностью или частично работу Приложения.</p>
<h2>11. Обновление настоящих Условий</h2>
<p>Мы можем обновлять настоящие Условия по мере необходимости. Обновленные Условия вступают в силу после публикации на этой странице или в иную отдельно указанную дату вступления в силу.</p>
<h2>12. Применимое право и подсудность</h2>
<p>Настоящие Условия регулируются законодательством Японии. Любой спор, связанный с настоящими Условиями или Приложением, подлежит исключительной юрисдикции суда первой инстанции, компетентного по месту нахождения нашего основного офиса.</p>
<h2>13. Контакты</h2>
<p>Если у вас есть вопросы по настоящим Условиям, свяжитесь с нами:</p>
<p>${CONTACT_LINK}</p>`,
    th: `<h1>ข้อกำหนดการใช้งาน</h1>
<p class="last-updated">อัปเดตล่าสุด: 4 มีนาคม 2026</p>
<p>ข้อกำหนดการใช้งานนี้ ("ข้อกำหนด") ใช้กับการใช้งาน HugConverter ("แอป") ที่ให้บริการโดย Hiroya Ishihara เมื่อคุณใช้แอป ถือว่าคุณยอมรับข้อกำหนดนี้</p>
<h2>1. บริการ</h2>
<p>แอปมีฟีเจอร์บีบอัดวิดีโอและแปลงเป็นไทม์แลปส์ โดยทั่วไปการประมวลผลจะทำบนอุปกรณ์ของคุณ</p>
<h2>2. ราคา</h2>
<p>เวอร์ชันฟรีบันทึกได้สูงสุด 5 ครั้งต่อวัน Pro ปลดล็อกการบันทึกไม่จำกัด พรีเซ็ตทั้งหมด การควบคุมแบบแมนนวล การแปลงแบบกลุ่ม และฟีเจอร์อื่น ๆ การชำระเงินสำหรับการซื้อภายในแอปดำเนินการผ่าน Apple StoreKit</p>
<h2>3. การกู้คืนการซื้อ</h2>
<p>การซื้อก่อนหน้าสามารถกู้คืนได้ผ่านฟีเจอร์ "Restore Purchases" ภายในแอป อย่างไรก็ตาม การกู้คืนไม่ได้รับประกันในทุกกรณี และอาจขึ้นอยู่กับ Apple ID ของคุณ สถานะของสโตร์ หรือเงื่อนไขอื่น ๆ</p>
<h2>4. การบันทึกแบบเขียนทับและการจัดการข้อมูล</h2>
<p>แอปมีฟีเจอร์ที่ให้บันทึกวิดีโอที่แปลงแล้วโดยเขียนทับวิดีโอต้นฉบับ หากคุณเลือกการบันทึกแบบเขียนทับ ข้อมูลวิดีโอต้นฉบับอาจถูกแทนที่ด้วยไฟล์ที่แปลงแล้ว และอาจไม่สามารถกู้คืนได้</p>
<p>ก่อนใช้การบันทึกแบบเขียนทับหรือการกระทำอื่นใดที่ไม่อาจย้อนกลับได้ คุณมีหน้าที่ต้องสำรองข้อมูลต้นฉบับด้วยตนเองหากจำเป็น เราไม่รับประกันการกู้คืน การดาวน์โหลดซ้ำ การสร้างใหม่ หรือการกู้ข้อมูลในรูปแบบอื่นใดสำหรับข้อมูลที่สูญหายจากการเขียนทับ การลบ หรือการกระทำอื่นของผู้ใช้</p>
<h2>5. เนื้อหาของผู้ใช้และสิทธิ</h2>
<p>คุณรับรองว่าคุณมีสิทธิโดยชอบด้วยกฎหมายในการใช้วิดีโอหรือเนื้อหาอื่นใดที่ประมวลผลผ่านแอป ข้อพิพาทใด ๆ ที่เกิดจากการละเมิดลิขสิทธิ์ สิทธิในภาพลักษณ์ สิทธิความเป็นส่วนตัว หรือสิทธิของบุคคลที่สามอื่น ๆ เป็นความรับผิดชอบของคุณและต้องจัดการด้วยค่าใช้จ่ายของคุณเอง</p>
<h2>6. การกระทำที่ต้องห้าม</h2>
<ul>
  <li>การทำวิศวกรรมย้อนกลับ ถอดคอมไพล์ หรือแยกส่วนแอป</li>
  <li>การแก้ไขแอปโดยไม่ได้รับอนุญาต หรือการหลีกเลี่ยงหรือรบกวนฟีเจอร์ด้านความปลอดภัย</li>
  <li>การใช้แอปในลักษณะที่ละเมิดสิทธิของบุคคลที่สาม</li>
  <li>การใช้แอปเพื่อวัตถุประสงค์ที่ผิดกฎหมาย เป็นการละเมิด หรือไม่เหมาะสม</li>
  <li>การรบกวนการทำงานหรือการให้บริการของแอป</li>
</ul>
<h2>7. ทรัพย์สินทางปัญญา</h2>
<p>ลิขสิทธิ์ เครื่องหมายการค้า และสิทธิในทรัพย์สินทางปัญญาอื่นทั้งหมดในแอปเป็นของเราหรือผู้ทรงสิทธิที่ชอบด้วยกฎหมาย สิทธิในวิดีโอต้นฉบับและเนื้อหาต้นทางอื่น ๆ ยังคงเป็นของเจ้าของที่เกี่ยวข้อง</p>
<h2>8. ข้อจำกัดความรับผิดชอบ</h2>
<p>เราไม่รับประกันผลลัพธ์ของการแปลงในทุกด้าน รวมถึงคุณภาพภาพ คุณภาพเสียง ขนาดไฟล์ ความเข้ากันได้ในการเล่น ความสำเร็จในการบันทึก ความครบถ้วน หรือความถูกต้อง การแปลงอาจทำให้คุณภาพลดลง เสียงหาย เมทาดาทาหาย เล่นไม่ได้ หรือบันทึกไม่สำเร็จ</p>
<p>การแปลงหรือการบันทึกอาจล้มเหลวได้เช่นกันจากพื้นที่จัดเก็บในอุปกรณ์ไม่เพียงพอ ข้อจำกัดของระบบปฏิบัติการหรือคลังรูปภาพ การตั้งค่าสิทธิ์ ความแตกต่างด้านประสิทธิภาพของอุปกรณ์ บั๊ก การแครช หรือปัจจัยอื่น ๆ</p>
<p>ภายใต้ขอบเขตสูงสุดที่กฎหมายที่ใช้บังคับอนุญาต เราไม่รับผิดชอบต่อความเสียหายที่เกี่ยวข้องกับเรื่องข้างต้น เว้นแต่จะเกิดจากการกระทำโดยเจตนาหรือความประมาทเลินเล่ออย่างร้ายแรงของเรา</p>
<h2>9. การเรียกเก็บเงินและการคืนเงิน</h2>
<p>การเรียกเก็บเงิน ค่าธรรมเนียม การคืนเงิน วิธีการชำระเงิน และการจัดการการชำระเงินอื่น ๆ สำหรับการซื้อภายในแอป อยู่ภายใต้เงื่อนไขและขั้นตอนของ Apple การมีสิทธิ์ได้รับเงินคืนจะถูกตัดสินโดย Apple ไม่ใช่โดยเรา</p>
<h2>10. การเปลี่ยนแปลงและการยุติ</h2>
<p>เราอาจเปลี่ยนแปลง ระงับ หรือยุติแอปทั้งหมดหรือบางส่วนได้ทุกเมื่อ</p>
<h2>11. การอัปเดตข้อกำหนดนี้</h2>
<p>เราอาจอัปเดตข้อกำหนดนี้เมื่อจำเป็น ข้อกำหนดที่อัปเดตแล้วจะมีผลเมื่อเผยแพร่บนหน้านี้ หรือในวันที่มีผลใช้บังคับที่ระบุแยกต่างหาก</p>
<h2>12. กฎหมายที่ใช้บังคับและเขตอำนาจศาล</h2>
<p>ข้อกำหนดนี้อยู่ภายใต้กฎหมายญี่ปุ่น ข้อพิพาทใด ๆ ที่เกี่ยวข้องกับข้อกำหนดนี้หรือแอปจะอยู่ภายใต้เขตอำนาจศาลแต่เพียงผู้เดียวของศาลชั้นต้นที่มีอำนาจเหนือสถานประกอบการหลักของเรา</p>
<h2>13. ติดต่อ</h2>
<p>หากคุณมีคำถามเกี่ยวกับข้อกำหนดนี้ โปรดติดต่อเราที่:</p>
<p>${CONTACT_LINK}</p>`,
    tr: `<h1>Hizmet Koşulları</h1>
<p class="last-updated">Son güncelleme: 4 Mart 2026</p>
<p>Bu Hizmet Koşulları ("Koşullar"), Hiroya Ishihara tarafından sağlanan HugConverter ("Uygulama") kullanımınızı düzenler. Uygulamayı kullanarak bu Koşulları kabul etmiş olursunuz.</p>
<h2>1. Hizmet</h2>
<p>Uygulama video sıkıştırma ve timelapse dönüştürme özellikleri sunar. İşleme genellikle cihazınızda gerçekleştirilir.</p>
<h2>2. Fiyatlandırma</h2>
<p>Ücretsiz sürüm günde en fazla 5 kaydetmeye izin verir. Pro, sınırsız kaydetme, tüm hazır ayarlar, manuel kontroller, toplu dönüştürme ve diğer özellikleri açar. Uygulama içi satın alma ödemeleri Apple StoreKit üzerinden işlenir.</p>
<h2>3. Satın Alımları Geri Yükleme</h2>
<p>Önceki satın alımlar, Uygulama içindeki "Restore Purchases" özelliği kullanılarak geri yüklenebilir. Ancak geri yükleme her durumda garanti edilmez ve Apple Kimliğinize, mağaza durumuna veya diğer koşullara bağlı olabilir.</p>
<h2>4. Üzerine Yazarak Kaydetme ve Veri Yönetimi</h2>
<p>Uygulama, dönüştürülen videonun orijinal videonun üzerine yazılarak kaydedilmesine olanak tanıyan bir özellik içerir. Üzerine yazarak kaydetmeyi seçerseniz, orijinal video verileri dönüştürülen dosya ile değiştirilebilir ve geri alınamayabilir.</p>
<p>Üzerine yazarak kaydetme veya geri döndürülemez başka bir işlem kullanmadan önce, gerekliyse orijinal verilerinizi kendiniz yedeklemek sizin sorumluluğunuzdadır. Üzerine yazma, silme veya diğer kullanıcı işlemleri nedeniyle kaybolan verilerin geri yüklenmesini, yeniden indirilmesini, yeniden oluşturulmasını veya başka herhangi bir şekilde kurtarılmasını garanti etmiyoruz.</p>
<h2>5. Kullanıcı İçeriği ve Haklar</h2>
<p>Uygulama üzerinden işlenen video veya diğer içerikleri kullanmak için yasal hakka sahip olduğunuzu beyan edersiniz. Telif hakkı, görüntü hakkı, gizlilik hakkı veya diğer üçüncü taraf haklarının ihlalinden doğan her türlü uyuşmazlığı kendi masraflarınızla çözmek sizin sorumluluğunuzdadır.</p>
<h2>6. Yasaklı Davranışlar</h2>
<ul>
  <li>Uygulamanın tersine mühendisliği, derlemesinin çözülmesi veya ayrıştırılması</li>
  <li>Uygulamanın yetkisiz şekilde değiştirilmesi veya güvenlik özelliklerinin aşılması ya da engellenmesi</li>
  <li>Uygulamanın üçüncü taraf haklarını ihlal edecek şekilde kullanılması</li>
  <li>Uygulamanın yasa dışı, kötüye kullanıma yönelik veya uygunsuz amaçlarla kullanılması</li>
  <li>Uygulamanın çalışmasına veya sunulmasına müdahale edilmesi</li>
</ul>
<h2>7. Fikri Mülkiyet</h2>
<p>Uygulamadaki tüm telif hakları, ticari markalar ve diğer fikri mülkiyet hakları bize veya yasal hak sahiplerine aittir. Orijinal videolar ve diğer kaynak içeriklere ilişkin haklar ilgili sahiplerinde kalır.</p>
<h2>8. Sorumluluk Reddi</h2>
<p>Görüntü kalitesi, ses kalitesi, dosya boyutu, oynatma uyumluluğu, başarılı kaydetme, bütünlük veya doğruluk dahil olmak üzere dönüştürme sonuçlarının hiçbir yönünü garanti etmiyoruz. Dönüştürme, kalite kaybına, sesin eksik olmasına, meta verilerin kaybolmasına, oynatma hatasına veya kaydetme hatasına yol açabilir.</p>
<p>Dönüştürme veya kaydetme; cihazda yetersiz depolama alanı, işletim sistemi veya fotoğraf arşivi kısıtlamaları, izin ayarları, cihaz performansı farklılıkları, hatalar, çökmeler veya diğer etkenler nedeniyle de başarısız olabilir.</p>
<p>Uygulanabilir hukukun izin verdiği en geniş ölçüde, yukarıdaki hususlarla ilgili zararlardan sorumlu değiliz; ancak bunların bizim kasıtlı davranışımız veya ağır ihmalimizden kaynaklanması hali hariçtir.</p>
<h2>9. Faturalandırma ve Geri Ödemeler</h2>
<p>Uygulama içi satın alımlara ilişkin faturalandırma, tahsilatlar, geri ödemeler, ödeme yöntemleri ve diğer ödeme işlemleri Apple'ın şart ve prosedürlerine tabidir. Bir geri ödemenin uygun olup olmadığına Apple karar verir; biz karar vermeyiz.</p>
<h2>10. Değişiklik ve Sonlandırma</h2>
<p>Uygulamanın tamamını veya bir kısmını istediğimiz zaman değiştirebilir, askıya alabilir veya sonlandırabiliriz.</p>
<h2>11. Bu Koşulların Güncellenmesi</h2>
<p>Bu Koşulları gerektiğinde güncelleyebiliriz. Güncellenen Koşullar, bu sayfada yayımlandığında veya ayrıca belirtilen yürürlük tarihinde geçerli olur.</p>
<h2>12. Uygulanacak Hukuk ve Yetki</h2>
<p>Bu Koşullar Japonya yasalarına tabidir. Bu Koşullar veya Uygulama ile ilgili her türlü uyuşmazlık, ilk derece mahkemesi olarak, ana iş yerimiz üzerinde yetkili mahkemenin münhasır yargı yetkisine tabidir.</p>
<h2>13. İletişim</h2>
<p>Bu Koşullar hakkında sorularınız varsa bizimle şu adresten iletişime geçin:</p>
<p>${CONTACT_LINK}</p>`,
    vi: `<h1>Điều khoản dịch vụ</h1>
<p class="last-updated">Cập nhật lần cuối: 4 tháng 3 năm 2026</p>
<p>Các Điều khoản dịch vụ này ("Điều khoản") điều chỉnh việc bạn sử dụng HugConverter ("Ứng dụng") do Hiroya Ishihara cung cấp. Khi sử dụng Ứng dụng, bạn đồng ý với các Điều khoản này.</p>
<h2>1. Dịch vụ</h2>
<p>Ứng dụng cung cấp tính năng nén video và chuyển đổi timelapse. Việc xử lý nhìn chung được thực hiện trên thiết bị của bạn.</p>
<h2>2. Giá</h2>
<p>Phiên bản miễn phí cho phép lưu tối đa 5 lần mỗi ngày. Pro mở khóa lưu không giới hạn, tất cả preset, điều khiển thủ công, chuyển đổi hàng loạt và các tính năng khác. Thanh toán cho giao dịch mua trong ứng dụng được xử lý qua Apple StoreKit.</p>
<h2>3. Khôi phục giao dịch mua</h2>
<p>Các giao dịch mua trước đây có thể được khôi phục bằng tính năng "Restore Purchases" trong Ứng dụng. Tuy nhiên, việc khôi phục không được bảo đảm trong mọi trường hợp và có thể phụ thuộc vào Apple ID của bạn, trạng thái cửa hàng hoặc các điều kiện khác.</p>
<h2>4. Lưu ghi đè và quản lý dữ liệu</h2>
<p>Ứng dụng bao gồm tính năng cho phép lưu video đã chuyển đổi bằng cách ghi đè lên video gốc. Nếu bạn chọn lưu ghi đè, dữ liệu video gốc có thể bị thay thế bởi tệp đã chuyển đổi và có thể không khôi phục được.</p>
<p>Trước khi sử dụng lưu ghi đè hoặc bất kỳ thao tác không thể đảo ngược nào khác, bạn có trách nhiệm tự sao lưu dữ liệu gốc của mình nếu cần. Chúng tôi không bảo đảm việc khôi phục, tải lại, tạo lại hoặc bất kỳ hình thức phục hồi nào khác đối với dữ liệu bị mất do ghi đè, xóa hoặc các hành động khác của người dùng.</p>
<h2>5. Nội dung người dùng và quyền</h2>
<p>Bạn cam đoan rằng bạn có quyền hợp pháp để sử dụng bất kỳ video hoặc nội dung nào khác được xử lý thông qua Ứng dụng. Mọi tranh chấp phát sinh từ việc vi phạm bản quyền, quyền hình ảnh, quyền riêng tư hoặc bất kỳ quyền nào khác của bên thứ ba đều do bạn tự chịu trách nhiệm giải quyết bằng chi phí của mình.</p>
<h2>6. Hành vi bị cấm</h2>
<ul>
  <li>Đảo ngược kỹ thuật, dịch ngược hoặc tháo rời Ứng dụng</li>
  <li>Sửa đổi Ứng dụng trái phép, hoặc vượt qua hay can thiệp vào các tính năng bảo mật</li>
  <li>Sử dụng Ứng dụng theo cách xâm phạm quyền của bên thứ ba</li>
  <li>Sử dụng Ứng dụng cho các mục đích bất hợp pháp, lạm dụng hoặc không phù hợp</li>
  <li>Can thiệp vào việc vận hành hoặc cung cấp Ứng dụng</li>
</ul>
<h2>7. Sở hữu trí tuệ</h2>
<p>Mọi bản quyền, nhãn hiệu và các quyền sở hữu trí tuệ khác đối với Ứng dụng thuộc về chúng tôi hoặc các chủ sở hữu hợp pháp. Quyền đối với video gốc và các nội dung nguồn khác vẫn thuộc về các chủ sở hữu tương ứng.</p>
<h2>8. Tuyên bố miễn trừ</h2>
<p>Chúng tôi không bảo đảm bất kỳ khía cạnh nào của kết quả chuyển đổi, bao gồm chất lượng hình ảnh, chất lượng âm thanh, kích thước tệp, khả năng tương thích phát lại, việc lưu thành công, tính đầy đủ hoặc tính chính xác. Việc chuyển đổi có thể dẫn đến giảm chất lượng, mất âm thanh, mất siêu dữ liệu, lỗi phát lại hoặc lỗi lưu.</p>
<p>Việc chuyển đổi hoặc lưu cũng có thể thất bại do thiếu dung lượng trên thiết bị, hạn chế của hệ điều hành hoặc thư viện ảnh, cài đặt quyền, khác biệt về hiệu năng thiết bị, lỗi, sự cố sập ứng dụng hoặc các yếu tố khác.</p>
<p>Trong phạm vi tối đa được pháp luật áp dụng cho phép, chúng tôi không chịu trách nhiệm đối với các thiệt hại liên quan đến những vấn đề nêu trên, trừ trường hợp do hành vi cố ý hoặc lỗi nghiêm trọng của chúng tôi gây ra.</p>
<h2>9. Thanh toán và hoàn tiền</h2>
<p>Việc thanh toán, các khoản phí, hoàn tiền, phương thức thanh toán và các xử lý thanh toán khác cho giao dịch mua trong ứng dụng phải tuân theo điều khoản và thủ tục của Apple. Việc có đủ điều kiện hoàn tiền hay không do Apple quyết định, không phải chúng tôi.</p>
<h2>10. Thay đổi và chấm dứt</h2>
<p>Chúng tôi có thể thay đổi, tạm ngưng hoặc ngừng cung cấp toàn bộ hoặc một phần Ứng dụng vào bất kỳ lúc nào.</p>
<h2>11. Cập nhật các Điều khoản này</h2>
<p>Chúng tôi có thể cập nhật các Điều khoản này khi cần. Các Điều khoản đã cập nhật có hiệu lực khi được đăng trên trang này hoặc vào ngày có hiệu lực được nêu riêng.</p>
<h2>12. Luật áp dụng và thẩm quyền</h2>
<p>Các Điều khoản này được điều chỉnh bởi pháp luật Nhật Bản. Mọi tranh chấp liên quan đến các Điều khoản này hoặc Ứng dụng sẽ thuộc thẩm quyền riêng của tòa án sơ thẩm có thẩm quyền đối với địa điểm kinh doanh chính của chúng tôi.</p>
<h2>13. Liên hệ</h2>
<p>Nếu bạn có câu hỏi về các Điều khoản này, vui lòng liên hệ:</p>
<p>${CONTACT_LINK}</p>`,
    zhHans: `<h1>服务条款</h1>
<p class="last-updated">最后更新：2026年3月4日</p>
<p>本服务条款（以下简称“本条款”）适用于由 Hiroya Ishihara 提供的 HugConverter（以下简称“本应用”）。使用本应用即表示你同意本条款。</p>
<h2>1. 服务内容</h2>
<p>本应用提供视频压缩和延时视频转换功能。处理通常在你的设备上进行。</p>
<h2>2. 费用</h2>
<p>免费版每天最多可保存 5 次。Pro 可解锁无限保存、全部预设、手动控制、批量转换及其他功能。App 内购付款通过 Apple StoreKit 处理。</p>
<h2>3. 恢复购买</h2>
<p>此前的购买可通过本应用中的“Restore Purchases”功能恢复。但恢复并不保证在所有情况下都成功，可能取决于你的 Apple ID、商店状态或其他条件。</p>
<h2>4. 覆盖保存与数据管理</h2>
<p>本应用包含一项功能，可通过覆盖原始视频来保存转换后的视频。如果你选择覆盖保存，原始视频数据可能会被转换后的文件替换，并且可能无法恢复。</p>
<p>在使用覆盖保存或任何其他不可逆操作之前，如有需要，你应自行备份原始数据。对于因覆盖保存、删除或其他用户操作而丢失的数据，我们不保证提供恢复、重新下载、重新生成或任何其他形式的找回。</p>
<h2>5. 用户内容与权利</h2>
<p>你声明并保证，你对通过本应用处理的任何视频或其他内容拥有合法使用权。因侵犯著作权、肖像权、隐私权或其他第三方权利而产生的任何争议，均由你自行承担责任并自费解决。</p>
<h2>6. 禁止行为</h2>
<ul>
  <li>对本应用进行逆向工程、反编译或反汇编</li>
  <li>未经授权修改本应用，或绕过、干扰安全功能</li>
  <li>以侵犯第三方权利的方式使用本应用</li>
  <li>将本应用用于违法、滥用或不当目的</li>
  <li>干扰本应用的运行或提供</li>
</ul>
<h2>7. 知识产权</h2>
<p>本应用中的所有著作权、商标权及其他知识产权均归我们或合法权利人所有。原始视频及其他源内容的权利仍归其各自所有者所有。</p>
<h2>8. 免责声明</h2>
<p>我们不保证转换结果的任何方面，包括画质、音质、文件大小、播放兼容性、是否保存成功、完整性或准确性。转换可能导致画质下降、音频缺失、元数据丢失、无法播放或保存失败。</p>
<p>转换或保存也可能因设备存储空间不足、操作系统或照片图库限制、权限设置、设备性能差异、错误、崩溃或其他因素而失败。</p>
<p>在适用法律允许的最大范围内，对于与上述事项相关的损害，我们不承担责任，但因我们的故意或重大过失造成的除外。</p>
<h2>9. 计费与退款</h2>
<p>App 内购的计费、扣款、退款、支付方式及其他支付处理，均受 Apple 的条款和流程约束。是否符合退款条件由 Apple 决定，而非由我们决定。</p>
<h2>10. 变更与终止</h2>
<p>我们可随时变更、暂停或终止本应用的全部或部分内容。</p>
<h2>11. 条款更新</h2>
<p>我们可根据需要更新本条款。更新后的条款将在发布于本页面时生效，或在另行注明的生效日期起生效。</p>
<h2>12. 适用法律与管辖</h2>
<p>本条款受日本法律管辖。因本条款或本应用产生的任何争议，应由对我们主要营业地有管辖权的法院作为第一审专属管辖法院。</p>
<h2>13. 联系方式</h2>
<p>如果你对本条款有任何疑问，请通过以下方式联系我们：</p>
<p>${CONTACT_LINK}</p>`,
    zhHant: `<h1>服務條款</h1>
<p class="last-updated">最後更新：2026年3月4日</p>
<p>本服務條款（以下稱「本條款」）適用於由 Hiroya Ishihara 提供的 HugConverter（以下稱「本 App」）。使用本 App 即表示你同意本條款。</p>
<h2>1. 服務內容</h2>
<p>本 App 提供影片壓縮與縮時影片轉換功能。處理通常會在你的裝置上進行。</p>
<h2>2. 費用</h2>
<p>免費版每天最多可儲存 5 次。Pro 可解鎖無限制儲存、全部預設、手動控制、批次轉換及其他功能。App 內購付款透過 Apple StoreKit 處理。</p>
<h2>3. 還原購買</h2>
<p>先前的購買可透過本 App 中的「Restore Purchases」功能還原。但還原並不保證在所有情況下都會成功，可能取決於你的 Apple ID、商店狀態或其他條件。</p>
<h2>4. 覆寫儲存與資料管理</h2>
<p>本 App 包含一項功能，可透過覆寫原始影片來儲存轉換後的影片。如果你選擇覆寫儲存，原始影片資料可能會被轉換後的檔案取代，且可能無法復原。</p>
<p>在使用覆寫儲存或任何其他不可逆操作之前，如有需要，你應自行備份原始資料。對於因覆寫儲存、刪除或其他使用者操作而遺失的資料，我們不保證提供復原、重新下載、重新產生或任何其他形式的找回。</p>
<h2>5. 使用者內容與權利</h2>
<p>你聲明並保證，你對透過本 App 處理的任何影片或其他內容擁有合法使用權。因侵犯著作權、肖像權、隱私權或其他第三方權利而產生的任何爭議，均由你自行承擔責任並自費解決。</p>
<h2>6. 禁止行為</h2>
<ul>
  <li>對本 App 進行逆向工程、反編譯或反組譯</li>
  <li>未經授權修改本 App，或繞過、干擾安全功能</li>
  <li>以侵犯第三方權利的方式使用本 App</li>
  <li>將本 App 用於違法、濫用或不當目的</li>
  <li>干擾本 App 的運作或提供</li>
</ul>
<h2>7. 智慧財產權</h2>
<p>本 App 中的所有著作權、商標權及其他智慧財產權均歸我們或合法權利人所有。原始影片及其他來源內容的權利仍歸其各自所有者所有。</p>
<h2>8. 免責聲明</h2>
<p>我們不保證轉換結果的任何方面，包括畫質、音質、檔案大小、播放相容性、是否儲存成功、完整性或正確性。轉換可能導致畫質下降、音訊缺失、詮釋資料遺失、無法播放或儲存失敗。</p>
<p>轉換或儲存也可能因裝置儲存空間不足、作業系統或照片圖庫限制、權限設定、裝置效能差異、錯誤、當機或其他因素而失敗。</p>
<p>在適用法律允許的最大範圍內，對於與上述事項相關的損害，我們不承擔責任，但因我們的故意或重大過失造成者除外。</p>
<h2>9. 計費與退款</h2>
<p>App 內購的計費、扣款、退款、付款方式及其他付款處理，均受 Apple 的條款與流程約束。是否符合退款資格由 Apple 決定，而非由我們決定。</p>
<h2>10. 變更與終止</h2>
<p>我們可隨時變更、暫停或終止本 App 的全部或部分內容。</p>
<h2>11. 條款更新</h2>
<p>我們可依需要更新本條款。更新後的條款將於發布於本頁面時生效，或自另行註明的生效日期起生效。</p>
<h2>12. 準據法與管轄</h2>
<p>本條款受日本法律管轄。因本條款或本 App 所生的任何爭議，應由對我們主要營業地有管轄權的法院作為第一審專屬管轄法院。</p>
<h2>13. 聯絡方式</h2>
<p>如果你對本條款有任何疑問，請透過以下方式聯絡我們：</p>
<p>${CONTACT_LINK}</p>`,
  };

  for (const [localeKey, body] of Object.entries(localizedTermsBodies)) {
    termsTranslations[localeKey] = {
      ...termsTranslations[localeKey],
      body,
    };
  }

  const termsCardDescriptions = {
    ja: "アプリの利用条件について",
    en: "Conditions for using the App",
    de: "Bedingungen fur die Nutzung der App",
    es: "Condiciones para usar la app",
    fr: "Conditions d'utilisation de l'app",
    id: "Ketentuan penggunaan aplikasi",
    it: "Condizioni per usare l'app",
    ko: "앱 이용 조건 안내",
    pt: "Condicoes para usar o app",
    ru: "Условия использования приложения",
    th: "เงื่อนไขการใช้งานแอป",
    tr: "Uygulamayi kullanma kosullari",
    vi: "Dieu kien su dung ung dung",
    zhHans: "使用本应用的条款说明",
    zhHant: "使用本 App 的條款說明",
  };

  const findLocaleCode = (value) => {
    if (!value) {
      return "ja";
    }

    if (localeMap.has(value)) {
      return value;
    }

    const normalized = value.trim().toLowerCase();
    if (normalizedAliases[normalized]) {
      return normalizedAliases[normalized];
    }

    for (const locale of locales) {
      if (locale.code.toLowerCase() === normalized) {
        return locale.code;
      }
    }

    return "ja";
  };

  const getLocale = () => {
    const params = new URLSearchParams(window.location.search);
    return findLocaleCode(params.get("lang"));
  };

  const buildPageUrl = (filename, localeCode) => {
    if (localeCode === "ja") {
      return filename;
    }

    const url = new URL(filename, window.location.href);
    url.searchParams.set("lang", localeCode);
    return `${url.pathname.split("/").pop()}?${url.searchParams.toString()}`;
  };

  const updateUrl = (localeCode) => {
    const url = new URL(window.location.href);
    if (localeCode === "ja") {
      url.searchParams.delete("lang");
    } else {
      url.searchParams.set("lang", localeCode);
    }
    window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
  };

  const createLanguageSwitch = (currentLocaleCode, currentTranslation, rerender) => {
    const container = document.querySelector(".lang-switch");
    if (!container) {
      return;
    }

    container.textContent = "";

    const label = document.createElement("label");
    label.className = "lang-switch-label";
    label.htmlFor = "lang-select";
    label.textContent = currentTranslation.switchLabel;

    const select = document.createElement("select");
    select.id = "lang-select";
    select.className = "lang-switch-select";
    select.setAttribute("aria-label", currentTranslation.switchLabel);

    for (const locale of locales) {
      const option = document.createElement("option");
      option.value = locale.code;
      option.textContent = locale.label;
      option.selected = locale.code === currentLocaleCode;
      select.appendChild(option);
    }

    select.addEventListener("change", (event) => {
      rerender(event.target.value);
    });

    container.append(label, select);
  };

  const renderIndex = (localeCode, translation) => {
    document.title = "HugConverter";
    const localeKey = localeMap.get(localeCode)?.key || "ja";
    const subtitle = document.querySelector(".header-subtitle");
    if (subtitle) {
      subtitle.textContent = translation.index.subtitle;
    }

    const cardList = document.querySelector(".card-list");
    if (!cardList) {
      return;
    }

    cardList.innerHTML = `
      <a href="${buildPageUrl("privacy.html", localeCode)}" class="card-link">
        <h2>${translation.index.privacyTitle}</h2>
        <p>${translation.index.privacyDescription}</p>
      </a>
      <a href="${buildPageUrl("terms.html", localeCode)}" class="card-link">
        <h2>${translation.index.termsTitle}</h2>
        <p>${termsCardDescriptions[localeKey] || termsCardDescriptions.ja}</p>
      </a>
      <a href="${buildPageUrl("support.html", localeCode)}" class="card-link">
        <h2>${translation.index.supportTitle}</h2>
        <p>${translation.index.supportDescription}</p>
      </a>
    `;
  };

  const renderArticlePage = (page, localeCode, translation) => {
    const resolvedArticleTranslation =
      page === "terms"
        ? termsTranslations[localeMap.get(localeCode)?.key || "ja"]
        : translation[page];
    if (!resolvedArticleTranslation) {
      return;
    }

    document.title = resolvedArticleTranslation.title;

    const backLink = document.querySelector(".back-link");
    if (backLink) {
      backLink.textContent = `\u2190 ${translation.backLabel}`;
      backLink.href = buildPageUrl("index.html", localeCode);
    }

    const article = document.querySelector(".article");
    if (article) {
      article.innerHTML = resolvedArticleTranslation.body;
    }
  };

  const render = (localeCode) => {
    const resolvedLocale = findLocaleCode(localeCode);
    const locale = localeMap.get(resolvedLocale) || localeMap.get("ja");
    const translation = translations[locale.key] || translations.ja;
    const page = document.body.dataset.page;

    document.documentElement.lang = locale.htmlLang;
    updateUrl(locale.code);
    createLanguageSwitch(locale.code, translation, render);

    if (page === "index") {
      renderIndex(locale.code, translation);
      return;
    }

    if (page === "privacy" || page === "support" || page === "terms") {
      renderArticlePage(page, locale.code, translation);
    }
  };

  if (document.body?.dataset.page) {
    render(getLocale());
  }
})();
